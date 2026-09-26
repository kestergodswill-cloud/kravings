"use client"

import Link from "next/link";
import { FaClock, FaFireBurner, FaUtensils, FaListOl, FaTrash } from "react-icons/fa6";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/config/firebase";

export default function RecipesFeedPage({ session }: { session?: any }) {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const handleFetch = async () => {
    try {
      let postArr: any[] = [];
      const querySnapshot = await getDocs(collection(db, "recipes"));
      querySnapshot.forEach((docSnap) => {
        const data = docSnap.data();
        
        // Convert Firebase Timestamp to a readable string if it exists
        let formattedDate = "Recently";
        if (data.createdAt) {
          // Handle Firebase Timestamp or standard JS Date object
          const dateObj = data.createdAt.toDate ? data.createdAt.toDate() : new Date(data.createdAt);
          formattedDate = dateObj.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
          });
        }

        const postObj = {
          id: docSnap.id,
          ...data,
          formattedDate // Attach the real formatted date here
        };
        postArr.push(postObj);
      });
      setRecipes(postArr);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recipes: ", error);
      alert("Something went wrong while loading recipes");
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this recipe?");
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, "recipes", id));
        setRecipes(recipes.filter(recipe => recipe.id !== id));
        alert("Recipe deleted successfully!");
      } catch (error) {
        console.error("Error deleting recipe: ", error);
        alert("Could not delete recipe.");
      }
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <main className="min-h-dvh bg-gray-50 font-sans pb-20">
      
      {/* Hero Section */}
      <section className="bg-black py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Community <span className="text-[#E73F1E]">Recipes</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          Discover, cook, and share authentic dishes from chefs all over the continent.
        </p>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <Link 
            href="/recipes"
            className="bg-[#E73F1E] text-white font-bold px-8 py-3.5 rounded-full hover:bg-opacity-90 transition-all shadow-lg shadow-[#E73F1E]/20"
          >
            View Recipes
          </Link>
          <Link 
            href="/add-recipe"
            className="bg-white text-gray-900 font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all"
          >
            Add Recipe
          </Link>
        </div>
      </section>

      {/* Main Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {loading && (
          <div className="text-center py-20 text-gray-500 font-medium text-lg">
            Loading community recipes...
          </div>
        )}

        {!loading && recipes.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 p-8 max-w-xl mx-auto shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-2">No recipes found</h3>
            <p className="text-gray-500 mb-6">Be the first chef to share a delicious dish with the community!</p>
            <Link 
              href="/add-recipe"
              className="inline-block bg-[#E73F1E] text-white font-bold px-6 py-3 rounded-xl hover:bg-opacity-90 transition-all shadow-md shadow-[#E73F1E]/20"
            >
              Add Recipe
            </Link>
          </div>
        )}

        {!loading && recipes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => {
              const ingredientsList = typeof recipe.ingredients === 'string' 
                ? recipe.ingredients.split(',').map((i: string) => i.trim()).filter(Boolean)
                : (recipe.ingredients || []);

              const instructionsList = typeof recipe.instructions === 'string'
                ? recipe.instructions.split(/[\n,]/).map((i: string) => i.trim()).filter(Boolean)
                : (recipe.instructions || []);

              const hasValidImage = recipe.authorImage && recipe.authorImage.startsWith("http");

              return (
                <article 
                  key={recipe.id} 
                  className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  {/* 1. Recipe Header */}
                  <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#E73F1E]/10 relative overflow-hidden shrink-0 border-2 border-white shadow-sm flex items-center justify-center">
                        {hasValidImage ? (
                          <img 
                            src={recipe.authorImage} 
                            alt={recipe.authorName || "Chef"}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-[#E73F1E] font-bold text-lg">
                            {(recipe.authorName || "C").charAt(0).toUpperCase()}
                          </span>
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base">{recipe.authorName || "Community Chef"}</h3>
                        {/* Real submission date displayed here */}
                        <p className="text-xs text-gray-500 font-medium">{recipe.formattedDate}</p>
                      </div>
                    </div>

                    {/* Delete Button (Only shows if logged-in user matches authorEmail) */}
                    {session?.user?.email && session.user.email === recipe.authorEmail && (
                      <button 
                        onClick={() => handleDelete(recipe.id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200 focus:outline-none"
                        title="Delete Recipe"
                      >
                        <FaTrash className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* 2. Recipe Preview Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-4 line-clamp-1">
                        {recipe.title}
                      </h2>

                      <div className="flex flex-wrap gap-3 mb-6">
                        <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100 text-sm">
                          <FaFireBurner className="text-[#E73F1E]" />
                          <span className="font-semibold text-gray-700">{recipe.method}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100 text-sm">
                          <FaClock className="text-[#E73F1E]" />
                          <span className="font-semibold text-gray-700">{recipe.duration} mins</span>
                        </div>
                      </div>

                      {/* 3. Ingredients & Instructions Sneak Peek */}
                      <div className="bg-gray-50 rounded-2xl p-4 mb-6 border border-gray-100 space-y-4">
                        <div>
                          <h4 className="font-bold text-gray-900 text-xs mb-2 flex items-center gap-1.5 uppercase tracking-wider">
                            <FaUtensils className="text-[#E73F1E]" /> Ingredients
                          </h4>
                          <ul className="text-gray-600 text-xs space-y-1.5">
                            {ingredientsList.slice(0, 2).map((ing: string, i: number) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1 shrink-0"></span>
                                <span className="line-clamp-1">{ing}</span>
                              </li>
                            ))}
                            {ingredientsList.length > 2 && (
                              <li className="text-gray-400 italic font-medium">
                                + {ingredientsList.length - 2} more items...
                              </li>
                            )}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-gray-900 text-xs mb-2 flex items-center gap-1.5 uppercase tracking-wider">
                            <FaListOl className="text-[#E73F1E]" /> Instructions
                          </h4>
                          <p className="text-gray-600 text-xs line-clamp-2 leading-relaxed">
                            <span className="font-semibold text-gray-800">1.</span> {instructionsList[0] || "No instructions provided."}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 4. Redirect Link to Full Recipe Page */}
                    <Link 
                      href={`/view-recipes/${recipe.id}`}
                      className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white font-bold px-4 py-3.5 rounded-2xl hover:bg-[#E73F1E] hover:shadow-md hover:shadow-[#E73F1E]/20 transition-all duration-300 text-sm mt-4"
                    >
                      Read Full Recipe &rarr;
                    </Link>

                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
      
    </main>
  );
}