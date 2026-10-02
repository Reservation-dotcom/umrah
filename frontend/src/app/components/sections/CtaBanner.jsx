import React from "react";

export default function CtaBanner() {
  return (
    <section className="py-20 bg-cta-pattern text-white relative overflow-hidden text-center">
      {/* Decorative radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
        {/* Arabic Calligraphy Header */}
        <div className="font-arabic text-2xl sm:text-3xl text-[#D4AF37] tracking-wider mb-2">
          وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ
        </div>

        {/* Heading */}
        <h2 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Start Planning Your Umrah Today.
        </h2>

        {/* Subtitle */}
        <p className="text-blue-100/90 text-sm sm:text-base max-w-xl mx-auto font-medium">
          Talk with an experienced Umrah specialist for free — with no commitment, no sales pressure, and no obligation.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="tel:02039700013"
            className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#c59b27] text-slate-950 font-extrabold text-sm py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Request Quote →
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=447883408637"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-white/30 hover:bg-white/10 text-white font-semibold text-sm py-3.5 px-8 rounded-full transition-all duration-200 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4 fill-current text-[#25D366]" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.017 4.142-1.086z" />
            </svg>
            WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}
