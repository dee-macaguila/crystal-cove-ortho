import { Nunito, Great_Vibes, Dancing_Script } from "next/font/google";
import "./globals.css";
import { FloatingConsultButton } from "@/components/FloatingConsultButton";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "700"],
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
        className={`${nunito.variable} ${greatVibes.variable} ${dancingScript.variable} antialiased overflow-x-hidden`}
        style={{ fontFamily: 'var(--font-nunito)' }}
        suppressHydrationWarning={true}
      >
        {children}
        <FloatingConsultButton />
      </body>
    </html>
  );
}
