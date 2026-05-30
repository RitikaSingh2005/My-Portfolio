"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type ProjectType = {
  title: string;
  description: string;
  techStack: string[];
  imageText: string;
  liveLink?: string;
  imageUrl?: string;
};

const projects: ProjectType[] = [
  {
    title: "GoalProof",
    description: "An advanced milestone tracker and productivity platform designed to help users define, track, and achieve their long-term goals with analytics and smart reminders.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    imageText: "GoalProof Dashboard Preview",
    liveLink: "https://goalproof-portal-frontend.onrender.com/employee",
    imageUrl: "/goalproof.png",
  },
  {
    title: "SourceVault",
    description: "A highly secure, encrypted cloud repository for developer code and assets. Features zero-knowledge encryption to ensure that your proprietary algorithms stay private.",
    techStack: ["React", "Node.js", "MongoDB", "WebCrypto API"],
    imageText: "SourceVault UI Preview",
    imageUrl: "/sourcevault.jpg",
  },
  {
    title: "AI Business Analytics Co-Pilot",
    description: "Developed an AI-powered analytics web application that allows users to upload datasets and analyze data using natural language queries. Implemented automated data processing and interactive visual dashboards using Python and Pandas, while integrating NLP-based insights to support data-driven decision-making.",
    techStack: ["React.js", "Python", "MySQL", "NLP Libraries"],
    imageText: "Analytics Dashboard Preview",
    imageUrl: "/ai-analytics.jpg",
  },
  {
    title: "AI Powered Smart Attendance",
    description: "An automated attendance solution leveraging Computer Vision and Face Recognition to replace manual roll calls, prevent proxy attendance, and provide real-time, accurate classroom insights.",
    techStack: ["OpenCV", "TensorFlow", "numpy", "pandas"],
    imageText: "Smart Attendance System",
    imageUrl: "/smart-attendance.jpg",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-gradient">Projects</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden group hover:border-[var(--color-neon-purple)]/50 transition-colors duration-300 relative"
            >
              {/* Subtle Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-neon-purple)]/0 to-[var(--color-neon-purple)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Image Placeholder */}
              <div className="h-64 bg-black relative border-b border-gray-800 overflow-hidden">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                      <span className="text-gray-500 font-mono text-sm tracking-widest uppercase text-center px-4">{project.imageText}</span>
                    </div>
                    {/* Tech overlay effect */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[var(--color-neon-pink)] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a href="https://github.com/RitikaSingh2005" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <FaGithub className="w-5 h-5" />
                    </a>
                    {project.liveLink ? (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-neon-purple)] transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    ) : (
                      <button className="text-gray-400 hover:text-[var(--color-neon-purple)] transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-full bg-black border border-gray-700 text-xs font-medium text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
