"use client";

import { motion } from "framer-motion";
import { Code, Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-black relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--color-neon-purple)]/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[var(--color-neon-pink)]/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Let's Connect */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
            Actively seeking opportunities to learn, grow, and contribute as a Software Developer. Feel free to reach out
          </p>

          <div className="flex flex-col gap-6">
            <a href="https://github.com/RitikaSingh2005" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white group transition-colors">
              <div className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-[var(--color-neon-purple)] group-hover:glow-purple transition-all">
                <FaGithub className="w-5 h-5" />
              </div>
              <span className="font-medium">GitHub Profile</span>
            </a>
            


            <a href="https://www.linkedin.com/in/ritikasingh7253" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white group transition-colors">
              <div className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-[#0077B5] group-hover:shadow-[0_0_15px_2px_rgba(0,119,181,0.4)] transition-all">
                <FaLinkedin className="w-5 h-5" />
              </div>
              <span className="font-medium">LinkedIn Network</span>
            </a>
            
            <a href="mailto:rritikasingh2005@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white group transition-colors mt-4">
              <div className="w-12 h-12 rounded-full bg-gradient-neon flex items-center justify-center glow-pink">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium">rritikasingh2005@gmail.com</span>
            </a>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form action="https://formsubmit.co/rritikasingh2005@gmail.com" method="POST" className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-8 rounded-3xl shadow-2xl relative">
            
            {/* Top border glow */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[var(--color-neon-pink)]/50 to-transparent" />

            <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Your email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-black/50 border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-neon-purple)] focus:ring-1 focus:ring-[var(--color-neon-purple)] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  placeholder="Job Opportunity"
                  className="w-full bg-black/50 border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-neon-purple)] focus:ring-1 focus:ring-[var(--color-neon-purple)] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  rows={4}
                  name="message"
                  required
                  placeholder="How can I help you?"
                  className="w-full bg-black/50 border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-neon-purple)] focus:ring-1 focus:ring-[var(--color-neon-purple)] transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-gradient-neon text-white font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform duration-300 glow-purple mt-4"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
