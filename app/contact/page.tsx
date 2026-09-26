"use client";

import { FaEnvelope, FaLocationDot, FaPhone, FaPaperPlane } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <main className="min-h-dvh bg-gray-50 font-sans pb-20">
      {/* 1. HEADER SECTION */}
      <section className="bg-black py-20 px-4 text-center relative overflow-hidden">
        {/* Subtle red glow in the background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-[#E73F1E] opacity-10 blur-[100px]"></div>
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Get in <span className="text-[#E73F1E]">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Have a question, feedback, or a partnership inquiry? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* 2. CONTACT CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          
          {/* LEFT SIDE: Contact Information (Takes up 2 columns out of 5) */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Fill out the form and our team will get back to you within 24 hours. You can also reach us directly using the details below.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email Card */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#FFDD9C]/40 flex items-center justify-center text-[#E73F1E] text-lg">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Us</h4>
                  <p className="text-gray-600 text-sm mt-1">hello@kravings.com</p>
                  <p className="text-gray-600 text-sm">support@kravings.com</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#FFDD9C]/40 flex items-center justify-center text-[#E73F1E] text-lg">
                  <FaLocationDot />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Our Headquarters</h4>
                  <p className="text-gray-600 text-sm mt-1">123 Culinary Avenue</p>
                  <p className="text-gray-600 text-sm">Abuja, FCT, Nigeria</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#FFDD9C]/40 flex items-center justify-center text-[#E73F1E] text-lg">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Call Us</h4>
                  <p className="text-gray-600 text-sm mt-1">+234 (0) 800 123 4567</p>
                  <p className="text-gray-600 text-sm">Mon-Fri, 9am - 5pm WAT</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Contact Form (Takes up 3 columns out of 5) */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    id="firstName"
                    placeholder="John"
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 focus:border-[#E73F1E] transition-all"
                  />
                </div>
                
                {/* Last Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2" htmlFor="lastName">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    id="lastName"
                    placeholder="Doe"
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 focus:border-[#E73F1E] transition-all"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="john@example.com"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 focus:border-[#E73F1E] transition-all"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject"
                  placeholder="How can we help you?"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 focus:border-[#E73F1E] transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea 
                  id="message"
                  rows={5}
                  placeholder="Type your message here..."
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 focus:border-[#E73F1E] transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#E73F1E] text-white font-bold px-4 py-4 rounded-xl hover:bg-opacity-90 transition-opacity shadow-lg shadow-[#E73F1E]/30 mt-4"
              >
                <span>Send Message</span>
                <FaPaperPlane className="text-sm" />
              </button>
            </form>

          </div>
        </div>
      </section>
    </main>
  );
}