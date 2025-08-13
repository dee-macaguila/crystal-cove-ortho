import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Crystal Cove Orthodontics - Beautiful Smiles Start Here",
  description:
    "Experience exceptional orthodontic care at Crystal Cove Orthodontics. We offer traditional braces, clear aligners, and early treatment for patients of all ages in Newport Beach, CA.",
  keywords:
    "orthodontics, braces, clear aligners, Newport Beach, Crystal Cove, orthodontist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
