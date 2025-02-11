"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  EllipsisVertical,
} from "lucide-react";

const jobs = [
  {
    title: "Software Engineer",
    jobId: "AL106",
    mode: "On-site",
    location: "Bangalore",
    status: {
      new: {
        title: "New",
        value: 2,
      },
      shortlisted: {
        title: "Shortlisted",
        value: 4,
      },
      interview: {
        title: "Interview",
        value: 1,
      },
    },
  },
  {
    title: "Data Scientist",
    jobId: "DS207",
    mode: "Hybrid",
    location: "Mumbai",
    status: {
      new: {
        title: "New",
        value: 3,
      },
      shortlisted: {
        title: "Shortlisted",
        value: 5,
      },
      interview: {
        title: "Interview",
        value: 2,
      },
    },
  },
  {
    title: "Product Manager",
    jobId: "PM308",
    mode: "Remote",
    location: "Delhi",
    status: {
      new: {
        title: "New",
        value: 1,
      },
      shortlisted: {
        title: "Shortlisted",
        value: 3,
      },
      interview: {
        title: "Interview",
        value: 1,
      },
    },
  },
  {
    title: "UX Designer",
    jobId: "UX409",
    mode: "On-site",
    location: "Chennai",
    status: {
      new: {
        title: "New",
        value: 4,
      },
      shortlisted: {
        title: "Shortlisted",
        value: 6,
      },
      interview: {
        title: "Interview",
        value: 3,
      },
    },
  },
  {
    title: "DevOps Engineer",
    jobId: "DE510",
    mode: "Hybrid",
    location: "Pune",
    status: {
      new: {
        title: "New",
        value: 5,
      },
      shortlisted: {
        title: "Shortlisted",
        value: 2,
      },
      interview: {
        title: "Interview",
        value: 1,
      },
    },
  },
  {
    title: "Marketing Specialist",
    jobId: "MS611",
    mode: "Remote",
    location: "Hyderabad",
    status: {
      new: {
        title: "New",
        value: 2,
      },
      shortlisted: {
        title: "Shortlisted",
        value: 3,
      },
      interview: {
        title: "Interview",
        value: 1,
      },
    },
  },
];

const JobSectionHome = () => {
  const router = useRouter();
  const [isJobTileHovered, setIsJobTileHovered] =
    useState("-1");

  const handleHover = (idx: string) => {
    setIsJobTileHovered(idx);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full  p-2 flex justify-between">
        <h1 className="text-2xl font-semibold">Jobs</h1>
        <Button
          className="bg-blue-300/40 hover:bg-blue-500/40 font-semibold text-blue-500"
          onClick={() =>
            router.push("/agency/dashboard/job")
          }
        >
          <span>View All</span>
          <ChevronRight className="" />
        </Button>
      </div>
      <div className="flex flex-col gap-y-4">
        {jobs.map((job) => (
          <div
            key={job.jobId}
            className="bg-white/5 p-5 flex justify-between border rounded-lg transition-all duration-300 ease-in-out hover:border-blue-500"
            onMouseEnter={() => handleHover(job.jobId)}
            onMouseLeave={() => handleHover("-1")}
          >
            <div className="flex flex-col justify-center items-start gap-y-2">
              <div className="text-xl font-bold">
                {job.title}
              </div>
              <div className="flex text-gray-500 text-sm gap-x-2">
                <div>{job.jobId}</div>
                <span>•</span>
                <div>{job.mode}</div>
                <span>•</span>
                <div>{job.location}</div>
              </div>
            </div>
            <div className="flex items-center gap-x-6">
              <div className="flex max-md:hidden">
                <div
                  className={`flex items-center py-3 rounded-s-lg transition-all duration-300 ease-in-out ${
                    isJobTileHovered === job.jobId
                      ? "opacity-100"
                      : "opacity-50"
                  }`}
                >
                  <div className="flex flex-col items-center justify-center h-16 w-24 border-e">
                    <span>{job.status.new.value}</span>
                    <span>{job.status.new.title}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center h-16 w-24 border-e">
                    <span>
                      {job.status.shortlisted.value}
                    </span>
                    <span>
                      {job.status.shortlisted.title}
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center h-16 w-24 border-e">
                    <span>
                      {job.status.interview.value}
                    </span>
                    <span>
                      {job.status.interview.title}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-24 bg-gray-950 text-black rounded-e-lg">
                  <div className="flex flex-col items-center justify-center w-full h-full rounded-lg bg-gray-800 gap-y-1">
                    <span className="text-white text-lg">
                      {job.status.new.value +
                        job.status.shortlisted.value +
                        job.status.interview.value}
                    </span>
                    <span className="text-gray-300">
                      Total
                    </span>
                  </div>
                </div>
              </div>
              <EllipsisVertical className="h-5 w-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSectionHome;
