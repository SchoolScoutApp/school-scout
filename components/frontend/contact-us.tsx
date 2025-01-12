"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "./FormInputs/TextInput";
import { Mail, Search, Send } from "lucide-react";
import PasswordInput from "./FormInputs/PasswordInput";
import SubmitButton from "./FormInputs/SubmitButton";
import TextArea from "./FormInputs/TextAreaInput";
import PhoneInput from "./FormInputs/PhoneInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { countries } from "@/data/countries";
import { Input } from "../ui/input";
import CountrySelect from "./FormInputs/CountryDropDown";

type RegisterInputProps = {
  fullName: string;
  email: string;
  password: string;
  phone: string;
};

const ContactUs: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [phoneCode, setPhoneCode] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countries[73]);
  const [searchQuery, setSearchQuery] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputProps>();
  async function onSubmit(data: RegisterInputProps) {
    setIsLoading(true);
    const phoneNumber = `${phoneCode}-${data.phone}`;
    data.phone = phoneNumber;
    console.log(data);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.dial_code.includes(searchQuery)
  );

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-3xl font-bold mb-2">Contact Us</h2>
        <p className="text-gray-600 mb-8 pb-4">
          Streamline your processes and empower your school with our products.
          Effortlessly manage School System, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-3 bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-4">
              Sign up to get your school onboard
            </h3>
            <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
              <TextInput
                label="Full Name"
                register={register}
                name="name"
                errors={errors}
                placeholder="John Doe"
              />
              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  label="Email Address"
                  register={register}
                  name="email"
                  type="email"
                  errors={errors}
                  placeholder="Eg. johndoe@gmail.com"
                />
                <PhoneInput
                  label="Phone"
                  register={register}
                  name="phone"
                  type="text"
                  errors={errors}
                  placeholder="Eg. 9898767654"
                  setPhoneCode={setPhoneCode}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  label="School Name"
                  register={register}
                  name="school"
                  errors={errors}
                  placeholder="Eg. Bishop's School"
                />

                <CountrySelect
                  value={countries[73].code}
                  name="country"
                  register={register}
                  errors={errors}
                />
              </div>
              <TextArea
                label="Your Address"
                register={register}
                name="address"
                errors={errors}
              />

              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  label="No of Students"
                  register={register}
                  name="school-students"
                  errors={errors}
                  type="number"
                  placeholder="Eg. 1000"
                />
                <TextInput
                  label="Social Media"
                  register={register}
                  name="social"
                  errors={errors}
                  placeholder="Eg. https://www.facebook.com/schoolscout"
                />
              </div>
              <TextInput
                label="Your Role"
                register={register}
                name="role"
                errors={errors}
                placeholder="Eg. Principle, Dean"
              />
              <TextInput
                label="How did you hear about us?"
                register={register}
                name="role"
                errors={errors}
              />
              <TextArea
                label="Your interest? (What are the exact feature you are looking for?)"
                register={register}
                name="social"
                errors={errors}
              />

              <SubmitButton
                buttonIcon={Send}
                title="Submit"
                loading={isLoading}
                loadingTitle="Sending..."
              />
            </form>
            <p className="mt-5">
              Fill up all your information or you can contact us on{" "}
              <a href="tel:+91-909098767">+91-9876554321</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
