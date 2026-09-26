import Image from "next/image";
import Link from "next/link";
import { 
  FaArrowRightLong, 
  FaFire, 
  FaEarthAfrica, 
  FaUsers,
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaYoutube
} from "react-icons/fa6";

const featuredDishes = [
  { id: 1, name: "Spicy Jollof & Plantain", region: "West Africa", image: "/jollof.jpg" },
  { id: 2, name: "Rich Bunny Chow", region: "South Africa", image: "/bunny-chow.jpg" },
  { id: 3, name: "Authentic Injera & Wat", region: "East Africa", image: "/injera.jpg" },
];

export default function Home() {
  return (
    <main className="min-h-dvh bg-gray-50">
      {/* 1. HERO SECTION */}
      <section className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="min-h-dvh bg-black/60 text-white flex flex-col justify-center">
          <div className="lg:w-1/2 mx-auto space-y-6 max-md:p-5 text-center">
            <h1 className="md:text-6xl text-4xl font-bold">Africa's Finest Dishes</h1>
            <p className="tracking-wider md:text-lg leading-relaxed">
              Discover and share your dishes with the world on a platform built to connect a global community of food 
              lovers, allowing you to celebrate every unique recipe, exchange homemade flavors, and unite over a shared 
              passion for cooking.
            </p>
            <Link
              href={"/view-recipes"}
              className="bg-white text-black flex items-center mx-auto md:mt-10 w-fit p-2 pr-3 rounded-full gap-3 
              font-semibold hover:scale-105 transition-transform">
              <span className="pl-4">See Our Dishes</span>
              <button className="text-white w-8 h-8 rounded-full flex items-center justify-center bg-[#E73F1E]">
                <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FEATURED DISHES SECTION */}
      <section id="featured" className="py-24 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-3">Trending on Kravings</h2>
            <p className="text-gray-600">The most loved recipes this week by our community.</p>
          </div>
          <Link href="/view-recipes/" className="hidden md:flex font-semibold hover:underline text-[#E73F1E]">
            View full menu &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <div key={dish.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-gray-100">
              <div className="h-60 w-full relative bg-gray-200 overflow-hidden">
                <Image 
                  src="/bg.jpg" 
                  alt={dish.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase text-[#E73F1E] bg-[#FFDD9C]">
                  {dish.region}
                </span>
                <h3 className="text-xl font-bold mt-4 mb-2">{dish.name}</h3>
                <Link href={`/view-recipes/${dish.id}`} className="text-gray-500 text-sm hover:text-black flex items-center gap-2">
                  View Recipe <FaArrowRightLong className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HOW IT WORKS / COMMUNITY BANNER */}
      <section className="py-20 px-4 bg-[#FFDD9C]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">More Than Just Recipes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mb-4 bg-[#E73F1E]">
                <FaEarthAfrica />
              </div>
              <h4 className="font-bold text-lg mb-2">Explore the Continent</h4>
              <p className="text-gray-800 text-sm text-center">From Lagos to Cape Town, discover authentic flavors from every region.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mb-4 bg-[#E73F1E]">
                <FaFire />
              </div>
              <h4 className="font-bold text-lg mb-2">Share Your Kravings</h4>
              <p className="text-gray-800 text-sm text-center">Upload your family recipes and let the world taste your heritage.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mb-4 bg-[#E73F1E]">
                <FaUsers />
              </div>
              <h4 className="font-bold text-lg mb-2">Join the Community</h4>
              <p className="text-gray-800 text-sm text-center">Connect with food lovers, review dishes, and organize meetups.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRE-FOOTER CTA */}
      <section className="py-16 px-4 text-center bg-[#E73F1E]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to start cooking?</h2>
          <p className="text-white/90 mb-8 md:text-lg">
            Join thousands of food lovers sharing their favorite African recipes every single day.
          </p>
          <Link 
            href="/signup" 
            className="inline-block bg-white text-[#E73F1E] px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
          >
            Create Your Free Account
          </Link>
        </div>
      </section>

      
    </main>
  );
}