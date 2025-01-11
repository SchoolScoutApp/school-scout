import { GraduationCap } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Logo({ type = "light" }: { type: "light" | "dark" }) {
  if (type === "dark") {
    return (
      <Link href={"/"} className="flex items-center space-x-2">
        <div className="bg-white rounded-full p-1">
          <span className="text-blue-500 font-bold text-xl">
            <GraduationCap />
          </span>
        </div>
        <span className="font-bold text-xl">
          School <span className="text-blue-100">Scout</span>
        </span>
      </Link>
    );
  }
  return (
    <Link href={"/"} className="flex items-center space-x-2">
      <div className="bg-blue-500 rounded-full p-1">
        <span className="text-white font-bold text-xl">
          <GraduationCap />
        </span>
      </div>
      <span className="font-bold text-xl">
        School
        <span className="text-blue-500"> Scout</span>
      </span>
    </Link>
  );
}
