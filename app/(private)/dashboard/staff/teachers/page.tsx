import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h2>Teachers</h2>
      <Button asChild>
        <Link href={"/dashboard/staff/teachers/new"}>New Teacher</Link>
      </Button>
    </div>
  );
}
