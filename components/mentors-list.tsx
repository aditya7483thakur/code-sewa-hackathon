"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FocusCards } from "./ui/focus-cards";

const mentors = [
  {
    name: "Dr. Aisha Patel",
    role: "AI Research Scientist",
    image: "/placeholder.svg?height=300&width=300&text=AP",
    bio: "Leading expert in machine learning and neural networks with over 15 years of experience.",
    github: "https://github.com/aishapatel",
    linkedin: "https://linkedin.com/in/aishapatel",
    twitter: "https://twitter.com/aishapatel",
  },
  {
    name: "Raj Kumar",
    role: "Blockchain Developer",
    image: "/placeholder.svg?height=300&width=300&text=RK",
    bio: "Passionate about decentralized technologies and their potential to revolutionize industries.",
    github: "https://github.com/rajkumar",
    linkedin: "https://linkedin.com/in/rajkumar",
    twitter: "https://twitter.com/rajkumar",
  },
  {
    name: "Priya Singh",
    role: "Cybersecurity Expert",
    image: "/placeholder.svg?height=300&width=300&text=PS",
    bio: "Specializes in ethical hacking and secure system design with a focus on IoT security.",
    github: "https://github.com/priyasingh",
    linkedin: "https://linkedin.com/in/priyasingh",
    twitter: "https://twitter.com/priyasingh",
  },
  {
    name: "Alex Chen",
    role: "Full Stack Developer",
    image: "/placeholder.svg?height=300&width=300&text=AC",
    bio: "Experienced in building scalable web applications and mentoring junior developers.",
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    twitter: "https://twitter.com/alexchen",
  },
];

const cards = [
  {
    name: "Alex Chen",
    role: "Full Stack Developer",
    image: "/placeholder.svg?height=300&width=300&text=AC",
    bio: "Experienced in building scalable web applications and mentoring junior developers.",
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    twitter: "https://twitter.com/alexchen",
  },
  {
    name: "Alex Chen",
    role: "Full Stack Developer",
    image: "/placeholder.svg?height=300&width=300&text=AC",
    bio: "Experienced in building scalable web applications and mentoring junior developers.",
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    twitter: "https://twitter.com/alexchen",
    src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Alex Chen",
    role: "Full Stack Developer",
    image: "/placeholder.svg?height=300&width=300&text=AC",
    bio: "Experienced in building scalable web applications and mentoring junior developers.",
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    twitter: "https://twitter.com/alexchen",
  },
  {
    name: "Alex Chen",
    role: "Full Stack Developer",
    image: "/placeholder.svg?height=300&width=300&text=AC",
    bio: "Experienced in building scalable web applications and mentoring junior developers.",
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    twitter: "https://twitter.com/alexchen",
  },
  {
    name: "Alex Chen",
    role: "Full Stack Developer",
    image: "/placeholder.svg?height=300&width=300&text=AC",
    bio: "Experienced in building scalable web applications and mentoring junior developers.",
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    twitter: "https://twitter.com/alexchen",
  },
  {
    name: "Alex Chen",
    role: "Full Stack Developer",
    image: "/placeholder.svg?height=300&width=300&text=AC",
    bio: "Experienced in building scalable web applications and mentoring junior developers.",
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    twitter: "https://twitter.com/alexchen",
  },
];

export default function MentorsList() {
  let a = true;
  if (a) {
    return <FocusCards cards={cards} />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {mentors.map((mentor, index) => (
        <motion.div
          key={mentor.name}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full overflow-hidden bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-colors duration-300">
            <CardHeader className="relative h-48 overflow-hidden">
              <Image
                src={mentor.image}
                alt={mentor.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </CardHeader>
            <CardContent className="p-6 relative z-10">
              <CardTitle className="text-2xl mb-2 text-primary">
                {mentor.name}
              </CardTitle>
              <p className="text-foreground font-semibold mb-4">
                {mentor.role}
              </p>
              <p className="text-foreground/80 mb-6">{mentor.bio}</p>
              <div className="flex space-x-4">
                <a
                  href={mentor.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href={mentor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href={mentor.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
