
import React, { useRef, useEffect } from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface IntroPageProps {
    onComplete: () => void;
}

const FadeInSection: React.FC<{
    children: React.ReactNode;
    containerRef: React.RefObject<HTMLDivElement>;
    delay?: number;
}> = ({ children, containerRef, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ root: containerRef, margin: "-15%" }}
            transition={{ duration: 1.2, delay, ease: [0.25, 0.1, 0.25, 1] }}
        >
            {children}
        </motion.div>
    );
};

const IntroPage: React.FC<IntroPageProps> = ({ onComplete }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Smooth heavy scroll using lerp (linear interpolation)
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        let targetScroll = el.scrollTop;
        let currentScroll = el.scrollTop;
        let rafId: number;
        let isAnimating = false;

        const lerp = (start: number, end: number, factor: number) => {
            return start + (end - start) * factor;
        };

        const smoothScroll = () => {
            currentScroll = lerp(currentScroll, targetScroll, 0.08); // 8% per frame — slow & smooth

            // Stop animating when close enough
            if (Math.abs(currentScroll - targetScroll) < 0.5) {
                currentScroll = targetScroll;
                isAnimating = false;
            }

            el.scrollTop = currentScroll;

            if (isAnimating) {
                rafId = requestAnimationFrame(smoothScroll);
            }
        };

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            const maxScroll = el.scrollHeight - el.clientHeight;
            targetScroll = Math.max(0, Math.min(targetScroll + e.deltaY * 0.35, maxScroll));

            if (!isAnimating) {
                isAnimating = true;
                rafId = requestAnimationFrame(smoothScroll);
            }
        };

        // Sync target on manual scroll (touch, scrollbar drag)
        const handleScroll = () => {
            if (!isAnimating) {
                targetScroll = el.scrollTop;
                currentScroll = el.scrollTop;
            }
        };

        el.addEventListener('wheel', handleWheel, { passive: false });
        el.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            el.removeEventListener('wheel', handleWheel);
            el.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full overflow-y-auto overflow-x-hidden bg-white text-black relative" style={{ scrollBehavior: 'auto' }}>

            {/* Scroll Hint overlay */}
            <div className="fixed bottom-10 inset-x-0 w-full flex justify-center pointer-events-none z-50">
                <div className="animate-bounce flex flex-col items-center opacity-40">
                    <span className="text-xs uppercase tracking-widest mb-2 font-bold text-gray-400">Scroll</span>
                    <svg
                        className="w-6 h-6 text-gray-400"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>

            {/* SECTION 1: WILL YOU BE ALWAYS MY VALENTINES? */}
            <div className="min-h-screen w-full flex items-center justify-center px-4 relative">
                <FadeInSection containerRef={containerRef}>
                    <div className="max-w-4xl text-center w-full">
                        <ScrollReveal
                            scrollContainerRef={containerRef}
                            baseOpacity={0}
                            enableBlur
                            baseRotation={5}
                            blurStrength={10}
                            textClassName="text-[clamp(2.5rem,5.5vw,5rem)] font-rouge-script text-center leading-[1.3] text-[#1a1a1a]"
                        >
                            Will you always be my Valentines?
                        </ScrollReveal>
                    </div>
                </FadeInSection>
            </div>

            {/* SECTION 2: AND */}
            <div className="min-h-screen w-full flex items-center justify-center px-4 relative">
                <FadeInSection containerRef={containerRef}>
                    <div className="max-w-4xl text-center w-full">
                        <ScrollReveal
                            scrollContainerRef={containerRef}
                            baseOpacity={0}
                            enableBlur
                            baseRotation={-5}
                            blurStrength={10}
                            textClassName="text-[clamp(1.5rem,4vw,3rem)] font-cabinet-medium text-center leading-[1.2] uppercase tracking-widest text-[#333]"
                        >
                            AND
                        </ScrollReveal>
                    </div>
                </FadeInSection>
            </div>

            {/* SECTION 3: MANLIGAW ? + BUTTONS */}
            <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 relative pb-20">
                <FadeInSection containerRef={containerRef}>
                    <div className="max-w-4xl text-center mb-16">
                        <ScrollReveal
                            scrollContainerRef={containerRef}
                            baseOpacity={0}
                            enableBlur
                            baseRotation={5}
                            blurStrength={10}
                            textClassName="text-[clamp(3.5rem,7vw,6rem)] font-rouge-script text-center leading-[1.3] text-[#1a1a1a]"
                        >
                            Manligaw ?
                        </ScrollReveal>
                    </div>

                    <div className="flex gap-6 items-center justify-center w-full px-4">
                        <motion.button
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ root: containerRef, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            onClick={onComplete}
                            className="w-32 md:w-40 py-3 bg-[#CD5C5C] text-white font-bold text-lg md:text-xl rounded shadow-md hover:bg-[#b04545] active:scale-95 transition-all cursor-pointer"
                        >
                            YES
                        </motion.button>

                        <motion.button
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ root: containerRef, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="w-32 md:w-40 py-3 bg-white text-black border border-gray-300 font-bold text-lg md:text-xl rounded shadow-sm hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
                            onClick={(e) => {
                                const btn = e.currentTarget;
                                btn.animate([
                                    { transform: 'translateX(0)' },
                                    { transform: 'translateX(-10px)' },
                                    { transform: 'translateX(10px)' },
                                    { transform: 'translateX(-8px)' },
                                    { transform: 'translateX(8px)' },
                                    { transform: 'translateX(0)' }
                                ], { duration: 500 });
                            }}
                        >
                            NO
                        </motion.button>
                    </div>
                </FadeInSection>
            </div>
        </div>
    );
};

export default IntroPage;
