"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the primary responsibility of a sales specialist?",
    options: [
      "Managing office supplies",
      "Developing client relationships",
      "Writing code",
      "Handling IT support",
    ],
    correctAnswer: "Developing client relationships",
  },
  // Add more questions relevant to the job
];

export default function ReadinessQuiz() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion === questions.length - 1) {
      // Calculate score
      const finalScore = newAnswers.reduce((acc, curr, index) => {
        return curr === questions[index]!.correctAnswer ? acc + 1 : acc;
      }, 0);
      setScore(finalScore);
      setShowResults(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  if (showResults) {
    return (
      <div className="mx-auto max-w-2xl p-6">
        <Card className="p-6 text-center">
          <h2 className="mb-4 text-2xl font-bold">Quiz Results</h2>
          <p className="mb-4 text-xl">
            You scored {score} out of {questions.length} correct!
          </p>
          <Button onClick={() => router.push("/seeker/roadmap")}>
            Your Roadmap is Ready
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl p-6">
      <Card className="p-6">
        <div className="mb-4">
          Question {currentQuestion + 1} of {questions.length}
        </div>
        <h2 className="mb-4 text-xl font-semibold">
          {questions[currentQuestion]!.question}
        </h2>
        <div className="space-y-3">
          {questions[currentQuestion]!.options.map((option) => (
            <Button
              key={option}
              variant="outline"
              className="w-full justify-start text-left"
              onClick={() => handleAnswer(option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
}
