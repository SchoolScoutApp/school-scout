"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormFooter from "../FormFooter";
import FormHeader from "../FormHeader";
import TextInput from "@/components/frontend/FormInputs/TextInput";
import PasswordInput from "@/components/frontend/FormInputs/PasswordInput";
import FormSelectInput from "@/components/frontend/FormInputs/FormSelectInput";
import PhoneInput from "@/components/frontend/FormInputs/PhoneInput";
import { countries } from "@/data/countries";
import student from "@/assets/images/student.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { InfoBanner } from "@/components/banner";
import { bloodGroup, classes, genders, sections } from "@/data/user-form";

export type SelectOptionProps = {
  label: string;
  value: string;
};
type SingleStudentFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
};

export type StudentProps = {
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

export default function SingleStudentForm({
  editingId,
  initialData,
}: SingleStudentFormProps) {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<any>(null);
  const [selectedGender, setSelectedGender] = useState<any>(null);
  const [selectedClass, setSelectedClass] = useState<any>(null);
  const [selectedSection, setSelectedSection] = useState<any>(null);
  const [filteredSection, setFilteredSection] = useState<any>([]);
  const [phoneCode, setPhoneCode] = useState("");
  const [selectedNationality, setSelectedNationality] = useState<any>(null);

  // Filter the data according to requirement
  const [filteredCountries, setFilteredCountries] = useState<any>([]);
  const [filteredBloodGroup, setFilteredBloodGroup] = useState<any>([]);
  const [filteredGender, setFilteredGender] = useState<any>([]);
  const [filteredClasses, setFilteredClasses] = useState<any>([]);

  // On Load
  useEffect(() => {
    // Country filter
    const filteredCountries = countries.map((country) => {
      return {
        value: country.code,
        label: country.flag + " " + country.name,
      };
    });
    setFilteredCountries(() => {
      return filteredCountries;
    });

    modifyDataForDropdown(bloodGroup, setFilteredBloodGroup);
    modifyDataForDropdown(genders, setFilteredGender);
    modifyDataForDropdown(classes, setFilteredClasses);
  }, []);
  // On Class Select
  useEffect(() => {
    const filteredSection = sections.filter(
      (section) => selectedClass && section.classId === selectedClass.value
    );
    modifyDataForDropdown(filteredSection, setFilteredSection);
  }, [selectedClass]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<StudentProps>({
    defaultValues: {
      name: "",
    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const initialImage = initialData?.imageUrl || student.src;
  const [imageUrl, setImageUrl] = useState(initialImage);

  async function saveStudent(data: StudentProps) {
    try {
      setLoading(true);
      data.imageUrl = imageUrl;
      console.log(data);

      if (editingId) {
        console.log("Editing", phoneCode, selectedNationality);
        // await updateCategoryById(editingId, data);
        setLoading(false);
        reset();
        router.push("/dashboard/categories");
      } else {
        // await createCategory(data);
        setLoading(false);
        reset();
        router.push("/dashboard/categories");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  function handleImageChange(e: any) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  return (
    <Card className="p-8 border-t-4 border-blue-600">
      <div className="mb-10">
        <InfoBanner
          type="info"
          message="Please create the items on prior like Classes, Section etc."
        />
      </div>
      <form className="" onSubmit={handleSubmit(saveStudent)}>
        <FormHeader
          href="/dashboard/students"
          parent=""
          title="Student"
          editingId={editingId}
          loading={loading}
        />

        <div className="grid grid-cols-12 gap-6 py-8">
          <div className="lg:col-span-12 col-span-full space-y-3">
            <div className="grid gap-6">
              <h3>Student&39;s Details</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Student First Name"
                  name="first-name"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="Student Last Name"
                  name="last-name"
                />
              </div>
              <div className="grid md:grid-cols-3 gap-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Birthday"
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
                  options={filteredBloodGroup}
                  option={selectedBloodGroup}
                  setOption={setSelectedBloodGroup}
                  isSearchable={false}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Login Email"
                  name="email"
                  type="email"
                />
                <PasswordInput
                  register={register}
                  errors={errors}
                  label="Login Password"
                  name="password"
                  toolTipText="Password must be at least 8 characters long and a combination of letters, numbers and"
                />
              </div>
              <h3 className="mt-10">Parents/Guardian&39;s Details</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Father's First Name"
                  name="father-first-name"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="Father's Last Name"
                  name="father-last-name"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Mother's First Name"
                  name="mother-first-name"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="Mother's Last Name"
                  name="mother-last-name"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-3">
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
              </div>
              <div className="grid md:grid-cols-2 gap-3">
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
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <PhoneInput
                  label="Phone"
                  register={register}
                  name="phone"
                  type="text"
                  errors={errors}
                  placeholder="Eg. 9898767654"
                  setPhoneCode={setPhoneCode}
                />
                <FormSelectInput
                  label="Nationality"
                  options={filteredCountries}
                  option={filteredCountries[73]}
                  setOption={setSelectedNationality}
                  toolTipText="Add New Section"
                  href="/dashboard/parents/new"
                />
              </div>
              <h3 className="mt-10">Acadmics Information</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <FormSelectInput
                  label="Class"
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
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Roll Number"
                  name="roll-number"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="Registration Number"
                  name="registration-number"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Admission Date"
                  name="admission-date"
                  type="date"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="Adhaar Number"
                  name="adhaar-number"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-full ">
            <TextInput
              register={register}
              errors={errors}
              label="Parent's Adhaar Card"
              name="adhaar-card"
              type="file"
            />
            <div className="mt-3">
              <TextInput
                register={register}
                errors={errors}
                label="Birth Certificate"
                name="birth-certificate"
                type="file"
              />
            </div>
            <div className="mt-3">
              <TextInput
                register={register}
                errors={errors}
                label="Family Photo"
                name="family-photo"
                type="file"
              />
            </div>
            <div className="mt-3">
              <TextInput
                register={register}
                errors={errors}
                label="Address Proof"
                name="address"
                type="file"
              />
            </div>
          </div>
          <div className="lg:col-span-6 col-span-full ">
            <div className="grid auto-rows-max items-start gap-4 mt-5">
              <div className="upload-image-container">
                <Card className="overflow-hidden image-display-content">
                  <CardHeader className="w-full flex text-center">
                    <CardTitle>Student Image</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <input
                      type="file"
                      className="student-image-element"
                      onChange={handleImageChange}
                    />
                    <div className="grid gap-2">
                      <Image
                        alt="Student Image"
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
          </div>
        </div>
        <FormFooter
          href="/categories"
          editingId={editingId}
          loading={loading}
          title="Student"
          parent=""
        />
      </form>
    </Card>
  );
}
