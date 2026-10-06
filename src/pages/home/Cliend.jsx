import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowLeft, ArrowRight, Hand, Star } from "lucide-react";
import cliend from "../../assets/cliend.png";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "I really can’t say enough superlative things to describe MerinaSoft’s level of service and skill. Professional, highly skilled, informative, responsive, fast, easy to communicate with – everything I was looking for in a programmer. I would HIGHLY recommend this provider!",
    name: "Ibrahim Khalil",
    role: "Managing Director",
    company: "Wata Chemicals Limited",
  },
  {
    quote:
      "MerinaSoft is an absolutely great company to work with. They work fast, precise and have great communication skills. I would consider them experts in programming and I have and will use them for multiple projects in the future.",
    name: "Another Person",
    role: "Business Owner",
    company: "Software Client",
  },
  {
    quote:
      "I have 100% trust in MerinaSoft to perform the work I’ve requested and not only that to look out for my best interests! They are the best you can get, you should have no hesitation in hiring them for your project.",
    name: "Yet Another Person",
    role: "Founder",
    company: "Digital Business",
  },
  {
    quote:
      "Professional, highly skilled, informative, responsive, fast, and easy to communicate with. MerinaSoft delivered exactly what we needed and made the whole process smooth.",
    name: "Fourth Person",
    role: "Project Manager",
    company: "Tech Client",
  },
];

const AUTOPLAY_MS = 6000;
const SWIPE_THRESHOLD = 100;

const brandGradient = "bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74]";
const textGradient = `${brandGradient} bg-clip-text text-transparent`;
const pad = (n) => String(n).padStart(2, "0");
const initials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

// Resting position of each card in the deck, by depth (0 = top)
const deckPose = [
  "translate(0px, 0px) rotate(0deg) scale(1)",
  "translate(14px, 22px) rotate(3.5deg) scale(0.95)",
  "translate(-14px, 44px) rotate(-3.5deg) scale(0.9)",
  "translate(0px, 60px) rotate(0deg) scale(0.85)",
];

const Stars = ({ className = "h-5 w-5" }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`${className} fill-[#d10c74] text-[#d10c74]`} />
    ))}
  </div>
);

