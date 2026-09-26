import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import Link from "next/link";
import { FaClock, FaFireBurner, FaUtensils, FaListOl, FaArrowLeft } from "react-icons/fa6";

export default async function RecipeDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  let recipe: any = null;

  try {
    const docRef = doc(db, "recipes", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      recipe = { id: docSnap.id, ...docSnap.data() };
    }
  } catch (error) {
    console.error("Error fetching recipe details:", error);
  }

  // Handle case where recipe is not found or deleted
  if (!recipe) {
    return (
      <main className="min-h-dvh bg-gray-50 flex flex-col items-center justify-center p-6 font-sans">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Recipe Not Found</h1>
          <p className="text-gray-500 mb-6">This recipe may have been removed or doesn't exist.</p>
          <Link 
            href="/recipes" 
            className="inline-block bg-[#E73F1E] text-white font-bold px-6 py-3 rounded-xl hover:bg-opacity-90 transition-all shadow-md shadow-[#E73F1E]/20"
          >
            Back to Community Feed
          </Link>
        </div>
      </main>
    );
  }

  // Parse ingredients and instructions cleanly
  const ingredientsList = typeof recipe.ingredients === 'string' 
    ? recipe.ingredients.split(',').map((i: string) => i.trim()).filter(Boolean)
    : (recipe.ingredients || []);

  const instructionsList = typeof recipe.instructions === 'string'
    ? recipe.instructions.split(/[\n,]/).map((i: string) => i.trim()).filter(Boolean)
    : (recipe.instructions || []);

  const hasValidImage = recipe.authorImage && recipe.authorImage.startsWith("http");

  return (
    <main className="min-h-dvh bg-gray-50 font-sans pb-20">
      
      {/* Top Navigation Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 mb-6">
        <Link 
          href="/view-recipes"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#E73F1E] transition-colors bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100"
        >
          <FaArrowLeft /> Back to Recipes
        </Link>
      </div>

      {/* Main Recipe Card */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden p-6 sm:p-12">
          
          {/* Author Header */}
          <div className="flex items-center gap-4 pb-8 border-b border-gray-100 mb-8">
            <div className="w-14 h-14 rounded-full bg-[#E73F1E]/10 relative overflow-hidden shrink-0 border-2 border-white shadow-sm flex items-center justify-center">
              {hasValidImage ? (
                <img 
                  src={recipe.authorImage} 
                  alt={recipe.authorName || "Chef"}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-[#E73F1E] font-bold text-xl">
                  {(recipe.authorName || "C").charAt(0).toUpperCase()}
                </span>
              )}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">{recipe.authorName || "Community Chef"}</h3>
              <p className="text-sm text-gray-500 font-medium">Recipe Creator</p>
            </div>
          </div>

          {/* Recipe Title & Meta */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {recipe.title}
          </h1>

          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2.5 rounded-2xl border border-gray-100">
              <FaFireBurner className="text-[#E73F1E]" />
              <span className="font-semibold text-gray-700">Method: {recipe.method}</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2.5 rounded-2xl border border-gray-100">
              <FaClock className="text-[#E73F1E]" />
              <span className="font-semibold text-gray-700">Duration: {recipe.duration} mins</span>
            </div>
          </div>

          {/* Ingredients Section */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 uppercase tracking-wider text-sm">
              <FaUtensils className="text-[#E73F1E]" /> Ingredients Needed
            </h2>
            <ul className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-3">
              {ingredientsList.map((ing: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#E73F1E] mt-2 shrink-0"></span>
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 uppercase tracking-wider text-sm">
              <FaListOl className="text-[#E73F1E]" /> Step-by-Step Instructions
            </h2>
            <ol className="space-y-4">
              {instructionsList.map((step: string, i: number) => (
                <li key={i} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-xl bg-[#E73F1E]/10 text-[#E73F1E] font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-gray-700 leading-relaxed pt-1">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </article>

    </main>
  );
}