"use client";
import React, { useState } from "react";
import {

  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { beginnerRoadmap } from "@/utils/roadmap";
import { Button } from "@/components/ui/button";

interface Course {
  id: string;
  title: string;
  duration: number;
  difficulty: string;
  url: string;
}

const Page = () => {
  const [selectedDomain, setSelectedDomain] = useState<
    string | null
  >(null);
  type RoadmapDomain = keyof typeof beginnerRoadmap;
  const [selectedDomainContent, setSelectedDomainContent] =
    useState<any>(null);
  const handleDomainClick = (domain: RoadmapDomain) => {
    setSelectedDomain(domain);
    setSelectedDomainContent(beginnerRoadmap[domain]);
    console.log(domain);
  };

  return (
    <div className="m-10 h-full">
      {selectedDomain === null ? (
        <div className="flex flex-col justify-center items-center h-[75vh]">
          <div className="text-5xl font-bold pb-5">
            Create a Personalized Roadmap
          </div>
          <Dialog>
            <DialogTrigger className="border border-gray-500 bg-white hover:bg-gray-100 transition-all py-2 px-4 rounded-md">
              Choose a Domain you're interested in
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Domains to choose from
                </DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will
                  permanently delete your account and remove
                  your data from our servers.
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(beginnerRoadmap).map(
                  (item) => (
                    <div
                      key={item}
                      onClick={() =>
                        handleDomainClick(
                          item as RoadmapDomain,
                        )
                      }
                      className="border text-black text-sm cursor-pointer flex justify-center items-center text-center leading-none border-gray-500 bg-white hover:bg-gray-100 transition-all py-2 px-4 rounded-md"
                    >
                      {item.charAt(0).toUpperCase() +
                        item.slice(1)}
                    </div>
                  ),
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold capitalize">
              {selectedDomain.replace(/_/g, " ")}
            </h2>
            <Button onClick={() => setSelectedDomain(null)}>
              Choose another domain
            </Button>
          </div>
          {/* Recommended Courses Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              Recommended Courses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedDomainContent.recommendedCourses.map(
                (course: Course) => (
                  <div
                    key={course.id}
                    className="border rounded-lg p-4 space-y-2 bg-white shadow-sm"
                  >
                    <h4 className="font-medium">
                      {course.title}
                    </h4>
                    <div className="text-sm text-gray-600">
                      <p>
                        Duration: {course.duration} hours
                      </p>
                      <p className="capitalize">
                        Difficulty: {course.difficulty}
                      </p>
                    </div>
                    <a
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      View Course →
                    </a>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Skill Progression Path Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              Skill Progression Path
            </h3>
            <div className="space-y-6">
              {selectedDomainContent.skillProgressionPath.map(
                (week: any) => (
                  <div
                    key={week.week}
                    className="border rounded-lg p-4 space-y-3 bg-white shadow-sm"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">
                        Week {week.week}: {week.focus}
                      </h4>
                      <span className="text-sm text-gray-600">
                        {week.estimatedHours} hours
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {week.topics.map(
                        (topic: any, index: any) => (
                          <div
                            key={index}
                            className="text-sm bg-gray-50 p-2 rounded"
                          >
                            {topic}
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Estimated Preparation Time */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800">
              Estimated Preparation Time:{" "}
              {
                selectedDomainContent.estimatedPreparationTime
              }{" "}
              weeks
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
