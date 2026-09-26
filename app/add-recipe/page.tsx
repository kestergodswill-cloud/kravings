import { auth } from "@/auth";
import RecipeClient from "./add-recipe";
import { redirect } from "next/navigation"

export default async function AddRecipe () {
    const session = await auth()
      if (!session) (
         redirect("/auth")  

      )
    return (
        <main>
            <RecipeClient session = { session }/>
        </main>
    )
}