import * as React from "react";

import dashboard from "@/assets/images/dashboard.png";

import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";

export default function DashboardPreview() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto">
        <Card className="w-full">
          <CardContent className="mt-4">
            <Image
              src={dashboard}
              alt="Dashboard Preview"
              width={2016}
              height={1210}
              className="w-full rounded-lg"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
