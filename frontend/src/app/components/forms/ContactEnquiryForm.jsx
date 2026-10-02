"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

// ─── validation helpers ──────────────────────────────────────────────────────
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidPhone(phone) {
  return /^[\d\s\+\-\(\)]{7,20}$/.test(phone.trim());
}

const inputClassName =
  "mt-1.5 w-full min-w-0 rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-3 text-sm text-slate-800 outline-none transition focus:border-[#06142e] focus:ring-2 focus:ring-[#06142e]/15";
const labelClassName = "block text-xs font-bold text-slate-700";

function Field({ id, label, required = false, children }) {
  return (
    <div className="min-w-0">
      <label className={labelClassName} htmlFor={id}>
        {label}
        {required && <span className="text-red-600"> *</span>}
      </label>
      {children}
    </div>
  );
}

export default function ContactEnquiryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    package: "",
    city: "",
    travellers: "",
    month: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, phone, email } = formData;

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
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          passengers: formData.travellers || "Not specified",
          travelDate: formData.month || null,
          numberOfDays: null,
          enquirySource: formData.package
            ? `Contact Page – ${formData.package}`
            : "Contact Page",
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(
          "Your enquiry has been sent! Our advisor will be in touch within 1 hour.",
          { duration: 5000 }
        );
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          package: "",
          city: "",
          travellers: "",
          month: "",
          message: "",
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

  return (
    <>
      <Toaster position="top-center" />

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            Plan your journey
          </p>
          <h2 className="mt-1 font-serif text-2xl font-bold text-[#06142e] sm:text-3xl">
            Send us an enquiry
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field id="fullName" label="Full Name" required>
              <input
                className={inputClassName}
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={handleChange("fullName")}
              />
            </Field>
            <Field id="phone" label="Phone Number" required>
              <input
                className={inputClassName}
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="07xxx xxxxxx"
                value={formData.phone}
                onChange={handleChange("phone")}
              />
            </Field>
          </div>

          <Field id="email" label="Email Address" required>
            <input
              className={inputClassName}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@email.com"
              value={formData.email}
              onChange={handleChange("email")}
            />
          </Field>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field id="package" label="Package Interest">
              <select
                className={inputClassName}
                id="package"
                name="package"
                value={formData.package}
                onChange={handleChange("package")}
              >
                <option value="">Select package type</option>
                <option>5-Star Luxury</option>
                <option>4-Star Comfort</option>
                <option>3-Star Economy</option>
                <option>Umrah + Holiday</option>
                <option>Hajj</option>
                <option>Ramadan Umrah</option>
                <option>Group / Custom</option>
              </select>
            </Field>
            <Field id="city" label="Departure City">
              <select
                className={inputClassName}
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange("city")}
              >
                <option value="">Select city</option>
                <option>London</option>
                <option>Manchester</option>
                <option>Birmingham</option>
                <option>Bradford</option>
                <option>Glasgow</option>
                <option>Edinburgh</option>
                <option>Liverpool</option>
                <option>Leicester</option>
                <option>Other</option>
              </select>
            </Field>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field id="travellers" label="No. of Travellers">
              <select
                className={inputClassName}
                id="travellers"
                name="travellers"
                value={formData.travellers}
                onChange={handleChange("travellers")}
              >
                <option value="">Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
              </select>
            </Field>
            <Field id="month" label="Preferred Month">
              <select
                className={inputClassName}
                id="month"
                name="month"
                value={formData.month}
                onChange={handleChange("month")}
              >
                <option value="">Select month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
                <option>Ramadan</option>
                <option>Flexible</option>
              </select>
            </Field>
          </div>

          <Field id="message" label="Message (optional)">
            <textarea
              className={`${inputClassName} min-h-32 resize-y`}
              id="message"
              name="message"
              placeholder="Tell us anything — special requirements, budget, dates, group size..."
              rows={4}
              value={formData.message}
              onChange={handleChange("message")}
            />
          </Field>

          <button
            type="submit"
            disabled={loading}
            className="flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#06142e] px-5 py-3 text-sm font-extrabold text-white transition-colors hover:bg-[#0b2545] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06142e] disabled:opacity-60 disabled:cursor-not-allowed"
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
              <>Send My Enquiry <span aria-hidden="true">→</span></>
            )}
          </button>
        </form>
      </div>
    </>
  );
}