import FeedbackForm from "./components/FeedbackForm";

export default function HomePage () {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Feedback Form</h1>
      <FeedbackForm />
    </div>
  )
}
