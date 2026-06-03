import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
    { title: "Academic Management", desc: "Manage classes, sections, subjects, examinations, grading, and curriculum." },
    { title: "Result Management", desc: "Generate results, report cards, and track student progress automatically." },
    { title: "Accounts Management", desc: "Handle fees, income, expenses, financial reports, and payment tracking." },
    { title: "Student Management", desc: "Maintain complete profiles, admissions, attendance, and academic history." },
    { title: "Teacher & Employee", desc: "Manage payroll, attendance, leave requests, and performance." },
    { title: "Diary & Assignment", desc: "Distribute homework, assignments, and class notes digitally." },
    { title: "Notification", desc: "Instant alerts via SMS, email, and app notifications." },
    { title: "Notice & Events", desc: "Publish announcements and manage events/holidays in real time." },
    { title: "Sales & Purchase", desc: "Track invoices, vendor transactions, and procurement." },
    { title: "Inventory Management", desc: "Monitor stock, assets, stationery, and lab equipment." },
    { title: "Transport Management", desc: "Manage vehicles, routes, drivers, and schedules." },
    { title: "Attendance Management", desc: "Automate student and employee attendance with accurate reporting." }
];

export default function Features() {

    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out-cubic",
            once: true,
            offset: 50
        });
    }, []);

    return (
        <section className="py-14 px-4 bg-gradient-to-br from-sky-50 via-white to-sky-50 overflow-hidden relative">

            {/* Animated background */}
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

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Heading */}
                <h2
                    data-aos="fade-down"
                    className="text-2xl md:text-4xl font-bold text-center mb-10"
                >
                    <span className="bg-gradient-to-r from-sky-700 via-sky-600 to-sky-500 bg-clip-text text-transparent">
                        Powerful Features
                    </span>
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}

                            // AOS animation per card
                            data-aos="zoom-in-up"
                            data-aos-delay={i * 70}

                            whileHover={{ y: -6, scale: 1.03 }}
                            whileTap={{ scale: 0.96 }}

                            transition={{
                                type: "spring",
                                stiffness: 180,
                                damping: 15
                            }}

                            className="group relative p-5 rounded-xl border border-white/30 bg-sky-700 backdrop-blur-xl shadow-md hover:shadow-2xl transition overflow-hidden"
                        >

                            {/* Glow pulse */}
                            <motion.div
                                animate={{ opacity: [0.05, 0.15, 0.05] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-sky-400 blur-xl"
                            />

                            {/* Shine sweep */}
                            <motion.div
                                animate={{ x: ["-120%", "120%"] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 0.2
                                }}
                                className="absolute top-0 left-0 w-1/2 h-full bg-white/10 rotate-12 blur-md"
                            />

                            {/* Floating dots */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute right-3 top-3 w-2 h-2 bg-white/40 rounded-full"
                            />

                            <div className="relative z-10">
                                <h3 className="text-base font-semibold text-white mb-2">
                                    {f.title}
                                </h3>

                                <p className="text-sm text-gray-100 leading-relaxed">
                                    {f.desc}
                                </p>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}