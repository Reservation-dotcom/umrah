import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import QuoteForm from "../components/forms/QuoteForm";
import PackageCard from "../components/ui/PackageCard";
import RamadanContentSection from "../components/sections/RamadanContentSection";
import UserReviewsSection from "../components/sections/UserReviewsSection";
import WhatsAppIcon from "../components/ui/WhatsAppIcon";
import CtaBanner from "../components/sections/CtaBanner";
import {
  ramadanPackages3Star,
  ramadanPackages4Star,
  ramadanPackages5Star,
} from "@/data/packages";

export const metadata = {
  title: "Ramadan Umrah Packages 2027 from UK | Umrah Planner™",
  description:
    "Plan your Ramadan Umrah Packages 2027 from the UK starting from £795pp. ATOL protected 3, 4 and 5-star packages with flights, hotels near the Haram, transfers & visa support.",
};

export default function RamadanUmrahPackagesPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] flex flex-col justify-between selection:bg-[#d4af37] selection:text-slate-950">
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
                  Ramadan Umrah Packages <span className="italic font-normal text-[#D4AF37]">2027 from UK</span>
                </h1>

                <div className="font-arabic text-3xl sm:text-4xl text-[#D4AF37] tracking-wider py-1">
                  لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ
                </div>

                <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
                  Begin your 2027 pilgrimage to Umrah during Ramadan from Britain with Umrah Planner, with rates from £790 per traveller and stay lengths of 7, 10, or 14 nights. Guests can choose from three-, four-, and five-star lodging situated in the sacred cities of Makkah and Madinah. Arrangements may feature round-trip air travel, accommodation, airport collection, transportation between the two cities, and guidance regarding visa formalities, making the experience suitable for solo visitors, relatives, and larger parties. You can schedule your visit for the start of the holy month, any Ashra, or the final ten nights, including the search for Laylatul Qadr, while our UK-based specialists remain available throughout the booking process and return journey. Qualifying flight-and-holiday reservations receive ATOL financial protection under reference 10416. Displayed fares are calculated for four occupants sharing, with the payable amount dependent on travel dates and remaining inventory.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="https://api.whatsapp.com/send?phone=447883408637"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm py-3 px-6 rounded-full flex items-center gap-2.5 transition-all shadow-md"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-white" />
                    WhatsApp Us
                  </a>

                  <a
                    href="tel:02039700013"
                    className="bg-[#D4AF37] hover:bg-[#c59b27] text-slate-950 font-extrabold text-sm py-3 px-6 rounded-full flex items-center gap-2.5 transition-all shadow-md"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Call Now
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
        <section className="py-16 bg-[#f8fafc] space-y-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37] block mb-2">
                RAMADAN UMRAH PACKAGES 2027
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight">
                Choose Your <span className="italic font-normal text-[#D4AF37]">Ramadan Package Tier</span>
              </h2>
              <p className="text-slate-600 text-sm mt-2 max-w-3xl">
                All packages include return UK flights, hotel stay in Makkah & Madinah, Nusuk visa support, and full transport.
              </p>
            </div>

            {/* --- 3 STAR RAMADAN PACKAGES --- */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-[#0f172a]">
                3 Star Ramadan Umrah <span className="italic font-normal text-[#1E3A8A]">Packages</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {ramadanPackages3Star.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </div>

            {/* --- 4 STAR RAMADAN PACKAGES --- */}
            <div className="space-y-6 pt-10">
              <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-[#0f172a]">
                4 Star Ramadan Umrah <span className="italic font-normal text-[#1E3A8A]">Packages</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {ramadanPackages4Star.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </div>

            {/* --- 5 STAR RAMADAN PACKAGES --- */}
            <div className="space-y-6 pt-10">
              <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-[#0f172a]">
                5 Star Ramadan Umrah <span className="italic font-normal text-[#1E3A8A]">Packages</span>
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
              Pilgrim Reviews for <span className="italic font-normal text-[#1E3A8A]">Ramadan Travel.</span>
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
