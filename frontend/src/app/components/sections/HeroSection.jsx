import React from "react";
import QuoteForm from "../forms/QuoteForm";

export default function HeroSection({ pkg, city }) {
  const isPackage = Boolean(pkg);
  const isCity = Boolean(city);

  return (
    <section id="hero-section" className="bg-islamic-pattern text-white relative py-12 md:py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            {isPackage ? (
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-amber-300 shadow-sm">
                <span>★</span>
                <span>
                  {pkg.rating} · {pkg.reviewCount} Customer REVIEWS
                </span>
              </div>
            ) : isCity ? (
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-amber-300 shadow-sm">
                <span>✈</span>
                <span>DEPARTURES FROM {city.name}</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-amber-300 shadow-sm">
                <span>★</span>
                <span>CHOSEN BY 10,000+ UK PILGRIMS</span>
              </div>
            )}

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {isPackage ? (
                pkg.title
              ) : isCity ? (
                <>Umrah Packages <span className="italic font-normal text-[#D4AF37]">from {city.name}</span></>
              ) : (
                <>
                  Umrah Packages <span className="italic font-normal text-[#D4AF37]">From UK</span>
                </>
              )}
            </h1>

            {!isPackage && (
              <p className="font-serif text-xl sm:text-2xl text-[#D4AF37] font-medium tracking-wide">
                {isCity ? `Departing from ${city.airports}` : "Your Umrah Journey, Carefully Planned."}
              </p>
            )}

            <div className="font-arabic text-3xl sm:text-4xl text-[#D4AF37] tracking-wider py-1">
              لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ
            </div>

            <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
              {isPackage
                ? pkg.description
                : isCity
                  ? city.description ?? `Compare 3, 4 and 5-star Umrah packages departing from ${city.name}. Choose from 7, 10, and 14-night itineraries with flights, accommodation in Makkah and Madinah, transfers, and visa assistance arranged for your journey.`
                : "Plan your Umrah from the UK with a package that brings flights, Makkah and Madinah accommodation, airport transfers, intercity transport and Nusuk assistance together. Choose from 3, 4 or 5-star options starting at £720 per person, with 7, 10 and 14-night itineraries and departures available from major airports across the UK. All flight-inclusive bookings carry ATOL protection under 10416, while our UK support team remains available throughout your journey, from your initial booking to your return home."}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://api.whatsapp.com/send?phone=447883408637"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm py-3 px-6 rounded-full flex items-center gap-2.5 transition-all shadow-md"
              >
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.017 4.142-1.086z" />
                </svg>
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

        {!isPackage && (
          <div className="mt-5 pt-8 border-t border-slate-700/40 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-3 border border-white/10">
              <span className="text-xs font-semibold text-blue-200 block">🛡️ ATOL Protected</span>
              <span className="text-[10px] text-blue-300/80">License</span>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-3 border border-white/10">
              <span className="text-xs font-semibold text-blue-200 block">💰 Starting from £{city?.price ?? 720}</span>
              <span className="text-[10px] text-blue-300/80">All-Inclusive Flights</span>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-3 border border-white/10">
              <span className="text-xs font-semibold text-blue-200 block">★ 4.3 / 5 Rating</span>
              <span className="text-[10px] text-blue-300/80">1,000+ Reviews</span>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-3 border border-white/10">
              <span className="text-xs font-semibold text-blue-200 block">⚡ &lt;5 min response</span>
              <span className="text-[10px] text-blue-300/80">UK Travel Advisors</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
