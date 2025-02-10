"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { QuestionCard } from "./question-card";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";

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
      { id: "cybersecurity", label: "Cybersecurity" },
      { id: "cloud", label: "Cloud Computing" },
      { id: "data", label: "Data Science" },
      { id: "devops", label: "DevOps" },
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
  {
    id: "skills",
    question: "What skills do you have?",
    type: "multi-select",
    options: [
      { id: "html", label: "HTML/CSS" },
      { id: "js", label: "JavaScript" },
      { id: "react", label: "React" },
      { id: "node", label: "Node.js" },
      { id: "python", label: "Python" },
      { id: "java", label: "Java" },
      { id: "csharp", label: "C#" },
      { id: "sql", label: "SQL/Databases" },
      { id: "aws", label: "AWS" },
      { id: "docker", label: "Docker" },
      { id: "git", label: "Git/GitHub" },
      { id: "other", label: "Other" },
    ],
  },
  {
    id: "education",
    question: "What is your highest qualification?",
    options: [
      { id: "highschool", label: "High School" },
      { id: "bachelors", label: "Bachelor's Degree" },
      { id: "masters", label: "Master's Degree" },
      { id: "phd", label: "PhD" },
      { id: "other", label: "Other" },
    ],
  },
  {
    id: "job_preference",
    question: "What type of jobs are you looking for?",
    type: "checkbox",
    options: [
      { id: "internship", label: "Internship" },
      { id: "part-time", label: "Part-time" },
      { id: "full-time", label: "Full-time" },
      { id: "freelance", label: "Freelance" },
      { id: "remote", label: "Remote" },
    ],
  },
  {
    id: "career_goal",
    question: "What is your current career goal?",
    options: [
      { id: "learning", label: "Just learning new skills" },
      { id: "getting_job", label: "Getting my first job" },
      { id: "switching", label: "Switching careers" },
      { id: "growth", label: "Career growth & promotions" },
    ],
  },
  {
    id: "availability",
    question: "How much time can you devote per week?",
    options: [
      { id: "5", label: "Less than 5 hours" },
      { id: "10", label: "5-10 hours" },
      { id: "20", label: "10-20 hours" },
      { id: "fulltime", label: "Full-time commitment" },
    ],
  },
  {
    id: "project_experience",
    question: "Do you have any project experience?",
    options: [
      { id: "personal", label: "Yes, personal projects" },
      { id: "work", label: "Yes, work-related projects" },
      { id: "no", label: "No, not yet" },
    ],
  },
  {
    id: "resume",
    question: "Do you already have a resume?",
    options: [
      { id: "yes", label: "Yes, I have a resume" },
      { id: "no", label: "No, I need to create one" },
      { id: "later", label: "I will do this later" },
    ],
  },
];

export function QuestionCarousel() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<
    Record<string, string | string[]>
  >({});

  const handleAnswer = (answer: string | string[]) => {
    const currentQ = questions[currentQuestion];
    if (!currentQ) return;

    if (
      currentQ.type === "multi-select" ||
      currentQ.type === "checkbox"
    ) {
      setAnswers((prev) => {
        const currentAnswers = Array.isArray(
          prev[currentQ.id],
        )
          ? (prev[currentQ.id] as string[])
          : [];
        if (Array.isArray(answer)) {
          const newAnswers = {
            ...prev,
            [currentQ.id]: answer,
          };
          // Move to next question after setting answers for multi-select
          setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
              setCurrentQuestion((prev) => prev + 1);
            } else {
              console.log(
                "All questions answered:",
                newAnswers,
              );
              router.push("/get-started");
            }
          }, 0);
          return newAnswers;
        }
        const updatedAnswers = currentAnswers.includes(
          answer,
        )
          ? currentAnswers.filter((a) => a !== answer)
          : [...currentAnswers, answer];
        return { ...prev, [currentQ.id]: updatedAnswers };
      });
    } else {
      setAnswers((prev) => {
        const newAnswers = {
          ...prev,
          [currentQ.id]: answer,
        };

        if (currentQuestion === questions.length - 1) {
          console.log(
            "All questions answered:",
            newAnswers,
          );
          router.push("/get-started");
        }
        return newAnswers;
      });

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      }
    }
  };
  console.log(questions[currentQuestion]);

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
            type={
              questions[currentQuestion].type as
                | "multi-select"
                | "checkbox"
                | undefined
            }
          />
        )}
      </AnimatePresence>
    </div>
  );
}
