"use client";

import React from "react";
import { useFormState } from "react-dom";

import SmallTitle from "@/components/frontend/small-title";
import Input from "@/components/input/input";
import Textarea from "@/components/textarea/textarea";
import ContactUsSubmit from "./contact-us-submit";
import SubmitContactUs from "./contact-us.action";

export default function ContactUsForm() {
  const [state, formAction] = useFormState<any, FormData>(SubmitContactUs, []);

  return (
    <div className="py-6 ">
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4 py-24">
        <div className="relative flex w-full max-w-7xl flex-col items-center justify-center gap-12">
          <div className="text-center">
            <SmallTitle title="Contact US" />

            <h2 className="mt-6 max-w-4xl text-4xl font-medium tracking-tight text-sky-950 sm:text-5xl lg:text-6xl">
              Let&#39;s get started with School Scout
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
              Streamline your entire school operations with our comprehensive
              suite of integrated modules designed specifically for modern
              educational institutions.
            </p>
          </div>
          <section className="bg-sky-50 p-16 rounded-2xl">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-3xl font-bold mb-2">
                Contact Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-3 bg-white p-10 rounded-2xl shadow">
                  <h3 className="text-xl font-semibold mb-10">
                    Sign up to get your school onboard
                  </h3>
                  <form className="grid gap-4" action={formAction}>
                    <Input
                      label="Full Name"
                      name="name"
                      placeholder="John Doe"
                      required
                      invalid={state && state.name_error}
                    />
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="Eg. johndoe@gmail.com"
                      required
                      invalid={state && state.email_error}
                    />
                    <Input
                      label="Phone"
                      name="phone"
                      type="text"
                      placeholder="Eg. 9898767654"
                      required
                      invalid={state && state.phone_error}
                    />
                    <Input
                      label="School Name"
                      name="school_name"
                      placeholder="Eg. Bishop's School"
                      required
                      invalid={state && state.school_name_error}
                    />
                    <Textarea
                      label="Your Address"
                      name="address"
                      placeholder="Eg. 123, Main Street, City, Country"
                      required
                      invalid={state && state.address_error}
                    />
                    <ContactUsSubmit />
                  </form>
                  <p className="mt-5">
                    Fill up all your information or you can contact us on{" "}
                    <a href="tel:+91-909098767">+91-9876554321</a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
