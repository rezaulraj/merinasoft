import { useRef, useState } from "react";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  MapPin,
  Phone,
  UserRound,
  BarChart3,
  Mail,
  ArrowUpRight,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TICKET_API = "http://62.146.238.66:5010/api/ticket/postTicketFromAnyPage";

const contactInfo = [
  {
    title: "Office Address",
    value: "2nd Floor, A&A Tower, 173 Arambagh, Dhaka 1000",
    icon: MapPin,
    href: "https://www.google.com/maps/search/?api=1&query=A%26A%20Tower%20173%20Arambagh%20Dhaka%201000",
  },
  { title: "Office Phone", value: "+8801405700100", icon: Phone, href: "tel:+8801405700100" },
  { title: "HR Contact", value: "+8801704473813", icon: UserRound, href: "tel:+8801704473813" },
  { title: "Marketing & Sales", value: "+8801405700200", icon: BarChart3, href: "tel:+8801405700200" },
  { title: "Email Address", value: "merinasoftteam@gmail.com", icon: Mail, href: "mailto:merinasoftteam@gmail.com" },
];

// Same ids the ticket API uses on the Contact page
const serviceOptions = [
  { id: 1, name: "Clothing POS" },
  { id: 2, name: "Supershop POS" },
  { id: 3, name: "Pharmacy POS" },
  { id: 4, name: "Cement POS" },
  { id: 5, name: "Sanitary POS" },
  { id: 6, name: "E-Commerce" },
  { id: 7, name: "LMS" },
];

const budgets = ["Budget Friendly", "Standard Project", "Premium Solution", "Enterprise Package"];
const countries = ["Bangladesh", "India", "United States", "United Kingdom", "United Arab Emirates"];

const brandGradient = "bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74]";
const textGradient = `${brandGradient} bg-clip-text text-transparent`;

const emptyForm = { name: "", email: "", phone: "", country: "Bangladesh", message: "" };

const FloatingField = ({ label, as = "input", className = "", ...props }) => {
  const Tag = as;
  return (
    <div className={`relative ${className}`}>
      <Tag
        placeholder=" "
        className={`peer w-full rounded-2xl border border-[#3b1578]/15 bg-white px-5 text-[15px] font-semibold text-[#1b0b3a] outline-none transition-all duration-300 focus:border-[#a31180] focus:shadow-[0_0_0_4px_rgba(163,17,128,0.10)] ${
          as === "textarea" ? "resize-none pb-4 pt-6" : "h-14 pt-4"
        }`}
        {...props}
      />
      <label className="pointer-events-none absolute left-5 top-4 text-[15px] font-semibold text-gray-400 transition-all duration-200 peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-[#a31180] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wider">
        {label}
      </label>
    </div>
  );
};

