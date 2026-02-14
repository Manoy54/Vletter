import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import svgPaths from "./svg-anr1w6mmgm";
import ShinyText from '../components/ShinyText';
import imgKurumiRemovebgPreview1 from "figma:asset/f13ac2087af26364f191382c9e7e6523c8376c9b.png";
import imgHellokittyRemovebgPreview1 from "figma:asset/926c0c76ee0ece8bfb9fd2e8e9cbfaa25d07d82c.png";
import imgScreenshot20260210114958RemovebgPreview1 from "figma:asset/1ed4b0b5ded56e6604ee56090d48d2995bf177ea.png";


function Component({ className }: { className?: string }) {
  return (
    <div className={className || "absolute h-[50.965px] left-[707px] top-[500px] w-[63.198px]"} data-name="Component 1">
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{ color: ["#E96464", "#b91c1c", "#E96464"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart className="w-full h-full fill-current text-current" />
        </motion.div>
        <p className="absolute inset-0 flex items-center justify-center font-['Montserrat',sans-serif] font-normal leading-none not-italic text-[16px] text-white">18</p>
      </motion.div>
    </div>
  );
}

export default function Frame({ isOpen }: { isOpen?: boolean }) {
  return (
    <div className="relative size-full">
      {/* Characters - Rendered first so they are behind the card content */}
      <motion.div
        className="absolute h-[105px] left-[586px] top-[203px] w-[104px]"
        data-name="kurumi-removebg-preview 1"
        initial={{ y: 100 }}
        animate={{ y: isOpen ? 0 : 100 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgKurumiRemovebgPreview1} />
      </motion.div>
      <motion.div
        className="absolute left-[686px] size-[125px] top-[201px]"
        data-name="hellokitty-removebg-preview 1"
        initial={{ y: 100 }}
        animate={{ y: isOpen ? 0 : 100 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHellokittyRemovebgPreview1} />
      </motion.div>
      <motion.div
        className="absolute h-[115px] left-[790px] top-[180px] w-[124px]"
        data-name="Screenshot_2026-02-10_114958-removebg-preview 1"
        initial={{ y: 100 }}
        animate={{ y: isOpen ? 0 : 100 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260210114958RemovebgPreview1} />
      </motion.div>

      {/* Main Card Content */}
      <div className="absolute bg-white border border-black border-solid h-[460px] left-[573px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[286px] w-[332px]" />
      <div className="-translate-x-1/2 absolute left-[739px] top-[349px] w-[300px] text-center">
        <ShinyText
          text="Valentine's Night"
          speed={3}
          delay={0.5}
          color="#1a1a1a"
          shineColor="#d4a574"
          spread={120}
          direction="left"
          yoyo={true}
          className="font-['Dancing_Script',cursive] font-normal leading-[normal] not-italic text-[46px] whitespace-pre-wrap"
        />
      </div>
      <p className="absolute font-['Montserrat',sans-serif] font-normal leading-[normal] left-[580px] not-italic text-[18px] text-black text-right top-[516px] w-[120px] whitespace-pre-wrap">February</p>
      <p className="absolute font-['Montserrat',sans-serif] font-normal leading-[normal] left-[778px] not-italic text-[18px] text-black text-left top-[516px] w-[130px] whitespace-pre-wrap">Wednesday</p>
      <p className="-translate-x-1/2 absolute font-['Montserrat',sans-serif] font-normal leading-[normal] left-[739px] not-italic text-[14px] text-black text-center top-[559px] w-[250px] whitespace-pre-wrap">At your most convenient hour</p>
      <p className="-translate-x-1/2 absolute font-['Limelight',cursive] font-normal leading-[normal] left-[739px] not-italic text-[32px] text-black text-center top-[590px] w-[200px] whitespace-pre-wrap">CESAR’S</p>
      <p className="-translate-x-1/2 absolute font-['DM_Serif_Text',serif] font-light leading-[normal] left-[739px] not-italic text-[14px] text-black text-center top-[635px] w-[200px] whitespace-pre-wrap">Bgy. 37 - Bitano, Philippines · Legazpi, Philippines</p>
      <p className="-translate-x-1/2 absolute font-['Poiret_One',cursive] font-light leading-[normal] left-[739px] not-italic text-[32px] text-black text-center top-[440px] tracking-[12px] w-[280px] whitespace-pre-wrap">DINNER</p>
      <Component />
      <div className="absolute h-[82.868px] left-[605.47px] top-[659.09px] w-[69.736px]">
        <div className="absolute inset-[-1.21%_-1.43%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.7366 84.8686">
            <path d={svgPaths.p1ca23f00} id="Vector 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>

    </div>
  );
}