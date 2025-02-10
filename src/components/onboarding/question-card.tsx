"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Option {
  id: string;
  label: string;
  description?: string;
}

interface QuestionCardProps {
  question: string;
  options: Option[];
  type?: "multi-select" | "checkbox";
  onSelect: (answer: string | string[]) => void;
}

export function QuestionCard({
  question,
  options,
  type,
  onSelect,
}: QuestionCardProps) {
  const [selectedOptions, setSelectedOptions] = useState<
    string[]
  >([]);
  const isMultiSelect =
    type === "multi-select" || type === "checkbox";

  console.log(type);

  const handleOptionClick = (optionId: string) => {
    if (isMultiSelect) {
      const updatedSelection = selectedOptions.includes(
        optionId,
      )
        ? selectedOptions.filter((id) => id !== optionId)
        : [...selectedOptions, optionId];
      setSelectedOptions(updatedSelection);
    } else {
      onSelect(optionId);
    }
  };

  const handleContinue = () => {
    if (selectedOptions.length > 0) {
      onSelect(selectedOptions);
      setSelectedOptions([]);
    }
  };

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
            className={`p-4 cursor-pointer hover:bg-muted ${
              selectedOptions.includes(option.id)
                ? "bg-muted"
                : ""
            }`}
            onClick={() => handleOptionClick(option.id)}
          >
            <h3 className="font-medium">{option.label}</h3>
            {option.description && (
              <p className="text-sm text-muted-foreground">
                {option.description}
              </p>
            )}
          </Card>
        ))}
        {isMultiSelect && selectedOptions.length > 0 && (
          <Button className="mt-4" onClick={handleContinue}>
            Continue
          </Button>
        )}
      </div>
    </motion.div>
  );
}
