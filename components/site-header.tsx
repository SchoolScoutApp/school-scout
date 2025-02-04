"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  // DollarSign,
  // Bell,
  Menu,
  Users,
  GraduationCap,
  ClipboardList,
  MessageSquare,
  // Bus,
  // BookOpen,
  // CalendarDays,
  // FileText,
  // BarChart2,
  // Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Logo from "./logo";

const features = [
  {
    icon: Users,
    title: " Child Management",
    description:
      "Complete digital system for child enrollment, profiles, and progress tracking.",
    href: "/features/students",
  },
  {
    icon: GraduationCap,
    title: "Daily Activity Planning",
    description:
      "Streamline lesson plans, nap schedules, meal tracking, and daily reports.",
    href: "/features/academics",
  },

  {
    icon: MessageSquare,
    title: "Parent Communication Hub",
    description:
      "Integrated messaging system with real-time updates, announcements, and media sharing.",
    href: "/features/communication",
  },
  {
    icon: ClipboardList,
    title: "Staff & Attendance Management",
    description:
      "Efficiently manage caregiver schedules, attendance, and payroll.",
    href: "/features/staff",
  },
  // {
  //   icon: DollarSign,
  //   title: "Financial Operations",
  //   description:
  //     "Comprehensive fee management with online payments, invoicing, expense tracking, and financial reporting",
  //   href: "/features/finance",
  // },
  // {
  //   icon: Bus,
  //   title: "Transport System",
  //   description:
  //     "Real-time vehicle tracking, route optimization, and automated alerts for safe and efficient student transportation",
  //   href: "/features/transport",
  // },
  // {
  //   icon: BarChart2,
  //   title: "Analytics Dashboard",
  //   description:
  //     "Powerful data visualization and reporting tools for informed decision-making and performance tracking",
  //   href: "/features/analytics",
  // },
  // {
  //   icon: BookOpen,
  //   title: "Resource Management",
  //   description:
  //     "Digital library system, inventory control, and facility scheduling with comprehensive tracking capabilities",
  //   href: "/features/resources",
  // },
  // {
  //   icon: CalendarDays,
  //   title: "Attendance System",
  //   description:
  //     "Automated attendance tracking for students and staff with instant notifications and detailed reporting",
  //   href: "/features/attendance",
  // },
  // {
  //   icon: FileText,
  //   title: "Examination Portal",
  //   description:
  //     "End-to-end examination management from scheduling to result publication with secure assessment tools",
  //   href: "/features/exams",
  // },

  // {
  //   icon: Bell,
  //   title: "Notice Board",
  //   description:
  //     "Digital announcement system for events, updates, and notifications with targeted distribution capabilities",
  //   href: "/features/notifications",
  // },
  // {
  //   icon: Shield,
  //   title: "Security & Access",
  //   description:
  //     "Advanced role-based access control with data encryption and automated backups for complete security",
  //   href: "/features/security",
  // },
];

export default function MantineHeader() {
  const [open, setOpen] = React.useState(false);
  const [showFeatures, setShowFeatures] = React.useState(false);

  return (
    <div>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-6xl mx-auto flex h-14 items-center justify-between">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full p-0">
              <SheetHeader className="border-b p-4">
                <SheetTitle className="text-left">Navigation</SheetTitle>
              </SheetHeader>
              <div
                className="flex flex-col py-4"
                style={{ overflowY: "auto", maxHeight: "calc(100vh - 120px)" }}
              >
                <Link
                  href="/"
                  className="px-4 py-2 text-lg font-medium hover:bg-accent"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
                <button
                  className="flex items-center justify-between px-4 py-2 text-lg font-medium hover:bg-accent text-left"
                  onClick={() => setShowFeatures(!showFeatures)}
                >
                  Features
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform",
                      showFeatures && "rotate-180"
                    )}
                  />
                </button>
                {showFeatures && (
                  <div className="px-4 py-2 space-y-4">
                    {features.map((feature, index) => (
                      <Link
                        key={index}
                        href={feature.href}
                        className="flex items-start gap-4 py-2"
                        onClick={() => setOpen(false)}
                      >
                        <div className="p-2 bg-muted rounded-md">
                          <feature.icon className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                          <h5 className="font-medium mb-1">{feature.title}</h5>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                <Link
                  href="/#pricing"
                  className="px-4 py-2 text-lg font-medium hover:bg-accent"
                  onClick={() => setOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/blogs"
                  className="px-4 py-2 text-lg font-medium hover:bg-accent"
                  onClick={() => setOpen(false)}
                >
                  Blogs
                </Link>
                <Link
                  href="/help-us"
                  className="px-4 py-2 text-lg font-medium hover:bg-accent"
                  onClick={() => setOpen(false)}
                >
                  Need Help ?
                </Link>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-background">
                <div className="grid gap-2">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setOpen(false)}
                    asChild
                  >
                    <Link href={"/login"}>Log in</Link>
                  </Button>
                  <Button
                    className="w-full"
                    asChild
                    onClick={() => setOpen(false)}
                  >
                    <Link href={"/contact-us"}>Book Demo</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex items-center space-x-4">
            <div className="md:hidden absolute left-1/3  md:left-5">
              <Logo type="light" />
            </div>
            <div className="max-sm:hidden">
              <Logo type="light" />
            </div>

            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    onMouseEnter={() => setShowFeatures(true)}
                  >
                    Features
                  </NavigationMenuTrigger>
                  {showFeatures && (
                    <NavigationMenuContent>
                      <div className="w-[800px] p-4">
                        <div className="flex items-center justify-between mb-4 pb-2 border-b">
                          <h4 className="text-lg font-medium">Features</h4>
                        </div>
                        <div className="grid gap-4 md:grid-cols-3">
                          {features.map((feature, index) => (
                            <Link
                              key={index}
                              href={feature.href}
                              className="block group"
                              onClick={() => setShowFeatures(false)}
                            >
                              <div className="flex items-start gap-4">
                                <div className="p-2 bg-muted rounded-md group-hover:bg-muted/80">
                                  <feature.icon className="h-6 w-6 text-blue-500" />
                                </div>
                                <div>
                                  <h5 className="font-medium mb-1 group-hover:text-blue-500">
                                    {feature.title}
                                  </h5>
                                  <p className="text-sm text-muted-foreground line-clamp-2">
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-6 pt-4 border-t">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium mb-1">Get started</h4>
                              <p className="text-sm text-muted-foreground">
                                Build stronger connections between parents and
                                caregivers for a nurturing learning environment.
                              </p>
                            </div>
                            <Button variant="secondary" asChild>
                              <Link href={"/contact-us"}>Get started</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  )}
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/#pricing" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/blogs" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Blogs
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/help-us" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      FAQ&#39;s
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href={"/login"}>Log in</Link>
            </Button>
            <Button asChild>
              <Link href={"/contact-us"}>Book Demo</Link>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}
