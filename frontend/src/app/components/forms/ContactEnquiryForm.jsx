"use client";

import { useState } from "react";

const inputClassName =
  "mt-1.5 w-full min-w-0 rounded-lg border border-stone-300 bg-[#fbf8f1] px-3.5 py-3 text-sm text-stone-800 outline-none transition focus:border-[#0e5c4a] focus:ring-2 focus:ring-[#0e5c4a]/15";
const labelClassName = "block text-xs font-bold text-stone-700";

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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const values = new FormData(event.currentTarget);
    const enquiry = [
      `Full Name: ${values.get("fullName")}`,
      `Phone Number: ${values.get("phone")}`,
      `Email Address: ${values.get("email")}`,
      `Package Interest: ${values.get("package") || "Not selected"}`,
      `Departure City: ${values.get("city") || "Not selected"}`,
      `No. of Travellers: ${values.get("travellers") || "Not selected"}`,
      `Preferred Month: ${values.get("month") || "Not selected"}`,
      `Message: ${values.get("message") || "None"}`,
    ].join("\n");

    const subject = encodeURIComponent("Umrah enquiry from Makkah Tour website");
    const body = encodeURIComponent(enquiry);
    window.location.href = `mailto:rabiajabreel@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-widest text-[#a87f2f]">
          Plan your journey
        </p>
        <h2 className="mt-1 font-serif text-2xl font-bold text-[#173d32] sm:text-3xl">
          Send us an enquiry
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field id="fullName" label="Full Name" required>
            <input
              className={inputClassName}
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              required
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
              required
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
            required
          />
        </Field>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field id="package" label="Package Interest">
            <select className={inputClassName} id="package" name="package" defaultValue="">
              <option value="">Select package type</option>
              <option>5-Star Luxury</option>
              <option>4-Star Comfort</option>
              <option>3-Star Economy</option>
              <option>Umrah + Holiday</option>
              <option>Hajj</option>
              <option>Group / Custom</option>
            </select>
          </Field>
          <Field id="city" label="Departure City">
            <select className={inputClassName} id="city" name="city" defaultValue="">
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
              defaultValue=""
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
            <select className={inputClassName} id="month" name="month" defaultValue="">
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
          />
        </Field>

        <button
          className="flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#07382b] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0e5c4a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e5c4a]"
          type="submit"
        >
          Send My Enquiry <span aria-hidden="true">→</span>
        </button>

        {submitted && (
          <p className="text-sm leading-6 text-[#0e5c4a]" role="status">
            Your email app should open with your enquiry. Send the email there to
            complete your request.
          </p>
        )}
      </form>
    </div>
  );
}