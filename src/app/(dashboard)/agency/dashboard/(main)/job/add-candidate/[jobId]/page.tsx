import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Briefcase,
  Building,
  ChevronLeft,
  FileX2,
  GraduationCap,
  LocateIcon,
  MapPin,
  Pencil,
  SquareCheckBig,
} from "lucide-react";
import React from "react";

type Props = {
  params: Promise<{ jobId: string }>;
};

const page = async ({ params }: Props) => {
  const slug = (await params).jobId;
  const jobTitle = "Software Engineer";
  const jobCode = "AL106";
  const jobStatus = "Open";
  const jobBoards = "Not Applied";
  const jobLocation = "Gurugram";
  const jobType = "Full Time, On-site";
  const jobEligibility = "Entry Level";
  const officeAddress = "Default";
  return (
    <div>
      <div className="py-2 w-full bg-white/5 border px-8">
        <div className="mx-auto container p-1 flex justify-between items-center">
          <div className="border flex gap-x-3 items-center">
            <ChevronLeft className="hover:text-white/70 transition-all" />
            <span className="text-2xl font-bold">
              {jobTitle}
            </span>
            <span className="text-gray-400 text-sm">
              ({jobCode})
            </span>
          </div>
          <div className="border bg-black flex items-center px-3 rounded-lg">
            <div className="flex flex-col justify-center p-5">
              <div className="text-sm w-full text-center text-gray-400">
                Status:
              </div>
              <div className="flex items-center gap-x-2">
                <span className="p-1 h-2 w-2 rounded-full bg-green-500" />
                <span className="text-md font-bold">
                  {jobStatus}
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-5">
              <div className="text-sm w-full text-center text-gray-400">
                Job Boards:
              </div>
              <div className="flex items-center gap-x-2">
                <span className="p-1 h-2 w-2 rounded-full bg-blue-500" />
                <span className="text-md font-bold">
                  {jobBoards}
                </span>
              </div>
            </div>
            <Button className="bg-blue-600 text-white font-bold hover:bg-blue-700 py-6 px-8">
              View Applications
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Tabs defaultValue="job-details" className="w-full">
          <div className="pt-1 px-5 my-3 bg-white/5 rounded-lg">
            <TabsList className="w-full">
              <TabsTrigger value="get-started">
                Get Started
              </TabsTrigger>
              <TabsTrigger value="job-details">
                Job Details
              </TabsTrigger>
              <TabsTrigger value="application-form">
                Create Interview
              </TabsTrigger>
              <TabsTrigger value="hiring-stages">
                Add Candidates
              </TabsTrigger>
              {/* <TabsTrigger value="publish-n-share">
                Publish & Share
              </TabsTrigger>
              <TabsTrigger value="user-access">
                User Access
              </TabsTrigger> */}
            </TabsList>
          </div>

          <div className="grid grid-cols-3">
            <TabsContent
              value="get-started"
              className="col-span-2 bg-white/5 rounded-lg p-5"
            >
              Get Started
            </TabsContent>
            <TabsContent
              value="job-details"
              className="col-span-2 bg-white/5 rounded-lg p-5"
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-x-5 items-center">
                  <span className="font-bold text-2xl">
                    {jobTitle}
                  </span>
                  <span className="bg-white h-1 w-1 rounded-full" />
                  <span>{jobCode}</span>
                </div>
                <div className="p-2 rounded-full bg-blue-600/20">
                  <Pencil className="h-5 w-5 text-blue-400" />
                </div>
              </div>
              <div className="flex gap-x-3 items-center text-sm text-gray-400 mt-3 mb-6">
                <span className="flex gap-x-1">
                  <MapPin className="h-5 w-5" />
                  <span>{jobLocation}</span>
                </span>
                <span className="h-1 w-1 bg-gray-400 rounded-full" />
                <span className="flex gap-x-1">
                  <Briefcase className="h-5 w-5" />
                  <span>{jobType}</span>
                </span>
                <span className="h-1 w-1 bg-gray-400 rounded-full" />

                <span className="flex gap-x-1">
                  <GraduationCap className="h-5 w-5" />
                  <span>{jobEligibility}</span>
                </span>
                <span className="h-1 w-1 bg-gray-400 rounded-full" />

                <span className="flex gap-x-1">
                  <Building className="h-5 w-5" />
                  {officeAddress}
                </span>
              </div>
              <div className="flex flex-col justify-start items-start">
                <h3 className="text-sm font-bold text-gray-400 mb-2 ml-1">
                  Job Description
                </h3>
                <div className="bg-black p-5 w-full rounded-lg">
                  <div className="my-1">
                    <h2 className="text-xl font-bold">
                      Description
                    </h2>
                    <p className="text-base leading-snug text-gray-300">
                      Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Similique temporibus
                      nesciunt aliquam quos aut corrupti
                      possimus soluta quia assumenda
                      laboriosam animi, eius fugit facere
                      eligendi fugiat eveniet iure omnis
                      optio?Lorem ipsum dolor sit amet
                      consectetur adipisicing elit.
                      Similique temporibus nesciunt aliquam
                      quos aut corrupti possimus soluta quia
                      assumenda laboriosam animi, eius fugit
                      facere eligendi fugiat eveniet iure
                      omnis optio?Lorem ipsum dolor sit amet
                      consectetur adipisicing elit.
                      Similique temporibus nesciunt aliquam
                      quos aut corrupti possimus soluta quia
                      assumenda laboriosam animi, eius fugit
                      facere eligendi fugiat eveniet iure
                      omnis optio.
                    </p>
                  </div>
                  <div className="my-1">
                    <h2 className="text-xl font-bold">
                      Description
                    </h2>
                    <p className="text-base leading-snug text-gray-300">
                      Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Similique temporibus
                      nesciunt aliquam quos aut corrupti
                      possimus soluta quia assumenda
                      laboriosam animi, eius fugit facere
                      eligendi fugiat eveniet iure omnis
                      optio?Lorem ipsum dolor sit amet
                      consectetur adipisicing elit.
                      Similique temporibus nesciunt aliquam
                      quos aut corrupti possimus soluta quia
                      assumenda laboriosam animi, eius fugit
                      facere eligendi fugiat eveniet iure
                      omnis optio?Lorem ipsum dolor sit amet
                      consectetur adipisicing elit.
                      Similique temporibus nesciunt aliquam
                      quos aut corrupti possimus soluta quia
                      assumenda laboriosam animi, eius fugit
                      facere eligendi fugiat eveniet iure
                      omnis optio.
                    </p>
                  </div>
                  <div className="my-1">
                    <h2 className="text-xl font-bold">
                      Description
                    </h2>
                    <p className="text-base leading-snug text-gray-300">
                      Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Similique temporibus
                      nesciunt aliquam quos aut corrupti
                      possimus soluta quia assumenda
                      laboriosam animi, eius fugit facere
                      eligendi fugiat eveniet iure omnis
                      optio?Lorem ipsum dolor sit amet
                      consectetur adipisicing elit.
                      Similique temporibus nesciunt aliquam
                      quos aut corrupti possimus soluta quia
                      assumenda laboriosam animi, eius fugit
                      facere eligendi fugiat eveniet iure
                      omnis optio?Lorem ipsum dolor sit amet
                      consectetur adipisicing elit.
                      Similique temporibus nesciunt aliquam
                      quos aut corrupti possimus soluta quia
                      assumenda laboriosam animi, eius fugit
                      facere eligendi fugiat eveniet iure
                      omnis optio.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="application-form"
              className="col-span-2 bg-white/5 rounded-lg p-5"
            >
              application-form
            </TabsContent>
            <TabsContent
              value="hiring-stages"
              className="col-span-2 bg-white/5 rounded-lg p-5"
            >
              hiring-stages
            </TabsContent>
            <TabsContent
              value="publish-n-share"
              className="col-span-2 bg-white/5 rounded-lg p-5"
            >
              publish-n-share
            </TabsContent>
            <TabsContent
              value="user-access"
              className="col-span-2 bg-white/5 rounded-lg p-5"
            >
              user-access
            </TabsContent>
            <div className="cols-span-1 ml-4 my-2 bg-white/5 rounded-lg p-5 flex flex-col h-fit gap-y-5">
              <h1 className="text-xl font-bold">
                Quick Actions
              </h1>
              <div className="flex flex-col gap-y-3">
                <Button className="w-full font-bold bg-blue-600/60 hover:bg-blue-700/60 group py-5">
                  <span className="text-blue-300 group-hover:text-blue-300/80">
                    Next step
                  </span>
                </Button>
                <Button className="w-full flex gap-x-2 bg-red-600/40 hover:bg-red-700/40 group py-5">
                  <FileX2 className="text-red-300 group-hover:text-red-300/80" />
                  <span className="text-red-300 group-hover:text-red-300/80 font-bold">
                    Close this Job
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default page;
