import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QuizPaperWrapper from './QuizPaperWrapper';

interface Quiz3Props {
    onNext: () => void;
}

const words = [
    { id: 'word-1', text: 'snack' },
    { id: 'word-2', text: 'exercise' },
    { id: 'word-3', text: 'Sean' },
    { id: 'word-4', text: 'sincerely' },
    { id: 'word-5', text: 'merienda' },
    { id: 'word-6', text: 'promise' },
    { id: 'word-7', text: '3' },
    { id: 'word-8', text: 'Samarah Francesca Quililan' },
    { id: 'word-9', text: 'healthy routine.' },
];

const CORRECT_ANSWERS: Record<string, string> = {
    'slot-1': 'Samarah Francesca Quililan',
    'slot-2': 'sincerely',
    'slot-3': '3',
    'slot-4': 'snack',
    'slot-5': 'merienda',
    'slot-6': 'promise',
    'slot-7': 'exercise',
    'slot-8': 'healthy routine.',
    'slot-9': 'Sean',
};

export default function Quiz3({ onNext }: Quiz3Props) {
    const [filledSlots, setFilledSlots] = useState<Record<string, string>>({});
    const [errorSlot, setErrorSlot] = useState<{ id: string, x: number, y: number } | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleDragEnd = (event: any, info: any, word: string) => {
        // Simple collision detection
        const dropZones = document.querySelectorAll('.drop-zone');
        let droppedInSlot = null;

        dropZones.forEach((zone: any) => {
            const rect = zone.getBoundingClientRect();
            const point = { x: info.point.x, y: info.point.y };

            if (
                point.x >= rect.left &&
                point.x <= rect.right &&
                point.y >= rect.top &&
                point.y <= rect.bottom
            ) {
                droppedInSlot = zone.id;

                if (CORRECT_ANSWERS[zone.id] === word) {
                    setFilledSlots(prev => ({ ...prev, [zone.id]: word }));
                } else {
                    // Should show error X
                    // Since we can't easily get the drop coordinates relative to container here without calculation, 
                    // we use the rect of the zone to place the X
                    setErrorSlot({ id: zone.id, x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
                    setTimeout(() => setErrorSlot(null), 1000);
                }
            }
        });
    };

    const isComplete = Object.keys(filledSlots).length === Object.keys(CORRECT_ANSWERS).length;

    return (
        <div ref={containerRef} className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center relative">
            <QuizPaperWrapper title="A Promise to Myself" className="max-w-4xl bg-[#fffdfa]/95 py-8 md:py-10">

                {/* Word Bank */}
                <div className="flex flex-wrap justify-center gap-2 p-4 bg-rose-50/50 rounded-xl border-2 border-rose-200 mb-6">
                    {words.map(word => {
                        const isPlaced = Object.values(filledSlots).includes(word.text);
                        return (
                            <div key={word.id} className="relative">
                                {/* Invisible placeholder to reserve space if placed */}
                                <div className={`px-3 py-1.5 border-2 border-transparent rounded-full font-medium select-none text-sm ${isPlaced ? 'opacity-0' : 'invisible'}`}>
                                    {word.text}
                                </div>

                                {/* Actual Draggable Item */}
                                {!isPlaced && (
                                    <motion.div
                                        drag
                                        dragSnapToOrigin={true}
                                        whileHover={{ scale: 1.1, cursor: 'grab' }}
                                        whileDrag={{ scale: 1.2, cursor: 'grabbing', zIndex: 100 }}
                                        onDragEnd={(e, info) => handleDragEnd(e, info, word.text)}
                                        className="absolute inset-0 px-3 py-1.5 bg-white border-2 border-rose-300 rounded-full shadow-sm text-rose-700 font-medium select-none cursor-grab active:cursor-grabbing z-50 text-sm"
                                    >
                                        {word.text}
                                    </motion.div>
                                )}
                            </div>
                        );
                    })}
                    {isComplete && (
                        <p className="text-gray-400 italic text-sm">All words placed!</p>
                    )}
                </div>

                {/* The Text with Drop Zones */}
                <div className="text-sm md:text-base leading-loose text-gray-800 font-medium font-serif p-2 rounded-xl relative z-0">
                    <p>
                        I, <DropZone id="slot-1" value={filledSlots['slot-1']} />, <DropZone id="slot-2" value={filledSlots['slot-2']} /> promise to take good care of myself starting today.
                    </p>
                    <p>
                        I will eat <DropZone id="slot-3" value={filledSlots['slot-3']} /> proper meals every day, enjoy a little morning <DropZone id="slot-4" value={filledSlots['slot-4']} />, and never skip my afternoon <DropZone id="slot-5" value={filledSlots['slot-5']} /> so my energy and smile stay strong.
                    </p>
                    <div className="block mt-2">
                        I <DropZone id="slot-6" value={filledSlots['slot-6']} /> not to sleep too late. I will begin to <DropZone id="slot-7" value={filledSlots['slot-7']} />, even in small ways, for me to start my <DropZone id="slot-8" value={filledSlots['slot-8']} />.
                    </div>
                    <p className="mt-2">
                        Whenever I feel tired, unmotivated, or alone, I will remember that someone is always here for me, and that is <DropZone id="slot-9" value={filledSlots['slot-9']} />, cheering me on, believing in me, and wishing for my well-being.
                    </p>
                    <p className="mt-6 text-rose-500 font-bold text-center italic">
                        This is my gentle promise to love myself a little more, every single day.
                    </p>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onNext}
                    disabled={!isComplete}
                    className={`w-full py-3 rounded-xl font-bold text-lg transition-all mt-6 ${isComplete
                        ? 'bg-rose-600 text-white shadow-lg shadow-rose-200 animate-pulse'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                >
                    Seal This Promise
                </motion.button>
            </QuizPaperWrapper>

            {/* Error Overlay */}
            <AnimatePresence>
                {errorSlot && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="fixed z-[9999] pointer-events-none text-red-500 font-bold text-6xl drop-shadow-md"
                        style={{
                            left: errorSlot.x,
                            top: errorSlot.y,
                            transform: 'translate(-50%, -50%)',
                            position: 'fixed'
                        }}
                    >
                        ✕
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function DropZone({ id, value }: { id: string, value?: string }) {
    return (
        <span
            id={id}
            className={`drop-zone inline-flex items-center justify-center min-w-[80px] md:min-w-[100px] h-[40px] border-b-2 mx-1 px-2 align-middle transition-colors rounded-t-md text-center text-sm md:text-base ${value
                ? 'border-rose-500 bg-rose-50 text-rose-700 font-bold'
                : 'border-gray-300 bg-gray-50'
                }`}
        >
            {value || ""}
        </span>
    );
}
