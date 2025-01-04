'use client'

import React, { useEffect, useRef, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

const StarsConstellation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  const stars = useMemo(() => {
    const starCount = 800
    return Array.from({ length: starCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      radius: Math.random() * 1.2 + 0.3,
      speed: Math.random() * 0.02 + 0.01,
    }))
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const backgroundColor = theme === 'dark' ? 'rgb(10, 10, 10)' : 'rgb(240, 249, 255)'
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach(star => {
        star.y += star.speed
        if (star.y > 1) star.y = 0

        const x = star.x * canvas.width
        const y = star.y * canvas.height

        ctx.beginPath()
        ctx.arc(x, y, star.radius, 0, Math.PI * 2)
        
        if (theme === 'dark') {
          ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + Math.random() * 0.5})`
        } else {
          ctx.fillStyle = `rgba(0, 255, 255, ${0.2 + Math.random() * 0.3})`
        }
        ctx.fill()

        const glow = ctx.createRadialGradient(x, y, 0, x, y, star.radius * 3)
        if (theme === 'dark') {
          glow.addColorStop(0, 'rgba(255, 255, 255, 0.2)')
          glow.addColorStop(1, 'rgba(255, 255, 255, 0)')
        } else {
          glow.addColorStop(0, 'rgba(0, 255, 255, 0.2)')
          glow.addColorStop(1, 'rgba(0, 255, 255, 0)')
        }
        ctx.fillStyle = glow
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [stars, theme])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}

export default StarsConstellation

