import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#121b17] text-stone-300 text-xs border-t border-emerald-950 pb-20 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1: Brand & Licensing */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#0e5c4a] rounded-lg p-1 flex items-center justify-center text-amber-300">
                <svg className="w-5 h-5 text-[#c9a24b]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.24l7.6 3.8-7.6 3.8-7.6-3.8L12 4.24zM4 9.1l7 3.5v7.3l-7-3.5V9.1zm16 0v7.3l-7 3.5v-7.3l7-3.5z" />
                </svg>
              </div>
              <span className="font-serif text-xl font-bold text-white tracking-tight">
                Makkah Tour<span className="text-[#c9a24b]">™</span>
              </span>
            </Link>

            <p className="text-stone-400 leading-relaxed text-[11px]">
              21 years guiding UK Muslims to the House of Allah. ATOL-protected, IATA-approved, and Saudi-licensed.
            </p>

            {/* License Chips */}
            <div className="flex flex-wrap gap-2 text-[10px] font-semibold">
              <span className="bg-stone-800 text-stone-300 px-2.5 py-1 rounded border border-stone-700">
                ATOL 10416
              </span>
              <span className="bg-stone-800 text-stone-300 px-2.5 py-1 rounded border border-stone-700">
                IATA 91280442
              </span>
              <span className="bg-stone-800 text-stone-300 px-2.5 py-1 rounded border border-stone-700">
                Saudi Licensed
              </span>
            </div>

            {/* Official Logos Bar */}
            <div className="pt-2 flex items-center gap-3 opacity-80">
              <div className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center bg-stone-900 text-[9px] font-bold text-amber-400">
                ATOL
              </div>
              <div className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center bg-stone-900 text-[9px] font-bold text-sky-400">
                IATA
              </div>
              <div className="px-2 py-1 rounded border border-stone-700 bg-stone-900 text-[9px] font-semibold text-emerald-400">
                MINISTRY OF HAJJ
              </div>
            </div>
          </div>

          {/* Column 2: Quick Link */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white mb-4 tracking-wide">
              Quick link
            </h4>
            <ul className="space-y-2.5 text-[11px] text-stone-400">
              <li>
                <Link href="/about-us" className="hover:text-[#c9a24b] transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/our-responsibility" className="hover:text-[#c9a24b] transition-colors">
                  Our Responsibility
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#c9a24b] transition-colors">
                  FAQ's
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#c9a24b] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/complaints-and-suggestions" className="hover:text-[#c9a24b] transition-colors">
                  Complaints & Suggestions
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-[#c9a24b] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Menu */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white mb-4 tracking-wide">
              Menu
            </h4>
            <ul className="space-y-2.5 text-[11px] text-stone-400">
              <li>
                <Link href="/how-to-perform-umrah" className="hover:text-[#c9a24b] transition-colors">
                  How to Perform Umrah
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="hover:text-[#c9a24b] transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/travel-insurance" className="hover:text-[#c9a24b] transition-colors">
                  Travel Insurance
                </Link>
              </li>
              <li>
                <Link href="/before-you-travel" className="hover:text-[#c9a24b] transition-colors">
                  Before You Travel
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-[#c9a24b] transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-[#c9a24b] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white mb-4 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-2.5 text-[11px] text-stone-400">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>262 A Upper Tooting Road, London SW17 0DN, United Kingdom</span>
              </li>
              <li>
                <a href="tel:02039700100" className="flex items-center gap-2 hover:text-[#c9a24b]">
                  <span>📞</span>
                  <span>0203-970-0100</span>
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=442039700100" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#c9a24b]">
                  <span>📱</span>
                  <span>0203 970 0100 (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@makkahtour.co.uk" className="flex items-center gap-2 hover:text-[#c9a24b]">
                  <span>✉️</span>
                  <span>info@makkahtour.co.uk</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-12 pt-6 border-t border-stone-800 text-center text-[10px] text-stone-500 space-y-2">
          <p>© 2026 MakkahTour. All flights and flight-inclusive holidays are financially protected by the ATOL scheme (License 10416).</p>
          <p className="max-w-4xl mx-auto leading-normal text-stone-600">
            "All the flights and flight-inclusive holidays on this website are financially protected by the ATOL scheme. When you pay you will be supplied with an ATOL Certificate. Please ask for it and check to ensure that everything you booked (flights, hotels and other services) is listed on it."
          </p>
        </div>
      </div>
    </footer>
  );
}
