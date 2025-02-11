import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="h-screen overflow-y-auto w-screen flex justify-center items-center">
      {children}
    </div>
  );
};

export default layout;
