"use client";
import { useEffect } from "react";
import {
  Users,
  Calendar,
  FileText,
  Clock,
  Award,
  Briefcase,
  Book,
  ChartBar,
  UserPlus,
  Settings,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

// All Images
import education_staff from "@/assets/images/public-site/education_staff.jpg";
import staff_dashboard from "@/assets/images/public-site/staff-dashboard.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ManagementFeature {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
}

const managementFeatures: ManagementFeature[] = [
  {
    icon: <Calendar className="w-8 h-8 text-blue-600" />,
    title: "Schedule Management",
    description: "Efficient scheduling and time management tools",
    features: [
      "Automated timetable generation",
      "Leave management system",
      "Substitute teacher allocation",
      "Work hour tracking",
    ],
  },
  {
    icon: <FileText className="w-8 h-8 text-blue-600" />,
    title: "Document Management",
    description: "Centralized document handling system",
    features: [
      "Digital contract management",
      "Certification tracking",
      "Performance evaluations",
      "Professional development records",
    ],
  },
  {
    icon: <Award className="w-8 h-8 text-blue-600" />,
    title: "Professional Development",
    description: "Career growth and training management",
    features: [
      "Training program tracking",
      "Skill development courses",
      "Workshop management",
      "Certification programs",
    ],
  },
];

const StaffManagement = () => {
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
          src={education_staff}
          alt="Education Staff"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 bg-sky-900/60 flex items-center justify-center">
          <div className="text-white text-center max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Staff Management System
            </h1>
            <p className="text-xl md:text-2xl">
              Streamline your educational workforce management with our
              integrated platform
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center" data-aos="fade-up">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold">500+</div>
            <div className="text-gray-600">Staff Members</div>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="100">
            <Book className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold">50+</div>
            <div className="text-gray-600">Departments</div>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold">100+</div>
            <div className="text-gray-600">Training Programs</div>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="300">
            <ChartBar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </section>

      {/* Staff Dashboard Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-6">
                Streamlined Staff Management
              </h2>
              <p className="text-gray-600 mb-8">
                Our comprehensive platform helps you manage your educational
                staff efficiently, from recruitment to professional development
                and beyond.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <UserPlus className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Recruitment</h3>
                    <p className="text-sm text-gray-600">
                      Streamlined hiring process
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Attendance</h3>
                    <p className="text-sm text-gray-600">
                      Advanced time tracking
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Briefcase className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Payroll</h3>
                    <p className="text-sm text-gray-600">
                      Automated salary management
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Settings className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Performance</h3>
                    <p className="text-sm text-gray-600">Regular evaluations</p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" className="relative h-[400px]">
              <Image
                src={staff_dashboard}
                alt="Staff dashboard interface"
                className="rounded-lg shadow-xl w-full h-full object-fit"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Management Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {managementFeatures.map((feature, index) => (
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

      {/* Process Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Staff Management Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Recruitment",
                description:
                  "Digital application process and candidate tracking",
              },
              {
                step: "2",
                title: "Onboarding",
                description: "Streamlined documentation and training process",
              },
              {
                step: "3",
                title: "Development",
                description: "Continuous professional growth opportunities",
              },
              {
                step: "4",
                title: "Evaluation",
                description: "Regular performance reviews and feedback",
              },
            ].map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white p-6 rounded-lg shadow-lg relative"
              >
                <div className="w-10 h-10 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-100 text-sky-900 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Staff Management?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join leading educational institutions in modernizing their staff
            management processes
          </p>
          <div className="space-x-4">
            <Button>
              <Link href="/contact-us">Request Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StaffManagement;
