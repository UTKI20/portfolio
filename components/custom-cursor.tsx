"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const positionRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>()

  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updatePosition = (x: number, y: number) => {
      positionRef.current = { x, y }

      if (rafRef.current) return

      rafRef.current = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`
        }
        rafRef.current = undefined
      })
    }

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true)
      updatePosition(e.clientX, e.clientY)
    }

    const onTouchMove = (e: TouchEvent) => {
      setIsVisible(true)
      if (e.touches.length > 0) {
        updatePosition(e.touches[0].clientX, e.touches[0].clientY)
      }
    }

    const onMouseDown = () => setIsClicking(true)
    const onMouseUp = () => setIsClicking(false)

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [role='button'], input, textarea, select")) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const onMouseLeave = () => {
      setIsVisible(false)
    }
    const onMouseEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: true })
    window.addEventListener("touchstart", onTouchMove, { passive: true })
    
    window.addEventListener("mousedown", onMouseDown)
    window.addEventListener("mouseup", onMouseUp)
    window.addEventListener("touchstart", onMouseDown, { passive: true })
    window.addEventListener("touchend", onMouseUp)

    window.addEventListener("mouseover", onMouseOver)
    window.addEventListener("mouseout", () => setIsHovering(false))
    document.addEventListener("mouseleave", onMouseLeave)
    document.addEventListener("mouseenter", onMouseEnter)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("touchstart", onTouchMove)
      window.removeEventListener("mousedown", onMouseDown)
      window.removeEventListener("mouseup", onMouseUp)
      window.removeEventListener("touchstart", onMouseDown)
      window.removeEventListener("touchend", onMouseUp)
      window.removeEventListener("mouseover", onMouseOver)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mouseenter", onMouseEnter)

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        transform: "translate3d(-50vw, -50vh, 0)",
      }}
    >
      <div
        className={cn(
          "relative -top-3 -left-3 w-6 h-6 rounded-full transition-all duration-300 ease-out",
          "bg-white/80 shadow-[0_0_15px_rgba(255,255,255,0.4)]",
          isVisible ? "opacity-100" : "opacity-0",
          isHovering && "scale-[2.5] bg-white/20 border border-white/50 shadow-none backdrop-blur-sm",
          isClicking && "scale-75 bg-white shadow-lg",
          isHovering && isClicking && "scale-150"
        )}
      />
    </div>
  )
}
