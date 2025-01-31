import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen pt-60 flex justify-center bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-2xl mx-auto p-8 text-center">
        <div className="mb-8 flex justify-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Thank You for Reaching Out!
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-lg text-gray-600 mb-6">
            We appreciate you contacting School Scout. One of our team members
            will get back to you shortly.
          </p>

          <div className="space-y-4 text-gray-500">
            <p>
              During business hours (Mon-Fri, 9AM-5PM), we typically respond
              within 2 days.
            </p>
            <p>
              For urgent matters, please call us directly at{" "}
              <span className="text-sky-600 font-medium">
                <a href="tel:09970958370">+91-9970958370</a> /{" "}
                <a href="tel:07709744476">+91-7709744476</a>
              </span>
            </p>
          </div>
        </div>

        <div className="space-x-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          >
            Return Home
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          >
            Contact Us Again
          </Link>
        </div>
      </div>
    </div>
  );
}
