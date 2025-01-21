"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import TextInput from "@/components/frontend/FormInputs/TextInput";
import SubmitButton from "@/components/frontend/FormInputs/SubmitButton";
import Logo from "@/components/logo";
import PasswordInput from "../FormInputs/PasswordInput";
import { Lock, LogIn, Mail } from "lucide-react";
import CustomCarousel from "@/components/custom-carousal";

export type RegisterInputProps = {
  fullName: string;
  email: string;
  password: string;
  phone: string;
};
export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputProps>();
  async function onSubmit(data: RegisterInputProps) {
    console.log(data);
    setIsLoading(true);
  }
  return (
    <div className="w-full lg:grid h-screen lg:min-h-[600px] lg:grid-cols-2 relative ">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6 mt-10 md:mt-0">
          <div className="absolute left-1/3 top-5 md:top-5 md:left-5">
            <Logo type="light" />
          </div>
          <div className="grid gap-2 text-center mt-10 md:mt-0">
            <h1 className="text-3xl font-bold">Login to your Account</h1>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              icon={Mail}
              label="Email Address"
              register={register}
              name="email"
              type="email"
              errors={errors}
              placeholder="Eg. johndoe@gmail.com"
            />

            <PasswordInput
              icon={Lock}
              label="Password"
              register={register}
              name="password"
              type="password"
              errors={errors}
              placeholder="******"
              forgotPasswordLink="/forgot-password"
            />

            <SubmitButton
              buttonIcon={LogIn}
              title="Log In"
              loading={isLoading}
              loadingTitle="Signing in, please wait..."
            />
          </form>
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        <CustomCarousel />
      </div>
    </div>
  );
}
