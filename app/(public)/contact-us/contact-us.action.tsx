"use server";

import { contactUs } from "@/services/public-forms";
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
  const message = formData.get("message")?.toString();
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
    {
      element: message,
      fieldName: "message",
    },
  ]);

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  if (name && email && phone && school_name && address && message) {
    const response = await contactUs({
      name,
      email,
      phone,
      school_name,
      address,
      message,
      status: "new",
      createdAt: new Date().toISOString(),
    });

    if (!response.ok) {
      errors.invalid_error =
        "Invalid Credentials: Please enter a valid email and password";
    }

    if (response.ok && response.status === 200) {
      const contactUsData = await response.json();
      console.log(contactUsData);

      revalidatePath("/", "layout");
      redirect("/thank-you");
    }
  }
}
