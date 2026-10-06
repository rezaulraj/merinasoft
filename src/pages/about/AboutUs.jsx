import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ArrowRight,
  ArrowUpRight,
  Users,
  Code,
  TrendingUp,
  HeartHandshake,
  Lightbulb,
  Eye,
  LifeBuoy,
  BadgeCheck,
  Copy,
  Check,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FOUNDED = 2018;
const yearsOfExperience = new Date().getFullYear() - FOUNDED;
const LICENSE_NUMBER = "TRAD/DSCC/325400/2025";

const partnerCount = Object.keys(
  import.meta.glob("../../assets/partners/partner-*.png", { eager: true }),
).length;

const img = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const images = {
  team: img("1552664730-d307ca884978"),
  office: img("1497366754035-f200968a6e72"),
  developer: img("1515879218367-8466d910aaa4"),
  meeting: img("1522071820081-009f0129c71c"),
};

const pillars = [
  {
    icon: Users,
    title: "Collaborative Team",
    text: "Our company is built on collaboration and teamwork. We believe the best results come from working together with open communication.",
  },
  {
    icon: Code,
    title: "Smart Software",
    text: "We create software that is powerful, reliable, user-friendly, and tailored to meet each client’s specific business needs.",
  },
  {
    icon: TrendingUp,
    title: "Business Value",
    text: "Our success is directly tied to our clients’ success, so every solution is designed to create real business value.",
  },
];

const values = [
  {
    icon: HeartHandshake,
    title: "Customer-Centric",
    text: "We focus on understanding each client’s unique needs and building solutions that create real business value.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    text: "We continuously explore new technologies and smarter ways to solve complex business problems.",
  },
  {
    icon: Eye,
    title: "Transparency",
    text: "We keep our clients informed with clear project plans, progress updates, and honest communication.",
  },
  {
    icon: LifeBuoy,
    title: "Long-Term Support",
    text: "We provide ongoing maintenance and support to keep software secure, updated, and performing smoothly.",
  },
];

const services = [
  "Web Development",
  "Mobile App Development",
  "Custom Software",
  "Cloud Solutions",
  "UI/UX Focused Software",
  "Ongoing Maintenance",
];

const industries = [
  "Healthcare",
  "Finance",
  "Education",
  "Retail",
  "Business Automation",
  "Enterprise Software",
];

const stats = [
  { value: FOUNDED, label: "Founded" },
  { value: `${yearsOfExperience}+`, label: "Years of experience" },
  { value: `${partnerCount}+`, label: "Trusted partners" },
  { value: "100%", label: "Custom solutions" },
];

const philosophy =
  "We understand that software development can be complex and time-consuming. That’s why we make the process transparent, collaborative and simple — so you can focus on growing your business.";

const brandGradient = "bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74]";
const textGradient = `${brandGradient} bg-clip-text text-transparent`;
const pad = (i) => String(i + 1).padStart(2, "0");

const Eyebrow = ({ children, className = "", center = false }) => (
  <div className={`inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-[#a31180] ${className}`}>
    <span className={`h-0.5 w-10 rounded-full ${brandGradient}`} />
    {children}
    {center && <span className={`h-0.5 w-10 rounded-full ${brandGradient}`} />}
  </div>
);

// Small rounded photo that sits inline inside the headline
const InlineImage = ({ src, alt }) => (
  <span className="ab-capsule relative mx-[0.12em] inline-block h-[0.78em] w-[1.7em] -translate-y-[0.06em] overflow-hidden rounded-full align-middle shadow-[0_10px_30px_-10px_rgba(59,21,120,0.5)] ring-2 ring-white">
    <img src={src} alt={alt} className="h-full w-full object-cover" />
  </span>
);

