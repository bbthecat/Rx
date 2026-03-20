// ─── API Usage Tracker (localStorage-based) ───────────────────────────────────
// Tracks daily API requests against Gemini 2.0 Flash free tier limits

// Gemini 2.0 Flash free tier limits
export const DAILY_LIMIT = 1500;   // requests per day (RPD)
export const MINUTE_LIMIT = 15;    // requests per minute (RPM)

const STORAGE_KEY = 'pharmacy_quiz_api_usage';
const today = () => new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"

// Get or initialize the usage record for today
export const getUsage = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { date: today(), count: 0, minuteCount: 0, minuteStart: Date.now() };
    const data = JSON.parse(raw);
    // Reset if it's a new day
    if (data.date !== today()) {
      return { date: today(), count: 0, minuteCount: 0, minuteStart: Date.now() };
    }
    return data;
  } catch {
    return { date: today(), count: 0, minuteCount: 0, minuteStart: Date.now() };
  }
};

// Increment count by n calls, return new usage
export const recordApiCall = (n = 1) => {
  const usage = getUsage();
  const now = Date.now();
  // Reset minute counter if over 60 seconds
  const mStart = now - usage.minuteStart < 60_000 ? usage.minuteStart : now;
  const mCount = now - usage.minuteStart < 60_000 ? usage.minuteCount + n : n;

  const updated = {
    date: today(),
    count: usage.count + n,
    minuteCount: mCount,
    minuteStart: mStart,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

// Percentage of daily quota used (0–100)
export const getDailyPercent = () => {
  const { count } = getUsage();
  return Math.min(100, Math.round((count / DAILY_LIMIT) * 100));
};

// Color for the bar based on usage %
export const getUsageColor = (pct) => {
  if (pct < 50) return { bar: '#22c55e', text: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0' }; // green
  if (pct < 80) return { bar: '#f59e0b', text: '#b45309', bg: '#fffbeb', border: '#fde68a' }; // amber
  return { bar: '#ef4444', text: '#dc2626', bg: '#fef2f2', border: '#fecaca' }; // red
};
