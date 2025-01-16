import React from "react";

export default function BulkStudentForm() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Bulk Student Admission</h2>
      <p className="text-gray-600">
        Use this section to admit multiple students at once. Upload a CSV file
        with student details or use the provided template to input information
        for multiple students.
      </p>
      {/* Bulk student admission form would go here */}
    </div>
  );
}