const AboutUs = () => {
  const pageRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const copyLicense = async () => {
    try {
      await navigator.clipboard.writeText(LICENSE_NUMBER);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be unavailable (e.g. insecure context); ignore
    }
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Hero
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .from(".ab-hero-line", { yPercent: 110, opacity: 0, duration: 1, stagger: 0.1 })
          .from(".ab-capsule", { width: 0, duration: 0.9, stagger: 0.15, clearProps: "width" }, 0.5)
          .from(".ab-hero-fade", { y: 30, opacity: 0, duration: 0.8, stagger: 0.1 }, 0.7);

        // Generic reveals
        gsap.utils.toArray(".ab-reveal").forEach((el) => {
          gsap.from(el, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
        });

        // Collage parallax
        gsap.utils.toArray("[data-speed]").forEach((el) => {
          gsap.to(el, {
            yPercent: Number(el.dataset.speed) * -20,
            ease: "none",
            scrollTrigger: { trigger: ".ab-collage", start: "top bottom", end: "bottom top", scrub: true },
          });
        });

        // Philosophy: words light up as you scroll
        gsap.fromTo(
          ".ab-word",
          { opacity: 0.12 },
          {
            opacity: 1,
            stagger: 0.05,
            ease: "none",
            scrollTrigger: { trigger: ".ab-philosophy", start: "top 75%", end: "bottom 45%", scrub: true },
          },
        );

        // Values
        gsap.from(".ab-value", {
          y: 70,
          opacity: 0,
          rotate: (i) => (i % 2 ? 3 : -3),
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".ab-values", start: "top 80%" },
        });
      });
    },
    { scope: pageRef },
  );

  return (
    <main ref={pageRef} className="relative overflow-hidden bg-transparent font-arimo text-[#1b0b3a]">
      {/* ================= HERO ================= */}
      <section className="container mx-auto px-4 pb-16 pt-16 sm:pt-24">
        <Eyebrow className="ab-hero-fade">About MerinaSoft</Eyebrow>

        <h1 className="mt-8 text-[clamp(2.6rem,7.5vw,6.5rem)] font-semibold leading-[1.04] tracking-[-0.035em]">
          <span className="block overflow-hidden pb-[0.08em]">
            <span className="ab-hero-line block">
              We build
              <InlineImage src={images.team} alt="MerinaSoft team" />
              software
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <span className="ab-hero-line block">
              that <span className={`${textGradient} italic`}>moves</span>
              <InlineImage src={images.developer} alt="Developer at work" />
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <span className="ab-hero-line block">business forward.</span>
          </span>
        </h1>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="ab-hero-fade max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            We’re a team of dedicated professionals passionate about creating
            innovative solutions that empower clients to achieve their goals —
            software that is functional, intuitive and user-friendly.
          </p>
          <div className="ab-hero-fade flex flex-wrap gap-4">
            <Link
              to="/contact"
              className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full ${brandGradient} px-7 py-4 font-bold text-white shadow-[0_10px_40px_-10px_#d10c74] transition-transform duration-300 hover:-translate-y-0.5`}
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Start a Project</span>
              <ArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-[#3b1578]/20 bg-white/60 px-7 py-4 font-bold text-[#3b1578] backdrop-blur transition-all duration-300 hover:border-[#a31180]/40 hover:text-[#a31180]"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="ab-hero-fade mt-16 grid grid-cols-2 overflow-hidden rounded-[28px] border border-[#3b1578]/10 bg-white/60 backdrop-blur lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`p-6 sm:p-8 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b lg:border-b-0" : ""} border-[#3b1578]/10 lg:border-r lg:last:border-r-0`}
            >
              <div className={`text-4xl font-semibold leading-none sm:text-5xl ${textGradient}`}>{s.value}</div>
              <div className="mt-2 text-sm font-semibold text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= COLLAGE + PILLARS ================= */}
      <section className="container mx-auto grid items-center gap-16 px-4 py-20 lg:grid-cols-2">
        <div className="ab-collage relative h-[520px] sm:h-[600px]">
          <div data-speed="1" className="absolute left-0 top-0 h-[62%] w-[62%] overflow-hidden rounded-[28px] shadow-[0_40px_80px_-30px_rgba(59,21,120,0.6)]">
            <img src={images.team} alt="Software team collaboration" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div data-speed="2" className="absolute bottom-0 right-0 h-[58%] w-[58%] overflow-hidden rounded-[28px] border-8 border-(--color-primary-bg) shadow-[0_40px_80px_-30px_rgba(59,21,120,0.6)]">
            <img src={images.office} alt="Modern software office" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div data-speed="3" className="absolute right-[6%] top-[4%] h-[30%] w-[30%] overflow-hidden rounded-full border-8 border-(--color-primary-bg) shadow-xl">
            <img src={images.meeting} alt="Team meeting" loading="lazy" className="h-full w-full object-cover" />
          </div>

          <div data-speed="1.5" className="absolute bottom-[12%] left-[4%] flex items-center gap-3 rounded-2xl border border-[#a31180]/10 bg-(--color-primary-bg)/95 px-4 py-3 shadow-[0_20px_40px_-15px_rgba(59,21,120,0.45)] backdrop-blur">
            <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${brandGradient} text-white`}>
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <div className="text-sm font-semibold">Agile Development</div>
              <div className="text-xs font-semibold text-gray-500">Transparent workflow</div>
            </div>
          </div>

          <div className="absolute left-[56%] top-[50%] flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#1b0b3a] text-white shadow-2xl ring-8 ring-(--color-primary-bg)">
            <span className="text-3xl font-semibold leading-none">{yearsOfExperience}+</span>
            <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-white/60">Years</span>
          </div>
        </div>

        <div>
          <Eyebrow className="ab-reveal">Who We Are</Eyebrow>
          <h2 className="ab-reveal mt-5 text-4xl font-semibold leading-[1.1] tracking-[-0.025em] sm:text-5xl">
            Built on teamwork, driven by <span className={`${textGradient} italic`}>your success.</span>
          </h2>

          <div className="mt-10 space-y-4">
            {pillars.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className="ab-reveal group flex gap-5 rounded-3xl border border-[#3b1578]/10 bg-white/60 p-6 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:bg-white hover:shadow-[0_25px_50px_-25px_rgba(59,21,120,0.45)]"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-fuchsia-50 text-[#a31180] transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-[#3b1578] group-hover:via-[#a31180] group-hover:to-[#d10c74] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-[#d10c74]">{pad(i)}</span>
                    <h3 className="text-xl font-semibold">{title}</h3>
                  </div>
                  <p className="mt-2 leading-7 text-gray-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="ab-philosophy container mx-auto px-4 py-24 text-center">
        <Eyebrow center>Our Working Philosophy</Eyebrow>
        <p className="mx-auto mt-10 max-w-5xl text-[clamp(1.6rem,3.6vw,3.2rem)] font-semibold leading-[1.3] tracking-[-0.02em]">
          {philosophy.split(" ").map((word, i) => (
            <span key={i} className="ab-word">
              {word}{" "}
            </span>
          ))}
        </p>
        <p className="ab-reveal mx-auto mt-10 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
          We work closely with clients to understand their specific needs, tailor
          solutions accordingly, and exceed expectations through reliable delivery.
        </p>
      </section>

      {/* ================= VALUES ================= */}
      <section className="ab-values container mx-auto px-4 py-20">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Eyebrow className="ab-reveal">Our Values</Eyebrow>
            <h2 className="ab-reveal mt-5 text-4xl font-semibold leading-[1.1] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
              What makes us <span className={`${textGradient} italic`}>different.</span>
            </h2>
          </div>
          <p className="ab-reveal max-w-md text-base leading-8 text-gray-600 sm:text-lg">
            Technical expertise, ethical business practice, strong communication
            and client-focused delivery.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="ab-value group relative min-h-[340px] overflow-hidden rounded-[28px] border border-[#3b1578]/10 bg-white/70 p-7 backdrop-blur"
            >
              {/* Gradient fill rising on hover */}
              <div className={`absolute inset-0 translate-y-full ${brandGradient} transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0`} />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-fuchsia-50 text-[#a31180] transition-colors duration-500 group-hover:bg-white/20 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-6xl font-semibold leading-none text-transparent transition-all duration-500 [-webkit-text-stroke:1.5px_rgba(59,21,120,0.15)] group-hover:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.4)]">
                    {pad(i)}
                  </span>
                </div>
                <h3 className="mt-auto pt-10 text-2xl font-semibold transition-colors duration-500 group-hover:text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 transition-colors duration-500 group-hover:text-white/85">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES & INDUSTRIES ================= */}
      <section className="container mx-auto px-4 py-20">
        <div className="ab-reveal relative overflow-hidden rounded-[36px] bg-[#1b0b3a] p-8 text-white sm:p-12 lg:p-16">
          <div className={`pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full ${brandGradient} opacity-40 blur-3xl`} />
          <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#d10c74] opacity-20 blur-3xl" />

          <div className="relative grid gap-14 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#ff7ac0]">What we do</span>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                End-to-end software, <br className="hidden sm:block" />
                from idea to support.
              </h2>
              <ul className="mt-8">
                {services.map((service, i) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="group flex items-center gap-4 border-b border-white/10 py-4 transition-all duration-300 hover:pl-3"
                    >
                      <span className="text-xs font-semibold text-white/40">{pad(i)}</span>
                      <span className="flex-1 text-lg font-bold transition-colors group-hover:text-[#ff7ac0] sm:text-xl">
                        {service}
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-white/30 transition-all duration-300 group-hover:rotate-45 group-hover:text-[#ff7ac0]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#ff7ac0]">Industries we serve</span>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                Experienced across multiple business sectors.
              </h2>
              <p className="mt-5 leading-8 text-white/65">
                We work with clients from different industries and build solutions
                that match their operations, customers, and goals.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {industries.map((industry) => (
                  <span
                    key={industry}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-bold backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-[#a31180]"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#ff7ac0]" />
                    {industry}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-10">
                <div className="overflow-hidden rounded-3xl">
                  <img src={img("1522071820081-009f0129c71c", 1200)} alt="MerinaSoft team at work" loading="lazy" className="h-48 w-full object-cover opacity-80 transition-transform duration-700 hover:scale-105" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRADE LICENSE ================= */}
      <section className="container mx-auto px-4 py-20">
        <div className="ab-reveal relative mx-auto max-w-4xl overflow-hidden rounded-[32px] bg-gradient-to-br from-[#3b1578] via-[#a31180] to-[#d10c74] p-[2px] shadow-[0_40px_80px_-35px_rgba(163,17,128,0.6)]">
          <div className="relative overflow-hidden rounded-[30px] bg-(--color-primary-bg) p-8 sm:p-12">
            {/* Certificate guilloche pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "repeating-radial-gradient(circle at 100% 0%, #3b1578 0 1px, transparent 1px 14px)",
              }}
            />
            <div className="relative grid items-center gap-10 md:grid-cols-[auto_1fr]">
              {/* Seal */}
              <div className="relative mx-auto h-36 w-36">
                <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow [animation-duration:20s] motion-reduce:animate-none">
                  <defs>
                    <path id="abSeal" d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" />
                  </defs>
                  <text fill="#a31180" fontSize="8.5" fontWeight="800" letterSpacing="2.4">
                    <textPath href="#abSeal">REGISTERED BUSINESS • MERINASOFT • DHAKA •</textPath>
                  </text>
                </svg>
                <div className={`absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full ${brandGradient} text-white shadow-lg shadow-fuchsia-500/40`}>
                  <BadgeCheck className="h-10 w-10" />
                </div>
              </div>

              <div className="text-center md:text-left">
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#a31180]">Business Registration</span>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Trade License</h2>
                <p className="mt-2 text-gray-500">Official business trade license information for MerinaSoft.</p>

                <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-[#a31180]/30 bg-white/70 p-4 sm:flex-row md:items-center">
                  <div className="flex-1">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">License Number</div>
                    <div className="mt-1 break-all font-mono text-lg font-semibold tracking-wide text-[#3b1578] sm:text-xl">
                      {LICENSE_NUMBER}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={copyLicense}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#3b1578]/15 bg-white px-4 py-2 text-sm font-bold text-[#3b1578] transition-all duration-300 hover:border-[#a31180]/40 hover:text-[#a31180]"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="container mx-auto px-4 pb-28 pt-10">
        <div className="ab-reveal text-center">
          <h2 className="mx-auto max-w-4xl text-[clamp(2rem,5vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
            Looking for a software partner{" "}
            <span className={`${textGradient} italic`}>committed to excellence?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            We’re ready to help you plan, design, develop, launch, and support
            software solutions that grow with your business.
          </p>
          <Link
            to="/contact"
            className={`group relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-full ${brandGradient} px-9 py-5 text-lg font-semibold text-white shadow-[0_20px_50px_-12px_#d10c74] transition-transform duration-300 hover:-translate-y-1`}
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Let’s Build Together</span>
            <ArrowRight className="relative h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
