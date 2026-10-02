import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import PackagesSection from "./components/sections/PackagesSection";
import UserReviewsSection from "./components/sections/UserReviewsSection";
import CitiesSection from "./components/sections/CitiesSection";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import UmrahPackageGlanceSection from "./components/sections/UmrahPackageGlanceSection";
import FaqSection from "./components/sections/FaqSection";
import CtaBanner from "./components/sections/CtaBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] flex flex-col justify-between selection:bg-[#d4af37] selection:text-slate-950">
      {/* Header & Navigation */}
      <Header />

      <div className="flex-1">
        {/* Section 1: Hero with Quote Form */}
        <HeroSection />

        {/* Section 2: Featured Package Cards Grid (3★, 4★, 5★) */}
        <PackagesSection />

        {/* Section 3: User Reviews (Added after package cards) */}
        <UserReviewsSection />

        {/* Section 4: Depart From Your City Grid */}
        <CitiesSection />

        {/* Section 5: How It Works 4-Step Journey */}
        <HowItWorksSection />

        {/* Section 6: Umrah Package At A Glance (Added after How It Works) */}
        <UmrahPackageGlanceSection />

        {/* Section 7: Frequently Asked Questions */}
        <FaqSection />

        {/* Section 8: CTA Banner - Don't Postpone the Call */}
        <CtaBanner />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
