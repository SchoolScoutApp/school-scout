import { ArrowRight } from "lucide-react";
import SmallTitle from "./small-title";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4">
      <div className="relative max-w-6xl mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-8 text-center">
        <SmallTitle title="Welcome to School Scout" />

        <h1 className="max-w-4xl text-4xl font-medium tracking-tight text-neutral-950 sm:text-6xl">
          Your Complete School Management Solution
        </h1>

        <p className="max-w-2xl text-lg text-neutral-600">
          From admissions to academics, simplify every aspect of school
          administration with our comprehensive and user-friendly platform.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-medium text-white transition-colors">
            Get started
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-50">
            View All features
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
