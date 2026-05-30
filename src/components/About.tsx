"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Server, Database, Cloud, Terminal } from "lucide-react";

type TabType = "Skills" | "Education" | "Certifications";

const skillsData = [
  { category: "Languages", icon: <Terminal className="w-5 h-5 text-neon-pink" />, items: "Python, JavaScript, Java" },
  { category: "Frontend", icon: <Code2 className="w-5 h-5 text-neon-purple" />, items: "React, Next.js, Tailwind CSS, Framer Motion" },
  { category: "Backend", icon: <Server className="w-5 h-5 text-neon-green" />, items: "Node.js, Express, NestJS, GraphQL" },
  { category: "Databases", icon: <Database className="w-5 h-5 text-blue-400" />, items: "MongoDB, MySQL, Redis" },
  { category: "DevOps", icon: <Cloud className="w-5 h-5 text-orange-400" />, items: "Render, AWS, CI/CD, Git" },
];

const educationData = [
  { title: "Bachelor's of Technology", institution: "Pranveer Singh Institute Of Technology", year: "2023-2027", detail: "(Information Technology)" },
];

const certificationsData = [
  { title: "Salesforce agentblazer & Trailhead", issuer: "salesforce", year: "2025" },
  { title: "Software Engineering Virtual Experience", issuer: "JP Morgan Chase", year: "2025" },
  { title: "Certificate of Membership", issuer: "IEEE Computer Society", year: "2025" },
];

export default function About() {
  const [activeTab, setActiveTab] = useState<TabType>("Skills");

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: High-Tech Workspace Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative h-[600px] rounded-3xl overflow-hidden border border-gray-800 bg-gray-900 group"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:opacity-50 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-neon-purple)]/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Digital Workspace</h3>
            <p className="text-gray-400 text-sm">Where code meets creativity.</p>
          </div>
        </motion.div>

        {/* Right Side: About & Tabs */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              I am a Full-Stack Developer passionate about creating scalable backend systems and intuitive digital experiences. Beyond engineering, I thrive in collaborative spaces—whether it's innovating at the Smart India Hackathon (SIH), contributed as an active IEEE member, or leading initiatives through campus volunteering. Driven by curiosity, I love blending technical problem-solving with community leadership and exploring the latest in AI.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 border-b border-gray-800 pb-2">
            {(["Skills", "Education", "Certifications"] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 py-2 text-sm md:text-base font-medium transition-colors ${
                  activeTab === tab ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-[9px] left-0 right-0 h-[2px] bg-gradient-neon"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "Skills" && (
                  <div className="space-y-4">
                    {skillsData.map((skill, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors">
                        <div className="p-3 bg-black rounded-lg">
                          {skill.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">{skill.category}</h4>
                          <p className="text-gray-400 text-sm">{skill.items}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "Education" && (
                  <div className="space-y-6">
                    {educationData.map((edu, idx) => (
                      <div key={idx} className="relative pl-6 border-l-2 border-[var(--color-neon-purple)]">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-neon-pink)] glow-pink" />
                        <h4 className="text-xl font-bold text-white">{edu.title}</h4>
                        <p className="text-[var(--color-neon-purple)] font-medium my-1">{edu.institution} | {edu.year}</p>
                        <p className="text-gray-400">{edu.detail}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "Certifications" && (
                  <div className="space-y-4">
                    {certificationsData.map((cert, idx) => (
                      <div key={idx} className="p-5 rounded-xl bg-gradient-to-r from-gray-900 to-black border border-gray-800">
                        <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-gray-400 text-sm">{cert.issuer}</span>
                          <span className="text-[var(--color-neon-green)] text-sm font-mono">{cert.year}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
