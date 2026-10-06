import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Check, CheckCircle2, ChevronDown, ShieldCheck, Sparkles } from "lucide-react";
import { getLenis } from "../../hooks/useSmoothScroll";

gsap.registerPlugin(ScrollTrigger);

const brandGradient = "bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74]";
const textGradient = `${brandGradient} bg-clip-text text-transparent`;
const lightTextGradient = "bg-gradient-to-r from-[#c9a6ff] via-[#f062c0] to-[#ff7ac0] bg-clip-text text-transparent";
const formatPrice = (price) => new Intl.NumberFormat("en-BD").format(price);
const pad = (i) => String(i + 1).padStart(2, "0");
const VISIBLE_PLAN_FEATURES = 6;

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = getLenis();
  if (lenis) lenis.scrollTo(el, { offset: -130, duration: 1.4 });
  else el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Eyebrow = ({ children, light = false, center = false }) => (
  <div className={`inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] ${light ? "text-[#ff7ac0]" : "text-[#a31180]"}`}>
    <span className={`h-0.5 w-10 rounded-full ${brandGradient}`} />
    {children}
    {center && <span className={`h-0.5 w-10 rounded-full ${brandGradient}`} />}
  </div>
);

// Card with a brand-colored spotlight that follows the cursor
const SpotlightCard = ({ className = "", children }) => {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <div onMouseMove={onMove} className={`group relative overflow-hidden ${className}`}>
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(360px circle at var(--x) var(--y), rgba(163,17,128,0.13), transparent 45%)" }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

/* ---------------- Pricing card ---------------- */
const PlanCard = ({ plan, onChoose }) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = plan.icon;
  const dark = plan.popular;
  const hidden = plan.features.length - VISIBLE_PLAN_FEATURES;
  const list = expanded ? plan.features : plan.features.slice(0, VISIBLE_PLAN_FEATURES);

  return (
    <article
      className={`pp-plan relative flex flex-col rounded-[30px] transition-[translate,box-shadow] duration-500 hover:-translate-y-2 ${
        dark
          ? `${brandGradient} p-[2px] shadow-[0_40px_80px_-30px_rgba(163,17,128,0.65)] lg:-mt-4 lg:mb-4`
          : "border border-[#3b1578]/10 bg-white/70 backdrop-blur hover:shadow-[0_30px_60px_-30px_rgba(59,21,120,0.45)]"
      }`}
    >
      <div className={`relative flex h-full flex-col overflow-hidden rounded-[28px] p-7 ${dark ? "bg-[#1b0b3a] text-white" : ""}`}>
        {dark && (
          <>
            <div className={`pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full ${brandGradient} opacity-40 blur-3xl`} />
            <span className={`absolute right-5 top-5 inline-flex items-center gap-1 rounded-full ${brandGradient} px-3 py-1.5 text-xs font-semibold`}>
              <Sparkles className="h-3.5 w-3.5" /> Most Popular
            </span>
          </>
        )}

        <div className="relative flex items-start justify-between gap-4">
          <span
            className={`flex h-14 w-14 items-center justify-center rounded-2xl text-xl ${
              dark ? `${brandGradient} text-white shadow-lg shadow-fuchsia-500/40` : "bg-fuchsia-50 text-[#a31180]"
            }`}
          >
            <Icon />
          </span>
          {plan.badge && !dark && (
            <span className="rounded-full border border-[#3b1578]/10 bg-white px-3 py-1.5 text-xs font-semibold text-[#3b1578]">
              {plan.badge}
            </span>
          )}
        </div>

        <h3 className="relative mt-6 text-2xl font-semibold">{plan.name}</h3>
        <p className={`relative mt-1 text-sm font-semibold ${dark ? "text-white/60" : "text-gray-500"}`}>{plan.subtitle}</p>

        <div className={`relative mt-6 border-b pb-6 ${dark ? "border-white/10" : "border-[#3b1578]/10"}`}>
          <div className={`text-5xl font-semibold tracking-[-0.03em] ${dark ? "text-white" : plan.price === 0 ? "text-[#1b0b3a]" : textGradient}`}>
            ৳{formatPrice(plan.price)}
          </div>
          <p className={`mt-2 text-xs font-semibold uppercase tracking-wider ${dark ? "text-white/50" : "text-gray-400"}`}>
            {plan.price === 0 ? "Free Package" : "One Time Payment"}
          </p>
        </div>

        <p className={`relative mt-5 text-sm leading-7 ${dark ? "text-white/70" : "text-gray-600"}`}>{plan.description}</p>

        <ul className="relative mt-6 flex-1 space-y-3">
          {list.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${dark ? "bg-white/15" : "bg-fuchsia-50"}`}>
                <Check className={`h-3 w-3 ${dark ? "text-[#ff7ac0]" : "text-[#a31180]"}`} />
              </span>
              <span className={`text-sm font-medium leading-5 ${dark ? "text-white/85" : "text-gray-600"}`}>{feature}</span>
            </li>
          ))}
        </ul>

        {hidden > 0 && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className={`relative mt-4 inline-flex cursor-pointer items-center gap-1 self-start text-sm font-semibold ${dark ? "text-[#ff7ac0]" : "text-[#a31180]"}`}
          >
            {expanded ? "Show less" : `+ ${hidden} more`}
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
          </button>
        )}

        <button
          type="button"
          onClick={() => onChoose(plan)}
          className={`group/btn relative mt-8 flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-2xl px-5 py-4 text-sm font-semibold transition-all duration-300 ${
            dark
              ? `${brandGradient} text-white shadow-lg shadow-fuchsia-500/30`
              : "bg-[#1b0b3a] text-white hover:bg-gradient-to-r hover:from-[#3b1578] hover:via-[#a31180] hover:to-[#d10c74]"
          }`}
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
          <span className="relative">{plan.buttonText}</span>
          <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </article>
  );
};

/* ---------------- Page ---------------- */
const ProductPage = ({ product }) => {
  const {
    name,
    heroIcon: HeroIcon,
    heroImage,
    badge,
    title,
    titleAccent,
    intro,
    heroPoints,
    trust,
    highlights,
    featuresSection,
    features,
    successSection,
    pricingSection,
    plans,
    cta,
  } = product;

  const navigate = useNavigate();
  const pageRef = useRef(null);
  const [activeSection, setActiveSection] = useState("");

  const lowestPaid = Math.min(...plans.filter((p) => p.price > 0).map((p) => p.price));
  const hasFree = plans.some((p) => p.price === 0);

  const handleCheckout = (plan) => {
    const params = new URLSearchParams({
      product: name,
      plan: plan.name,
      price: String(plan.price),
    });
    navigate(`/checkout?${params.toString()}`);
  };

  const navLinks = [
    { id: "features", label: "Features" },
    { id: "why", label: `Why ${name}` },
    { id: "pricing", label: "Pricing" },
  ];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .from(".pp-hero-line", { yPercent: 110, duration: 1.1, stagger: 0.1 })
          .from(".pp-hero-fade", { y: 30, opacity: 0, duration: 0.9, stagger: 0.07 }, 0.35)
          .from(".pp-device", { y: 80, rotate: 3, opacity: 0, duration: 1.3 }, 0.3)
          .from(".pp-float", { scale: 0.6, opacity: 0, duration: 0.8, stagger: 0.15, ease: "back.out(1.8)" }, 0.9);

        gsap.utils.toArray(".pp-reveal").forEach((el) => {
          gsap.from(el, {
            y: 50,
            opacity: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          });
        });

        gsap.from(".pp-feature", {
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".pp-features", start: "top 80%" },
        });

        gsap.from(".pp-plan", {
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".pp-plans", start: "top 80%" },
        });

        gsap.fromTo(
          ".pp-why-img",
          { clipPath: "inset(15% 15% 15% 15% round 32px)", scale: 1.2 },
          {
            clipPath: "inset(0% 0% 0% 0% round 32px)",
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: ".pp-why", start: "top 85%", end: "center 55%", scrub: true },
          },
        );
      });

      // Highlight the sub-nav link for the section in view
      navLinks.forEach(({ id }) => {
        ScrollTrigger.create({
          trigger: `#${id}`,
          start: "top 45%",
          end: "bottom 45%",
          onToggle: (self) => self.isActive && setActiveSection(id),
        });
      });
    },
    { scope: pageRef },
  );

  return (
    <main ref={pageRef} className="relative bg-transparent font-arimo text-[#1b0b3a]">
      {/* ================= HERO ================= */}
      <section className="container mx-auto grid items-center gap-14 px-4 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="pp-hero-fade inline-flex items-center gap-2 rounded-full border border-[#a31180]/15 bg-white/70 py-1.5 pl-1.5 pr-4 text-sm font-semibold text-gray-600 backdrop-blur">
            <span className={`flex h-7 w-7 items-center justify-center rounded-full ${brandGradient} text-xs text-white`}>
              <HeroIcon />
            </span>
            {badge}
          </div>

          <h1 className="mt-7 text-[clamp(2.4rem,5.5vw,4.75rem)] font-semibold leading-[1.04] tracking-[-0.035em]">
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="pp-hero-line block">{title}</span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <span className={`pp-hero-line block italic ${textGradient}`}>{titleAccent}</span>
            </span>
          </h1>

          <p className="pp-hero-fade mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">{intro}</p>

          <ul className="mt-7 grid max-w-xl gap-2.5 sm:grid-cols-2">
            {heroPoints.map((point) => (
              <li key={point} className="pp-hero-fade flex items-center gap-3 text-[15px] font-semibold">
                <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${brandGradient} text-white`}>
                  <Check className="h-3.5 w-3.5" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="pp-hero-fade mt-9 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollToId("pricing")}
              className={`group relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-full ${brandGradient} px-7 py-4 font-semibold text-white shadow-[0_10px_40px_-10px_#d10c74] transition-transform duration-300 hover:-translate-y-0.5`}
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">View Packages</span>
              <ArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              onClick={() => scrollToId("features")}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#3b1578]/20 bg-white/60 px-7 py-4 font-semibold text-[#3b1578] backdrop-blur transition-all duration-300 hover:border-[#a31180]/40 hover:text-[#a31180]"
            >
              Explore Features
            </button>
          </div>

          <div className="pp-hero-fade mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-gray-500">
            {trust.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2">
                <Icon className="text-[#a31180]" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Device mockup */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="pp-device relative overflow-hidden rounded-[28px] border border-[#3b1578]/10 bg-white shadow-[0_50px_100px_-40px_rgba(59,21,120,0.7)]">
            <div className="flex items-center gap-2 border-b border-[#3b1578]/10 px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <div className="ml-3 flex-1 truncate rounded-full bg-[#3b1578]/5 px-4 py-1 text-center text-xs text-gray-400">
                {name} · MerinaSoft
              </div>
            </div>
            <div className="relative aspect-[4/3]">
              <img src={heroImage} alt={name} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3b1578]/50 via-transparent to-[#d10c74]/20" />
            </div>
          </div>

          {/* Floating: sale toast */}
          <div className="pp-float absolute -left-4 top-16 sm:-left-10">
            <div className="flex items-center gap-3 rounded-2xl border border-[#a31180]/10 bg-(--color-primary-bg)/95 px-4 py-3 shadow-[0_20px_40px_-15px_rgba(59,21,120,0.45)] backdrop-blur animate-float motion-reduce:animate-none">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#28c840]/15 text-[#1e9e35]">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm font-semibold">Sale completed</div>
                <div className="text-xs text-gray-500">Invoice created instantly</div>
              </div>
            </div>
          </div>

          {/* Floating: chart card */}
          <div className="pp-float absolute -bottom-8 -right-2 sm:-right-8">
            <div className="w-48 rounded-2xl border border-[#a31180]/10 bg-(--color-primary-bg)/95 p-4 shadow-[0_20px_40px_-15px_rgba(59,21,120,0.45)] backdrop-blur animate-float-delayed motion-reduce:animate-none">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500">Sales overview</span>
                <span className="text-xs font-semibold text-[#1e9e35]">▲</span>
              </div>
              <div className="mt-3 flex h-16 items-end gap-1.5">
                {[40, 65, 45, 80, 60, 95, 75].map((h, i) => (
                  <span
                    key={i}
                    className={`flex-1 origin-bottom rounded-t-md ${i === 5 ? brandGradient : "bg-[#3b1578]/15"}`}
                    style={{ height: `${h}%`, animation: `ppBar 1.2s ${0.9 + i * 0.08}s cubic-bezier(0.22,1,0.36,1) both` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Floating: price sticker */}
          <div className="pp-float absolute -right-3 -top-6 sm:-right-6">
            <div className={`flex h-28 w-28 rotate-12 flex-col items-center justify-center rounded-full ${brandGradient} text-white shadow-[0_20px_40px_-10px_rgba(209,12,116,0.6)] ring-4 ring-white/80`}>
              {hasFree ? (
                <>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-white/80">Start</span>
                  <span className="text-2xl font-semibold leading-tight">Free</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white/80">plan available</span>
                </>
              ) : (
                <>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-white/80">From</span>
                  <span className="text-lg font-semibold leading-tight">৳{formatPrice(lowestPaid)}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white/80">One-time</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= STICKY SUB-NAV ================= */}
      <div className="sticky top-[68px] z-40 px-4">
        <nav className="container mx-auto flex items-center gap-2 overflow-x-auto rounded-full border border-[#3b1578]/10 bg-(--color-primary-bg)/85 p-1.5 shadow-[0_10px_30px_-15px_rgba(59,21,120,0.35)] backdrop-blur-xl [scrollbar-width:none]">
          <span className="hidden shrink-0 items-center gap-2 px-3 font-semibold sm:flex">
            <span className={`flex h-8 w-8 items-center justify-center rounded-full ${brandGradient} text-sm text-white`}>
              <HeroIcon />
            </span>
            {name}
          </span>
          <span className="hidden h-6 w-px bg-[#3b1578]/10 sm:block" />
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToId(id)}
              className={`shrink-0 cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                activeSection === id ? "bg-[#1b0b3a] text-white" : "text-gray-600 hover:text-[#a31180]"
              }`}
            >
              {label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => scrollToId("pricing")}
            className={`ml-auto shrink-0 cursor-pointer rounded-full ${brandGradient} px-5 py-2 text-sm font-semibold text-white`}
          >
            Get Started
          </button>
        </nav>
      </div>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="container mx-auto px-4 pt-16">
        <div className="grid grid-cols-2 overflow-hidden rounded-[28px] border border-[#3b1578]/10 bg-white/60 backdrop-blur lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title: label }, i) => (
            <div
              key={label}
              className={`pp-reveal group flex items-center gap-4 border-[#3b1578]/10 p-6 transition-colors duration-500 hover:bg-white sm:p-8 ${
                i % 2 === 0 ? "border-r" : ""
              } ${i < 2 ? "border-b lg:border-b-0" : ""} lg:border-r lg:last:border-r-0`}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-fuchsia-50 text-lg text-[#a31180] transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#a31180] group-hover:text-white">
                <Icon />
              </span>
              <span className="font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="container mx-auto px-4 py-24">
        <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="pp-reveal">
              <Eyebrow>{featuresSection.eyebrow}</Eyebrow>
            </div>
            <h2 className="pp-reveal mt-5 text-[clamp(2rem,4.5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
              {featuresSection.title}
            </h2>
          </div>
          <p className="pp-reveal max-w-md text-base leading-8 text-gray-600 sm:text-lg lg:pb-2">{featuresSection.text}</p>
        </div>

        <div className="pp-features mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title: featureTitle, description }, i) => (
            <SpotlightCard
              key={featureTitle}
              className="pp-feature rounded-[28px] border border-[#3b1578]/10 bg-white/60 p-7 backdrop-blur transition-[translate,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(59,21,120,0.45)]"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-fuchsia-50 text-xl text-[#a31180] transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-[#3b1578] group-hover:via-[#a31180] group-hover:to-[#d10c74] group-hover:text-white">
                  <Icon />
                </span>
                <span className="text-5xl font-semibold leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(59,21,120,0.12)] transition-all duration-500 group-hover:[-webkit-text-stroke:1.5px_rgba(163,17,128,0.45)]">
                  {pad(i)}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-semibold">{featureTitle}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">{description}</p>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section id="why" className="pp-why container mx-auto px-4 py-10">
        <div className="relative overflow-hidden rounded-[36px] bg-[#1b0b3a] text-white">
          <div className={`pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full ${brandGradient} opacity-30 blur-3xl`} />
          <div className="grid lg:grid-cols-2">
            <div className="relative p-8 sm:p-12 lg:p-16">
              <Eyebrow light>{successSection.eyebrow}</Eyebrow>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
                {successSection.title} <span className={`italic ${lightTextGradient}`}>{successSection.titleAccent}</span>
              </h2>
              <p className="mt-6 leading-8 text-white/70">{successSection.text}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {successSection.points.map((point) => (
                  <div key={point} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#ff7ac0]" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[340px] p-4 lg:p-6">
              <div className="pp-why-img relative h-full min-h-[320px] overflow-hidden rounded-[32px]">
                <img
                  src={successSection.image}
                  alt={successSection.imageAlt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#3b1578]/50 via-transparent to-[#d10c74]/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section id="pricing" className="container mx-auto px-4 py-24">
        <div className="text-center">
          <div className="pp-reveal">
            <Eyebrow center>{pricingSection.eyebrow}</Eyebrow>
          </div>
          <h2 className="pp-reveal mx-auto mt-5 max-w-3xl text-[clamp(2rem,4.5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
            {pricingSection.title}
          </h2>
          <p className="pp-reveal mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">{pricingSection.text}</p>
        </div>

        <div className="pp-plans mt-16 grid items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} onChoose={handleCheckout} />
          ))}
        </div>

        <div className="pp-reveal mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#a31180]/15 bg-white/70 px-5 py-3 text-sm font-semibold text-[#3b1578] backdrop-blur">
            <ShieldCheck className="h-5 w-5 text-[#a31180]" />
            {pricingSection.note}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="container mx-auto px-4 pb-28">
        <div className={`pp-reveal relative overflow-hidden rounded-[36px] ${brandGradient} px-8 py-16 text-center text-white shadow-[0_40px_80px_-30px_rgba(163,17,128,0.6)] sm:px-14`}>
          <HeroIcon className="pointer-events-none absolute -bottom-10 -right-6 text-[16rem] text-white/10" />
          <HeroIcon className="pointer-events-none absolute -left-8 -top-10 text-[10rem] text-white/5" />
          <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-3xl backdrop-blur">
            <HeroIcon />
          </span>
          <h2 className="relative mx-auto mt-6 max-w-3xl text-[clamp(1.8rem,4vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
            {cta.title}
          </h2>
          <p className="relative mx-auto mt-5 max-w-2xl leading-8 text-white/80">{cta.text}</p>
          <button
            type="button"
            onClick={() => scrollToId("pricing")}
            className="group relative mt-9 inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#3b1578] transition-transform duration-300 hover:-translate-y-1"
          >
            {cta.button}
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      <style>{`@keyframes ppBar { from { transform: scaleY(0) } to { transform: scaleY(1) } }`}</style>
    </main>
  );
};

export default ProductPage;
