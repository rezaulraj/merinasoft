import React, { useLayoutEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaLaptopCode,
  FaCode,
  FaGlobe,
  FaMobileScreenButton,
  FaBullhorn,
  FaCloud,
} from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const SCAN = "#f062c0";
const yearsOfExperience = new Date().getFullYear() - 2018;

const unsplash = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

const services = [
  {
    icon: FaLaptopCode,
    title: "Software Development",
    text: "Software development solutions to drive your digital success. Unlock new possibilities for your business with MerinaSoft BD’s expert software consulting and development services.",
    tags: ["Consulting", "Business Software", "Automation"],
    image: unsplash("1498050108023-c5249f4df085"),
  },
  {
    icon: FaCode,
    title: "Custom Software Development",
    text: `Tailored to your business requirements. With ${yearsOfExperience}+ years of experience across 12+ industries, MerinaSoft BD delivers powerful and reliable custom software solutions.`,
    tags: ["Tailored", "Scalable", "Reliable"],
    image: unsplash("1555066931-4365d14bab8c"),
  },
  {
    icon: FaGlobe,
    title: "Web Development",
    text: "High-quality web design and development, database design, integration, programming, website maintenance, e-commerce solutions, and application development.",
    tags: ["Web Design", "E-commerce", "Maintenance"],
    image: unsplash("1547658719-da2b51169166"),
  },
  {
    icon: FaMobileScreenButton,
    title: "Mobile Application",
    text: "Crafting high-end mobile experiences with unmatched expertise. Since 2018, MerinaSoft BD has created native, cross-platform, and progressive web applications.",
    tags: ["Native", "Cross-platform", "PWA"],
    image: unsplash("1512941937669-90a1b58e7e9c"),
  },
  {
    icon: FaBullhorn,
    title: "Digital Marketing",
    text: "We help companies reach their target audience, improve brand awareness, and drive sales through SEO, social media marketing, content marketing, and email marketing.",
    tags: ["SEO", "Social Media", "Email"],
    image: unsplash("1460925895917-afdab827c52f"),
  },
  {
    icon: FaCloud,
    title: "Cloud Application",
    text: "Cloud application development services that help businesses build and run powerful cloud-based apps using modern cloud technologies.",
    tags: ["Cloud Apps", "Modern Stack", "Always On"],
    image: unsplash("1451187580459-43490279c0fa"),
  },
];

const titleWords = [
  { word: "Services" },
  { word: "built" },
  { word: "to" },
  { word: "scale", accent: true },
  { word: "your" },
  { word: "business." },
];

const brandGradient = "bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74]";
const textGradient = `${brandGradient} bg-clip-text text-transparent`;
const pad = (i) => String(i + 1).padStart(2, "0");

