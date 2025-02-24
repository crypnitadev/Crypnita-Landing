"use client"

import { useEffect, useRef } from "react"

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const brightColors = ["#377B74", "#572D5B", "#F7F7F7"]

    const rays = Array.from({ length: 50 }, (_, i) => ({
      x: (canvas.width / 50) * i + Math.random() * (canvas.width / 50), // Distribución uniforme
      y: Math.random() * canvas.height,
      length: Math.random() * 150 + 50,
      width: Math.random() * 4 + 1,
      color: brightColors[Math.floor(Math.random() * brightColors.length)],
      speed: Math.random() * 2 + 0.5,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2, // Variación en la dirección
    }))

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)" // Deja un rastro sutil
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      rays.forEach((ray) => {
        ctx.beginPath()
        ctx.moveTo(ray.x, ray.y)
        ctx.lineTo(ray.x - ray.length * Math.cos(ray.angle), ray.y - ray.length * Math.sin(ray.angle))
        ctx.strokeStyle = ray.color
        ctx.lineWidth = ray.width
        ctx.stroke()
        ctx.closePath()

        ray.x -= ray.speed * Math.cos(ray.angle)
        ray.y -= ray.speed * Math.sin(ray.angle)

        // Suavizar el reinicio de las partículas
        if (ray.x + ray.length < 0 || ray.y + ray.length < 0) {
          ray.x = Math.random() * canvas.width
          ray.y = canvas.height + Math.random() * 50
          ray.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.2 // Cambio de dirección
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
      style={{ backgroundColor: "transparent" }}
    />
  )
}

export default AnimatedBackground
