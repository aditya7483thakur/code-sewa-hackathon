"use client"

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import { createPortal } from 'react-dom'

interface RobotProps {
  id: string
  position?: { x: number; y: number }
}

const Robot1 = ({ id, position }: RobotProps) => {
  const controls = useAnimation()
  const x = useMotionValue(position?.x || 0)
  const y = useMotionValue(position?.y || 0)
  const [isBlinking, setIsBlinking] = useState(false)

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true)
      setTimeout(() => setIsBlinking(false), 100)
    }, 3000)

    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      animate={controls}
      style={{ x, y }}
      transition={{ type: "spring", damping: 20 }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40">
        <motion.rect
          x="5"
          y="5"
          width="30"
          height="25"
          rx="5"
          fill="currentColor"
          className="text-cyan-400"
        />
        <motion.circle
          cx="15"
          cy="15"
          r="3"
          fill="white"
          animate={{ scaleY: isBlinking ? 0.1 : 1 }}
        />
        <motion.circle
          cx="25"
          cy="15"
          r="3"
          fill="white"
          animate={{ scaleY: isBlinking ? 0.1 : 1 }}
        />
        <rect x="12" y="22" width="16" height="2" fill="white" />
        <motion.rect
          x="8"
          y="30"
          width="8"
          height="5"
          fill="currentColor"
          animate={{ rotate: [-10, 10] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.rect
          x="24"
          y="30"
          width="8"
          height="5"
          fill="currentColor"
          animate={{ rotate: [10, -10] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>
    </motion.div>
  )
}

const Robot2 = ({ id, position }: RobotProps) => {
  const controls = useAnimation()
  const x = useMotionValue(position?.x || 0)
  const y = useMotionValue(position?.y || 0)

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      animate={controls}
      style={{ x, y }}
      transition={{ type: "spring", damping: 20 }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40">
        <motion.circle
          cx="20"
          cy="15"
          r="10"
          fill="currentColor"
          className="text-cyan-400"
        />
        <circle cx="16" cy="12" r="2" fill="white" />
        <circle cx="24" cy="12" r="2" fill="white" />
        <path
          d="M16 18 Q20 22 24 18"
          stroke="white"
          fill="none"
          strokeWidth="2"
        />
        <motion.rect
          x="10"
          y="25"
          width="20"
          height="10"
          fill="currentColor"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </motion.div>
  )
}

export default function MiniRobots() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const robots = [
    { Component: Robot1, position: { x: 100, y: 100 }, id: 'robot1' },
    { Component: Robot2, position: { x: 200, y: 200 }, id: 'robot2' },
    { Component: Robot1, position: { x: 300, y: 300 }, id: 'robot3' }
  ]

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current
      if (!container) return

      const { left, top } = container.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top

      const robotElements = document.querySelectorAll('.mini-robot')
      robotElements.forEach((robot, index) => {
        const delay = index * 0.1
        robot.animate([
          { transform: `translate(${x - 20}px, ${y - 20}px)` }
        ], {
          duration: 1000,
          delay: delay * 1000,
          fill: 'forwards',
          easing: 'ease-out'
        })
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (!mounted) return null

  return createPortal(
    <div ref={containerRef} className="fixed inset-0 pointer-events-none">
      {robots.map((robot, index) => (
        <div key={index} className="mini-robot">
          <robot.Component
            id={robot.id}
            position={robot.position}
          />
        </div>
      ))}
    </div>,
    document.body
  )
}

