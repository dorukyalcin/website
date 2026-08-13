import test from "node:test";
import assert from "node:assert/strict";
import { createSign, generateKeyPairSync } from "node:crypto";
import { verifyAccessJwt } from "./adminAuth";

const { publicKey, privateKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,
});
const { privateKey: otherPrivateKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,
});

const jwk = publicKey.export({ format: "jwk" }) as { n: string; e: string };
const TEAM_DOMAIN = "https://avernsys.cloudflareaccess.com";
const AUD = "test-aud-tag";
const NOW = 1_800_000_000_000;

const fetchJwks = async () => ({
  keys: [{ kid: "key-1", kty: "RSA", n: jwk.n, e: jwk.e }],
});

function makeToken({
  payload = {},
  kid = "key-1",
  signWith = privateKey,
}: {
  payload?: Record<string, unknown>;
  kid?: string;
  signWith?: typeof privateKey;
} = {}): string {
  const header = { alg: "RS256", kid };
  const fullPayload = {
    aud: [AUD],
    iss: TEAM_DOMAIN,
    exp: Math.floor(NOW / 1000) + 3600,
    email: "doruk@avernsys.com",
    ...payload,
  };
  const encode = (value: unknown) =>
    Buffer.from(JSON.stringify(value)).toString("base64url");
  const signingInput = `${encode(header)}.${encode(fullPayload)}`;
  const signer = createSign("RSA-SHA256");
  signer.update(signingInput);
  const signature = signer.sign(signWith).toString("base64url");
  return `${signingInput}.${signature}`;
}

const options = { teamDomain: TEAM_DOMAIN, aud: AUD, fetchJwks, now: NOW };

test("accepts a valid Access token and extracts the email", async () => {
  const result = await verifyAccessJwt(makeToken(), options);
  assert.deepEqual(result, { ok: true, email: "doruk@avernsys.com" });
});

test("rejects a token signed with the wrong key", async () => {
  const result = await verifyAccessJwt(
    makeToken({ signWith: otherPrivateKey }),
    options,
  );
  assert.deepEqual(result, { ok: false, reason: "bad_signature" });
});

test("rejects wrong audience, expiry, and issuer", async () => {
  assert.deepEqual(
    await verifyAccessJwt(makeToken({ payload: { aud: ["other"] } }), options),
    { ok: false, reason: "bad_audience" },
  );
  assert.deepEqual(
    await verifyAccessJwt(
      makeToken({ payload: { exp: Math.floor(NOW / 1000) - 10 } }),
      options,
    ),
    { ok: false, reason: "expired" },
  );
  assert.deepEqual(
    await verifyAccessJwt(
      makeToken({ payload: { iss: "https://evil.example.com" } }),
      options,
    ),
    { ok: false, reason: "bad_issuer" },
  );
});

test("rejects malformed tokens and unknown key ids", async () => {
  assert.deepEqual(await verifyAccessJwt("not-a-jwt", options), {
    ok: false,
    reason: "malformed",
  });
  assert.deepEqual(
    await verifyAccessJwt(makeToken({ kid: "unknown" }), options),
    { ok: false, reason: "unknown_key" },
  );
});
