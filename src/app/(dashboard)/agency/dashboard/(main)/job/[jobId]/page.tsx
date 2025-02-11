"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import {
  ArrowDownWideNarrow,
  Briefcase,
  Building,
  Calendar,
  ChevronLeft,
  Copy,
  FileX2,
  Filter,
  GraduationCap,
  Mail,
  MapPin,
  Pencil,
  Trash2,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { getJobDetails, JobDetails } from "@/services/api";
import { CandidateDetails } from "@/types/candidate";
import { getInitials } from "@/lib/utils";
import { INTERVIEW_STATUS } from "@/lib/enums";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Search from "@/components/common/search";
import { Input } from "@/components/ui/input";

const items1 = [
  {
    id: "best-fit",
    label: "Best Fit",
  },
  {
    id: "good",
    label: "Good",
  },
  {
    id: "not-fit",
    label: "Not Fit",
  },
] as const;
const items2 = [
  {
    id: "comm",
    label: "Communication",
  },
  {
    id: "prob-solve",
    label: "Problem Solving",
  },
  {
    id: "leadership",
    label: "Leadership",
  },
] as const;

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

enum RESPONSE_STATUS {
  IDLE,
  LOADING,
  SUCCESS,
  NOT_JOB_FOUND,
  ERROR,
}

