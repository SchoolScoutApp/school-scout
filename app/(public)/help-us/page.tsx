import HelpUs from "@/components/frontend/help-us";
import SmallTitle from "@/components/frontend/small-title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="py-6 ">
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4 py-24">
        <div className="relative flex w-full max-w-7xl flex-col items-center justify-center gap-12">
          <div className="text-center">
            <SmallTitle title="Contact US" />

            <h2 className="mt-6 max-w-4xl text-4xl font-medium tracking-tight text-sky-950 sm:text-5xl lg:text-6xl">
              Do you have questions?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
              Streamline your entire school operations with our comprehensive
              suite of integrated modules designed specifically for modern
              educational institutions.
            </p>
          </div>
          <HelpUs />
          <div className="flex flex-col items-center justify-center gap-4">
            <h3 className="text-3xl font-medium text-sky-950">
              Still Confused?
            </h3>
            <p className="text-lg text-sky-950 text-center">
              Can't find what you're looking for? We're here to help! Reach out
              to our support team and we'll get back to you within 24 hours.
              <br />
              <br />
              <Button>
                <Link href="/contact-us">Contact Us for more information</Link>
              </Button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
