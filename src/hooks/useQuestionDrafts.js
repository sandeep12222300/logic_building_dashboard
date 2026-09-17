import { useEffect, useState } from 'react';
import { readStorage, STORAGE_KEYS, writeStorage } from '../utils/storage';

export function useQuestionDrafts() {
  const [drafts, setDrafts] = useState(() => readStorage(STORAGE_KEYS.drafts, {}));

  useEffect(() => {
    writeStorage(STORAGE_KEYS.drafts, drafts);
  }, [drafts]);

  const setDraft = (questionId, code) => {
    setDrafts((prev) => ({
      ...prev,
      [questionId]: code,
    }));
  };

  return { drafts, setDraft };
}
