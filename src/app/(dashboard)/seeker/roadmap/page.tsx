"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { appwriteService } from "@/appwrite/service";

type RoadmapData = {
  subtopics: string[];
  recommendedResources: string[];
  practicalProjects: string[];
};

interface Job {
  key: string;
  title: string;
  company: string;
  location: string;
  isActive: boolean;
  startDate: string;
  salary: string;
  experience: string;
  applyBy: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  companyDescription: string;
  companyLogo: string;
}

const roadmap: Record<string, RoadmapData> = {
  "backend development": {
    subtopics: ["Node.js", "Express.js", "MongoDB"],
    recommendedResources: [
      "Node.js Documentation",
      "Express.js Guide",
    ],
    practicalProjects: [
      "Build a REST API",
      "Create a CRUD application",
    ],
  },
  // Add other keys and their corresponding roadmap data here
};

const RoadmapPage = () => {
  const [jobId, setJobId] = useState<string | null>(null); // State to hold jobId
  const [roadMap, setRoadMap] =
    useState<RoadmapData | null>(null); // State to hold roadmap data
  const [job, setJob] = useState<Job | null>(null); // State to hold job data

  useEffect(() => {
    const query = new URLSearchParams(
      window.location.search,
    );
    const jobIdFromQuery = query.get("jobId"); // Get jobId from query parameters
    setJobId(jobIdFromQuery); // Set jobId state

    // Fetch the job details or roadmap data based on jobId
    const fetchJobData = async () => {
      if (jobIdFromQuery) {
        const fetchedJob =
          await appwriteService.getDoc(jobIdFromQuery); // Fetch job data
        setJob(fetchedJob as Job); // Set job state

        // Use job.key to get the corresponding roadmap data
        const roadmapData = roadmap[fetchedJob.key]; // Access roadmap data using job.key
        setRoadMap(roadmapData); // Set roadmap data
      }
    };

    void fetchJobData();
  }, []);

  if (!roadMap || !job) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Your Roadmap for {job.title}
      </h1>
      <Card className="p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold">
          Roadmap for {job.key}
        </h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">
            Subtopics:
          </h3>
          <ul className="list-inside list-disc">
            {roadMap.subtopics.map((subtopic) => (
              <li key={subtopic} className="py-1">
                {subtopic}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">
            Recommended Resources:
          </h3>
          <ul className="list-inside list-disc">
            {roadMap.recommendedResources.map(
              (resource) => (
                <li key={resource} className="py-1">
                  {resource}
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">
            Practical Projects:
          </h3>
          <ul className="list-inside list-disc">
            {roadMap.practicalProjects.map((project) => (
              <li key={project} className="py-1">
                {project}
              </li>
            ))}
          </ul>
        </div>
      </Card>
      <div className="mt-6 flex gap-4">
        <Button
          onClick={() => console.log("Start Learning")}
          className="w-full"
        >
          Start Learning
        </Button>
        <Button
          variant="outline"
          onClick={() => console.log("Return to Job")}
          className="w-full"
        >
          Return to Job
        </Button>
      </div>
    </div>
  );
};

export default RoadmapPage;
