import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import QuoteForm from "../components/forms/QuoteForm";
import PackageCard from "../components/ui/PackageCard";
import RamadanContentSection from "../components/sections/RamadanContentSection";
import UserReviewsSection from "../components/sections/UserReviewsSection";
import CtaBanner from "../components/sections/CtaBanner";
import {
  ramadanPackages3Star,
  ramadanPackages4Star,
  ramadanPackages5Star,
} from "@/data/packages";

export const metadata = {
  title: "Ramadan Umrah Packages 2027 from UK | Makkah Tour™",
  description:
    "Plan your Ramadan Umrah Packages 2027 from the UK starting from £795pp. ATOL protected 3, 4 and 5-star packages with flights, hotels near the Haram, transfers & visa support.",
};

export default function RamadanUmrahPackagesPage() {
  return (
    <main className="min-h-screen bg-[#fbf8f1] flex flex-col justify-between selection:bg-[#c9a24b] selection:text-white">
      <Header />

      <div className="flex-1">
        {/* Section 1: Hero Section of Ramadan */}
        <section id="hero-section" className="bg-islamic-pattern text-white relative py-12 md:py-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-amber-300 shadow-sm">
                  <span>★</span>
                  <span>RAMADAN 2027 SPECIAL PACKAGES</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Ramadan Umrah Packages <span className="italic font-normal text-[#c9a24b]">2027 from UK</span>
                </h1>

                <div className="font-arabic text-3xl sm:text-4xl text-[#c9a24b] tracking-wider py-1">
                  لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ
                </div>

                <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
                  Plan your Ramadan Umrah Packages 2027 from the UK with Makkah Tour, starting from £795pp with 7, 10 and 14-night options across 3-star, 4-star and 5-star hotels in Makkah and Madinah. Our Ramadan packages include return flights, Makkah and Madinah accommodation, airport and intercity transfers, and Umrah visa support for individuals, families and groups. Whether you are planning an early Ramadan stay, a specific Ashra, or the blessed last ten nights and Laylatul Qadr, our UK team supports your journey from booking to return. Flight-inclusive bookings are financially protected under ATOL 10416. Prices are per person based on four sharing and subject to dates and availability.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="https://api.whatsapp.com/send?phone=442039700100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-400/40 text-white font-semibold text-sm py-3 px-6 rounded-full flex items-center gap-2.5 transition-all shadow-sm"
                  >
                    <svg className="w-5 h-5 fill-current text-emerald-400" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.017 4.142-1.086z" />
                    </svg>
                    WhatsApp Us
                  </a>

                  <a
                    href="tel:02039700100"
                    className="bg-[#00c853] hover:bg-[#00b048] text-white font-bold text-sm py-3 px-6 rounded-full flex items-center gap-2.5 transition-all shadow-md"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    0203-970-0100
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Ramadan Package Cards (3★, 4★, 5★) */}
        <section className="py-16 bg-[#fbf8f1] space-y-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#c9a24b] block mb-2">
                RAMADAN UMRAH PACKAGES 2027
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-[#1c2520] tracking-tight">
                Choose Your <span className="italic font-normal text-[#c9a24b]">Ramadan Package Tier</span>
              </h2>
              <p className="text-stone-600 text-sm mt-2 max-w-3xl">
                All packages include return UK flights, hotel stay in Makkah & Madinah, Nusuk visa support, and full transport.
              </p>
            </div>

            {/* --- 3 STAR RAMADAN PACKAGES --- */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-[#1c2520]">
                3 Star Ramadan Umrah <span className="italic font-normal text-[#0e5c4a]">Packages</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {ramadanPackages3Star.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </div>

            {/* --- 4 STAR RAMADAN PACKAGES --- */}
            <div className="space-y-6 pt-10">
              <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-[#1c2520]">
                4 Star Ramadan Umrah <span className="italic font-normal text-[#0e5c4a]">Packages</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {ramadanPackages4Star.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </div>

            {/* --- 5 STAR RAMADAN PACKAGES --- */}
            <div className="space-y-6 pt-10">
              <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-[#1c2520]">
                5 Star Ramadan Umrah <span className="italic font-normal text-[#0e5c4a]">Packages</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {ramadanPackages5Star.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Why Choose Ramadan Umrah Package Content */}
        <RamadanContentSection />

        {/* Section 4: Reviews Section */}
        <UserReviewsSection
          eyebrow="VERIFIED RAMADAN PILGRIMS"
          title={
            <>
              Pilgrim Reviews for <span className="italic font-normal text-[#0e5c4a]">Ramadan Travel.</span>
            </>
          }
          subtitle="Real experiences from pilgrims who performed Umrah during Ramadan."
          limit={3}
        />

        {/* CTA Banner */}
        <CtaBanner />
      </div>

      <Footer />
    </main>
  );
}
