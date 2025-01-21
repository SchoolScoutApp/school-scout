"use server";
import { iUser } from "@/interfaces/user";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createSession(userData: iUser) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 1 Week
  const cookieStore = await cookies();

  cookieStore.set("session", JSON.stringify(userData), {
    expires: expiresAt,
  });
}

export async function getSession() {
  const cookieStore = await cookies();

  const session = cookieStore.get("session");
  if (session && typeof session.value === "string") {
    return JSON.parse(session.value);
  }

  return session;
}

export async function updateSession(data: Object) {
  // Write update logic here
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}

export async function login(email: string, password: string) {
  const url = process.env.NEXT_PUBLIC_API_END_POINT + "api/users/login";

  return fetch(url, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function logout() {
  await destroySession();
  revalidatePath("/", "layout");
  redirect("/login");
}
