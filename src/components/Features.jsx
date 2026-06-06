import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    GraduationCap, FileText, Calculator, UserCircle,
    Users, BookOpen, Bell, Calendar,
    ShoppingCart, Package, Bus, ClipboardCheck
} from "lucide-react";

const features = [
    { title: "Academic Management", desc: "Manage classes, sections, subjects, examinations, grading, and curriculum.", icon: <GraduationCap size={22} /> },
    { title: "Result Management", desc: "Generate results, report cards, and track student progress automatically.", icon: <FileText size={22} /> },
    { title: "Accounts Management", desc: "Handle fees, income, expenses, financial reports, and payment tracking.", icon: <Calculator size={22} /> },
    { title: "Student Management", desc: "Maintain complete profiles, admissions, attendance, and academic history.", icon: <UserCircle size={22} /> },
    { title: "Teacher & Employee", desc: "Manage payroll, attendance, leave requests, and performance records.", icon: <Users size={22} /> },
    { title: "Diary & Assignment", desc: "Distribute homework, assignments, and class notes digitally.", icon: <BookOpen size={22} /> },
    { title: "Notification", desc: "Instant alerts via SMS, email, and app notifications to parents.", icon: <Bell size={22} /> },
    { title: "Notice & Events", desc: "Publish announcements and manage events/holidays in real time.", icon: <Calendar size={22} /> },
    { title: "Sales & Purchase", desc: "Track invoices, vendor transactions, and procurement history.", icon: <ShoppingCart size={22} /> },
    { title: "Inventory Management", desc: "Monitor stock, assets, stationery, and lab equipment levels.", icon: <Package size={22} /> },
    { title: "Transport Management", desc: "Manage vehicles, routes, drivers, and daily schedules.", icon: <Bus size={22} /> },
    { title: "Attendance Management", desc: "Automate student and employee attendance with accurate reporting.", icon: <ClipboardCheck size={22} /> },
];

const iconBg = ["bg-sky-700", "bg-sky-600", "bg-sky-500"];

export default function Features() {

    useEffect(() => {
        AOS.init({ duration: 700, once: true });
    }, []);

    return (
        <section className="py-24 px-4 bg-sky-50">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="text-center mb-16" data-aos="fade-down">
                    <span className="inline-block mb-4 px-5 py-1.5 rounded-full bg-sky-700 text-sky-100 text-xs font-bold tracking-widest uppercase">
                        What We Offer
                    </span>

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-extrabold text-sky-950 mb-3"
                    >
                        Powerful{" "}
                        <span className="text-sky-500">Features</span>
                    </motion.h2>

                    <p className="text-sky-700 text-base opacity-80 max-w-xl mx-auto">
                        Everything you need to manage your institution — all in one place.
                    </p>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "56px" }}
                        transition={{ duration: 0.6 }}
                        className="h-1 rounded-full bg-gradient-to-r from-sky-400 to-sky-700 mx-auto mt-5"
                    />
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {features.map((f, i) => {

                        // mouse tilt
                        const x = useMotionValue(0);
                        const y = useMotionValue(0);

                        const rotateX = useTransform(y, [-50, 50], [8, -8]);
                        const rotateY = useTransform(x, [-50, 50], [-8, 8]);

                        return (
                            <motion.div
                                key={i}
                                data-aos="fade-up"
                                data-aos-delay={i * 40}

                                style={{ rotateX, rotateY }}

                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    x.set(e.clientX - rect.left - rect.width / 2);
                                    y.set(e.clientY - rect.top - rect.height / 2);
                                }}

                                onMouseLeave={() => {
                                    x.set(0);
                                    y.set(0);
                                }}

                                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.05,
                                    type: "spring",
                                    stiffness: 120
                                }}

                                whileHover={{
                                    y: -10,
                                    scale: 1.03
                                }}

                                className="group relative flex items-start gap-4 bg-white border border-sky-200 rounded-2xl p-5 overflow-hidden
                                           transition-all duration-300 hover:border-sky-400"
                            >

                                {/* ✨ animated light sweep */}
                                <motion.div
                                    animate={{ x: ["-100%", "120%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute top-0 left-0 w-1/2 h-full bg-white/20 skew-x-12 blur-md opacity-0 group-hover:opacity-100"
                                />

                                {/* glow border */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300
                                                bg-gradient-to-r from-sky-300/20 to-sky-500/20 blur-xl" />

                                {/* subtle hover bg */}
                                <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                                {/* ICON */}
                                <motion.div
                                    animate={{ y: [0, -3, 0] }}
                                    transition={{ duration: 2.5, repeat: Infinity }}
                                    whileHover={{ rotate: 8, scale: 1.1 }}

                                    className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-white
                                                shadow-md transition-all duration-300
                                                ${iconBg[i % 3]}`}
                                >
                                    {f.icon}
                                </motion.div>

                                {/* TEXT */}
                                <div className="relative z-10">
                                    <h3 className="text-sm font-bold text-sky-950 mb-1">
                                        {f.title}
                                    </h3>

                                    <p className="text-xs text-sky-700 leading-relaxed opacity-85">
                                        {f.desc}
                                    </p>
                                </div>

                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}