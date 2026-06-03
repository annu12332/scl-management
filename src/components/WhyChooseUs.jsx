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

// container stagger
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.06
        }
    }
};

// card animation
const itemVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

export default function WhyChooseUs() {
    return (
        <section
            className="py-14 md:py-16 px-4 bg-gradient-to-br from-sky-100 via-white to-sky-100 overflow-hidden"
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
                    <motion.h2
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        id="why-choose-heading"
                        className="text-2xl md:text-4xl font-bold text-sky-700"
                    >
                        Why Choose Our School Management System?
                    </motion.h2>

                    <motion.p
                        animate={{ opacity: [0.9, 1, 0.9] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm md:text-base"
                    >
                        A reliable, secure, and easy-to-use platform designed to simplify school operations and improve efficiency.
                    </motion.p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
                >

                    {points.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariant}
                            whileHover={{ y: -5, scale: 1.02 }}
                            whileTap={{ scale: 0.96 }}
                            transition={{ type: "spring", stiffness: 180, damping: 15 }}
                            className="group relative rounded-xl border border-blue-200 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-md transition-all overflow-hidden"
                        >

                            {/* Shine (no color change) */}
                            <motion.div
                                animate={{ x: ["-120%", "120%"] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 0.2
                                }}
                                className="absolute top-0 left-0 w-1/2 h-full bg-white/10 rotate-12 pointer-events-none"
                            />

                            {/* Floating motion */}
                            <motion.div
                                animate={{ y: [0, -3, 0] }}
                                transition={{
                                    duration: 5 + i,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative"
                            >

                                {/* Hover focus ring */}
                                <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-2 ring-blue-300 transition"></div>

                                {/* Content */}
                                <div className="relative z-10 p-4 flex items-start gap-3">

                                    {/* Icon */}
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white text-sm font-semibold shadow"
                                    >
                                        ✓
                                    </motion.div>

                                    {/* Text */}
                                    <p className="text-sm md:text-base text-gray-700 leading-snug">
                                        {item}
                                    </p>

                                </div>

                                {/* Bottom subtle accent */}
                                <div className="h-[2px] w-full bg-gradient-to-r from-sky-900 via-sky-500 to-sky-400 opacity-70 rounded-b-xl"></div>

                            </motion.div>

                        </motion.div>
                    ))}

                </motion.div>

            </div>
        </section>
    );
}