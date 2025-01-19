import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h2>Schools</h2>
      <Button asChild>
        <Link href={"/dashboard/schools/new"}>New School</Link>
      </Button>
    </div>
  );
}
