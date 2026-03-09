"use client";

import { useFormStatus } from "react-dom";
import { submitFeedback } from "../actions/submitFeedback";

export default function FeedbackForm() {
  const { pending } = useFormStatus();
  

  return (
    <form action={submitFeedback} className="space-y-4 p-4 bg-white rounded">
      <input type="text" name="name" required placeholder="Անուն" className="w-full border p-2 rounded" />
      <input type="email" name="email" placeholder="Էլ. հասցե" className="w-full border p-2 rounded" />
      <select name="rating" className="w-full border p-2 rounded">
        <option value="">Գնահատական</option>
        {[1,2,3,4,5].map(r => <option key={r} value={r}>{r}</option>)}
      </select>
      <textarea name="message" required placeholder="Արձագանք" className="w-full border p-2 rounded" />
      <button type="submit" disabled={pending} className="bg-blue-500 text-white p-2 rounded">
        {pending ? "Ուղարկվում է..." : "Ուղարկել"}
      </button>
    </form>
  );
}
