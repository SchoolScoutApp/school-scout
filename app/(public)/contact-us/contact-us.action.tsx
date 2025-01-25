"use server";

import { createSession, login } from "@/services/sessions";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function validateRequired(
  fieldsData: {
    element: any;
    fieldName: string;
  }[]
) {
  const errors: { [key: string]: string } = {};
  fieldsData.forEach((field) => {
    if (!field.element || field.element.trim().length === 0) {
      errors[field.fieldName + "_error"] =
        "Please enter a valid " + field.fieldName;
    }
  });
  return errors;
}

export default async function SubmitContactUs(
  prevState: any,
  formData: FormData
) {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const phone = formData.get("phone")?.toString();
  const school_name = formData.get("school_name")?.toString();
  const address = formData.get("address")?.toString();

  const errors = validateRequired([
    {
      element: name,
      fieldName: "name",
    },
    {
      element: email,
      fieldName: "email",
    },
    {
      element: phone,
      fieldName: "phone",
    },
    {
      element: school_name,
      fieldName: "school_name",
    },
    {
      element: address,
      fieldName: "address",
    },
  ]);

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  console.log("Proceeding to submit contact us form");

  // const response = await login(email, password);

  // console.log(response);

  // if (!response.ok) {
  //   errors.invalid_error =
  //     "Invalid Credentials: Please enter a valid email and password";
  // }

  // if (Object.keys(errors).length > 0) {
  //   return errors;
  // }

  // if (response.ok && response.status === 200) {
  //   const userData = await response.json();
  //   console.log(userData);

  //   createSession(userData);

  //   revalidatePath("/", "layout");
  //   redirect("/dashboard");
  // }
}
