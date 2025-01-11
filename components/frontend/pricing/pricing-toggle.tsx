"use client";

import { useState } from "react";

interface PricingToggleProps {
  onPeriodChange: (period: "monthly" | "yearly") => void;
}

export function PricingToggle({ onPeriodChange }: PricingToggleProps) {
  const [period, setPeriod] = useState<"monthly" | "yearly">("monthly");

  const handlePeriodChange = (newPeriod: "monthly" | "yearly") => {
    setPeriod(newPeriod);
    onPeriodChange(newPeriod);
  };

  return (
    <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white p-1">
      <button
        onClick={() => handlePeriodChange("monthly")}
        className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
          period === "monthly"
            ? "bg-neutral-900 text-white"
            : "text-neutral-600 hover:text-neutral-900"
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => handlePeriodChange("yearly")}
        className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-sm transition-colors ${
          period === "yearly"
            ? "bg-neutral-900 text-white"
            : "text-neutral-600 hover:text-neutral-900"
        }`}
      >
        Yearly
        <span className="text-red-500">(Save 20%)</span>
      </button>
    </div>
  );
}
