// ─── Seen-Question Tracker ────────────────────────────────────────────────────
// Tracks which question IDs the user has already answered across sessions.
// Stored in localStorage so it persists between page refreshes.

const STORAGE_KEY = 'pharmacy_quiz_seen_ids';

/** Return the Set of seen question IDs */
export const getSeenIds = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return new Set(raw ? JSON.parse(raw) : []);
  } catch {
    return new Set();
  }
};

/** Persist the Set back to localStorage */
const saveSeenIds = (set) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
  } catch { /* storage full — ignore */ }
};

/** Mark a list of question IDs as seen */
export const markSeen = (ids) => {
  const seen = getSeenIds();
  ids.forEach(id => seen.add(id));
  saveSeenIds(seen);
};

/**
 * Pick `n` unseen questions from `pool`.
 * If there are fewer than `n` unseen questions, resets history and starts fresh.
 */
export const pickUnseen = (pool, n) => {
  let seen = getSeenIds();
  let unseen = pool.filter(q => !seen.has(q.id));

  // If not enough unseen — reset and start over
  if (unseen.length < n) {
    console.log('[Seen Tracker] Pool exhausted — resetting question history');
    seen = new Set();
    saveSeenIds(seen);
    unseen = [...pool];
  }

  // Shuffle and pick n
  const shuffled = unseen.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

/** How many unseen questions remain */
export const unseenCount = (pool) => {
  const seen = getSeenIds();
  return pool.filter(q => !seen.has(q.id)).length;
};

/** Reset all seen tracking */
export const resetSeenIds = () => {
  localStorage.removeItem(STORAGE_KEY);
};
