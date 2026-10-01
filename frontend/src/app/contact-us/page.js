import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ContactEnquiryForm from "../components/forms/ContactEnquiryForm";

const whatsappUrl = "https://wa.me/442039700100";
const contactEmail = "rabiajabreel@gmail.com";

const contactMethods = [
  {
    kind: "phone",
    title: "Call Us Direct",
    detail: "02039700100",
    description: "Mon–Sat 9am–8pm · Sun 10am–6pm",
    href: "tel:02039700100",
  },
  {
    kind: "whatsapp",
    title: "Chat Only WhatsApp",
    detail: "442039700100",
    description: "Fastest response · Available 7 days",
    href: whatsappUrl,
  },
  {
    kind: "whatsapp",
    title: "Call & Chat WhatsApp",
    detail: "442039700100",
    description: "Fastest response · Available 7 days",
    href: whatsappUrl,
  },
  {
    kind: "email",
    title: "Email",
    detail: contactEmail,
    description: "Reply within 1 hour during office hours",
    href: `mailto:${contactEmail}`,
  },
];

function ContactIcon({ kind, className = "h-5 w-5" }) {
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
      {kind === "whatsapp" && (
        <>
          <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L4 20l1.1-3.7A8.5 8.5 0 1 1 20.5 11.5Z" />
          <path d="M9 8.5c.4 2.3 2.2 4.1 4.5 4.5" />
        </>
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
  title: "Contact Us | Makkah Tour",
  description:
    "Speak with a real Umrah advisor by phone, WhatsApp, email, or send us an enquiry.",
};

export default function ContactUsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#fbf8f1]">
      <Header />

      <div className="flex-1">
        <section className="bg-islamic-pattern overflow-hidden py-14 text-white sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-4 inline-flex items-center gap-2 border border-amber-200/30 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-200">
                Talk with our team
              </p>
              <h1 className="font-serif text-4xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Talk to a <em className="font-normal text-[#e5bd66]">Real</em> Umrah Advisor
              </h1>
              <p
                className="font-arabic mt-4 text-3xl text-[#e5bd66] sm:text-4xl"
                lang="ar"
                dir="rtl"
              >
                وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ
              </p>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-emerald-50/90 sm:text-base">
                No bots. No scripts. A real advisor who knows Umrah inside out —
                available by phone, WhatsApp, or email.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a
                  href="tel:02039700100"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#c9a24b] px-5 py-3 text-sm font-bold text-[#17231d] transition-colors hover:bg-[#dbb95f]"
                >
                  <ContactIcon kind="phone" className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#075e4b] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#08745c]"
                >
                  <ContactIcon kind="whatsapp" className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/15"
                >
                  <ContactIcon kind="email" className="h-4 w-4" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
            <div className="lg:col-span-7">
              <ContactEnquiryForm />
            </div>

            <aside className="lg:col-span-5">
              <div className="mb-5">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0e5c4a]">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  Advisors Online Now
                </span>
                <h2 className="mt-2 font-serif text-3xl font-bold text-[#1c2520]">
                  Reach Us Instantly
                </h2>
              </div>

              <div className="divide-y divide-stone-200 border-y border-stone-200">
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
                    <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#e9f3ee] text-[#0e5c4a] transition-colors group-hover:bg-[#dcece4]">
                      <ContactIcon kind={method.kind} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-bold text-[#1c2520]">
                        {method.title}
                      </span>
                      <span className="mt-0.5 block break-words text-base font-semibold text-[#0e5c4a]">
                        {method.detail}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-stone-500">
                        {method.description}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}