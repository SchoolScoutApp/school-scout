"use client";

import { useEffect } from "react";
import {
  MessageSquare,
  Bell,
  Calendar,
  FileText,
  Activity,
  Clock,
  Mail,
  Phone,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

// All Images
import parent_communication from "@/assets/images/public-site/parent-communication.png";
import notice_board from "@/assets/images/public-site/notice-board.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import contact_support from "@/assets/images/contact-us.png";

interface CommunicationFeature {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
}

const communicationFeatures: CommunicationFeature[] = [
  {
    icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
    title: "Direct Messaging",
    description: "Instant communication with teachers and staff",
    features: [
      "Real-time chat with teachers",
      "Group discussions for class parents",
      "Message translation support",
      "File sharing capabilities",
    ],
  },
  {
    icon: <Bell className="w-8 h-8 text-blue-600" />,
    title: "Instant Notifications",
    description: "Stay updated with important announcements",
    features: [
      "Emergency alerts",
      "Attendance notifications",
      "Assignment reminders",
      "Event announcements",
    ],
  },
  {
    icon: <Activity className="w-8 h-8 text-blue-600" />,
    title: "Progress Tracking",
    description: "Monitor your child's academic journey",
    features: [
      "Real-time grade updates",
      "Attendance records",
      "Behavior reports",
      "Achievement highlights",
    ],
  },
];

const ParentCommunication = () => {
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
          src={parent_communication}
          alt="Parent and teacher meeting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-sky-900/60 flex items-center justify-center">
          <div className="text-white text-center max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Seamless Parent-School Communication
            </h1>
            <p className="text-xl md:text-2xl">
              Building stronger connections between parents and educators for
              student success
            </p>
          </div>
        </div>
      </section>

      {/* Communication Dashboard Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-6">
                Stay Connected With Your Child&#39;s Education
              </h2>
              <p className="text-gray-600 mb-6">
                Our communication portal keeps you informed about your
                child&#39;s academic journey, school events, and important
                announcements in real-time.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-3 text-blue-600" />
                  Real-time updates and notifications
                </div>
                <div className="flex items-center text-gray-700">
                  <Mail className="w-5 h-5 mr-3 text-blue-600" />
                  Direct messaging with teachers
                </div>
                <div className="flex items-center text-gray-700">
                  <Calendar className="w-5 h-5 mr-3 text-blue-600" />
                  School calendar and event tracking
                </div>
                <div className="flex items-center text-gray-700">
                  <FileText className="w-5 h-5 mr-3 text-blue-600" />
                  Digital progress reports and records
                </div>
              </div>
            </div>
            <div data-aos="fade-left" className="relative h-[400px]">
              <Image
                src={notice_board}
                alt="Communication dashboard"
                className="rounded-lg shadow-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Communication Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Communication Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communicationFeatures.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gray-50 rounded-lg p-8"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((item, idx) => (
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

      {/* Quick Actions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <button className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <MessageSquare className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Message Teacher</h3>
              <p className="text-gray-600 text-sm">
                Send a message to your child&#39;s teacher
              </p>
            </button>
            <button className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Schedule Meeting</h3>
              <p className="text-gray-600 text-sm">
                Book parent-teacher conferences
              </p>
            </button>
            <button className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <FileText className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">View Reports</h3>
              <p className="text-gray-600 text-sm">
                Access academic reports and records
              </p>
            </button>
            <button className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Activity className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Track Progress</h3>
              <p className="text-gray-600 text-sm">
                Monitor academic performance
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-sky-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
                <p className="text-gray-600 mb-6">
                  Our support team is available to assist you with any questions
                  about the communication portal.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-blue-600" />
                    <span>+91 (860) 557-4447</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-blue-600" />
                    <span>schoolscoutindia@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Button>
                      <Link href="/contact-us">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </div>
              <Image
                src={contact_support}
                alt="Contact support"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="bg-sky-100 text-sky-700 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Connected On The Go</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Download our mobile app to access all communication features from
            your smartphone
          </p>
          <div className="space-x-4">
            <Button>
              <Link href={"/contact-us"}>Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParentCommunication;
