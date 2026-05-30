"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const roles = ["Full-Stack Developer", "Software Engineer", "Problem Solver"];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-medium text-gray-400 mb-2">Hello, I'm</h2>
            <div className="h-16 md:h-20 flex items-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-6xl font-bold text-gradient"
                >
                  {roles[currentRole]}
                </motion.h1>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-lg leading-relaxed"
          >
            An enthusiastic Full-Stack Developer passionate about logical problem solving and web development. Experienced in building clean, responsive web projects and integrating smart, AI-driven applications using modern tech stacks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-3 rounded-full bg-gradient-neon text-white font-semibold glow-purple hover:scale-105 transition-transform duration-300">
              Hire Me
            </button>
          </motion.div>
        </div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-end relative"
        >
          <div className="relative w-72 h-[450px] md:w-80 md:h-[500px] rounded-[2rem] overflow-hidden bg-gray-900 glow-purple border border-gray-800">
            <Image 
              src="/profile.jpg" 
              alt="Ritika Singh Profile" 
              fill 
              className="object-cover"
              priority
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
