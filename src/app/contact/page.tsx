"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, Send, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setSubmitMessage(
        "Your message has been sent successfully! We'll get back to you soon."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);

      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black text-white relative max-w-8xl p-8 overflow-hidden">
      <Link
        href="/"
        className="flex items-center gap-2 px-6 py-3 bg-[#222222] hover:bg-[#333333] transition-colors rounded-full"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-black mb-6">
                Let&apos;s <span className="text-[#e0fe10]">Connect</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Whether you have a question about features, pricing, need a
                demo, or anything else, our team is ready to answer all your
                questions.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-[#222222] rounded-3xl p-6 hover:bg-[#2a2a2a] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e0fe10] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email Us</h3>
                    <p className="text-gray-400 mb-2">
                      We'll respond within 24 hours
                    </p>
                    <a
                      href="mailto:contact.jymfitness@gmail.com"
                      className="text-[#e0fe10] hover:underline"
                    >
                      contact.jymfitness@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-[#222222] rounded-[60px] p-8 md:p-12">
            <h2 className="text-3xl font-black mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-black border border-gray-700 rounded-2xl text-white focus:outline-none focus:border-[#e0fe10] transition-colors placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-black border border-gray-700 rounded-2xl text-white focus:outline-none focus:border-[#e0fe10] transition-colors placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-black border border-gray-700 rounded-2xl text-white focus:outline-none focus:border-[#e0fe10] transition-colors placeholder-gray-500"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-4 bg-black border border-gray-700 rounded-2xl text-white focus:outline-none focus:border-[#e0fe10] transition-colors resize-none placeholder-gray-500"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#e0fe10] text-black font-bold py-4 rounded-full hover:bg-[#d0ee00] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {submitMessage && (
                <div className="bg-[#e0fe10]/20 border border-[#e0fe10] rounded-2xl p-4">
                  <p className="text-[#e0fe10] text-center font-medium">
                    {submitMessage}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <div className="bg-accent h-150 overflow-hidden -mt-162 p-8 rounded-[80px]"></div>
    </div>
  );
}
