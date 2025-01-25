import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import Logo from "./logo";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-sky-600 text-white flex justify-center flex-col">
      <div className="container px-4 py-16 md:px-6 m-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Logo type="dark" />
            </div>
            <p className="text-sm text-white/90">
              From admissions to academics, simplify every aspect of school
              administration with our comprehensive and user-friendly platform.
            </p>
            {/* <div className="flex space-x-4">
              <Link
                href="#"
                className="rounded-full bg-white p-2 hover:bg-white/90"
              >
                <Twitter className="h-4 w-4 text-sky-600" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-white p-2 hover:bg-white/90"
              >
                <Instagram className="h-4 w-4 text-sky-600" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-white p-2 hover:bg-white/90"
              >
                <Linkedin className="h-4 w-4 text-sky-600" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-white p-2 hover:bg-white/90"
              >
                <Youtube className="h-4 w-4 text-sky-600" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div> */}
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Get In Touch</h3>
            <div className="space-y-2 text-sm">
              <p>schooscoutindia@gmail.com</p>
              <p>+91-860-55-74447</p>
              <p>Airport road, Viman Nagar, Pune, India 411014.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link className="hover:underline" href="/">
                  Home
                </Link>
                <Link className="hover:underline" href="/help-us">
                  FAQs
                </Link>
                <Link className="hover:underline" href="/#pricing">
                  Price Plan
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold invisible">Links</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link className="hover:underline" href="/#features">
                  Features
                </Link>
                <Link className="hover:underline" href="/">
                  About
                </Link>
                <Link className="hover:underline" href="/contact-us">
                  Contact
                </Link>
                {/* <Link className="hover:underline" href="#">
                  Products
                </Link> */}
              </nav>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <form className="space-y-2">
              <Input
                className="bg-white/10 border-white/20 placeholder:text-white/50"
                placeholder="Enter email.."
                type="email"
              />
              <Button
                className="w-full bg-white text-sky-600 hover:bg-white/90"
                type="submit"
              >
                Subscribe
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10  m-auto">
        <div className="container flex flex-col items-center justify-center gap-4 py-6 text-center text-sm md:h-16 md:flex-row md:py-0">
          <div className="text-white/60">
            Copyright@2025 All Right Reserved School Scout.
          </div>
        </div>
      </div>
    </footer>
  );
}
