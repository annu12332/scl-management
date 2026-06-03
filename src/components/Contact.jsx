import { motion } from "framer-motion";

export default function Contact() {

    return (
        <motion.section
            id="contact"
            className="py-20 text-center px-6 bg-gray-50 overflow-hidden relative"
            animate={{ scale: [1, 1.01, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
        >

            {/* background blobs */}
            <motion.div
                animate={{ x: [0, 80, -80, 0], y: [0, -60, 60, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-96 h-96 bg-white/20 blur-3xl rounded-full top-[-120px] left-[-120px]"
            />

            <motion.div
                animate={{ x: [0, -70, 70, 0], y: [0, 50, -50, 0] }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute w-80 h-80 bg-white/10 blur-3xl rounded-full bottom-[-120px] right-[-120px]"
            />

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                animate={{ y: [0, -6, 0] }}
                className="text-4xl font-bold text-sky-700 mb-6 relative z-10"
            >
                Ready to Digitize Your Institution?
            </motion.h2>

            {/* Paragraph */}
            <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                animate={{ opacity: [0.85, 1, 0.85] }}
                className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto relative z-10"
            >
                Discover how our School Management System can transform your institution. Contact us today!
            </motion.p>

            {/* Button */}
            <motion.a
                href="https://wa.me/8801847239701" 
                target="_blank"
                rel="noopener noreferrer"

                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}

                whileTap={{ scale: 0.9 }}

                animate={{ y: [0, -6, 0] }}
                transition={{
                    y: { duration: 3, repeat: Infinity },
                    type: "spring",
                    stiffness: 160,
                    damping: 12
                }}

                className="bg-sky-700 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-sky-600 transition relative overflow-hidden z-10 inline-block"
            >

                {/* aura */}
                <motion.span
                    animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.3, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute inset-0 bg-white/20 rounded-lg"
                />

                {/* wave */}
                <motion.span
                    animate={{ scale: [0, 3], opacity: [0.4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-white/20 rounded-full"
                />

                {/* shadow */}
                <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -bottom-3 left-1/2 w-24 h-5 bg-black/20 blur-md rounded-full -translate-x-1/2"
                />

                Contact Us Today
            </motion.a>

        </motion.section>
    );
}