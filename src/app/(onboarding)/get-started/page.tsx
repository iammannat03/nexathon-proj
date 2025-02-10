"use client";

import React from "react";
import { useRouter } from "next/navigation";

type Props = {};

const GetStarted = (props: Props) => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Get Started
        </h1>
        <div className="space-y-4">
          <button
            className="w-full p-4 text-left bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() =>
              router.push("/seeker/apply-for-jobs")
            }
          >
            <div className="font-semibold">
              Apply for Jobs
            </div>
            <p className="text-sm text-gray-500">
              Find and apply to job opportunities
            </p>
          </button>
          <button
            className="w-full p-4 text-left bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => router.push("/seeker/courses")}
          >
            <div className="font-semibold">Upskill</div>
            <p className="text-sm text-gray-500">
              Enhance your skills and knowledge
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
