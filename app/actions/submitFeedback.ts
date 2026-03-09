"use server";
import { supabaseServer } from "../../utils/supabase/server";



export async function submitFeedback(formData: FormData) {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const rating = Number(formData.get("rating"));
  const message = formData.get("message")?.toString().trim();

  if (!name || !message) {
    return { error: "Անունը և հաղորդագրությունը պարտադիր են։" };
  }

  const { error } = await supabaseServer.from("feedbacks").insert({
    name,
    email,
    rating,
    message,
  });

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}
