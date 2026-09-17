import { useEffect, useState } from 'react';
import { toDateKey } from '../utils/date';
import { readStorage, STORAGE_KEYS, writeStorage } from '../utils/storage';

export function useProgress() {
  const [progress, setProgress] = useState(() => readStorage(STORAGE_KEYS.progress, {}));

  useEffect(() => {
    writeStorage(STORAGE_KEYS.progress, progress);
  }, [progress]);

  const setCompleted = (questionId, completed) => {
    setProgress((prev) => {
      const next = { ...prev };
      if (completed) {
        next[questionId] = {
          completed: true,
          completedAt: toDateKey(),
        };
      } else {
        delete next[questionId];
      }
      return next;
    });
  };

  return { progress, setCompleted };
}
