import React from "react";
import Link from "next/link";

export default function UtilityBar() {
  return (
    <div className="bg-[#06142e] text-slate-200 text-xs py-2 px-4 border-b border-slate-800/60 hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left Trust Badges */}
        <div className="flex items-center gap-4 text-xs font-medium tracking-wide">
          <span className="flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            ATOL PROTECTED 
          </span>
          <span className="text-slate-600">|</span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            IATA
          </span>
          <span className="text-slate-600">|</span>
          <span>Saudi Licensed</span>
          <span className="text-slate-600">|</span>
          <span className="text-[#D4AF37] font-semibold">10 Years Experience</span>
        </div>

        {/* Right Contact Info */}
        <div className="flex items-center gap-5 text-xs font-medium">
          <a
            href="tel:02039700013"
            className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
          >
            <svg
              className="w-3.5 h-3.5 text-[#D4AF37]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call Now
          </a>
          <Link
            href="/contact-us#contact-enquiry-form"
            className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
          >
            <svg
              className="w-3.5 h-3.5 text-[#D4AF37]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 012.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            admin@umrahplaners.co.uk
          </Link>
        </div>
      </div>
    </div>
  );
}
