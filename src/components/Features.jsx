import { motion } from "framer-motion";

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
    return (
        <section className="py-14 px-4 bg-gradient-to-br from-sky-50 via-white to-blue-200">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
                    <span className="bg-gradient-to-r from-sky-700 via-sky-600 to-sky-500 bg-clip-text text-transparent">
                        Powerful Features
                    </span>
                </h2>

                {/* Grid Layout (Same for Mobile & Desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.03 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="group relative p-5 rounded-xl border border-white/30 bg-sky-200 backdrop-blur-xl shadow-md hover:shadow-lg transition"
                        >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-sky-400 opacity-0 group-hover:opacity-10 blur transition"></div>

                            <div className="relative z-10">
                                <h3 className="text-base font-semibold text-gray-800 mb-2">
                                    {f.title}
                                </h3>

                                <p className="text-sm text-gray-600 leading-relaxed">
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