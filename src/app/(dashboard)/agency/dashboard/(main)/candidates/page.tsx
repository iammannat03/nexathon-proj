"use client";
import React, { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import {
  Calendar,
  Mail,
  Trash2,
  EllipsisVertical,
  Search,
  Plus,
} from "lucide-react";

const candidates = [
  {
    id: "c001",
    name: "Abhinandan Singla",
    avatarImg: "",
    interviewsGiven: 5,
    dimensions: {
      Communication: 8,
      "Problem Solving": 7,
      Leadership: 4,
      "Azure Fundamentals": 3,
    },
    status: "Active",
    pastInterviews: [
      {
        role: "Software Engineer II",
        date: "7th October 2024",
        score: "7/10",
      },
      {
        role: "Azure Tech I",
        date: "4th October 2024",
        score: "1/10",
      },
      {
        role: "Software Engineer II",
        date: "3rd October 2024",
        score: "6/10",
      },
    ],
  },
  {
    id: "c002",
    name: "Harishankar Kumar",
    avatarImg: "",
    interviewsGiven: 5,
    dimensions: {
      Communication: 8,
      "Problem Solving": 7,
      Leadership: 4,
      "Azure Fundamentals": 3,
    },
    status: "Not Active",
    pastInterviews: [
      {
        role: "Software Engineer II",
        date: "7th October 2024",
        score: "7/10",
      },
      {
        role: "Azure Tech I",
        date: "4th October 2024",
        score: "1/10",
      },
      {
        role: "Software Engineer II",
        date: "3rd October 2024",
        score: "6/10",
      },
    ],
  },
  {
    id: "c003",
    name: "Sarah Johnson",
    avatarImg: "",
    interviewsGiven: 3,
    dimensions: {
      Communication: 9,
      "Problem Solving": 8,
      Leadership: 7,
      "Azure Fundamentals": 6,
    },
    status: "Active",
    pastInterviews: [
      {
        role: "Senior Software Engineer",
        date: "8th October 2024",
        score: "9/10",
      },
      {
        role: "Tech Lead",
        date: "5th October 2024",
        score: "8/10",
      },
    ],
  },
  {
    id: "c004",
    name: "Michael Chen",
    avatarImg: "",
    interviewsGiven: 4,
    dimensions: {
      Communication: 7,
      "Problem Solving": 9,
      Leadership: 6,
      "Azure Fundamentals": 8,
    },
    status: "Active",
    pastInterviews: [
      {
        role: "Cloud Architect",
        date: "6th October 2024",
        score: "8/10",
      },
      {
        role: "DevOps Engineer",
        date: "2nd October 2024",
        score: "9/10",
      },
    ],
  },
  {
    id: "c005",
    name: "Emma Wilson",
    avatarImg: "",
    interviewsGiven: 6,
    dimensions: {
      Communication: 8,
      "Problem Solving": 7,
      Leadership: 8,
      "Azure Fundamentals": 5,
    },
    status: "Not Active",
    pastInterviews: [
      {
        role: "Product Manager",
        date: "9th October 2024",
        score: "8/10",
      },
    ],
  },
  {
    id: "c006",
    name: "David Rodriguez",
    avatarImg: "",
    interviewsGiven: 2,
    dimensions: {
      Communication: 6,
      "Problem Solving": 8,
      Leadership: 5,
      "Azure Fundamentals": 7,
    },
    status: "Active",
    pastInterviews: [
      {
        role: "Full Stack Developer",
        date: "1st October 2024",
        score: "7/10",
      },
    ],
  },
  {
    id: "c007",
    name: "Priya Patel",
    avatarImg: "",
    interviewsGiven: 7,
    dimensions: {
      Communication: 9,
      "Problem Solving": 8,
      Leadership: 7,
      "Azure Fundamentals": 8,
    },
    status: "Active",
    pastInterviews: [
      {
        role: "Technical Architect",
        date: "10th October 2024",
        score: "9/10",
      },
    ],
  },
  {
    id: "c008",
    name: "James Wilson",
    avatarImg: "",
    interviewsGiven: 3,
    dimensions: {
      Communication: 7,
      "Problem Solving": 6,
      Leadership: 8,
      "Azure Fundamentals": 5,
    },
    status: "Not Active",
    pastInterviews: [
      {
        role: "Software Engineer I",
        date: "30th September 2024",
        score: "6/10",
      },
    ],
  },
  {
    id: "c009",
    name: "Lisa Zhang",
    avatarImg: "",
    interviewsGiven: 5,
    dimensions: {
      Communication: 8,
      "Problem Solving": 9,
      Leadership: 6,
      "Azure Fundamentals": 7,
    },
    status: "Active",
    pastInterviews: [
      {
        role: "Data Engineer",
        date: "11th October 2024",
        score: "8/10",
      },
    ],
  },
  {
    id: "c010",
    name: "Alex Thompson",
    avatarImg: "",
    interviewsGiven: 4,
    dimensions: {
      Communication: 7,
      "Problem Solving": 8,
      Leadership: 7,
      "Azure Fundamentals": 6,
    },
    status: "Active",
    pastInterviews: [
      {
        role: "Backend Developer",
        date: "12th October 2024",
        score: "7/10",
      },
    ],
  },
  {
    id: "c011",
    name: "Maria Garcia",
    avatarImg: "",
    interviewsGiven: 6,
    dimensions: {
      Communication: 8,
      "Problem Solving": 7,
      Leadership: 8,
      "Azure Fundamentals": 7,
    },
    status: "Active",
    pastInterviews: [
      {
        role: "Frontend Developer",
        date: "13th October 2024",
        score: "8/10",
      },
    ],
  },
  {
    id: "c012",
    name: "Thomas Anderson",
    avatarImg: "",
    interviewsGiven: 3,
    dimensions: {
      Communication: 6,
      "Problem Solving": 9,
      Leadership: 5,
      "Azure Fundamentals": 8,
    },
    status: "Not Active",
    pastInterviews: [
      {
        role: "Systems Architect",
        date: "14th October 2024",
        score: "7/10",
      },
    ],
  },
  {
    id: "c013",
    name: "Sophie Martin",
    avatarImg: "",
    interviewsGiven: 5,
    dimensions: {
      Communication: 9,
      "Problem Solving": 7,
      Leadership: 8,
      "Azure Fundamentals": 6,
    },
    status: "Active",
    pastInterviews: [
      {
        role: "UX Designer",
        date: "15th October 2024",
        score: "8/10",
      },
    ],
  },
  {
    id: "c014",
    name: "Daniel Kim",
    avatarImg: "",
    interviewsGiven: 4,
    dimensions: {
      Communication: 7,
      "Problem Solving": 8,
      Leadership: 6,
      "Azure Fundamentals": 7,
    },
    status: "Active",
    pastInterviews: [
      {
        role: "Mobile Developer",
        date: "16th October 2024",
        score: "7/10",
      },
    ],
  },
  {
    id: "c015",
    name: "Rachel Brown",
    avatarImg: "",
    interviewsGiven: 6,
    dimensions: {
      Communication: 8,
      "Problem Solving": 7,
      Leadership: 7,
      "Azure Fundamentals": 8,
    },
    status: "Not Active",
    pastInterviews: [
      {
        role: "QA Engineer",
        date: "17th October 2024",
        score: "8/10",
      },
    ],
  },
  {
    id: "c016",
    name: "Kevin Lee",
    avatarImg: "",
    interviewsGiven: 3,
    dimensions: {
      Communication: 7,
      "Problem Solving": 8,
      Leadership: 6,
      "Azure Fundamentals": 7,
    },
    status: "Active",
    pastInterviews: [
      {
        role: "DevOps Engineer",
        date: "18th October 2024",
        score: "7/10",
      },
    ],
  },
  {
    id: "c017",
    name: "Anna Kowalski",
    avatarImg: "",
    interviewsGiven: 5,
    dimensions: {
      Communication: 8,
      "Problem Solving": 8,
      Leadership: 7,
      "Azure Fundamentals": 6,
    },
    status: "Active",
    pastInterviews: [
      {
        role: "Software Engineer III",
        date: "19th October 2024",
        score: "8/10",
      },
    ],
  },
  {
    id: "c018",
    name: "Mohammed Ahmed",
    avatarImg: "",
    interviewsGiven: 4,
    dimensions: {
      Communication: 7,
      "Problem Solving": 9,
      Leadership: 6,
      "Azure Fundamentals": 8,
    },
    status: "Active",
    pastInterviews: [
      {
        role: "Cloud Engineer",
        date: "20th October 2024",
        score: "8/10",
      },
    ],
  },
  {
    id: "c019",
    name: "Julia Santos",
    avatarImg: "",
    interviewsGiven: 6,
    dimensions: {
      Communication: 9,
      "Problem Solving": 7,
      Leadership: 8,
      "Azure Fundamentals": 7,
    },
    status: "Not Active",
    pastInterviews: [
      {
        role: "Product Owner",
        date: "21st October 2024",
        score: "8/10",
      },
    ],
  },
  {
    id: "c020",
    name: "Ryan O'Connor",
    avatarImg: "",
    interviewsGiven: 3,
    dimensions: {
      Communication: 7,
      "Problem Solving": 8,
      Leadership: 7,
      "Azure Fundamentals": 6,
    },
    status: "Active",
    pastInterviews: [
      {
        role: "Security Engineer",
        date: "22nd October 2024",
        score: "7/10",
      },
    ],
  },
  {
    id: "c021",
    name: "Nina Ivanova",
    avatarImg: "",
    interviewsGiven: 5,
    dimensions: {
      Communication: 8,
      "Problem Solving": 8,
      Leadership: 7,
      "Azure Fundamentals": 7,
    },
    status: "Active",
    pastInterviews: [
      {
        role: "ML Engineer",
        date: "23rd October 2024",
        score: "8/10",
      },
    ],
  },
  {
    id: "c022",
    name: "Carlos Mendoza",
    avatarImg: "",
    interviewsGiven: 4,
    dimensions: {
      Communication: 7,
      "Problem Solving": 8,
      Leadership: 6,
      "Azure Fundamentals": 8,
    },
    status: "Not Active",
    pastInterviews: [
      {
        role: "Infrastructure Engineer",
        date: "24th October 2024",
        score: "7/10",
      },
    ],
  },
];

const dimensionsFilter = [
  { id: "comm", label: "Communication" },
  { id: "coding", label: "Coding" },
  { id: "leadership", label: "Leadership" },
];

const companyFilter = [
  { id: "google", label: "Google" },
  { id: "netflix", label: "Netflix" },
  { id: "microsoft", label: "Microsoft" },
];

const TalentpoolPage = () => {
  const router = useRouter();
  const [expandedCandidate, setExpandedCandidate] =
    useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle card click to expand/collapse
  const handleCardClick = (name: string) => {
    setExpandedCandidate((prev) =>
      prev === name ? null : name
    );
  };

  // Filter candidates based on search query
  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mx-auto container">
      <div className="flex flex-col gap-y-8 container mx-auto">
        {/* Page Title */}
        <div className="w-full flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Talentpool Page
          </h1>
          {/* Search Bar */}
          <div className="flex items-center gap-x-2">
            <Input
              type="text"
              placeholder="Search candidates..."
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
              className="w-64"
            />
            <Search className="text-gray-500" />
          </div>
        </div>

        {/* Top Buttons */}
        <div className="flex justify-between items-center border-b pb-2">
          <div className="flex items-center gap-x-4">
            <Button variant="outline">All</Button>
            <Button variant="outline">Active</Button>
            <Button variant="outline">Not Active</Button>
          </div>
          <div className="flex items-center gap-x-4">
            <Button variant="outline">Remove</Button>
            <Button variant="outline">Add to Job</Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full grid grid-cols-3 gap-x-4">
          {/* Left Panel */}
          <div className="w-full flex flex-col gap-y-4 col-span-1">
            {/* Statistics */}
            <div className="bg-white/5 rounded-lg w-full p-6">
              <span className="text-4xl font-bold">45</span>
              <div className="flex flex-col justify-start gap-y-1 mt-3">
                <span className="text-sm">
                  <span className="font-semibold">
                    Total Candidates:
                  </span>{" "}
                  45
                </span>
                <span className="text-sm">
                  <span className="font-semibold">
                    Active Candidates:
                  </span>{" "}
                  40
                </span>
                <span className="text-sm">
                  <span className="font-semibold">
                    Employed / Not looking:
                  </span>{" "}
                  25
                </span>
              </div>
            </div>

            {/* Filter By Existing Dimensions */}
            <div className="bg-white/5 rounded-lg w-full p-6">
              <h4 className="text-lg font-bold">
                Filter By Existing Dimensions
              </h4>
              <div className="flex flex-col gap-y-2 mt-3">
                {dimensionsFilter.map((dimension, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-x-2"
                  >
                    <Checkbox id={dimension.id} />
                    <Label htmlFor={dimension.id}>
                      {dimension.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Filter By Existing Company */}
            <div className="bg-white/5 rounded-lg w-full p-6">
              <h4 className="text-lg font-bold">
                Filter By Existing Company
              </h4>
              <div className="flex flex-col gap-y-2 mt-3">
                {companyFilter.map((company, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-x-2"
                  >
                    <Checkbox id={company.id} />
                    <Label htmlFor={company.id}>
                      {company.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Candidate Cards */}
          <div className="flex flex-col gap-y-4 col-span-2">
            {filteredCandidates.map((candidate, idx) => (
              <div
                key={idx}
                className={`bg-white/5 px-5 py-3 flex flex-col border rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:border-blue-500`}
                onClick={() =>
                  handleCardClick(candidate.name)
                }
              >
                {/* Candidate Info */}
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-x-4">
                    <div className="flex items-center">
                      <Checkbox />
                    </div>
                    <div className="flex items-center gap-x-4">
                      <Avatar>
                        <AvatarImage
                          src={candidate.avatarImg}
                        />
                        <AvatarFallback>
                          {candidate.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col justify-center items-start gap-y-1">
                        <div className="text-lg font-bold">
                          {candidate.name}
                        </div>
                        <div className="flex text-gray-500 text-sm gap-x-2">
                          <div>Candidate ID</div>
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <div>{candidate.status}</div>
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <div>Other Info</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Candidate Actions */}
                  <div className="flex flex-col items-end justify-between gap-y-2">
                    <div className="flex gap-x-3 items-center">
                      <Select>
                        <SelectTrigger className="px-2 border p-1 h-7 text-xs">
                          <SelectValue
                            placeholder={candidate.status}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>
                              Candidate Status
                            </SelectLabel>
                            <SelectItem value="active">
                              Active
                            </SelectItem>
                            <SelectItem value="not-active">
                              Not Active
                            </SelectItem>
                            <SelectItem value="employed">
                              Employed
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      {candidate.interviewsGiven && (
                        <div className="text-xs whitespace-nowrap">
                          {candidate.interviewsGiven}{" "}
                          Interviews Given
                        </div>
                      )}
                      <EllipsisVertical className="h-5 w-5" />
                    </div>
                    <div className="px-3 border bg-white/5 py-1 flex gap-x-2 rounded-lg">
                      <div className="text-white/50 hover:text-white/75 cursor-pointer">
                        <Plus className="h-4 w-4" />
                      </div>
                      <div className="text-white/50 hover:text-white/75 cursor-pointer border-l border-white/20 pl-2">
                        <Trash2 className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dimensional Scores (Always Left-aligned) */}
                <div className="flex flex-wrap mt-4 text-gray-300 text-base gap-2">
                  {Object.entries(candidate.dimensions).map(
                    ([dimension, score], idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-white/50 border text-black px-2 rounded-lg"
                      >
                        {dimension}: {score}
                      </span>
                    )
                  )}
                </div>

                {/* Expanded Content */}
                {expandedCandidate === candidate.name && (
                  <div className="mt-4">
                    {/* Past Interviews */}
                    <div className="mt-4">
                      <h4 className="font-bold">
                        Past Interviews:
                      </h4>
                      <div className="flex flex-col gap-y-2 mt-2">
                        {candidate.pastInterviews.map(
                          (interview, idx) => (
                            <div
                              key={idx}
                              className="flex justify-between items-center bg-white/5 p-3 rounded-lg"
                            >
                              <div>
                                {interview.role} (
                                {interview.date})
                              </div>
                              <div className="flex items-center gap-x-2">
                                <div>{interview.score}</div>
                                <Button
                                  variant="outline"
                                  className="px-2 py-1 text-xs"
                                >
                                  View Report
                                </Button>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentpoolPage;
