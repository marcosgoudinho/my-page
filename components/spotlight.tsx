"use client"

import { useEffect, useState } from "react"

export function Spotlight() {
  const [pos, setPos] = useState({ x: -500, y: -500 })

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handler)
    return () => window.removeEventListener("mousemove", handler)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 hidden transition duration-300 lg:block"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, oklch(0.82 0.13 178 / 0.06), transparent 80%)`,
      }}
    />
  )
}
