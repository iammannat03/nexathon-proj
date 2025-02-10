import React from "react";
import { Navbar } from "@/components/dashboard/Navbar";
type Props = {
  children: React.ReactNode;
};

const SeekerLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default SeekerLayout;
