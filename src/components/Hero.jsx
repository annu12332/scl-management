import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="bg-gradient-to-br from-white via-white to-blue-50 py-10 md:py-20 px-4 md:px-6 overflow-hidden relative">

            {/* Animated background gradient */}
            <motion.div
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute inset-0 opacity-20 bg-[linear-gradient(120deg,#38bdf8,#6366f1,#0ea5e9)] bg-[length:200%_200%]"
            />

            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-14 relative z-10">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="flex-1 space-y-5 text-center md:text-left"
                >
                    <motion.h1
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-700 leading-tight"
                    >
                        Complete School Management Software for Modern Educational Institutions
                    </motion.h1>

                    <motion.p
                        animate={{ opacity: [0.9, 1, 0.9] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto md:mx-0"
                    >
                        Manage Academics, Students, Accounts, Attendance, Communication,
                        Inventory, Transport, and More from a Single Powerful Platform.
                    </motion.p>

                    <div className="pt-2">
                        <motion.a
                            href="https://wa.me/8801847239701" 
                            target="_blank"
                            rel="noopener noreferrer"

                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{
                                boxShadow: [
                                    "0 0 0px rgba(14,165,233,0.4)",
                                    "0 0 20px rgba(14,165,233,0.6)",
                                    "0 0 0px rgba(14,165,233,0.4)"
                                ]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="bg-sky-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-black transition transform hover:scale-105 shadow-md relative overflow-hidden inline-block"
                        >

                            {/* Shine effect */}
                            <motion.span
                                animate={{ x: ["-120%", "120%"] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="absolute top-0 left-0 w-1/2 h-full bg-white/20 rotate-12"
                            />

                            Request a Free Demo Today
                        </motion.a>
                    </div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="flex-1 w-full"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative"
                    >

                        {/* subtle glow */}
                        <motion.div
                            animate={{ opacity: [0.2, 0.35, 0.2] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity
                            }}
                            className="absolute inset-0 bg-blue-200 opacity-20 blur-2xl rounded-2xl"
                        />

                        <motion.img
                            src="/mocup.png"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full max-w-md mx-auto md:max-w-full rounded-2xl shadow-xl"
                            alt="School Interface"
                        />

                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}