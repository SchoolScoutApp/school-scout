"use client";

import { useState } from "react";
import { PricingToggle } from "./pricing-toggle";
import { PricingCard } from "./pricing-card";
import SmallTitle from "../small-title";

const plans = [
  {
    title: "Starter",
    price: "Free",
    description:
      "Perfect for small schools getting started with digital management.",
    priceDescription: "per student/month",
    features: [
      "Up to 500 student accounts",
      "Basic student & staff management",
      "Core academic tools & gradebook",
      "Basic attendance tracking",
      "Email support",
      "Standard reports & analytics",
      "Mobile app access",
      "Basic parent portal",
      "CBSE/ICSE report cards",
      "Basic fee management",
    ],
  },
  {
    title: "Professional",
    price: "₹399",
    priceDescription: "per student/month",
    description:
      "Ideal for growing schools needing comprehensive management tools.",
    features: [
      "Up to 2000 student accounts",
      "Advanced student & staff management",
      "Complete academic suite",
      "Financial management with payment gateway",
      "SMS pack included (1000 SMS/month)",
      "Transport management",
      "Custom report builder",
      "Priority support 24/5",
      "Advanced parent & student portal",
      "Library management system",
      "Multiple board support (CBSE/ICSE/State)",
      "Biometric integration",
    ],
    highlighted: true,
  },
  {
    title: "Enterprise",
    price: "₹999*",
    priceDescription: "contact for pricing",
    description:
      "Perfect for large schools and districts requiring custom solutions.",
    features: [
      "Unlimited student accounts",
      "Multi-branch management",
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
      "Compliance reporting for all boards",
    ],
  },
];
export default function Pricing() {
  const [period, setPeriod] = useState<"monthly" | "yearly">("monthly");

  return (
    <section
      id="pricing"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4 py-24"
    >
      <div className="relative flex w-full max-w-7xl flex-col items-center justify-center gap-12">
        <div className="text-center">
          <SmallTitle title="Pricing Plas" />

          <h2 className="mt-6 text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
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
