import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";

const faqs = [
  {
    question: "What exactly is Kravings?",
    answer: "Kravings is a global community platform dedicated to celebrating African cuisine. It's a place where food lovers can discover authentic recipes, share their own family dishes, and connect over a shared passion for the continent's diverse flavors."
  },
  {
    question: "Is it free to join and use?",
    answer: "Yes! Creating an account, browsing recipes, and sharing your own dishes with the community is 100% free."
  },
  {
    question: "Can I upload my own family recipes?",
    answer: "Absolutely. We encourage it! Once you create an account, you can easily upload your recipes, complete with photos, ingredients, step-by-step instructions, and the story behind the dish."
  },
  {
    question: "I don't live in Africa. Will I be able to find the ingredients?",
    answer: "We know sourcing authentic ingredients can be tricky depending on where you live. Our recipe creators often include easily accessible substitutes for local spices and ingredients so you can recreate the magic wherever you are."
  },
  {
    question: "How do I save recipes for later?",
    answer: "Simply tap the heart icon on any recipe you love while logged in. It will be saved directly to your personal 'Kravings' collection so you can easily pull it up the next time you are in the kitchen."
  },
];

export default function FAQ() {
  return (
    <main className="min-h-dvh bg-gray-50 pb-20">
      {/* 1. HEADER SECTION */}
      <section className="bg-black py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Frequently Asked <span className="text-[#E73F1E]">Questions</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Everything you need to know about joining the Kravings community and sharing your favorite African dishes.
        </p>
      </section>

      {/* 2. FAQ ACCORDION SECTION */}
      <section className="max-w-3xl mx-auto px-4 mt-16">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10">
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details 
                key={index} 
                className="group border-b border-gray-100 pb-6 last:border-0 last:pb-0"
              >
                {/* The Question */}
                <summary className="flex justify-between items-center font-bold text-lg md:text-xl text-gray-900 cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:text-[#E73F1E] transition-colors">
                  {faq.question}
                  {/* The Icon (Rotates when details is open) */}
                  <span className="transition duration-300 group-open:-rotate-180 text-[#E73F1E] bg-[#FFDD9C]/50 p-2 rounded-full">
                    <FaChevronDown className="w-4 h-4" />
                  </span>
                </summary>
                
                {/* The Answer */}
                <p className="text-gray-600 mt-4 leading-relaxed md:text-lg pr-8">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* 3. STILL HAVE QUESTIONS CTA */}
      <section className="max-w-3xl mx-auto px-4 mt-16 text-center">
        <div className="bg-[#FFDD9C]/30 rounded-3xl p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h2>
          {/* FIXED: Replaced raw apostrophes with Next.js safe HTML entities */}
          <p className="text-gray-600 mb-6">
            Can&apos;t find the answer you&apos;re looking for? Our team is happy to help you get started.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#E73F1E] text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-opacity"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </main>
  );
}