'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

interface Star {
  x: number
  y: number
  size: number
}

const InteractiveConstellation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createStars()
    }

    const createStars = () => {
      const stars: Star[] = []
      const starCount = Math.floor((canvas.width * canvas.height) / 5000)
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
        })
      }
      starsRef.current = stars
    }

    const drawStars = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      starsRef.current.forEach((star) => {
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size)
        gradient.addColorStop(0, theme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 128, 255, 0.8)')
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
        ctx.fillStyle = gradient
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    resizeCanvas()
    drawStars()

    window.addEventListener('resize', () => {
      resizeCanvas()
      drawStars()
    })

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [theme])

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

export default InteractiveConstellation

