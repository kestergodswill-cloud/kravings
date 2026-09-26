import Link from "next/link";
import Image from "next/image";
import { FaGoogle, FaApple } from "react-icons/fa6";
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

export default async function Auth() {
  const session = await auth()
  // console.log(session)

  if(session){
    redirect("/add-recipe")
  }

  // Toggle this to trueb to see the sign up UI
  const isSignup = false;

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
            Taste the culture.
          </h2>
          <p className="text-white/90 text-lg max-w-md">
            Join thousands of food lovers sharing authentic African recipes every single day.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Authentication Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12">
        <div className="max-w-md w-full space-y-8">
          
          {/* Header */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-2">
              Create an account
            </h1>
            <p className="text-gray-500">
              Welcome to Kravings! Please enter your details.
            </p>
          </div>

          {/* Social Sign In Buttons */}
          <div className="space-y-4 pt-4">
            <form
              action={async () => {
              "use server"
              await signIn("google")
              }}
            >
        
            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 
              px-4 py-3.5 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              <FaGoogle className="text-xl text-red-500" />
              Sign up with Google
            </button>
            </form>

            <button 
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-black text-white px-4 py-3.5 rounded-xl 
              font-semibold hover:bg-gray-900 transition-colors"
            >
              <FaApple className="text-xl" />
              Sign up with Apple
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center py-4">
            <div className="grow border-t border-gray-200"></div>
            <span className="shrink-0 mx-4 text-gray-400 text-sm">or do it via email</span>
            <div className="grow border-t border-gray-200"></div>
          </div>

          {/* Email Form - Removed the onSubmit handler to make it server-compatible */}
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2" htmlFor="name">
                Full Name
              </label>
              <input 
                type="text" 
                id="name"
                name="name"
                placeholder="e.g. John Doe"
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 focus:border-[#E73F1E] transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2" htmlFor="email">
                Email Address
              </label>
              <input 
                type="email" 
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 focus:border-[#E73F1E] transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2" htmlFor="password">
                Password
              </label>
              <input 
                type="password" 
                id="password"
                name="password"
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 focus:border-[#E73F1E] transition-all"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-[#E73F1E] text-white font-bold px-4 py-4 rounded-xl hover:bg-opacity-90 transition-opacity shadow-lg shadow-[#E73F1E]/30 mt-4"
            >
              Create Account
            </button>
          </form>

          {/* Footer Link */}
          <p className="text-center text-gray-600 text-sm pt-4">
            Already have an account?{" "}
            <Link href="/login" className="font-bold text-[#E73F1E] hover:underline">
              Sign in here
            </Link>
          </p>

        </div>
      </div>
    </main>
  );
}