"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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

// Example job data - replace with actual data fetching
const job: Job = {
  id: "1",
  title: "Corporate Sales Specialist",
  company: "Mangostine Technologies Private Limited",
  location: "Noida",
  isActive: true,
  startDate: "Immediately",
  salary: "₹ 3,00,000 - 6,00,000",
  experience: "1 year(s)",
  applyBy: "7 Mar' 25",
  description:
    "We are looking for a motivated sales specialist...",
  responsibilities: [
    "Develop and maintain client relationships",
    "Meet or exceed sales targets",
    "Identify new business opportunities",
  ],
  skills: [
    "Effective Communication",
    "English Proficiency (Spoken)",
    "Sales",
  ],
  companyDescription:
    "Mangostine Technologies is a leading software development company specializing in enterprise solutions, cloud computing, and digital transformation. Founded in 2015, we have grown to become one of the most trusted technology partners for businesses across India and Southeast Asia. Our team of over 200 talented professionals is dedicated to delivering innovative solutions that help our clients stay ahead in the digital age. We pride ourselves on our culture of continuous learning, technical excellence, and customer-centric approach.",
  companyLogo:
    "data:image/png;base64,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",
};

const JobDetailsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => window.history.back()}
        className="mb-4 flex items-center text-gray-600 hover:text-gray-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
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

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-2xl font-bold">
                {job.title}
              </h1>
              {job.isActive && (
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
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
            className="w-16 h-16 rounded"
          />
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="p-4 bg-gray-50 rounded">
            <p className="text-sm text-gray-500">
              START DATE
            </p>
            <p className="font-medium">{job.startDate}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <p className="text-sm text-gray-500">
              CTC (ANNUAL)
            </p>
            <p className="font-medium">{job.salary}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <p className="text-sm text-gray-500">
              EXPERIENCE
            </p>
            <p className="font-medium">{job.experience}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <p className="text-sm text-gray-500">
              APPLY BY
            </p>
            <p className="font-medium">{job.applyBy}</p>
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          <Button variant={"default"}>Apply Now</Button>
          <Button variant={"outline"}>
            Prepare for this role
          </Button>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">
              About the job
            </h2>
            <p className="text-gray-700">
              {job.description}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              Key Responsibilities:
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              {job.responsibilities.map(
                (responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ),
              )}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              Skills Required
            </h2>
            <div className="flex gap-2 flex-wrap">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              About {job.company}
            </h2>
            <p className="text-gray-700">
              {job.companyDescription}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
