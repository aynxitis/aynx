/**
 * In-memory sliding-window rate limiter.
 * Tracks request timestamps per IP and enforces a max count within a time window.
 *
 * On Vercel serverless, each cold start resets the store.
 * This is fine for a portfolio — it stops rapid-fire abuse without external deps.
 */

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 3;

const store = new Map<string, number[]>();

// Periodic cleanup to prevent memory leaks on long-lived instances
const CLEANUP_INTERVAL_MS = 60 * 1000; // every 60s
let lastCleanup = Date.now();

function cleanup() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;

  for (const [ip, timestamps] of store.entries()) {
    const valid = timestamps.filter((t) => now - t < WINDOW_MS);
    if (valid.length === 0) {
      store.delete(ip);
    } else {
      store.set(ip, valid);
    }
  }
}

export function rateLimit(ip: string): {
  allowed: boolean;
  retryAfterMs?: number;
} {
  cleanup();

  const now = Date.now();
  const timestamps = (store.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS) {
    const oldestInWindow = timestamps[0];
    const retryAfterMs = WINDOW_MS - (now - oldestInWindow);
    return { allowed: false, retryAfterMs };
  }

  timestamps.push(now);
  store.set(ip, timestamps);
  return { allowed: true };
}
