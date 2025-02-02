"use client";

import { useEffect } from "react";
import {
  Book,
  Laptop,
  Library,
  BookOpen,
  Calendar,
  Users,
  Video,
  // Download,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

import academic from "@/assets/images/public-site/academic.jpg";
import dashboard_ui from "@/assets/images/public-site/Dashboard_UI_in_SchoolScout.jpg";
import attendance_tracking from "@/assets/images/public-site/Attendance_Tracking_with_SchoolScout.jpg";
import invoice_and_billing from "@/assets/images/public-site/Invoice_and_Billing_Management_in_SchoolScout.jpg";
import communication from "@/assets/images/public-site/communication.png";
import child_profile_management from "@/assets/images/public-site/Child_Profile_Management_in_SchoolScout.jpg";
import staff_management from "@/assets/images/public-site/Staff_Manageme_SchoolScout.jpg";
import event_activity_management from "@/assets/images/public-site/event_manager_13.jpg";
import security_compliance from "@/assets/images/public-site/Data_security_26.jpg";
import feedback from "@/assets/images/public-site/Feedback.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features_recommended = [
  {
    title: "Dashboard UI in SchoolScout",
    description:
      " A centralized interface in SchoolScout displaying key metrics like enrolled children, staff, pending payments, and notifications. It includes quick actions for check-in/out, adding children, messaging parents, and generating reports, with role-based access for admins, teachers, and parents.",

    image: dashboard_ui,
  },
  {
    title: "Attendance Tracking with SchoolScout",
    description:
      "Provides QR code or RFID-based check-in/out using badges or the SchoolScout mobile app, along with a manual button-based check-in/out option for quick updates. Features a real-time attendance dashboard in SchoolScout to monitor present, absent, and late arrivals efficiently.",
    image: attendance_tracking,
  },
  {
    title: "Invoice and Billing Management in SchoolScout",
    description:
      "Automates invoice generation in SchoolScout for tuition and extra services, integrates online payments, and manages discounts/late fees. Includes expense and profit tracking for financial oversight.",
    image: invoice_and_billing,
  },
  {
    title: "Daily Reports & Logs for Parents in SchoolScout",
    description:
      "Provides daily updates in SchoolScout on meals, naps, and activities through photos/videos. Includes health/incident reports and a messaging system for direct parent-staff communication.",
    image: communication,
  },
  {
    title: "Child Profile Management in SchoolScout",
    description:
      "Stores personal details, medical records, and classroom assignments in SchoolScout. Tracks allergies, emergency contacts, and developmental needs for personalized care.",
    image: child_profile_management,
  },
  {
    title: "Staff Management in SchoolScout",
    description:
      "Manages staff schedules, payroll, and certifications in SchoolScout. Ensures compliance with background checks and tracks work hours, bonuses, and deductions.",
    image: staff_management,
  },
  {
    title: "Event & Activity Management in SchoolScout",
    description:
      "Maintains an event calendar in SchoolScout for activities, birthdays, and holidays. Sends parent invitations and securely shares photos/videos of events.",
    image: event_activity_management,
  },
  {
    title: "Security & Compliance in SchoolScout",
    description:
      "Integrates CCTV in SchoolScout for live-streaming (optional), tracks visitor access, and includes an emergency alert system to notify parents and staff during critical situations.",
    image: security_compliance,
  },
  {
    title: "Parent Engagement & Feedback in SchoolScout",
    description:
      " Enhances parent involvement through a dedicated feedback system in SchoolScout, allowing parents to share suggestions, rate services, and participate in surveys. Includes a community board for announcements, tips, and discussions to foster collaboration between parents and staff.",
    image: feedback,
  },
];
interface ResourceCard {
  icon: JSX.Element;
  title: string;
  description: string;
  items: string[];
}

const resources: ResourceCard[] = [
  {
    icon: <Book className="w-8 h-8 text-blue-600" />,
    title: "Plan Daily Activities with Ease",
    description:
      "With SchoolScout, caregivers can design and modify schedules for different age groups, ensuring a balanced mix of structured learning, free play, and rest.",
    items: [
      " Playtime Scheduling – Allocate time for indoor and outdoor activities, group games, and social interaction.",
      "Learning Sessions – Organize age-appropriate lessons, storytime, and hands-on activities.",
      " Creative Time – Plan activities like drawing, crafts, and music sessions to boost creativity.",
    ],
  },
  {
    icon: <Laptop className="w-8 h-8 text-blue-600" />,
    title: "Meals & Nap Time Management",
    description:
      "Maintaining a proper eating and resting schedule is crucial for children's well-being. SchoolScout allows caregivers to:",
    items: [
      "Set Meal Times – Schedule breakfast, lunch, and snack breaks, ensuring balanced nutrition.",
      "Track Nap Schedules – Allocate rest time based on age groups and track sleep patterns.",
      "Send Parent Updates – Notify parents about mealtime and nap schedules through the SchoolScout Parent Portal.",
    ],
  },
  {
    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    title: "Historical Archives & Progress Tracking",
    description:
      "SchoolScout provides a historical record of past schedules, allowing administrators to analyze and refine daycare routines.",
    items: [
      " Access Previous Schedules – Review and adjust recurring schedules based on effectiveness.",
      "Track Engagement Levels – Monitor child participation in activities and adjust accordingly.",
      "Generate Reports – Create detailed reports on attendance, meal consumption, and activity participation.",
      "Parent Insights – Share daily activity logs with parents to keep them involved.",
    ],
  },
];

const AcademicManagement = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
        <Image
          src={academic}
          alt="Modern library interior"
          className="w-full h-full object-cover"
        ></Image>
        <div className="absolute inset-0 bg-sky-900/60 flex items-center justify-center">
          <div className="text-white text-center max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Activity Planner Feature – Simplify Your Daycare Scheduling
            </h1>
            <p className="text-xl md:text-2xl">
              Our Activity Planner helps daycare centers seamlessly organize and
              manage daily routines, ensuring a structured and engaging
              environment for children.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center" data-aos="fade-up">
            <Library className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">50,000+</div>
            <div className="text-gray-600">Digital Resources</div>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="100">
            <Video className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">1,000+</div>
            <div className="text-gray-600">Online Classes</div>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">20,000+</div>
            <div className="text-gray-600">Active Students</div>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="300">
            <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">24/7</div>
            <div className="text-gray-600">Resource Access</div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Customizable Daily Schedules in DCMS – Plan, Track, and Optimize
              Daily Routines
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The Customizable Daily Schedules feature in SchoolScout helps
              daycare centers efficiently manage daily routines while ensuring a
              structured, engaging, and developmentally appropriate experience
              for every child.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="mb-4">{resource.icon}</div>
                <h3 className="text-xl font-bold mb-4">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <ul className="space-y-3">
                  {resource.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Materials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our 9 key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features_recommended.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-50 text-sky-700 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Start Managing Smarter Today!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Access SchoolScout&#39;s comprehensive daycare management tools and
            take your childcare operations to the next level. Whether you&#39;re
            an admin, teacher, or parent, our system is designed to simplify
            attendance tracking, billing, communication, and more.
          </p>
          <div className="space-x-4">
            <Button
              asChild
              className="bg-sky-700 text-white px-6 py-3 rounded-lg hover:bg-sky-800"
            >
              <Link href="/contact-us">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicManagement;
