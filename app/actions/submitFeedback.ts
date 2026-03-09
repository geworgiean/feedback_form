"use server";
import { supabaseServer } from "../../utils/supabase/server";

export async function submitFeedback(formData: FormData): Promise<void> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const ratingValue = formData.get("rating");
  const rating = ratingValue ? Number(ratingValue) : null;
  const message = formData.get("message")?.toString().trim();

  if (!name || !message) {
    throw new Error("Անունը և հաղորդագրությունը պարտադիր են։");
  }

  const { error } = await supabaseServer.from("feedbacks").insert({
    name,
    email,
    rating,
    message,
  });

  if (error) {
    throw new Error(error.message);
  }
}