const Page = () => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState<
    string | null
  >(null);
  const [filteredCandidates, setFilteredCandidates] =
    React.useState<CandidateDetails[]>([]);
  const [jobDetails, setJobDetails] =
    React.useState<JobDetails | null>(null);
  const [responseStatus, setResponseStatus] =
    React.useState<RESPONSE_STATUS>(RESPONSE_STATUS.IDLE);

  function filterCandidates(status: string) {
    if (!jobDetails) return;

    if (status === "all") {
      setFilteredCandidates(jobDetails.candidates);
    } else {
      setFilteredCandidates(
        jobDetails.candidates.filter(
          (candidate) => candidate.status === status
        )
      );
    }
  }

  async function fetchJobDetails() {
    try {
      setResponseStatus(RESPONSE_STATUS.LOADING);
      const res = await getJobDetails("123");
      setJobDetails(res.data);
      if (res.data.candidates.length === 0) {
        setResponseStatus(RESPONSE_STATUS.NOT_JOB_FOUND);
        return;
      }
      setFilteredCandidates(res.data.candidates);
      setResponseStatus(RESPONSE_STATUS.SUCCESS);
    } catch (e) {
      setResponseStatus(RESPONSE_STATUS.ERROR);
    }
  }

  useEffect(() => {
    fetchJobDetails();
  }, []);

  if (responseStatus === RESPONSE_STATUS.LOADING) {
    return <div>Loading...</div>;
  }

  if (responseStatus === RESPONSE_STATUS.ERROR) {
    return <div>Error fetching job details</div>;
  }

  const interviewTakenCandidates = (
    filteredCandidates: any
  ) => {
    const interviewTakenCandids = filteredCandidates.filter(
      (candidates: any) =>
        candidates.interviewStatus ===
        INTERVIEW_STATUS.INTERVIEW_TAKEN
    );

    return interviewTakenCandids;
  };
  const shortlistedCandidates = () => {};
  const rejectedCandidates = () => {};

  return (
    <div>
      <div className="py-2 w-full bg-white/5 border px-8">
        <div className="mx-auto container p-1 flex justify-between items-center">
          <div className="border flex gap-x-3 items-center">
            <ChevronLeft
              className="hover:text-white/70 transition-all"
              onClick={() => router.back()}
            />
            <span className="text-2xl font-bold">
              {jobDetails?.jobTitle}
              {/* location */}
            </span>
            <span className="text-gray-400 text-sm">
              ({jobDetails?.jobId})
            </span>
          </div>
          <div className="  flex gap-x-3 items-center px-3 ">
            <div className="flex flex-col justify-center p-5 rounded-lg bg-black border">
              <div className="text-sm w-full text-center text-gray-400">
                Status:
              </div>
              <div className="flex items-center gap-x-2">
                <span className="p-1 h-2 w-2 rounded-full bg-green-500" />
                <span className="text-md font-bold">
                  {jobDetails?.jobStatus}
                </span>
              </div>
            </div>
            <Button
              variant={"default"}
              className="font-bold py-6 px-8"
            >
              Create Interview
            </Button>
            <Button className="bg-blue-600 text-white font-bold hover:bg-blue-700 py-6 px-8">
              View Applications
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Tabs defaultValue="all" className="w-full">
          <div className="pt-1 px-5 my-3 bg-white/5 rounded-lg">
            <TabsList className="w-full flex justify-center">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="interview-taken">
                Interview Taken
              </TabsTrigger>
              <TabsTrigger value="shortlisted">
                Shortlisted
              </TabsTrigger>
              <TabsTrigger value="rejected">
                Rejected
              </TabsTrigger>
              {/* <TabsTrigger value="publish-n-share">
                Publish & Share
              </TabsTrigger>
              <TabsTrigger value="user-access">
                User Access
              </TabsTrigger> */}
            </TabsList>
          </div>
          <div className="w-full p-5 grid grid-cols-3">
            <div className="flex items-center justify-start gap-x-5 col-span-1 w-full pr-6">
              <Search
                placeholder="Search candidates"
                // value={}
                // onChange={}
              />
            </div>
            <div className="flex gap-x-5 col-span-2 justify-between">
              <div className="flex items-center space-x-2 ms-5">
                <Checkbox id="select-all" />
                <label
                  htmlFor="select-all"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Select all
                </label>
              </div>
              <div className="flex gap-x-2 items-center justify-center">
                <div className="group p-2 rounded-lg hover:bg-white/10">
                  <ArrowDownWideNarrow className="h-5 w-5 text-white/70 group-hover:text-white/90" />
                </div>
                <div className="group p-2 rounded-lg hover:bg-white/10">
                  <Filter className="h-5 w-5 text-white/70 group-hover:text-white/90" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 ml-4 my-2 flex flex-col h-fit gap-y-5">
              <div className="bg-white/5 rounded-lg w-full p-6">
                <h4 className="text-lg font-bold">
                  Filter By ___
                </h4>
                <div className="flex flex-col gap-y-2 mt-3">
                  {items1.map((item, idx) => (
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
              <div className="bg-white/5 rounded-lg w-full p-6">
                <h4 className="text-lg font-bold">
                  Filter By Tags
                </h4>
                <div className="flex flex-col gap-y-2 mt-3">
                  {items2.map((item, idx) => (
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

            <div className="col-span-2 flex w-full">
              <div className="w-full">
                <TabsContent
                  value="all"
                  className="flex flex-col gap-y-5 w-full"
                >
                  {filteredCandidates.map((candidate) => (
                    <Label
                      htmlFor={candidate.candidateId}
                      key={candidate.candidateId}
                      className="bg-white/5 px-3 flex items-center justify-start w-full border rounded-lg transition-all duration-300 ease-in-out hover:border-blue-500"
                    >
                      <div className="pe-3 mr-2 h-full flex items-center border-e">
                        <Checkbox
                          id={candidate.candidateId}
                        />
                      </div>
                      <div className="flex gap-x-3 py-3 justify-between w-full">
                        <div className="flex gap-x-3">
                          <div>
                            <Avatar>
                              <AvatarImage
                                src={
                                  candidate.profileImg || ""
                                }
                                alt="avatar"
                                height={25}
                                width={25}
                              />
                              <AvatarFallback>
                                {getInitials(
                                  candidate.candidateName
                                )}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="flex flex-col justify-center items-start gap-y-2">
                            <div className="text-lg font-bold whitespace-nowrap">
                              {candidate.candidateName}
                            </div>
                            {candidate.interviewStatus ===
                              INTERVIEW_STATUS.INTERVIEW_TAKEN && (
                              <div className="flex text-gray-500 text-sm gap-x-2 whitespace-nowrap max-w-60 overflow-visible">
                                {candidate?.interview
                                  ?.evaluation?.dimensions
                                  ?.length > 0 ? (
                                  candidate.interview.evaluation.dimensions.map(
                                    (dim, index) => (
                                      <span
                                        key={index}
                                        className="text-xs bg-white/50 border text-black px-2 rounded-lg"
                                      >
                                        {dim}
                                      </span>
                                    )
                                  )
                                ) : (
                                  <div className="p-2 text-white"></div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                        {candidate.interviewStatus ===
                          INTERVIEW_STATUS.NOT_INVITED && (
                          <div className="h-full w-full rounded-lg flex items-center justify-between text-smButton">
                            <div className="flex-1 flex justify-center items-center">
                              <Button
                                variant={"ghost"}
                                className="text-xs"
                              >
                                Not invited, Click here to
                                invite
                              </Button>
                            </div>
                            <div className="px-3 border bg-white/5 py-1 flex gap-x-2 rounded-lg">
                              <div className="text-white/50 hover:text-white/75">
                                <Dialog>
                                  <DialogTrigger className="text-white/50 hover:text-white/75 cursor-pointer border-r border-white/20 pr-2">
                                    <Calendar className="h-4 w-4 " />
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-md">
                                    <DialogHeader>
                                      <DialogTitle>
                                        Schedule interview
                                      </DialogTitle>
                                      <DialogDescription>
                                        Schedule interview
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex items-center space-x-2 p-5 border border-white"></div>
                                    <DialogFooter className="sm:justify-start">
                                      <Button
                                        type="button"
                                        variant="secondary"
                                      >
                                        Schedule
                                      </Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              </div>
                              <div className="text-white/50 hover:text-white/75 cursor-pointer">
                                <Dialog>
                                  <DialogTrigger className="text-white/50 hover:text-white/75 cursor-pointer">
                                    <Mail className="h-4 w-4" />
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-md">
                                    <DialogHeader>
                                      <DialogTitle>
                                        Send Invite
                                      </DialogTitle>
                                      <DialogDescription>
                                        Send a mail to this
                                        candidate
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex items-center space-x-2 p-5 border border-white"></div>
                                    <DialogFooter className="sm:justify-start">
                                      <Button
                                        type="button"
                                        variant="secondary"
                                      >
                                        Invite
                                      </Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              </div>
                              <div className="text-white/50 hover:text-white/75 cursor-pointer border-l border-white/20 pl-2">
                                <Dialog>
                                  <DialogTrigger className="text-white/50 hover:text-white/75 cursor-pointer">
                                    <Trash2 className="h-4 w-4" />
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-md">
                                    <DialogHeader>
                                      <DialogTitle>
                                        Delete Candidate
                                      </DialogTitle>
                                      <DialogDescription>
                                        Delete Candidate
                                        entry
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex items-center space-x-2 p-5 border border-white"></div>
                                    <DialogFooter className="sm:justify-start">
                                      <Button
                                        type="button"
                                        variant="secondary"
                                      >
                                        Delete
                                      </Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              </div>
                            </div>
                          </div>
                        )}{" "}
                        {candidate.interviewStatus ===
                          INTERVIEW_STATUS.INTERVIEW_NOT_TAKEN && (
                          <div className="h-full w-full rounded-lg flex items-center justify-between text-smButton">
                            <div className="flex-1 flex justify-center items-center">
                              <Button
                                variant={"ghost"}
                                className="text-xs"
                              >
                                Interview Not Taken yet
                              </Button>
                            </div>
                            <div className="px-3 border bg-white/5 py-1 flex gap-x-2 rounded-lg">
                              <div className="text-white/50 hover:text-white/75">
                                <Dialog>
                                  <DialogTrigger className="text-white/50 hover:text-white/75 cursor-pointer border-r border-white/20 pr-2">
                                    <Calendar className="h-4 w-4 " />
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-md">
                                    <DialogHeader>
                                      <DialogTitle>
                                        Schedule interview
                                      </DialogTitle>
                                      <DialogDescription>
                                        Schedule interview
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex items-center space-x-2 p-5 border border-white"></div>
                                    <DialogFooter className="sm:justify-start">
                                      <Button
                                        type="button"
                                        variant="secondary"
                                      >
                                        Schedule
                                      </Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              </div>
                              <div className="text-white/50 hover:text-white/75 cursor-pointer">
                                <Dialog>
                                  <DialogTrigger className="text-white/50 hover:text-white/75 cursor-pointer">
                                    <Mail className="h-4 w-4" />
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-md">
                                    <DialogHeader>
                                      <DialogTitle>
                                        Send Invite
                                      </DialogTitle>
                                      <DialogDescription>
                                        Send a mail to this
                                        candidate
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex items-center space-x-2 p-5 border border-white"></div>
                                    <DialogFooter className="sm:justify-start">
                                      <Button
                                        type="button"
                                        variant="secondary"
                                      >
                                        Invite
                                      </Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              </div>
                              <div className="text-white/50 hover:text-white/75 cursor-pointer border-l border-white/20 pl-2">
                                <Dialog>
                                  <DialogTrigger className="text-white/50 hover:text-white/75 cursor-pointer">
                                    <Trash2 className="h-4 w-4" />
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-md">
                                    <DialogHeader>
                                      <DialogTitle>
                                        Delete Candidate
                                      </DialogTitle>
                                      <DialogDescription>
                                        Delete Candidate
                                        entry
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex items-center space-x-2 p-5 border border-white"></div>
                                    <DialogFooter className="sm:justify-start">
                                      <Button
                                        type="button"
                                        variant="secondary"
                                      >
                                        Delete
                                      </Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              </div>
                            </div>
                          </div>
                        )}
                        {candidate.interviewStatus ===
                          INTERVIEW_STATUS.INTERVIEW_TAKEN && (
                          <div className="flex flex-col items-end justify-between gap-y-2">
                            <div className="flex gap-x-3 items-center">
                              <Select>
                                <SelectTrigger className="px-2 border p-1 h-7 text-xs">
                                  <SelectValue
                                    placeholder={
                                      candidate.status
                                    }
                                    className="border p-0"
                                  />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>
                                      Candidate Status
                                    </SelectLabel>
                                    <SelectItem value="applied">
                                      Applied
                                    </SelectItem>
                                    <SelectItem value="shortlisted">
                                      Shortlisted
                                    </SelectItem>
                                    <SelectItem value="rejected">
                                      Rejected
                                    </SelectItem>
                                    <SelectItem value="hold">
                                      On Hold
                                    </SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                              {candidate.aiRank && (
                                <div className="px-2  text-xs whitespace-nowrap bg-green-600/40 rounded-lg">
                                  {candidate.aiRank}
                                </div>
                              )}
                              {candidate?.interview
                                ?.evaluation?.score && (
                                <div className="text-xs whitespace-nowrap">
                                  {candidate.interview
                                    .evaluation.score || ""}
                                </div>
                              )}
                            </div>
                            <div className="px-3 border bg-white/5 py-1 flex gap-x-2 rounded-lg">
                              <Dialog>
                                <DialogTrigger className="text-white/50 hover:text-white/75 cursor-pointer border-r border-white/20 pr-2">
                                  <Calendar className="h-4 w-4 " />
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-md">
                                  <DialogHeader>
                                    <DialogTitle>
                                      Schedule interview
                                    </DialogTitle>
                                    <DialogDescription>
                                      Schedule interview
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="flex items-center space-x-2 p-5 border border-white"></div>
                                  <DialogFooter className="sm:justify-start">
                                    <Button
                                      type="button"
                                      variant="secondary"
                                    >
                                      Schedule
                                    </Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>

                              <Dialog>
                                <DialogTrigger className="text-white/50 hover:text-white/75 cursor-pointer">
                                  <Mail className="h-4 w-4" />
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-md">
                                  <DialogHeader>
                                    <DialogTitle>
                                      Send Invite
                                    </DialogTitle>
                                    <DialogDescription>
                                      Send a mail to this
                                      candidate
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="flex items-center space-x-2 p-5 border border-white"></div>
                                  <DialogFooter className="sm:justify-start">
                                    <Button
                                      type="button"
                                      variant="secondary"
                                    >
                                      Invite
                                    </Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                              {candidate.interviewStatus ===
                              INTERVIEW_STATUS.INTERVIEW_TAKEN ? (
                                <Link
                                  href="#"
                                  className="text-xs border-l border-white/20 pl-2"
                                >
                                  View Report
                                </Link>
                              ) : (
                                <div className="text-white/50 hover:text-white/75 cursor-pointer border-l border-white/20 pl-2">
                                  <Trash2 className="h-4 w-4" />
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </Label>
                  ))}
                </TabsContent>
                <TabsContent
                  value="interview-taken"
                  className="flex flex-col gap-y-5 w-full"
                >
                  {interviewTakenCandidates(
                    filteredCandidates
                  ).map((candidate: any) => (
                    <Label
                      htmlFor={candidate.candidateId}
                      key={candidate.candidateId}
                      className="bg-white/5 px-3  flex items-center justify-start w-full border rounded-lg transition-all duration-300 ease-in-out hover:border-blue-500"
                    >
                      <div className="pe-3 mr-2 h-full flex items-center border-e">
                        <Checkbox
                          id={candidate.candidateId}
                        />
                      </div>
                      <div className="flex gap-x-3 py-3 justify-between w-full">
                        <div className="flex gap-x-3">
                          <div>
                            <Avatar>
                              <AvatarImage
                                src={
                                  candidate.profileImg || ""
                                }
                                alt="avatar"
                                height={25}
                                width={25}
                              />
                              <AvatarFallback>
                                {getInitials(
                                  candidate.candidateName
                                )}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="flex flex-col justify-center items-start gap-y-2">
                            <div className="text-lg font-bold whitespace-nowrap">
                              {candidate.candidateName}
                            </div>
                            {candidate.interviewStatus ===
                              INTERVIEW_STATUS.INTERVIEW_TAKEN && (
                              <div className="flex text-gray-500 text-sm gap-x-2 whitespace-nowrap max-w-60 overflow-visible">
                                {candidate?.interview
                                  ?.evaluation?.dimensions
                                  ?.length > 0 ? (
                                  candidate.interview.evaluation.dimensions.map(
                                    (
                                      dim: string,
                                      index: string
                                    ) => (
                                      <span
                                        key={index}
                                        className="text-xs bg-white/50 border text-black px-2 rounded-lg"
                                      >
                                        {dim}
                                      </span>
                                    )
                                  )
                                ) : (
                                  <div className="p-2 text-white"></div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                        {candidate.interviewStatus ===
                          INTERVIEW_STATUS.NOT_INVITED && (
                          <div className="h-full w-full rounded-lg flex items-center justify-between text-smButton">
                            <div className="flex-1 flex justify-center items-center">
                              <Button
                                variant={"ghost"}
                                className="text-xs"
                              >
                                Not invited, Click here to
                                invite
                              </Button>
                            </div>
                            <div className="px-3 border bg-white/5 py-1 flex gap-x-2 rounded-lg">
                              <div className="text-white/50 hover:text-white/75">
                                <Dialog>
                                  <DialogTrigger className="text-white/50 hover:text-white/75 cursor-pointer border-r border-white/20 pr-2">
                                    <Calendar className="h-4 w-4 " />
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-md">
                                    <DialogHeader>
                                      <DialogTitle>
                                        Schedule interview
                                      </DialogTitle>
                                      <DialogDescription>
                                        Schedule interview
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex items-center space-x-2 p-5 border border-white"></div>
                                    <DialogFooter className="sm:justify-start">
                                      <Button
                                        type="button"
                                        variant="secondary"
                                      >
                                        Schedule
                                      </Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              </div>
                              <div className="text-white/50 hover:text-white/75 cursor-pointer">
                                <Dialog>
                                  <DialogTrigger className="text-white/50 hover:text-white/75 cursor-pointer">
                                    <Mail className="h-4 w-4" />
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-md">
                                    <DialogHeader>
                                      <DialogTitle>
                                        Send Invite
                                      </DialogTitle>
                                      <DialogDescription>
                                        Send a mail to this
                                        candidate
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex items-center space-x-2 p-5 border border-white"></div>
                                    <DialogFooter className="sm:justify-start">
                                      <Button
                                        type="button"
                                        variant="secondary"
                                      >
                                        Invite
                                      </Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              </div>
                              <div className="text-white/50 hover:text-white/75 cursor-pointer border-l border-white/20 pl-2">
                                <Dialog>
                                  <DialogTrigger className="text-white/50 hover:text-white/75 cursor-pointer">
                                    <Trash2 className="h-4 w-4" />
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-md">
                                    <DialogHeader>
                                      <DialogTitle>
                                        Delete Candidate
                                      </DialogTitle>
                                      <DialogDescription>
                                        Delete Candidate
                                        entry
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex items-center space-x-2 p-5 border border-white"></div>
                                    <DialogFooter className="sm:justify-start">
                                      <Button
                                        type="button"
                                        variant="secondary"
                                      >
                                        Delete
                                      </Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              </div>
                            </div>
                          </div>
                        )}{" "}
                        {candidate.interviewStatus ===
                          INTERVIEW_STATUS.INTERVIEW_NOT_TAKEN && (
                          <div className="h-full w-full rounded-lg flex items-center justify-between text-smButton">
                            <div className="flex-1 flex justify-center items-center">
                              <Button
                                variant={"ghost"}
                                className="text-xs"
                              >
                                Interview Not Taken yet
                              </Button>
                            </div>
                            <div className="px-3 border bg-white/5 py-1 flex gap-x-2 rounded-lg">
                              <div className="text-white/50 hover:text-white/75">
                                <Dialog>
                                  <DialogTrigger className="text-white/50 hover:text-white/75 cursor-pointer border-r border-white/20 pr-2">
                                    <Calendar className="h-4 w-4 " />
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-md">
                                    <DialogHeader>
                                      <DialogTitle>
                                        Schedule interview
                                      </DialogTitle>
                                      <DialogDescription>
                                        Schedule interview
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex items-center space-x-2 p-5 border border-white"></div>
                                    <DialogFooter className="sm:justify-start">
                                      <Button
                                        type="button"
                                        variant="secondary"
                                      >
                                        Schedule
                                      </Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              </div>
                              <div className="text-white/50 hover:text-white/75 cursor-pointer">
                                <Dialog>
                                  <DialogTrigger className="text-white/50 hover:text-white/75 cursor-pointer">
                                    <Mail className="h-4 w-4" />
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-md">
                                    <DialogHeader>
                                      <DialogTitle>
                                        Send Invite
                                      </DialogTitle>
                                      <DialogDescription>
                                        Send a mail to this
                                        candidate
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex items-center space-x-2 p-5 border border-white"></div>
                                    <DialogFooter className="sm:justify-start">
                                      <Button
                                        type="button"
                                        variant="secondary"
                                      >
                                        Invite
                                      </Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              </div>
                              <div className="text-white/50 hover:text-white/75 cursor-pointer border-l border-white/20 pl-2">
                                <Dialog>
                                  <DialogTrigger className="text-white/50 hover:text-white/75 cursor-pointer">
                                    <Trash2 className="h-4 w-4" />
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-md">
                                    <DialogHeader>
                                      <DialogTitle>
                                        Delete Candidate
                                      </DialogTitle>
                                      <DialogDescription>
                                        Delete Candidate
                                        entry
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex items-center space-x-2 p-5 border border-white"></div>
                                    <DialogFooter className="sm:justify-start">
                                      <Button
                                        type="button"
                                        variant="secondary"
                                      >
                                        Delete
                                      </Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              </div>
                            </div>
                          </div>
                        )}
                        {candidate.interviewStatus ===
                          INTERVIEW_STATUS.INTERVIEW_TAKEN && (
                          <div className="flex flex-col items-end justify-between gap-y-2">
                            <div className="flex gap-x-3 items-center">
                              <Select>
                                <SelectTrigger className="px-2 border p-1 h-7 text-xs">
                                  <SelectValue
                                    placeholder={
                                      candidate.status
                                    }
                                    className="border p-0"
                                  />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>
                                      Candidate Status
                                    </SelectLabel>
                                    <SelectItem value="applied">
                                      Applied
                                    </SelectItem>
                                    <SelectItem value="shortlisted">
                                      Shortlisted
                                    </SelectItem>
                                    <SelectItem value="rejected">
                                      Rejected
                                    </SelectItem>
                                    <SelectItem value="hold">
                                      On Hold
                                    </SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                              {candidate.aiRank && (
                                <div className="px-2  text-xs whitespace-nowrap bg-green-600/40 rounded-lg">
                                  {candidate.aiRank}
                                </div>
                              )}
                              {candidate?.interview
                                ?.evaluation?.score && (
                                <div className="text-xs whitespace-nowrap">
                                  {candidate.interview
                                    .evaluation.score || ""}
                                </div>
                              )}
                            </div>
                            <div className="px-3 border bg-white/5 py-1 flex gap-x-2 rounded-lg">
                              <div className="text-white/50 hover:text-white/75 cursor-pointer border-r border-white/20 pr-2">
                                <Calendar className="h-4 w-4 " />
                              </div>
                              <div className="text-white/50 hover:text-white/75 cursor-pointer">
                                <Mail className="h-4 w-4" />
                              </div>
                              {candidate.interviewStatus ===
                              INTERVIEW_STATUS.INTERVIEW_TAKEN ? (
                                <Link
                                  href="#"
                                  className="text-xs border-l border-white/20 pl-2"
                                >
                                  View Report
                                </Link>
                              ) : (
                                <div className="text-white/50 hover:text-white/75 cursor-pointer border-l border-white/20 pl-2">
                                  <Trash2 className="h-4 w-4" />
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </Label>
                  ))}
                </TabsContent>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Page;
