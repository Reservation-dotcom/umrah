import React from "react";

export default function HowItWorksSection() {
 const steps = [
  {
    num: "1",
    step: "STEP 1",
    title: "Select Your Package",
    desc: "Choose your preferred option and travel dates, or ask us to create an arrangement around your party size and spending plan.",
  },
  {
    num: "2",
    step: "STEP 2",
    title: "Provide Your Details",
    desc: "Share your passport and required photograph, while our team takes care of the visa application and airfare arrangements.",
  },
  {
    num: "3",
    step: "STEP 3",
    title: "Complete Your Booking",
    desc: "Our team manages the Umrah visa process and sends confirmation for your accommodation and transportation.",
  },
  {
    num: "4",
    step: "STEP 4",
    title: "Begin Your Journey",
    desc: "Receive airport assistance, ongoing guidance, and round-the-clock support from our team while you are in Saudi Arabia.",
  },
];

  return (
    <section className="py-13 md:py-15 bg-[#f8fafc] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-left">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37] block mb-2">
            YOUR UMRAH JOURNEY
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            From Planning to <span className="italic text-[#D4AF37] font-normal">Ihram</span> — in 4 Steps.
          </h2>
          <p className="text-slate-600 text-sm mt-2 max-w-2xl">
            A clear and straightforward booking experience, giving you more time to concentrate on your worship.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Dashed connector line for desktop */}
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-[#D4AF37]/40 z-0" />

          {steps.map((s, idx) => (
            <div key={idx} className="relative z-10 flex flex-col space-y-3">
              {/* Number Circle */}
              <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] bg-white text-[#D4AF37] font-bold text-lg flex items-center justify-center shadow-xs">
                {s.num}
              </div>

              {/* Step Text */}
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D4AF37] pt-1">
                {s.step}
              </span>

              <h4 className="font-bold text-lg text-[#0f172a]">
                {s.title}
              </h4>

              <p className="text-xs text-slate-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
