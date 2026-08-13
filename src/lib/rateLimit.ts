// In-memory sliding-window limiter. The site runs as a single Node process,
// so per-process state is sufficient.
const hits = new Map<string, number[]>();

const MAX_TRACKED_KEYS = 10_000;

export function isRateLimited(
  key: string,
  { limit, windowMs, now = Date.now() }: {
    limit: number;
    windowMs: number;
    now?: number;
  },
): boolean {
  const cutoff = now - windowMs;
  const recent = (hits.get(key) ?? []).filter((time) => time > cutoff);

  if (recent.length >= limit) {
    hits.set(key, recent);
    return true;
  }

  recent.push(now);
  if (!hits.has(key) && hits.size >= MAX_TRACKED_KEYS) {
    hits.clear();
  }
  hits.set(key, recent);
  return false;
}

export function resetRateLimits() {
  hits.clear();
}
