import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-6 px-10 bg-white shadow-sm sticky top-0 z-50">
            <div className="text-2xl font-bold text-blue-500">ThinkCodify</div>
           
            <button className="bg-sky-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-sky-600">Request Demo</button>
        </nav>
    );
}