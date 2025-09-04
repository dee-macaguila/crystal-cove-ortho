import { Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import { ConsultationProvider } from "@/components/ConsultationProvider";

const inter = Inter({ subsets: ["latin"] });
const greatVibes = Great_Vibes({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes"
});

export const metadata = {
  title: "Crystal Cove Orthodontics | Dr. Russell Choy",
  description: "Creating beautiful smiles and confident patients through exceptional orthodontic care in Newport Beach, CA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${greatVibes.variable}`}>
        {children}
        <ConsultationProvider />
      </body>
    </html>
  );
}
