"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const problems = [
  {
    title: "AI for Healthcare",
    description: "Develop an AI-powered solution to improve early disease detection and diagnosis in rural areas.",
    category: "Healthcare",
    difficulty: "Hard",
    image: "/placeholder.svg?height=400&width=600&text=AI+for+Healthcare",
    icon: "🏥"
  },
  {
    title: "Smart Water Management",
    description: "Create an IoT-based system for efficient water distribution and conservation in urban areas.",
    category: "Environment",
    difficulty: "Medium",
    image: "/placeholder.svg?height=400&width=600&text=Smart+Water+Management",
    icon: "💧"
  },
  {
    title: "EdTech for Accessibility",
    description: "Design an educational platform that caters to students with different learning abilities and disabilities.",
    category: "Education",
    difficulty: "Medium",
    image: "/placeholder.svg?height=400&width=600&text=EdTech+for+Accessibility",
    icon: "📚"
  },
  {
    title: "Blockchain for Food Traceability",
    description: "Implement a blockchain solution to enhance transparency in the food supply chain.",
    category: "Agriculture",
    difficulty: "Hard",
    image: "/placeholder.svg?height=400&width=600&text=Blockchain+for+Food+Traceability",
    icon: "🌾"
  }
]

const ProblemCard = dynamic(() => import('./problem-card'), { ssr: false })

export default function ProblemCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % problems.length)
    }, 5000) // Change problem every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const handlePrevious = () => {
    setActiveIndex((current) => (current - 1 + problems.length) % problems.length)
  }

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % problems.length)
  }

  return (
    <div className="relative overflow-hidden w-full max-w-6xl mx-auto h-[600px] px-4">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-4xl aspect-[16/9]">
          <AnimatePresence initial={false}>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute w-full"
            >
              <ProblemCard problem={problems[activeIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 text-cyan-400 hover:text-cyan-300"
        onClick={handlePrevious}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 text-cyan-400 hover:text-cyan-300"
        onClick={handleNext}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {problems.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === activeIndex ? 'bg-cyan-400' : 'bg-foreground/20'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

