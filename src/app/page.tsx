"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  account,
  appwriteService,
  AppwriteService,
} from "@/appwrite/service";


import { Client, Models } from "appwrite";
import { useRouter } from "next/navigation";
import Marquee from "react-fast-marquee";
import Image from "next/image";

type Props = {};

const Page = () => {
  const router = useRouter();
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await appwriteService.getCurrentUser();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    void fetchUser();
  }, []);

  const handleLogout = async () => {
    await account
      .deleteSession("current")
      .then(() => router.push("/sign-up"))
      .catch((error) => console.error(error));
    setUser(null);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold">
                  Higher.AI
                </span>
              </Link>
            </div>

            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <Link
                href="/seeker"
                className="text-gray-600 hover:text-gray-900"
              >
                Get Started
              </Link>
              <Link
                href="/agency/dashboard"
                className="text-gray-600 hover:text-gray-900"
              >
                Hiring Agencies
              </Link>
              <Link
                href="/tutor"
                className="text-gray-600 hover:text-gray-900"
              >
                Tutors
              </Link>
              {user ? (
                <Button
                  variant="outline"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                <Button asChild>
                  <Link href="/sign-up">Sign Up</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 px-4 py-[200px] pt-[400px] text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/logo.svg"
            alt="Hero Image"
            width={400}
            height={400}
            className="absolute left-1/2 top-40 -translate-x-1/2"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 text-6xl font-bold"
        >
          Find Your Dream Job Today
        </motion.h1>
        <p className="mb-8 text-xl text-gray-600">
          Connect with top employers and discover
          opportunities that match your skills
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/seeker">Get Started</Link>
          </Button>
          {user ? (
            <Button
              variant="outline"
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Button variant="outline" asChild>
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-4 py-16">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-12 text-center text-4xl font-bold"
        >
          Key Features
        </motion.h2>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3"
        >
          <AnimatedFeatureCard
            title="AI-powered roadmap generation"
            description="AI-powered roadmap generation based on your skills and goals"
            icon="🎯"
          />
          <AnimatedFeatureCard
            title="AI-powered job recommendations"
            description="Get personalized job recommendations based on your skills and goals"
            icon="💼"
          />
          <AnimatedFeatureCard
            title="AI-powered mock interviews"
            description="Practice for your interview with AI-powered mock interviews"
            icon="🎤"
          />
        </motion.div>
      </section>

      {/* Clients Marquee */}
      <section className="bg-gray-50 py-12">
        <h2 className="mb-8 text-center text-2xl font-bold">
          Trusted By Leading Companies
        </h2>
        <Marquee gradient={true} speed={50}>
          <div className="flex items-center gap-12 px-8">
            <span className="text-2xl">Microsoft</span>
            <span className="text-2xl">Adobe</span>
            <span className="text-2xl">Accenture</span>
            <span className="text-2xl">Microsoft</span>
            <span className="text-2xl">Adobe</span>
            <span className="text-2xl">Accenture</span>
          </div>
        </Marquee>
      </section>

      {/* Pricing Section */}
      <section className="bg-white px-4 py-16">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Our Pricing
        </h2>
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <PricingCard
            title="Basic"
            price="Free"
            features={[

              "Resume builder",
              "AI powered personalised roadmap",
              "Access to free resources",
              "ATS optimizer",

              "Job Search",
              "Profile Creation",
              "Basic Applications",

            ]}
          />
          <PricingCard
            title="Pro"
            price="$19.99/month"
            features={[
              "Everything in Free, plus",
              "AI Mock Interviews",
              "Priority Job recommendations",
              "Access to limited courses",
              "Exclusive mentorship sessions",
            ]}
            highlighted={true}
          />
          <PricingCard

            title="Hiring Agency"
            price="Custom (Reach out to us!)"
            features={[
              "Bulk resume screening",
              "AI mock interviews for shortlisting candidates",
              "Exclusive access to talent and more...",

            ]}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-4xl font-bold">
            Get In Touch
          </h2>
          <p className="mb-8 text-gray-600">
            Have questions? We&apos;re here to help!
          </p>
          <Button size="lg" variant="outline">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-4 py-12 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 font-bold">About Us</h3>
            <p className="text-gray-400">
              Connecting talent with opportunities
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-bold">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/jobs">Find Jobs</Link>
              </li>
              <li>
                <Link href="/companies">Companies</Link>
              </li>
              <li>
                <Link href="/resources">Resources</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
};

// Helper Components
interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const AnimatedFeatureCard = ({
  title,
  description,
  icon,
}: FeatureCardProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    className="rounded-lg border p-6 text-center"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <div className="mb-4 text-4xl">{icon}</div>
    <h3 className="mb-2 text-xl font-bold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}
interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

const PricingCard = ({
  title,
  price,
  features,
  highlighted = false,
}: PricingCardProps) => {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className={`rounded-lg border p-6 ${highlighted ? "border-2 border-primary shadow-lg" : ""}`}
    >
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-4 text-3xl font-bold">{price}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <Button
        className="mt-6 w-full"
        variant={highlighted ? "default" : "outline"}
      >
        Get Started
      </Button>
    </motion.div>
  );
};

export default Page;
