"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send } from "lucide-react";

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>([
    { role: "ai", content: "Hi! I'm Ritika's AI assistant. Ask me anything about her portfolio, skills, or experience!" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    const currentInput = input;
    setInput("");

    // Smart AI response logic
    setTimeout(() => {
      const lowerInput = currentInput.toLowerCase();
      let response = "That's outside my current scope. I'm here to assist with questions about Ritika's portfolio, projects, skills, and professional journey";

      if (lowerInput.includes("about") || lowerInput.includes("who is")) {
        response = "Ritika is a Full-Stack Developer passionate about creating scalable backend systems and intuitive digital experiences. She has participated in the Smart India Hackathon (SIH) and is an active IEEE member.";
      } else if (lowerInput.includes("skill") || lowerInput.includes("tech") || lowerInput.includes("language")) {
        response = "Ritika's skills include Python, JavaScript, Java, React, Next.js, Node.js, MongoDB, MySQL, Redis, and DevOps tools like Render and AWS.";
      } else if (lowerInput.includes("education") || lowerInput.includes("college") || lowerInput.includes("degree")) {
        response = "She is pursuing her Bachelor's of Technology in Information Technology from Pranveer Singh Institute Of Technology (2023-2027).";
      } else if (lowerInput.includes("certificat") || lowerInput.includes("achieve")) {
        response = "She holds certifications as a Salesforce agentblazer (2025), completed a Software Engineering Virtual Experience from JP Morgan Chase (2025), and holds a Certificate of Membership from IEEE Computer Society.";
      } else if (lowerInput.includes("project") || lowerInput.includes("work") || lowerInput.includes("build")) {
        response = "Her top projects include GoalProof (milestone tracker), SourceVault (encrypted cloud repo), AI Business Analytics Co-Pilot, and an AI Powered Smart Attendance system.";
      } else if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("hire") || lowerInput.includes("reach")) {
        response = "You can email her directly at rritikasingh2005@gmail.com, or send a message through the Contact form at the bottom of the page!";
      } else if (lowerInput.includes("github")) {
        response = "You can check out her code on GitHub: https://github.com/RitikaSingh2005";
      } else if (lowerInput.includes("linkedin")) {
        response = "You can connect with her on LinkedIn: https://www.linkedin.com/in/ritikasingh7253";
      } else if (lowerInput === "hi" || lowerInput.includes("hello") || lowerInput.includes("hey")) {
        response = "Hello! I am here to answer any questions about Ritika's skills, projects, and education. What would you like to know?";
      }

      setMessages((prev) => [
        ...prev,
        { role: "ai", content: response }
      ]);
    }, 600);
  };

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-[350px] bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col glow-purple origin-bottom-right"
          >
            {/* Header */}
            <div className="bg-black/50 p-4 border-b border-gray-800 flex justify-between items-center relative">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-neon" />
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-neon flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Ritika's AI</h4>
                  <p className="text-green-400 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 h-[300px] overflow-y-auto space-y-4 bg-gray-900/50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                    msg.role === "user" 
                      ? "bg-[var(--color-neon-purple)] text-white rounded-br-none" 
                      : "bg-gray-800 text-gray-200 rounded-bl-none border border-gray-700"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 bg-black/50 border-t border-gray-800 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 bg-gray-800 border border-gray-700 rounded-full px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[var(--color-neon-purple)] transition-colors"
              />
              <button 
                type="submit"
                className="w-10 h-10 rounded-full bg-gradient-neon flex items-center justify-center hover:scale-105 transition-transform shrink-0"
              >
                <Send className="w-4 h-4 text-white -ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-neon text-white flex items-center justify-center shadow-lg z-50 glow-pink"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="bot"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <Bot className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
