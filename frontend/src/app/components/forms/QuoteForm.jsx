"use client";

import React, { useState } from "react";

export default function QuoteForm({ tripType = "Umrah" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    travellers: "2 Passengers",
    travelDate: "",
    promoCode: "",
    captcha: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-emerald-950/10 text-stone-900">
      <h3 className="font-serif text-2xl font-extrabold text-[#0e5c4a] mb-5 tracking-tight">
        Get Personalised {tripType} Quote
      </h3>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-4 rounded-xl text-center font-medium">
          Thank you! Our {tripType} advisor will call you within 5 minutes.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Grid Row 1: Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="w-[#100%] w-full bg-[#fbf8f1] border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#0e5c4a] transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="07xxx xxxxxx"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full bg-[#fbf8f1] border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#0e5c4a] transition-all"
              />
            </div>
          </div>

          {/* Grid Row 2: Email & Travellers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="your.email@example.cc"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-[#fbf8f1] border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#0e5c4a] transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">
                Travellers
              </label>
              <select
                value={formData.travellers}
                onChange={(e) =>
                  setFormData({ ...formData, travellers: e.target.value })
                }
                className="w-full bg-[#fbf8f1] border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#0e5c4a] transition-all"
              >
                <option value="1 Passenger">1 Passenger</option>
                <option value="2 Passengers">2 Passengers</option>
                <option value="3 Passengers">3 Passengers</option>
                <option value="4 Passengers">4 Passengers</option>
                <option value="5+ Passengers">5+ Passengers (Group)</option>
              </select>
            </div>
          </div>

          {/* Grid Row 3: Travel Date, Promo Code, Captcha */}
          <div className="grid grid-cols-3 gap-2.5">
            <div>
              <label className="block text-[11px] font-bold text-stone-700 mb-1">
                Travel Date
              </label>
              <input
                type="date"
                value={formData.travelDate}
                onChange={(e) =>
                  setFormData({ ...formData, travelDate: e.target.value })
                }
                className="w-full bg-[#fbf8f1] border border-stone-200 rounded-xl px-2 py-2 text-[11px] text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#0e5c4a] transition-all"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-stone-700 mb-1">
                Promo Code
              </label>
              <input
                type="text"
                placeholder="OPTIONAL"
                value={formData.promoCode}
                onChange={(e) =>
                  setFormData({ ...formData, promoCode: e.target.value })
                }
                className="w-full bg-[#fbf8f1] border border-stone-200 rounded-xl px-2 py-2 text-[11px] text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#0e5c4a] transition-all uppercase"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-stone-700 mb-1">
                Captcha: 4 + 2 = ? <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Answer"
                value={formData.captcha}
                onChange={(e) =>
                  setFormData({ ...formData, captcha: e.target.value })
                }
                className="w-full bg-[#fbf8f1] border border-stone-200 rounded-xl px-2 py-2 text-[11px] text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#0e5c4a] transition-all"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#07382b] hover:bg-[#0e5c4a] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2 text-sm"
          >
            Request My Price →
          </button>
        </form>
      )}
    </div>
  );
}
