import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const HoverEffect = ({
  items,
  className,
}: {
  items: any;
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2 gap-4  py-10", className)}
    >
      {items.map((item: any, idx: number) => (
        <div
          //   href={""}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          {/* <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card> */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold text-primary">
                <span className="text-4xl mr-2">{item.icon}</span>
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <Badge variant="secondary">{item.category}</Badge>
                <Badge variant="outline">{item.difficulty}</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        // <motion.div
        //   key={item.title}
        //   initial={{ opacity: 0, y: 50 }}
        //   animate={{ opacity: 1, y: 0 }}
        //   transition={{ duration: 0.5, delay: idx * 0.1 }}
        //   onMouseEnter={() => setHoveredIndex(idx)}
        //   onMouseLeave={() => setHoveredIndex(null)}
        //   className="relative"
        // >
        //   <AnimatePresence>
        //     {hoveredIndex === idx && (
        //       <motion.span
        //         className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
        //         layoutId="hoverBackground"
        //         initial={{ opacity: 0 }}
        //         animate={{
        //           opacity: 1,
        //           transition: { duration: 0.15 },
        //         }}
        //         exit={{
        //           opacity: 0,
        //           transition: { duration: 0.15, delay: 0.2 },
        //         }}
        //       />
        //     )}
        //   </AnimatePresence>
        //   <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        //     <CardHeader>
        //       <CardTitle className="flex items-center text-2xl font-bold text-primary">
        //         <span className="text-4xl mr-2">{item.icon}</span>
        //         {item.title}
        //       </CardTitle>
        //     </CardHeader>
        //     <CardContent>
        //       <p className="text-foreground/80 mb-4">{item.description}</p>
        //       <div className="flex justify-between items-center">
        //         <Badge variant="secondary">{item.category}</Badge>
        //         <Badge variant="outline">{item.difficulty}</Badge>
        //       </div>
        //     </CardContent>
        //   </Card>
        // </motion.div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-2 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
