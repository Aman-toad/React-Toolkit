"use client"
import { useState } from "react"
import StarField from "../components/StarBackground";
import Navigation from "../components/Navbar";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage("Thank you for your message! I'll get back to you soon.")
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitting(false)

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(""), 5000)
    }, 1000)
  }

  return (
    <div className="relative min-h-screen">
      <StarField />
      <div className="min-h-screen">
        <Navigation />
        <div className="min-h-screen text-white flex items-center justify-center p-6">
          <div className="w-full max-w-3xl">
            <h1 className="text-6xl font-normal mb-14 text-center">Get in touch</h1>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-4">
                <label htmlFor="name" className="block text-xl text-gray-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full bg-[#111] rounded-xl p-4 text-xl border border-slate-950 focus:border-gray-500 focus:outline-none placeholder:text-gray-600 opacity-80"
                />
              </div>

              <div className="space-y-4">
                <label htmlFor="email" className="block text-xl text-gray-400">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-[#111] rounded-xl p-4 text-xl border border-slate-950  focus:border-gray-500 focus:outline-none placeholder:text-gray-600 opacity-80"
                />
              </div>

              <div className="space-y-4">
                <label htmlFor="message" className="block text-xl text-gray-400">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                  rows={6}
                  className="w-full bg-[#111] rounded-xl p-4 text-xl border border-slate-950  focus:border-gray-500 focus:outline-none placeholder:text-gray-600 resize-none opacity-80"
                />
              </div>

              <div className=" space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white hover:bg-gray-200 text-black px-6 py-2 rounded-full text-xl font-medium inline-flex items-center justify-center gap-2 transition-all duration-300 ease-in-out disabled:opacity-50 min-w-[150px] h-[55px]"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>

                {submitMessage && <p className="text-green-700 text-lg text-center">{submitMessage}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}
