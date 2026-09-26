// components/Footer.tsx
import Link from "next/link";
import { 
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaYoutube
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-12 mb-8">
        
        {/* Brand Col */}
        <div className="md:col-span-1 space-y-4">
          <h3 className="text-2xl font-bold text-[#E73F1E]">Kravings</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            The ultimate platform to discover, share, and celebrate Africa's finest dishes. Connecting food lovers globally.
          </p>
          <div className="flex gap-4 pt-2">
            <Link href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E73F1E] transition-colors">
              <FaXTwitter className="text-sm"/>
            </Link>
            <Link href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E73F1E] transition-colors">
              <FaInstagram className="text-sm"/>
            </Link>
            <Link href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E73F1E] transition-colors">
              <FaFacebookF className="text-sm"/>
            </Link>
            <Link href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E73F1E] transition-colors">
              <FaYoutube className="text-sm"/>
            </Link>
          </div>
        </div>

        {/* Quick Links Col */}
        <div>
          <h4 className="font-bold text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/menu" className="hover:text-white transition-colors">All Recipes</Link></li>
            <li><Link href="/chefs" className="hover:text-white transition-colors">Top Chefs</Link></li>
            <li><Link href="/regions" className="hover:text-white transition-colors">Regional Dishes</Link></li>
            <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
          </ul>
        </div>

        {/* Support Col */}
        <div>
          <h4 className="font-bold text-lg mb-4">Support</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link href="/guidelines" className="hover:text-white transition-colors">Community Guidelines</Link></li>
          </ul>
        </div>

        {/* Newsletter Col */}
        <div>
          <h4 className="font-bold text-lg mb-4">Stay Hungry</h4>
          <p className="text-gray-400 text-sm mb-4">Get the latest recipes and community news sent straight to your inbox.</p>
          <form className="flex flex-col gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#E73F1E]"
            />
            <button 
              type="submit" 
              className="bg-[#E73F1E] text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Copyright Bottom */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>&copy; {new Date().getFullYear()} Kravings. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}