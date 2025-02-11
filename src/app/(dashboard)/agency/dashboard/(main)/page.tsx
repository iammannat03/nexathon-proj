import React from "react";
// import { pdfjs } from "react-pdf";

// // Set the worker source
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.9.179/pdf.worker.min.js`;

import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  BaggageClaim,
  Calendar,
  CalendarCheck,
  ChevronDown,
  Briefcase,
  UserRound,
  X,
} from "lucide-react";
import { FreeTrialRadialChart } from "@/components/common/radial-chart";
import TodoHome from "@/components/home/todos/TodoHome";
import JobSectionHome from "@/components/home/jobs/JobSectionHome";
import { Line } from "recharts";

type Props = {};

const stats = [
  {
    icon: <Briefcase />,
    title: "Total Jobs",
    value: 10,
  },
  {
    icon: <UserRound />,
    title: "Total Applications",
    value: 5,
  },
  {
    icon: <Briefcase />,
    title: "Open Jobs",
    value: 3,
  },
  {
    icon: <UserRound />,
    title: "Talent Pool",
    value: 4,
  },
  {
    icon: <Briefcase />,
    title: "Draft Jobs",
    value: 2,
  },
  {
    icon: <Briefcase />,
    title: "Hired",
    value: 7,
  },
];

const page = (props: Props) => {
  const userName = "Rajeev";
  const date = "Tue, 03 Dec 2024";
  return (
    <div className="flex flex-col items-center w-full mx-auto container p-6">
      <div className="flex flex-col gap-y-8">
        {/* first row */}
        <div className="grid grid-cols-3 max-md:grid-cols-1 max-xl:grid-cols-2 gap-x-8 gap-y-8">
          {/* Profile */}
          <div className="flex flex-col justify-start items-stretch col-span-1 max-xl:col-span-1 bg-gray-100 p-5 rounded-lg border shadow-md">
            <div className="flex items-start justify-between">
              <div className="flex flex-col justify-between items-start gap-y-6">
                <div className="flex flex-col justify-between gap-y-1">
                  <div className="font-semibold">
                    Hi {userName},
                  </div>
                  <div className="font-bold text-2xl">
                    Good Morning!
                  </div>
                </div>
                <div className="text-lg text-gray-600">
                  Here are some stats for you.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2">
              {stats.map((item, idx) => (
                <div
                  className="flex justify-start items-center py-3 gap-2"
                  key={idx.toString()}
                >
                  <div className="bg-black/20 p-3 rounded-full text-black">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg font-bold">
                      {item.value}
                    </div>
                    <div className="font-semibold text-gray-400 line-clamp-1">
                      {item.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Interviews */}
          <div className="col-span-1 border rounded-lg bg-white/5 flex flex-col max-xl:hidden shadow-md">
            <div className="flex p-5 justify-between items-center border-b">
              <div className="flex justify-center items-end gap-x-1">
                <span className="flex gap-x-2 justify-center items-center">
                  <Calendar className="text-gray-600" />
                  <h2 className="text-xl hover:underline cursor-pointer font-bold text-black">
                    Interviews
                  </h2>
                </span>
                <span className="text-gray-700">•</span>
                <span className="flex justify-center items-center text-gray-700 gap-x-1">
                  <span className="hover:underline cursor-pointer line-clamp-1">
                    {date}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </span>
              </div>
              <div className="flex gap-x-3">
                <ArrowLeft className="h-5 w-5" />
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center h-[75%]">
              <div className="flex flex-col justify-center items-center gap-y-1">
                <CalendarCheck className="h-20 w-20 text-gray-700" />
                <div className="text-gray-500">
                  Nothing to do. All caught up!
                </div>
              </div>
            </div>
          </div>
          {/* Todos */}
          <TodoHome />
        </div>
        {/* Jobs Table */}
        <JobSectionHome />
      </div>
    </div>
  );
};

export default page;
