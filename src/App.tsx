import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import QuizPage from './phases/Phase1/QuizPage';
import GalleryPage from './phases/Phase2/GalleryPage';
import CardPage from './phases/Phase3/CardPage';

export default function App() {
  const [phase, setPhase] = useState(1);

  return (
    <div className="w-full h-screen overflow-hidden bg-black/5 relative">
      <AnimatePresence mode="wait">
        {phase === 1 && (
          <motion.div
            key="phase1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -100 }}
            className="w-full h-full"
          >
            <QuizPage onComplete={() => setPhase(2)} />
          </motion.div>
        )}

        {phase === 2 && (
          <motion.div
            key="phase2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full h-full"
          >
            <GalleryPage onNext={() => setPhase(3)} />
          </motion.div>
        )}

        {phase === 3 && (
          <motion.div
            key="phase3"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full h-full flex items-center justify-center bg-white"
          >
            <CardPage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
