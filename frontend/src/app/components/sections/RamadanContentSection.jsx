import React from "react";

export default function RamadanContentSection() {
  return (
    <section className="py-16 bg-[#f8fafc] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Intro Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200/80 space-y-6">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37] block">
            SACRED JOURNEY GUIDANCE
          </span>

          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#0f172a]">
            Why Select <span className="italic font-normal text-[#1E3A8A]">Ramadan Umrah Deals?</span>
          </h2>

          <p className="text-slate-700 text-base leading-relaxed">
            Experience the special atmosphere of Ramadan in Makkah and Madinah with a
            carefully arranged Umrah package. We combine flights, hotels, transfers
            and visa assistance to make your journey simpler.
          </p>

          <div className="pt-4 border-t border-slate-100">
            <h3 className="font-serif text-xl font-bold text-[#0f172a] mb-3">
              Ramadan Umrah Packages 2027
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Ramadan is a busy travel period, so hotel location, travel dates and
              length of stay can all affect availability and price.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-[#1E3A8A] text-sm mb-1">
                  📅 Ramadan Period
                </h4>
                <p className="text-xs text-slate-600">
                  Travel dates can significantly affect price and availability.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-[#1E3A8A] text-sm mb-1">
                  ⏳ Length of Stay
                </h4>
                <p className="text-xs text-slate-600">
                  Choose from shorter or longer stays based on your plans.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-[#1E3A8A] text-sm mb-1">
                  🚶 Hotel Location
                </h4>
                <p className="text-xs text-slate-600">
                  Staying closer to the mosque can make daily travel easier.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-[#1E3A8A] text-sm mb-1">
                  👥 Room Occupancy
                </h4>
                <p className="text-xs text-slate-600">
                  Prices vary depending on double, triple or quad sharing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Dates & Departure Schedule */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200/80 space-y-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37] block mb-1">
              EXPECTED SCHEDULE
            </span>

            <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-[#0f172a]">
              Ramadan 2027 Dates & Flight Impact
            </h3>

            <p className="text-slate-600 text-sm mt-1">
              Ramadan 1448H is expected around 8 February to 8/9 March 2027,
              with Eid al-Fitr around 9 or 10 March.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse rounded-2xl overflow-hidden border border-slate-200">
              <thead className="bg-[#06142e] text-white">
                <tr>
                  <th className="p-3.5 font-semibold">Ramadan Period</th>
                  <th className="p-3.5 font-semibold">Days</th>
                  <th className="p-3.5 font-semibold">Expected 2027 Dates</th>
                  <th className="p-3.5 font-semibold">Booking Advice</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                <tr className="hover:bg-blue-50/50">
                  <td className="p-3.5 font-bold text-[#1E3A8A]">First Ashra</td>
                  <td className="p-3.5">1 to 10</td>
                  <td className="p-3.5 whitespace-nowrap">8 to 17 February</td>
                  <td className="p-3.5">
                    Generally offers more choice of hotels and flights.
                  </td>
                </tr>

                <tr className="hover:bg-blue-50/50">
                  <td className="p-3.5 font-bold text-[#1E3A8A]">Second Ashra</td>
                  <td className="p-3.5">11 to 20</td>
                  <td className="p-3.5 whitespace-nowrap">18 to 27 February</td>
                  <td className="p-3.5">
                    Popular period, so early booking is recommended.
                  </td>
                </tr>

                <tr className="hover:bg-blue-50/50 bg-amber-50/30">
                  <td className="p-3.5 font-bold text-amber-900">Last Ashra</td>
                  <td className="p-3.5">21 to 29/30</td>
                  <td className="p-3.5 whitespace-nowrap">28 Feb to 8/9 March</td>
                  <td className="p-3.5 font-medium">
                    Highly sought-after period. Book early.
                  </td>
                </tr>

                <tr className="hover:bg-blue-50/50">
                  <td className="p-3.5 font-bold text-[#1E3A8A]">
                    Last 10 Nights Begin
                  </td>
                  <td className="p-3.5">Night of 21st</td>
                  <td className="p-3.5 whitespace-nowrap">Eve of 27 February</td>
                  <td className="p-3.5">
                    The last 10 nights begin around this date.
                  </td>
                </tr>

                <tr className="hover:bg-blue-50/50">
                  <td className="p-3.5 font-bold text-[#1E3A8A]">Odd Nights</td>
                  <td className="p-3.5">21, 23, 25, 27, 29</td>
                  <td className="p-3.5">27 Feb, 1, 3, 5 & 7 Mar</td>
                  <td className="p-3.5">
                    Important nights traditionally associated with Laylat al-Qadr.
                  </td>
                </tr>

                <tr className="hover:bg-blue-50/50">
                  <td className="p-3.5 font-bold text-[#1E3A8A]">Eid al-Fitr</td>
                  <td className="p-3.5">After Ramadan</td>
                  <td className="p-3.5 whitespace-nowrap">Around 9 or 10 March</td>
                  <td className="p-3.5">
                    Arrange return flights early around Eid.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section: Package Selection Guide */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200/80 space-y-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37] block mb-1">
              RECOMMENDATION MATRIX
            </span>

            <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-[#0f172a]">
              Which Ramadan Umrah Package Suits You?
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse rounded-2xl overflow-hidden border border-slate-200">
              <thead className="bg-[#06142e] text-[#D4AF37]">
                <tr>
                  <th className="p-3.5 font-semibold">If You Are...</th>
                  <th className="p-3.5 font-semibold">Recommended Window</th>
                  <th className="p-3.5 font-semibold">Typical Length</th>
                  <th className="p-3.5 font-semibold">Why It Fits</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                <tr className="hover:bg-amber-50/40">
                  <td className="p-3.5 font-bold">First-Time Pilgrim</td>
                  <td className="p-3.5 font-semibold text-[#1E3A8A]">First Ashra</td>
                  <td className="p-3.5">7 Nights</td>
                  <td className="p-3.5">A practical option with wider availability.</td>
                </tr>

                <tr className="hover:bg-amber-50/40">
                  <td className="p-3.5 font-bold">Family with Young Children</td>
                  <td className="p-3.5 font-semibold text-[#1E3A8A]">
                    First or Second Ashra
                  </td>
                  <td className="p-3.5">10 Nights</td>
                  <td className="p-3.5">More time for rest and a relaxed schedule.</td>
                </tr>

                <tr className="hover:bg-amber-50/40">
                  <td className="p-3.5 font-bold">Bringing Elderly Relatives</td>
                  <td className="p-3.5 font-semibold text-[#1E3A8A]">First Ashra</td>
                  <td className="p-3.5">7 or 10 Nights</td>
                  <td className="p-3.5">Choose accommodation closer to the mosque.</td>
                </tr>

                <tr className="hover:bg-amber-50/40">
                  <td className="p-3.5 font-bold">Seeking Laylatul Qadr</td>
                  <td className="p-3.5 font-semibold text-[#1E3A8A]">
                    Last 10 Nights
                  </td>
                  <td className="p-3.5">10 or 14 Nights</td>
                  <td className="p-3.5">Covers the important final nights of Ramadan.</td>
                </tr>

                <tr className="hover:bg-amber-50/40">
                  <td className="p-3.5 font-bold">Planning I'tikaf / Long Stay</td>
                  <td className="p-3.5 font-semibold text-[#1E3A8A]">Full Month</td>
                  <td className="p-3.5">~30 Nights</td>
                  <td className="p-3.5">Stay through Ramadan and Eid.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section: Hotel Locations & Distances */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200/80 space-y-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37] block mb-1">
              HOTEL ACCESSIBILITY
            </span>

            <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-[#0f172a]">
              Where You Will Stay in Makkah & Madinah
            </h3>

            <p className="text-slate-600 text-sm mt-1">
              Hotel location is especially important during Ramadan. Shorter
              walking distances can make daily worship more convenient.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse rounded-2xl overflow-hidden border border-slate-200">
              <thead className="bg-[#06142e] text-white">
                <tr>
                  <th className="p-3.5 font-semibold">Package Tier</th>
                  <th className="p-3.5 font-semibold">Makkah Hotel & Haram Distance</th>
                  <th className="p-3.5 font-semibold">
                    Madinah Hotel & Prophet's Mosque Distance
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                <tr className="hover:bg-blue-50/50">
                  <td className="p-3.5 font-bold">3★ 7 Nights</td>
                  <td className="p-3.5">Emaar Al Khalil (~15 min walk / 800m)</td>
                  <td className="p-3.5">Zowar International (~7 min walk)</td>
                </tr>

                <tr className="hover:bg-blue-50/50">
                  <td className="p-3.5 font-bold">3★ 10 Nights</td>
                  <td className="p-3.5">Altayseer Towers (~15 min walk / 950m)</td>
                  <td className="p-3.5">Grand Zowar (~9 min walk / 600m)</td>
                </tr>

                <tr className="hover:bg-blue-50/50">
                  <td className="p-3.5 font-bold">3★ 14 Nights</td>
                  <td className="p-3.5">Emaar Diwan Al Sud (Walking distance)</td>
                  <td className="p-3.5">Diyar Al Salam Silver (~3 min walk / 200m)</td>
                </tr>

                <tr className="hover:bg-blue-50/50 bg-slate-50/60">
                  <td className="p-3.5 font-bold text-[#1E3A8A]">4★ 7 Nights</td>
                  <td className="p-3.5">Emaar Grand (~13 min walk / 900m)</td>
                  <td className="p-3.5">Mias Hotel Madinah (~7 min walk)</td>
                </tr>

                <tr className="hover:bg-blue-50/50 bg-slate-50/60">
                  <td className="p-3.5 font-bold text-[#1E3A8A]">4★ 10 Nights</td>
                  <td className="p-3.5">Emaar Al Manar (~10 min walk / 850m)</td>
                  <td className="p-3.5">Emaar Elite Madinah (~3 min walk / 200m)</td>
                </tr>

                <tr className="hover:bg-blue-50/50 bg-slate-50/60">
                  <td className="p-3.5 font-bold text-[#1E3A8A]">4★ 14 Nights</td>
                  <td className="p-3.5">Emaar Elite Makkah (~12 min walk)</td>
                  <td className="p-3.5">Grand Plaza Badr Al Maqam (~7 min walk / 600m)</td>
                </tr>

                <tr className="hover:bg-blue-50/50 bg-amber-50/40">
                  <td className="p-3.5 font-bold text-amber-900">5★ 7 Nights</td>
                  <td className="p-3.5 font-semibold">
                    Makarem Ajyad Makkah (~5 min walk / 400m)
                  </td>
                  <td className="p-3.5 font-semibold">
                    Dorrar Aleiman Royal (~4 min walk / 100m)
                  </td>
                </tr>

                <tr className="hover:bg-blue-50/50 bg-amber-50/40">
                  <td className="p-3.5 font-bold text-amber-900">5★ 10 Nights</td>
                  <td className="p-3.5 font-semibold">
                    Anjum Hotel Makkah (~3-5 min walk)
                  </td>
                  <td className="p-3.5 font-semibold">
                    Dar Al Taqwa (~2 min walk / 100m)
                  </td>
                </tr>

                <tr className="hover:bg-blue-50/50 bg-amber-50/40">
                  <td className="p-3.5 font-bold text-amber-900">5★ 14 Nights</td>
                  <td className="p-3.5 font-semibold">
                    Swissôtel Makkah (Walking distance)
                  </td>
                  <td className="p-3.5 font-semibold">
                    Dar Al Eiman Al Haram (~3 min walk / 200m)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section: What's Included & Protection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-[#030d1b] text-white rounded-3xl p-8 shadow-sm space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              PACKAGE INCLUSIONS
            </span>

            <h4 className="font-serif text-2xl font-extrabold">
              What is Included in Your Ramadan Package
            </h4>

            <ul className="space-y-2.5 text-xs text-slate-200">
              <li className="flex items-center gap-2">
                <span className="text-[#D4AF37] font-bold">✓</span>
                Return flights from UK (LHR, MAN, BHX)
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[#D4AF37] font-bold">✓</span>
                Makkah & Madinah hotel accommodation
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[#D4AF37] font-bold">✓</span>
                Airport and intercity transfers
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[#D4AF37] font-bold">✓</span>
                Umrah visa and Nusuk support
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[#D4AF37] font-bold">✓</span>
                UK-based support throughout your journey
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/80 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              TRUST & PROTECTION
            </span>

            <h4 className="font-serif text-2xl font-extrabold text-[#0f172a]">
              Why Book With Umrah Planers
            </h4>

            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <span className="text-[#D4AF37] font-bold">🛡️</span>
                <strong>ATOL Protected:</strong> 100% financial protection
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[#D4AF37] font-bold">✈️</span>
                <strong>IATA Accredited:</strong> Direct airline bookings
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[#D4AF37] font-bold">🏢</span>
                <strong>10 Years Experience:</strong> UK registered
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[#D4AF37] font-bold">📍</span>
                <strong>Real Distances:</strong> Clear hotel walking times
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}