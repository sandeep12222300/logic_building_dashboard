import { toDateKey } from './date';

/**
 * A streak means at least one completion happened on a calendar date.
 * We sort distinct completion dates and count consecutive day gaps of exactly 1.
 * Current streak includes today if solved today; otherwise it counts back from the latest completion day.
 */
export function calculateStreaks(completionDates) {
  const uniqueDates = [...new Set(completionDates)].sort();
  if (!uniqueDates.length) {
    return { currentStreak: 0, longestStreak: 0 };
  }

  const msPerDay = 24 * 60 * 60 * 1000;
  const toTime = (key) => new Date(`${key}T00:00:00`).getTime();

  let longestStreak = 1;
  let running = 1;

  for (let i = 1; i < uniqueDates.length; i += 1) {
    if ((toTime(uniqueDates[i]) - toTime(uniqueDates[i - 1])) / msPerDay === 1) {
      running += 1;
      longestStreak = Math.max(longestStreak, running);
    } else {
      running = 1;
    }
  }

  const today = toDateKey();
  let currentStreak = 0;
  let cursor = uniqueDates.length - 1;
  let expected = toTime(uniqueDates[cursor]);

  if (uniqueDates[cursor] !== today) {
    expected = toTime(uniqueDates[cursor]);
  }

  while (cursor >= 0 && toTime(uniqueDates[cursor]) === expected) {
    currentStreak += 1;
    expected -= msPerDay;
    cursor -= 1;
  }

  return { currentStreak, longestStreak };
}
