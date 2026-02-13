import { motion } from 'framer-motion';
import DomeGallery from './DomeGallery';

// Import images
import img1 from '../../assets/domepics/5a82a0ce-6545-49ea-b272-89082c48e712.jpg';
import img2 from '../../assets/domepics/5f212491-e6e3-4908-b10d-f8da58b50bb4.jpg';
import img3 from '../../assets/domepics/IMG_0006_20260127_202015_o_3600.jpg';
import img4 from '../../assets/domepics/IMG_0012_20260127_202148_o_3600.jpg';
import img5 from '../../assets/domepics/bb5aed5c-172c-45be-ba83-e2dcd8bd53ff.jpg';
import img6 from '../../assets/domepics/e9fefe50-1cf9-49ac-a31e-1dc8e94eaac9.jpg';
import img7 from '../../assets/domepics/f2f6bedb-3468-4a11-905a-a8aaa060384f.jpg';
import img8 from '../../assets/domepics/47b6234d-c2d7-4841-98bd-2a64439b9d08.jpg';
import img9 from '../../assets/domepics/74b33473-c481-4b15-b655-1b39ff5e170e.jpg';
import img10 from '../../assets/domepics/751f7629-141e-431b-89ae-082ca34321af.jpg';
import img11 from '../../assets/domepics/7865d534-556b-4a30-a116-da1efcf0115f.jpg';
import img12 from '../../assets/domepics/9e377dc5-5af7-403a-80ad-2944bccda8ff.jpg';
import img13 from '../../assets/domepics/beff6b55-193e-4a98-a7d3-b0d20107b4ed.jpg';
import img14 from '../../assets/domepics/c49c4457-4e12-4625-aebc-fa98775080a9.jpg';
import img15 from '../../assets/domepics/fd63bc22-5a65-49ec-9059-a7d33ff17204.jpg';

const images = [
    img1, img2, img3, img4, img5, img6, img7,
    img8, img9, img10, img11, img12, img13, img14, img15
];

interface GalleryPageProps {
    onNext: () => void;
}

export default function GalleryPage({ onNext }: GalleryPageProps) {
    return (
        <div className="relative w-full h-full bg-white overflow-hidden">
            {/* Gallery Section - Takes full height */}
            <div className="absolute inset-0 w-full h-full">
                <DomeGallery
                    images={images}
                    overlayBlurColor="#ffffff"
                />

                {/* Tip Overlay */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute top-6 left-6 z-20 flex items-center gap-2 text-gray-500 text-sm font-medium pointer-events-none select-none bg-white/50 p-2 rounded-full backdrop-blur-sm border border-gray-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M19 15l3-3-3-3M15 19l-3 3-3-3M2 12h20M12 2v20" />
                    </svg>
                    <span>Move it around</span>
                </motion.div>
            </div>

            {/* Footer Section - Overlays the bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 flex flex-col items-center justify-center gap-4 z-50 pointer-events-none">
                <motion.button
                    onClick={onNext}
                    initial="initial"
                    whileHover="hover"
                    className="relative px-8 py-2 flex items-center justify-center overflow-hidden pointer-events-auto"
                >
                    <motion.div
                        variants={{
                            initial: { y: 0, opacity: 1 },
                            hover: { y: -60, opacity: 0 }
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="text-rose-600 font-telma text-4xl md:text-6xl tracking-wide drop-shadow-sm whitespace-nowrap"
                    >
                        Isn't she lovely?
                    </motion.div>

                    <motion.div
                        variants={{
                            initial: { y: 60, opacity: 0 },
                            hover: { y: 0, opacity: 1 }
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center text-rose-500 font-telma text-3xl md:text-5xl gap-4 whitespace-nowrap"
                    >
                        <span>Go to card</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </motion.div>
                </motion.button>
            </div>
        </div>
    );
}
