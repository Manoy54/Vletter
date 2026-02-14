import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import galityarn from '../../assets/galityarn.jpg';

interface ReminderPageProps {
    onComplete: () => void;
}

const ReminderPage: React.FC<ReminderPageProps> = ({ onComplete }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 3000); // Display for 3 seconds

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-white absolute inset-0 z-50 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="text-center px-4 flex flex-col items-center gap-8"
            >
                <motion.h1
                    className="text-[clamp(1.5rem,4vw,3rem)] font-cabinet-medium text-center leading-[1.2] uppercase tracking-widest text-[#333]"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    but first answer these please!
                </motion.h1>

                <motion.img
                    src={galityarn}
                    alt="Cute reminder"
                    className="w-48 md:w-64 rounded-xl shadow-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                />
            </motion.div>
        </div>
    );
};

export default ReminderPage;
