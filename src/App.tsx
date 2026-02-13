import { useState } from 'react';
import { motion } from 'framer-motion';
import Frame from './imports/Frame1';
import Cover from './components/Cover';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#f5f5f5] flex items-center justify-center overflow-hidden"
      style={{ width: '100vw', height: '100vh', perspective: '1500px' }}>

      <motion.div
        className="relative w-[1480px] h-[1000px] flex-none"
        animate={isOpen ? { y: 0, rotate: 0 } : { y: [0, -20, 0], rotate: [0, 1, -1, 0] }}
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
      </motion.div>
    </div>
  );
}
