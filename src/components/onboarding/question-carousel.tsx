"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { QuestionCard } from "./question-card";
import { Progress } from "@/components/ui/progress";

const questions = [
  {
    id: "intro",
    question: "Let's get you started",
    options: [{ id: "start", label: "Begin" }],
  },
  {
    id: "domain",
    question: "What is your domain?",
    options: [
      { id: "frontend", label: "Frontend Development" },
      { id: "backend", label: "Backend Development" },
      { id: "fullstack", label: "Full Stack Development" },
      { id: "mobile", label: "Mobile Development" },
      { id: "ai", label: "AI/ML" },
      { id: "other", label: "Other" },
    ],
  },
  {
    id: "experience",
    question: "What's your experience level?",
    options: [
      {
        id: "beginner",
        label: "I am just starting off",
        description: "New to the field and eager to learn",
      },
      {
        id: "intermediate",
        label: "I have experience",
        description: "1-3 years of practical experience",
      },
      {
        id: "professional",
        label: "I am a professional",
        description: "3+ years of industry experience",
      },
    ],
  },
  // Add more questions as needed
];

export function QuestionCarousel() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<
    Record<string, string>
  >({});

  const handleAnswer = (answer: string) => {
    const currentQ = questions[currentQuestion];
    if (!currentQ) return;

    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: answer,
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Handle completion - you can redirect or show a completion screen
      console.log("All questions answered:", answers);
    }
  };

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Progress value={progress} className="mb-8" />
      <AnimatePresence mode="wait">
        {questions[currentQuestion] && (
          <QuestionCard
            key={questions[currentQuestion].id}
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            onSelect={handleAnswer}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
