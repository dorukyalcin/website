import { createPublicKey, verify as cryptoVerify, type KeyObject } from "node:crypto";

// /admin sits behind Cloudflare Access at the edge; this verifies the JWT
// Access attaches to proxied requests so the app never trusts the tunnel
// blindly (defense in depth, and fail-closed if Access is misconfigured).

type Jwk = {
  kid: string;
  kty: string;
  alg?: string;
  n: string;
  e: string;
};

type JwksFetcher = (url: string) => Promise<{ keys: Jwk[] }>;

export type AccessVerifyOptions = {
  teamDomain: string;
  aud: string;
  fetchJwks?: JwksFetcher;
  now?: number;
};

export type AdminAuthResult =
  | { ok: true; email?: string }
  | { ok: false; reason: string };

const JWKS_TTL_MS = 10 * 60 * 1000;
const jwksCache = new Map<string, { keys: Jwk[]; fetchedAt: number }>();

async function defaultFetchJwks(url: string): Promise<{ keys: Jwk[] }> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`jwks fetch failed: ${response.status}`);
  }
  return (await response.json()) as { keys: Jwk[] };
}

function base64UrlDecode(segment: string): Buffer {
  return Buffer.from(segment, "base64url");
}

function decodeJson<T>(segment: string): T | null {
  try {
    return JSON.parse(base64UrlDecode(segment).toString("utf8")) as T;
  } catch {
    return null;
  }
}

async function getSigningKey(
  teamDomain: string,
  kid: string,
  fetchJwks: JwksFetcher,
  now: number,
): Promise<KeyObject | null> {
  const url = `${teamDomain}/cdn-cgi/access/certs`;
  const cached = jwksCache.get(url);
  let keys = cached && now - cached.fetchedAt < JWKS_TTL_MS ? cached.keys : null;

  if (!keys || !keys.some((key) => key.kid === kid)) {
    keys = (await fetchJwks(url)).keys;
    jwksCache.set(url, { keys, fetchedAt: now });
  }

  const jwk = keys.find((key) => key.kid === kid && key.kty === "RSA");
  if (!jwk) {
    return null;
  }
  return createPublicKey({ key: { kty: jwk.kty, n: jwk.n, e: jwk.e }, format: "jwk" });
}

type AccessPayload = {
  aud?: string | string[];
  exp?: number;
  nbf?: number;
  iss?: string;
  email?: string;
};

export async function verifyAccessJwt(
  token: string,
  options: AccessVerifyOptions,
): Promise<AdminAuthResult> {
  const teamDomain = options.teamDomain.replace(/\/+$/, "");
  const fetchJwks = options.fetchJwks ?? defaultFetchJwks;
  const now = options.now ?? Date.now();

  const segments = token.split(".");
  if (segments.length !== 3) {
    return { ok: false, reason: "malformed" };
  }
  const [headerSegment, payloadSegment, signatureSegment] = segments;

  const header = decodeJson<{ alg?: string; kid?: string }>(headerSegment);
  const payload = decodeJson<AccessPayload>(payloadSegment);
  if (!header || !payload || header.alg !== "RS256" || !header.kid) {
    return { ok: false, reason: "malformed" };
  }

  let key: KeyObject | null;
  try {
    key = await getSigningKey(teamDomain, header.kid, fetchJwks, now);
  } catch {
    return { ok: false, reason: "jwks_unavailable" };
  }
  if (!key) {
    return { ok: false, reason: "unknown_key" };
  }

  const signatureValid = cryptoVerify(
    "RSA-SHA256",
    Buffer.from(`${headerSegment}.${payloadSegment}`),
    key,
    base64UrlDecode(signatureSegment),
  );
  if (!signatureValid) {
    return { ok: false, reason: "bad_signature" };
  }

  const audiences = Array.isArray(payload.aud)
    ? payload.aud
    : payload.aud
      ? [payload.aud]
      : [];
  if (!audiences.includes(options.aud)) {
    return { ok: false, reason: "bad_audience" };
  }

  const nowSeconds = Math.floor(now / 1000);
  if (typeof payload.exp !== "number" || payload.exp <= nowSeconds) {
    return { ok: false, reason: "expired" };
  }
  if (typeof payload.nbf === "number" && payload.nbf > nowSeconds + 60) {
    return { ok: false, reason: "not_yet_valid" };
  }
  if (payload.iss && payload.iss.replace(/\/+$/, "") !== teamDomain) {
    return { ok: false, reason: "bad_issuer" };
  }

  return { ok: true, email: payload.email };
}

export async function verifyAdminRequest(
  requestHeaders: Headers,
): Promise<AdminAuthResult> {
  const teamDomain = process.env.CF_ACCESS_TEAM_DOMAIN;
  const aud = process.env.CF_ACCESS_AUD;

  if (!teamDomain || !aud) {
    if (process.env.NODE_ENV === "production") {
      return { ok: false, reason: "not_configured" };
    }
    // Local development runs without Cloudflare Access.
    return { ok: true };
  }

  const token = requestHeaders.get("cf-access-jwt-assertion");
  if (!token) {
    return { ok: false, reason: "missing_token" };
  }

  return verifyAccessJwt(token, { teamDomain, aud });
}
