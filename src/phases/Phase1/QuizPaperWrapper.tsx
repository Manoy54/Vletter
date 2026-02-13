import React from 'react';
import { motion } from 'framer-motion';

interface QuizPaperWrapperProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
}

export default function QuizPaperWrapper({ children, className = "", title }: QuizPaperWrapperProps) {
    return (
        <div className={`relative w-full max-w-5xl mx-auto bg-[#fffdfa] text-gray-800 rounded-sm shadow-2xl p-6 md:p-10 lg:p-16 overflow-visible ${className}`}
            style={{
                backgroundImage: `
             linear-gradient(#e5e7eb 1px, transparent 1px),
             linear-gradient(90deg, #e5e7eb 1px, transparent 1px)
           `,
                backgroundSize: '40px 40px',
                boxShadow: '0 10px 30px -5px rgba(0,0,0,0.2), 0 0 5px rgba(0,0,0,0.1)'
            }}
        >
            {/* Paper Clip (Top Left) */}
            <div className="absolute -top-4 left-4 md:-top-6 md:left-8 w-8 md:w-12 z-20 pointer-events-none">
                <svg viewBox="0 0 40 100" fill="none" stroke="#be123c" strokeWidth="6" strokeLinecap="round" className="drop-shadow-sm">
                    <path d="M12 20 V 80 A 10 10 0 0 0 32 80 V 20 A 18 18 0 0 0 2 20 V 70" />
                </svg>
            </div>

            {/* Heart Sticker (Top Center-Right) */}
            <motion.div
                initial={{ rotate: 5, scale: 0.9 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 md:translate-x-12 z-20 pointer-events-none scale-75 md:scale-100"
            >
                <svg width="100" height="90" viewBox="0 0 24 24" fill="#e11d48" stroke="#fff" strokeWidth="1" className="drop-shadow-lg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold font-serif text-sm -rotate-12 pt-2">
                    FOR<br />YOU
                </div>
            </motion.div>


            {/* Stamp (Top Right) */}
            <div className="absolute -top-4 -right-2 md:right-4 w-24 h-20 md:w-32 md:h-24 bg-white border-4 border-dotted border-rose-400 p-1 md:p-2 shadow-md rotate-3 z-20 hidden sm:block">
                <div className="w-full h-full border border-rose-200 flex items-center justify-center text-rose-600 font-cabinet-black text-center text-xs md:text-sm leading-tight font-black uppercase tracking-wider">
                    Happy<br />Valentine's<br />Day!
                </div>
                {/* Washi Tape */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-12 md:w-8 md:h-16 bg-rose-200/50 rotate-45"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 pt-8">
                {title && <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{title}</h2>}
                {children}
            </div>

        </div>
    );
}