const ServicePanel = ({ service, index, reduced, registerRef, total }) => {
  const imageLeft = index % 2 === 0;
  const Icon = service.icon;

  return (
    <section
      ref={registerRef}
      aria-label={service.title}
      style={{ zIndex: index + 1 }}
      className={`relative w-full ${reduced ? "py-16" : "h-svh min-h-[640px]"} ${
        index % 2 === 0 ? "bg-(--color-primary-bg)" : "bg-[#faf4fb]"
      } ${
        index > 0
          ? "rounded-t-[36px] shadow-[0_-40px_80px_-40px_rgba(59,21,120,0.4)]"
          : ""
      }`}
    >
      <div
        data-inner
        className={`flex items-center ${reduced ? "" : "h-full pb-14 pt-[100px]"}`}
      >
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:h-[min(68svh,620px)] lg:grid-cols-2 lg:gap-16">
            {/* ---------- Image with scan reveal ---------- */}
            <div
              className={`relative h-[30svh] min-h-[190px] w-full lg:h-full ${
                imageLeft ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <div
                className={`absolute -inset-3 rounded-[34px] ${brandGradient} opacity-20 blur-2xl`}
              />
              <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-[#1b0b3a] shadow-[0_40px_80px_-40px_rgba(59,21,120,0.65)]">
                {!reduced && (
                  <img
                    data-dim
                    src={service.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ filter: "grayscale(1) brightness(0.45) blur(5px)" }}
                  />
                )}
                <img
                  data-sharp
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#3b1578]/40 via-transparent to-[#d10c74]/20 mix-blend-multiply" />

                {!reduced && (
                  <>
                    <div
                      data-grid
                      className="pointer-events-none absolute inset-0"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(240,98,192,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(240,98,192,0.18) 1px, transparent 1px)",
                        backgroundSize: "36px 36px",
                      }}
                    />
                    <div
                      data-scan
                      className="pointer-events-none absolute inset-x-0 top-0 h-[2px]"
                      style={{
                        backgroundColor: SCAN,
                        boxShadow: `0 0 22px 6px ${SCAN}88, 0 -34px 60px 18px ${SCAN}22`,
                      }}
                    />
                    <div data-brackets className="pointer-events-none absolute inset-4">
                      <span className="absolute left-0 top-0 h-6 w-6 rounded-tl-md border-l-2 border-t-2 border-[#f062c0]/80" />
                      <span className="absolute right-0 top-0 h-6 w-6 rounded-tr-md border-r-2 border-t-2 border-[#f062c0]/80" />
                      <span className="absolute bottom-0 left-0 h-6 w-6 rounded-bl-md border-b-2 border-l-2 border-[#f062c0]/80" />
                      <span className="absolute bottom-0 right-0 h-6 w-6 rounded-br-md border-b-2 border-r-2 border-[#f062c0]/80" />
                    </div>
                  </>
                )}

                {/* Icon badge */}
                <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/15 py-2 pl-2 pr-4 text-white backdrop-blur-md">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${brandGradient} text-lg`}>
                    <Icon />
                  </span>
                  <span className="text-sm font-bold">MerinaSoft</span>
                </div>
              </div>
            </div>

            {/* ---------- Copy ---------- */}
            <div className={`relative ${imageLeft ? "lg:order-2" : "lg:order-1"}`}>
              <span
                aria-hidden="true"
                className="sv-t pointer-events-none absolute -top-16 left-0 hidden select-none text-[clamp(120px,15vw,210px)] font-black leading-none text-[#3b1578]/[0.06] lg:block"
              >
                {pad(index)}
              </span>

              <span className="sv-t relative inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-[#a31180]">
                <Icon className="h-4 w-4" />
                Service {pad(index)}
              </span>

              <h3 className="sv-t relative mt-4 text-[clamp(28px,3.6vw,52px)] font-black leading-[1.08] tracking-tight text-[#1b0b3a]">
                {service.title}
              </h3>
              <span className={`sv-t mt-5 block h-[3px] w-14 rounded-full ${brandGradient} sm:mt-6`} />
              <p className="sv-t mt-5 max-w-md text-[15.5px] leading-relaxed text-[#1b0b3a]/70 sm:mt-6 sm:text-[17px]">
                {service.text}
              </p>

              <div className="sv-t mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#a31180]/15 bg-white/70 px-4 py-1.5 text-xs font-bold text-[#a31180]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to="/services"
                className="sv-t group mt-7 inline-flex items-center gap-3 text-[15px] font-bold text-[#1b0b3a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a31180] sm:mt-9"
              >
                <span className="border-b-2 border-transparent pb-0.5 transition-colors duration-300 group-hover:border-[#d10c74]">
                  Explore Service
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#3b1578]/20 transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-[#3b1578] group-hover:to-[#d10c74] group-hover:text-white">
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {!reduced && (
        <>
          <div
            data-veil
            className="pointer-events-none absolute inset-0 rounded-t-[36px] bg-[#1b0b3a] opacity-0"
          />

          <div className="pointer-events-none absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3">
            <span className="text-[14px] font-bold tabular-nums text-[#1b0b3a]">
              {pad(index)}
            </span>
            <span className="flex gap-1.5">
              {Array.from({ length: total }, (_, i) => (
                <span
                  key={i}
                  className={`h-[3px] w-5 rounded-full sm:w-8 ${
                    i <= index ? brandGradient : "bg-[#3b1578]/10"
                  }`}
                />
              ))}
            </span>
            <span className="text-[14px] font-semibold tabular-nums text-[#1b0b3a]/40">
              {pad(total - 1)}
            </span>
          </div>
        </>
      )}
    </section>
  );
};

