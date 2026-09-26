
import { auth } from "@/auth";
import ViewClient from "./view-recipes";
import { redirect } from "next/navigation";




export default async function ViewRecipes () {
  const session = await auth()

  if(!session){
    redirect("/auth")
  }

    return (
        <main>
            <ViewClient session={session}/>
        </main>
    )
}