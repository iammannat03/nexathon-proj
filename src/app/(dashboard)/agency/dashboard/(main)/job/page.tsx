"use client";
import {
  EllipsisVertical,
  LayoutGrid,
  Rows3,
} from "lucide-react";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useJobsData } from "@/hooks/useJobsData";
import { Job } from "@/types/job";

type Props = {};

const _jobs = [
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

const items = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
] as const;

const Page = () => {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(
    []
  );
  const { fetchJobs, jobs, loading } = useJobsData();

  function filterData(filters: any = {}) {
    // Add Filter Logic here we can use different Filtered here
    // Also can use By default filters here
    setFilteredJobs(jobs);
  }

  React.useEffect(() => {
    // incase person directly open page without going to home page
    fetchJobs();
  }, []);

  React.useEffect(() => {
    filterData();
  }, [jobs]);

  return (
    <div className="flex flex-col gap-y-8 xl:mx-28 lg:mx-12 max-sm:mx-8 py-12">
      <div className="w-full flex justify-start items-center">
        <h1 className="text-2xl font-bold">Open Jobs</h1>
      </div>
      <div className="flex justify-between items-center border-b pb-2">
        <div>Search</div>
        <div className="flex gap-x-2">
          <span className="group p-2 rounded-lg hover:bg-white/10">
            <Rows3 className="h-5 w-5 text-white/70 group-hover:text-white/90 " />
          </span>
          <span className="group p-2 rounded-lg hover:bg-white/10">
            <LayoutGrid className="h-5 w-5 text-white/70 group-hover:text-white/90 " />
          </span>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-x-4">
        <div className="w-full border flex flex-col gap-y-4 col-span-1">
          <div className=" border rounded-lg w-full p-6">
            <Accordion
              type="single"
              collapsible
              className=""
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-bold py-2">
                  Is it accessible?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design
                  pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <span className="text-4xl font-bold">{10}</span>
            <div className="flex flex-col justify-start gap-y-1 mt-3">
              <span className="text-sm ">
                <span className="font-semibold">
                  Job Filters by job type:
                </span>{" "}
                {"bhfbea hkb ufeab feqhaiuk feqhauf"}
              </span>
              <span className="text-sm">
                <span className="font-semibold">
                  Employment Type:
                </span>
                {" Full Time"}
              </span>
            </div>
          </div>
          <div className="border rounded-lg w-full p-6">
            <h4 className="text-lg font-bold">
              Filter By Job Type
            </h4>
            <div className="flex flex-col gap-y-2 mt-3">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-x-2"
                >
                  <Checkbox id={item.id} />
                  <Label htmlFor={item.id}>
                    {item.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div className="border rounded-lg w-full p-6">
            <h4 className="text-lg font-bold">
              Filter By Employment Type
            </h4>
            <div className="flex flex-col gap-y-2 mt-3">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-x-2"
                >
                  <Checkbox id={item.id} />
                  <Label htmlFor={item.id}>
                    {item.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div className="border rounded-lg w-full p-6">
            <h4 className="text-lg font-bold">
              Filter By Experience Type
            </h4>
            <div className="flex flex-col gap-y-2 mt-3">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-x-2"
                >
                  <Checkbox id={item.id} />
                  <Label htmlFor={item.id}>
                    {item.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* list of tiles */}
        {filteredJobs.length === 0 && !loading && (
          <div
            className={
              "w-full flex flex-col justify-center items-center"
            }
          >
            <svg
              width={200}
              viewBox="0 0 24.00 24.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#919191"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#808080"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></circle>
                <path
                  d="M7.88124 16.2441C8.37391 15.8174 9.02309 15.5091 9.72265 15.3072C10.4301 15.103 11.2142 15 12 15C12.7858 15 13.5699 15.103 14.2774 15.3072C14.9769 15.5091 15.6261 15.8174 16.1188 16.2441"
                  stroke="#808080"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
                <circle
                  cx="9"
                  cy="10"
                  r="1.25"
                  fill="#808080"
                  stroke="#808080"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                ></circle>
                <circle
                  cx="15"
                  cy="10"
                  r="1.25"
                  fill="#808080"
                  stroke="#808080"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                ></circle>
              </g>
            </svg>
            No Jobs Found
          </div>
        )}
        {loading && (
          <div
            className={
              "w-full flex flex-col justify-center items-center"
            }
          >
            Loading...
          </div>
        )}
        <JobContainer filteredJobs={filteredJobs} />
      </div>
    </div>
  );
};

const JobContainer: React.FC<{ filteredJobs: Job[] }> = ({
  filteredJobs,
}) => {
  const router = useRouter();
  const [isJobTileHovered, setIsJobTileHovered] =
    useState("-1");

  const handleHover = (idx: string) => {
    setIsJobTileHovered(idx);
  };
  return (
    <div className="flex flex-col gap-y-4 col-span-2">
      {filteredJobs.map((job) => (
        <div
          key={job.jobId}
          className="bg-white/5 p-5 py-3 flex flex-col w-full items-start justify-between border rounded-lg transition-all duration-300 ease-in-out hover:border-blue-500"
          onMouseEnter={() => handleHover(job.jobId)}
          onMouseLeave={() => handleHover("-1")}
          onClick={() => router.push(`job/${job.jobId}`)}
        >
          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col justify-center items-start gap-y-">
              <div className="text-lg font-bold">
                {job.jobTitle}
              </div>
              <div className="flex text-gray-500 text-sm gap-x-2">
                <div>{job.jobId}</div>
                <span>•</span>
                <div>{job.employmentType}</div>
                <span>•</span>
                <div>{job.location}</div>
              </div>
            </div>
            <span className="flex gap-x-3 justify-center items-end mt-3">
              <span className="text-xs">
                Posted on {job.postedDate}
              </span>
              <EllipsisVertical className="h-5 w-5 " />
            </span>
          </div>
          <div className="w-full flex justify-center items-center gap-x-6">
            <div className="flex w-full justify-center">
              <div
                className={`flex items-center bg-gray-950 py- rounded-s-lg transition-all duration-300 ease-in-out ${
                  isJobTileHovered === job.jobId
                    ? "opacity-100"
                    : "opacity-50"
                }`}
              >
                <div className="flex flex-col items-center justify-center h-16 w-24 border-e">
                  <span>{job.totalShortlisted}</span>
                  <span>Shortlisted</span>
                </div>
                {/*                  <div className="flex flex-col items-center justify-center h-16 w-24 border-e">*/}
                {/*<span>*/}
                {/*  {job.status.shortlisted.value}*/}
                {/*</span>*/}
                {/*                      <span>*/}
                {/*  {job.status.shortlisted.title}*/}
                {/*</span>*/}
                {/*                  </div>*/}
                <div className="flex flex-col items-center justify-center h-16 w-24 border-e">
                  <span>{job.totalInterviewsTaken}</span>
                  <span>Interviewed</span>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-24 bg-gray-950 text-black rounded-e-lg">
                <div className="flex flex-col items-center justify-center w-full h-full rounded-lg bg-gray-800 gap-y-1">
                  <span className="text-white text-lg">
                    {job.totalCandidates}
                  </span>
                  <span className="text-gray-300">
                    Total
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Page;
