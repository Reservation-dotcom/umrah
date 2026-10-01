"use client";

import React, { useState } from "react";
import Link from "next/link";
import UtilityBar from "./UtilityBar";
import MobileFloatingCta from "../components/ui/MobileFloatingCta";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [showCallModal, setShowCallModal] = useState(false);

  const toggleSubMenu = (menuName) => {
    setOpenSubMenu(openSubMenu === menuName ? null : menuName);
  };

  const handleCallClick = (e) => {
    if (e) e.preventDefault();
    setShowCallModal(true);
    try {
      window.location.href = "tel:02039700100";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header className="sticky top-0 z-50 shadow-xs bg-[#fbf8f1] border-b border-amber-900/10">
      <UtilityBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center">
              <div className="w-10 h-10 bg-[#0e5c4a] rounded-lg p-1.5 flex items-center justify-center text-amber-300 shadow-md group-hover:scale-105 transition-transform">
                <svg
                  className="w-7 h-7 text-[#c9a24b]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.24l7.6 3.8-7.6 3.8-7.6-3.8L12 4.24zM4 9.1l7 3.5v7.3l-7-3.5V9.1zm16 0v7.3l-7 3.5v-7.3l7-3.5z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-serif text-2xl font-extrabold text-[#0e5c4a] tracking-tight">
                  Makkah Tour
                </span>
                <span className="text-xs text-[#c9a24b] font-semibold">™</span>
              </div>
              <span className="text-[10px] text-stone-500 tracking-widest uppercase font-medium -mt-1">
                7 Continents Travel
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links (Visible on LG & XL) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#1c2520]">
            <Link href="/" className="hover:text-[#0e5c4a] transition-colors">
              Home
            </Link>

            {/* Umrah Packages Dropdown */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 hover:text-[#0e5c4a] transition-colors cursor-pointer">
                Umrah Packages
                <svg
                  className="w-3.5 h-3.5 text-stone-400 group-hover:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-56 bg-white shadow-xl rounded-xl border border-stone-100 p-2 space-y-1">
                <Link
                  href="/3-star-7-nights-umrah-package"
                  className="block px-3 py-2 text-xs font-medium hover:bg-[#fbf8f1] hover:text-[#0e5c4a] rounded-lg"
                >
                  3 Star Umrah Packages
                </Link>
                <Link
                  href="/4-star-7-nights-umrah-package"
                  className="block px-3 py-2 text-xs font-medium hover:bg-[#fbf8f1] hover:text-[#0e5c4a] rounded-lg"
                >
                  4 Star Umrah Packages
                </Link>
                <Link
                  href="/5-star-7-nights-umrah-package"
                  className="block px-3 py-2 text-xs font-medium hover:bg-[#fbf8f1] hover:text-[#0e5c4a] rounded-lg"
                >
                  5 Star Luxury Packages
                </Link>
              </div>
            </div>

            {/* Special Packages Dropdown */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 hover:text-[#0e5c4a] transition-colors cursor-pointer">
                Special Packages
                <svg
                  className="w-3.5 h-3.5 text-stone-400 group-hover:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-56 bg-white shadow-xl rounded-xl border border-stone-100 p-2 space-y-1">
                <Link
                  href="/ramadan-umrah-packages"
                  className="block px-3 py-2 text-xs font-medium hover:bg-[#fbf8f1] hover:text-[#0e5c4a] rounded-lg"
                >
                  Ramadan Umrah Packages
                </Link>
                <Link
                  href="/december-umrah-packages"
                  className="block px-3 py-2 text-xs font-medium hover:bg-[#fbf8f1] hover:text-[#0e5c4a] rounded-lg"
                >
                  December Umrah Packages
                </Link>
                <Link
                  href="/easter-umrah-packages"
                  className="block px-3 py-2 text-xs font-medium hover:bg-[#fbf8f1] hover:text-[#0e5c4a] rounded-lg"
                >
                  Easter Umrah Packages
                </Link>
              </div>
            </div>

            {/* Package by Cities Dropdown */}
            {/* <div className="relative group py-2">
              <button className="flex items-center gap-1 hover:text-[#0e5c4a] transition-colors cursor-pointer">
                Package by Cities
                <svg
                  className="w-3.5 h-3.5 text-stone-400 group-hover:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-56 bg-white shadow-xl rounded-xl border border-stone-100 p-2 space-y-1">
                <Link
                  href="/umrah-packages-london"
                  className="block px-3 py-2 text-xs font-medium hover:bg-[#fbf8f1] hover:text-[#0e5c4a] rounded-lg"
                >
                  Umrah Packages London
                </Link>
                <Link
                  href="/umrah-packages-manchester"
                  className="block px-3 py-2 text-xs font-medium hover:bg-[#fbf8f1] hover:text-[#0e5c4a] rounded-lg"
                >
                  Umrah Packages Manchester
                </Link>
                <Link
                  href="/umrah-packages-birmingham"
                  className="block px-3 py-2 text-xs font-medium hover:bg-[#fbf8f1] hover:text-[#0e5c4a] rounded-lg"
                >
                  Umrah Packages Birmingham
                </Link>
              </div>
            </div> */}

            <Link href="/hajj-packages" className="hover:text-[#0e5c4a] transition-colors">
              Hajj Packages
            </Link>

            {/* More Dropdown */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 hover:text-[#0e5c4a] transition-colors cursor-pointer">
                More
                <svg
                  className="w-3.5 h-3.5 text-stone-400 group-hover:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-48 bg-white shadow-xl rounded-xl border border-stone-100 p-2 space-y-1">
                <Link
                  href="/about-us"
                  className="block px-3 py-2 text-xs font-medium hover:bg-[#fbf8f1] hover:text-[#0e5c4a] rounded-lg"
                >
                  About Us
                </Link>
                <Link
                  href="/faq"
                  className="block px-3 py-2 text-xs font-medium hover:bg-[#fbf8f1] hover:text-[#0e5c4a] rounded-lg"
                >
                  FAQs
                </Link>
              </div>
            </div>

            <Link href="/contact-us" className="hover:text-[#0e5c4a] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Header Call CTA Buttons */}
          <div className="flex items-center gap-2">
            {/* Call Now Button (bg-darkgreen #07382b) - Visible on small/md screens (< lg) and desktop */}
            <button
              onClick={handleCallClick}
              className="lg:hidden bg-[#07382b] hover:bg-[#05281e] text-white font-bold text-xs py-2 px-3.5 sm:px-4 sm:py-2.5 rounded-full transition-all shadow-md flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <svg className="w-3.5 h-3.5 text-emerald-400 fill-current" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Now</span>
            </button>

            {/* Mobile / Tablet Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-200/50 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile & Medium Screen Navigation Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 py-4 px-2 space-y-2 bg-[#fbf8f1]">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 text-sm font-bold text-[#1c2520] hover:text-[#0e5c4a]"
            >
              Home
            </Link>

            {/* Submenu Item 1: Umrah Packages with + icon */}
            <div>
              <button
                onClick={() => toggleSubMenu("umrah")}
                className="w-full flex items-center justify-between py-2 px-3 text-sm font-bold text-[#1c2520] hover:text-[#0e5c4a] cursor-pointer"
              >
                <span>Umrah Packages</span>
                <span className="text-base font-extrabold text-[#0e5c4a]">
                  {openSubMenu === "umrah" ? "−" : "+"}
                </span>
              </button>
              {openSubMenu === "umrah" && (
                <div className="overflow-x-auto whitespace-nowrap px-3 py-2 bg-white rounded-xl border border-stone-200 flex gap-2">
                  <Link
                    href="/3-star-7-nights-umrah-package"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-block px-3 py-1.5 text-xs font-semibold bg-emerald-50 text-[#0e5c4a] rounded-lg"
                  >
                    3 Star Packages
                  </Link>
                  <Link
                    href="/4-star-7-nights-umrah-package"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-block px-3 py-1.5 text-xs font-semibold bg-emerald-50 text-[#0e5c4a] rounded-lg"
                  >
                    4 Star Packages
                  </Link>
                  <Link
                    href="/5-star-7-nights-umrah-package"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-block px-3 py-1.5 text-xs font-semibold bg-emerald-50 text-[#0e5c4a] rounded-lg"
                  >
                    5 Star Luxury Packages
                  </Link>
                </div>
              )}
            </div>

            {/* Submenu Item 2: Special Packages with + icon */}
            <div>
              <button
                onClick={() => toggleSubMenu("special")}
                className="w-full flex items-center justify-between py-2 px-3 text-sm font-bold text-[#1c2520] hover:text-[#0e5c4a] cursor-pointer"
              >
                <span>Special Packages</span>
                <span className="text-base font-extrabold text-[#0e5c4a]">
                  {openSubMenu === "special" ? "−" : "+"}
                </span>
              </button>
              {openSubMenu === "special" && (
                <div className="overflow-x-auto whitespace-nowrap px-3 py-2 bg-white rounded-xl border border-stone-200 flex gap-2">
                  <Link
                    href="/ramadan-umrah-packages"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-block px-3 py-1.5 text-xs font-semibold bg-amber-50 text-amber-800 rounded-lg"
                  >
                    Ramadan Packages
                  </Link>
                  <Link
                    href="/december-umrah-packages"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-block px-3 py-1.5 text-xs font-semibold bg-amber-50 text-amber-800 rounded-lg"
                  >
                    December Packages
                  </Link>
                  <Link
                    href="/easter-umrah-packages"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-block px-3 py-1.5 text-xs font-semibold bg-amber-50 text-amber-800 rounded-lg"
                  >
                    Easter Packages
                  </Link>
                </div>
              )}
            </div>

            {/* Submenu Item 3: Package by Cities with + icon */}
            <div>
              <button
                onClick={() => toggleSubMenu("cities")}
                className="w-full flex items-center justify-between py-2 px-3 text-sm font-bold text-[#1c2520] hover:text-[#0e5c4a] cursor-pointer"
              >
                <span>Package by Cities</span>
                <span className="text-base font-extrabold text-[#0e5c4a]">
                  {openSubMenu === "cities" ? "−" : "+"}
                </span>
              </button>
              {openSubMenu === "cities" && (
                <div className="overflow-x-auto whitespace-nowrap px-3 py-2 bg-white rounded-xl border border-stone-200 flex gap-2">
                  <Link
                    href="/umrah-packages-london"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-block px-3 py-1.5 text-xs font-semibold bg-sky-50 text-sky-800 rounded-lg"
                  >
                    London Packages
                  </Link>
                  <Link
                    href="/umrah-packages-manchester"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-block px-3 py-1.5 text-xs font-semibold bg-sky-50 text-sky-800 rounded-lg"
                  >
                    Manchester Packages
                  </Link>
                  <Link
                    href="/umrah-packages-birmingham"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-block px-3 py-1.5 text-xs font-semibold bg-sky-50 text-sky-800 rounded-lg"
                  >
                    Birmingham Packages
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/hajj-packages"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 text-sm font-bold text-[#1c2520] hover:text-[#0e5c4a]"
            >
              Hajj Packages
            </Link>

            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 text-sm font-bold text-[#1c2520] hover:text-[#0e5c4a]"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>

      {/* App Picker / Call Popup Modal */}
      {showCallModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-stone-200 text-center relative animate-fade-in">
            <button
              onClick={() => setShowCallModal(false)}
              className="absolute top-3 right-3 text-stone-400 hover:text-stone-700 text-lg font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="w-14 h-14 bg-emerald-100 text-[#07382b] rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>

            <h3 className="text-xl font-extrabold text-[#1c2520] mb-1">Open pick an app</h3>
            <p className="text-xs text-stone-600 mb-4">Use this number to call us directly:</p>

            <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl p-3.5 mb-5 shadow-xs">
              <span className="text-2xl font-extrabold text-[#07382b] tracking-wider block">02039700100</span>
              <span className="text-[11px] text-emerald-700 font-semibold block mt-0.5">UK Direct Line</span>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="tel:02039700100"
                onClick={() => setShowCallModal(false)}
                className="w-full bg-[#07382b] hover:bg-[#05281e] text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call 02039700100
              </a>
              <button
                onClick={() => setShowCallModal(false)}
                className="w-full bg-stone-100 hover:bg-stone-200 text-stone-600 font-semibold py-2.5 px-4 rounded-xl transition-all text-xs cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Bottom Bar for Mobile & Md screens (< lg) */}
      <MobileFloatingCta onOpenCallModal={handleCallClick} />
    </header>
  );
}
