"use client";

import { HoverEffect } from "./ui/card-hover-effect";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const problems = [
  {
    title: "Accessible Care Initiative",
    description:
      " Like the COVID pandemic , many such diseases exist in today's world that can be cured easily. However , many people are unable to get the proper treatment due to lack of financial autonomy. Create a solution that can help bridge the gap between the people and getting the proper treatment for the disease.",
    category: "Healthcare",
    difficulty: "Hard",
    icon: "🏥",
  },
  {
    title: "Athlete Uplift Platform",
    description:
      " India possesses a lot of potential in the sports industry with bucketloads of success in cricket and hockey. However , they lack the proper talent for other fields like football , which is a growing concern for India. Many talented atheletes come from poor economic backgrounds and are unable to make it to the national trials to show their worth. Your task is to create a virtual , affordable platform for these atheletes to get financial backing and support to fulfill their full potential and make India proud on the big stage!",
    category: "Environment",
    difficulty: "Medium",
    icon: "🏏",
  },
  {
    title: "SmartFinance Hub",
    description:
      " Middle-class families in today's world find it difficult to manage their finances and end up taking lots of loans and debts upon themselves. They lack the financial guidance and mindset needed to keep their finances in check. Create a platform for these families where they can regulate their finances , and also keep a check on their spendings and suggest them ways to invest finances.",
    category: "Education",
    difficulty: "Medium",
    icon: "📱",
  },
  {
    title: "Pollution Monitor System",
    description:
      "Extreme Pollution levels in Delhi have always posed a huge problem for the state as well as the central government. Lack of regulation of emissions across the state have contributed massively to this problem. Devise a solution to keep a track of pollution levels across Delhi and alert officials wherever the emissions are above the mandated levels!",
    category: "Agriculture",
    difficulty: "Hard",
    icon: "😷",
  },
];

export default function ProblemStatements() {
  return (
    <section id="problems" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Problem Statements
        </motion.h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
        <HoverEffect items={problems} />
        {/* {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-bold text-primary">
                    <span className="text-4xl mr-2">{problem.icon}</span>
                    {problem.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">
                    {problem.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">{problem.category}</Badge>
                    <Badge variant="outline">{problem.difficulty}</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))} */}
        {/* </div> */}
      </div>
    </section>
  );
}
