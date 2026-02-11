import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { WelcomePage } from './components/WelcomePage';
import { QuizPage } from './components/QuizPage';
import { LoadingPage } from './components/LoadingPage';
import { ResultPage } from './components/ResultPage';
import { questions, calculatePersonality } from './data/questions';
import type { AppState } from './types';

function App() {
  const [appState, setAppState] = useState<AppState>('welcome');
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleStart = () => {
    setAppState('quiz');
  };

  const handleQuizComplete = (quizAnswers: Record<number, string>) => {
    setAnswers(quizAnswers);
    setAppState('loading');
    
    // Simulate analysis time
    setTimeout(() => {
      setAppState('result');
    }, 4000);
  };

  const handleRestart = () => {
    setAnswers({});
    setAppState('welcome');
  };

  const renderPage = () => {
    switch (appState) {
      case 'welcome':
        return <WelcomePage onStart={handleStart} />;
      
      case 'quiz':
        return <QuizPage questions={questions} onComplete={handleQuizComplete} />;
      
      case 'loading':
        return <LoadingPage />;
      
      case 'result':
        const personality = calculatePersonality(answers);
        return <ResultPage personality={personality} onRestart={handleRestart} />;
      
      default:
        return <WelcomePage onStart={handleStart} />;
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <AnimatePresence mode="wait">
        {renderPage()}
      </AnimatePresence>
    </div>
  );
}

export default App;
