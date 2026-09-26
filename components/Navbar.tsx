"use client"

import Image from "next/image";
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { IoMdRestaurant } from "react-icons/io";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react"; 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export default function Navbar () {
    const [navOpen, setNavOpen] = useState(false)

    const {data: session} = useSession()

    const navLinks = [
        { label: "Home", 
            url: "/" 
            },

        { label: "About",
             url: "/about"
             },


        { label: "Contact",
             url: "/contact" 
            },

        { label: "FAQs",
             url: "/faqs"
             },
    ]
    
    return (
        <header className="sticky top-0 w-full bg-white shadow-sm border-b border-gray-100 z-50">
            <div className="flex items-center justify-between lg:px-20 px-4 py-3">
                {/* LOGO */}
                <Link href={"/"} className="flex items-center z-50" onClick={() => setNavOpen(false)}>
                    <Image
                        src={"/logo.jpg"}
                        alt="logo"
                        width={800}
                        height={800}
                        className="w-12 h-12 lg:w-15 lg:h-15 object-contain"
                    />
                    <p className="text-lg italic text-gray-800 ml-2 lg:ml-0">Kravings</p>
                </Link>

                {/* DESKTOP LINKS */}
                <div className="ml-auto flex items-center gap-6 max-lg:hidden">
                    {
                        navLinks.map((item, i)=> (
                            <article key={i} className="group">
                                <Link href={item.url} className="text-lg text-gray-700 font-medium">{item.label}</Link>
                                <div className="h-1 w-full bg-transparent group-hover:bg-[#E73F1E] transition-all duration-500"></div>
                            </article>
                        ))
                    }
                </div>

                {/* DESKTOP BUTTONS & PROFILE */}
                <div className="flex items-center gap-6 ml-6 max-lg:hidden">
                    <Link href={"/view-recipes"} className="bg-[#E73F1E] border-[#E73F1E] px-6 py-1 rounded-full text-white border text-lg hover:bg-opacity-90 transition-opacity">
                        View Recipe
                    </Link> 

                    {session ? (
                        <DropdownMenu modal={false}>
                             <DropdownMenuTrigger className="focus:outline-none">
                                <Avatar className="cursor-pointer border-2 border-transparent hover:border-[#E73F1E] transition-colors w-10 h-10">
                                    <AvatarImage src={session?.user?.image || undefined} />
                                    <AvatarFallback className="bg-gray-100 text-[#E73F1E] font-bold">
                                        {session?.user?.name?.slice(0,2).toUpperCase() || "U"}
                                    </AvatarFallback>
                                </Avatar>
                             </DropdownMenuTrigger>
                             
                             <DropdownMenuContent align="end" className="w-48 z-50">
                                <DropdownMenuGroup>
                                    <DropdownMenuItem> 
                                        <Link href="/add-recipe" className="cursor-pointer w-full">Add Recipe</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem> 
                                        <Link href="/profile" className="cursor-pointer w-full">View Profile</Link>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                
                                <DropdownMenuItem 
                                    onClick={() => signOut()} 
                                    className="text-red-500 cursor-pointer font-medium"
                                > 
                                    Log out
                                </DropdownMenuItem>
                             </DropdownMenuContent>
                         </DropdownMenu>
                     ) : (
                        <Link href={"/auth"} className="flex items-center border gap-1 px-6 py-1 rounded-full border-gray-700 text-lg hover:bg-gray-50 transition-colors">
                            Account <FaRegCircleUser />
                        </Link>
                     )}
                </div>

                {/* MOBILE MENU TOGGLE BUTTON */}
                <button onClick={()=> setNavOpen(!navOpen)} className="lg:hidden z-50 text-3xl text-gray-800 focus:outline-none p-2">
                    {navOpen ? <IoMdRestaurant /> : <IoIosMenu />}
                </button>
            </div>

            {/* MOBILE MENU DROPDOWN */}
            {navOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full h-[calc(100dvh-70px)] bg-white overflow-y-auto z-40 border-t border-gray-100 shadow-xl">
                    <div className="flex pt-10 flex-col gap-8 items-center pb-20">
                        {
                            navLinks.map((item, i)=> (
                                <Link key={i} href={item.url} className="text-xl font-medium text-gray-800 hover:text-[#E73F1E]" onClick={() => setNavOpen(false)}>
                                    {item.label}
                                </Link>
                            ))
                        }

                        <div className="flex flex-col items-center gap-6 mt-8 w-full px-6">
                            <Link href={"/view-recipes"} onClick={() => setNavOpen(false)} className="w-full text-center py-3 rounded-full text-white border border-[#E73F1E] bg-[#E73F1E] text-lg font-medium hover:bg-opacity-90 transition-opacity">
                                View Recipe
                            </Link>

                            {session ? (
                                <DropdownMenu modal={false}>
                                     <DropdownMenuTrigger className="focus:outline-none flex items-center justify-center gap-3 border border-gray-200 w-full py-3 rounded-full hover:bg-gray-50 transition-colors">
                                        <Avatar className="w-8 h-8">
                                            <AvatarImage src={session?.user?.image || undefined} />
                                            <AvatarFallback className="text-sm bg-gray-100 text-[#E73F1E] font-bold">
                                                {session?.user?.name?.slice(0,2).toUpperCase() || "U"}
                                            </AvatarFallback>
                                        </Avatar>
                                        <span className="font-semibold text-gray-800 text-lg">My Account</span>
                                     </DropdownMenuTrigger>
                                     
                                     <DropdownMenuContent align="center" className="w-11/12 max-w-xs z-50 mt-2">
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem> 
                                                <Link href="/add-recipe" className="cursor-pointer w-full text-base py-3" onClick={() => setNavOpen(false)}>Add Recipe</Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem> 
                                                <Link href="/profile" className="cursor-pointer w-full text-base py-3" onClick={() => setNavOpen(false)}>View Profile</Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                        <DropdownMenuSeparator />
                                        
                                        <DropdownMenuItem 
                                            onClick={() => { signOut(); setNavOpen(false); }} 
                                            className="text-red-500 cursor-pointer font-medium text-base py-3"
                                        > 
                                            Log out
                                        </DropdownMenuItem>
                                     </DropdownMenuContent>
                                 </DropdownMenu>
                            ) : (
                                <Link href={"/auth"} onClick={() => setNavOpen(false)} className="flex justify-center items-center border gap-2 w-full py-3 rounded-full border-gray-700 text-lg font-medium hover:bg-gray-50 transition-colors">
                                    Account <FaRegCircleUser />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}