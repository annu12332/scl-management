import { motion } from "framer-motion";

const items = [
    "Schools",
    "Colleges",
    "Coaching Centers",
    "Training Institutes",
    "Educational Organizations"
];

export default function SuitableFor() {
    return (
        <section className="py-14 px-4 bg-gradient-to-br from-white via-sky-100 to-sky-100">
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
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-2 md:px-5 md:py-3 rounded-full text-sm md:text-base font-semibold 
                            bg-sky-200 backdrop-blur-xl border border-white/40 shadow-sm 
                            hover:shadow-lg transition relative overflow-hidden group"
                        >
                            {/* gradient glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-sky-400 opacity-0 group-hover:opacity-20 blur transition"></div>

                            <span className="relative z-10 text-gray-800">
                                {item}
                            </span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}