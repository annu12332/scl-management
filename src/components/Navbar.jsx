import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // scrolling down
                setVisible(false);
                setOpen(false); // close menu when scrolling
            } else {
                // scrolling up
                setVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.nav
                    initial={{ y: -80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -80, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 left-0 w-full z-50 px-3 pt-3"
                >
                    {/* Glass Container */}
                    <div className="flex items-center justify-between px-4 py-2.5 md:px-8 md:py-3
                        rounded-xl bg-white/40 backdrop-blur-2xl border border-white/30
                        shadow-[0_4px_20px_rgba(0,0,0,0.05)]">

                        {/* Logo */}
                        <div className="text-lg md:text-xl font-bold text-blue-600">
                            ThinkCodify
                        </div>

                        {/* Desktop Button */}
                        <button className="hidden md:block text-sm bg-gradient-to-r from-sky-500 to-blue-500 
                            text-white px-5 py-1.5 rounded-md font-semibold">
                            Request Demo
                        </button>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="md:hidden text-blue-700 text-xl"
                        >
                            {open ? "✕" : "☰"}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="mt-2 mx-1 rounded-xl bg-white/40 backdrop-blur-2xl 
                                border border-white/30 shadow-md p-3"
                            >
                                <button className="w-full text-sm bg-gradient-to-r from-sky-500 to-blue-500 
                                    text-white py-2 rounded-md font-semibold">
                                    Request Demo
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </motion.nav>
            )}
        </AnimatePresence>
    );
}