export const STORAGE_KEYS = {
  progress: 'logicDashboardProgress',
  drafts: 'logicDashboardDrafts',
};

export function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
