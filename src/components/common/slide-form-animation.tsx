"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input"; // Adjust if necessary
import { Button } from "@/components/ui/button"; // Adjust if necessary
import { Pencil } from "lucide-react";

const Page = () => {
  const [currentBox, setCurrentBox] = useState(1); // To track which box to show

  const handleNext = () => {
    setCurrentBox(2); // Transition to Box 2
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-900">
      <div
        className={`absolute w-[500px] h-[400px] bg-gray-800 text-white p-8 rounded-xl transition-transform duration-500 ease-in-out ${
          currentBox === 1
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <h2 className="text-xl font-bold mb-4">
          Job Title
        </h2>
        <Input
          type="text"
          placeholder="Enter Job Title"
          className="mb-4 w-full bg-gray-700 text-white border-none p-2 rounded"
        />
        <Button
          onClick={handleNext}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white p-2 rounded"
        >
          Next
        </Button>
      </div>

      <div
        className={`absolute w-[500px] h-[400px] bg-gray-800 text-white p-8 rounded-xl transition-transform duration-500 ease-in-out ${
          currentBox === 2
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <h2 className="text-xl font-bold mb-4">
          Other Details
        </h2>
        <Input
          type="text"
          placeholder="Job Code"
          className="mb-4 w-full bg-gray-700 text-white border-none p-2 rounded"
        />
        <Input
          type="text"
          placeholder="Experience Required"
          className="mb-4 w-full bg-gray-700 text-white border-none p-2 rounded"
        />
        <Input
          type="text"
          placeholder="Employment Type"
          className="mb-4 w-full bg-gray-700 text-white border-none p-2 rounded"
        />
        <Button className="mt-4 w-full bg-green-600 hover:bg-green-500 text-white p-2 rounded">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Page;
