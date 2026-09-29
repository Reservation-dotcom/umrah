import React from "react";

export default function UtilityBar() {
  return (
    <div className="bg-[#07382b] text-emerald-100 text-xs py-2 px-4 border-b border-emerald-800/60 hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left Trust Badges */}
        <div className="flex items-center gap-4 text-xs font-medium tracking-wide">
          <span className="flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c9a24b]"></span>
            ATOL PROTECTED 10416
          </span>
          <span className="text-emerald-700">|</span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c9a24b]"></span>
            IATA 91280442
          </span>
          <span className="text-emerald-700">|</span>
          <span>Saudi Licensed</span>
          <span className="text-emerald-700">|</span>
          <span className="text-[#c9a24b] font-semibold">21 Years Experience</span>
        </div>

        {/* Right Contact Info */}
        <div className="flex items-center gap-5 text-xs font-medium">
          <a
            href="tel:02039700100"
            className="flex items-center gap-1.5 hover:text-[#c9a24b] transition-colors"
          >
            <svg
              className="w-3.5 h-3.5 text-[#c9a24b]"
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
            0203-970-0100
          </a>
          <a
            href="mailto:info@makkahtour.co.uk"
            className="flex items-center gap-1.5 hover:text-[#c9a24b] transition-colors"
          >
            <svg
              className="w-3.5 h-3.5 text-[#c9a24b]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            info@makkahtour.co.uk
          </a>
        </div>
      </div>
    </div>
  );
}
