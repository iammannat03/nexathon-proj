import { ReactNode } from "react";
import {
  CalendarCheck,
  ChartColumnBig,
  TrendingUp,
  Zap,
} from "lucide-react";

interface NavLink {
  title: string;
  href: string;
  icon: ReactNode;
}

export const navbarLinks: NavLink[] = [
  {
    title: "Home",
    href: "/agency/dashboard",
    icon: (
      <ChartColumnBig className="text-gray-400 h-5 w-5" />
    ),
  },
  {
    title: "Jobs",
    href: "/agency/dashboard/job",
    icon: (
      <Zap className="fill-gray-400 text-gray-400 h-5 w-5" />
    ),
  },
  {
    title: "Interviews",
    href: "/agency/dashboard/interviews",
    icon: (
      <CalendarCheck className="text-gray-400 h-5 w-5" />
    ),
  },
  {
    title: "Candidates",
    href: "/agency/dashboard/candidates",
    icon: (
      <TrendingUp className="fill-gray-400 text-gray-400 h-5 w-5" />
    ),
  },
];

export const todoList = [
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

export const createJobSlideLinks = ["get-started", "desc"];
