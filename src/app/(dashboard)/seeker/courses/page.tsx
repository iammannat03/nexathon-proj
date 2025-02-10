"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  image: string;
  badges: string[];
}

const CoursesPage = () => {
  const courses: Course[] = [
    {
      id: 1,
      title:
        "iOS & Swift - The Complete iOS App Development Bootcamp",
      instructor: "Dr. Angela Yu",
      rating: 4.6,
      reviews: 93388,
      price: 769,
      originalPrice: 4999,
      image:
        "https://img-c.udemycdn.com/course/750x422/1565838_e54e_18.jpg",
      badges: ["Premium", "Bestseller"],
    },
    {
      id: 2,
      title: "The Complete Web Development Bootcamp",
      instructor: "Dr. Angela Yu",
      rating: 4.7,
      reviews: 156742,
      price: 649,
      originalPrice: 3999,
      image:
        "https://img-c.udemycdn.com/course/750x422/1565838_e54e_18.jpg",
      badges: ["Bestseller"],
    },
    {
      id: 3,
      title: "Machine Learning A-Z: Hands-On Python & R",
      instructor: "Kirill Eremenko",
      rating: 4.5,
      reviews: 125663,
      price: 849,
      originalPrice: 4499,
      image:
        "https://img-c.udemycdn.com/course/750x422/1565838_e54e_18.jpg",
      badges: ["Premium"],
    },
    {
      id: 4,
      title: "React - The Complete Guide 2024",
      instructor: "Maximilian Schwarzmüller",
      rating: 4.8,
      reviews: 168932,
      price: 699,
      originalPrice: 3999,
      image:
        "https://img-c.udemycdn.com/course/750x422/1565838_e54e_18.jpg",
      badges: ["Premium", "Bestseller", "New"],
    },
    {
      id: 5,
      title: "The Complete JavaScript Course 2024",
      instructor: "Jonas Schmedtmann",
      rating: 4.7,
      reviews: 145221,
      price: 549,
      originalPrice: 3499,
      image:
        "https://img-c.udemycdn.com/course/750x422/1565838_e54e_18.jpg",
      badges: ["Bestseller"],
    },
  ];

  const scrollLeft = (containerId: string) => {
    const container = document.getElementById(containerId);
    if (container) {
      container.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = (containerId: string) => {
    const container = document.getElementById(containerId);
    if (container) {
      container.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const recentlyViewedCourse =
    "React - The Complete Guide 2024";

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">
        What to learn next
      </h1>

      <div className="flex flex-col gap-y-8">
        <section className="relative">
          <h2 className="text-xl font-semibold mb-4">
            Recommended for you
          </h2>
          <button
            onClick={() =>
              scrollLeft("recommended-courses")
            }
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div
            id="recommended-courses"
            className="flex overflow-x-auto gap-4 scroll-smooth hide-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {courses.map((course) => (
              <Link
                href={`/seeker/courses/${course.id}`}
                key={course.id}
              >
                <div className="flex-none w-[300px] border rounded-lg overflow-hidden">
                  <div className="relative h-40">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {course.instructor}
                    </p>
                    <div className="flex items-center mt-1">
                      <span className="font-bold">
                        {course.rating}
                      </span>
                      <div className="flex text-yellow-400 ml-1">
                        {/* Add star rating icons here */}
                      </div>
                      <span className="text-sm text-gray-600">
                        ({course.reviews.toLocaleString()})
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="font-bold">
                        ₹{course.price}
                      </span>
                      <span className="line-through text-gray-600 ml-2">
                        ₹{course.originalPrice}
                      </span>
                    </div>
                    <div className="flex gap-2 mt-2">
                      {course.badges.map((badge) => (
                        <span
                          key={badge}
                          className={`text-xs px-2 py-1 rounded ${
                            badge === "Premium"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-teal-100 text-teal-800"
                          }`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <button
            onClick={() =>
              scrollRight("recommended-courses")
            }
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </section>
        <section className="relative">
          <h2 className="text-xl font-semibold mb-4">
            Because you viewed{" "}
            <span className="text-amber-700">
              {recentlyViewedCourse}
            </span>
          </h2>
          <button
            onClick={() => scrollLeft("viewed-courses")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div
            id="viewed-courses"
            className="flex overflow-x-auto gap-4 scroll-smooth hide-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {courses.map((course) => (
              <Link
                href={`/seeker/courses/${course.id}`}
                key={course.id}
              >
                <div className="flex-none w-[300px] border rounded-lg overflow-hidden">
                  <div className="relative h-40">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {course.instructor}
                    </p>
                    <div className="flex items-center mt-1">
                      <span className="font-bold">
                        {course.rating}
                      </span>
                      <div className="flex text-yellow-400 ml-1">
                        {/* Add star rating icons here */}
                      </div>
                      <span className="text-sm text-gray-600">
                        ({course.reviews.toLocaleString()})
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="font-bold">
                        ₹{course.price}
                      </span>
                      <span className="line-through text-gray-600 ml-2">
                        ₹{course.originalPrice}
                      </span>
                    </div>
                    <div className="flex gap-2 mt-2">
                      {course.badges.map((badge) => (
                        <span
                          key={badge}
                          className={`text-xs px-2 py-1 rounded ${
                            badge === "Premium"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-teal-100 text-teal-800"
                          }`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <button
            onClick={() => scrollRight("viewed-courses")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </section>
      </div>
    </div>
  );
};

export default CoursesPage;
