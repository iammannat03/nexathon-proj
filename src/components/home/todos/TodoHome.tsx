"use client";

import { Archive, Calendar, Plus } from "lucide-react";
import React, { useState } from "react";

type Props = {};

const todoList = [
  {
    id: 69,
    title: "Complete project report",
    desc: "Finish the final report for the project and submit it to the manager.",
    dateCreated: "2024-12-01",
  },
  {
    id: 84,
    title: "Team meeting",
    desc: "Attend the weekly team meeting to discuss project updates.",
    dateCreated: "2024-12-02",
  },
  {
    id: 51,
    title: "Code review",
    desc: "Review the code submitted by the junior developers.",
    dateCreated: "2024-12-03",
  },
  {
    id: 57,
    title: "Client call",
    desc: "Call the client to discuss the project requirements.",
    dateCreated: "2024-12-04",
  },
  {
    id: 80,
    title: "Design mockups",
    desc: "Create design mockups for the new feature.",
    dateCreated: "2024-12-05",
  },
  {
    id: 45,
    title: "Update documentation",
    desc: "Update the project documentation with the latest changes.",
    dateCreated: "2024-12-06",
  },
  {
    id: 20,
    title: "Fix bugs",
    desc: "Fix the bugs reported by the QA team.",
    dateCreated: "2024-12-07",
  },
  {
    id: 71,
    title: "Deploy to production",
    desc: "Deploy the latest version of the application to production.",
    dateCreated: "2024-12-08",
  },
  {
    id: 12,
    title: "Write tests",
    desc: "Write unit tests for the new feature.",
    dateCreated: "2024-12-09",
  },
  {
    id: 89,
    title: "Prepare presentation",
    desc: "Prepare the presentation for the upcoming client meeting.",
    dateCreated: "2024-12-10",
  },
];

const TodoHome = (props: Props) => {
  const [todoHover, setTodoHover] = useState(-1);

  const handleHoverTodo = (id: number) => {
    setTodoHover(id);
  };

  const recentTodos = todoList.slice(0, 4);

  return (
    <div className="col-span-1 max-xl:col-span-1 border rounded-lg bg-white/5 flex flex-col shadow-md">
      <div className="flex p-5 justify-between items-center border-b">
        <div className="flex justify-center items-end gap-x-1">
          <span className="flex gap-x-2 justify-center items-center">
            <Calendar className="text-gray-600" />
            <h2 className="text-xl hover:underline cursor-pointer font-bold text-black">
              Todos
            </h2>
          </span>
        </div>
        <div className="h-8 w-8 cursor-pointer flex justify-center items-center rounded-lg border">
          <Plus className="text-gray-600 h-5 w-5" />
        </div>
      </div>
      <div className="flex h-full flex-col justify-between">
        {recentTodos.map((item) => (
          <div
            className="grid grid-cols-6 hover:bg-white/5 border-t flex-1"
            key={item.id.toString()}
            onMouseEnter={() => handleHoverTodo(item.id)}
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
              {/*  */}
              {todoHover === item.id ? (
                <Archive className="text-gray-500 h-5 w-5" />
              ) : (
                <p className="text-sm text-gray-500 px-1 line-clamp-1">
                  {item.dateCreated}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoHome;
