import { motion, Variants } from 'framer-motion';
import { Heart } from 'lucide-react';

interface FloatingHeartsProps {
    isOpen: boolean;
}

const heartVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.5 + i * 0.1,
            type: "spring", // Explicitly cast to allowed union type
            stiffness: 200,
            damping: 10
        }
    })
};

const floatAnimation = {
    y: [0, -10, 0],
    transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const // Explicitly cast to allowed union type
    }
};

export default function FloatingHearts({ isOpen }: FloatingHeartsProps) {
    if (!isOpen) return null;

    // Configuration for hearts. 
    // We'll have two clusters: Top-Left (of the spread) and Bottom-Right (of the spread).
    // Coordinates are relative to the viewport/container.
    // Card Frame (Right Page) is at Left: 573, Top: 286. W: 332, H: 460.
    // Left Page (Open) ends at Left: ~241 (573-332).

    // Top-Left Cluster (Near top-outer corner of Left Page)
    // Base: Left ~240px, Top ~290px
    const tlHearts = [
        { size: 40, x: -20, y: -20, color: '#ef4444', rotate: -15 }, // Big Red
        { size: 24, x: 20, y: -10, color: '#f472b6', rotate: 10 },   // Small Pink
        { size: 30, x: -10, y: 20, color: '#e11d48', rotate: -30 },  // Med Dark Red
    ];

    // Bottom-Right Cluster (Near bottom-outer corner of Right Page)
    // Base: Left ~905px (573+332), Top ~746px (286+460)
    const brHearts = [
        { size: 45, x: 10, y: 10, color: '#ef4444', rotate: 15 },   // Big Red
        { size: 28, x: -20, y: 20, color: '#ec4899', rotate: -10 }, // Med Pink
        { size: 20, x: 30, y: -10, color: '#be123c', rotate: 30 },  // Small Dark Red
    ];

    return (
        <div className="absolute inset-0 pointer-events-none z-30">
            {/* Top Left Group (Positioned relative to the open left page) */}
            <div className="absolute" style={{ left: '241px', top: '286px' }}>
                {tlHearts.map((h, i) => (
                    <motion.div
                        key={`tl-${i}`}
                        custom={i}
                        variants={heartVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                            position: 'absolute',
                            left: h.x,
                            top: h.y,
                            rotate: h.rotate
                        }}
                    >
                        <motion.div animate={floatAnimation}>
                            <Heart
                                size={h.size}
                                fill={h.color}
                                color={h.color}
                                style={{ filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.3))' }}
                            />
                            {/* Shine effect for 3D look */}
                            <div className="absolute top-[15%] left-[15%] w-[25%] h-[25%] bg-white rounded-full opacity-40 blur-[1px]" />
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Right Group (Positioned relative to the open right page) */}
            <div className="absolute" style={{ left: '905px', top: '746px' }}>
                {brHearts.map((h, i) => (
                    <motion.div
                        key={`br-${i}`}
                        custom={i}
                        variants={heartVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                            position: 'absolute',
                            left: h.x,
                            top: h.y,
                            rotate: h.rotate
                        }}
                    >
                        <motion.div animate={floatAnimation}>
                            <Heart
                                size={h.size}
                                fill={h.color}
                                color={h.color}
                                style={{ filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.3))' }}
                            />
                            <div className="absolute top-[15%] left-[15%] w-[25%] h-[25%] bg-white rounded-full opacity-40 blur-[1px]" />
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
