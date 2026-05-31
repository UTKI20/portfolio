"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  z: number
  size: number
  angle1: number
  angle2: number
  speed1: number
  speed2: number
}

interface ProjectedParticle {
  orig: Particle
  x: number
  y: number
  z: number
  px: number
  py: number
  scale: number
  opacity: number
}

export function AntigravityCluster() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = canvas.width = canvas.clientWidth
    let height = canvas.height = canvas.clientHeight

    const handleResize = () => {
      width = canvas.width = canvas.clientWidth
      height = canvas.height = canvas.clientHeight
    }
    window.addEventListener("resize", handleResize)

    const particles: Particle[] = []
    const particleCount = 120
    
    // Golden color #EFD395 -> rgb(239, 211, 149)

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 800,
        y: (Math.random() - 0.5) * 800,
        z: (Math.random() - 0.5) * 800,
        size: Math.random() * 2 + 1,
        angle1: Math.random() * Math.PI * 2,
        angle2: Math.random() * Math.PI * 2,
        speed1: (Math.random() - 0.5) * 0.005,
        speed2: (Math.random() - 0.5) * 0.005
      })
    }

    let mouse = { x: 0, y: 0, active: false }
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left - width / 2
      mouse.y = e.clientY - rect.top - height / 2
      mouse.active = true
    }
    const handleMouseLeave = () => {
      mouse.active = false
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    let animationFrameId: number

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      
      const focalLength = 400
      const projected: ProjectedParticle[] = []

      // 1. Calculate 3D and projected 2D coordinates for all particles
      particles.forEach(p => {
        p.angle1 += p.speed1
        p.angle2 += p.speed2

        const x1 = p.x * Math.cos(p.angle1) - p.z * Math.sin(p.angle1)
        const z1 = p.z * Math.cos(p.angle1) + p.x * Math.sin(p.angle1)
        
        const y1 = p.y * Math.cos(p.angle2) - z1 * Math.sin(p.angle2)
        const z2 = z1 * Math.cos(p.angle2) + p.y * Math.sin(p.angle2)

        let drawX = x1
        let drawY = y1

        // Mouse repulsion (gravity-defiance force)
        if (mouse.active) {
            const dx = drawX - mouse.x
            const dy = drawY - mouse.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            const maxDistance = 200
            if (distance < maxDistance) {
                const force = Math.pow((maxDistance - distance) / maxDistance, 2)
                drawX += (dx / distance) * force * 100
                drawY += (dy / distance) * force * 100
            }
        }

        const scale = focalLength / (focalLength + z2 + 400)
        
        if (scale > 0) {
            projected.push({
                orig: p,
                x: drawX,
                y: drawY,
                z: z2,
                px: drawX * scale + width / 2,
                py: drawY * scale + height / 2,
                scale: scale,
                opacity: Math.min(1, Math.max(0, (z2 + 400) / 800))
            })
        }
      })

      // 2. Draw connections (golden trails)
      ctx.lineWidth = 1
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
            const p1 = projected[i]
            const p2 = projected[j]
            const dx = p1.x - p2.x
            const dy = p1.y - p2.y
            const dz = p1.z - p2.z
            const dist = Math.sqrt(dx*dx + dy*dy + dz*dz)
            
            if (dist < 120) {
                const connOpacity = (1 - dist / 120) * p1.opacity * p2.opacity * 0.8
                ctx.beginPath()
                ctx.moveTo(p1.px, p1.py)
                ctx.lineTo(p2.px, p2.py)
                ctx.strokeStyle = `rgba(239, 211, 149, ${connOpacity})`
                ctx.stroke()
            }
        }
      }

      // 3. Draw nodes (prisms/cubes)
      projected.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.px, p.py, p.orig.size * p.scale, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(239, 211, 149, ${p.opacity})`
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ touchAction: "none" }}
    />
  )
}
