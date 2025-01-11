import SmallTitle from "../small-title";
import { TestimonialCard } from "./testimonial-card";

import user_priya from "@/assets/images/users/priya.jpg";
import user_rajesh from "@/assets/images/users/rajesh.jpg";
import user_anjali from "@/assets/images/users/anjali.jpg";

const testimonials = [
  {
    content:
      "This system has revolutionized our administrative processes. The automated attendance and fee management features have reduced our workload by 70%, allowing our staff to focus more on teaching and student development.",
    name: "Dr. Priya Sharma",
    role: "Principal",
    avatar: user_priya,
    platform: "twitter" as const,
  },
  {
    content:
      "The parent communication module has transformed how we engage with families. Parents love the real-time updates about their children's progress, and our parent satisfaction scores have increased significantly.",
    name: "Rajesh Kumar",
    role: "Vice Principal",
    avatar: user_rajesh,
    platform: "twitter" as const,
  },
  {
    content:
      "Managing multiple branches was a nightmare before implementing this system. Now, with centralized data and reporting, we can easily monitor performance across all our campuses and make data-driven decisions.",
    name: "Mrs. Anjali Mathur",
    role: "Managing Director",
    avatar: "/placeholder.svg",
    platform: "instagram" as const,
  },
  {
    content:
      "The examination management module has simplified our entire assessment process. From question paper generation to result analysis, everything is streamlined and secure. It's been a game-changer for our academic team.",
    name: "Mr. Thomas Philip",
    role: "Academic Coordinator",
    avatar: user_rajesh,
    platform: "youtube" as const,
  },
  {
    content:
      "As a new school, we needed a system that could grow with us. The scalable nature and comprehensive features have supported our growth from 100 to 1000 students without any operational hiccups.",
    name: "Dr. Fatima Sheikh",
    role: "Founder Principal",
    avatar: user_priya,
    platform: "tiktok" as const,
  },
  {
    content:
      "The transport management system with real-time tracking has given our parents peace of mind. The automatic notifications about bus locations and delays have significantly reduced parents' anxiety about student transportation.",
    name: "Mr. Sunil Verma",
    role: "Administrative Head",
    avatar: user_rajesh,
    platform: "instagram" as const,
  },
  {
    content:
      "The financial management module has streamlined our fee collection process completely. The automated reminders and online payment integration have improved our collection rate by 40% and reduced accounting work significantly.",
    name: "Mrs. Elizabeth George",
    role: "Finance Director",
    avatar: user_anjali,
    platform: "youtube" as const,
  },
];

export default function Testimonials() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4 py-24">
      <div className="relative flex w-full max-w-7xl flex-col items-center justify-center gap-12">
        <div className="text-center">
          <SmallTitle title="Testimonials" />

          <h2 className="mt-6 text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
            Words from our users
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
            Some words from people who love using Lucis.
          </p>
        </div>

        <div className="mt-8 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-8">
            <TestimonialCard {...testimonials[0]} />
            <TestimonialCard {...testimonials[3]} />
          </div>

          <div className="flex flex-col gap-8">
            <TestimonialCard {...testimonials[1]} />
            <TestimonialCard {...testimonials[4]} />
            <TestimonialCard {...testimonials[6]} />
          </div>

          <div className="flex flex-col gap-8">
            <TestimonialCard {...testimonials[2]} />
            <TestimonialCard {...testimonials[5]} />
          </div>
        </div>
      </div>
    </section>
  );
}
