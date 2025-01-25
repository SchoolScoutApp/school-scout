import DashboardPreview from "@/components/frontend/dashboard-preview";
import FeatureGrid from "@/components/frontend/features/feature-grid";
import HeroSection from "@/components/frontend/hero-section";
import HowItWorks from "@/components/frontend/how-it-works/how-it-works";
// import LogoCloud from "@/components/frontend/logo-cloud";
import Pricing from "@/components/frontend/pricing/pricing";
import Testimonials from "@/components/frontend/testimonials/testimonials";
import React from "react";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <DashboardPreview />
      {/* <LogoCloud /> */}
      <FeatureGrid />
      <Pricing />
      <Testimonials />
      <HowItWorks />
    </main>
  );
}
