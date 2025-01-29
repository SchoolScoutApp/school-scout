"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import student_info from "@/assets/images/student-info.png";
import acadmic from "@/assets/images/acadmic.png";
import communication from "@/assets/images/communication.jpg";
import fees from "@/assets/images/fees.jpg";
import staff from "@/assets/images/staff.jpg";
import analytics from "@/assets/images/analytics.jpg";
import SmallTitle from "../small-title";

interface FeatureCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  index: number;
}

function FeatureCard({
  title,
  description,
  children,
  index,
}: FeatureCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        ease: [0.21, 1.11, 0.81, 0.99],
      }}
      className="overflow-hidden rounded-2xl bg-white p-6 shadow-lg"
    >
      <h3 className="mb-2 text-xl font-semibold text-sky-950">{title}</h3>
      <p className="mb-4 text-base text-sky-900">{description}</p>
      {children}
    </motion.div>
  );
}

export default function FeatureGrid() {
  const features = [
    {
      title: "Daycare Record System",
      description:
        " Centralize child records, admissions, and attendance tracking with digital profiles and automated check-in/check-out workflows.",
      content: (
        <div className="rounded-xl bg-neutral-50 p-4">
          <Image
            src={student_info}
            alt="AI Video Editor interface"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      ),
    },
    {
      title: "KidCare Routine Manager",
      description:
        "Manage daily activities, lesson plans, developmental milestones, and progress tracking for every child in real time.",
      content: (
        <div className="rounded-xl bg-neutral-50 p-4">
          <Image
            src={acadmic}
            alt="AI Video Editor interface"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      ),
    },
    {
      title: "Smart Communication Hub",
      description:
        "Connect parents, staff, and caregivers with instant messaging, daily reports, announcements, and emergency alerts.",
      content: (
        <div className="rounded-xl bg-neutral-50 p-4">
          <Image
            src={communication}
            alt="AI Video Editor interface"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      ),
    },
    {
      title: "Financial Management",
      description:
        "Streamline fee collection, process online payments, generate invoices, and manage billing with automated reminders.",
      content: (
        <div className="rounded-xl bg-neutral-50 p-4">
          <Image
            src={fees}
            alt="AI Video Editor interface"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      ),
    },
    {
      title: "Staff & HR Management",
      description:
        "Handle caregiver records, attendance, payroll, and scheduling with ease.",
      content: (
        <div className="rounded-xl bg-neutral-50 p-4">
          <Image
            src={staff}
            alt="AI Video Editor interface"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      ),
    },
    {
      title: "Analytics & Reporting",
      description:
        "Make data-driven decisions with detailed reports on attendance, child development progress, and financial transactions.",
      content: (
        <div className="rounded-xl bg-neutral-50 p-4">
          <Image
            src={analytics}
            alt="AI Video Editor interface"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      ),
    },
  ];

  return (
    <section
      id="features"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4 py-24"
    >
      <div className="relative flex w-full max-w-7xl flex-col items-center justify-center gap-12">
        <div className="text-center">
          <SmallTitle title="Top Features" />

          <h2 className="mt-6 max-w-4xl text-4xl font-medium tracking-tight text-sky-950 sm:text-5xl lg:text-6xl">
            All In One Day Care Management Platform
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-sky-900">
            Streamline your entire daycare operations with our comprehensive
            suite of integrated modules designed specifically for modern
            childcare centers.
          </p>
        </div>

        <div className="mt-8 grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              index={index}
            >
              {feature.content}
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}
