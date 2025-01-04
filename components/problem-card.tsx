import { Card } from './ui/card'
import Image from 'next/image'

interface Problem {
  title: string
  description: string
  category: string
  difficulty: string
  image: string
  icon: string
}

interface ProblemCardProps {
  problem: Problem
}

export default function ProblemCard({ problem }: ProblemCardProps) {
  return (
    <Card className="bg-background/80 backdrop-blur-sm border-cyan-500/20 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6 p-6">
        <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
          <Image
            src={problem.image}
            alt={problem.title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-6xl">
            {problem.icon}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-cyan-400 mb-4">
            {problem.title}
          </h3>
          <p className="text-lg text-foreground/80 mb-6">
            {problem.description}
          </p>
          <div className="flex gap-4">
            <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {problem.category}
            </span>
            <span className="px-4 py-2 rounded-full bg-foreground/5 text-foreground/80 border border-foreground/10">
              {problem.difficulty}
            </span>
          </div>
        </div>
      </div>
    </Card>
  )
}

