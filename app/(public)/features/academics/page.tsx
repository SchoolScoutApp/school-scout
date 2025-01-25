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
  Search,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

import academic from "@/assets/images/public-site/academic.jpg";
import library from "@/assets/images/public-site/library.jpg";
import class_mgt from "@/assets/images/public-site/class-mgt.jpg";
import assignment_mgt from "@/assets/images/public-site/assignment_mgt.jpg";
import progress_mgt from "@/assets/images/public-site/progress_mgt.png";
import communication from "@/assets/images/public-site/communication.png";
import lab from "@/assets/images/public-site/lab.png";
import teacher from "@/assets/images/public-site/teacher.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features_recommended = [
  {
    title: "Class Management",
    description:
      "Streamlined assignment system with deadline tracking, rubric-based grading, plagiarism detection, and detailed feedback mechanisms.",
    image: class_mgt,
  },
  {
    title: "Assignment Management",
    description:
      "Organized course content with downloadable lecture slides, supplementary readings, multimedia resources, and revision guides accessible across all devices.",
    image: assignment_mgt,
  },
  {
    title: "Student Progress",
    description:
      "Detailed performance analytics with progress tracking, achievement milestones, and personalized learning paths based on individual student needs.",
    image: progress_mgt,
  },
  {
    title: "Communications",
    description:
      "Seamless communication channels with instant notifications, discussion boards, and direct messaging for quick resolution of student queries.",
    image: communication,
  },
  {
    title: "Lab Sessions",
    description:
      "Virtual laboratory environment with interactive simulations, step-by-step experimental guides, and real-time collaboration tools.",
    image: lab,
  },
  {
    title: "Extra Help",
    description:
      "Supplementary learning support through recorded tutorials, one-on-one consultation sessions, and additional practice materials.",
    image: teacher,
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
    title: "Digital Library",
    description: "Access thousands of digital resources anytime, anywhere",
    items: [
      "E-books and journals",
      "Research papers",
      "Academic publications",
      "Historical archives",
    ],
  },
  {
    icon: <Laptop className="w-8 h-8 text-blue-600" />,
    title: "Online Classes",
    description: "Interactive virtual learning environments",
    items: [
      "Live streaming lectures",
      "Recorded sessions",
      "Virtual labs",
      "Interactive workshops",
    ],
  },
  {
    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    title: "Study Materials",
    description: "Comprehensive learning resources for all subjects",
    items: [
      "Course notes",
      "Practice exercises",
      "Past exam papers",
      "Study guides",
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
              Modern Academic Management System
            </h1>
            <p className="text-xl md:text-2xl">
              Empowering education through digital resources, virtual
              classrooms, and comprehensive study materials
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
            <h2 className="text-3xl font-bold mb-4">Academic Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need for successful learning and teaching in one
              place
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

      {/* Library Search Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-6">
                Advanced Library Search
              </h2>
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <input
                    type="text"
                    placeholder="Search for books, journals, articles..."
                    className="flex-1 p-3 rounded-l-lg border-2 border-r-0 border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <button className="bg-sky-600 text-white p-3 rounded-r-lg hover:bg-sky-700">
                    <Search className="w-6 h-6" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <select className="p-2 rounded border border-gray-300">
                    <option>All Categories</option>
                    <option>Books</option>
                    <option>Journals</option>
                    <option>Research Papers</option>
                  </select>
                  <select className="p-2 rounded border border-gray-300">
                    <option>All Departments</option>
                    <option>Science</option>
                    <option>Arts</option>
                    <option>Engineering</option>
                  </select>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" className="relative h-[400px]">
              <Image
                src={library}
                alt="Digital library interface"
                className="w-full h-full object-cover"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      {/* Study Materials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Recommended Features
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
          <h2 className="text-3xl font-bold mb-6">Start Learning Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Access our comprehensive academic resources and take your learning
            experience to the next level
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
