import React from "react";

export default function HowItWorksSection() {
  const steps = [
    {
      num: "1",
      step: "STEP 1",
      title: "Choose Your Package",
      desc: "Pick a tier and dates, or let us tailor one to your exact group size and budget.",
    },
    {
      num: "2",
      step: "STEP 2",
      title: "Submit Documents",
      desc: "Send your passport and photo — we handle the Umrah visa processing and flight bookings.",
    },
    {
      num: "3",
      step: "STEP 3",
      title: "Visa & Confirmation",
      desc: "We process your Umrah visa and confirm all hotel & transfer vouchers.",
    },
    {
      num: "4",
      step: "STEP 4",
      title: "Travel With Confidence",
      desc: "Met at the airport, escorted throughout, and supported by our 24/7 team in KSA.",
    },
  ];

  return (
    <section className="py-13 md:py-15 bg-[#fbf8f1] border-t border-amber-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-left">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#c9a24b] block mb-2">
            HOW IT WORKS
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#1c2520] tracking-tight">
            From Inquiry to <span className="italic text-[#c9a24b] font-normal">Ihram</span> — in 4 Steps.
          </h2>
          <p className="text-stone-600 text-sm mt-2 max-w-2xl">
            A simple, transparent process so you can focus on what matters: your worship.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Dashed connector line for desktop */}
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-[#c9a24b]/40 z-0" />

          {steps.map((s, idx) => (
            <div key={idx} className="relative z-10 flex flex-col space-y-3">
              {/* Number Circle */}
              <div className="w-12 h-12 rounded-full border-2 border-[#c9a24b] bg-[#fbf8f1] text-[#c9a24b] font-bold text-lg flex items-center justify-center shadow-xs">
                {s.num}
              </div>

              {/* Step Text */}
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#c9a24b] pt-1">
                {s.step}
              </span>

              <h4 className="font-bold text-lg text-[#1c2520]">
                {s.title}
              </h4>

              <p className="text-xs text-stone-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
