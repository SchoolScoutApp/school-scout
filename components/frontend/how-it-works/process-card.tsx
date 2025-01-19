"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface ProcessCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export default function ProcessCard({
  title,
  description,
  icon: Icon,
  index,
}: ProcessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center p-6 text-center"
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-50">
        <Icon className="h-8 w-8 text-sky-700" />
      </div>

      {/* Connection line */}
      {index < 3 && (
        <div className="absolute left-[calc(50%+4rem)] top-1/2 hidden h-px w-[calc(100%-8rem)] -translate-y-1/2 bg-neutral-200 lg:block" />
      )}

      <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-lg font-semibold text-white">
        {index + 1}
      </div>

      <h3 className="mb-2 text-xl font-semibold text-neutral-900">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </motion.div>
  );
}
