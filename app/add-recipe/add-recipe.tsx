"use client"

import { collection, addDoc } from "firebase/firestore"; 
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaUtensils, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import { db } from "@/config/firebase"; 
import { useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function RecipeClient({ session }: { session?: any }) { 

    const [processing, setProcessing] = useState(false);
    const [showSuccessDialog, setShowSuccessDialog] = useState(false); 

    const initialValues = {
         title: "",
         ingredients: "",
         method: "",
         duration: "",
         instructions: "",
    };
   
    const validationSchema = Yup.object({
        title: Yup.string().max(50, "Max of 50 characters").required("Recipe name is required"),
        ingredients: Yup.string().required("Ingredients are required"),
        method: Yup.string().required("Cooking method is required"),
        duration: Yup.number().typeError("Duration must be a number").required("Duration is required"),
        instructions: Yup.string().required("Instructions are required")
    });

    return (
        <main className="min-h-dvh bg-gray-50 py-12 px-4 sm:px-6 font-sans flex justify-center items-start relative">
            <div className="max-w-2xl w-full bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-12">
                
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-[#E73F1E]/10 text-[#E73F1E] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                        <FaUtensils />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
                        Add New Recipe
                    </h1>
                    <p className="text-gray-500">
                        Share your delicious African dishes with the community.
                    </p>
                </div>

                <Formik 
                    initialValues={initialValues} 
                    validationSchema={validationSchema}
                    onSubmit={async (values, { resetForm }) => {
                        try {
                            setProcessing(true);
                            
                            const docRef = await addDoc(collection(db, "recipes"), {
                                title: values.title,
                                ingredients: values.ingredients,
                                method: values.method,
                                duration: values.duration,
                                instructions: values.instructions,
                                createdAt: new Date(),
                                authorName: session?.user?.name || "Anonymous Chef",
                                authorEmail: session?.user?.email || "No Email",
                                authorImage: session?.user?.image || "/avatar.jpg"
                            });
                            
                            console.log("Recipe successfully saved with ID: ", docRef.id);
                            
                            resetForm();
                            setProcessing(false);
                            setShowSuccessDialog(true);
                            
                        } catch (error) {
                            console.error("Error saving recipe: ", error);
                            setProcessing(false);
                        }
                    }}
                >
                    {() => (
                        <Form className="space-y-6">
                            
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2" htmlFor="title">
                                    Recipe Name
                                </label>
                                <Field 
                                    type="text" 
                                    id="title"
                                    name="title" 
                                    placeholder="e.g., Authentic Smoky Party Jollof"
                                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 focus:border-[#E73F1E] transition-all"
                                />
                                <ErrorMessage name='title' component="p" className='text-red-500 text-sm mt-1.5 font-medium'/>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2" htmlFor="ingredients">
                                    Ingredients
                                </label>
                                <Field 
                                    as="textarea"
                                    rows={4}
                                    id="ingredients"
                                    name="ingredients" 
                                    placeholder="e.g., 3 cups rice, 6 tomatoes, 1 cup oil (separate with commas)"
                                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 focus:border-[#E73F1E] transition-all resize-none"
                                />
                                <ErrorMessage name='ingredients' component="p" className='text-red-500 text-sm mt-1.5 font-medium'/>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2" htmlFor="method">
                                        Cooking Method
                                    </label>
                                    <Field 
                                        type="text" 
                                        id="method"
                                        name="method" 
                                        placeholder="e.g., Stovetop Steaming"
                                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 focus:border-[#E73F1E] transition-all"
                                    />
                                    <ErrorMessage name='method' component="p" className='text-red-500 text-sm mt-1.5 font-medium'/>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2" htmlFor="duration">
                                        Duration (Minutes)
                                    </label>
                                    <Field 
                                        type="number" 
                                        id="duration"
                                        name="duration" 
                                        placeholder="e.g., 45"
                                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 focus:border-[#E73F1E] transition-all"
                                    />
                                    <ErrorMessage name='duration' component="p" className='text-red-500 text-sm mt-1.5 font-medium'/>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2" htmlFor="instructions">
                                    Cooking Instructions
                                </label>
                                <Field 
                                    as="textarea"
                                    rows={5}
                                    id="instructions"
                                    name="instructions" 
                                    placeholder="Step 1: Blend tomatoes... Step 2: Heat oil... (separate steps with commas or new lines)"
                                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 focus:border-[#E73F1E] transition-all resize-none"
                                />
                                <ErrorMessage name='instructions' component="p" className='text-red-500 text-sm mt-1.5 font-medium'/>
                            </div>

                            <button 
                                disabled={processing}
                                type="submit"
                                className={`w-full bg-[#E73F1E] text-white font-bold text-lg px-6 py-4 rounded-xl hover:bg-opacity-90 transition-all shadow-lg shadow-[#E73F1E]/20 mt-4 ${processing ? "opacity-70 cursor-not-allowed" : ""}`}
                            >
                                {processing ? ( 
                                    <span className="flex items-center gap-2 w-full justify-center">
                                        <FaSpinner className="animate-spin" /> Submitting....
                                    </span>
                                ) : ( 
                                    <span>Submit Recipe</span>
                                )}
                            </button>

                        </Form>
                    )}
                </Formik>
            </div>

            <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
                <DialogContent className="sm:max-w-md text-center p-8 rounded-3xl">
                    <DialogHeader className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center text-4xl mb-4">
                            <FaCheckCircle />
                        </div>
                        <DialogTitle className="text-2xl font-bold text-gray-900">
                            Recipe Submitted!
                        </DialogTitle>
                        <DialogDescription className="text-gray-500 text-base mt-2">
                            Your recipe was successfully added. Thank you for sharing with the Kravings community!
                        </DialogDescription>
                    </DialogHeader>
                    
                    <DialogFooter className="sm:justify-center mt-6 w-full">
                        <DialogClose>
                            <button
                                type="button"
                                className="w-full bg-[#E73F1E] text-white font-bold text-lg px-5 py-3 rounded-xl hover:bg-opacity-90 transition-all shadow-md shadow-[#E73F1E]/20"
                            >
                                Awesome!
                            </button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            
        </main>
    );
}