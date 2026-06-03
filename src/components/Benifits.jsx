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
            className="bg-gradient-to-br from-sky-600 via-sky-700 to-sky-600 py-16 px-4 md:px-6 text-white overflow-hidden"
        >
            <div className="max-w-5xl mx-auto">
                
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-bold text-center mb-10"
                >
                    Benefits for Your Institution
                </motion.h2>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    {list.map((item, i) => (
                        <motion.div
                            key={i}

                            // UNIQUE: alternating flow direction
                            initial={{
                                opacity: 0,
                                x: i % 2 === 0 ? -40 : 40,
                                skewX: i % 2 === 0 ? -5 : 5
                            }}

                            whileInView={{
                                opacity: 1,
                                x: 0,
                                skewX: 0
                            }}

                            transition={{
                                duration: 0.5,
                                delay: i * 0.06,
                                ease: [0.22, 1, 0.36, 1]
                            }}

                            viewport={{ once: true }}

                            whileHover={{
                                scale: 0.98, // push effect (different feel)
                                x: 4
                            }}

                            whileTap={{ scale: 0.95 }}

                            className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 hover:bg-white/20 transition"
                        >
                            {/* Icon */}
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

                                // subtle pulse (different timing than before)
                                animate={{ scale: [1, 1.15, 1] }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}

                                className="flex items-center justify-center w-8 h-8 rounded-full bg-green-400 text-blue-900 font-bold text-sm shadow"
                            >
                                ✓
                            </motion.span>

                            {/* Text */}
                            <motion.p
                                animate={{ x: [0, 2, 0] }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 0.3
                                }}
                                className="text-sm md:text-base font-medium"
                            >
                                {item}
                            </motion.p>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}