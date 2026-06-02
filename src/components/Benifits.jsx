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
            className="bg-gradient-to-br from-sky-600 via-sky-700 to-sky-600 py-16 px-4 md:px-6 text-white"
        >
            <div className="max-w-5xl mx-auto">
                
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                    Benefits for Your Institution
                </h2>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    {list.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 hover:bg-white/20 transition"
                        >
                            {/* Icon */}
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-400 text-blue-900 font-bold text-sm shadow">
                                ✓
                            </span>

                            {/* Text */}
                            <p className="text-sm md:text-base font-medium">
                                {item}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}