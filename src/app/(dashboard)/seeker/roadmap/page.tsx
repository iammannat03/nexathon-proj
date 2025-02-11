"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function RoadmapPage() {
  const router = useRouter();
  
  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-8 text-3xl font-bold">
        Your Frontend Development Roadmap
      </h1>

      <div className="space-y-6">
        <Card className="p-6">
          <h2 className="mb-4 text-xl font-semibold">
            Based on Your Quiz Results
          </h2>
          <p className="mb-4 text-gray-600">
            We&apos;ve created a personalized learning path to help you become a
            Frontend Engineer. Here are the recommended steps:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-medium">1. Fundamentals</h3>
              <p className="text-sm text-gray-600">
                Master HTML, CSS, and JavaScript basics
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-medium">2. Modern JavaScript</h3>
              <p className="text-sm text-gray-600">
                Learn ES6+ features and async programming
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-medium">3. React Fundamentals</h3>
              <p className="text-sm text-gray-600">
                Components, props, state, and hooks
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-medium">4. Advanced Topics</h3>
              <p className="text-sm text-gray-600">
                TypeScript, Next.js, and state management
              </p>
            </div>
          </div>
        </Card>

        <div className="flex gap-4">
          <Button onClick={() => router.push("/seeker/courses")}>
            Start Learning
          </Button>
          <Button variant="outline" onClick={() => router.back()}>
            Return to Job
          </Button>
        </div>
      </div>
    </div>
  );
}
