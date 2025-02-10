import React from "react";
import Image from "next/image";

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
      image: "/course-images/ios-swift.jpg",
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
      image: "/course-images/web-dev.jpg",
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
      image: "/course-images/ml.jpg",
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
      image: "/course-images/react.jpg",
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
      image: "/course-images/javascript.jpg",
      badges: ["Bestseller"],
    },
    // ... Add more courses as needed
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">
        What to learn next
      </h1>

      <section>
        <h2 className="text-xl font-semibold mb-4">
          Recommended for you
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="border rounded-lg overflow-hidden"
            >
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
          ))}
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
