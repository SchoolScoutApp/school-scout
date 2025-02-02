"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQData {
  [category: string]: FAQItem[];
}

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (categoryIndex: number, itemIndex: number): void => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const faqData: FAQData = {
    General: [
      {
        question: "What is SchoolScout?",
        answer:
          "SchoolScout is a comprehensive daycare management system designed to streamline operations for daycare centers. It includes features like attendance tracking, billing, parent communication, staff management, and more, all in one platform.",
      },
      {
        question: "Who can use SchoolScout?",
        answer: `SchoolScout is designed for:

        Admins: To manage daycare operations.
        
        Teachers: To track attendance and communicate with parents.
        
        Parents: To stay updated on their child’s activities and pay fees.`,
      },
      {
        question: "Is SchoolScout secure?",
        answer:
          "Yes! SchoolScout uses data encryption, role-based access, and compliance with privacy regulations (e.g., GDPR, COPPA) to ensure data security.",
      },

      {
        question: "Is there a mobile app for SchoolScout?",
        answer:
          "Yes! SchoolScout offers mobile apps for iOS and Android, allowing parents and staff to access features on the go.",
      },

      {
        question: "Can I try SchoolScout before purchasing?",
        answer:
          "Yes, we offer a free trial with no credit card required. Sign up on our website to get started.",
      },

      {
        question: "What kind of support does SchoolScout provide?",
        answer:
          "We offer 24/7 support via email, chat, and phone. Our team is always ready to assist with setup, troubleshooting, or any questions.",
      },
    ],
    "Kids Management": [
      {
        question: "How do I add a new child to the system?",
        answer:
          "Admins or teachers can add a new child by entering their personal details, medical records, and classroom assignment in the Child Profile section.",
      },
      {
        question: "Can I track a child’s daily activities?",
        answer:
          "Yes! Teachers log daily activities, meals, naps, and incidents, which parents can view in real-time.",
      },
      {
        question: "How are allergies and medical conditions managed?",
        answer:
          "Each child’s profile includes a section for allergies, medications, and special needs. Teachers and staff are notified to ensure proper care.",
      },

      {
        question: "Can I group children by age or developmental level??",
        answer:
          "Yes, children can be assigned to classrooms or groups based on age, developmental level, or other criteria.",
      },
    ],
    "Fee Management": [
      {
        question: "How are fees calculated in SchoolScout?",
        answer:
          "Fees are auto-calculated based on tuition, extra services (e.g., meals, activities), and any applicable discounts or late fees.",
      },
      {
        question: "Can parents pay fees online?",
        answer:
          "Yes! SchoolScout integrates with online payment gateways like credit/debit cards, UPI, PayPal, and more.",
      },
      {
        question: "How are late fees handled?",
        answer:
          "Late fees are automatically applied to overdue payments based on predefined rules. Admins can adjust or waive late fees if needed.",
      },

      {
        question: "Can I generate fee receipts and invoices?",
        answer: `Teachers can:Track attendance (check-in/out).
                 Log daily activities, meals, and naps.Communicate with parents.
                 View classroom schedules and event calendars.`,
      },
    ],
    "Teacher Portal": [
      {
        question: "What features are available in the Teacher Portal?",
        answer:
          "Teachers can access the attendance module from their dashboard, select their class/subject, and mark attendance using the simple present/absent toggle. The system also allows backdated attendance marking with proper authorization.",
      },
      {
        question: "How do teachers log attendance?",
        answer:
          "Teachers can use QR codes, RFID badges, or manual check-in/out buttons to log attendance in real-time.",
      },
      {
        question: "Can teachers communicate with parents through the system?",
        answer:
          'Yes, teachers can send individual messages or broadcast announcements to parents through the "Communication" module. They can also schedule parent-teacher meetings and share student-specific notes.',
      },
      {
        question: "Can teachers send updates to parents?",
        answer:
          "Yes, teachers can send daily reports, activity logs, and incident reports directly to parents.",
      },

      {
        question: "How do teachers access the portal?",
        answer:
          "Teachers can log in via the web portal or mobile app using their unique credentials.",
      },
    ],
    "Parent Portal": [
      {
        question: " What can parents access in the portal?",
        answer: `Parents can:View their child’s attendance, daily reports, and activity logs.Pay fees and view invoices.Communicate with teachers.Receive event invitations and notifications.`,
      },
      {
        question: "How do parents receive updates about their child?",
        answer:
          "Parents receive real-time updates via the mobile app, email, or SMS.",
      },

      {
        question: "Is the Parent Portal available on mobile?",
        answer:
          "Yes, the SchoolScout mobile app is available for iOS and Android devices.",
      },
    ],
    "System Access": [
      {
        question: "I forgot my password. How do I reset it?",
        answer:
          'Click on "Forgot Password" on the login page. Enter your registered email address to receive a password reset link. For security reasons, the link expires after 24 hours.',
      },
      {
        question: "How do I update my contact information?",
        answer:
          'Log in to your account, go to "Profile Settings," and update your contact details. All changes are logged for security purposes, and relevant stakeholders are notified of critical information changes.',
      },
    ],
    "Technical Support": [
      {
        question: "Who do I contact for technical support?",
        answer:
          "For technical issues, contact our support team via email at schoolscoutindia@gmail.com Help Desk is available 8 AM - 5 PM (Monday-Friday), with emergency support available for critical system issues.",
      },
      {
        question: "Is my data secure in the system?",
        answer:
          "Yes, the system implements multiple security measures including regular automated backups, end-to-end encryption, role-based access control, audit trails for all critical actions, and compliance with data protection regulations.",
      },
      {
        question: "How often is the system updated?",
        answer:
          "The system receives regular updates including monthly security patches (or as needed), quarterly feature updates, and bug fixes as required. Users are notified in advance of any scheduled maintenance or updates.",
      },
    ],
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          Daycare Management System FAQ
        </h1>

        <div className="space-y-6">
          {Object.entries(faqData).map(
            ([category, questions], categoryIndex) => (
              <div key={category} className="mb-6">
                <h2 className="text-xl font-semibold mb-4">{category}</h2>
                <div className="space-y-2">
                  {questions.map((item, itemIndex) => (
                    <div
                      key={`${category}-${itemIndex}`}
                      className="border rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(categoryIndex, itemIndex)}
                        className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <span className="text-left font-medium">
                          {item.question}
                        </span>
                        {openItems[`${categoryIndex}-${itemIndex}`] ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </button>

                      {openItems[`${categoryIndex}-${itemIndex}`] && (
                        <div className="p-4 bg-white border-t">
                          <p className="text-gray-600">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
