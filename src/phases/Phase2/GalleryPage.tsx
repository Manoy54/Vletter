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

const images = [img1, img2, img3, img4, img5, img6, img7];

interface GalleryPageProps {
    onNext: () => void;
}

export default function GalleryPage({ onNext }: GalleryPageProps) {
    return (
        <div className="relative w-full h-full bg-black overflow-hidden">
            <DomeGallery
                images={images}
            />

            <div className="absolute bottom-12 left-0 right-0 flex justify-center z-50 pointer-events-none">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onNext}
                    className="px-10 py-4 bg-rose-600 text-white font-bold text-lg rounded-full shadow-lg shadow-rose-500/50 hover:bg-rose-500 transition-colors backdrop-blur-sm pointer-events-auto"
                >
                    Open Your Letter
                </motion.button>
            </div>
        </div>
    );
}
