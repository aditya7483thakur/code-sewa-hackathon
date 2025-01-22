  "use client";

  import { motion } from "framer-motion";
  import Image from "next/image";
  import { Github, Linkedin, Twitter } from "lucide-react";
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
  import { FocusCards } from "./ui/focus-cards";
  import Tanmay from "../public/tanmay.png";
  import Aayushi from "../public/aayushi.png";
  import Aditya from "../public/Aditya.png";
  import Akshay from "../public/Akshay.png";
  import Manas from "../public/Manas.png";
  import Nandini from "../public/nandini.png";
  import Pratham from "../public/Pratham.png";
  import Sanidhya from "../public/sanidhya.png";

  const cards = [
    {
      name: "Tanmay Arora",
      role: "Full Stack Engineer",
      image: Tanmay,
      bio: "Experienced in building scalable web applications and mentoring junior developers.",
      github: "https://github.com/tanmayarora",
      linkedin: "https://www.linkedin.com/in/tanmaycode1/",
      twitter: "https://twitter.com/tanmayarora",
    },
    {
      name: "Aditya Singh",
      role: "Software Engineering Intern",
      image: Aditya,
      bio: "Specialist in building robust and scalable server-side applications.",
      github: "https://github.com/adityagupta",
      linkedin: "https://www.linkedin.com/in/adiii11/",
      twitter: "https://twitter.com/adityagupta",
    },
    {
      name: "Akshay Kumar Sharma",
      role: "Software Engineer",
      image: Akshay,
      bio: "Expert in CI/CD pipelines and maintaining efficient development workflows.",
      github: "https://github.com/akshaykumar",
      linkedin: "https://www.linkedin.com/in/akshay-kumar-sharma-devvoyager/",
      twitter: "https://twitter.com/akshaykumar",
    },
    {
      name: "Manas Verma",
      role: "Co-Founder,Geekroom",
      image: Manas,
      bio: "Skilled in deriving insights from data and implementing machine learning models.",
      github: "https://github.com/manasverma",
      linkedin: "https://www.linkedin.com/in/themanas95826/",
      twitter: "https://twitter.com/manasverma",
    },
    {
      name: "Pratham Batra",
      role: "Co-Founder,Geekroom",
      image: Pratham,
      bio: "Focused on creating seamless mobile applications for both iOS and Android platforms.",
      github: "https://github.com/prathamsingh",
      linkedin: "https://www.linkedin.com/in/pratham1908/",
      twitter: "https://twitter.com/prathamsingh",
    },
    {
      name: "Sanidhya Goel",
      role: "AI Intern",
      image: Sanidhya,
      bio: "Researcher and developer in artificial intelligence and machine learning.",
      github: "https://github.com/sanidhyajain",
      linkedin: "https://www.linkedin.com/in/sanidhya-goel-2499991b1/",
      twitter: "https://twitter.com/sanidhyajain",
    },
    {
      name: "Aayushi Jain",
      role: "Mentor",
      image: Aayushi,
      bio: "Passionate about crafting intuitive and beautiful user experiences.",
      github: "https://github.com/aayushisharma",
      linkedin: "https://www.linkedin.com/in/aayyushi-jain/",
      twitter: "https://twitter.com/aayushisharma",
    },
    {
      name: "Nandini Joshi",
      role: "AI/ML Developer Intern",
      image: Nandini,
      bio: "Proficient in creating responsive and dynamic web interfaces.",
      github: "https://github.com/nandinijoshi",
      linkedin: "https://www.linkedin.com/in/nandinisingh05/",
      twitter: "https://twitter.com/nandinijoshi",
    }
  ];

  export default function MentorsList() {
    let a = true;
    if (a) {
      return <FocusCards cards={cards} />;
    }
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((mentor, index) => (
          <motion.div
            key={mentor.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
           <Card className="h-full overflow-hidden bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-colors duration-300">
  <CardHeader className="relative h-4 overflow-hidden">
    <Image
      src={mentor.image}
      alt={mentor.name}
      layout="fill"
      objectFit="cover"
      className="rounded-t-lg transition-transform duration-300 hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
  </CardHeader>
  <CardContent className="p-2 relative z-10">
    <CardTitle className="text-2xl mb-2 text-primary">{mentor.name}</CardTitle>
    <p className="text-foreground font-semibold mb-4">{mentor.role}</p>
\
  </CardContent>
</Card>

          </motion.div>
        ))}
      </div>
    );
  }
