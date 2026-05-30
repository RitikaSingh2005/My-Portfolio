"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-neon glow-purple"
        >
          <span className="text-white font-bold text-xl tracking-wider">RS</span>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8">
          {["About", "Projects", "Contact"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <Link 
                href={`#${item.toLowerCase().replace(" ", "-")}`} 
                className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium hover:text-shadow-neon"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </header>
  );
}
