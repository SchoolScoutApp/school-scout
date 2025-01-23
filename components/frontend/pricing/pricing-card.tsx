import { ArrowRight, Check } from "lucide-react";
import { PricingBadge } from "./pricing-badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PricingCardProps {
  title: string;
  price: string | number;
  description: string;
  features: string[];
  highlighted?: boolean;
  period: "monthly" | "yearly";
}

export function PricingCard({
  title,
  price,
  description,
  features,
  highlighted = false,
  period,
}: PricingCardProps) {
  const isFreePlan = price === "Free";
  const yearlyPrice = typeof price === "number" && +price * 10 + 9;
  const displayPrice = period === "yearly" ? yearlyPrice : price;

  return (
    <div
      className={`rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl ${
        highlighted ? "ring-2 ring-red-100" : ""
      }`}
    >
      <PricingBadge variant={highlighted ? "highlight" : "default"}>
        {title}
      </PricingBadge>

      <div className="mt-6">
        <div className="flex items-baseline">
          {isFreePlan ? (
            <span className="text-4xl font-semibold">Free</span>
          ) : (
            <>
              <span className="text-4xl font-semibold">
                &#8377;{displayPrice}
              </span>
              <span className="ml-1 text-neutral-600">
                /{period === "yearly" ? "year" : "month"}
              </span>
            </>
          )}
        </div>
        <p className="mt-2 text-neutral-600">{description}</p>
      </div>

      <Button className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-sky-700 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-sky-800">
        <Link href="/contact-us" className="flex items-center">
          {isFreePlan ? "Try for free" : "Get started"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>

      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-neutral-600">
            <Check className="h-5 w-5 shrink-0 text-neutral-900" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
