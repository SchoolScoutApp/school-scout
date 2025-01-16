"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "@/components/frontend/FormInputs/TextInput";
import toast from "react-hot-toast";
import PasswordInput from "@/components/frontend/FormInputs/PasswordInput";
import FormSelectInput from "@/components/frontend/FormInputs/FormSelectInput";
import PhoneInput from "@/components/frontend/FormInputs/PhoneInput";
import { countries } from "@/data/countries";
import student from "@/assets/images/student.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FormHeader from "@/components/dashboard/forms/FormHeader";
import FormFooter from "@/components/dashboard/forms/FormFooter";
import {
  bloodGroup,
  classes,
  departments,
  designation,
  genders,
  marital_status,
  sections,
  teacher_access,
  titles,
} from "@/data/user-form";
import { InfoBanner } from "@/components/banner";

export type SelectOptionProps = {
  label: string;
  value: string;
};
type TeacherFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
};

export type TeacherProps = {
  name: string;
  email: string;
  password: string;
  imageUrl: string;
};

function modifyDataForDropdown(data: any, callback: any) {
  const modifiedData = data.map((item: any) => {
    return {
      value: item.id,
      label: item.name,
    };
  });
  callback(modifiedData);
  return modifiedData;
}

export default function TeacherForm({
  editingId,
  initialData,
}: TeacherFormProps) {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<any>(null);
  const [selectedGender, setSelectedGender] = useState<any>(null);
  const [selectedTitle, setSelectedTitle] = useState<any>(null);
  const [selectedClass, setSelectedClass] = useState<any>(null);
  const [selectedSection, setSelectedSection] = useState<any>(null);
  const [filteredSection, setFilteredSection] = useState<any>([]);
  const [phoneCode, setPhoneCode] = useState("");
  const [selectedNationality, setSelectedNationality] = useState<any>(null);
  const [filteredCountries, setFilteredCountries] = useState<any>([]);
  const [selectedDesignation, setSelectedDesignation] = useState<any>([]);
  const [selectedDepartment, setSelectedDepartment] = useState<any>([]);
  const [selectedAccess, setSelectedAccess] = useState<any>([]);
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState<any>([]);

  // Filter for dropdown
  const [filteredTitle, setFilteredTitle] = useState<any>([]);
  const [filteredGender, setFilteredGender] = useState<any>([]);
  const [filteredBloodgroup, setFilteredBloodgroup] = useState<any>([]);
  const [filteredDesignation, setFilteredDesignation] = useState<any>([]);
  const [filteredDepartments, setFilteredDepartments] = useState<any>([]);
  const [filteredClasses, setFilteredClasses] = useState<any>([]);
  const [filteredTeacherAccess, setFilteredTeacherAccess] = useState<any>([]);
  const [filteredMaritalStatus, setFilteredMaritalStatus] = useState<any>([]);

  // On Load
  useEffect(() => {
    const filteredCountries = countries.map((country) => {
      return {
        value: country.code,
        label: country.flag + " " + country.name,
      };
    });
    setFilteredCountries(() => {
      return filteredCountries;
    });

    modifyDataForDropdown(titles, setFilteredTitle);
    modifyDataForDropdown(genders, setFilteredGender);
    modifyDataForDropdown(bloodGroup, setFilteredBloodgroup);
    modifyDataForDropdown(designation, setFilteredDesignation);
    modifyDataForDropdown(departments, setFilteredDepartments);
    modifyDataForDropdown(classes, setFilteredClasses);
    modifyDataForDropdown(teacher_access, setFilteredTeacherAccess);
    modifyDataForDropdown(marital_status, setFilteredMaritalStatus);
  }, []);
  // On Class Select
  useEffect(() => {
    const filteredSection = sections.filter(
      (section) => selectedClass && section.classId === selectedClass.value
    );
    setFilteredSection(() => {
      return filteredSection;
    });
  }, [selectedClass]);

  function handleImageChange(e: any) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TeacherProps>({
    defaultValues: {
      name: "",
    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const initialImage = initialData?.imageUrl || student.src;
  const [imageUrl, setImageUrl] = useState(initialImage);

  async function saveTeacher(data: TeacherProps) {
    try {
      setLoading(true);
      data.imageUrl = imageUrl;
      console.log(data);
      console.log(phoneCode, selectedNationality);

      if (editingId) {
        // await updateCategoryById(editingId, data);
        setLoading(false);
        toast.success("Updated Successfully!");
        reset();
        router.push("/dashboard/categories");
      } else {
        // await createCategory(data);
        setLoading(false);
        toast.success("Successfully Created!");
        reset();
        router.push("/dashboard/categories");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <Card className="p-8 m-10 w-11/12 mx-auto border-t-4 border-blue-600">
      <div className="mb-10">
        <InfoBanner
          type="info"
          message="Please create the items on prior like Classes, Section etc."
        />
      </div>

      <form className="" onSubmit={handleSubmit(saveTeacher)}>
        <FormHeader
          href="/dashboard/staff/teachers"
          parent=""
          title="Teachers"
          editingId={editingId}
          loading={loading}
        />

        <div className="grid grid-cols-12 gap-6 py-8">
          <div className="lg:col-span-12 col-span-full space-y-3">
            <div className="grid gap-6">
              <h3 className="text-xl">Personal&39;s Details</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <div className="flex ">
                    <div className="w-40 mr-3">
                      <FormSelectInput
                        label="Title"
                        options={filteredTitle}
                        option={selectedTitle}
                        setOption={setSelectedTitle}
                        isSearchable={false}
                      />
                    </div>
                    <div className="w-full">
                      <TextInput
                        register={register}
                        errors={errors}
                        label="First Name"
                        name="first-name"
                      />
                    </div>
                  </div>
                  <div className="mt-4 grid md:grid-cols-2 gap-3">
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Last Name"
                      name="last-name"
                    />
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Date of Birth"
                      name="dob"
                      type="date"
                    />
                    <FormSelectInput
                      label="Gender"
                      options={filteredGender}
                      option={selectedGender}
                      setOption={setSelectedGender}
                      isSearchable={false}
                    />
                    <FormSelectInput
                      label="Blood Group"
                      options={filteredBloodgroup}
                      option={selectedBloodGroup}
                      setOption={setSelectedBloodGroup}
                      isSearchable={false}
                    />
                  </div>
                  <div className="mt-4 grid md:grid-cols-2 gap-3">
                    <PhoneInput
                      label="Phone"
                      register={register}
                      name="phone"
                      type="text"
                      errors={errors}
                      placeholder="Eg. 9898767654"
                      setPhoneCode={setPhoneCode}
                    />
                    <PhoneInput
                      label="Emergency Contact#"
                      register={register}
                      name="phone"
                      type="text"
                      errors={errors}
                      placeholder="Eg. 9898767654"
                      setPhoneCode={setPhoneCode}
                    />
                  </div>
                </div>

                <div className="upload-image-container mt-8">
                  <Card className="overflow-hidden image-display-content">
                    <CardHeader className="w-full flex text-center">
                      <CardTitle>Teacher&39;s Image</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <input
                        type="file"
                        className="student-image-element"
                        onChange={handleImageChange}
                      />
                      <div className="grid gap-2">
                        <Image
                          alt="Teacher's Image"
                          height="300"
                          className="h-40 w-full rounded-md object-fit"
                          src={imageUrl || ""}
                          width="300"
                        />
                      </div>
                      <div className="flex justify-center">
                        <Button>Upload Image</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <h3 className="mt-10 text-xl">Contact Details</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Address Line 1"
                  name="address-1"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="Address Line 2"
                  name="address-2"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="City"
                  name="city"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="State"
                  name="state"
                />
                <FormSelectInput
                  label="Nationality"
                  options={filteredCountries}
                  option={filteredCountries[73]}
                  setOption={setSelectedNationality}
                />
              </div>
              <h3 className="mt-10 text-xl">Professional Information</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Employee ID#"
                  name="employee-id"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="Date Of Joining"
                  name="doj"
                  type="date"
                />
                <FormSelectInput
                  label="Designation"
                  options={filteredDesignation}
                  option={selectedDesignation}
                  setOption={setSelectedDesignation}
                  toolTipText="Add New Designation"
                  href="/dashboard/academics/designation/new"
                />

                <FormSelectInput
                  label="Department"
                  options={filteredDepartments}
                  option={selectedDepartment}
                  setOption={setSelectedDepartment}
                  toolTipText="Add New Department"
                  href="/dashboard/academics/department/new"
                />
                <FormSelectInput
                  label="Classes"
                  options={filteredClasses}
                  option={selectedClass}
                  setOption={setSelectedClass}
                  toolTipText="Add New Class"
                  href="/dashboard/academics/classes/new"
                />
                <FormSelectInput
                  label="Section"
                  options={filteredSection}
                  option={selectedSection}
                  setOption={setSelectedSection}
                  toolTipText="Add New Section"
                  href="/dashboard/parents/new"
                  isSearchable={false}
                />

                <TextInput
                  label="Qualifications"
                  register={register}
                  errors={errors}
                  name="qualifications"
                />
                <TextInput
                  label="Years of Experience"
                  register={register}
                  errors={errors}
                  name="experirnce"
                  type="number"
                />
                <TextInput
                  label="Subject Experties"
                  register={register}
                  errors={errors}
                  name="experties"
                />
                <TextInput
                  label="Previous Institution"
                  register={register}
                  errors={errors}
                  name="prev-institution"
                />
                <TextInput
                  label="Worked since"
                  register={register}
                  errors={errors}
                  name="worked-since"
                  type="date"
                />
              </div>
              <h3 className="mt-10 text-xl">Login Information</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Login Username"
                  name="username"
                />
                <PasswordInput
                  register={register}
                  errors={errors}
                  label="Login Password"
                  name="password"
                  toolTipText="Password must be at least 8 characters long and a combination of letters, numbers and special characters."
                />
                <PasswordInput
                  register={register}
                  errors={errors}
                  label="Confirm Password"
                  name="password"
                  toolTipText="Password must be same as the password"
                />
                <FormSelectInput
                  label="Role"
                  options={filteredTeacherAccess}
                  option={selectedAccess}
                  setOption={setSelectedAccess}
                  isSearchable={false}
                />
              </div>

              <h3 className="mt-10 text-xl">Emergency Contacts</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Emergency Contact Name"
                  name="emergency_name"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="Emergency Contact Number"
                  name="emergency_number"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="Relationship"
                  name="relationship"
                />
              </div>
              <h3 className="mt-10 text-xl">Documents</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <TextInput
                  register={register}
                  errors={errors}
                  label="ID Proof (Aadhar/Passport/Driving License)"
                  name="id-proof"
                  type="file"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="X-XII Certificates"
                  name="id-proof"
                  type="file"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="Diploma/Graduation/PG/PhD Certificates"
                  name="degree[]"
                  type="file"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="Experience Letter"
                  name="exp-letter[]"
                  type="file"
                />
              </div>
              <h3 className="mt-10 text-xl">Bank Details</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Bank Account Number"
                  name="bank-account-number"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="Bank Name"
                  name="bank-name"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="IFSC Code"
                  name="ifsc-code"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="PAN Number"
                  name="pan-number"
                />
              </div>
              <h3 className="mt-10 text-xl">Additional Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <FormSelectInput
                  label="Marital Status"
                  options={filteredMaritalStatus}
                  option={selectedMaritalStatus}
                  setOption={setSelectedMaritalStatus}
                  isSearchable={false}
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="Languages Known"
                  name="languages"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="Extra Curricular Activities"
                  name="extra-curricular"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="Other Information"
                  name="other-info"
                />
              </div>
            </div>
          </div>
        </div>
        <FormFooter
          href="/categories"
          editingId={editingId}
          loading={loading}
          title="Teacher"
          parent=""
        />
      </form>
    </Card>
  );
}
