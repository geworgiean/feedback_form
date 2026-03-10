"use server";
import { supabaseServer } from "../../utils/supabase/server";

export async function submitFeedback(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const rating = formData.get("rating") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  const { error } = await supabaseServer.from("feedbacks").insert([
    { name, email, rating, message }
  ]);

  if (error) {
    console.error("Supabase insert error:", error);
    return { success: false, error: "Could not send feedback." };
  }

  return { success: true, message: "Your feedback has been sent successfully!" };
}
