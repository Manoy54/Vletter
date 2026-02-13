import { useState } from 'react';
import { motion } from 'framer-motion';
import Frame from '../../imports/Frame1';
import Cover from '../../components/Cover';
import FloatingHearts from '../../components/FloatingHearts';

export default function CardPage() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-[#f5f5f5] flex items-center justify-center overflow-hidden w-full h-full relative"
            style={{ perspective: '1500px' }}>

            <motion.div
                className="relative w-[1480px] h-[1000px] flex-none"
                animate={isOpen ? { x: 165, y: 0, rotate: 0, scale: 1.5 } : { x: 0, y: [0, -20, 0], rotate: [0, 1, -1, 0], scale: 1.5 }}
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
