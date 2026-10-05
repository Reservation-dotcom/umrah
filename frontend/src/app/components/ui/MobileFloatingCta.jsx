"use client";

import React from "react";
import WhatsAppIcon from "./WhatsAppIcon";

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
        {/* Request Quote Button (covers full remaining width) */}
        <button
          onClick={scrollToHero}
          className="flex-1 bg-[#06142e] hover:bg-[#0b2545] active:bg-[#030d1b] text-white font-extrabold text-sm sm:text-base py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
        >
          <span>Request Quote</span>
          <span className="text-lg leading-none">→</span>
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://api.whatsapp.com/send?phone=447883408637"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex-shrink-0 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl flex items-center justify-center shadow-md transition-all active:scale-95"
          aria-label="WhatsApp Us"
        >
          <WhatsAppIcon className="w-6 h-6" />
        </a>

        {/* Phone Contact Number Icon Button */}
        <button
          onClick={onOpenCallModal}
          className="w-12 h-12 flex-shrink-0 bg-[#06142e] hover:bg-[#0b2545] active:bg-[#030d1b] text-[#D4AF37] rounded-xl flex items-center justify-center shadow-md transition-all active:scale-95 cursor-pointer"
          aria-label="Call Us 02039700013"
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
