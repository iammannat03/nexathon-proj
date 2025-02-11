"use client";

import { useState, useEffect } from "react";
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
    question:
      "What is the primary responsibility of a sales specialist?",
    options: [
      "Managing office supplies",
      "Developing client relationships",
      "Writing code",
      "Handling IT support",
    ],
    correctAnswer: "Developing client relationships",
  },
  // Add more questions
  {
    id: 2,
    question:
      "What is the main goal of a marketing campaign?",
    options: [
      "To increase sales",
      "To improve employee satisfaction",
      "To reduce costs",
      "To enhance product quality",
    ],
    correctAnswer: "To increase sales",
  },
  {
    id: 3,
    question:
      "Which of the following is a key performance indicator (KPI)?",
    options: [
      "Customer satisfaction score",
      "Employee turnover rate",
      "Number of products sold",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    id: 4,
    question: "What is the purpose of a SWOT analysis?",
    options: [
      "To analyze financial statements",
      "To assess strengths, weaknesses, opportunities, and threats",
      "To evaluate employee performance",
      "To create marketing strategies",
    ],
    correctAnswer:
      "To assess strengths, weaknesses, opportunities, and threats",
  },
  {
    id: 5,
    question: "What does CRM stand for?",
    options: [
      "Customer Relationship Management",
      "Cost Reduction Management",
      "Creative Resource Management",
      "Customer Retention Model",
    ],
    correctAnswer: "Customer Relationship Management",
  },
];

export default function ReadinessQuiz() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] =
    useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] =
    useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [jobId, setJobId] = useState<string | null>(null); // State to hold jobId

  useEffect(() => {
    const query = new URLSearchParams(
      window.location.search,
    );
    const jobIdFromQuery = query.get("jobId"); // Get jobId from query parameters
    setJobId(jobIdFromQuery); // Set jobId state
  }, []);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion === questions.length - 1) {
      const finalScore = newAnswers.reduce(
        (acc, curr, index) => {
          return curr === questions[index]!.correctAnswer
            ? acc + 1
            : acc;
        },
        0,
      );
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
          <h2 className="mb-4 text-2xl font-bold">
            Quiz Results
          </h2>
          <p className="mb-4 text-xl">
            You scored {score} out of {questions.length}{" "}
            correct!
          </p>
          <Button
            onClick={() =>
              router.push(`/seeker/roadmap?jobId=${jobId}`)
            }
          >
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
          Question {currentQuestion + 1} of{" "}
          {questions.length}
        </div>
        <h2 className="mb-4 text-xl font-semibold">
          {questions[currentQuestion]!.question}
        </h2>
        <div className="space-y-3">
          {questions[currentQuestion]!.options.map(
            (option) => (
              <Button
                key={option}
                variant="outline"
                className="w-full justify-start text-left"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </Button>
            ),
          )}
        </div>
      </Card>
    </div>
  );
}
