import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(Public_Component)/Navbar";
import Footer from "./(Public_Component)/Footer";
import EmailSection from "./(Home_Page_Component)/EmailSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zarrin",
  description: "Zarrin website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-Raleway">
        <Navbar />
        <div className="bg-[#FAFAFA]">
        {children}
        </div>
        <EmailSection />
        <Footer />
        </body>
    </html>
  );
}
