"use client";

import React from "react";

export default function MobileFloatingCta({ onOpenCallModal }) {
  const scrollToHero = () => {
    const hero = document.getElementById("hero-section");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-2xl lg:hidden">
      <div className="max-w-md mx-auto flex items-center gap-2.5">
        {/* Get Free Quote Button (covers full remaining width) */}
        <button
          onClick={scrollToHero}
          className="flex-1 bg-[#005C49] hover:bg-[#07382b] active:bg-[#05281e] text-white font-extrabold text-sm sm:text-base py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
        >
          <span>Get Free Quote</span>
          <span className="text-lg leading-none">→</span>
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://api.whatsapp.com/send?phone=442039700100"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex-shrink-0 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl flex items-center justify-center shadow-md transition-all active:scale-95"
          aria-label="WhatsApp Us"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.017 4.142-1.086z" />
          </svg>
        </a>

        {/* Phone Contact Number Icon Button */}
        <button
          onClick={onOpenCallModal}
          className="w-12 h-12 flex-shrink-0 bg-[#005C49] hover:bg-[#07382b] active:bg-[#05281e] text-white rounded-xl flex items-center justify-center shadow-md transition-all active:scale-95 cursor-pointer"
          aria-label="Call Us 02039700100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
