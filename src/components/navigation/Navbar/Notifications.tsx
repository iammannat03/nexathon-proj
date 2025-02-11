"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/notifications-sheet";
import { Bell, CheckCheck } from "lucide-react";

type Props = {};

const NotificationsSheet = (props: Props) => {
  return (
    <Sheet>
      <SheetTrigger className="p-2 border rounded-full">
        <Bell className="text-black" />
      </SheetTrigger>
      <SheetContent className="sm:max-w-[550px] z-[501]">
        <SheetHeader>
          <SheetTitle className="flex justify-between w-full">
            <div className="w-full flex justify-between">
              <div className="flex gap-x-2 justify-center items-center">
                <Bell className="text-gray-300" />
                <span>Notifications</span>
              </div>
              <div className="flex gap-x-5 mr-[54px]">
                <span className="bg-blue-800/40 hover:bg-blue-900/40 p-3 rounded-xl border text-blue-500 flex gap-x-1 cursor-pointer">
                  <CheckCheck className="h-5 w-5" />
                  <span className="text-sm">
                    Mark all as read
                  </span>
                </span>
                <span className="my-2 border" />
              </div>
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col justify-center items-center py-10 gap-y-1">
          <Bell className="h-20 w-20 text-gray-800 fill-gray-900" />
          <div className="text-gray-500">
            Nothing to do. All caught up!
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NotificationsSheet;
