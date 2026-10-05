"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

// ─── validation helpers ──────────────────────────────────────────────────────
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidPhone(phone) {
  return /^[\d\s\+\-\(\)]{7,20}$/.test(phone.trim());
}

export default function QuoteForm({ tripType = "Umrah" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    travellers: "2 Passengers",
    travelDate: "",
    numberOfDays: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, phone, email, travellers, travelDate, numberOfDays } = formData;

    // ── client-side validation ──────────────────────────────────────────────
    if (!fullName || fullName.trim().length < 2) {
      toast.error("Please enter your full name (at least 2 characters).");
      return;
    }
    if (!phone || !isValidPhone(phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }
    if (!email || !isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/send-enquiry.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          passengers: travellers,
          travelDate: travelDate || null,
          numberOfDays: numberOfDays || null,
          enquirySource: tripType,   // "Umrah" | "Hajj" | "Ramadan" etc.
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success(
          `Thank you! Your ${tripType} enquiry has been sent. Our advisor will contact you shortly.`,
          { duration: 5000 }
        );
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          travellers: "2 Passengers",
          travelDate: "",
          numberOfDays: "",
        });
      } else {
        const msgs = data.errors || ["Something went wrong. Please try again."];
        msgs.forEach((msg) => toast.error(msg));
      }
    } catch {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#06142e] transition-all";

  return (
    <>
      <Toaster position="top-center" />

      <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200 text-slate-900">
        <h3 className="font-serif text-2xl font-extrabold text-[#06142e] mb-5 tracking-tight">
          Request Your {tripType} Quote
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={formData.fullName}
                onChange={handleChange("fullName")}
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="07xxx xxxxxx"
                value={formData.phone}
                onChange={handleChange("phone")}
                className={inputCls}
              />
            </div>
          </div>

          {/* Row 2: Email & Travellers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange("email")}
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Travellers
              </label>
              <select
                value={formData.travellers}
                onChange={handleChange("travellers")}
                className={inputCls}
              >
                <option value="1 Passenger">1 Passenger</option>
                <option value="2 Passengers">2 Passengers</option>
                <option value="3 Passengers">3 Passengers</option>
                <option value="4 Passengers">4 Passengers</option>
                <option value="5+ Passengers">5+ Passengers (Group)</option>
              </select>
            </div>
          </div>

          {/* Row 3: Travel Date & Number of Days */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Travel Date
              </label>
              <input
                type="date"
                value={formData.travelDate}
                onChange={handleChange("travelDate")}
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Number of Days
              </label>
              <input
                type="number"
                min="1"
                placeholder="e.g. 10"
                value={formData.numberOfDays}
                onChange={handleChange("numberOfDays")}
                className={inputCls}
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#06142e] hover:bg-[#0b2545] disabled:opacity-60 disabled:cursor-not-allowed text-white font-extrabold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2 text-sm"
          >
            {loading ? (
              <>
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Sending…
              </>
            ) : (
              "Request My Price →"
            )}
          </button>
        </form>
      </div>
    </>
  );
}
