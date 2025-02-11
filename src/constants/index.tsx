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

export const candidates = [
  {
    id: "c001",
    name: "Abhinandan Singla",
    dimensions: {
      Communication: 8,
      "Problem Solving": 7,
      Leadership: 4,
      "Azure Fundamentals": 3,
    },
    pastInterviews: [
      { score: 7 },
      { score: 1 },
      { score: 6 },
    ],
  },
  {
    id: "c002",
    name: "Harishankar Kumar",
    dimensions: {
      Communication: 8,
      "Problem Solving": 7,
      Leadership: 4,
      "Azure Fundamentals": 3,
    },
    pastInterviews: [
      { score: 7 },
      { score: 1 },
      { score: 6 },
    ],
  },
  {
    id: "c003",
    name: "Sarah Johnson",
    dimensions: {
      Communication: 9,
      "Problem Solving": 8,
      Leadership: 7,
      "Azure Fundamentals": 6,
    },
    pastInterviews: [{ score: 9 }, { score: 8 }],
  },
  {
    id: "c004",
    name: "Michael Chen",
    dimensions: {
      Communication: 7,
      "Problem Solving": 9,
      Leadership: 6,
      "Azure Fundamentals": 8,
    },
    pastInterviews: [{ score: 8 }, { score: 9 }],
  },
  {
    id: "c005",
    name: "Emma Wilson",
    dimensions: {
      Communication: 8,
      "Problem Solving": 7,
      Leadership: 8,
      "Azure Fundamentals": 5,
    },
    pastInterviews: [{ score: 8 }],
  },
  {
    id: "c006",
    name: "David Rodriguez",
    dimensions: {
      Communication: 6,
      "Problem Solving": 8,
      Leadership: 5,
      "Azure Fundamentals": 7,
    },
    pastInterviews: [{ score: 7 }],
  },
  {
    id: "c007",
    name: "Priya Patel",
    dimensions: {
      Communication: 9,
      "Problem Solving": 8,
      Leadership: 7,
      "Azure Fundamentals": 8,
    },
    pastInterviews: [{ score: 9 }],
  },
  {
    id: "c008",
    name: "James Wilson",
    dimensions: {
      Communication: 7,
      "Problem Solving": 6,
      Leadership: 8,
      "Azure Fundamentals": 5,
    },
    pastInterviews: [{ score: 6 }],
  },
  {
    id: "c009",
    name: "Lisa Zhang",
    dimensions: {
      Communication: 8,
      "Problem Solving": 9,
      Leadership: 6,
      "Azure Fundamentals": 7,
    },
    pastInterviews: [{ score: 8 }],
  },
  {
    id: "c010",
    name: "Alex Thompson",
    dimensions: {
      Communication: 7,
      "Problem Solving": 8,
      Leadership: 7,
      "Azure Fundamentals": 6,
    },
    pastInterviews: [{ score: 7 }],
  },
  {
    id: "c011",
    name: "Maria Garcia",
    dimensions: {
      Communication: 8,
      "Problem Solving": 7,
      Leadership: 8,
      "Azure Fundamentals": 7,
    },
    pastInterviews: [{ score: 8 }],
  },
  {
    id: "c012",
    name: "Thomas Anderson",
    dimensions: {
      Communication: 6,
      "Problem Solving": 9,
      Leadership: 5,
      "Azure Fundamentals": 8,
    },
    pastInterviews: [{ score: 7 }],
  },
  {
    id: "c013",
    name: "Sophie Martin",
    dimensions: {
      Communication: 9,
      "Problem Solving": 7,
      Leadership: 8,
      "Azure Fundamentals": 6,
    },
    pastInterviews: [{ score: 8 }],
  },
  {
    id: "c014",
    name: "Daniel Kim",
    dimensions: {
      Communication: 7,
      "Problem Solving": 8,
      Leadership: 6,
      "Azure Fundamentals": 7,
    },
    pastInterviews: [{ score: 7 }],
  },
  {
    id: "c015",
    name: "Rachel Brown",
    dimensions: {
      Communication: 8,
      "Problem Solving": 7,
      Leadership: 7,
      "Azure Fundamentals": 8,
    },
    pastInterviews: [{ score: 8 }],
  },
  {
    id: "c016",
    name: "Kevin Lee",
    dimensions: {
      Communication: 7,
      "Problem Solving": 8,
      Leadership: 6,
      "Azure Fundamentals": 7,
    },
    pastInterviews: [{ score: 7 }],
  },
  {
    id: "c017",
    name: "Anna Kowalski",
    dimensions: {
      Communication: 8,
      "Problem Solving": 8,
      Leadership: 7,
      "Azure Fundamentals": 6,
    },
    pastInterviews: [{ score: 8 }],
  },
  {
    id: "c018",
    name: "Mohammed Ahmed",
    dimensions: {
      Communication: 7,
      "Problem Solving": 9,
      Leadership: 6,
      "Azure Fundamentals": 8,
    },
    pastInterviews: [{ score: 8 }],
  },
  {
    id: "c019",
    name: "Julia Santos",
    dimensions: {
      Communication: 9,
      "Problem Solving": 7,
      Leadership: 8,
      "Azure Fundamentals": 7,
    },
    pastInterviews: [{ score: 8 }],
  },
  {
    id: "c020",
    name: "Ryan O'Connor",
    dimensions: {
      Communication: 7,
      "Problem Solving": 8,
      Leadership: 7,
      "Azure Fundamentals": 6,
    },
    pastInterviews: [{ score: 7 }],
  },
  {
    id: "c021",
    name: "Nina Ivanova",
    dimensions: {
      Communication: 8,
      "Problem Solving": 8,
      Leadership: 7,
      "Azure Fundamentals": 7,
    },
    pastInterviews: [{ score: 8 }],
  },
  {
    id: "c022",
    name: "Carlos Mendoza",
    dimensions: {
      Communication: 7,
      "Problem Solving": 8,
      Leadership: 6,
      "Azure Fundamentals": 8,
    },
    pastInterviews: [{ score: 7 }],
  },
];

export const createJobSlideLinks = ["get-started", "desc"];
