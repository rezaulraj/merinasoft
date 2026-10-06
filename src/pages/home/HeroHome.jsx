import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Sparkles, Rocket, ShieldCheck, Zap } from "lucide-react";

import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.jpg";

const slides = [
  { image: slider1, caption: "Software & Web Development" },
  { image: slider2, caption: "Your One-Stop Software Partner" },
  { image: slider3, caption: "Powerful Solutions for Your Business" },
];

const typeWords = [
  "Software Development",
  "Web Development",
  "Mobile App Development",
  "Custom Software",
  "UI/UX Design",
  "Business Automation",
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "100+", label: "Happy Clients" },
  { value: "24/7", label: "Support" },
];

const brandGradient = "bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74]";
const textGradient = "bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] bg-clip-text text-transparent";

const SLIDE_MS = 5000;

const HeroHome = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [typeText, setTypeText] = useState("");
  const containerRef = useRef(null);

  // Auto-advance the showcase; restarting the timer when the user picks a slide
  useEffect(() => {
    const timer = setTimeout(
      () => setActiveSlide((prev) => (prev + 1) % slides.length),
      SLIDE_MS,
    );
    return () => clearTimeout(timer);
  }, [activeSlide]);

  // Typewriter
  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      const word = typeWords[wordIndex];

      if (!isDeleting) {
        charIndex++;
        setTypeText(word.substring(0, charIndex));
        if (charIndex === word.length) {
          isDeleting = true;
          timeout = setTimeout(type, 1400);
          return;
        }
      } else {
        charIndex--;
        setTypeText(word.substring(0, charIndex));
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % typeWords.length;
        }
      }

      timeout = setTimeout(type, isDeleting ? 40 : 75);
    };

    type();
    return () => clearTimeout(timeout);
  }, []);

  // Intro animation
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-reveal", { y: 40, opacity: 0, duration: 0.9, stagger: 0.12 })
        .from(
          ".hero-visual",
          { x: 60, opacity: 0, rotate: 4, duration: 1.2 },
          0.2,
        )
        .from(
          ".hero-chip",
          { scale: 0.6, opacity: 0, duration: 0.7, stagger: 0.15, ease: "back.out(1.8)" },
          0.8,
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative isolate overflow-hidden bg-transparent font-arimo text-[#1b0b3a]"
    >
      {/* ---------- Background ---------- */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-8rem] top-1/4 h-[26rem] w-[26rem] rounded-full bg-[#a31180] opacity-[0.12] blur-[120px] animate-blob [animation-delay:-5s] motion-reduce:animate-none" />
        <div className="absolute bottom-[-10rem] left-1/3 h-[24rem] w-[24rem] rounded-full bg-[#d10c74] opacity-10 blur-[120px] animate-blob [animation-delay:-10s] motion-reduce:animate-none" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,21,120,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(59,21,120,0.07) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-(--color-primary-bg)" />
      </div>

      <div className="container mx-auto grid items-center gap-16 px-4 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
        {/* ---------- Copy ---------- */}
        <div className="max-w-2xl">
          <div className="hero-reveal inline-flex items-center gap-2 rounded-full border border-[#a31180]/15 bg-(--color-primary-bg)/80 py-1.5 pl-1.5 pr-4 text-sm font-medium text-gray-600 shadow-xs backdrop-blur">
            <span className={`inline-flex items-center gap-1 rounded-full ${brandGradient} px-2.5 py-0.5 text-xs font-bold text-white`}>
              <Sparkles className="h-3 w-3" /> NEW
            </span>
            Your One-Stop Software Partner
          </div>

          <h1 className="hero-reveal mt-7 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Elevating Businesses
            <br />
            Through <span className={textGradient}>Innovation</span>
          </h1>

          {/* Terminal-style typewriter */}
          <div className="hero-reveal mt-7 inline-flex max-w-full items-center gap-3 rounded-2xl border border-[#3b1578]/20 bg-[#1b0b3a] px-5 text-white shadow-lg shadow-[#3b1578]/20 py-3.5 font-mono text-base backdrop-blur sm:text-lg">
            <span className="text-[#f062c0]">❯</span>
            <span className="text-white/50">we_offer</span>
            <span className="truncate font-semibold text-white">
              {typeText}
              <span className="ml-0.5 inline-block h-5 w-[3px] translate-y-1 rounded-sm bg-[#f062c0] animate-blink" />
            </span>
          </div>

          <p className="hero-reveal mt-7 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
            Complete end-to-end software products and services — from design to
            development. Smart digital solutions that grow your business with
            modern technology.
          </p>

          <div className="hero-reveal mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full ${brandGradient} px-7 py-4 font-bold text-white shadow-[0_10px_40px_-10px_#d10c74] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_50px_-8px_#d10c74]`}
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Rocket className="relative h-5 w-5" />
              <span className="relative">Start Your Project</span>
            </Link>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-full border border-[#3b1578]/20 bg-(--color-primary-bg) px-7 py-4 font-bold text-[#3b1578] transition-all duration-300 hover:border-[#a31180]/40 hover:bg-fuchsia-50 hover:text-[#a31180]"
            >
              Explore Products
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="hero-reveal mt-12 grid max-w-lg grid-cols-3 divide-x divide-[#3b1578]/10 border-t border-[#3b1578]/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 first:pl-0">
                <div className={`text-2xl font-black sm:text-3xl ${textGradient}`}>
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Visual ---------- */}
        <div className="hero-visual relative mx-auto w-full max-w-xl lg:max-w-none">
          {/* Spinning gradient border */}
          <div className="relative overflow-hidden rounded-[2rem] p-[2px] shadow-[0_30px_80px_-25px_rgba(163,17,128,0.45)]">
            <div className="absolute left-1/2 top-1/2 aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow bg-[conic-gradient(from_0deg,#3b1578,#a31180,#d10c74,transparent_60%,#3b1578)] motion-reduce:animate-none" />

            <div className="relative overflow-hidden rounded-[calc(2rem-2px)] bg-(--color-primary-bg)">
              {/* Browser bar */}
              <div className="flex items-center gap-2 border-b border-[#3b1578]/10 px-5 py-3.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <div className="ml-3 flex-1 truncate rounded-full bg-[#3b1578]/5 px-4 py-1 text-center text-xs text-gray-400">
                  merinasoft.com
                </div>
              </div>

              {/* Slides */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1b0b3a]">
                {slides.map((slide, index) => {
                  const isActive = index === activeSlide;
                  return (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                      aria-hidden={!isActive}
                    >
                      {/* Blurred, brand-tinted backdrop of the same image */}
                      <img
                        src={slide.image}
                        alt=""
                        className={`absolute inset-0 h-full w-full object-cover blur-2xl transition-transform duration-6000 ease-out ${
                          isActive ? "scale-[1.7]" : "scale-150"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#3b1578]/60 via-[#a31180]/25 to-[#d10c74]/45" />

                      {/* Full, uncropped image */}
                      <div className="absolute inset-0 flex items-center justify-center px-5 pb-24 pt-6 sm:px-7">
                        <div
                          className={`relative w-full transition-all duration-1000 ease-out ${
                            isActive
                              ? "translate-y-0 scale-100 opacity-100"
                              : "translate-y-6 scale-90 opacity-0"
                          }`}
                        >
                          <img
                            src={slide.image}
                            alt={slide.caption}
                            className="relative w-full rounded-xl object-contain shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] ring-1 ring-white/30"
                          />
                          {/* Soft reflection */}
                          <img
                            src={slide.image}
                            alt=""
                            className="pointer-events-none absolute left-0 top-full mt-1 w-full -scale-y-100 rounded-xl opacity-20 blur-[2px] mask-[linear-gradient(to_bottom,black,transparent_45%)]"
                          />
                          {/* Shine sweep when the slide appears */}
                          {isActive && (
                            <span
                              key={activeSlide}
                              className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl"
                            >
                              <span
                                className="absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                                style={{ animation: "heroShine 1.4s ease-out 0.5s both" }}
                              />
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1b0b3a]/90 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p
                    key={activeSlide}
                    className="text-lg font-bold text-white drop-shadow-lg sm:text-xl"
                    style={{ animation: "heroCaption 0.7s ease-out" }}
                  >
                    {slides[activeSlide].caption}
                  </p>

                  {/* Progress indicators */}
                  <div className="mt-4 flex gap-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSlide(index)}
                        aria-label={`Show slide ${index + 1}`}
                        className="relative h-1.5 flex-1 cursor-pointer overflow-hidden rounded-full bg-white/20"
                      >
                        {index === activeSlide && (
                          <span
                            key={activeSlide}
                            className={`absolute inset-y-0 left-0 rounded-full ${brandGradient}`}
                            style={{ animation: `heroProgress ${SLIDE_MS}ms linear forwards` }}
                          />
                        )}
                        {index < activeSlide && (
                          <span className="absolute inset-0 rounded-full bg-white/60" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating chips */}
          <div className="hero-chip absolute -left-4 top-20 sm:-left-10">
            <div className="flex items-center gap-3 rounded-2xl border border-[#a31180]/10 bg-(--color-primary-bg)/90 px-4 py-3 shadow-[0_20px_40px_-15px_rgba(59,21,120,0.35)] backdrop-blur-xl animate-float motion-reduce:animate-none">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${brandGradient}`}>
                <ShieldCheck className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#1b0b3a]">Secure & Reliable</div>
                <div className="text-xs text-gray-500">Enterprise-grade quality</div>
              </div>
            </div>
          </div>

          <div className="hero-chip absolute -bottom-6 -right-2 sm:-right-8">
            <div className="flex items-center gap-3 rounded-2xl border border-[#a31180]/10 bg-(--color-primary-bg)/90 px-4 py-3 shadow-[0_20px_40px_-15px_rgba(59,21,120,0.35)] backdrop-blur-xl animate-float-delayed motion-reduce:animate-none">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#d10c74] to-[#a31180]">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#1b0b3a]">Fast Delivery</div>
                <div className="text-xs text-gray-500">On time, every time</div>
              </div>
            </div>
          </div>

          <div className="hero-chip absolute -right-3 -top-5 hidden sm:block">
            <div className="rounded-full border border-[#a31180]/10 bg-(--color-primary-bg)/90 px-4 py-2 text-xs font-semibold text-gray-700 shadow-[0_15px_30px_-12px_rgba(59,21,120,0.35)] backdrop-blur-xl animate-float motion-reduce:animate-none">
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-[#28c840] align-middle" />
              Available for new projects
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes heroProgress { from { width: 0% } to { width: 100% } } @keyframes heroShine { from { transform: translateX(0) skewX(-12deg) } to { transform: translateX(400%) skewX(-12deg) } } @keyframes heroCaption { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }`}</style>
    </section>
  );
};

export default HeroHome;
