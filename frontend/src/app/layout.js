import { Outfit, Fraunces, Amiri } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata = {
  title: "Umrah Planner™ | Umrah Packages From UK 2026",
  description:
    "ATOL protected Umrah packages from UK combining return flights, 3/4/5-star hotels in Makkah & Madinah, airport transfers & Nusuk permit support from £725 per person.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable} ${amiri.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-sans bg-[#f8fafc] text-[#0f172a] selection:bg-[#d4af37] selection:text-slate-950"
      >
        {children}
      </body>
    </html>
  );
}
