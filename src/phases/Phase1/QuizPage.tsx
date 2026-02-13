import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Quiz1 from './Quiz1';
import Quiz2 from './Quiz2';
import Quiz3 from './Quiz3';

interface QuizPageProps {
    onComplete: () => void;
}

export default function QuizPage({ onComplete }: QuizPageProps) {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        if (currentStep < 3) {
            setCurrentStep(prev => prev + 1);
        } else {
            onComplete(); // Finish Phase 1 and go to Phase 2
        }
    };

    return (
        <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center p-6 md:p-10 relative overflow-y-auto overflow-x-hidden">
            <HeartsBackground />

            <AnimatePresence mode='wait'>
                {currentStep === 1 && (
                    <motion.div
                        key="quiz1"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-4xl z-10"
                    >
                        <Quiz1 onNext={handleNext} />
                    </motion.div>
                )}

                {currentStep === 2 && (
                    <motion.div
                        key="quiz2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="w-full z-10"
                    >
                        <Quiz2 onNext={handleNext} />
                    </motion.div>
                )}

                {currentStep === 3 && (
                    <motion.div
                        key="quiz3"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-6xl z-10" // Wider container for drag/drop
                    >
                        <Quiz3 onNext={onComplete} />
                    </motion.div>
                )}
            </AnimatePresence>


        </div>
    );
}

function HeartsBackground() {
    // Generate hearts only once
    const hearts = Array.from({ length: 1200 }).map((_, i) => ({
        id: i,
        color: Math.random() > 0.5 ? '#9d4edd' : '#c77dff',
        delay: Math.random() * 2 // Random delay 0-2s
    }));

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <style>
                {`
                @keyframes heartbeat {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.3); }
                }
                `}
            </style>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(28px,1fr))] gap-x-2 gap-y-8 p-4 w-full h-full content-center justify-items-center">
                {hearts.map((h) => (
                    <div key={h.id} className="flex justify-center items-center"
                        style={{
                            animation: `heartbeat ${1.5 + Math.random()}s infinite ease-in-out`,
                            animationDelay: `${h.delay}s`
                        }}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            fill={h.color}
                            className="drop-shadow-sm opacity-90"
                        >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </div>
                ))}
            </div>
        </div>
    );
}
