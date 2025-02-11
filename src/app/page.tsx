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

const Page = (props: Props) => {
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
    <main className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white border-b shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
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
      <section className="py-[200px] px-4 pt-[400px] text-center bg-gradient-to-b from-white to-gray-100 flex flex-col items-center justify-center">
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
            className="absolute left-1/2 -translate-x-1/2 top-40"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl font-bold mb-6"
        >
          Find Your Dream Job Today
        </motion.h1>
        <p className="text-xl text-gray-600 mb-8">
          Connect with top employers and discover
          opportunities that match your skills
        </p>
        <div className="flex gap-4 justify-center">
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
      <section className="py-16 px-4 bg-white">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl font-bold text-center mb-12"
        >
          Key Features
        </motion.h2>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {/* Replace FeatureCard calls with AnimatedFeatureCard */}
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
      <section className="py-12 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">
          Trusted By Leading Companies
        </h2>
        <Marquee gradient={true} speed={50}>
          {/* Replace with actual company logos */}
          <div className="flex items-center gap-12 px-8">
            <span className="text-2xl">Microsoft</span>
            <span className="text-2xl">Adobe</span>
            <span className="text-2xl">Accenture</span>
            <span className="text-2xl">Microsoft</span>
            <span className="text-2xl">Adobe</span>
            <span className="text-2xl">Accenture</span>
            {/* Add more companies */}
          </div>
        </Marquee>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            title="Basic"
            price="Free"
            features={[
              "Job Search",
              "Profile Creation",
              "Basic Applications",
            ]}
          />
          <PricingCard
            title="Pro"
            price="$9/month"
            features={[
              "Everything in Basic",
              "Priority Applications",
              "Advanced Analytics",
            ]}
            highlighted={true}
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            features={[
              "Custom Solutions",
              "API Access",
              "Dedicated Support",
            ]}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Get In Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Have questions? We're here to help!
          </p>
          <Button size="lg" variant="outline">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              Connecting talent with opportunities
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
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
            <h3 className="font-bold mb-4">Legal</h3>
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
            <h3 className="font-bold mb-4">Connect</h3>
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
    className="p-6 border rounded-lg text-center"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

// Helper Components
interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
}: FeatureCardProps) => (
  <div className="p-6 border rounded-lg text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

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
    <main className="flex min-h-screen flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold">Higher.AI</span>
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
              <Link href="/tutor" className="text-gray-600 hover:text-gray-900">
                Tutors
              </Link>
              {user ? (
                <Button variant="outline" onClick={handleLogout}>
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
        <Image
          src="/logo.svg"
          alt="Hero Image"
          width={400}
          height={400}
          className="absolute top-40"
        />
        <h1 className="mb-6 text-6xl font-bold">Find Your Dream Job Today</h1>
        <p className="mb-8 text-xl text-gray-600">
          Connect with top employers and discover opportunities that match your
          skills
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/seeker">Get Started</Link>
          </Button>
          {user ? (
            <Button variant="outline" onClick={handleLogout}>
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
        <h2 className="mb-12 text-center text-4xl font-bold">Key Features</h2>
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <FeatureCard
            title="Smart Job Matching"
            description="AI-powered job recommendations based on your skills and preferences"
            icon="🎯"
          />
          <FeatureCard
            title="Easy Applications"
            description="Apply to multiple jobs with a single click using your profile"
            icon="📝"
          />
          <FeatureCard
            title="Career Growth"
            description="Access resources and tools to advance your career"
            icon="📈"
          />
        </div>
      </section>

      {/* Clients Marquee */}
      <section className="bg-gray-50 py-12">
        <h2 className="mb-8 text-center text-2xl font-bold">
          Trusted By Leading Companies
        </h2>
        <Marquee gradient={true} speed={50}>
          {/* Replace with actual company logos */}
          <div className="flex items-center gap-12 px-8">
            <span className="text-2xl">Company 1</span>
            <span className="text-2xl">Company 2</span>
            <span className="text-2xl">Company 3</span>
            {/* Add more companies */}
          </div>
        </Marquee>
      </section>

      {/* Pricing Section */}
      <section className="bg-white px-4 py-16">
        <h2 className="mb-12 text-center text-4xl font-bold">Simple Pricing</h2>
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <PricingCard
            title="Basic"
            price="Free"
            features={["Job Search", "Profile Creation", "Basic Applications"]}
          />
          <PricingCard
            title="Pro"
            price="$9/month"
            features={[
              "Everything in Basic",
              "Priority Applications",
              "Advanced Analytics",
            ]}
            highlighted={true}
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            features={["Custom Solutions", "API Access", "Dedicated Support"]}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-4xl font-bold">Get In Touch</h2>
          <p className="mb-8 text-gray-600">
            Have questions? We're here to help!
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

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => (
  <div className="rounded-lg border p-6 text-center">
    <div className="mb-4 text-4xl">{icon}</div>
    <h3 className="mb-2 text-xl font-bold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

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
    <div
      className={`rounded-lg border p-6 ${highlighted ? "border-2 border-primary shadow-lg" : ""}`}
    >
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-4 text-3xl font-bold">{price}</p>
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className={`p-6 border rounded-lg ${highlighted ? "border-2 border-primary shadow-lg" : ""}`}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-3xl font-bold mb-4">{price}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <Button
        className="w-full mt-6"
        variant={highlighted ? "default" : "outline"}
      >
        Get Started
      </Button>
    </div>
    </motion.div>

  );
};

export default Page;
