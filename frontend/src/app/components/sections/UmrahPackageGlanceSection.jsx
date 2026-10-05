import React from "react";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import {
  packageTierTable,
  idealPackageGuide,
  packageGlanceIntro,
  idealGuideIntro,
  additionalGlanceContent,
} from "@/data/umrah_package_glance";

export default function UmrahPackageGlanceSection() {
  return (
    <section className="py-16 md:py-20 bg-[#f8fafc] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-12">
          {/* --- PART 1: PACKAGE TIER PRICING TABLE (3 ROWS) --- */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              {packageGlanceIntro.title}
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-4xl">
              {packageGlanceIntro.description}
            </p>

            {/* Table 1: Package tier (with horizontal scrollbar container) */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 mt-6 shadow-xs">
              <table className="min-w-[600px] w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#06142e] text-white font-bold">
                    <th className="py-3.5 px-4 sm:px-6 border-r border-slate-700">
                      Package tier
                    </th>
                    <th className="py-3.5 px-4 sm:px-6 border-r border-slate-700">
                      7 nights (from)
                    </th>
                    <th className="py-3.5 px-4 sm:px-6 border-r border-slate-700">
                      10 nights (from)
                    </th>
                    <th className="py-3.5 px-4 sm:px-6">
                      14 nights (from)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800 font-medium">
                  {packageTierTable.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}
                    >
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#0f172a] border-r border-slate-200">
                        {row.tier}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 border-r border-slate-200 text-[#1E3A8A] font-semibold">
                        {row.nights7}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 border-r border-slate-200 text-[#1E3A8A] font-semibold">
                        {row.nights10}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-[#1E3A8A] font-semibold">
                        {row.nights14}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-slate-500 italic pt-1">
              {packageGlanceIntro.disclaimer}
            </p>
          </div>

          {/* --- PART 2: IDEAL PACKAGE GUIDE TABLE --- */}
          <div className="space-y-4 pt-6 border-t border-slate-100">
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              {idealGuideIntro.title}
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-4xl">
              {idealGuideIntro.description}
            </p>

            {/* Table 2: Ideal Umrah Package Guide (with horizontal scrollbar) */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 mt-6 shadow-xs">
              <table className="min-w-[650px] w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#06142e] text-white font-bold">
                    <th className="py-3.5 px-4 sm:px-6 border-r border-slate-700 w-1/4">
                      You are...
                    </th>
                    <th className="py-3.5 px-4 sm:px-6 border-r border-slate-700 w-1/3">
                      Package that usually suits
                    </th>
                    <th className="py-3.5 px-4 sm:px-6 w-5/12">
                      Why
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800 font-medium">
                  {idealPackageGuide.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}
                    >
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#0f172a] border-r border-slate-200">
                        {row.userType}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#1E3A8A] border-r border-slate-200">
                        {row.suitablePackage}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-600">
                        {row.why}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Specialist advice callout box */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
              <p className="text-xs text-slate-700 font-medium">
                Not sure which is right for you? Speak with an Umrah specialist who can recommend hotels, flights and duration to suit your budget.
              </p>
              <div className="flex items-center gap-3 flex-shrink-0">
                <a
                  href="tel:02039700013"
                  className="bg-[#06142e] hover:bg-[#0b2545] text-white text-xs font-bold py-2 px-4 rounded-full transition-all"
                >
                  Call Now
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=447883408637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold py-2 px-4 rounded-full transition-all inline-flex items-center gap-1.5"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* --- PART 3: ADDITIONAL DETAILED SECTIONS AFTER SECOND TABLE --- */}
          <div className="space-y-10 pt-8 border-t border-slate-100">
            {additionalGlanceContent.map((section) => (
              <div key={section.id} className="space-y-3">
                <h4 className="font-serif text-xl sm:text-2xl font-extrabold text-[#0f172a]">
                  {section.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>

                {section.subSections && (
                  <div className="space-y-4 pt-2">
                    {section.subSections.map((sub, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60"
                      >
                        <h5 className="font-bold text-sm text-[#1E3A8A] mb-1">
                          {sub.subtitle}
                        </h5>
                        <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line">
                          {sub.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
