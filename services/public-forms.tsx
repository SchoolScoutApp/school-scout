"use server";
import { iContactUs } from "@/interfaces/contact-us";

export async function contactUs(contactUsData: iContactUs) {
  const url = process.env.NEXT_PUBLIC_API_END_POINT + "api/public/contact-us";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(contactUsData),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function fetchEnquiries() {
  const url = process.env.NEXT_PUBLIC_API_END_POINT + "api/public/enquiries";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
}
