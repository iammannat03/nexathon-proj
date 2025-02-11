"use client";
import React from "react";
import { ThemeToggleButton } from "@/components/common/ThemeToggle";

import { Button } from "@/components/ui/button";
import { ChevronDown, Navigation } from "lucide-react";
import TodoListSheet from "./TodoListSheet";
import NotificationsSheet from "./Notifications";
import { navbarLinks, todoList } from "@/constants";
import { useRouter } from "next/navigation";
import DebugTheme from "@/components/common/DebugTheme";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();

  return (
    <div className=" fixed top-0 w-screen bg-white text-white px-5 py-1 flex justify-between items-center border-b z-[500]">
      {/* first box */}
      <div className="py-5 pe-28 flex gap-x-2 max-lg:hidden">
        <div>Logo Image</div>
        <div>Test</div>
      </div>
      {/* second box */}
      <ul className="px-10 py-5 flex gap-x-6 max-sm:hidden">
        {navbarLinks.map((item) => (
          <a href={item.href} key={item.href} className="">
            <li className="text-gray-700 hover:text-black hover:underline ">
              {item.title.toUpperCase()}
            </li>
          </a>
        ))}
      </ul>
      {/* third box */}
      <div className=" py-5 flex gap-x-5 items-center max-xl:hidden">
        <Button
          className="flex gap-x-1"
          onClick={() =>
            router.push(
              "/agency/dashboard/job/create?query=get-started",
            )
          }
        >
          <Navigation />
          <span>Post a Job</span>
          <ChevronDown />
        </Button>

        {/* <Search /> */}
        <TodoListSheet todoList={todoList} />
        <NotificationsSheet />
        {/* <ThemeToggleButton /> */}
      </div>
    </div>
  );
};

export default Navbar;
