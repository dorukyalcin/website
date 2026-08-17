# Deploying avernsys.com

The site ships as a Docker Compose stack: the Next.js app, Postgres, and a
`cloudflared` tunnel. No ports are exposed publicly; all traffic enters
through the Cloudflare Tunnel.

## One-time server setup

1. Install Docker (with the compose plugin) on the server.
2. Clone this repository and create the environment file:

   ```sh
   cp .env.example .env
   ```

3. Fill in `.env`:
   - `POSTGRES_PASSWORD` — any strong random string (used only inside the stack).
   - `TUNNEL_TOKEN` — Cloudflare Zero Trust → Networks → Tunnels → create a
     tunnel, copy its token. Add a **public hostname** `avernsys.com` →
     `http://app:3000` in the tunnel config.
   - `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` — Cloudflare
     dashboard → Turnstile → add widget for `avernsys.com`. Without these the
     application form still works but skips the human check.
   - `RESEND_API_KEY`, `APPLICATIONS_FROM_EMAIL`, `APPLICATIONS_NOTIFY_EMAIL` —
     [Resend](https://resend.com): verify the `avernsys.com` sending domain
     (one DNS record), create an API key. `APPLICATIONS_FROM_EMAIL` is what
     candidates see (e.g. `Avernsys <careers@avernsys.com>`);
     `APPLICATIONS_NOTIFY_EMAIL` receives new-application notifications.
     Without these, applications are stored but no email is sent.
   - `CF_ACCESS_TEAM_DOMAIN`, `CF_ACCESS_AUD` — see **Protecting /admin** below.

4. Start the stack:

   ```sh
   docker compose up -d --build
   ```

   The app container applies database migrations automatically on start.

## Protecting /admin (Cloudflare Access)

1. Zero Trust → Access → Applications → **Add application** → Self-hosted.
2. Application domain: `avernsys.com`, path: `/admin`. Add a second
   application (or an additional path) for `/api/admin` with the same policy.
3. Policy: Allow → Include → Emails → your email. Login method: One-time PIN
   or Google.
4. Copy the **Application Audience (AUD) tag** into `CF_ACCESS_AUD`, and set
   `CF_ACCESS_TEAM_DOMAIN` to `https://<your-team>.cloudflareaccess.com`.
5. `docker compose up -d` again to pick up the env change.

The app verifies the Access JWT on every admin page and admin API request.
If the Access variables are unset in production, /admin is disabled entirely
(fail closed), so a forgotten Access setup can never expose candidate data.

## Posting a new opening

Openings live in the repo — publishing one is a deploy. They are grouped by
team in `src/content/openings/` (`engineering.ts`, `data.ts`, `product.ts`,
`gtm.ts`, `internships.ts`); shared defaults (hiring-round dates, the Palo
Alto on-site location, worldwide-remote internships, salary helpers, and the
reusable application questions) live in `src/content/openings/shared.ts`.

1. Copy an existing opening in the matching team file, change the `slug`,
   `salary`, content (all four locales), and questions if needed, and add it
   to that file's exported array (the order there is the display order).
2. Company facts shown on every page (legal name, address, emails, phone,
   office) live in `src/lib/company.ts`.
3. `npm test` (validates locale completeness, salaries, and locations),
   commit, then on the server:

   ```sh
   git pull && docker compose up -d --build
   ```

To stop accepting applications, set `status: "closed"` on the opening and
redeploy — the page stays online (SEO), the form disappears, and the API
rejects late submissions. To move the "apply by" date for the whole round,
change `hiringRound.applyBy` in `shared.ts`.

## Applications data

- Rows live in Postgres (`applications` table), CV PDFs in the `uploads`
  volume, named by application id.
- Review happens at `https://avernsys.com/admin/applications`.
- Deleting an application in the admin removes the database row **and** the
  CV file — use it for GDPR erasure requests. There is no automatic
  retention purge (by design, for now): prune closed-out candidates
  yourself periodically.

## Backups

Everything worth keeping sits in two Docker volumes:

```sh
# Postgres dump
docker compose exec postgres pg_dump -U avernsys avernsys > backup-$(date +%F).sql

# CV files
docker run --rm -v website_uploads:/data -v "$PWD":/backup alpine \
  tar czf /backup/uploads-$(date +%F).tar.gz -C /data .
```

Run both from cron (e.g. daily) and ship the files off the box.

## Local development

```sh
docker run --rm -d --name pg-dev -e POSTGRES_PASSWORD=dev \
  -e POSTGRES_USER=avernsys -e POSTGRES_DB=avernsys \
  -p 127.0.0.1:55432:5432 postgres:17-alpine

cat > .env <<'EOF'
DATABASE_URL=postgres://avernsys:dev@127.0.0.1:55432/avernsys
UPLOAD_DIR=./.uploads
EOF

npm run db:migrate
npm run dev
```

Turnstile, Resend, and Cloudflare Access are all optional in development:
the form skips the captcha, emails are logged and skipped, and /admin is
open on localhost.
