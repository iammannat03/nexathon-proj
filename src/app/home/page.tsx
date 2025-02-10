"use client";

import { appwriteService } from "@/appwrite/service";
import { type Models } from "appwrite";
import { useEffect, useState } from "react";

export default function Page() {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
    null,
  );

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await appwriteService.getCurrentUser();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    void fetchUser();
  }, []);

  return (
    <div>
      <h1>Welcome, {user?.name ?? "Guest"}</h1>
    </div>
  );
}
