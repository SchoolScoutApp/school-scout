import { ArrowRight } from "lucide-react";
import SmallTitle from "./small-title";
import { Button } from "../ui/button";
import Link from "next/link";
import classes from "./common.module.css";

export default function HeroSection() {
  return (
    <section
      className={`flex min-h-[60vh] justify-center relative ${classes.hero_section}`}
    >
      <div
        className={`absolute max-w-6xl mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-8 text-center  min-h-[60vh]  ${classes.hero_section_content}`}
      >
        <SmallTitle title="Welcome to School Scout" />

        <h1
          className={`max-w-4xl p-4 rounded text-4xl font-medium tracking-tight text-sky-950 sm:text-6xl ${classes.banner_heading}`}
        >
          Your Complete School Management Solution
        </h1>

        <p
          className={`max-w-2xl text-lg text-sky-900 ${classes.banner_heading}`}
        >
          From admissions to academics, simplify every aspect of school
          administration with our comprehensive and user-friendly platform.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-medium text-white transition-colors"
            asChild
          >
            <Link href="/contact-us">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
          >
            <Link href="#features" className="flex items-center">
              View All features&nbsp;
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
