import ContactUs from "@/components/frontend/contact-us";
import SmallTitle from "@/components/frontend/small-title";
import React from "react";

export default function page() {
  return (
    <div className="py-6 ">
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4 py-24">
        <div className="relative flex w-full max-w-7xl flex-col items-center justify-center gap-12">
          <div className="text-center">
            <SmallTitle title="Contact US" />

            <h2 className="mt-6 max-w-4xl text-4xl font-medium tracking-tight text-sky-950 sm:text-5xl lg:text-6xl">
              Let&#39;s get started with School Scout
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
              Streamline your entire school operations with our comprehensive
              suite of integrated modules designed specifically for modern
              educational institutions.
            </p>
          </div>
          <ContactUs />
        </div>
      </section>
    </div>
  );
}
