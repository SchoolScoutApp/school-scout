import React from "react";
import { Badge } from "../ui/badge";

export default function SmallTitle({ title }: { title: string }) {
  return (
    <Badge
      variant="secondary"
      className="h-8 items-center gap-2 pl-4 pr-6 text-base"
    >
      <span className="text-neutral-600">{title}</span>
    </Badge>
  );
}
