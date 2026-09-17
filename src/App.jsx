import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { phases } from './data/phases';
import { questions } from './data/questions';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import PhasePage from './pages/PhasePage';
import { useProgress } from './hooks/useProgress';
import { useQuestionDrafts } from './hooks/useQuestionDrafts';
import { getProgressStats, getRecentActivity, getContinueLearning } from './utils/questionHelpers';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { progress, setCompleted } = useProgress();
  const { drafts, setDraft } = useQuestionDrafts();

  const stats = getProgressStats(questions, phases, progress);
  const recentActivity = getRecentActivity(questions, progress);
  const continueLearning = getContinueLearning(questions, progress);

  const selectedPhaseId = location.pathname.startsWith('/phase/')
    ? location.pathname.replace('/phase/', '')
    : 'dashboard';

  return (
    <div className="layout">
      <Sidebar
        phases={phases}
        selected={selectedPhaseId}
        onNavigate={(id) => navigate(id === 'dashboard' ? '/' : `/phase/${id}`)}
      />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <DashboardPage
                phases={phases}
                stats={stats}
                recentActivity={recentActivity}
                continueLearning={continueLearning}
                onOpenPhase={(phaseId) => navigate(`/phase/${phaseId}`)}
              />
            }
          />
          <Route
            path="/phase/:phaseId"
            element={
              <PhasePage
                phases={phases}
                questions={questions}
                progress={progress}
                drafts={drafts}
                onToggleComplete={setCompleted}
                onSaveDraft={setDraft}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
