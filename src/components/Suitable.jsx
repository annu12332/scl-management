import { motion } from "framer-motion";

const items = [
    "Schools",
    "Colleges",
    "Coaching Centers",
    "Training Institutes",
    "Educational Organizations"
];

// container stagger
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.07
        }
    }
};

// item animation (different style)
const itemVariant = {
    hidden: { opacity: 0, scale: 0.7, rotate: -6 },
    show: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 18
        }
    }
};

export default function SuitableFor() {
    return (
        <section className="py-14 px-4 bg-gradient-to-br from-white via-sky-100 to-sky-100 overflow-hidden">
            <div className="max-w-5xl mx-auto text-center">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-bold mb-8"
                >
                    <span className="bg-gradient-to-r from-sky-800 via-sky-600 to-sky-700 bg-clip-text text-transparent">
                        Suitable For
                    </span>
                </motion.h2>

                {/* Items */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 md:gap-4"
                >
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariant}

                            // UNIQUE: sideways drift instead of up-down
                            animate={{ x: [0, 6, -6, 0] }}
                            transition={{
                                duration: 6 + i,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}

                            whileHover={{ scale: 1.08, rotate: 2 }}
                            whileTap={{ scale: 0.92 }}

                            className="px-4 py-2 md:px-5 md:py-3 rounded-full text-sm md:text-base font-semibold 
                            bg-sky-200 backdrop-blur-xl border border-white/40 shadow-sm 
                            hover:shadow-lg transition relative overflow-hidden group"
                        >
                            {/* existing glow (kept same, only animated smoother) */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 0.2 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-sky-400 blur"
                            />

                            {/* ripple effect (new but no style change) */}
                            <motion.span
                                initial={{ scale: 0, opacity: 0.4 }}
                                whileTap={{ scale: 2.5, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0 bg-white/20 rounded-full"
                            />

                            <span className="relative z-10 text-gray-800">
                                {item}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}