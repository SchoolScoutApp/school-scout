import { SETTINGS_MOCK } from "@/mocks/settings.mock";
import { getSession } from "./sessions";

export async function getSettings() {
  let settings;
  try {
    const url = process.env.NEXT_PUBLIC_API_END_POINT + "api/settings";
    const session = await getSession();

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + session.token,
      },
    });
    if (!response.ok) {
      throw new Error(
        "500 Internal Server Error: Something went wrong during the request or header parameters"
      );
    }
    if (response.status === 200 && response.ok) {
      if (process.env.NEXT_PUBLIC_IS_MOCK === "TRUE") {
        settings = new Promise((resolve, reject) => {
          setTimeout(() => resolve(SETTINGS_MOCK));
        });
      } else {
        settings = await response.json();
      }
    }

    return settings;
  } catch (e) {
    console.log(e);
  }
}
