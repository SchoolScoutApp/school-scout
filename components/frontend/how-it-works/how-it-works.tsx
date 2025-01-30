"use client";

import { Users, BookOpen, Calendar, Award } from "lucide-react";
import SectionHeader from "./section-header";
import ProcessCard from "./process-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  {
    title: "Enroll & Organize",
    description:
      "Create your child care center profile, add administrators, staff, caregivers and configure basic settings for your day care.",
    icon: Users,
  },
  {
    title: "Track & Monitor",
    description:
      "Automate attendance, track daily activities, and generate insightful progress reports.",
    icon: BookOpen,
  },
  {
    title: "Engage & Communicate",
    description:
      "Keep parents updated with instant messages, real-time notifications, and daily reports.",
    icon: Calendar,
  },
  {
    title: "Automate & Optimize ",
    description:
      "Streamline billing, payroll, and administrative tasks for maximum efficiency.",
    icon: Award,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4 py-24">
      <div className="relative flex w-full max-w-7xl flex-col items-center justify-center gap-16">
        <SectionHeader
          badge="How It Works"
          title="Streamline Your Daycare Management"
          description="Our comprehensive daycare management system simplifies daily operations, enhances child development, and keeps parents connected—all in just four easy steps!"
        />

        <div className="grid w-full gap-8 lg:grid-cols-4">
          {steps.map((step, index) => (
            <ProcessCard
              key={step.title}
              title={step.title}
              description={step.description}
              icon={step.icon}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-8 rounded-2xl bg-primary/5 p-8 text-center lg:p-12">
          <h3 className="text-2xl font-semibold text-sky-600">
            Ready to Transform Your Daycare Management with School Scout?
          </h3>
          <p className="max-w-2xl text-neutral-600">
            Join Thousands of Childcare Centers Already Using Our Platform!
          </p>
          {/* <button className="rounded-full bg-sky-700 px-8 py-3 font-medium text-white transition-colors hover:bg-primary/90">
            Get Started
          </button> */}
          <Button
            asChild
            className="rounded-full bg-sky-700 px-8 py-3 font-medium text-white transition-colors hover:bg-sky-600"
          >
            <Link href="/contact-us">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
