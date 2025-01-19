"use client";
import Logo from "@/components/logo";
import CustomCarousel from "@/components/custom-carousal";
import Input from "@/components/input/input";
import SubmitLogin from "./login.action";
import LoginSubmit from "./login-submit";
import { useFormState } from "react-dom";
import { Card } from "@/components/ui/card";

export type RegisterInputProps = {
  fullName: string;
  email: string;
  password: string;
  phone: string;
};
export default function LoginForm() {
  const [state, formAction] = useFormState(SubmitLogin, {});

  return (
    <div className="w-full lg:grid h-screen lg:min-h-[600px] lg:grid-cols-2 relative ">
      <div className="flex items-center justify-center py-12">
        <Card className="mx-auto grid w-[350px] gap-6 mt-10 md:mt-0 bg-white p-6">
          <div className="absolute left-1/3 top-5 md:top-5 md:left-5">
            <Logo type="light" />
          </div>
          <div className="grid gap-2 text-center mt-10 md:mt-0">
            <h1 className="text-3xl font-bold">Login to your Account</h1>
          </div>
          <form className="grid gap-4" action={formAction}>
            <Input
              label="Email"
              type="email"
              id="email"
              name="email"
              invalid={state.email_error}
            />

            <Input
              label="Password"
              type="password"
              id="password"
              name="password"
              invalid={state.password_error}
            />

            <LoginSubmit />
          </form>
        </Card>
      </div>
      <div className="hidden bg-muted lg:block relative">
        <CustomCarousel />
      </div>
    </div>
  );
}
