import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="bg-gradient-to-br from-sky-50 via-white to-blue-100 py-16 md:py-20 px-4 md:px-6 overflow-hidden">
            
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-14">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="flex-1 space-y-5 text-center md:text-left"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                        Complete School Management Software for Modern Educational Institutions
                    </h1>

                    <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto md:mx-0">
                        Manage Academics, Students, Accounts, Attendance, Communication,
                        Inventory, Transport, and More from a Single Powerful Platform.
                    </p>

                    <div className="pt-2">
                        <button className="bg-blue-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-black transition transform hover:scale-105 shadow-md">
                            Request a Free Demo Today
                        </button>
                    </div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="flex-1 w-full"
                >
                    <div className="relative">

                        {/* subtle glow */}
                        <div className="absolute inset-0 bg-blue-200 opacity-20 blur-2xl rounded-2xl"></div>

                        <img
                            src="/mocup.png"
                            className="relative w-full max-w-md mx-auto md:max-w-full rounded-2xl shadow-xl hover:scale-[1.02] transition duration-300"
                            alt="School Interface"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}