"use client";

import { useState } from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InfoBanner } from "@/components/banner";

interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: "new" | "contacted" | "closed";
  createdAt: string;
}

const mockData: Enquiry[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
    message: "Interested in admission process",
    status: "new",
    createdAt: "2024-03-20T10:00:00Z",
  },
  // Add more mock data as needed
];

export default function EnquiriesPage() {
  const [enquiries] = useState<Enquiry[]>(mockData);

  return (
    <div className="container mx-auto py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Enquiries</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Manage and respond to enquiries from potential clients
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Enquiries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{enquiries.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Enquiries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {enquiries.filter((e) => e.status === "new").length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Closed Enquiries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {enquiries.filter((e) => e.status === "closed").length}
            </div>
          </CardContent>
        </Card>
      </div>

      <InfoBanner 
        type="info" 
        message="New enquiries will appear here automatically when someone submits the contact form."
        className="mb-6"
      />

      <Card>
        <CardContent className="p-6">
          <DataTable columns={columns} data={enquiries} />
        </CardContent>
      </Card>
    </div>
  );
} 