const OurServices = () => {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const panelRefs = useRef([]);

  const reduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  // Heading: words rise in
  useLayoutEffect(() => {
    if (reduced) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: { trigger: headRef.current, start: "top 80%", once: true },
        })
        .from(".sv-word", {
          yPercent: 110,
          opacity: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power4.out",
        })
        .from(
          ".sv-sub",
          { y: 20, opacity: 0, filter: "blur(8px)", duration: 0.8, ease: "power3.out" },
          "-=0.5",
        );
    }, headRef);
    return () => ctx.revert();
  }, [reduced]);

  // Stacked, pinned panels with scan-line image reveal
  useLayoutEffect(() => {
    if (reduced) return;

    const panels = panelRefs.current.filter(Boolean);
    const n = panels.length;
    if (!n) return;

    const ctx = gsap.context(() => {
      const last = panels[n - 1];

      panels.slice(0, n - 1).forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          endTrigger: last,
          end: "top top",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        });
      });

      panels.forEach((panel, i) => {
        const sharp = panel.querySelector("[data-sharp]");
        const dim = panel.querySelector("[data-dim]");
        const scan = panel.querySelector("[data-scan]");
        const grid = panel.querySelector("[data-grid]");
        const brackets = panel.querySelector("[data-brackets]");
        const texts = panel.querySelectorAll(".sv-t");
        const state = { v: 0 };

        const render = () => {
          const v = state.v;
          sharp.style.clipPath = `inset(0% 0% ${(1 - v) * 100}% 0%)`;
          scan.style.top = `${v * 100}%`;
          scan.style.opacity = v > 0.001 && v < 0.999 ? "1" : "0";
          grid.style.opacity = `${1 - v}`;
          brackets.style.opacity = `${1 - Math.min(1, Math.max(0, (v - 0.75) / 0.25))}`;
        };
        render();

        gsap
          .timeline({
            scrollTrigger: {
              trigger: panel,
              start: "top 85%",
              end: "top 25%",
              scrub: 0.5,
            },
          })
          .fromTo([sharp, dim], { scale: 1.15 }, { scale: 1, duration: 1, ease: "power1.out" }, 0)
          .to(state, { v: 1, duration: 0.75, ease: "power1.inOut", onUpdate: render }, 0)
          .fromTo(
            texts,
            { opacity: 0, y: 36 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power3.out" },
            0.3,
          );

        // Previous panel shrinks and darkens as the next one slides over it
        if (i < n - 1) {
          const inner = panel.querySelector("[data-inner]");
          const veil = panel.querySelector("[data-veil]");
          gsap.set(inner, { transformOrigin: "50% 0%" });

          gsap
            .timeline({
              defaults: { ease: "none" },
              scrollTrigger: {
                trigger: panels[i + 1],
                start: "top bottom",
                end: "top top",
                scrub: true,
              },
            })
            .to(inner, { scale: 0.92, yPercent: -3 }, 0)
            .to(veil, { opacity: 0.4 }, 0);
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="services-heading"
      className="relative w-full overflow-x-clip bg-transparent font-arimo"
    >
      <div
        ref={headRef}
        className="relative mx-auto max-w-3xl px-4 pb-12 pt-20 text-center sm:px-6 sm:pb-16 sm:pt-24"
      >
        <div className="sv-sub mb-5 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-[#a31180]">
          <span className={`h-0.5 w-10 rounded-full ${brandGradient}`} />
          What We Provide
          <span className={`h-0.5 w-10 rounded-full ${brandGradient}`} />
        </div>
        <h2
          id="services-heading"
          className="text-[clamp(32px,4.8vw,58px)] font-black leading-[1.08] tracking-tight text-[#1b0b3a]"
        >
          {titleWords.map(({ word, accent }, i) => (
            <span
              key={`${word}-${i}`}
              className="mr-[0.26em] inline-block overflow-hidden pb-1 align-bottom"
            >
              <span className={`sv-word inline-block ${accent ? `${textGradient} italic` : ""}`}>
                {word}
              </span>
            </span>
          ))}
        </h2>
        <p className="sv-sub mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-[#1b0b3a]/70 sm:text-[17px]">
          Software, web, mobile, cloud and digital marketing — everything you need
          to grow faster, work smarter and scale with confidence.
        </p>
      </div>

      <div className="relative">
        {services.map((service, index) => (
          <ServicePanel
            key={service.title}
            service={service}
            index={index}
            reduced={reduced}
            total={services.length}
            registerRef={(el) => {
              panelRefs.current[index] = el;
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
