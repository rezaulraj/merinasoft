import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowLeft, ArrowRight, Expand, X, MoveRight } from "lucide-react";
import { getLenis } from "../../hooks/useSmoothScroll";

import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpg";
import gallery3 from "../../assets/gallery3.jpg";
import gallery4 from "../../assets/gallery4.jpg";
import gallery5 from "../../assets/gallery5.jpg";

gsap.registerPlugin(ScrollTrigger);

const photos = [
  { image: gallery1, title: "Creative Workspace", category: "Office" },
  { image: gallery2, title: "Team Collaboration", category: "Team" },
  { image: gallery3, title: "Software Development", category: "Technology" },
  { image: gallery4, title: "Digital Innovation", category: "Innovation" },
  { image: gallery5, title: "Project Success", category: "Success" },
];

const brandGradient = "bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74]";
const textGradient = `${brandGradient} bg-clip-text text-transparent`;
const pad = (i) => String(i + 1).padStart(2, "0");

/* ---------------- Lightbox ---------------- */
const Lightbox = ({ index, onClose, onPrev, onNext }) => {
  const photo = photos[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    getLenis()?.stop();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      getLenis()?.start();
    };
  }, [onClose, onPrev, onNext]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
      className="fixed inset-0 z-[100] flex flex-col bg-[#0d0420]/95 p-4 font-arimo text-white backdrop-blur-xl sm:p-8"
      style={{ animation: "glFade 0.35s ease-out" }}
      onClick={onClose}
    >
      <div className="flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
        <span className="text-sm font-semibold tabular-nums text-white/60">
          <span className="text-white">{pad(index)}</span> / {pad(photos.length - 1)}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close preview"
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 transition-colors hover:bg-white hover:text-[#1b0b3a]"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center py-6">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous photo"
          className="absolute left-0 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 transition-colors hover:bg-white hover:text-[#1b0b3a] sm:h-14 sm:w-14"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        <figure
          key={index}
          className="relative w-full max-w-4xl"
          style={{ animation: "glZoom 0.5s cubic-bezier(0.22,1,0.36,1)" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`absolute -inset-6 rounded-[40px] ${brandGradient} opacity-25 blur-3xl`} />
          <img
            src={photo.image}
            alt={photo.title}
            className="relative max-h-[70svh] w-full rounded-3xl object-contain shadow-2xl ring-1 ring-white/15"
          />
          <figcaption className="relative mt-5 flex items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ff7ac0]">{photo.category}</span>
              <h3 className="mt-1 text-2xl font-semibold sm:text-3xl">{photo.title}</h3>
            </div>
          </figcaption>
        </figure>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next photo"
          className="absolute right-0 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 transition-colors hover:bg-white hover:text-[#1b0b3a] sm:h-14 sm:w-14"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center gap-2" onClick={(e) => e.stopPropagation()}>
        {photos.map((p, i) => (
          <button
            key={p.title}
            type="button"
            onClick={() => onNext(i)}
            aria-label={`Show ${p.title}`}
            className={`h-14 w-20 cursor-pointer overflow-hidden rounded-xl transition-all duration-300 sm:h-16 sm:w-24 ${
              i === index ? "ring-2 ring-[#f062c0] ring-offset-2 ring-offset-[#0d0420]" : "opacity-40 hover:opacity-80"
            }`}
          >
            <img src={p.image} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>,
    document.body,
  );
};

/* ---------------- Photo card ---------------- */
const PhotoCard = ({ photo, index, onOpen }) => (
  <button
    type="button"
    onClick={() => onOpen(index)}
    className="gl-card group relative shrink-0 cursor-pointer snap-center text-left"
    aria-label={`Open ${photo.title}`}
  >
    <div className="relative h-[52svh] max-h-[460px] min-h-[300px] w-[78vw] max-w-[620px] overflow-hidden rounded-[32px] bg-[#1b0b3a] shadow-[0_40px_80px_-35px_rgba(59,21,120,0.7)] sm:w-[60vw] lg:w-[46vw]">
      <img
        src={photo.image}
        alt={photo.title}
        loading="lazy"
        draggable="false"
        className="gl-img absolute inset-y-0 -left-[8%] h-full w-[116%] max-w-none object-cover transition-[filter] duration-700 group-hover:brightness-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1b0b3a]/85 via-[#1b0b3a]/10 to-transparent" />
      <div className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 ${brandGradient} transition-transform duration-700 group-hover:scale-x-100`} />

      <span className="absolute right-5 top-5 flex h-12 w-12 scale-75 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
        <Expand className="h-5 w-5" />
      </span>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white sm:p-8">
        <div>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur">
            {photo.category}
          </span>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">{photo.title}</h3>
        </div>
        <span className="text-6xl font-semibold leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.5)] sm:text-7xl">
          {pad(index)}
        </span>
      </div>
    </div>
  </button>
);

/* ---------------- Page ---------------- */
const Gallery = () => {
  const pageRef = useRef(null);
  const stripRef = useRef(null);
  const trackRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(() => setOpenIndex((i) => (i - 1 + photos.length) % photos.length), []);
  const next = useCallback(
    (to) => setOpenIndex((i) => (typeof to === "number" ? to : (i + 1) % photos.length)),
    [],
  );

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .from(".gl-hero-line", { yPercent: 110, duration: 1.1, stagger: 0.1 })
          .from(".gl-hero-fade", { y: 30, opacity: 0, duration: 0.9, stagger: 0.08 }, 0.4)
          .from(".gl-card", { x: 120, opacity: 0, duration: 1.2, stagger: 0.1 }, 0.5);

        gsap.utils.toArray(".gl-reveal").forEach((el) => {
          gsap.from(el, {
            y: 50,
            opacity: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          });
        });
      });

      // Desktop: vertical scroll drives a horizontal film strip
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const track = trackRef.current;
        const distance = () => track.scrollWidth - window.innerWidth;

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: stripRef.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => gsap.set(".gl-progress", { scaleX: self.progress }),
          },
        });

        // Parallax inside each photo while it travels across the screen
        gsap.utils.toArray(".gl-card").forEach((card) => {
          const image = card.querySelector(".gl-img");
          if (!image) return;
          gsap.fromTo(
            image,
            { xPercent: -6 },
            {
              xPercent: 6,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: tween,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            },
          );
        });
      });
    },
    { scope: pageRef },
  );

  return (
    <main ref={pageRef} className="relative bg-transparent font-arimo text-[#1b0b3a]">
      {/* ================= FILM STRIP (with hero) ================= */}
      <section ref={stripRef} className="relative flex min-h-svh flex-col justify-center overflow-hidden pb-12 pt-16 lg:h-svh lg:pt-24">
        <div className="container mx-auto flex flex-col justify-between gap-6 px-4 lg:flex-row lg:items-end">
          <div>
            <div className="gl-hero-fade inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-[#a31180]">
              <span className={`h-0.5 w-10 rounded-full ${brandGradient}`} />
              Our Gallery
            </div>
            <h1 className="mt-5 text-[clamp(2.6rem,6.5vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
              <span className="block overflow-hidden pb-[0.08em]">
                <span className="gl-hero-line block">
                  Inside <span className={`${textGradient} italic`}>MerinaSoft.</span>
                </span>
              </span>
            </h1>
          </div>
          <div className="gl-hero-fade max-w-md">
            <p className="text-base leading-8 text-gray-600 sm:text-lg">
              A visual showcase of our workspace, teamwork, innovation and digital
              journey.
            </p>
            <p className="mt-3 hidden items-center gap-2 text-sm font-semibold text-[#a31180] lg:flex">
              Scroll to explore <MoveRight className="h-4 w-4 animate-pulse" />
            </p>
          </div>
        </div>

        {/* Track */}
        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 [scrollbar-width:none] lg:snap-none lg:overflow-visible lg:px-[8vw]"
        >
          {photos.map((photo, i) => (
            <PhotoCard key={photo.title} photo={photo} index={i} onOpen={setOpenIndex} />
          ))}

          {/* Closing story card */}
          <div className="gl-card relative flex h-[52svh] max-h-[460px] min-h-[300px] w-[78vw] max-w-[520px] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-[32px] bg-[#1b0b3a] p-8 text-white sm:w-[50vw] sm:p-10 lg:w-[34vw]">
            <div className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full ${brandGradient} opacity-50 blur-3xl`} />
            <span className="relative text-sm font-bold uppercase tracking-[0.3em] text-[#ff7ac0]">Our Story</span>
            <div className="relative">
              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
                Every project has a story. We build it{" "}
                <span className="bg-gradient-to-r from-[#c9a6ff] via-[#f062c0] to-[#ff7ac0] bg-clip-text text-transparent italic">
                  beautifully.
                </span>
              </h2>
              <p className="mt-4 leading-7 text-white/65">
                From planning to design, development and delivery — our team works
                with passion to create meaningful digital experiences.
              </p>
            </div>
            <Link
              to="/contact"
              className={`relative inline-flex items-center gap-2 self-start rounded-full ${brandGradient} px-6 py-3 font-semibold transition-transform duration-300 hover:-translate-y-0.5`}
            >
              Start Your Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Spacer so the last card can reach the centre */}
          <div className="hidden w-[8vw] shrink-0 lg:block" />
        </div>

        {/* Progress */}
        <div className="container mx-auto mt-8 hidden items-center gap-4 px-4 lg:flex">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Start</span>
          <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-[#3b1578]/10">
            <div className={`gl-progress absolute inset-0 origin-left scale-x-0 rounded-full ${brandGradient}`} />
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">End</span>
        </div>
      </section>

      {/* ================= MOSAIC ================= */}
      <section className="container mx-auto px-4 py-24">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="gl-reveal max-w-2xl text-[clamp(2rem,4.5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
            Moments from our <span className={`${textGradient} italic`}>everyday.</span>
          </h2>
          <p className="gl-reveal max-w-sm text-gray-600">Tap any photo to open it in full view.</p>
        </div>

        <div className="mt-12 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[240px]">
          {photos.map((photo, i) => (
            <button
              key={photo.title}
              type="button"
              onClick={() => setOpenIndex(i)}
              className={`gl-reveal group relative cursor-pointer overflow-hidden rounded-[28px] text-left ${
                ["sm:col-span-2 lg:col-span-2 lg:row-span-2", "", "", "", ""][i]
              }`}
              aria-label={`Open ${photo.title}`}
            >
              <img
                src={photo.image}
                alt={photo.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b0b3a]/80 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 text-white transition-transform duration-500 group-hover:translate-y-0">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ff7ac0]">{photo.category}</span>
                <h3 className="mt-1 text-xl font-semibold">{photo.title}</h3>
              </div>
              <span className="absolute right-5 top-5 flex h-11 w-11 scale-75 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                <Expand className="h-4 w-4" />
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="container mx-auto px-4 pb-28 text-center">
        <h2 className="gl-reveal mx-auto max-w-3xl text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.06] tracking-[-0.03em]">
          Want to be part of our <span className={`${textGradient} italic`}>next story?</span>
        </h2>
        <div className="gl-reveal mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full ${brandGradient} px-8 py-4 font-semibold text-white shadow-[0_20px_50px_-12px_#d10c74] transition-transform duration-300 hover:-translate-y-1`}
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Start a Project</span>
            <ArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-full border border-[#3b1578]/20 bg-white/60 px-8 py-4 font-semibold text-[#3b1578] backdrop-blur transition-all duration-300 hover:border-[#a31180]/40 hover:text-[#a31180]"
          >
            About Us
          </Link>
        </div>
      </section>

      {openIndex !== null && <Lightbox index={openIndex} onClose={close} onPrev={prev} onNext={next} />}

      <style>{`
        @keyframes glFade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes glZoom { from { opacity: 0; transform: scale(0.94) translateY(20px) } to { opacity: 1; transform: none } }
      `}</style>
    </main>
  );
};

export default Gallery;
