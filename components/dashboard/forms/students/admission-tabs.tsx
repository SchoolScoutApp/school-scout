"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserPlus, Users } from "lucide-react";
import SingleStudentForm from "./single-student-form";
import BulkStudentForm from "./bulk-student-form";

export default function AdmissionTabs() {
  return (
    <div className="w-9/12 mx-auto p-6">
      <Tabs defaultValue="single" className="w-full">
        <TabsList className="grid w-full grid-cols-2 h-16">
          <TabsTrigger
            value="single"
            className="text-lg py-3 data-[state-active]:bg-blue-600 data-[state-active]:text-white transition-all"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            <span className="hidden md:block">Single Student Admission</span>
          </TabsTrigger>
          <TabsTrigger
            value="bulk"
            className="text-lg py-3 data-[state-active]:bg-blue-600  data-[state-active]:text-white transition-all"
          >
            <Users className="w-5 h-5 mr-2" />
            <span className="hidden md:block">Bulk Student Admission</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="single" className="mt-6">
          <SingleStudentForm />
        </TabsContent>
        <TabsContent value="bulk" className="mt-6">
          <BulkStudentForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
