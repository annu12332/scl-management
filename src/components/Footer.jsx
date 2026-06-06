import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-sky-900 text-white py-14 px-6 relative overflow-hidden">

            {/* top gradient line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-sky-400 via-white to-blue-500 opacity-60" />

            {/* animated blob */}
            <motion.div
                animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-sky-700/30 blur-3xl rounded-full"
            />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">

                {/* Brand */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold tracking-wide">
                        ThinkCodify
                    </h3>

                    <p className="text-sky-200 text-sm leading-relaxed">
                        Empowering educational institutions with next-generation
                        management tools. Streamline operations, improve efficiency,
                        and enhance learning experiences with our all-in-one system.
                    </p>

                    
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold border-b border-sky-700 pb-2 inline-block">
                        Quick Links
                    </h4>

                    <ul className="space-y-2 text-sm text-sky-200">
                        <li><a href="#features" className="hover:text-white transition">Features</a></li>
                        <li><a href="#benefits" className="hover:text-white transition">Benefits</a></li>
                        <li><a href="#why-choose-us" className="hover:text-white transition">Why Choose Us</a></li>
                        <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                        <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                    </ul>
                </div>

                {/* Features */}
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold border-b border-sky-700 pb-2 inline-block">
                        Core Features
                    </h4>

                    <ul className="space-y-2 text-sm text-sky-200">
                        <li>Student Management</li>
                        <li>Academic Tracking</li>
                        <li>Accounts & Finance</li>
                        <li>Attendance System</li>
                        <li>Communication Portal</li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold border-b border-sky-700 pb-2 inline-block">
                        Contact Us
                    </h4>

                    <ul className="space-y-3 text-sm text-sky-200">
                        <li className="flex items-center gap-3">
                            +880 184 723 9701
                        </li>
                        <li className="flex items-center gap-3">
                            info@thinkcodify.com
                        </li>
                        <li className="flex items-start gap-3">
                            <span>Suit 6C, Level 5, Tower 263, Tin Pool, Jubilee Rd, Chattogram, Bangladesh</span>
                        </li>
                    </ul>

                    {/* Google Map Embed */}
                    <div className="mt-4 overflow-hidden rounded-lg border border-sky-700 h-32">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.123456789!2d91.8308555!3d22.3376489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd900327d1daf%3A0xde4323a7cd714ec5!2sThinkCodify%20Suit%206C%2C%20Level%205%2C%20Tower%20263%20Tin%20Pool%2C%20Jubilee%20Rd%20Chattogram!5e0!3m2!1sen!2sbd!4v1625097600000!5m2!1sen!2sbd" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy"
                        ></iframe>
                    </div>

                    <a
                        href="https://wa.me/8801847239701"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 px-4 py-2 text-sm bg-sky-600 hover:bg-sky-500 rounded-lg transition"
                    >
                        Chat on WhatsApp
                    </a>
                </div>
            </div>

            {/* bottom */}
            <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-sky-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-sky-300 relative z-10">
                <p>
                    © {new Date().getFullYear()} ThinkCodify. All rights reserved.
                </p>
               
            </div>
        </footer>
    );
}