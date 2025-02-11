"use client";

import { useTheme } from "next-themes";
import React from "react";

const DebugTheme = () => {
  const { theme } = useTheme();

  React.useEffect(() => {
    console.log("Current theme:", theme);
    console.log(
      "Stored theme in localStorage:",
      localStorage.getItem("theme")
    );
  }, [theme]);

  return null;
};

export default DebugTheme;
