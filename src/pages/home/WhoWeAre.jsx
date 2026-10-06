import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ArrowUpRight,
  Smartphone,
  Rocket,
  Users,
  MapPin,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Landmark,
  Building2,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FOUNDED = 2018;
const yearsOfExperience = new Date().getFullYear() - FOUNDED;

const brandGradient = "bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74]";
const textGradient = `${brandGradient} bg-clip-text text-transparent`;

const industries = [
  { name: "Healthcare", icon: HeartPulse },
  { name: "Education", icon: GraduationCap },
  { name: "Retail", icon: ShoppingBag },
  { name: "Banking", icon: Landmark },
  { name: "Corporate", icon: Building2 },
  { name: "E-commerce", icon: ShoppingCart },
];

const journey = [
  {
    year: FOUNDED,
    icon: Smartphone,
    title: "Started with Mobile Apps",
    text: "Began as a mobile application development provider for the local market.",
  },
  {
    year: "Today",
    icon: Rocket,
    title: "Modern IT Solutions",
    text: "Serving businesses with innovative solutions that keep them ahead of the curve.",
  },
];

// Tile with a soft brand-colored spotlight that follows the cursor
const Tile = ({ className = "", children }) => {
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      onMouseMove={handleMove}
      className={`wwa-tile group relative overflow-hidden rounded-[28px] border border-[#3b1578]/10 transition-[translate,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgba(59,21,120,0.35)] ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(380px circle at var(--x) var(--y), rgba(163,17,128,0.14), transparent 45%)",
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

const WhoWeAre = () => {
  const sectionRef = useRef(null);
  const yearsRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".wwa-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });

      gsap.from(".wwa-tile", {
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".wwa-grid", start: "top 80%" },
      });

      // Count-up for years
      const counter = { value: 0 };
      gsap.to(counter, {
        value: yearsOfExperience,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: { trigger: ".wwa-grid", start: "top 80%" },
        onUpdate: () => {
          if (yearsRef.current) yearsRef.current.textContent = Math.round(counter.value);
        },
      });

      // Progress ring
      gsap.fromTo(
        ".wwa-ring",
        { strokeDashoffset: 264 },
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: ".wwa-grid", start: "top 80%" },
        },
      );

      // Journey line draws itself
      gsap.from(".wwa-line", {
        scaleX: 0,
        duration: 1.4,
        ease: "power3.inOut",
        scrollTrigger: { trigger: ".wwa-line", start: "top 90%" },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-transparent py-24 font-arimo"
    >
      {/* Decorative background */}
      {/* <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#a31180] opacity-[0.07] blur-[100px]" />
      <div className="pointer-events-none absolute -left-40 bottom-40 h-96 w-96 rounded-full bg-[#3b1578] opacity-[0.07] blur-[100px]" /> */}

      <div className="container relative mx-auto px-4">
        {/* ---------- Heading ---------- */}
        <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="wwa-reveal inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-[#a31180]">
              <span className={`h-0.5 w-10 rounded-full ${brandGradient}`} />
              Who We Are
            </div>
            <h2 className="wwa-reveal mt-5 text-4xl font-black leading-[1.1] tracking-tight text-[#1b0b3a] sm:text-5xl lg:text-6xl">
              We turn ideas into software that{" "}
              <span className={`${textGradient} italic`}>moves business</span>{" "}
              forward.
            </h2>
          </div>
          <div className="wwa-reveal lg:pb-2">
            <p className="text-base leading-8 text-gray-600 sm:text-lg">
              Modern, efficient and scalable IT solutions that help businesses
              grow faster and operate smarter.
            </p>
            <Link
              to="/about"
              className="group mt-5 inline-flex items-center gap-2 font-bold text-[#3b1578] transition-colors hover:text-[#d10c74]"
            >
              More about MerinaSoft
              <span className={`flex h-8 w-8 items-center justify-center rounded-full ${brandGradient} text-white transition-transform duration-300 group-hover:rotate-45`}>
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>

        {/* ---------- Bento grid ---------- */}
        <div className="wwa-grid mt-16 grid auto-rows-[minmax(200px,auto)] gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* Story tile */}
          <Tile className="bg-[#1b0b3a] text-white md:col-span-2 lg:row-span-2">
            <div className="pointer-events-none absolute -bottom-10 -right-4 select-none text-[9rem] font-black leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.08)] sm:text-[12rem]">
              {FOUNDED}
            </div>
            <div className={`pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full ${brandGradient} opacity-40 blur-3xl transition-transform duration-700 group-hover:scale-125`} />

            <div className="relative flex h-full flex-col p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5 text-[#ff7ac0]" /> Since {FOUNDED}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold backdrop-blur">
                  <MapPin className="h-3.5 w-3.5 text-[#ff7ac0]" /> Bangladesh
                </span>
              </div>

              <h3 className="mt-8 max-w-md text-3xl font-black leading-tight sm:text-4xl">
                Leading Software Development Company in{" "}
                <span className="bg-gradient-to-r from-[#c9a6ff] via-[#f062c0] to-[#ff7ac0] bg-clip-text text-transparent">
                  Bangladesh
                </span>
              </h3>

              <p className="mt-6 max-w-lg text-base leading-8 text-white/70">
                MerinaSoft is dedicated to transforming your business with
                efficient and modern IT solutions — custom software that
                streamlines operations, boosts efficiency and drives growth.
              </p>

              <div className="mt-auto pt-10">
                <div className="flex -space-x-3">
                  {["#3b1578", "#a31180", "#d10c74"].map((c) => (
                    <span
                      key={c}
                      className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#1b0b3a]"
                      style={{ background: c }}
                    >
                      <Users className="h-5 w-5 text-white" />
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm font-medium text-white/60">
                  Powered by a team of skilled developers
                </p>
              </div>
            </div>
          </Tile>

          {/* Years tile */}
          <Tile className={`${brandGradient} text-white`}>
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-44 w-44 rounded-full border-[18px] border-white/10 transition-transform duration-700 group-hover:scale-125" />
            <div className="flex h-full flex-col justify-between p-7">
              <span className="text-sm font-bold uppercase tracking-widest text-white/70">
                Experience
              </span>
              <div>
                <div className="text-7xl font-black leading-none">
                  <span ref={yearsRef}>0</span>
                  <span className="text-white/60">+</span>
                </div>
                <p className="mt-2 font-semibold text-white/85">Years building software</p>
              </div>
            </div>
          </Tile>

          {/* Ring tile */}
          <Tile className="bg-white/70">
            <div className="flex h-full items-center gap-5 p-7">
              <div className="relative h-28 w-28 shrink-0">
                <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                  <defs>
                    <linearGradient id="wwaRing" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#3b1578" />
                      <stop offset="50%" stopColor="#a31180" />
                      <stop offset="100%" stopColor="#d10c74" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#3b1578" strokeOpacity="0.08" strokeWidth="9" />
                  <circle
                    className="wwa-ring"
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="url(#wwaRing)"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeDasharray="264"
                    strokeDashoffset="0"
                  />
                </svg>
                <span className={`absolute inset-0 flex items-center justify-center text-2xl font-black ${textGradient}`}>
                  100%
                </span>
              </div>
              <div>
                <h4 className="text-xl font-black text-[#1b0b3a]">Custom Solutions</h4>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Every product tailored to how your business works.
                </p>
              </div>
            </div>
          </Tile>

          {/* Sectors tile */}
          <Tile className="bg-white/70 md:col-span-2">
            <div className="flex h-full flex-col justify-between gap-6 p-7 sm:flex-row sm:items-center">
              <div>
                <div className={`text-6xl font-black leading-none ${textGradient}`}>5+</div>
                <p className="mt-2 font-bold text-[#1b0b3a]">Business sectors served</p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {industries.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    title={name}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#3b1578]/10 bg-(--color-primary-bg) text-[#a31180] transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-[#a31180] hover:text-white hover:shadow-lg sm:h-16 sm:w-16"
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                ))}
              </div>
            </div>
          </Tile>

          {/* Journey tile */}
          <Tile className="bg-white/70 md:col-span-2">
            <div className="p-7 sm:p-8">
              <span className="text-sm font-bold uppercase tracking-widest text-gray-400">
                Our Journey
              </span>
              <div className="relative mt-8">
                <div className={`wwa-line absolute left-6 right-6 top-6 hidden h-0.5 origin-left sm:block ${brandGradient}`} />
                <div className="grid gap-8 sm:grid-cols-2">
                  {journey.map(({ year, icon: Icon, title, text }) => (
                    <div key={title} className="relative">
                      <div className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl ${brandGradient} text-white shadow-lg shadow-fuchsia-500/30 ring-4 ring-white`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="mt-4 text-sm font-black text-[#d10c74]">{year}</div>
                      <h4 className="mt-1 text-lg font-black text-[#1b0b3a]">{title}</h4>
                      <p className="mt-2 text-sm leading-6 text-gray-500">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Tile>

          {/* Industries marquee tile */}
          <Tile className="bg-white/70 md:col-span-2">
            <div className="flex h-full flex-col justify-center py-7">
              <span className="px-7 text-sm font-bold uppercase tracking-widest text-gray-400 sm:px-8">
                Industries We Serve
              </span>
              <div className="relative mt-6 space-y-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
                {[false, true].map((reverse) => (
                  <div
                    key={String(reverse)}
                    className={`flex w-max gap-3 group-hover:[animation-play-state:paused] motion-reduce:animate-none ${
                      reverse ? "animate-marquee-reverse" : "animate-marquee"
                    }`}
                  >
                    {[...industries, ...industries, ...industries, ...industries].map(
                      ({ name, icon: Icon }, i) => (
                        <span
                          key={i}
                          className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-bold ${
                            reverse
                              ? "border-[#3b1578]/10 bg-(--color-primary-bg) text-[#3b1578]"
                              : `border-transparent ${brandGradient} text-white`
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          {name}
                        </span>
                      ),
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Tile>
        </div>
      </div>

      {/* ---------- Big tagline marquee ---------- */}
      <div className="relative -mx-[5%] mt-24 -rotate-2 py-2">
        <div className={`${brandGradient} py-5 shadow-[0_20px_50px_-20px_rgba(163,17,128,0.6)]`}>
          <div className="flex w-max animate-marquee motion-reduce:animate-none">
            {Array.from({ length: 2 }).map((_, half) => (
              <div key={half} className="flex shrink-0 items-center">
                {Array.from({ length: 3 }).map((__, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-8 pr-8 text-2xl font-black uppercase tracking-tight text-white sm:text-4xl"
                  >
                    Transforming Ideas into Powerful Digital Solutions
                    <Sparkles className="h-7 w-7 shrink-0 text-white/70" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="container mx-auto mt-10 max-w-3xl px-4 text-center text-base leading-8 text-gray-600">
        From mobile apps to enterprise software, we create technology that
        simplifies business, improves productivity, and supports long-term growth.
      </p>
    </section>
  );
};

export default WhoWeAre;
