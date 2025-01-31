"use server";

import { createSession, login } from "@/services/sessions";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function SubmitLogin(prevState: any, formData: FormData) {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const errors: any = {};

  if (!email || email.trim().length === 0) {
    errors.email_error = "Please enter a valid email";
  }

  if (!password || password.trim().length === 0) {
    errors.password_error = "Please enter a valid password";
  }

  if (
    !email ||
    email.trim().length === 0 ||
    !password ||
    password.trim().length === 0
  ) {
    return errors;
  }

  const response = await login(email, password);

  if (!response.ok) {
    errors.invalid_error =
      "Invalid Credentials: Please enter a valid email and password";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  if (response.ok && response.status === 200) {
    const userData = await response.json();
    console.log(userData);

    createSession(userData);

    revalidatePath("/", "layout");
    redirect("/dashboard");
  }
}
