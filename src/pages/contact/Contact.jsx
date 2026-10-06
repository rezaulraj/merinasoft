import { useRef, useState } from "react";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Copy,
  Check,
  Send,
  Loader2,
  CheckCircle2,
  Navigation,
} from "lucide-react";
import logo from "/logo.png";

gsap.registerPlugin(ScrollTrigger);

const TICKET_API = "http://62.146.238.66:5010/api/ticket/postTicketFromAnyPage";
const EMAIL = "merinasoftteam@gmail.com";
const PHONE = "+8801405700100";
const ADDRESS = "2nd Floor, A&A Tower, 173 Arambagh, Dhaka 1000";
const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=A%26A%20Tower%20173%20Arambagh%20Dhaka%201000";
const MAP_EMBED =
  "https://www.google.com/maps?q=A%26A%20Tower%20173%20Arambagh%20Dhaka%201000&output=embed";

const quickContacts = [
  { label: "Call us", value: PHONE, icon: Phone, href: `tel:${PHONE}`, hint: "Talk to our team" },
  { label: "Email us", value: EMAIL, icon: Mail, href: `mailto:${EMAIL}`, hint: "Send your requirements" },
  { label: "Visit us", value: ADDRESS, icon: MapPin, href: MAP_LINK, hint: "Coffee & project discussion", external: true },
];

const serviceOptions = [
  { id: 1, name: "Clothing POS" },
  { id: 2, name: "Supershop POS" },
  { id: 3, name: "Pharmacy POS" },
  { id: 4, name: "Cement POS" },
  { id: 5, name: "Sanitary POS" },
  { id: 6, name: "E-Commerce" },
  { id: 7, name: "LMS" },
];

const brandGradient = "bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74]";
const textGradient = `${brandGradient} bg-clip-text text-transparent`;

// Inline "fill-in-the-blank" field
const inlineField =
  "mx-1 inline-block border-b-2 border-[#3b1578]/20 bg-transparent px-1 pb-1 font-semibold text-[#a31180] outline-none transition-colors duration-300 placeholder:font-normal placeholder:text-[#3b1578]/30 focus:border-[#d10c74]";

