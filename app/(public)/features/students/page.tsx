"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import transform from "@/assets/images/public-site/transform.jpg";
import Link from "next/link";

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

interface StatItem {
  number: string;
  label: string;
}

const features: FeatureCard[] = [
  {
    icon: "📝",
    title: "Smart Enrollment",
    description:
      "Streamline the admission process with our digital enrollment system. Handle applications, documentation, and student records efficiently.",
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    description:
      "Monitor academic performance, attendance, and behavioral metrics in real-time. Generate detailed reports and insights.",
  },
  {
    icon: "💰",
    title: "Fee Management",
    description:
      "Manage tuition fees, generate invoices, and track payments seamlessly. Support multiple payment methods and automated reminders.",
  },
  {
    icon: "📱",
    title: "Parent Portal",
    description:
      "Keep parents informed with real-time updates about their child's progress, attendance, and school activities.",
  },
  {
    icon: "📅",
    title: "Schedule Management",
    description:
      "Create and manage class schedules, exam timetables, and extra-curricular activities effortlessly.",
  },
  {
    icon: "📈",
    title: "Analytics Dashboard",
    description:
      "Get valuable insights with advanced analytics and reporting tools. Make data-driven decisions for better outcomes.",
  },
];

const stats: StatItem[] = [
  { number: "2000+", label: "Students Managed" },
  { number: "50+", label: "Institutions" },
  { number: "100%", label: "Uptime" },
  { number: "24/7", label: "Support" },
];

const StudentManagement = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* New Hero Image Section */}
      <section className="relative h-[600px] w-full">
        <Image
          src={transform}
          alt="Students using digital platform"
          className="w-full h-full object-cover"
        ></Image>
        <div className="absolute inset-0 bg-sky-900/30 flex items-center justify-center">
          <div className="text-white text-center max-w-4xl px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Educational Institution
            </h2>
            <p className="text-xl md:text-2xl">
              Empower your administration, teachers, and students with
              cutting-edge management tools
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-2">
            Comprehensive Features
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Everything you need to manage your educational institution
            effectively
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-50 text-sky-950 py-16">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Student Management?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of educational institutions already using our
            platform
          </p>
          <Button asChild>
            <Link href={"/contact-us"}>Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default StudentManagement;
