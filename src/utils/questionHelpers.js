import { toDateKey } from './date';
import { calculateStreaks } from './streak';

export function getPhaseQuestions(questions, phaseId) {
  return questions.filter((question) => question.phaseId === phaseId);
}

export function groupQuestionsBySection(questions) {
  return questions.reduce((acc, question) => {
    if (!acc[question.section]) {
      acc[question.section] = [];
    }
    acc[question.section].push(question);
    return acc;
  }, {});
}

export function getProgressStats(questions, phases, progress) {
  const solved = questions.filter((question) => progress[question.id]?.completed).length;
  const total = questions.length;
  const todayKey = toDateKey();

  const completionDates = Object.values(progress)
    .filter((item) => item?.completed && item?.completedAt)
    .map((item) => item.completedAt);

  const solvedToday = completionDates.filter((date) => date === todayKey).length;
  const streaks = calculateStreaks(completionDates);

  const phaseStats = phases.map((phase) => {
    const phaseQuestions = questions.filter((question) => question.phaseId === phase.id);
    const phaseSolved = phaseQuestions.filter((question) => progress[question.id]?.completed).length;
    return {
      ...phase,
      total: phaseQuestions.length,
      solved: phaseSolved,
      percent: phaseQuestions.length ? Math.round((phaseSolved / phaseQuestions.length) * 100) : 0,
    };
  });

  return {
    total,
    solved,
    remaining: total - solved,
    percent: total ? Math.round((solved / total) * 100) : 0,
    solvedToday,
    ...streaks,
    phaseStats,
  };
}

export function getRecentActivity(questions, progress) {
  return Object.entries(progress)
    .filter(([, value]) => value.completed && value.completedAt)
    .sort(([, a], [, b]) => b.completedAt.localeCompare(a.completedAt))
    .slice(0, 8)
    .map(([id, value]) => {
      const question = questions.find((item) => item.id === id);
      return {
        id,
        completedAt: value.completedAt,
        title: question?.title ?? id,
        phaseName: question?.phaseName ?? 'Unknown phase',
      };
    });
}

export function getContinueLearning(questions, progress) {
  return questions.find((question) => !progress[question.id]?.completed) ?? null;
}
