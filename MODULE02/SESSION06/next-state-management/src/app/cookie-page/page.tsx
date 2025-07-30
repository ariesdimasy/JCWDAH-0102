"use server";
import { cookies } from "next/headers";

export default async function CookiePage() {
  const cookieStore = await cookies();
  cookieStore.set("name", "dimas");

  return (
    <div style={{ border: "1px solid red", padding: 10 }}>
      <button> Submit to Cookies </button>
      <button> get name </button>
    </div>
  );
}
