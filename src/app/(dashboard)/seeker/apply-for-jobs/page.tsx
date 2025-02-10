"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Building2,
  Calendar,
  IndianRupee,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
// Mock job data
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    isPromoted: true,
    location: "Bangalore",
    isRemote: true,
    experience: "0-2 years",
    salary: "5-8 LPA",
    postedDate: "2 days ago",
    isHiring: true,
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "CloudTech Solutions",
    isPromoted: false,
    location: "Mumbai",
    isRemote: true,
    experience: "3-5 years",
    salary: "15-20 LPA",
    postedDate: "1 day ago",
    isHiring: true,
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "InfraScale",
    isPromoted: true,
    location: "Delhi",
    isRemote: false,
    experience: "2-4 years",
    salary: "12-18 LPA",
    postedDate: "3 days ago",
    isHiring: true,
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "Digital Dynamics",
    isPromoted: false,
    location: "Bangalore",
    isRemote: true,
    experience: "4-6 years",
    salary: "18-25 LPA",
    postedDate: "5 days ago",
    isHiring: true,
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: "CreativeMinds",
    isPromoted: true,
    location: "Hyderabad",
    isRemote: true,
    experience: "2-5 years",
    salary: "8-15 LPA",
    postedDate: "1 week ago",
    isHiring: true,
  },
  // Add more mock jobs here
];

const JobListingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<
    string | null
  >(null);
  const [isRemote, setIsRemote] = useState(false);
  const [isPartTime, setIsPartTime] = useState(false);
  const [salaryRange, setSalaryRange] = useState([0]);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-6">
      {/* Filters Sidebar */}
      <div className="w-full lg:w-64 space-y-6">
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
      </div>

      {/* Job Listings */}
      <div className="flex-1 flex flex-col space-y-6">
        {/* Promoted Course Card */}
        <Card className="p-6 border-2 border-primary hover:shadow-lg transition-all duration-300">
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

        {/* Job Cards */}
        {jobs.map((job) => (
          <Link
            key={job.id}
            href={`/seeker/apply-for-jobs/${job.id}`}
            className="hover:shadow-lg transition-all duration-300"
          >
            <Card className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building2 className="h-4 w-4" />
                    <span>{job.company}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <IndianRupee className="h-4 w-4" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{job.postedDate}</span>
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
  );
};

export default JobListingPage;
