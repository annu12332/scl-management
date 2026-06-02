import { motion } from "framer-motion";

const points = [
    "Centralized Management Platform",
    "User-Friendly Interface",
    "Real-Time Reporting & Analytics",
    "Cloud-Based & Secure",
    "Accessible from Anywhere, Anytime",
    "Reduces Administrative Workload",
    "Improves Communication Between School, Teachers, Students & Parents"
];

export default function WhyChooseUs() {
    return (
        <section
            className="py-14 md:py-16 px-4 bg-gradient-to-br from-sky-100 via-white to-blue-200"
            aria-labelledby="why-choose-heading"
        >
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <h2
                        id="why-choose-heading"
                        className="text-2xl md:text-4xl font-bold text-sky-700"
                    >
                        Why Choose Our School Management System?
                    </h2>

                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm md:text-base">
                        A reliable, secure, and easy-to-use platform designed to simplify school operations and improve efficiency.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">

                    {points.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: i * 0.04 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4 }}
                            className="group relative rounded-xl border border-blue-200 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-md transition-all"
                        >
                            {/* Hover focus ring */}
                            <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-2 ring-blue-300 transition"></div>

                            {/* Content */}
                            <div className="relative z-10 p-4 flex items-start gap-3">

                                {/* Icon */}
                                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-900 text-white text-sm font-semibold shadow">
                                    ✓
                                </div>

                                {/* Text */}
                                <p className="text-sm md:text-base text-gray-700 leading-snug">
                                    {item}
                                </p>

                            </div>

                            {/* Bottom subtle accent */}
                            <div className="h-[2px] w-full bg-gradient-to-r from-sky-900 via-sky-500 to-sky-400 opacity-70 rounded-b-xl"></div>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}