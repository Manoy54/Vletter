import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface CoverProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function Cover({ isOpen, setIsOpen }: CoverProps) {

    return (
        <>
            {/* Shadow cast by the cover onto the inside page */}
            <motion.div
                className="absolute bg-gradient-to-r from-black/20 to-transparent pointer-events-none"
                style={{
                    left: '573px',
                    top: '286px',
                    width: '332px',
                    height: '460px',
                    zIndex: 10,
                    transformOrigin: 'left'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 0 : 0.4 }} // Shadow is darker when slightly open/closed
                transition={{ duration: 0.4 }}
            />

            {/* The Front Cover: Flips open */}
            <motion.div
                className="absolute origin-left"
                style={{
                    left: '573px',
                    top: '286px',
                    width: '332px',
                    height: '460px',
                    transformStyle: 'preserve-3d',
                    cursor: 'pointer',
                    zIndex: 20,
                }}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: isOpen ? -180 : 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.005 }}
            >
                {/* Front Face: The Cover Design */}
                <div
                    className="absolute inset-0 bg-white border border-black shadow-xl flex flex-col items-center justify-center gap-6 overflow-hidden"
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                    {/* Paper Texture / Noise (Simulated with opacity) */}
                    <div className="absolute inset-0 bg-neutral-50" />

                    {/* Crease Highlight (Left Edge) */}
                    <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/5 to-transparent z-20" />

                    {/* Curl Shine Effect: Moves across as it opens */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent z-30"
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ x: isOpen ? '100%' : '-100%', opacity: isOpen ? [0, 1, 0] : 0 }}
                        transition={{ duration: 1.0, times: [0, 0.5, 1], ease: "easeInOut" }}
                    />

                    {/* Cover Content */}
                    <div className="relative z-10 flex flex-col items-center">
                        <h1 className="font-serif text-4xl text-rose-600 tracking-wider mb-2">For You</h1>
                        <div className="relative">
                            <Heart className="w-24 h-24 text-rose-500 fill-rose-500 animate-pulse" />
                        </div>
                        <p className="mt-8 text-sm text-rose-400 font-light tracking-widest uppercase flex items-center gap-2 opacity-80">
                            <span>Click to Ohahapen</span>
                        </p>
                    </div>
                </div>

                {/* Back Face: The "Inner Left" Page */}
                <div
                    className="absolute inset-0 bg-white border border-black shadow-lg"
                    style={{
                        transform: 'rotateY(180deg)',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                    }}
                >
                    {/* Inner Paper Gradient (Crease Shadow) */}
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/5 to-transparent" />

                    <div className="flex h-full items-center justify-center">
                        <div className="text-center opacity-40 -rotate-3">
                            <span className="font-serif italic text-rose-300 text-xl">Wigahgath Love</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
