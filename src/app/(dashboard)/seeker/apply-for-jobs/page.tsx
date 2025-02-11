"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { appwriteService } from "@/appwrite/service"; // Import your Appwrite service

interface Job {
  id: string;
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

const JobListingPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const fetchedJob =
          await appwriteService.getAllJobs();
        setJobs(fetchedJob);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    void fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-1 flex-col space-y-6">
      {/* Job Cards */}
      {jobs.map((job) => (
        <Link
          key={job.id}
          href={`/seeker/apply-for-jobs/${job.id}`}
          className="transition-all duration-300 hover:shadow-lg"
        >
          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  {job.title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>{job.company}</span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>{job.experience}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>{job.salary}</span>
                  </div>
                </div>
              </div>
              <Button>Apply Now</Button>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default JobListingPage;
