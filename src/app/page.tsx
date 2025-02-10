"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  account,
  appwriteService,
  AppwriteService,
} from "@/appwrite/service";
import { Client, Models } from "appwrite";
import { useRouter } from "next/navigation";
type Props = {};

const page = (props: Props) => {
  const router = useRouter();
  const [user, setUser] =
    useState<Models.User<Models.Preferences> | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData =
          await appwriteService.getCurrentUser();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    void fetchUser();
  }, []);
  const handleLogout = async () => {
    await account
      .deleteSession("current")
      .then(() => router.push("/sign-up"))
      .catch((error) => console.error(error));
    setUser(null);
  };
  return (
    <div>
      <span>Landing page</span>
      <span></span>
      <div>
        {/*print the user here*/}
        <span>{user?.email}</span>

        <Button variant="outline" asChild>
          <Link href="/seeker">Get Started</Link>
        </Button>
      </div>
      <div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default page;
