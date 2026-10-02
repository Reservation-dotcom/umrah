"use client";

import React, { useState } from "react";
import { faqsData } from "@/data/faq";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-13 md:py-15 bg-[#f1f5f9] border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37] block mb-2">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Everything You Need to <span className="italic text-[#1E3A8A] font-normal">Know Before Booking.</span>
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Clear, straightforward answers to help you plan your Umrah journey with complete peace of mind.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqsData.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-base text-[#0f172a] hover:text-[#1E3A8A] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#1E3A8A] font-bold text-lg flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
