import Link from "next/link";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ContactEnquiryForm from "../components/forms/ContactEnquiryForm";
import WhatsAppIcon from "../components/ui/WhatsAppIcon";

const whatsappUrl = "https://wa.me/447883408637";
const contactEmail = "admin@umrahplaners.co.uk";

const contactMethods = [
  {
    kind: "phone",
    title: "Call Us Direct",
    detail: "02039700013",
    description: "Mon–Sat 9am–8pm · Sun 10am–6pm",
    href: "tel:02039700013",
  },
  {
    kind: "whatsapp",
    title: "Chat Only WhatsApp",
    detail: "447883408637",
    description: "Fastest response · Available 7 days",
    href: whatsappUrl,
  },
  {
    kind: "whatsapp",
    title: "Call & Chat WhatsApp",
    detail: "447883408637",
    description: "Fastest response · Available 7 days",
    href: whatsappUrl,
  },
  {
    kind: "email",
    title: "Email",
    detail: contactEmail,
    description: "Send us a message through our enquiry form",
    href: "/contact-us#contact-enquiry-form",
  },
];

function ContactIcon({ kind, className = "h-5 w-5" }) {
  if (kind === "whatsapp") {
    return <WhatsAppIcon className={className} />;
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {kind === "phone" && (
        <path d="M5 4h3l2 5-2 1.5a15 15 0 0 0 5.5 5.5L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
      )}
      {kind === "email" && (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </>
      )}
    </svg>
  );
}

export const metadata = {
  title: "Call Now | Umrah Planers",
  description:
    "Speak with a real Umrah advisor by phone, WhatsApp, email, or send us an enquiry.",
};

export default function ContactUsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f8fafc]">
      <Header />

      <div className="flex-1">
        <section className="bg-islamic-pattern overflow-hidden py-14 text-white sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-4 inline-flex items-center gap-2 border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#D4AF37]">
                Talk with our team
              </p>
              <h1 className="font-serif text-4xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Speak With a<em className="font-normal text-[#D4AF37]">Dedicated</em> Umrah Specialist
              </h1>
              <p
                className="font-arabic mt-4 text-3xl text-[#D4AF37] sm:text-4xl"
                lang="ar"
                dir="rtl"
              >
                وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ
              </p>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-100/90 sm:text-base">
                No automated replies. No rehearsed responses. Connect with a knowledgeable Umrah specialist who understands the journey from start to finish — reachable through phone, WhatsApp, or email.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a
                  href="tel:02039700013"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-5 py-3 text-sm font-extrabold text-slate-950 transition-colors hover:bg-[#c59b27]"
                >
                  <ContactIcon kind="phone" className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#20ba5a]"
                >
                  <ContactIcon kind="whatsapp" className="h-4 w-4" />
                  WhatsApp
                </a>
                <Link
                  href="/contact-us#contact-enquiry-form"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/15"
                >
                  <ContactIcon kind="email" className="h-4 w-4" />
                  Email Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
            <div
              id="contact-enquiry-form"
              className="scroll-mt-24 lg:col-span-7"
            >
              <ContactEnquiryForm />
            </div>

            <aside className="lg:col-span-5">
              <div className="mb-5">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1E3A8A]">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
                  </span>
                  Advisors Online Now
                </span>
                <h2 className="mt-2 font-serif text-3xl font-bold text-[#0f172a]">
                  Reach Us Instantly
                </h2>
              </div>

              <div className="divide-y divide-slate-200 border-y border-slate-200">
                {contactMethods.map((method) => (
                  <a
                    key={method.title}
                    href={method.href}
                    target={method.kind === "whatsapp" ? "_blank" : undefined}
                    rel={
                      method.kind === "whatsapp"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-start gap-4 py-5 transition-colors hover:bg-white/60"
                  >
                    <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#1E3A8A] transition-colors group-hover:bg-blue-100">
                      <ContactIcon kind={method.kind} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-bold text-[#0f172a]">
                        {method.title}
                      </span>
                      <span className="mt-0.5 block break-words text-base font-semibold text-[#1E3A8A]">
                        {method.detail}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-slate-500">
                        {method.description}
                      </span>
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-5 flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-4">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#1E3A8A]">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <span>
                  <span className="block text-sm font-bold text-[#0f172a]">
                    Registered office address
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-slate-600">
                    128 City Road, London, United Kingdom, EC1V 2NX
                  </span>
                </span>
              </div>
            </aside>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}