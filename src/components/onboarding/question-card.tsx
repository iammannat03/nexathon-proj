"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface Option {
  id: string;
  label: string;
  description?: string;
}

interface QuestionCardProps {
  question: string;
  options: Option[];
  onSelect: (answer: string) => void;
}

export function QuestionCard({
  question,
  options,
  onSelect,
}: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <h2 className="text-2xl font-bold mb-6">
        {question}
      </h2>
      <div className="grid gap-4">
        {options.map((option) => (
          <Card
            key={option.id}
            className="p-4 cursor-pointer hover:bg-muted"
            onClick={() => onSelect(option.id)}
          >
            <h3 className="font-medium">{option.label}</h3>
            {option.description && (
              <p className="text-sm text-muted-foreground">
                {option.description}
              </p>
            )}
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
