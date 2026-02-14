import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import speedGif from '../../assets/Speed GIF.gif';
import gulatImg from '../../assets/gulat.jpg';
import QuizPaperWrapper from './QuizPaperWrapper';

interface Quiz2Props {
    onNext: () => void;
}

const question = {
    text: [
        "Sam borrowed ₱20,000 from Sean for a small business. A few weeks after taking the loan, Sam escaped to London to avoid paying him back. For 2 years, Sean had no contact with her.",
        "One day, Sean accidentally saw Sam’s Instagram account and realized she was in London. He contacted the Philippine National Police (PNP), and they arrested Sam to enforce repayment of her debt.",
        "After Sam returned to the Philippines, Sean forgave her past mistakes and, because he had secretly yearned for her all along, he fell in love with her. However, she was still required to pay interest on the loan.",
        "The original interest rate was 5% per month, but after forgiving her, Sean reduced it to 3% per month. Sam is now paying back after 2 years (24 months) of absence."
    ]
};

export default function Quiz2({ onNext }: Quiz2Props) {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(false);
    const [showGif, setShowGif] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Correct numeric answer is 34400
    // (20,000 principal + (20,000 * 0.03 * 24) interest) = 20,000 + 14,400 = 34,400

    const handleSubmit = () => {
        // Normalize answer: remove non-digits (except decimal point if any, but valid answer is integer here)
        const numericAnswer = answer.replace(/[^0-9]/g, '');

        if (numericAnswer === '34400') {
            setShowSuccess(true);
            setTimeout(() => {
                onNext();
            }, 3000);
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
            <QuizPaperWrapper title="Question 2" className="w-full max-w-[75vw] font-cabinet">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column: Story (Wider) */}
                    <div className="lg:col-span-8 text-gray-700 text-base md:text-lg leading-relaxed space-y-3">
                        {question.text.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        <div className="p-3 bg-rose-50 rounded-xl border-l-4 border-rose-400 mt-4 md:mt-6 inline-block">
                            <p className="font-semibold text-rose-600 italic text-lg">
                                Magkano ang total na binayaran ni Sam?
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Input & Submit (Narrower) */}
                    <div className="lg:col-span-4 flex flex-col gap-6 w-full">
                        <div className="w-full">
                            <input
                                type="text"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                className="w-full p-4 rounded-xl border-2 border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none text-xl font-cabinet-bold text-gray-700 placeholder-gray-400 transition-all text-center"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') handleSubmit();
                                }}
                            />
                        </div>

                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="text-red-500 text-center font-medium text-base md:text-lg bg-red-50 p-2 rounded-lg"
                                >
                                    Incorrect! Try calculating again...
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleSubmit}
                            disabled={!answer.trim()}
                            className={`w-full py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all shadow-md ${answer.trim()
                                ? 'bg-rose-600 text-white shadow-rose-200 hover:bg-rose-700'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                }`}
                        >
                            Submit Answer
                        </motion.button>
                    </div>
                </div>
            </QuizPaperWrapper>

            {/* Speed GIF Overlay (Incorrect) */}
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
