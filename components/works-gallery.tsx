"use client"

import { useState, useEffect, useRef } from "react"
import { VideoCard } from "./video-card"

const projects = [
  {
    id: 1,
    title: "SINTER",
    category: "AI / RAG ARCHITECTURE",
    year: "2026",
    description: "AI Perspective & Counter-Argument Engine. Chrome extension powered by a narrative heuristic engine that evaluates political framing via Llama-3.3-70b. Features a PostgreSQL 'Steel-man vs. Straw-man' crowdsourced arbitration system and a caching layer that reduces latency to <100ms.",
    thumbnail: "/sinter_img.webp",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    link: "https://github.com/UTKI20/Sinter",
    audioTrack: "/audio/succession.mp4",
    sprite: { bestPart: [0, 600000] },
    spriteName: "bestPart",
    tech: ["Node.js", "React", "PostgreSQL", "Llama-3.3-70b", "RAG", "Chrome Extension"],
    metrics: [
      { label: "LATENCY", value: "<100ms" },
      { label: "MODEL", value: "70B" },
      { label: "ARCH", value: "RAG" },
    ],
    highlight: "Steel-man vs. Straw-man Arbitration",
  },
  {
    id: 2,
    title: "exHUMA",
    category: "DEEP LEARNING / CNN",
    year: "2026",
    description: "AI Exoplanet Detector using a Multi-Branch CNN-FFT pipeline ranking 5,087 stars. Achieved 80% Recall@20, retrieving 4/5 confirmed exoplanets. Integrates SHAP for verifiable transit-dip XAI heatmaps and SMOTE for <1% positive sample rate.",
    thumbnail: "/exhuma.webp",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    link: "https://github.com/UTKI20/exHUMA-Exoplanet_Detector",
    deployment: "https://exhuma-exoplanetdetector-fuc9e4uymy82vhpmiwjwgb.streamlit.app/",
    audioTrack: "/audio/interstellar.mp4",
    sprite: { epicDrop: [50000, 600000] },
    spriteName: "epicDrop",
    tech: ["TensorFlow", "CNN-FFT", "SHAP", "SMOTE", "Python"],
    metrics: [
      { label: "RECALL@20", value: "80%" },
      { label: "STARS", value: "5,087" },
      { label: "ARCH", value: "CNN-FFT" },
    ],
    highlight: "80% Survey Efficiency Improvement",
  },
  {
    id: 3,
    title: "MANAS MITRA",
    category: "NLP / MULTILINGUAL CHATBOT",
    year: "2025",
    description: "Multilingual Student Support Chatbot built with Next.js, FastAPI, and Gemini API. Features a RAG pipeline using ChromaDB over 25 CBT frameworks, a 3-model LLM fallback chain, and a zero-latency Next.js frontend circuit breaker for resilient delivery.",
    thumbnail: "/scream.jpg",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    link: "https://github.com/UTKI20/manas-mitra",
    deployment: "https://manas-mitra-hahu.vercel.app/",
    audioTrack: "/audio/no-surprises.mp4",
    sprite: { outro: [76000, 600000] },
    spriteName: "outro",
    tech: ["Next.js", "FastAPI", "Gemini API", "ChromaDB", "RAG"],
    metrics: [
      { label: "FRAMEWORKS", value: "25 CBT" },
      { label: "LATENCY", value: "~0ms" },
      { label: "FALLBACK", value: "3-LLM" },
    ],
    highlight: "Zero-latency Circuit Breaker",
  },
]

const MAX_VOL = 0.5
const FADE_TIME = 1000

export function WorksGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const howlsRef = useRef<Record<number, any>>({})
  const activeSounds = useRef<Record<number, number>>({})

  useEffect(() => {
    // Dynamically import howler to prevent SSR issues
    import("howler").then(({ Howl }) => {
      projects.forEach((p) => {
        if (!howlsRef.current[p.id]) {
          howlsRef.current[p.id] = new Howl({
            src: [p.audioTrack],
            volume: 0,
            sprite: p.sprite,
            // We removed html5: true because HTML5 audio doesn't support Howler sprites very well.
            // If the .mp4 files fail to decode, they might need to be converted to .mp3
            preload: true,
          })
        }
      })
    })

    return () => {
      // Cleanup on unmount
      Object.values(howlsRef.current).forEach(howl => howl.unload())
    }
  }, [])

  const handleHoverChange = (id: number, isHovered: boolean) => {
    setHoveredId(isHovered ? id : null)

    const howl = howlsRef.current[id]
    const project = projects.find(p => p.id === id)
    
    if (howl && project) {
      if (isHovered) {
        // Play the specific sprite and record the sound ID
        const soundId = howl.play(project.spriteName)
        activeSounds.current[id] = soundId
        
        // Fade in that specific sound ID
        howl.fade(0, MAX_VOL, FADE_TIME, soundId)
      } else {
        const soundId = activeSounds.current[id]
        if (soundId) {
          // Fade out that specific sound ID
          howl.fade(MAX_VOL, 0, FADE_TIME, soundId)
          
          howl.once("fade", () => {
            howl.stop(soundId)
          }, soundId)
        }
      }
    }
  }

  return (
    <div className="container mx-auto px-6">
      <div className="flex gap-3 items-stretch justify-center">
        {projects.map((project) => (
          <VideoCard
            key={project.id}
            project={project}
            isHovered={hoveredId === project.id}
            onHoverChange={(hovered) => handleHoverChange(project.id, hovered)}
          />
        ))}
      </div>
    </div>
  )
}
