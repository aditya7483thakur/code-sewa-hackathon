"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
// import { TypeAnimation } from "react-type-animation";
import { Cpu, Heart, Code, Users } from "lucide-react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Link from "next/link";
import { RegisterBtn } from "./registerButton";
const words = [
  {
    text: "Inovate ,",
  },
  {
    text: "Create",
  },
  {
    text: "and",
  },
  {
    text: "Impact",
  },
];
export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pb-20 pt-24">
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <Heart className="text-red-500 h-5 w-5" />
          <span className="text-primary font-medium text-lg">
            A Charity Hackathon by GeekRoom
          </span>
        </motion.div>

        <motion.h1
          className="text-7xl md:text-9xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-cyan-500 to-blue-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          CodeSeva
        </motion.h1>

        <motion.div className="text-3xl md:text-5xl text-center flex justify-center items-center mb-12 text-foreground">
          <TypewriterEffectSmooth words={words} />
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12 "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
  <RegisterBtn />
</a>

          <Link href="#countdown" passHref>
            <Button
              size="lg"
              variant="outline"
              className="bg-background/50 backdrop-blur-sm text-foreground hover:bg-accent hover:text-accent-foreground text-lg px-10 py-6 rounded-full min-w-[200px] shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Countdown
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <motion.div
            className="flex items-center gap-3 justify-center text-foreground bg-background/50 backdrop-blur-sm p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <Cpu className="h-6 w-6 text-primary" />
            <span className="font-medium">36-Hour Hackathon</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-3 justify-center text-foreground bg-background/50 backdrop-blur-sm p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <Code className="h-6 w-6 text-primary" />
            <span className="font-medium">Delhi, India</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-3 justify-center text-foreground bg-background/50 backdrop-blur-sm p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            <Heart className="h-6 w-6 text-red-500" />
            <span className="font-medium">For a Cause</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-3 justify-center text-foreground bg-background/50 backdrop-blur-sm p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            <Users className="h-6 w-6 text-primary" />
            <span className="font-medium">GeekRoom Community</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
