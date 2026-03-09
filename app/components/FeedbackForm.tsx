"use client";
import { useFormStatus } from "react-dom";
import { submitFeedback } from "../actions/submitFeedback";
import { useEffect, useState } from "react";


  export default function FeedbackForm() {
  const { pending } = useFormStatus();
  
  return (
    <form 
        action={submitFeedback} 
        className="space-y-4 p-6 rounded-xl shadow-lg bg-white/80 backdrop-blur-md">
          <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent tracking-wide drop-shadow-md text-center">Feedback</h1>
      <input 
        type="text" 
        name="name" 
        required 
        placeholder="Name" 
        className="w-full border font-semibold border-purple-700 p-3 text-black font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-900 transition-transform duration-300 ease-in-out focus:scale-102" 
        />
      <input 
        type="email" 
        name="email"
        required
        placeholder="Email" 
        className="w-full border font-semibold border-purple-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-900 transition-transform duration-300 ease-in-out focus:scale-102" />
      <select 
        name="rating" 
        className="w-full font-semibold text-gray-700 border border-purple-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-900 transition-transform duration-300 ease-in-out focus:scale-105 bg-white/80 backdrop-blur-md" >
        <option value="" className="font-semibold" >Rating</option>
        {[1,2,3,4,5].map(r => <option 
                                key={r} 
                                value={r}
                                className=" hover:bg-purple-100 hover:text-black transition-colors duration-200 font-semibold"
                                >
                                  {r}
                                </option>)}
      </select>
      <textarea 
        name="message" 
        required 
        placeholder="Textarea" 
        className="w-full border font-semibold border-purple-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-900 transition-transform duration-300 ease-in-out focus:scale-102" 
      />
      <SubmitButton />
    </form>
  );
}

  function SubmitButton() {
    const { pending } = useFormStatus()
    const [delayedPending, setDelayedPending] = useState(false);

    useEffect(() => {
      if (pending) {
        setDelayedPending(true);
      } else if (delayedPending) {
        const timer = setTimeout(() => setDelayedPending(false), 1000);
        return () => clearTimeout(timer)
      }
    }, [pending]
  )

    return (
      <button
        type="submit"
        disabled={pending || delayedPending}
        className="w-full bg-purple-600 hover:bg-purple-900 text-white font-medium p-3 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 "      >
        {pending || delayedPending ? "Sending..." : "Send"}
      </button>
    );
  }
