"use client"

import { WorksGallery } from "@/components/works-gallery"
import { AntigravityCluster } from "@/components/antigravity-cluster"
import { Github, Linkedin, Mail, Trophy, Users, Zap, Target, Award, Flag, Heart, ExternalLink, Cpu, Database, Code2, BrainCircuit } from "lucide-react"
import { useState } from "react"

export default function Page() {
  const [isEntered, setIsEntered] = useState(false)

  if (!isEntered) {
    return (
      <div className="min-h-screen bg-[#131313] flex items-center justify-center">
        <button
          onClick={() => setIsEntered(true)}
          className="px-12 py-4 bg-transparent border border-[#EFD395]/40 text-[#EFD395] font-mono text-sm tracking-[0.3em] uppercase hover:bg-[#EFD395]/10 hover:border-[#EFD395] transition-all duration-500 rounded-full hover:shadow-[0_0_30px_rgba(239,211,149,0.2)] hover:scale-105"
        >
          Enter Portfolio
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 backdrop-blur-md bg-black/60 border-b border-white/5">
        <div></div>
        <nav className="flex items-center gap-6 text-sm font-mono tracking-wider">
          <a href="#projects" className="text-white/50 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all hidden sm:block text-sm tracking-[0.2em]">PROJECTS</a>
          <a href="#skills" className="text-white/50 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all hidden sm:block text-sm tracking-[0.2em]">SKILLS</a>
          <a href="#achievements" className="text-white/50 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all hidden md:block text-sm tracking-[0.2em]">ACHIEVEMENTS</a>
          <a href="#contact" className="text-white/50 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all text-sm tracking-[0.2em]">CONTACT</a>
          <div className="w-px h-4 bg-white/10" />
          <a href="https://github.com/UTKI20" target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/utkarshsingh2002/" target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
            <Linkedin className="w-4 h-4" />
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-8 min-h-screen flex items-center bg-[#131313] border-b border-white/5 overflow-hidden">
        <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

          {/* Left Side: Content */}
          <div className="flex flex-col pr-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <p className="text-[#A4A4A4] font-mono text-sm tracking-[0.3em] uppercase">
                CS Undergraduate · 3rd Year · BVCOE · CGPA 9.36
              </p>
            </div>

            <h1 className="text-[#EFD395] text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tight mb-8 leading-[0.95]">
              UTKARSH<br />
              SINGH
            </h1>

            <p className="text-[#A4A4A4] text-lg max-w-xl leading-relaxed font-light mb-16">
              I build AI systems that solve real-world problems, from bias analysis engines and mental health assistants to astronomical discovery tools.
            </p>

            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
              {[
                { value: "4+", label: "AI PROJECTS BUILT" },
                { value: "25", label: "CBT FRAMEWORKS" },
                { value: "<100ms", label: "QUERY LATENCY" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-[#EFD395] text-4xl font-bold font-mono">{stat.value}</p>
                  <p className="text-[#EFD395] font-mono text-[10px] tracking-[0.2em] uppercase mt-3">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: The Antigravity IDE Container */}
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden flex items-center justify-center group cursor-crosshair">

            {/* LAYER 1: The Interactive Visual */}
            <div className="absolute inset-0 z-10 transition-transform duration-[800ms] ease-out group-hover:scale-[1.03] group-hover:rotate-1">
              <AntigravityCluster />
              {/* Gradient mask to blend left edge with the #131313 background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#131313] via-[#131313]/50 to-transparent lg:block hidden w-40 pointer-events-none" />
            </div>

            {/* LAYER 2: Text Overlay (IDE labels and buttons) */}
            <div className="absolute inset-0 z-20 pointer-events-none p-10 flex flex-col">

              {/* Suspended Floating Links */}
              <div className="absolute inset-0 overflow-hidden">
                <a href="https://github.com/UTKI20" target="_blank" rel="noopener noreferrer" className="absolute top-[12%] left-[10%] pointer-events-auto text-[#EFD395] text-[14px] md:text-[18px] font-bold font-mono tracking-widest border border-[#EFD395]/40 bg-[#131313]/80 backdrop-blur-md px-6 py-3 rounded-full shadow-[0_0_20px_rgba(239,211,149,0.3)] hover:scale-110 hover:bg-[#EFD395] hover:text-[#131313] transition-all animate-pulse flex items-center gap-2">
                  GITHUB ↗
                </a>
                <a href="https://www.linkedin.com/in/utkarshsingh2002/" target="_blank" rel="noopener noreferrer" className="absolute top-[50%] right-[2%] pointer-events-auto text-[#EFD395] text-[14px] md:text-[18px] font-bold font-mono tracking-widest border border-[#EFD395]/40 bg-[#131313]/80 backdrop-blur-md px-6 py-3 rounded-full shadow-[0_0_20px_rgba(239,211,149,0.3)] hover:scale-110 hover:bg-[#EFD395] hover:text-[#131313] transition-all animate-[pulse_4s_ease-in-out_infinite] flex items-center gap-2">
                  LINKEDIN ↗
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="absolute bottom-[15%] left-[8%] pointer-events-auto text-[#EFD395] text-[14px] md:text-[18px] font-bold font-mono tracking-widest border border-[#EFD395]/40 bg-[#131313]/80 backdrop-blur-md px-6 py-3 rounded-full shadow-[0_0_20px_rgba(239,211,149,0.3)] hover:scale-110 hover:bg-[#EFD395] hover:text-[#131313] transition-all animate-[pulse_5s_ease-in-out_infinite] flex items-center gap-2">
                  RESUME ↓
                </a>
              </div>

              {/* Buttons at Bottom Right */}
              <div className="mt-auto self-end flex gap-4 pointer-events-auto">
                <a href="#projects"
                  className="px-8 py-3 bg-[#EFD395] text-[#131313] font-mono text-[10px] tracking-[0.25em] font-bold uppercase rounded-full hover:shadow-[0_0_30px_rgba(239,211,149,0.5)] hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  Explore Work
                </a>
                <a href="https://leetcode.com/u/utki20/" target="_blank" rel="noopener noreferrer"
                  className="px-8 py-3 bg-[#4B4A48]/60 backdrop-blur-md border border-[#EFD395]/50 text-[#EFD395] font-mono text-[10px] tracking-[0.25em] uppercase rounded-full hover:bg-[#EFD395]/20 hover:text-[#EFD395] hover:border-[#EFD395] hover:shadow-[0_0_20px_rgba(239,211,149,0.3)] hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  LeetCode ↗
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Works Gallery */}
      <main id="projects" className="py-16">
        <div className="text-center mb-10 px-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-px bg-white/20" />
            <h2 className="text-white/40 font-mono text-sm tracking-[0.3em] uppercase">Featured Work</h2>
            <div className="w-8 h-px bg-white/20" />
          </div>
          <p className="text-white/40 font-mono text-base mt-3 tracking-wider">Hover to explore · Click to view on GitHub or Live Demo</p>
        </div>
        <WorksGallery />
      </main>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-white/30" />
            <h2 className="text-white/40 font-mono text-sm tracking-[0.3em] uppercase">Technical Expertise</h2>
          </div>
          <p className="text-white text-3xl font-bold tracking-tight mb-10">Skills & Technologies</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* AI / ML */}
            <div className="p-8 rounded-2xl border border-purple-500/30 bg-purple-500/[0.03] hover:bg-purple-500/[0.06] hover:border-purple-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-purple-300 font-mono text-sm tracking-[0.2em] uppercase">AI / ML</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Deep Learning", "CNNs", "NLP", "LLMs", "RAG", "Computer Vision", "SHAP", "SMOTE", "Transformers"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-200 text-xs font-mono tracking-wider hover:bg-purple-500/20 hover:text-purple-100 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages & Frameworks */}
            <div className="p-8 rounded-2xl border border-blue-500/30 bg-blue-500/[0.03] hover:bg-blue-500/[0.06] hover:border-blue-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-blue-300 font-mono text-sm tracking-[0.2em] uppercase">Languages & Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Python", "TypeScript", "JavaScript", "SQL", "TensorFlow", "React", "Next.js", "FastAPI", "Hugging Face"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-200 text-xs font-mono tracking-wider hover:bg-blue-500/20 hover:text-blue-100 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Databases */}
            <div className="p-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.03] hover:bg-emerald-500/[0.06] hover:border-emerald-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <Database className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-emerald-300 font-mono text-sm tracking-[0.2em] uppercase">Tools & Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["ChromaDB", "PostgreSQL", "Supabase", "Prisma", "Git", "Streamlit", "Node.js", "Langchain"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-200 text-xs font-mono tracking-wider hover:bg-emerald-500/20 hover:text-emerald-100 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hackathons & Engineering Competitions */}
      <section id="achievements" className="py-24 px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-white/30" />
            <h2 className="text-white/40 font-mono text-sm tracking-[0.3em] uppercase">Competitive Achievements</h2>
          </div>
          <p className="text-white text-3xl font-bold tracking-tight mb-10">Hackathons & Competitions</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* InNerve 9 */}
            <div className="group relative p-8 rounded-2xl border border-cyan-500/30 bg-cyan-500/[0.03] hover:border-cyan-500/50 hover:bg-cyan-500/[0.06] transition-all duration-300">
              <div className="flex items-start justify-between mb-5">
                <Trophy className="w-6 h-6 text-cyan-400" />
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 text-cyan-200 rounded-full text-[10px] font-mono tracking-[0.2em] uppercase">
                  FINALIST
                </span>
              </div>
              <h3 className="text-white font-bold text-lg mb-1 tracking-tight">Innerve 9</h3>
              <p className="text-cyan-200/50 font-mono text-xs tracking-[0.2em] uppercase mb-4">Hackathon · 2025</p>
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl font-bold text-white font-mono">30</span>
                <span className="text-white/50 text-base font-mono">/ 2,500+ teams</span>
              </div>
              <p className="text-white/60 text-base leading-relaxed mt-3">National-level finalist among thousands of competing engineering teams.</p>
            </div>

            {/* HackWithInfy */}
            <div className="group relative p-8 rounded-2xl border border-orange-500/30 bg-orange-500/[0.03] hover:border-orange-500/50 hover:bg-orange-500/[0.06] transition-all duration-300">
              <div className="flex items-start justify-between mb-5">
                <Zap className="w-6 h-6 text-orange-400" />
                <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 text-orange-200 rounded-full text-[10px] font-mono tracking-[0.2em] uppercase">
                  ROUND 2
                </span>
              </div>
              <h3 className="text-white font-bold text-lg mb-1 tracking-tight">HackWithInfy 2026</h3>
              <p className="text-orange-200/50 font-mono text-xs tracking-[0.2em] uppercase mb-4">Infosys · National</p>
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl font-bold text-white font-mono">R2</span>
                <span className="text-white/50 text-base font-mono">Advanced</span>
              </div>
              <p className="text-white/60 text-base leading-relaxed mt-3">Infosys's national competitive coding tournament for engineering students.</p>
            </div>

            {/* DecodeX */}
            <div className="group relative p-8 rounded-2xl border border-rose-500/30 bg-rose-500/[0.03] hover:border-rose-500/50 hover:bg-rose-500/[0.06] transition-all duration-300">
              <div className="flex items-start justify-between mb-5">
                <Target className="w-6 h-6 text-rose-400" />
                <span className="px-3 py-1 bg-rose-500/20 border border-rose-500/30 text-rose-200 rounded-full text-[10px] font-mono tracking-[0.2em] uppercase">
                  FINALIST
                </span>
              </div>
              <h3 className="text-white font-bold text-lg mb-1 tracking-tight">Decodex 2025</h3>
              <p className="text-rose-200/50 font-mono text-xs tracking-[0.2em] uppercase mb-4">Hackathon · 2025</p>
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl font-bold text-white font-mono">Top</span>
                <span className="text-white/50 text-base font-mono">Finalist</span>
              </div>
              <p className="text-white/60 text-base leading-relaxed mt-3">Secured a top position among competitive teams at the technical hackathon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Campus Impact */}
      <section className="py-24 px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-white/30" />
            <h2 className="text-white/40 font-mono text-sm tracking-[0.3em] uppercase">Campus Involvement</h2>
          </div>
          <p className="text-white text-3xl font-bold tracking-tight mb-10">Leadership & Extracurriculars</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* CSBS */}
            <div className="p-8 rounded-2xl border border-indigo-500/30 bg-indigo-500/[0.03] hover:bg-indigo-500/[0.06] hover:border-indigo-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center shrink-0 border border-indigo-500/30">
                  <Users className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">CSBS Student Association</h3>
                  <span className="inline-block px-2.5 py-1 bg-indigo-500/20 border border-indigo-500/30 text-indigo-200 rounded text-[10px] font-mono tracking-wider mb-2">
                    Deputy Joint Secretary
                  </span>
                  <p className="text-indigo-200/50 text-xs mb-3 font-mono">Bharatiyam 2026</p>
                  <p className="text-white/60 text-base leading-relaxed">
                    {"Spearheaded 'imPROMPTu', a flagship competitive event driving student engagement."}
                  </p>
                </div>
              </div>
            </div>

            {/* GDSC */}
            <div className="p-8 rounded-2xl border border-yellow-500/30 bg-yellow-500/[0.03] hover:bg-yellow-500/[0.06] hover:border-yellow-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center shrink-0 border border-yellow-500/30">
                  <Award className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">Google Developer Student Clubs</h3>
                  <span className="inline-block px-2.5 py-1 bg-yellow-500/20 border border-yellow-500/30 text-yellow-200 rounded text-[10px] font-mono tracking-wider mb-2">
                    AI/ML Associate
                  </span>
                  <p className="text-yellow-200/50 text-xs mb-3 font-mono">GDSC BVCOE · 2024–2025</p>
                  <p className="text-white/60 text-base leading-relaxed">
                    Driving technical workshops and community engagement focused on AI/ML technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* NSS */}
            <div className="p-8 rounded-2xl border border-pink-500/30 bg-pink-500/[0.03] hover:bg-pink-500/[0.06] hover:border-pink-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center shrink-0 border border-pink-500/30">
                  <Heart className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">National Service Scheme</h3>
                  <span className="inline-block px-2.5 py-1 bg-pink-500/20 border border-pink-500/30 text-pink-200 rounded text-[10px] font-mono tracking-wider mb-2">
                    Active Volunteer
                  </span>
                  <p className="text-pink-200/50 text-xs mb-3 font-mono">NSS BVCOE</p>
                  <p className="text-white/60 text-base leading-relaxed">
                    Contributing to community service initiatives and social outreach programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Athletics */}
      <section className="py-24 px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-white/30" />
            <h2 className="text-white/40 font-mono text-sm tracking-[0.3em] uppercase">Beyond Tech</h2>
          </div>
          <p className="text-white text-3xl font-bold tracking-tight mb-10">Athletics & Team Resilience</p>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 p-8 rounded-2xl border border-amber-500/30 bg-amber-500/[0.03] hover:bg-amber-500/[0.06] hover:border-amber-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
                  <Flag className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-base">CSBS Department Captain</p>
                  <p className="text-amber-200/50 text-xs font-mono tracking-wider uppercase mt-1">Kho-Kho · Annual Fest 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-white font-mono">Semi-Finals</span>
                <span className="px-2.5 py-1 bg-amber-500/20 border border-amber-500/30 text-amber-200 rounded text-[10px] font-mono uppercase tracking-wider">CAPTAIN</span>
              </div>
              <p className="text-white/60 text-base leading-relaxed mt-4">Captained the CSBS department Kho-Kho team to the tournament semi-finals.</p>
            </div>

            <div className="flex-1 p-8 rounded-2xl border border-teal-500/30 bg-teal-500/[0.03] hover:bg-teal-500/[0.06] hover:border-teal-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center border border-teal-500/30">
                  <Trophy className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-base">Inter-College Tournament</p>
                  <p className="text-teal-200/50 text-xs font-mono tracking-wider uppercase mt-1">Kho-Kho · 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-white font-mono">Runners-Up</span>
                <span className="px-2.5 py-1 bg-teal-500/20 border border-teal-500/30 text-teal-200 rounded text-[10px] font-mono uppercase tracking-wider">2ND PLACE</span>
              </div>
              <p className="text-white/60 text-base leading-relaxed mt-4">Secured inter-college runners-up representing the institution at competitive level.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-white/30" />
            <h2 className="text-white/40 font-mono text-sm tracking-[0.3em] uppercase">Get in Touch</h2>
          </div>
          <p className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-10">{"Let's Build\nSomething Together."}</p>

          <div className="flex flex-col sm:flex-row items-start gap-8">
            <div className="space-y-4">
              <a href="mailto:utkarsh20052002@gmail.com"
                className="flex items-center gap-4 text-white/60 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all font-mono text-base group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                utkarsh20052002@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 sm:ml-auto">
              <a href="https://github.com/UTKI20" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-110 transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/utkarshsingh2002/" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-110 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 font-mono text-[10px] tracking-[0.25em] uppercase">
            Pune, Maharashtra · BVCOE CSBS · CGPA 9.36
          </p>
          <p className="text-white/20 font-mono text-[10px] tracking-[0.25em] uppercase">
            GDSC AI/ML Associate · HackWithInfy 2026 Round 2
          </p>
        </div>
      </footer>
    </div>
  )
}
