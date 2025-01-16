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
    "Student Management": [
      {
        question: "How do I enroll a new student?",
        answer:
          'To enroll a new student, navigate to the "Student Management" section and click on "New Admission." Fill in all required fields including personal details, parent/guardian information, and previous academic records. Upload necessary documents (birth certificate, transfer certificate, etc.) and submit the form. The system will generate a unique student ID upon successful enrollment.',
      },
      {
        question: "How can I view a student's attendance record?",
        answer:
          'Access the "Attendance" module and enter the student\'s ID or name. You can view daily, monthly, or term-wise attendance records. The system also displays attendance percentage and flags students with attendance below the required threshold.',
      },
      {
        question: "How do I generate a student progress report?",
        answer:
          'Go to "Academic Records" → "Progress Reports." Select the student, class, and term/semester. The system will compile all academic data including grades, attendance, and teacher comments into a comprehensive report that can be exported as PDF.',
      },
    ],
    "Fee Management": [
      {
        question: "How do I generate fee invoices?",
        answer:
          'Navigate to "Fee Management" → "Generate Invoice." Select the class/grade level and fee structure. You can generate invoices for individual students or bulk generate for an entire class. The system automatically applies any applicable discounts or scholarships.',
      },
      {
        question: "What payment methods are accepted?",
        answer:
          "The system supports multiple payment methods including online payment through integrated payment gateway, bank transfer, cash payment at school, and cheque deposit. All payments are automatically recorded and receipts are generated instantly.",
      },
      {
        question: "How can parents view fee dues?",
        answer:
          'Parents can log into their portal using their credentials and access the "Fee Details" section. They can view current dues, payment history, and download fee receipts. The system sends automatic reminders for pending payments.',
      },
    ],
    "Teacher Portal": [
      {
        question: "How do teachers mark attendance?",
        answer:
          "Teachers can access the attendance module from their dashboard, select their class/subject, and mark attendance using the simple present/absent toggle. The system also allows backdated attendance marking with proper authorization.",
      },
      {
        question: "How do teachers upload marks/grades?",
        answer:
          'In the "Academics" section, teachers can select their subject and class, then input marks either individually or through bulk upload using the provided Excel template. The system automatically calculates grades based on the defined grading policy.',
      },
      {
        question: "Can teachers communicate with parents through the system?",
        answer:
          'Yes, teachers can send individual messages or broadcast announcements to parents through the "Communication" module. They can also schedule parent-teacher meetings and share student-specific notes.',
      },
    ],
    "Parent Portal": [
      {
        question: "How do parents access their child's academic progress?",
        answer:
          "Parents can log in to their dedicated portal using their credentials. The dashboard displays comprehensive information including current academic performance, attendance records, upcoming assignments and tests, teacher feedback and comments, and fee payment status.",
      },
      {
        question: "How can parents apply for leave for their child?",
        answer:
          'Parents can submit leave applications through "Leave Management" by specifying the dates and reason. The class teacher will be notified automatically and can approve/reject the request through the system.',
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
          "For technical issues, contact our support team via email at support@schoolsystem.edu. Help Desk is available 8 AM - 5 PM (Monday-Friday), with emergency support available for critical system issues.",
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
          School Management System FAQ
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
