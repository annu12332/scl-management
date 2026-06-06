import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
    const ref = useRef(null);

    // scroll-based parallax
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <motion.section
            ref={ref}
            id="contact"
            className="py-24 text-center px-6 bg-gray-50 overflow-hidden relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >

            {/* 🔥 Animated Gradient Background */}
            <motion.div
                className="absolute inset-0 opacity-40"
                animate={{
                    background: [
                        "radial-gradient(circle at 20% 30%, #38bdf8 0%, transparent 60%)",
                        "radial-gradient(circle at 80% 70%, #0ea5e9 0%, transparent 60%)",
                        "radial-gradient(circle at 50% 50%, #38bdf8 0%, transparent 60%)"
                    ]
                }}
                transition={{ duration: 12, repeat: Infinity }}
            />

            {/* Floating blobs with parallax */}
            <motion.div
                style={{ y: yParallax }}
                animate={{ x: [0, 100, -100, 0], rotate: [0, 120, -120, 0] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[500px] h-[500px] bg-sky-200/20 blur-3xl rounded-full top-[-150px] left-[-150px]"
            />

            <motion.div
                style={{ y: yParallax }}
                animate={{ x: [0, -80, 80, 0], rotate: [0, -100, 100, 0] }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                className="absolute w-[400px] h-[400px] bg-sky-300/20 blur-3xl rounded-full bottom-[-120px] right-[-120px]"
            />

            {/* ✨ Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-bold text-sky-700 mb-6 relative z-10"
            >
                <motion.span
                    animate={{
                        backgroundPosition: ["0%", "100%", "0%"]
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="bg-gradient-to-r from-sky-600 via-sky-400 to-sky-600 bg-[length:200%_200%] bg-clip-text text-transparent"
                >
                    Ready to Digitize Your Institution?
                </motion.span>
            </motion.h2>

            {/* 📝 Paragraph */}
            <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                animate={{ opacity: [0.8, 1, 0.8] }}
                className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto relative z-10"
            >
                Discover how our School Management System can transform your institution.
                Contact us today!
            </motion.p>

            {/* 🚀 Button */}
            <motion.a
                href="https://wa.me/8801847239701"
                target="_blank"
                rel="noopener noreferrer"

                initial={{ opacity: 0, scale: 0.7, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}

                whileHover={{
                    scale: 1.08,
                    rotate: 1
                }}

                whileTap={{ scale: 0.92 }}

                className="relative inline-flex items-center justify-center px-12 py-5 font-bold text-lg text-white rounded-xl overflow-hidden z-10"
            >

                {/* Gradient glow */}
                <motion.span
                    className="absolute inset-0 rounded-xl"
                    animate={{
                        background: [
                            "linear-gradient(120deg, #0ea5e9, #38bdf8, #0ea5e9)",
                            "linear-gradient(240deg, #38bdf8, #0ea5e9, #38bdf8)"
                        ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Inner layer */}
                <span className="absolute inset-[2px] bg-sky-700 rounded-xl z-10" />

                {/* Shine effect */}
                <motion.span
                    animate={{ x: ["-120%", "120%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-1/2 h-full bg-white/30 skew-x-12 blur-md z-20"
                />

                {/* Ripple pulse */}
                <motion.span
                    animate={{
                        scale: [0, 2.5],
                        opacity: [0.4, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-white/20 rounded-full z-0"
                />

                {/* Floating shadow */}
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.25, 0.1, 0.25]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute -bottom-4 left-1/2 w-32 h-6 bg-black/20 blur-xl rounded-full -translate-x-1/2"
                />

                <span className="relative z-30 tracking-wide">
                    Contact Us Today
                </span>
            </motion.a>

        </motion.section>
    );
}