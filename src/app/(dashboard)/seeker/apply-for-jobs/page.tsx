"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { appwriteService } from "@/appwrite/service"; // Import your Appwrite service
import { SelectItem } from "@/components/ui/select";
import { SelectContent } from "@/components/ui/select";
import { SelectValue } from "@/components/ui/select";
import {
  Select,
  SelectTrigger,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

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

const JobListingPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<
    string | null
  >(null);
  const [isRemote, setIsRemote] = useState(false);
  const [isPartTime, setIsPartTime] = useState(false);
  const [salaryRange, setSalaryRange] = useState([0]);
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
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col space-y-6 p-5">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[300px_1fr]">
        <div className="space-y-4">
          <Input
            placeholder="Search job profiles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select onValueChange={setSelectedLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bangalore">
                Bangalore
              </SelectItem>
              <SelectItem value="mumbai">Mumbai</SelectItem>
              <SelectItem value="delhi">Delhi</SelectItem>
            </SelectContent>
          </Select>
          {selectedLocation && (
            <Badge
              variant="secondary"
              className="cursor-pointer"
              onClick={() => setSelectedLocation(null)}
            >
              {selectedLocation} ✕
            </Badge>
          )}
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <Checkbox
                checked={isRemote}
                onCheckedChange={(checked) =>
                  setIsRemote(checked as boolean)
                }
              />
              <span>Work from Home</span>
            </label>
            <label className="flex items-center space-x-2">
              <Checkbox
                checked={isPartTime}
                onCheckedChange={(checked) =>
                  setIsPartTime(checked as boolean)
                }
              />
              <span>Part-time</span>
            </label>
          </div>
          <div className="space-y-2">
            <label>Salary Range (LPA)</label>
            <Slider
              value={salaryRange}
              onValueChange={setSalaryRange}
              max={10}
              step={1}
            />
            <div className="text-sm text-muted-foreground">
              {salaryRange[0]} - 10 LPA
            </div>
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Years of experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-2">0-2 years</SelectItem>
              <SelectItem value="2-5">2-5 years</SelectItem>
              <SelectItem value="5+">5+ years</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4 flex flex-col">
          {/* Promoted Course Card */}
          <Card className="p-6 border-2 border-primary">
            <div className="flex justify-between items-start">
              <div>
                <Badge className="mb-2">Promoted</Badge>
                <h3 className="text-xl font-semibold">
                  Full Stack Development Course
                </h3>
                <p className="text-muted-foreground">
                  with Guaranteed Placement
                </p>
              </div>
              <Button>Enroll Now</Button>
            </div>
          </Card>
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
      </div>
    </div>
  );
};

export default JobListingPage;