const Cliend = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const drag = useRef({ startX: 0, dx: 0, dragging: false });
  const animating = useRef(false);

  const n = testimonials.length;
  const current = testimonials[active];

  // Fling the top card off-screen, then send it to the back of the deck
  const advance = (dir = 1) => {
    if (animating.current) return;
    const card = cardRefs.current[active];
    if (!card) return;
    animating.current = true;

    gsap.to(card, {
      x: dir * 520,
      rotate: dir * 18,
      opacity: 0,
      duration: 0.45,
      ease: "power2.in",
      onComplete: () => {
        setActive((prev) => (dir > 0 ? (prev + 1) % n : (prev - 1 + n) % n));
        gsap.set(card, { x: 0, rotate: 0 });
        gsap.to(card, { opacity: 1, duration: 0.4, delay: 0.15 });
        animating.current = false;
      },
    });
  };

  const goTo = (index) => {
    if (index === active || animating.current) return;
    setActive(index);
  };

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => advance(1), AUTOPLAY_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, paused]);

  // Drag / swipe on the top card
  const onPointerDown = (e) => {
    if (animating.current) return;
    drag.current = { startX: e.clientX, dx: 0, dragging: true };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!drag.current.dragging) return;
    const dx = e.clientX - drag.current.startX;
    drag.current.dx = dx;
    gsap.set(e.currentTarget, { x: dx, rotate: dx / 18 });
  };
  const onPointerUp = (e) => {
    if (!drag.current.dragging) return;
    drag.current.dragging = false;
    const { dx } = drag.current;
    if (Math.abs(dx) > SWIPE_THRESHOLD) {
      advance(dx > 0 ? 1 : -1);
    } else {
      gsap.to(e.currentTarget, { x: 0, rotate: 0, duration: 0.5, ease: "elastic.out(1, 0.6)" });
    }
  };

  // Scroll-in animation
  useGSAP(
    () => {
      gsap.from(".cl-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
      gsap.from(".cl-photo", {
        y: 80,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });
      gsap.from(".cl-deck", {
        rotate: -8,
        y: 80,
        opacity: 0,
        duration: 1.1,
        ease: "back.out(1.4)",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-transparent py-24 font-arimo">
      {/* Giant decorative quote mark */}
      <div className="pointer-events-none absolute -top-10 right-[-2rem] select-none font-serif text-[22rem] leading-none text-[#a31180]/[0.05]">
        ”
      </div>

      <div className="container relative mx-auto px-4">
        {/* ---------- Heading ---------- */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="cl-reveal inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-[#a31180]">
              <span className={`h-0.5 w-10 rounded-full ${brandGradient}`} />
              Testimonials
            </div>
            <h2 className="cl-reveal mt-5 max-w-3xl text-4xl font-black leading-[1.1] tracking-tight text-[#1b0b3a] sm:text-5xl lg:text-6xl">
              Loved by the businesses we <span className={`${textGradient} italic`}>build for.</span>
            </h2>
          </div>

          <div className="cl-reveal flex items-center gap-5 rounded-3xl border border-[#3b1578]/10 bg-white/70 px-6 py-4 backdrop-blur">
            <div className={`text-5xl font-black leading-none ${textGradient}`}>5.0</div>
            <div>
              <Stars className="h-4 w-4" />
              <p className="mt-1.5 text-sm font-semibold text-gray-500">Average client rating</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          {/* ---------- Client photo in arch ---------- */}
          <div className="cl-photo relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-t-full rounded-b-[40px] border-2 border-dashed border-[#a31180]/25" />
            <div className={`relative overflow-hidden rounded-t-full rounded-b-[40px] ${brandGradient} p-[3px] shadow-[0_40px_80px_-30px_rgba(163,17,128,0.55)]`}>
              <div className="relative overflow-hidden rounded-t-full rounded-b-[37px] bg-gradient-to-b from-[#faf4fb] to-(--color-primary-bg)">
                <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[#a31180]/20 blur-3xl" />
                <img
                  src={cliend}
                  alt="MerinaSoft client"
                  className="relative mx-auto h-[420px] w-full object-contain object-bottom pt-10 sm:h-[480px]"
                />
              </div>
            </div>

            {/* Trust chip */}
            <div className="absolute -left-4 bottom-16 rounded-2xl border border-[#a31180]/10 bg-(--color-primary-bg)/95 px-5 py-4 shadow-[0_20px_40px_-15px_rgba(59,21,120,0.4)] backdrop-blur animate-float motion-reduce:animate-none sm:-left-10">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Client Trust</p>
              <p className={`mt-1 text-3xl font-black ${textGradient}`}>100%</p>
            </div>

            {/* Rotating badge */}
            <div className="absolute -right-2 top-10 h-28 w-28 sm:-right-8">
              <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow motion-reduce:animate-none [animation-duration:14s]">
                <defs>
                  <path id="clCircle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                </defs>
                <circle cx="50" cy="50" r="48" fill="#1b0b3a" />
                <text fill="#fff" fontSize="10.5" fontWeight="700" letterSpacing="3">
                  <textPath href="#clCircle">HAPPY CLIENTS • TRUSTED PARTNER •</textPath>
                </text>
              </svg>
              <div className={`absolute inset-0 m-auto flex h-11 w-11 items-center justify-center rounded-full ${brandGradient} text-xl font-black text-white`}>
                ”
              </div>
            </div>
          </div>

          {/* ---------- Swipeable card deck ---------- */}
          <div
            className="cl-deck"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative h-[480px] sm:h-[420px]">
              {testimonials.map((t, index) => {
                const depth = (index - active + n) % n;
                const isTop = depth === 0;

                return (
                  <div
                    key={t.name}
                    className="absolute inset-0 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      transform: deckPose[Math.min(depth, deckPose.length - 1)],
                      zIndex: n - depth,
                      opacity: depth > 2 ? 0 : 1,
                    }}
                    aria-hidden={!isTop}
                  >
                    <div
                      ref={(el) => (cardRefs.current[index] = el)}
                      onPointerDown={isTop ? onPointerDown : undefined}
                      onPointerMove={isTop ? onPointerMove : undefined}
                      onPointerUp={isTop ? onPointerUp : undefined}
                      onPointerCancel={isTop ? onPointerUp : undefined}
                      className={`relative flex h-full touch-pan-y select-none flex-col overflow-hidden rounded-[32px] border p-7 sm:p-10 ${
                        isTop
                          ? "cursor-grab border-transparent bg-[#1b0b3a] text-white shadow-[0_40px_80px_-30px_rgba(59,21,120,0.75)] active:cursor-grabbing"
                          : "border-[#3b1578]/10 bg-white text-[#1b0b3a] shadow-xl"
                      }`}
                    >
                      {isTop && (
                        <>
                          <div className={`pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full ${brandGradient} opacity-40 blur-3xl`} />
                          <div className={`absolute inset-x-0 top-0 h-1 ${brandGradient}`} />
                        </>
                      )}

                      <div className="relative flex items-start justify-between">
                        <Stars />
                        <span className={`font-serif text-7xl leading-[0.6] ${isTop ? "text-white/15" : "text-[#a31180]/15"}`}>
                          “
                        </span>
                      </div>

                      <p className={`relative mt-6 text-base leading-8 sm:text-lg ${isTop ? "text-white/85" : "text-gray-500"}`}>
                        {t.quote}
                      </p>

                      <div className="relative mt-auto flex items-center gap-4 pt-6">
                        <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${brandGradient} text-lg font-black text-white shadow-lg`}>
                          {initials(t.name)}
                        </span>
                        <div className="min-w-0">
                          <h4 className="truncate text-lg font-black">{t.name}</h4>
                          <p className={`truncate text-sm ${isTop ? "text-white/60" : "text-gray-500"}`}>
                            <span className={isTop ? "font-bold text-[#ff7ac0]" : "font-bold text-[#a31180]"}>{t.role}</span>
                            {" · "}
                            {t.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Controls */}
            <div className="mt-20 flex items-center gap-5">
              <button
                type="button"
                onClick={() => advance(-1)}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[#3b1578]/20 text-[#3b1578] transition-all duration-300 hover:border-transparent hover:bg-[#3b1578] hover:text-white"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => advance(1)}
                aria-label="Next testimonial"
                className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full ${brandGradient} text-white shadow-lg shadow-fuchsia-500/30 transition-transform duration-300 hover:scale-110`}
              >
                <ArrowRight className="h-5 w-5" />
              </button>

              <div className="flex flex-1 items-center gap-2">
                {testimonials.map((t, index) => (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Show testimonial from ${t.name}`}
                    className="relative h-1.5 flex-1 cursor-pointer overflow-hidden rounded-full bg-[#3b1578]/10"
                  >
                    {index === active && (
                      <span
                        key={`${active}-${paused}`}
                        className={`absolute inset-y-0 left-0 rounded-full ${brandGradient}`}
                        style={{
                          animation: paused ? "none" : `clProgress ${AUTOPLAY_MS}ms linear forwards`,
                          width: paused ? "100%" : undefined,
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <span className="text-sm font-bold tabular-nums text-[#1b0b3a]">
                {pad(active + 1)}
                <span className="text-gray-400"> / {pad(n)}</span>
              </span>
            </div>

            <p className="mt-4 hidden items-center gap-2 text-xs font-semibold text-gray-400 sm:flex">
              <Hand className="h-4 w-4" /> Drag the card to see the next review
            </p>

            <span className="sr-only" aria-live="polite">
              {`Testimonial from ${current.name}, ${current.role} at ${current.company}`}
            </span>
          </div>
        </div>
      </div>

      <style>{`@keyframes clProgress { from { width: 0% } to { width: 100% } }`}</style>
    </section>
  );
};

export default Cliend;
