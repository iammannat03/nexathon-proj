"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/todo-sheet";
import {
  ListTodo,
  Plus,
  SquareCheckBig,
} from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

type Props = {
  todoList: any;
};

const TodoListSheet = ({ todoList }: Props) => {
  const [todoHover, setTodoHover] = useState(-1);

  const handleHoverTodo = (id: number) => {
    setTodoHover(id);
  };
  return (
    <Sheet>
      <SheetTrigger className="p-2 border rounded-full">
        <ListTodo className="text-black" />
      </SheetTrigger>
      <SheetContent className="sm:max-w-[550px] z-[501]">
        <SheetHeader>
          <SheetTitle className="flex justify-between w-full">
            <div className="w-full flex justify-between">
              <div className="flex gap-x-2 justify-center items-center">
                <ListTodo className="text-gray-500" />
                <span>Todos</span>
              </div>
              <div className="flex gap-x-5 mr-[54px]">
                <span className="bg-blue-800/40 hover:bg-blue-900/40 p-3 rounded-xl border text-blue-500 flex gap-x-1 cursor-pointer">
                  <Plus className="h-5 w-5" />
                  <span className="text-sm">
                    Mark all as read
                  </span>
                </span>
                <span className="my-2 border" />
              </div>
            </div>
          </SheetTitle>
        </SheetHeader>
        <Tabs defaultValue="my-tasks" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="my-tasks">
              My Tasks
            </TabsTrigger>
            <TabsTrigger value="team-tasks">
              Team Tasks
            </TabsTrigger>
            <TabsTrigger value="archived">
              Archived
            </TabsTrigger>
          </TabsList>
          <TabsContent value="my-tasks" className="m-0">
            <ul className="">
              {todoList.map((item: any) => (
                <div
                  className="grid grid-cols-6 hover:bg-white/5 border-t flex-1"
                  key={item.id.toString()}
                  onMouseEnter={() =>
                    handleHoverTodo(item.id)
                  }
                  onMouseLeave={() => handleHoverTodo(-1)}
                >
                  <div className="flex flex-col items-start justify-between p-3 col-span-5">
                    <div className="font-semibold">
                      {item.title}
                    </div>
                    <div className="line-clamp-1 text-sm text-gray-400">
                      {item.desc}
                    </div>
                  </div>
                  <div className="col-span-1 flex justify-center items-center">
                    <p className="text-sm text-gray-500">
                      {item.dateCreated}
                    </p>
                  </div>
                </div>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="team-tasks">
            <div className="flex flex-col justify-center items-center py-10 gap-y-1">
              <SquareCheckBig className="h-20 w-20 text-gray-700" />
              <div className="text-gray-500">
                Nothing to do. All caught up!
              </div>
            </div>
          </TabsContent>
          <TabsContent value="archived">
            <div className="flex flex-col justify-center items-center py-10 gap-y-1">
              <SquareCheckBig className="h-20 w-20 text-gray-700" />
              <div className="text-gray-500">
                Nothing to do. All caught up!
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
};

export default TodoListSheet;