const Contact = () => {
  const pageRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be unavailable (e.g. insecure context); ignore
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const date = new Date().toISOString();

    try {
      const response = await axios.post(TICKET_API, {
        name,
        email,
        subject: "Website Contact Form",
        related_service_id: serviceId || null,
        message,
        software_name_id: 1,
        status_id: 1,
        date,
        last_update: date,
      });
      if (response.status !== 200) throw new Error(`Status ${response.status}`);

      setName("");
      setEmail("");
      setServiceId("");
      setMessage("");
      setStatus("sent");
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("error");
    }
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .from(".cp-hero-line", { yPercent: 110, duration: 1.1, stagger: 0.1 })
          .from(".cp-hero-fade", { y: 30, opacity: 0, duration: 0.9, stagger: 0.08 }, 0.4)
          .from(".cp-quick", { y: 60, opacity: 0, duration: 1, stagger: 0.1 }, 0.6);

        gsap.utils.toArray(".cp-reveal").forEach((el) => {
          gsap.from(el, {
            y: 50,
            opacity: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          });
        });

        gsap.from(".cp-map", {
          clipPath: "inset(12% 12% 12% 12% round 40px)",
          duration: 1.4,
          ease: "power3.inOut",
          scrollTrigger: { trigger: ".cp-map", start: "top 85%" },
        });
      });
    },
    { scope: pageRef },
  );

  return (
    <main ref={pageRef} className="relative bg-transparent font-arimo text-[#1b0b3a]">
      {/* ================= HERO ================= */}
      <section className="container mx-auto px-4 pb-16 pt-16 sm:pt-24">
        <div className="cp-hero-fade inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-[#a31180]">
          <span className={`h-0.5 w-10 rounded-full ${brandGradient}`} />
          Contact Us
        </div>

        <h1 className="mt-8 text-[clamp(2.6rem,7.5vw,6.5rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
          <span className="block overflow-hidden pb-[0.08em]">
            <span className="cp-hero-line block">Let’s build something</span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <span className="cp-hero-line block">
              <span className={`${textGradient} italic`}>amazing</span> together.
            </span>
          </span>
        </h1>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="cp-hero-fade max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Have a software idea, website project, mobile app, or digital
            solution in mind? Reach us quickly and our team will get back to you soon.
          </p>

          {/* Email pill with copy */}
          <div className="cp-hero-fade flex items-center gap-2 self-start rounded-full border border-[#3b1578]/10 bg-white/70 p-1.5 pl-5 backdrop-blur lg:self-auto">
            <a href={`mailto:${EMAIL}`} className="font-semibold text-[#3b1578] transition-colors hover:text-[#d10c74]">
              {EMAIL}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email address"
              className={`flex h-10 cursor-pointer items-center gap-1.5 rounded-full px-4 text-sm font-semibold text-white transition-all duration-300 ${
                copied ? "bg-[#28a745]" : `${brandGradient} hover:shadow-lg hover:shadow-fuchsia-500/30`
              }`}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>

        {/* Quick contact cards */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {quickContacts.map(({ label, value, icon: Icon, href, hint, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="cp-quick group relative flex min-h-[220px] flex-col overflow-hidden rounded-[28px] border border-[#3b1578]/10 bg-white/60 p-7 backdrop-blur transition-shadow duration-500 hover:shadow-[0_30px_60px_-25px_rgba(59,21,120,0.55)]"
            >
              {/* Fill sweeps up on hover */}
              <span className="absolute inset-0 translate-y-full bg-[#1b0b3a] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              <span className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full ${brandGradient} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-50`} />

              <div className="relative flex items-start justify-between">
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${brandGradient} text-white shadow-lg shadow-fuchsia-500/30`}>
                  <Icon className="h-6 w-6" />
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#3b1578]/15 text-[#3b1578] transition-all duration-500 group-hover:rotate-45 group-hover:border-white/20 group-hover:text-white">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
              <div className="relative mt-auto pt-8">
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#a31180] transition-colors duration-500 group-hover:text-[#ff7ac0]">
                  {label}
                </div>
                <div className="mt-2 break-words text-lg font-semibold leading-snug transition-colors duration-500 group-hover:text-white">
                  {value}
                </div>
                <div className="mt-1 text-sm text-gray-500 transition-colors duration-500 group-hover:text-white/60">{hint}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Info card */}
          <aside className="cp-reveal relative overflow-hidden rounded-[32px] bg-[#1b0b3a] p-8 text-white shadow-[0_40px_80px_-30px_rgba(59,21,120,0.7)] sm:p-10">
            <div className={`pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full ${brandGradient} opacity-40 blur-3xl`} />
            <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-[#d10c74] opacity-20 blur-3xl" />

            <div className="relative flex h-full flex-col">
              <div className="flex items-center gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-2">
                  <img src={logo} alt="MerinaSoft" className="h-full w-full object-contain" />
                </span>
                <div>
                  <div className="text-xl font-semibold">MerinaSoft</div>
                  <div className="text-sm text-white/60">Software Company</div>
                </div>
              </div>

              <h2 className="mt-10 text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
                Contact with us{" "}
                <span className="bg-gradient-to-r from-[#c9a6ff] via-[#f062c0] to-[#ff7ac0] bg-clip-text text-transparent italic">
                  easily.
                </span>
              </h2>
              <p className="mt-5 leading-8 text-white/70">
                Visit our office or send your project requirements through the
                contact form. We are ready to help your business grow with modern
                IT solutions.
              </p>

              <div className="mt-auto space-y-2 pt-10">
                {quickContacts.map(({ label, value, icon: Icon, href, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="flex items-center gap-3 rounded-2xl p-2 text-sm transition-colors hover:bg-white/10"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Icon className="h-4 w-4 text-[#ff7ac0]" />
                    </span>
                    <span className="font-semibold text-white/85">{value}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* Conversational form */}
          <div className="cp-reveal relative rounded-[32px] border border-[#3b1578]/10 bg-white/70 p-7 shadow-[0_30px_60px_-30px_rgba(59,21,120,0.3)] backdrop-blur-xl sm:p-12">
            {status === "sent" ? (
              <div className="flex min-h-[460px] flex-col items-center justify-center text-center" style={{ animation: "cpPop 0.6s cubic-bezier(0.34,1.56,0.64,1)" }}>
                <span className={`flex h-20 w-20 items-center justify-center rounded-full ${brandGradient} text-white shadow-xl shadow-fuchsia-500/30`}>
                  <CheckCircle2 className="h-10 w-10" />
                </span>
                <h3 className="mt-6 text-3xl font-semibold">Thank you!</h3>
                <p className="mt-3 max-w-sm text-gray-600">
                  Thank you for your message, we will contact you soon!
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 cursor-pointer rounded-full border-2 border-[#3b1578] px-6 py-3 text-sm font-semibold text-[#3b1578] transition-all duration-300 hover:bg-[#3b1578] hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#a31180]">Reach Us Quickly</span>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">Send your message</h2>

                <div className="mt-10 text-xl leading-[2.4] text-[#1b0b3a]/80 sm:text-2xl sm:leading-[2.3]">
                  Hello MerinaSoft, my name is
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="your full name"
                    aria-label="Full name"
                    className={`${inlineField} w-[13ch]`}
                  />
                  and I’m interested in
                  <select
                    value={serviceId}
                    onChange={(e) => setServiceId(e.target.value)}
                    aria-label="Service"
                    className={`${inlineField} w-[14ch] cursor-pointer`}
                  >
                    <option value="">a product</option>
                    {serviceOptions.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                  . You can reach me at
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    aria-label="Email address"
                    className={`${inlineField} w-[16ch]`}
                  />
                  .
                </div>

                <label className="mt-8 block">
                  <span className="text-xl text-[#1b0b3a]/80 sm:text-2xl">Here’s what I have in mind:</span>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project, goals and timeline…"
                    className="mt-4 w-full resize-none rounded-2xl border border-[#3b1578]/15 bg-white px-5 py-4 text-base font-semibold text-[#1b0b3a] outline-none transition-all duration-300 placeholder:font-normal placeholder:text-gray-400 focus:border-[#a31180] focus:shadow-[0_0_0_4px_rgba(163,17,128,0.10)]"
                  />
                </label>

                {status === "error" && (
                  <p className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                    Something went wrong. Please try again, or call us at {PHONE}.
                  </p>
                )}

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-sm text-gray-500">Our team will contact you as soon as possible.</p>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={`group relative inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-full ${brandGradient} px-8 py-4 font-semibold text-white shadow-[0_18px_40px_-12px_rgba(163,17,128,0.55)] transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-80`}
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    {status === "sending" ? (
                      <>
                        <Loader2 className="relative h-5 w-5 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        <span className="relative">Send Message</span>
                        <Send className="relative h-5 w-5 transition-transform duration-300 group-hover:-rotate-12 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="container mx-auto px-4 pb-28 pt-6">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="cp-reveal inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-[#a31180]">
              <span className={`h-0.5 w-10 rounded-full ${brandGradient}`} />
              Our Location
            </div>
            <h2 className="cp-reveal mt-5 text-[clamp(2rem,4.5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
              Visit the <span className={`${textGradient} italic`}>MerinaSoft</span> office.
            </h2>
          </div>
        </div>

        <div className="cp-map group relative mt-10 h-[460px] overflow-hidden rounded-[36px] shadow-[0_40px_80px_-35px_rgba(59,21,120,0.6)] sm:h-[540px]">
          <iframe
            title="MerinaSoft Office Location"
            src={MAP_EMBED}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0 grayscale-[70%] transition-[filter] duration-700 group-hover:grayscale-0"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3b1578]/30 to-transparent transition-opacity duration-700 group-hover:opacity-0" />

          {/* Floating address card */}
          <div className="absolute bottom-5 left-5 right-5 max-w-sm rounded-3xl border border-white/40 bg-(--color-primary-bg)/95 p-6 shadow-2xl backdrop-blur-xl sm:bottom-8 sm:left-8 sm:right-auto">
            <div className="flex items-center gap-3">
              <span className="relative flex h-12 w-12 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d10c74]/30 [animation-duration:2s]" />
                <span className={`relative flex h-12 w-12 items-center justify-center rounded-full ${brandGradient} text-white`}>
                  <MapPin className="h-5 w-5" />
                </span>
              </span>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#a31180]">Office Address</div>
                <div className="mt-1 font-semibold leading-snug">{ADDRESS}</div>
              </div>
            </div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noreferrer"
              className={`group/btn mt-5 flex items-center justify-center gap-2 rounded-2xl ${brandGradient} py-3 font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5`}
            >
              <Navigation className="h-4 w-4" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes cpPop { from { opacity: 0; transform: scale(0.92) } to { opacity: 1; transform: none } }
      `}</style>
    </main>
  );
};

export default Contact;
