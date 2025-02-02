"use client";

import { useState } from "react";
import { PricingToggle } from "./pricing-toggle";
import { PricingCard } from "./pricing-card";
import SmallTitle from "../small-title";

const plans = [
  {
    title: "Starter",
    price: "Free",
    yearlyPrice: "Free",
    description:
      "Perfect for small kids care center getting started with digital management.",
    priceDescription: "per student/month",
    features: [
      "Up to 50 child accounts",
      "Basic child & staff management",
      "Core attendance tracking (manual check-in/out)",
      "Basic parent communication (messaging)",
      "Standard reports & analytics",
      "Mobile app access for parents and staff",
      "Basic parent portal",
      "Basic parent portal",
      "Email support",
      "Basic fee management",
    ],
  },
  {
    title: "Professional",
    price: 399,
    yearlyPrice: "3999",

    priceDescription: "per student/month",
    description:
      "Ideal for growing kids care center needing comprehensive management tools.",
    features: [
      "Up to 200 child accounts",
      "Advanced child & staff management",
      "Complete attendance tracking (QR code/RFID + manual)",
      "Financial management with payment gateway integration",
      "SMS pack included (500 SMS/month)",
      "Daily activity logs (meals, naps, incidents)",
      "Custom report builder",
      "Priority support 24/5",
      "Advanced parent portal with real-time updates",
      "Event management (calendar, invitations, photo sharing)",
      "Multi-language support",
      "Biometric integration (optional)",
    ],
    highlighted: true,
  },
  {
    title: "Enterprise",
    price: 999,
    yearlyPrice: "9999*",
    priceDescription: "contact for pricing",
    description:
      "Perfect for large kids care center and districts requiring custom solutions.",
    features: [
      "Unlimited child accounts",
      "Multi-branch/location management",
      "Complete feature access",
      "Advanced analytics & AI insights",
      "Custom integrations",
      "White-labeling options",
      "24/7 dedicated support",
      "Employee training program",
      "Data migration assistance",
      "Custom feature development",
      "Unlimited SMS pack",
      "Dedicated account manager",
      "Yearly offline training",
      "Compliance reporting for daycare regulations",
    ],
  },
];
export default function Pricing() {
  const [period, setPeriod] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4 py-24">
      <div className="relative flex w-full max-w-7xl flex-col items-center justify-center gap-12">
        <div className="text-center" id="pricing">
          <SmallTitle title="Pricing Plas" />

          <h2 className="mt-6 text-4xl font-medium tracking-tight text-sky-950 sm:text-5xl">
            Our pricing plans
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
            Choose a plan that&#39;s suitable for your needs.
          </p>
        </div>

        <PricingToggle onPeriodChange={setPeriod} />

        <div className="mt-8 grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              highlighted={plan.highlighted}
              period={period}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
