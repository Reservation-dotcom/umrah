import React from "react";
import Link from "next/link";
import Image from "next/image";
import WhatsAppIcon from "../components/ui/WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="bg-[#030d1b] text-slate-300 text-xs border-t border-slate-900 pb-20 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1: Brand & Licensing */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              
              <span className="font-serif text-xl font-bold text-white tracking-tight">
                Umrah Planers<span className="text-[#D4AF37]">™</span>
              </span>
            </Link>

            <p className="text-slate-400 leading-relaxed text-[11px]">
              10 years of dedicated experience helping UK Muslims travel to the House of Allah. ATOL-protected, IATA-approved, and Saudi-licensed.
            </p>

            {/* License Chips */}
            <div className="flex flex-wrap gap-2 text-[10px] font-semibold">
              <span className="bg-slate-900 text-slate-300 px-2.5 py-1 rounded border border-slate-800">
                ATOL 
              </span>
              <span className="bg-slate-900 text-slate-300 px-2.5 py-1 rounded border border-slate-800">
                IATA 
              </span>
              <span className="bg-slate-900 text-slate-300 px-2.5 py-1 rounded border border-slate-800">
                Saudi Licensed
              </span>
            </div>

            {/* Official Logos Bar */}
            <div className="pt-2 flex items-center gap-3 opacity-80">
              <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center bg-slate-900 text-[9px] font-bold text-amber-400">
                ATOL
              </div>
              <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center bg-slate-900 text-[9px] font-bold text-sky-400">
                IATA
              </div>
              <div className="px-2 py-1 rounded border border-slate-700 bg-slate-900 text-[9px] font-semibold text-[#D4AF37]">
                MINISTRY OF HAJJ
              </div>
            </div>
          </div>

          {/* Column 2: Quick Link */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white mb-4 tracking-wide">
              Useful Links
            </h4>
            <ul className="space-y-2.5 text-[11px] text-slate-400">
              <li>
                <Link href="/about-us" className="hover:text-[#D4AF37] transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/our-responsibility" className="hover:text-[#D4AF37] transition-colors">
                  Our Commitment
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#D4AF37] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#D4AF37] transition-colors">
                  Data Protection Policy
                </Link>
              </li>
              <li>
                <Link href="/complaints-and-suggestions" className="hover:text-[#D4AF37] transition-colors">
                  Feedback & Complaints
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-[#D4AF37] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Menu */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white mb-4 tracking-wide">
              Explore
            </h4>
            <ul className="space-y-2.5 text-[11px] text-slate-400">
              <li>
                <Link href="/how-to-perform-umrah" className="hover:text-[#D4AF37] transition-colors">
                  Umrah Guide
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="hover:text-[#D4AF37] transition-colors">
                  Meet Our Team
                </Link>
              </li>
              <li>
                <Link href="/travel-insurance" className="hover:text-[#D4AF37] transition-colors">
                  Insurance
                </Link>
              </li>
              <li>
                <Link href="/before-you-travel" className="hover:text-[#D4AF37] transition-colors">
                  Travel Preparation Guide
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-[#D4AF37] transition-colors">
                  Latest Articles
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-[#D4AF37] transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white mb-4 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-2.5 text-[11px] text-slate-400">
              {/* <li className="flex items-start gap-2">
                <span>📍</span>
                <span>262 A Upper Tooting Road, London SW17 0DN, United Kingdom</span>
              </li> */}
              <li>
                <a href="tel:02039700013" className="flex items-center gap-2 hover:text-[#D4AF37]">
                  <span>📞</span>
                  <span>Call Now</span>
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=447883408637" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#D4AF37]">
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <Link href="/contact-us#contact-enquiry-form" className="flex items-center gap-2 hover:text-[#D4AF37]">
                  <span>✉️</span>
                  <span>admin@umrahplaners.co.uk</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-center text-[11px] text-slate-500 space-y-2">
          <p>© UmrahPlaners. All flights and flight-inclusive holidays are financially protected by the ATOL scheme .</p>
          <p className="max-w-4xl mx-auto leading-normal text-slate-500">
            "All flights and holiday arrangements that include air travel booked through this website are covered under the ATOL protection scheme. Once payment has been made, you will receive an ATOL Certificate. Please request your certificate and review it carefully to confirm that every element of your reservation, including flights, accommodation, and any additional services, is accurately shown."
          </p>
        </div>
      </div>
    </footer>
  );
}
