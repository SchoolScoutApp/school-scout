"use client";

import React, { useState } from "react";
import {
  Upload,
  Building2,
  Mail,
  // Phone,
  MapPin,
  // Globe,
  School,
  // Users,
  BadgeCheck,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import FormHeader from "../FormHeader";

interface SchoolFormData {
  // Basic Information
  schoolName: string;
  slogan: string;
  establishedYear: string;
  logo: File | null;

  // Contact Information
  email: string;
  phone: string;
  website: string;

  // Address
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;

  // School Details
  schoolType: string;
  educationSystem: string;
  studentCount: string;
  staffCount: string;

  // Subscription
  planCategory: string;
}

const SchoolOnboarding: React.FC = ({ editingId }: any) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<SchoolFormData>({
    schoolName: "",
    slogan: "",
    establishedYear: "",
    logo: null,
    email: "",
    phone: "",
    website: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    schoolType: "",
    educationSystem: "",
    studentCount: "",
    staffCount: "",
    planCategory: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        logo: e.target.files![0],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    setLoading(false);
  };

  return (
    <Card className="p-8 m-10 w-10/12 mx-auto border-t-4 border-blue-600">
      <form onSubmit={handleSubmit} className="space-y-8">
        <FormHeader
          href="/dashboard/schools"
          parent=""
          title="School"
          editingId={editingId}
          loading={loading}
        />

        {/* Basic Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Basic Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                School Name *
              </label>
              <input
                type="text"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                School Slogan
              </label>
              <input
                type="text"
                name="slogan"
                value={formData.slogan}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Established Year
              </label>
              <input
                type="number"
                name="establishedYear"
                value={formData.establishedYear}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                min="1800"
                max={new Date().getFullYear()}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                School Logo
              </label>
              <div className="border rounded p-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Upload className="h-5 w-5" />
                  <span>Upload Logo</span>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Website</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="https://"
              />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            School Address
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Street Address *
              </label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                State/Province *
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Postal Code *
              </label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Country *
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
        </div>

        {/* School Details */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <School className="h-5 w-5" />
            School Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                School Type *
              </label>
              <select
                name="schoolType"
                value={formData.schoolType}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select Type</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="international">International</option>
                <option value="charter">Charter</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Education System *
              </label>
              <select
                name="educationSystem"
                value={formData.educationSystem}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select System</option>
                <option value="national">National Curriculum</option>
                <option value="american">American Curriculum</option>
                <option value="british">British Curriculum</option>
                <option value="ib">International Baccalaureate</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Number of Students
              </label>
              <input
                type="number"
                name="studentCount"
                value={formData.studentCount}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                min="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Number of Staff
              </label>
              <input
                type="number"
                name="staffCount"
                value={formData.staffCount}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                min="0"
              />
            </div>
          </div>
        </div>

        {/* Subscription Plan */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <BadgeCheck className="h-5 w-5" />
            Select Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <label className="border rounded p-4 cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="planCategory"
                value="basic"
                checked={formData.planCategory === "basic"}
                onChange={handleInputChange}
                className="mr-2"
              />
              Basic Plan
            </label>
            <label className="border rounded p-4 cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="planCategory"
                value="premium"
                checked={formData.planCategory === "premium"}
                onChange={handleInputChange}
                className="mr-2"
              />
              Premium Plan
            </label>
            <label className="border rounded p-4 cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="planCategory"
                value="enterprise"
                checked={formData.planCategory === "enterprise"}
                onChange={handleInputChange}
                className="mr-2"
              />
              Enterprise Plan
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-sky-600 text-white px-6 py-2 rounded hover:bg-sky-700 transition-colors"
          >
            Register School
          </button>
        </div>
      </form>
    </Card>
  );
};

export default SchoolOnboarding;
