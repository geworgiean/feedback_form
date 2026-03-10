import FeedbackForm from "./components/FeedbackForm";

export default function HomePage () {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-indigo-100 via-purple-100 to-pink-100">
    <div className="max-w-xl mx-auto mt-10 p-6 rounded-xl shadow-lg bg-white/80 backdrop-blur-md">
      <FeedbackForm />
  </div>
</div>
  )
}
