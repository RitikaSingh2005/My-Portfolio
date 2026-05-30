import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import FloatingChatbot from "@/components/FloatingChatbot";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-deep-black)] text-white overflow-hidden selection:bg-[var(--color-neon-purple)] selection:text-white">
      {/* Abstract background ambient glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--color-neon-purple)]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[var(--color-neon-pink)]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <FloatingChatbot />
      </div>
    </main>
  );
}
