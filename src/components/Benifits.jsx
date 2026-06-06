import { motion } from "framer-motion";

export default function Benefits() {
    const list = [
        "Save administrative time and costs",
        "Improve operational efficiency",
        "Enhance parent engagement",
        "Reduce paperwork and manual errors",
        "Make informed decisions",
        "Increase transparency",
        "Ensure better academic management"
    ];

    return (
        <section
            id="benefits"
            className="relative bg-gradient-to-br from-sky-600 via-sky-700 to-sky-600 py-20 px-4 md:px-6 text-white overflow-hidden"
        >

            {/* 🔥 animated gradient glow */}
            <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                    background: [
                        "radial-gradient(circle at 20% 30%, #38bdf8 0%, transparent 60%)",
                        "radial-gradient(circle at 80% 70%, #0ea5e9 0%, transparent 60%)",
                        "radial-gradient(circle at 50% 50%, #38bdf8 0%, transparent 60%)"
                    ]
                }}
                transition={{ duration: 12, repeat: Infinity }}
            />

            <div className="max-w-5xl mx-auto relative z-10">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-bold text-center mb-12"
                >
                    <motion.span
                        animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className="bg-gradient-to-r from-white via-sky-200 to-white bg-[length:200%] bg-clip-text text-transparent"
                    >
                        Benefits for Your Institution
                    </motion.span>
                </motion.h2>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                    {list.map((item, i) => (
                        <motion.div
                            key={i}

                            initial={{
                                opacity: 0,
                                x: i % 2 === 0 ? -60 : 60,
                                skewX: i % 2 === 0 ? -6 : 6
                            }}

                            whileInView={{
                                opacity: 1,
                                x: 0,
                                skewX: 0
                            }}

                            transition={{
                                duration: 0.6,
                                delay: i * 0.07,
                                ease: [0.22, 1, 0.36, 1]
                            }}

                            viewport={{ once: true }}

                            whileHover={{
                                scale: 1.03,
                                y: -4
                            }}

                            whileTap={{ scale: 0.96 }}

                            className="group relative flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-5 py-4 overflow-hidden transition"
                        >

                            {/* ✨ glow border */}
                            <motion.div
                                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                                animate={{
                                    background: [
                                        "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)",
                                        "linear-gradient(240deg, transparent, rgba(255,255,255,0.4), transparent)"
                                    ]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />

                            {/* 💡 light sweep */}
                            <motion.div
                                animate={{ x: ["-120%", "120%"] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-0 left-0 w-1/2 h-full bg-white/20 skew-x-12 blur-md opacity-0 group-hover:opacity-100"
                            />

                            {/* ICON */}
                            <div className="relative flex items-center justify-center">
                                {/* ripple ring */}
                                <motion.span
                                    animate={{
                                        scale: [1, 2.2],
                                        opacity: [0.4, 0]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute w-8 h-8 rounded-full bg-green-300/40"
                                />

                                {/* main icon */}
                                <motion.span
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 15,
                                        delay: i * 0.08
                                    }}
                                    viewport={{ once: true }}

                                    animate={{ scale: [1, 1.15, 1] }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity
                                    }}

                                    className="relative flex items-center justify-center w-9 h-9 rounded-full bg-green-400 text-blue-900 font-bold text-sm shadow-lg"
                                >
                                    ✓
                                </motion.span>
                            </div>

                            {/* TEXT */}
                            <motion.p
                                animate={{ y: [0, -2, 0] }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    delay: i * 0.2
                                }}
                                className="text-sm md:text-base font-medium"
                            >
                                {item}
                            </motion.p>

                            {/* 🌑 floating shadow */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.2, 0.1, 0.2]
                                }}
                                transition={{ duration: 2.5, repeat: Infinity }}
                                className="absolute -bottom-3 left-1/2 w-24 h-5 bg-black/20 blur-lg rounded-full -translate-x-1/2"
                            />

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}