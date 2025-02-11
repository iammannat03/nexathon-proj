// import React from "react";
// import Search from "./Search";
// import { Button } from "../ui/button";
// import { UserIcon } from "lucide-react";

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu";

// type Props = {};

// const Navbar = (props: Props) => {
//   return (
//     <nav className="flex justify-between items-center p-4 px-12">
//       <div className="flex justify-between items-center gap-4 w-[600px]">
//         <div className="text-2xl font-bold">Higher.AI</div>
//         <div>
//           <Search />
//         </div>
//       </div>
//       <div className="flex justify-between items-center gap-4">
//         <Button className="bg-white hover:bg-gray-100 ring-1 ring-gray-200 text-black rounded-lg ">
//           Explore Courses
//         </Button>
//         <Button className="bg-white hover:bg-gray-100 ring-1 ring-gray-200 text-black rounded-lg ">
//           Explore Jobs
//         </Button>
//         <NavigationMenu>
//           <NavigationMenuList>
//             <NavigationMenuItem>
//               <NavigationMenuTrigger>
//                 Item One
//               </NavigationMenuTrigger>
//               <NavigationMenuContent>
//                 <NavigationMenuLink>
//                   Link
//                 </NavigationMenuLink>
//               </NavigationMenuContent>
//             </NavigationMenuItem>
//           </NavigationMenuList>
//         </NavigationMenu>
//         <Button className="bg-white hover:bg-gray-100 ring-1 ring-gray-200 text-black rounded-lg ">
//           <UserIcon />
//         </Button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Search from "./Search";
import { UserIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
const components: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Software Engineering",
    href: "/jobs/software-engineering",
    description: "",
  },
  {
    title: "Data Science",
    href: "/jobs/data-science",
    description: "",
  },
  {
    title: "DevOps",
    href: "/jobs/devops",
    description: "",
  },
  {
    title: "Product Management",
    href: "/jobs/product-management",
    description: "",
  },
  {
    title: "UI/UX Design",
    href: "/jobs/ui-ux-design",
    description: "",
  },
  {
    title: "Cloud Architecture",
    href: "/jobs/cloud-architecture",
    description: "",
  },
  {
    title: "Cybersecurity",
    href: "/jobs/cybersecurity",
    description: "",
  },
  {
    title: "Machine Learning",
    href: "/jobs/machine-learning",
    description: "",
  },
  {
    title: "Data Engineering",
    href: "/jobs/data-engineering",
    description: "",
  },
  {
    title: "Technical Writing",
    href: "/jobs/technical-writing",
    description: "",
  },
];

export function Navbar() {
  const router = useRouter();
  return (
    <nav className="flex items-center p-4 px-12 gap-x-10">
      <div className="flex items-center gap-4 w-[600px] ">
        <div className="text-2xl font-bold">Higher.AI</div>
        <div className="w-full">
          <Search />
        </div>
      </div>
      <div className="flex justify-between items-center gap-4 w-full">
        <NavigationMenu className="">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Explore Courses
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/courses"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Course Catalog
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Explore our comprehensive
                          collection of tech courses
                          designed to advance your career.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem
                    href="/courses/featured"
                    title="Featured Courses"
                  >
                    Top-rated courses chosen by our
                    community and experts.
                  </ListItem>
                  <ListItem
                    href="/courses/new"
                    title="New Releases"
                  >
                    Recently added courses across all
                    technologies.
                  </ListItem>
                  <ListItem
                    href="/learning-paths"
                    title="Learning Paths"
                  >
                    Structured paths to guide your learning
                    journey.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Explore Jobs
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Create Roadmap
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <a
                  className="flex h-full w-96 ml-20 select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/seeker/beginner-roadmap"
                >
                  <div className="mb-2 mt-4 text-lg font-medium">
                    Course Personalized Roadmap
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Create Personalized and detailed
                    roadmaps to get a direction and
                    personalised roadmaps
                  </p>
                </a>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-x-5">
          <Button variant={"default"}>My Learning</Button>
          <Button
            className="bg-white hover:bg-gray-100 ring-1 ring-gray-200 text-black rounded-lg"
            onClick={() => {
              router.push("/seeker/profile");
            }}
          >
            <UserIcon />
          </Button>
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