const Chip = ({ active, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={active}
    className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-bold transition-all duration-300 ${
      active
        ? `border-transparent ${brandGradient} text-white shadow-md shadow-fuchsia-500/30`
        : "border-[#3b1578]/15 bg-white text-[#3b1578] hover:border-[#a31180]/40 hover:text-[#a31180]"
    }`}
  >
    {children}
  </button>
);

const Contact = () => {
  const sectionRef = useRef(null);
  const [form, setForm] = useState(emptyForm);
  const [serviceId, setServiceId] = useState(null);
  const [budget, setBudget] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // The ticket API has no fields for phone/country/budget, so include them in the message
    const extra = [
      form.phone && `Phone: ${form.phone}`,
      `Country: ${form.country}`,
      budget && `Budget: ${budget}`,
    ]
      .filter(Boolean)
      .join("\n");

    const now = new Date().toISOString();

    try {
      const response = await axios.post(TICKET_API, {
        name: form.name,
        email: form.email,
        subject: "Website Contact Form (Home)",
        related_service_id: serviceId,
        message: `${form.message}\n\n${extra}`,
        software_name_id: 1,
        status_id: 1,
        date: now,
        last_update: now,
      });
      if (response.status !== 200) throw new Error(`Status ${response.status}`);

      setForm(emptyForm);
      setServiceId(null);
      setBudget(null);
      setStatus("sent");
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("error");
    }
  };

  useGSAP(
    () => {
      gsap.from(".ct-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
      gsap.from(".ct-info", {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ct-grid", start: "top 80%" },
      });
      gsap.from(".ct-form", {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ct-grid", start: "top 80%" },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-transparent py-24 font-arimo">
      <div className="container mx-auto px-4">
        {/* ---------- Heading ---------- */}
        <div className="text-center">
          <div className="ct-reveal inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-[#a31180]">
            <span className={`h-0.5 w-10 rounded-full ${brandGradient}`} />
            Contact Us
            <span className={`h-0.5 w-10 rounded-full ${brandGradient}`} />
          </div>
          <h2 className="ct-reveal mx-auto mt-5 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-[#1b0b3a] sm:text-6xl lg:text-7xl">
            Got a project? <span className={`${textGradient} italic`}>Let’s talk.</span>
          </h2>
          <p className="ct-reveal mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            It’s easy to get in touch. Fill out the form, give us a call, or visit
            our office for a coffee and a project discussion.
          </p>
        </div>

        <div className="ct-grid mt-16 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* ---------- Info card ---------- */}
          <div className="ct-info relative overflow-hidden rounded-[32px] bg-[#1b0b3a] p-8 text-white shadow-[0_40px_80px_-30px_rgba(59,21,120,0.7)] sm:p-10">
            <div className={`pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full ${brandGradient} opacity-40 blur-3xl`} />
            <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-[#d10c74] opacity-20 blur-3xl" />
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                maskImage: "linear-gradient(to bottom, black, transparent 70%)",
                WebkitMaskImage: "linear-gradient(to bottom, black, transparent 70%)",
              }}
            />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#28c840] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#28c840]" />
                </span>
                Ready to help your business grow
              </span>

              <h3 className="mt-6 text-3xl font-black leading-tight sm:text-4xl">
                Let’s build something{" "}
                <span className="bg-gradient-to-r from-[#c9a6ff] via-[#f062c0] to-[#ff7ac0] bg-clip-text text-transparent">
                  great together.
                </span>
              </h3>

              <div className="mt-8 space-y-2">
                {contactInfo.map(({ title, value, icon: Icon, href }) => (
                  <a
                    key={title}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl p-3 transition-all duration-300 hover:bg-white/10"
                  >
                    <span className={"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[#3b1578] group-hover:via-[#a31180] group-hover:to-[#d10c74]"}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-bold uppercase tracking-wider text-white/50">
                        {title}
                      </span>
                      <span className="block truncate font-semibold sm:whitespace-normal">{value}</span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#ff7ac0]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ---------- Form ---------- */}
          <div className="ct-form relative rounded-[32px] border border-[#3b1578]/10 bg-white/70 p-6 shadow-[0_30px_60px_-30px_rgba(59,21,120,0.3)] backdrop-blur-xl sm:p-10">
            {status === "sent" ? (
              <div className="flex h-full min-h-[480px] flex-col items-center justify-center text-center">
                <span className={`flex h-20 w-20 items-center justify-center rounded-full ${brandGradient} text-white shadow-xl shadow-fuchsia-500/30`}>
                  <CheckCircle2 className="h-10 w-10" />
                </span>
                <h3 className="mt-6 text-3xl font-black text-[#1b0b3a]">Message sent!</h3>
                <p className="mt-3 max-w-sm text-gray-600">
                  Thank you for reaching out. Our team will contact you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 cursor-pointer rounded-full border-2 border-[#3b1578] px-6 py-3 text-sm font-black text-[#3b1578] transition-all duration-300 hover:bg-[#3b1578] hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <p className="mb-3 text-sm font-black text-[#1b0b3a]">I’m interested in…</p>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((s) => (
                      <Chip
                        key={s.id}
                        active={serviceId === s.id}
                        onClick={() => setServiceId(serviceId === s.id ? null : s.id)}
                      >
                        {s.name}
                      </Chip>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <FloatingField label="Full name" value={form.name} onChange={update("name")} required />
                  <FloatingField label="Email address" type="email" value={form.email} onChange={update("email")} required />
                  <FloatingField label="Phone number" type="tel" value={form.phone} onChange={update("phone")} />
                  <div className="relative">
                    <select
                      value={form.country}
                      onChange={update("country")}
                      className="h-14 w-full cursor-pointer appearance-none rounded-2xl border border-[#3b1578]/15 bg-white px-5 pt-4 text-[15px] font-semibold text-[#1b0b3a] outline-none transition-all duration-300 focus:border-[#a31180] focus:shadow-[0_0_0_4px_rgba(163,17,128,0.10)]"
                    >
                      {countries.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute left-5 top-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Country
                    </span>
                    <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#a31180]">▾</span>
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-sm font-black text-[#1b0b3a]">Project budget</p>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <Chip key={b} active={budget === b} onClick={() => setBudget(budget === b ? null : b)}>
                        {b}
                      </Chip>
                    ))}
                  </div>
                </div>

                <FloatingField
                  as="textarea"
                  rows={5}
                  label="Tell us about your project"
                  value={form.message}
                  onChange={update("message")}
                  required
                />

                {status === "error" && (
                  <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                    Something went wrong. Please try again, or call us at +8801405700100.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`group relative flex h-14 w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-2xl ${brandGradient} font-black text-white shadow-[0_18px_40px_-12px_rgba(163,17,128,0.55)] transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-80`}
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
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
