import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar/Navbar";

import { JobProvider } from "@/hooks/useJobsData";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <JobProvider>
        <div className="md:pt-20">{children}</div>
      </JobProvider>
    </div>
  );
}
