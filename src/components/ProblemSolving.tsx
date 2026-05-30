"use client";

import { motion } from "framer-motion";
import { Trophy, Target, Zap, BrainCircuit } from "lucide-react";

export default function ProblemSolving() {
  return (
    <section id="problem-solving" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Problem <span className="text-gradient">Solving</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Consistent practice and algorithmic thinking on LeetCode.
          </motion.p>
        </div>

        {/* Dashboard Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gray-900 border border-gray-800 p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-neon-green)]/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid md:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Side: Badge */}
            <div className="md:col-span-5 flex flex-col items-center justify-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative w-48 h-48 rounded-full bg-black border-2 border-[var(--color-neon-green)] flex items-center justify-center glow-green mb-6"
              >
                <div className="absolute inset-0 rounded-full border-4 border-dashed border-[var(--color-neon-green)]/30 animate-[spin_10s_linear_infinite]" />
                <Trophy className="w-20 h-20 text-[var(--color-neon-green)]" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white tracking-widest uppercase">Knight</h3>
              <p className="text-gray-400 text-sm mt-1">Badge Title</p>
            </div>

            {/* Right Side: Stats Grid */}
            <div className="md:col-span-7 space-y-6">
              
              {/* Total Solved Box */}
              <div className="bg-black/50 rounded-2xl p-6 border border-gray-800 hover:border-[var(--color-neon-green)]/50 transition-colors">
                <div className="flex items-center gap-4 mb-2">
                  <Target className="w-6 h-6 text-gray-400" />
                  <span className="text-gray-400 font-medium">Total Problems Solved</span>
                </div>
                <div className="text-5xl font-bold text-white">
                  1257
                </div>
              </div>

              {/* Difficulty Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-black/50 rounded-2xl p-4 border border-gray-800 text-center hover:border-[#00b8a3]/50 transition-colors">
                  <span className="block text-gray-400 text-sm mb-1">Easy</span>
                  <span className="text-2xl font-bold text-[#00b8a3]">440</span>
                </div>
                <div className="bg-black/50 rounded-2xl p-4 border border-gray-800 text-center hover:border-[#ffc01e]/50 transition-colors">
                  <span className="block text-gray-400 text-sm mb-1">Medium</span>
                  <span className="text-2xl font-bold text-[#ffc01e]">673</span>
                </div>
                <div className="bg-black/50 rounded-2xl p-4 border border-gray-800 text-center hover:border-[#ff375f]/50 transition-colors">
                  <span className="block text-gray-400 text-sm mb-1">Hard</span>
                  <span className="text-2xl font-bold text-[#ff375f]">144</span>
                </div>
              </div>

              {/* Global Ranking */}
              <div className="bg-gradient-to-r from-[var(--color-neon-green)]/20 to-transparent rounded-2xl p-6 border border-[var(--color-neon-green)]/30">
                <div className="flex items-center gap-4 justify-between">
                  <div className="flex items-center gap-3">
                    <BrainCircuit className="w-6 h-6 text-[var(--color-neon-green)]" />
                    <span className="text-white font-medium text-lg">Global Ranking</span>
                  </div>
                  <span className="text-3xl font-bold text-[var(--color-neon-green)] text-shadow-neon">
                    13,631
                  </span>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
