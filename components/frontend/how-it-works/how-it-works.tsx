"use client";

import { Users, BookOpen, Calendar, Award } from "lucide-react";
import SectionHeader from "./section-header";
import ProcessCard from "./process-card";

const steps = [
  {
    title: "Register & Setup",
    description:
      "Create your school profile, add administrators, teachers, and configure basic settings for your institution.",
    icon: Users,
  },
  {
    title: "Manage Classes",
    description:
      "Organize classes, assign teachers, and create curriculum plans with our intuitive class management system.",
    icon: BookOpen,
  },
  {
    title: "Schedule Activities",
    description:
      "Plan academic calendar, schedule classes, and coordinate school events effortlessly.",
    icon: Calendar,
  },
  {
    title: "Track Progress",
    description:
      "Monitor student performance, generate reports, and measure learning outcomes in real-time.",
    icon: Award,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4 py-24">
      <div className="relative flex w-full max-w-7xl flex-col items-center justify-center gap-16">
        <SectionHeader
          badge="How It Works"
          title="Streamline Your School Management"
          description="Our comprehensive school management system simplifies administrative tasks and enhances educational outcomes in four easy steps."
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
          <h3 className="text-2xl font-semibold text-primary">
            Ready to Transform Your School Management?
          </h3>
          <p className="max-w-2xl text-neutral-600">
            Join thousands of schools already using our platform to streamline
            their operations and improve educational outcomes.
          </p>
          <button className="rounded-full bg-primary px-8 py-3 font-medium text-white transition-colors hover:bg-primary/90">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
