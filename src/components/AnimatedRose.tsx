import { motion } from "framer-motion";

export default function AnimatedRose() {
    const petalVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: (i: number) => ({
            scale: 1,
            opacity: 1,
            transition: {
                delay: 0.3 + i * 0.15,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    const leafVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: (i: number) => ({
            scale: 1,
            opacity: 1,
            transition: {
                delay: 1.8 + i * 0.2,
                duration: 0.5,
                ease: "easeOut",
            },
        }),
    };

    return (
        <motion.svg
            width="80"
            height="100"
            viewBox="0 0 200 250"
            initial="hidden"
            animate="visible"
        >
            <defs>
                {/* Rose petal gradients */}
                <radialGradient id="petalOuter" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#e11d48" />
                    <stop offset="100%" stopColor="#9f1239" />
                </radialGradient>
                <radialGradient id="petalMid" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#f43f5e" />
                    <stop offset="100%" stopColor="#e11d48" />
                </radialGradient>
                <radialGradient id="petalInner" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#fb7185" />
                    <stop offset="100%" stopColor="#f43f5e" />
                </radialGradient>
                <radialGradient id="petalCenter" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#fda4af" />
                    <stop offset="100%" stopColor="#fb7185" />
                </radialGradient>
                <linearGradient id="stemGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#16a34a" />
                    <stop offset="100%" stopColor="#15803d" />
                </linearGradient>
                <radialGradient id="leafGrad" cx="30%" cy="50%" r="70%">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#16a34a" />
                </radialGradient>
            </defs>

            {/* Stem */}
            <motion.path
                d="M100 140 Q 98 170 96 195 Q 94 220 92 240"
                stroke="url(#stemGrad)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
            />

            {/* Left leaf */}
            <motion.ellipse
                cx="78"
                cy="200"
                rx="18"
                ry="8"
                fill="url(#leafGrad)"
                transform="rotate(-35, 78, 200)"
                custom={0}
                variants={leafVariants}
            />
            {/* Right leaf */}
            <motion.ellipse
                cx="108"
                cy="215"
                rx="16"
                ry="7"
                fill="url(#leafGrad)"
                transform="rotate(30, 108, 215)"
                custom={1}
                variants={leafVariants}
            />

            {/* Outer petals (layer 1 - largest, darkest) */}
            <motion.ellipse cx="72" cy="95" rx="28" ry="38" fill="url(#petalOuter)" transform="rotate(-30, 72, 95)" custom={0} variants={petalVariants} />
            <motion.ellipse cx="128" cy="95" rx="28" ry="38" fill="url(#petalOuter)" transform="rotate(30, 128, 95)" custom={1} variants={petalVariants} />
            <motion.ellipse cx="100" cy="70" rx="28" ry="35" fill="url(#petalOuter)" transform="rotate(0, 100, 70)" custom={2} variants={petalVariants} />
            <motion.ellipse cx="68" cy="115" rx="25" ry="32" fill="url(#petalOuter)" transform="rotate(-50, 68, 115)" custom={3} variants={petalVariants} />
            <motion.ellipse cx="132" cy="115" rx="25" ry="32" fill="url(#petalOuter)" transform="rotate(50, 132, 115)" custom={4} variants={petalVariants} />

            {/* Mid petals (layer 2) */}
            <motion.ellipse cx="82" cy="98" rx="22" ry="30" fill="url(#petalMid)" transform="rotate(-20, 82, 98)" custom={5} variants={petalVariants} />
            <motion.ellipse cx="118" cy="98" rx="22" ry="30" fill="url(#petalMid)" transform="rotate(20, 118, 98)" custom={6} variants={petalVariants} />
            <motion.ellipse cx="100" cy="82" rx="20" ry="28" fill="url(#petalMid)" transform="rotate(0, 100, 82)" custom={7} variants={petalVariants} />

            {/* Inner petals (layer 3) */}
            <motion.ellipse cx="90" cy="100" rx="16" ry="22" fill="url(#petalInner)" transform="rotate(-10, 90, 100)" custom={8} variants={petalVariants} />
            <motion.ellipse cx="110" cy="100" rx="16" ry="22" fill="url(#petalInner)" transform="rotate(10, 110, 100)" custom={9} variants={petalVariants} />

            {/* Center bud */}
            <motion.ellipse
                cx="100"
                cy="100"
                rx="12"
                ry="15"
                fill="url(#petalCenter)"
                custom={10}
                variants={petalVariants}
            />
            <motion.ellipse
                cx="100"
                cy="98"
                rx="7"
                ry="10"
                fill="#fecdd3"
                custom={11}
                variants={petalVariants}
            />
        </motion.svg>
    );
}
