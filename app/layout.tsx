import type { Metadata } from "next";
import { Slabo_13px, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";

const slabo = Slabo_13px({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-slabo",
});

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Kravings - Africa's Touch",
  description: "A place to discover and enjoy authentic African cuisines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", slabo.variable, "font-sans", geist.variable)}>
      <body className={`${slabo.className} min-h-dvh flex flex-col`}>

        <Providers>
          <Navbar />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </Providers>

      </body>
    </html>
  );
}