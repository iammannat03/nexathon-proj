"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { JobReadinessDialog } from "@/components/job-readiness-dialog";
import { appwriteService } from "@/appwrite/service";

interface Job {
  id: string;
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

const JobDetailsPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const resolvedParams = await params; // Unwrap the Promise
        setId(resolvedParams.id); // Set the id state
        const fetchedJob = await appwriteService.getDoc(resolvedParams.id);
        setJob(fetchedJob as Job | null);
      } catch (error) {
        console.error("Error fetching job:", error);
      } finally {
        setLoading(false);
      }
    };

    void fetchJob();
  }, [params]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <button
        onClick={() => window.history.back()}
        className="mb-4 flex items-center text-gray-600 hover:text-gray-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-1 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back
      </button>

      <div className="rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <h1 className="text-2xl font-bold">{job.title}</h1>
              {job.isActive && (
                <span className="rounded bg-green-100 px-2 py-1 text-xs text-green-800">
                  Actively hiring
                </span>
              )}
            </div>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-500">{job.location}</p>
          </div>
          <Image
            src={job.companyLogo}
            alt={`${job.company} Logo`}
            height={100}
            width={100}
            className="h-16 w-16 rounded"
          />
        </div>

        <div className="mb-6 grid grid-cols-4 gap-4">
          <div className="rounded bg-gray-50 p-4">
            <p className="text-sm text-gray-500">START DATE</p>
            <p className="font-medium">{job.startDate}</p>
          </div>
          <div className="rounded bg-gray-50 p-4">
            <p className="text-sm text-gray-500">CTC (ANNUAL)</p>
            <p className="font-medium">{job.salary}</p>
          </div>
          <div className="rounded bg-gray-50 p-4">
            <p className="text-sm text-gray-500">EXPERIENCE</p>
            <p className="font-medium">{job.experience}</p>
          </div>
          <div className="rounded bg-gray-50 p-4">
            <p className="text-sm text-gray-500">APPLY BY</p>
            <p className="font-medium">{job.applyBy}</p>
          </div>
        </div>

        <div className="mb-8 flex gap-4">
          <Button variant={"default"}>Apply Now</Button>
          <JobReadinessDialog />
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="mb-3 text-xl font-semibold">About the job</h2>
            <p className="text-gray-700">{job.description}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              Key Responsibilities:
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-gray-700">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">Skills Required</h2>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">About {job.company}</h2>
            <p className="text-gray-700">{job.companyDescription}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
