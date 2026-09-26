"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGoogle, FaApple } from "react-icons/fa6";

export default function LoginPage() {
  return (
    <main className="min-h-dvh flex bg-white font-sans">
      {/* LEFT SIDE: Image Cover (Hidden on mobile, shows on desktop) */}
      <div className="hidden lg:block lg:w-1/2 relative bg-gray-200">
        <Image 
          src="/bg.jpg" // Make sure you have your delicious food image here
          alt="African dish cooking"
          fill
          className="object-cover"
        />
        {/* Dark overlay with some text */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Welcome back.
          </h2>
          <p className="text-white/90 text-lg max-w-md">
            Log in to discover new recipes, share your creations, and connect with the Kravings community.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Authentication Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12">
        <div className="max-w-md w-full space-y-8">
          
          {/* Header */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-2">
              Log in to your account
            </h1>
            <p className="text-gray-500">
              Welcome back to Kravings! Please enter your details.
            </p>
          </div>

          {/* Social Sign In Buttons */}
          <div className="space-y-4 pt-4">
            <button 
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 px-4 py-3.5 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              <FaGoogle className="text-xl text-red-500" />
              Log in with Google
            </button>
            
            <button 
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-black text-white px-4 py-3.5 rounded-xl font-semibold hover:bg-gray-900 transition-colors"
            >
              <FaApple className="text-xl" />
              Log in with Apple
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center py-4">
            <div className="grow border-t border-gray-200"></div>
            <span className="shrink-0 mx-4 text-gray-400 text-sm">or do it via email</span>
            <div className="grow border-t border-gray-200"></div>
          </div>

          {/* Email Form */}
          <form 
            className="space-y-5" 
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2" htmlFor="email">
                Email Address
              </label>
              <input 
                type="email" 
                id="email"
                placeholder="you@example.com"
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 focus:border-[#E73F1E] transition-all"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-semibold text-gray-900" htmlFor="password">
                  Password
                </label>
                <Link href="/forgot-password" className="text-sm font-semibold text-[#E73F1E] hover:underline">
                  Forgot password?
                </Link>
              </div>
              <input 
                type="password" 
                id="password"
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 focus:border-[#E73F1E] transition-all"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-[#E73F1E] text-white font-bold px-4 py-4 rounded-xl hover:bg-opacity-90 transition-opacity shadow-lg shadow-[#E73F1E]/30 mt-4"
            >
              Log In
            </button>
          </form>

          {/* Footer Link */}
          <p className="text-center text-gray-600 text-sm pt-4">
            Don&apos;t have an account?{" "}
            <Link href="/auth" className="font-bold text-[#E73F1E] hover:underline">
              Sign up here
            </Link>
          </p>

        </div>
      </div>
    </main>
  );
}