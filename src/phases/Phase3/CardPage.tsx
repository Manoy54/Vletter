import { useState } from 'react';
import { motion } from 'framer-motion';
import Frame from '../../imports/Frame1';
import Cover from '../../components/Cover';
import FloatingHearts from '../../components/FloatingHearts';
import Ballpit from '../../components/Ballpit';

export default function CardPage() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center justify-center overflow-hidden w-full h-full relative bg-white"
            style={{ perspective: '1500px' }}>

            {/* Ballpit Background - appears when card opens */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 1, delay: isOpen ? 0.3 : 0 }}
                style={{ overflow: 'hidden', width: '100%', height: '100%', pointerEvents: isOpen ? 'auto' : 'none' }}
            >
                {isOpen && (
                    <Ballpit
                        count={200}
                        gravity={0.01}
                        friction={0.9975}
                        wallBounce={0.95}
                        followCursor={false}
                        colors={[0xf43f5e, 0xfb7185, 0xfda4af]}
                    />
                )}
            </motion.div>

            {/* Animated Glow Effect behind the card */}
            {/* Animated Glow Effect behind the card */}
            <motion.div
                className="absolute z-[5] pointer-events-none"
                style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
            >
                {/* Top-left glow - pink */}
                <motion.div
                    className="absolute rounded-full"
                    style={{
                        width: '500px',
                        height: '500px',
                        background: 'radial-gradient(circle, rgba(244,63,94,0.35) 0%, rgba(244,63,94,0) 70%)',
                        left: '-350px',
                        top: '-350px',
                        filter: 'blur(40px)',
                    }}
                    animate={{
                        x: [0, 40, -20, 0],
                        y: [0, -30, 20, 0],
                        scale: [1, 1.2, 0.9, 1],
                        opacity: [0.6, 0.9, 0.5, 0.6],
                    }}
                    transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
                />
                {/* Top-right glow - purple */}
                <motion.div
                    className="absolute rounded-full"
                    style={{
                        width: '450px',
                        height: '450px',
                        background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(168,85,247,0) 70%)',
                        left: '150px',
                        top: '-320px',
                        filter: 'blur(50px)',
                    }}
                    animate={{
                        x: [0, -50, 30, 0],
                        y: [0, 40, -25, 0],
                        scale: [1, 0.85, 1.15, 1],
                        opacity: [0.5, 0.8, 0.4, 0.5],
                    }}
                    transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
                />
                {/* Left glow - rose */}
                <motion.div
                    className="absolute rounded-full"
                    style={{
                        width: '420px',
                        height: '420px',
                        background: 'radial-gradient(circle, rgba(251,113,133,0.3) 0%, rgba(251,113,133,0) 70%)',
                        left: '-380px',
                        top: '-80px',
                        filter: 'blur(45px)',
                    }}
                    animate={{
                        x: [0, 30, -40, 0],
                        y: [0, -20, 35, 0],
                        scale: [1, 1.1, 0.95, 1],
                        opacity: [0.5, 0.7, 0.6, 0.5],
                    }}
                    transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
                />
                {/* Right glow - fuchsia */}
                <motion.div
                    className="absolute rounded-full"
                    style={{
                        width: '460px',
                        height: '460px',
                        background: 'radial-gradient(circle, rgba(217,70,239,0.28) 0%, rgba(217,70,239,0) 70%)',
                        left: '200px',
                        top: '-50px',
                        filter: 'blur(50px)',
                    }}
                    animate={{
                        x: [0, -35, 25, 0],
                        y: [0, 30, -40, 0],
                        scale: [1, 1.15, 0.9, 1],
                        opacity: [0.45, 0.75, 0.5, 0.45],
                    }}
                    transition={{ duration: 9, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
                />
                {/* Bottom-left glow - warm pink */}
                <motion.div
                    className="absolute rounded-full"
                    style={{
                        width: '480px',
                        height: '480px',
                        background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(236,72,153,0) 70%)',
                        left: '-320px',
                        top: '150px',
                        filter: 'blur(45px)',
                    }}
                    animate={{
                        x: [0, 45, -15, 0],
                        y: [0, -35, 25, 0],
                        scale: [1, 0.9, 1.12, 1],
                        opacity: [0.5, 0.85, 0.45, 0.5],
                    }}
                    transition={{ duration: 7.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
                />
                {/* Bottom-right glow - violet */}
                <motion.div
                    className="absolute rounded-full"
                    style={{
                        width: '440px',
                        height: '440px',
                        background: 'radial-gradient(circle, rgba(139,92,246,0.28) 0%, rgba(139,92,246,0) 70%)',
                        left: '180px',
                        top: '180px',
                        filter: 'blur(50px)',
                    }}
                    animate={{
                        x: [0, -40, 20, 0],
                        y: [0, 25, -30, 0],
                        scale: [1, 1.1, 0.88, 1],
                        opacity: [0.4, 0.7, 0.5, 0.4],
                    }}
                    transition={{ duration: 8.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
                />
                {/* Bottom-center glow - soft rose */}
                <motion.div
                    className="absolute rounded-full"
                    style={{
                        width: '500px',
                        height: '400px',
                        background: 'radial-gradient(circle, rgba(253,164,175,0.32) 0%, rgba(253,164,175,0) 70%)',
                        left: '-100px',
                        top: '220px',
                        filter: 'blur(45px)',
                    }}
                    animate={{
                        x: [0, 25, -30, 0],
                        y: [0, -15, 20, 0],
                        scale: [1, 1.08, 0.92, 1],
                        opacity: [0.55, 0.8, 0.45, 0.55],
                    }}
                    transition={{ duration: 6.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
                />
            </motion.div>

            <motion.div
                className="relative w-[1480px] h-[1000px] flex-none z-10"
                animate={isOpen ? { x: 136, y: 0, rotate: 0, scale: 1.5 } : { x: 0, y: [0, -20, 0], rotate: [0, 1, -1, 0], scale: 1.5 }}
                initial={{ scale: 1.5 }}
                transition={isOpen ? { duration: 0.5 } : {
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror"
                }}
            >
                {/* Base Layer: The "Back Panel" with Characters and Content */}
                {/* The Frame contains the characters perched on top and the inner text */}
                <div className="relative z-0">
                    <Frame isOpen={isOpen} />
                </div>
                <Cover isOpen={isOpen} setIsOpen={setIsOpen} />
                <FloatingHearts isOpen={isOpen} />
            </motion.div>
        </div>
    );
}
