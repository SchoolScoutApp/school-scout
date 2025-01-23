"use client";
import React from "react";
import { Send } from "lucide-react";
import SubmitButton from "./FormInputs/SubmitButton";

import { countries } from "@/data/countries";
import Input from "../input/input";
import Select from "../select/select";
import Textarea from "../textarea/textarea";


const ContactUs: React.FC = () => {
  return (
    <section className="bg-sky-50 p-16 rounded-2xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-3xl font-bold mb-2">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-3 bg-white p-10 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-10">
              Sign up to get your school onboard
            </h3>
            <form className="grid gap-4">
              <Input
                label="Full Name"
                name="name"
                placeholder="John Doe"
                required
              />
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="Eg. johndoe@gmail.com"
                  required
                />
                <Input
                  label="Phone"
                  name="phone"
                  type="text"
                  placeholder="Eg. 9898767654"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="School Name"
                  name="school"
                  placeholder="Eg. Bishop's School"
                />
                <Select
                  label="Country"
                  name="country"
                  items={countries.map((country) => ({
                    label: country.name,
                    value: country.code,
                    flag: country.flag,
                  }))}
                  required
                />
              </div>
              <Textarea
                label="Your Address"
                name="address"
                placeholder="Eg. 123, Main Street, City, Country"
                required
              />
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="No of Students"
                  name="school-students"
                  type="number"
                  placeholder="Eg. 1000"
                />
                <Input
                  label="Social Media"
                  name="social"
                  placeholder="Eg. https://www.facebook.com/schoolscout"
                />
              </div>
              <Input
                label="Your Role"
                name="role"
                placeholder="Eg. Principle, Dean"
              />
              <Input
                label="How did you hear about us?"
                name="role"
                placeholder="Eg. Facebook, Instagram, Twitter"
                required
              />
              <Textarea
                label="Your interest? (What are the exact feature you are looking for?)"
                name="interest"
                placeholder="Eg. Facebook, Instagram, Twitter"
              />

              <SubmitButton
                buttonIcon={Send}
                title="Submit"
                loading={false}
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
