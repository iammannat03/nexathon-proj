"use client";

import React from "react";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

const CoursePage = ({ params }: Props) => {
  const { id } = params;

  // This would typically come from an API, but for now we'll hardcode it
  const course = {
    id: parseInt(id),
    title:
      "iOS & Swift - The Complete iOS App Development Bootcamp",
    instructor: "Dr. Angela Yu",
    description:
      "From Beginner to iOS App Developer with Just One Course! Fully Updated with a Comprehensive Module Dedicated to SwiftUI!",
    rating: 4.6,
    reviews: 93403,
    students: 399941,
    price: 769,
    originalPrice: 4999,
    image:
      "https://img-c.udemycdn.com/course/750x422/1565838_e54e_18.jpg",
    badges: ["Premium", "Bestseller"],
    lastUpdated: "12/2024",
    language: "English",
    whatYouWillLearn: [
      "You will create a portfolio of 15 apps to be able apply for junior developer jobs at a technology company",
      "You will learn by doing, where every lesson is incorporated into a real-world app project",
      "Start your own app based business",
      "Master creating Augmented Reality apps using Apple's new ARKit",
      "Master app design so you'll know how to wireframe, mockup and prototype your app idea",
      "You will learn Xcode, UIKit and SwiftUI, ARKit, CoreML and CoreData",
      "After the course, you will be able to build any app you want",
      "Become a digital nomad by working as a freelance iOS developer",
      "Create apps that use Machine Learning using Apple's new CoreML",
    ],
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Course Info */}
        <div className="md:col-span-2">
          <nav className="text-sm text-gray-500 mb-4">
            Development &gt; Mobile Development &gt; Swift
          </nav>

          <h1 className="text-3xl font-bold mb-4">
            {course.title}
          </h1>

          <p className="text-lg mb-4">
            {course.description}
          </p>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center">
              <span className="font-bold text-lg">
                {course.rating}
              </span>
              <div className="flex text-yellow-400 ml-1">
                {/* Add star rating icons here */}
                ★★★★½
              </div>
              <span className="text-sm text-gray-600 ml-1">
                ({course.reviews.toLocaleString()} ratings)
              </span>
            </div>
            <span className="text-sm text-gray-600">
              {course.students.toLocaleString()} students
            </span>
          </div>

          <p className="mb-4">
            Created by{" "}
            <span className="text-[#A06565] hover:underline cursor-pointer">
              {course.instructor}
            </span>
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-600 mb-8">
            <span>Last updated {course.lastUpdated}</span>
            <span>{course.language}</span>
          </div>

          <div className="bg-white p-6 rounded-lg border mb-8">
            <h2 className="text-xl font-bold mb-4">
              What you&apos;ll learn
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.whatYouWillLearn.map(
                (item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2"
                  >
                    <span className="text-green-500">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        {/* Right Column - Purchase Card */}
        <div className="md:col-span-1">
          <div className="sticky top-4 bg-white p-6 rounded-lg border">
            <div className="relative h-48 mb-4">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl font-bold">
                ₹{course.price}
              </span>
              <span className="line-through text-gray-600">
                ₹{course.originalPrice}
              </span>
              <span className="text-gray-600">
                {Math.round(
                  (1 -
                    course.price / course.originalPrice) *
                    100,
                )}
                % off
              </span>
            </div>

            <button className="w-full bg-[#A06565] text-white py-3 rounded-lg font-bold mb-4 hover:bg-[#885656]">
              Add to cart
            </button>

            <button className="w-full border border-[#A06565] text-[#A06565] py-3 rounded-lg font-bold mb-4 hover:bg-purple-50">
              Buy now
            </button>

            <div className="text-center text-sm text-gray-600">
              30-Day Money-Back Guarantee
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
