"use client"

import { cn } from "@/lib/utils"
import { Github, ExternalLink } from "lucide-react"

interface Metric {
  label: string
  value: string
}

interface Project {
  id: number
  title: string
  category: string
  year: string
  description: string
  thumbnail: string
  video: string
  link?: string
  deployment?: string
  tech: string[]
  metrics: Metric[]
  highlight: string
}

interface VideoCardProps {
  project: Project
  isHovered: boolean
  onHoverChange: (hovered: boolean) => void
}

export function VideoCard({ project, isHovered, onHoverChange }: VideoCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-[2.5rem] overflow-hidden block",
        "cursor-none",
        "transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
        "h-[640px] min-w-[180px]",
        isHovered ? "flex-[2.8] shadow-2xl shadow-white/10" : "flex-[0.75] opacity-85",
      )}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={project.thumbnail || "/placeholder.svg"}
          alt={project.title}
          className={cn(
            "w-full h-full object-cover transition-all duration-1000 ease-out",
            isHovered ? "scale-110 grayscale-0 brightness-90" : "scale-100 grayscale brightness-60",
          )}
        />
      </div>

      {/* Gradient overlay */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-700",
          isHovered
            ? "bg-gradient-to-t from-black/95 via-black/60 to-black/20"
            : "bg-gradient-to-t from-black/70 via-black/20 to-transparent",
        )}
      />

      {/* Subtle scanline texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
        }}
      />

      {/* Collapsed state — vertical title */}
      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center gap-4",
          "transition-opacity duration-500",
          isHovered ? "opacity-0" : "opacity-100",
        )}
      >
        <div
          className="flex flex-col items-center gap-3"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <span className="text-white/30 font-mono text-[9px] tracking-[0.4em] uppercase">
            {project.year}
          </span>
          <h3 className="text-white font-mono text-sm tracking-[0.3em] uppercase font-bold drop-shadow-lg">
            {project.title}
          </h3>
          <span className="text-white/40 font-mono text-[9px] tracking-[0.25em] uppercase">
            {project.category}
          </span>
        </div>
      </div>

      {/* Expanded — top badge */}
      <div
        className={cn(
          "absolute top-5 left-5 right-5 flex items-center justify-between",
          "transition-all duration-600",
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none",
        )}
      >
        <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/15 rounded-full text-white/60 font-mono text-[9px] tracking-[0.3em] uppercase">
          {project.category}
        </span>
        <span className="text-white/40 font-mono text-[9px] tracking-[0.3em]">{project.year}</span>
      </div>

      {/* Expanded — metrics row */}
      <div
        className={cn(
          "absolute left-5 right-5",
          "transition-all duration-700 delay-75",
          isHovered ? "opacity-100 bottom-[260px]" : "opacity-0 bottom-[220px] pointer-events-none",
        )}
      >
        <div className="flex gap-2">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="flex-1 p-2.5 rounded-xl bg-white/8 backdrop-blur-md border border-white/10 text-center"
            >
              <p className="text-white font-mono text-sm font-bold leading-none">{m.value}</p>
              <p className="text-white/40 font-mono text-[8px] tracking-[0.25em] uppercase mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded — main content card */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 p-5 pointer-events-none",
          "transition-all duration-700",
          isHovered ? "opacity-100" : "opacity-0",
        )}
      >
        <div
          className={cn(
            "relative backdrop-blur-xl bg-white/8 rounded-2xl p-5 border border-white/15 pointer-events-auto",
            "transition-all duration-700 ease-out",
            isHovered ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          {/* Highlight badge */}
          <div className="mb-3 flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-white/60" />
            <span className="text-white/50 font-mono text-[9px] tracking-[0.3em] uppercase">{project.highlight}</span>
          </div>

          <h3 className="text-white font-mono text-base tracking-[0.2em] uppercase font-bold mb-1">
            {project.title}
          </h3>

          <p className="text-white/65 font-sans text-sm leading-relaxed mb-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 bg-white/10 border border-white/10 rounded-full text-white/70 font-mono text-[9px] tracking-wider uppercase"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="pt-3 border-t border-white/15 flex items-center justify-between">
            {project.deployment ? (
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
                <p className="text-white/40 font-mono text-[9px] tracking-widest uppercase">Live Project</p>
              </div>
            ) : (
              <div />
            )}
            
            <div className="flex items-center gap-4">
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white font-mono text-[10px] tracking-wider uppercase flex items-center gap-1.5 hover:text-white/80 hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  Repo
                </a>
              )}
              {project.deployment && (
                <a 
                  href={project.deployment} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white font-mono text-[10px] tracking-wider uppercase flex items-center gap-1.5 hover:text-white/80 hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
