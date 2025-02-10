"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  UserIcon,
  BookOpenIcon,
  BuildingIcon,
} from "lucide-react";

const roles = [
  {
    id: "seeker",
    title: "Job Seeker",
    icon: UserIcon,
    description:
      "Find jobs, build your resume, and grow your career",
  },
  {
    id: "tutor",
    title: "Tutor",
    icon: BookOpenIcon,
    description:
      "Share your knowledge and earn by creating courses",
  },
  {
    id: "agency",
    title: "Hiring Agency",
    icon: BuildingIcon,
    description:
      "Find the perfect candidates for your organization",
  },
];

export function RoleSelector({
  onSelect,
}: {
  onSelect: (role: string) => void;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {roles.map((role) => (
        <motion.div
          key={role.id}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Card
            className="cursor-pointer p-6 hover:bg-muted"
            onClick={() => onSelect(role.id)}
          >
            <role.icon className="mb-4 h-8 w-8" />
            <h3 className="mb-2 font-semibold">
              {role.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {role.description}
            </p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
