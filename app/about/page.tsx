import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaUtensils, FaEarthAfrica } from "react-icons/fa6";

export default function About() {
  return (
    <main className="min-h-dvh bg-gray-50 font-sans">
      {/* 1. ABOUT HERO SECTION */}
      <section className="bg-black text-white py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#E73F1E] opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 mt-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 sm:mb-8 leading-[1.1]">
            Celebrating Africa's Culinary Heritage
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-medium max-w-3xl mx-auto">
            Kravings is more than just a recipe book. We are a global community dedicated to preserving, sharing, and innovating the diverse flavors of the African continent.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-xl bg-gray-200">
            {/* Replace with an image of people cooking or eating together */}
            <Image 
              src="/bg.jpg" 
              alt="People sharing an African meal" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#E73F1E] mb-3 sm:mb-4">
                Our Story
              </h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                Born out of a love for home.
              </h3>
            </div>
            <div className="space-y-4 sm:space-y-5 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p>
                Every dish tells a story. From the bustling streets of Lagos to the vibrant markets of Marrakesh and the coastal breezes of Cape Town, African cuisine is incredibly rich and diverse. 
              </p>
              <p>
                We started Kravings because we realized how hard it was to find authentic, family-tested recipes online. We wanted to create a space where food lovers could document their heritage, exchange techniques, and make African cuisine accessible to every kitchen in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES SECTION */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFDD9C]/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16 lg:mb-20 text-gray-900 tracking-tight">
            What Drives Us
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* Value 1 */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-[#FFDD9C]/50 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-[#FFDD9C] text-[#E73F1E] flex items-center justify-center text-2xl mb-6 mx-auto">
                <FaUtensils />
              </div>
              <h4 className="font-bold text-xl sm:text-2xl text-gray-900 mb-3 sm:mb-4 tracking-tight">
                Authenticity
              </h4>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We believe in honoring traditional cooking methods while embracing modern twists. Our recipes come from real homes and real families.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-[#FFDD9C]/50 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-[#FFDD9C] text-[#E73F1E] flex items-center justify-center text-2xl mb-6 mx-auto">
                <FaEarthAfrica />
              </div>
              <h4 className="font-bold text-xl sm:text-2xl text-gray-900 mb-3 sm:mb-4 tracking-tight">
                Diversity
              </h4>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Africa is a massive continent with 54 countries, each with its own unique flavor profile. We strive to represent them all.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-[#FFDD9C]/50 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-[#FFDD9C] text-[#E73F1E] flex items-center justify-center text-2xl mb-6 mx-auto">
                <FaHeart />
              </div>
              <h4 className="font-bold text-xl sm:text-2xl text-gray-900 mb-3 sm:mb-4 tracking-tight">
                Community
              </h4>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Food tastes better when shared. We are building a supportive, engaging network of foodies, chefs, and home cooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. JOIN US CTA */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 tracking-tight">
            Be Part of the Journey
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed">
            Whether you are looking for your next dinner idea or want to publish your grandmother's secret stew recipe, there is a place for you at Kravings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full">
            <Link 
              href="/signup" 
              className="w-full sm:w-auto bg-[#E73F1E] text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-opacity-90 transition-opacity shadow-lg"
            >
              Join the Community
            </Link>
            <Link 
              href="/menu" 
              className="w-full sm:w-auto bg-white text-[#E73F1E] border-2 border-[#E73F1E] px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-50 transition-colors"
            >
              Explore Recipes
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}