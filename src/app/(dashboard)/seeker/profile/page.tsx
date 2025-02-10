"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProfileFormData {
  firstName: string;
  lastName: string;
  headline: string;
  bio: string;
  language: string;
  website: string;
  twitter: string;
}

const ProfilePage = () => {
  const [formData, setFormData] = useState<ProfileFormData>(
    {
      firstName: "",
      lastName: "",
      headline: "",
      bio: "",
      language: "English (US)",
      website: "",
      twitter: "",
    },
  );

  const handleChange = (
    e: React.ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => window.history.back()}
        className="mb-4 flex items-center text-gray-600 hover:text-gray-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back
      </button>
      <div className="flex gap-8">
        {/* Left Sidebar */}
        <div className="w-64 shrink-0">
          <div className="flex flex-col items-center mb-4">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center text-white text-2xl mb-2">
              {formData.firstName && formData.lastName
                ? `${formData.firstName[0]}${formData.lastName[0]}`
                : "MJ"}
            </div>
            <h2 className="text-lg font-medium">
              {formData.firstName && formData.lastName
                ? `${formData.firstName} ${formData.lastName}`
                : "Mannat Jaiswal"}
            </h2>
          </div>

          <nav className="space-y-1">
            <div className="bg-gray-200 px-4 py-2 rounded">
              Profile
            </div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Photo
            </div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Account Security
            </div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Subscriptions
            </div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Payment methods
            </div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Privacy
            </div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Notification Preferences
            </div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              API clients
            </div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Close account
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">
            Public profile
          </h1>
          <p className="text-gray-600 mb-8">
            Add information about yourself
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">
                Basics:
              </h3>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Mannat"
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Jaiswal"
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="headline"
                    value={formData.headline}
                    onChange={handleChange}
                    placeholder="Headline"
                    maxLength={60}
                    className="w-full p-3 border rounded-lg"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Add a professional headline like,
                    "Instructor at Udemy" or "Architect."
                  </p>
                </div>
                <div>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg min-h-[150px]"
                    placeholder="Write your bio..."
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Links and coupon codes are not permitted
                    in this section.
                  </p>
                </div>
                <div>
                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  >
                    <option value="English (US)">
                      English (US)
                    </option>
                    <option value="English (UK)">
                      English (UK)
                    </option>
                    {/* Add more language options as needed */}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">
                Links:
              </h3>
              <div className="space-y-4">
                <div>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="Website (http(s)://...)"
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div className="flex gap-2">
                  <div className="shrink-0 w-48">
                    <input
                      type="text"
                      value="http://twitter.com/"
                      disabled
                      className="w-full p-3 border rounded-lg bg-gray-50"
                    />
                  </div>
                  <input
                    type="text"
                    name="twitter"
                    value={formData.twitter}
                    onChange={handleChange}
                    placeholder="Twitter Profile"
                    className="flex-1 p-3 border rounded-lg"
                  />
                </div>
                <p className="text-sm text-gray-500">
                  Add your Twitter username (e.g.
                  johnsmith).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
