import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import speedGif from '../../assets/Speed GIF.gif';
import gulatImg from '../../assets/gulat.jpg';
import QuizPaperWrapper from './QuizPaperWrapper';

interface Quiz1Props {
    onNext: () => void;
}

const question = {
    text: "Kelan tayo unang nag usap?",
    options: [
        "September 12 , 2025,  8:30 pm",
        "September 12 , 2025 ,     9:10 pm",
        "September 12 , 2025 ,  10:05 pm",
        "September 12 , 2025 ,  9:27 pm"
    ],
    correctIndex: 1
};

export default function Quiz1({ onNext }: Quiz1Props) {
    const [selected, setSelected] = useState<number | null>(null);
    const [error, setError] = useState(false);
    const [showGif, setShowGif] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Correct index is 1 (Option B)
    const CORRECT_INDEX = 1;

    const handleSubmit = () => {
        if (selected === CORRECT_INDEX) {
            setShowSuccess(true);
            setTimeout(() => {
                onNext();
            }, 3000); // Show success for 3 seconds
        } else {
            setError(true);
            setShowGif(true);
            setTimeout(() => {
                setError(false);
                setShowGif(false);
            }, 2500);
        }
    };

    return (
        <>
            <QuizPaperWrapper title="Question 1" className="font-cabinet">
                <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 text-center font-medium">{question.text}</p>

                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    {question.options.map((opt, i) => (
                        <motion.button
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelected(i)}
                            className={`w-full p-3 md:p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center ${selected === i
                                ? 'bg-rose-50 text-rose-700 border-rose-500 shadow-md'
                                : 'bg-white/80 text-gray-600 border-gray-200 hover:border-rose-400'
                                }`}
                        >
                            <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4 font-cabinet-extrabold text-base md:text-lg shrink-0 ${selected === i ? 'border-rose-500 bg-rose-500 text-white' : 'border-gray-400 text-gray-500'
                                }`}>
                                {String.fromCharCode(65 + i)}
                            </span>
                            <span className="text-sm md:text-base">{opt}</span>
                        </motion.button>
                    ))}
                </div>

                <AnimatePresence>
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-red-500 text-center mb-4 font-medium text-sm md:text-base"
                        >
                            Incorrect answer! Try remembering the exact time...
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSubmit}
                    disabled={selected === null}
                    className={`w-full py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all ${selected !== null
                        ? 'bg-rose-600 text-white shadow-lg shadow-rose-200'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                >
                    Submit Answer
                </motion.button>
            </QuizPaperWrapper>

            {/* Incorrect Feedback (Speed GIF) - No Container */}
            <AnimatePresence>
                {showGif && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
                    >
                        <img
                            src={speedGif}
                            alt="Incorrect!"
                            className="max-w-[80vw] max-h-[80vh] object-contain"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Correct Feedback (Gulat) */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm"
                    >
                        <motion.img
                            initial={{ y: 20 }}
                            animate={{ y: 0 }}
                            src={gulatImg}
                            alt="Correct!"
                            className="max-w-[80vw] max-h-[60vh] rounded-xl shadow-2xl border-4 border-white mb-8"
                        />
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg"
                        >
                            Wow ! Galing mo 😲
                        </motion.h1>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
