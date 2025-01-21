import Image from "next/image";
import React from "react";
import dashboard from "@/assets/images/dashboard.png";
import { Button } from "../ui/button";

const DashboardPreviewSection = () => {
  return (
    <div className="bg-sky-50 px-4 sm:px-6 lg:px-8 py-16 pt-40 pb-40">
      <h1 className="text-5xl font-bold text-sky-950 mb-20 text-center">
        Powerful Analytics Dashboard for Smart Decision Making
      </h1>
      <div className="grid lg:grid-cols-3 gap-12 items-center max-w-7xl m-auto">
        {/* Dashboard Image */}
        <div className="order-1 lg:order-1 col-span-2">
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={dashboard}
              alt="Dashboard Preview"
              width={2016}
              height={1210}
              className="w-full rounded-lg"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent pointer-events-none" />
          </div>
        </div>
        {/* Text Content */}
        <div className="order-2 lg:order-2  col-span-1">
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              Get a comprehensive view of your entire school&#39;s performance
              at a glance. Our intuitive dashboard provides real-time insights
              into student progress, financial health, and administrative
              efficiency.
            </p>
            <div className="pt-4">
              <ul className="space-y-3">
                {[
                  "Real-time data visualization",
                  "Customizable reporting",
                  "Performance tracking",
                  "Financial insights",
                  "Attendance monitoring",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-blue-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <Button>
              Schedule a Demo
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreviewSection;
