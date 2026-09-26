import Image from "next/image";
import { FaLocationDot, FaLink, FaUtensils, FaUserPlus } from "react-icons/fa6";

export default function ProfilePage() {
  // Mock data for the profile
  const profile = {
    name: "Amina Bello",
    handle: "@aminacooks",
    bio: "Passionate home chef specializing in West African cuisine. I love taking classic recipes and giving them a fresh, modern twist. Let's cook together! 🌶️🥘",
    location: "Lagos, Nigeria",
    website: "aminacooks.com",
    stats: {
      recipes: 24,
      followers: 1205,
      following: 150,
    },
  };

  const userRecipes = [
    { id: 1, title: "Smoky Party Jollof", time: "1h 30m" },
    { id: 2, title: "Rich Egusi Soup", time: "45m" },
    { id: 3, title: "Crispy Akara", time: "25m" },
    { id: 4, title: "Suya Spice Skewers", time: "40m" },
  ];

  return (
    <main className="min-h-dvh bg-gray-50 pb-20 font-sans">
      {/* 1. COVER PHOTO */}
      <div className="relative w-full h-48 md:h-64 lg:h-80 bg-gray-900">
        <Image
          src="/bg.jpg"
          alt="Profile cover"
          fill
          className="object-cover opacity-60"
        />
      </div>

      {/* 2. PROFILE INFO SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10 -mt-16 md:-mt-24 mb-10">
          
          {/* Header Row: Avatar & Follow Button */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-md bg-gray-200 shrink-0 -mt-16
             md:-mt-20 overflow-hidden">
              <Image
                src="/avatar.jpg"
                alt={profile.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Pure Server-Side Button */}
            <button className="flex items-center justify-center gap-2 px-8 py-2.5 rounded-full font-bold transition-all bg-[#E73F1E]
             text-white border-2 border-[#E73F1E] hover:bg-opacity-90 shadow-md shadow-[#E73F1E]/20">
              <FaUserPlus className="text-sm" />
              Follow
            </button>
          </div>

          {/* User Details */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              {profile.name}
            </h1>
            <p className="text-gray-500 font-medium mb-4">{profile.handle}</p>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
              {profile.bio}
            </p>
          </div>

          {/* Location and Website */}
          <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-8 font-medium">
            <div className="flex items-center gap-1.5">
              <FaLocationDot className="text-gray-400" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FaLink className="text-gray-400" />
              <a href="#" className="text-[#E73F1E] hover:underline">
                {profile.website}
              </a>
            </div>
          </div>

          {/* Statistics */}
          <div className="flex items-center gap-8 border-t border-gray-100 pt-6">
            <div className="text-center sm:text-left">
              <p className="text-2xl font-bold text-gray-900">{profile.stats.recipes}</p>
              <p className="text-gray-500 text-sm font-medium">Recipes</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-2xl font-bold text-gray-900">
                {profile.stats.followers.toLocaleString()}
              </p>
              <p className="text-gray-500 text-sm font-medium">Followers</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-2xl font-bold text-gray-900">{profile.stats.following}</p>
              <p className="text-gray-500 text-sm font-medium">Following</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RECIPES GRID */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8 border-b border-gray-200 mb-8">
          <button className="text-[#E73F1E] border-b-2 border-[#E73F1E] pb-3 font-bold text-lg flex items-center gap-2">
            <FaUtensils />
            Recipes
          </button>
          <button className="text-gray-500 hover:text-gray-900 pb-3 font-bold text-lg transition-colors">
            Saved
          </button>
          <button className="text-gray-500 hover:text-gray-900 pb-3 font-bold text-lg transition-colors">
            Collections
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {userRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
            >
              <div className="h-40 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-[#E73F1E] transition-colors">
                  {recipe.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {recipe.time} • By {profile.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
