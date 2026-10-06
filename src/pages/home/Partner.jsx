import { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Handshake } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Individual logos cut from the original partner.png grid
const logoFiles = import.meta.glob("../../assets/partners/partner-*.png", {
  eager: true,
  import: "default",
});

const partnerNames = [
  "Wata Chemicals Limited",
  "U.Fly",
  "Travel partner",
  "Rongdhonu",
  "Rainbowplus",
  "COURG Foundation",
  "Partner",
  "Best Bazaar",
  "MPT",
  "Prokashok",
  "Parts Bazaar",
  "Kites Group",
  "Evershine Technology Solution",
  "MSDM Travels & Tours",
  "GT",
  "Travel partner",
  "Channel World",
  "CCN – Conference Computer & Network",
  "BACE",
  "Arabians Tours & Travel",
  "Bismillah Easy Shop",
  "ICON",
  "Western Scientific Co",
  "M/S Bhai Bhai Motors",
];

const partners = Object.keys(logoFiles)
  .sort()
  .map((path, i) => ({ src: logoFiles[path], name: partnerNames[i] ?? "Partner" }));

const rows = [partners.slice(0, 8), partners.slice(8, 16), partners.slice(16, 24)];

const brandGradient = "bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74]";
const textGradient = `${brandGradient} bg-clip-text text-transparent`;

const LogoCard = ({ partner }) => (
  <div className="group/card relative shrink-0 rounded-3xl p-px transition-transform duration-500 hover:-translate-y-2">
    {/* Gradient border on hover */}
    <div className={`absolute inset-0 rounded-3xl ${brandGradient} opacity-0 transition-opacity duration-500 group-hover/card:opacity-100`} />
    <div className="relative flex h-24 w-44 items-center justify-center rounded-[23px] border border-[#3b1578]/10 bg-white shadow-[0_15px_35px_-20px_rgba(59,21,120,0.35)] transition-shadow duration-500 group-hover/card:border-transparent group-hover/card:shadow-[0_25px_50px_-20px_rgba(163,17,128,0.5)] sm:h-28 sm:w-52">
      <img
        src={partner.src}
        alt={partner.name}
        loading="lazy"
        draggable="false"
        className="max-h-16 max-w-[130px] object-contain opacity-60 grayscale transition-all duration-500 group-hover/card:scale-110 group-hover/card:opacity-100 group-hover/card:grayscale-0"
      />
    </div>
  </div>
);

const Partner = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".pt-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
      gsap.from(".pt-row", {
        x: (i) => (i % 2 === 0 ? -120 : 120),
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".pt-wall", start: "top 85%" },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-transparent py-24 font-arimo">
      {/* ---------- Heading ---------- */}
      <div className="container mx-auto grid items-end gap-8 px-4 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="pt-reveal inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-[#a31180]">
            <span className={`h-0.5 w-10 rounded-full ${brandGradient}`} />
            Trusted Partners
          </div>
          <h2 className="pt-reveal mt-5 text-4xl font-black leading-[1.1] tracking-tight text-[#1b0b3a] sm:text-5xl lg:text-6xl">
            Trusted by{" "}
            <span className={`${textGradient} italic`}>{partners.length}+</span> growing
            brands.
          </h2>
        </div>
        <div className="pt-reveal flex items-end justify-between gap-6 lg:pb-2">
          <p className="max-w-sm text-base leading-8 text-gray-600 sm:text-lg">
            Businesses, organizations, startups and growing brands who rely on
            MerinaSoft for dependable digital solutions.
          </p>
          <div className={`hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${brandGradient} text-white shadow-lg shadow-fuchsia-500/30 sm:flex`}>
            <Handshake className="h-8 w-8" />
          </div>
        </div>
      </div>

      {/* ---------- Logo wall ---------- */}
      <div className="pt-wall relative mt-16 [perspective:1400px]">
        <div className="space-y-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] lg:[transform:rotateX(14deg)_rotateZ(-3deg)]">
          {rows.map((row, r) => (
            <div key={r} className="pt-row group overflow-visible py-2">
              <div
                className={`flex w-max gap-5 group-hover:[animation-play-state:paused] motion-reduce:animate-none ${
                  r % 2 === 0 ? "animate-marquee" : "animate-marquee-reverse"
                }`}
                style={{ animationDuration: `${36 + r * 6}s` }}
              >
                {[...row, ...row, ...row, ...row].map((partner, i) => (
                  <LogoCard key={i} partner={partner} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Center badge */}
        <div className="pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex">
          <div className="pt-reveal rounded-full border border-[#a31180]/10 bg-(--color-primary-bg)/90 px-7 py-4 text-center shadow-[0_30px_60px_-20px_rgba(59,21,120,0.45)] backdrop-blur-xl">
            <div className={`text-4xl font-black leading-none ${textGradient}`}>{partners.length}+</div>
            <div className="mt-1 text-xs font-bold uppercase tracking-widest text-gray-500">Happy partners</div>
          </div>
        </div>
      </div>

      {/* ---------- CTA ---------- */}
      <div className="container mx-auto mt-16 px-4">
        <div className="pt-reveal relative overflow-hidden rounded-[32px] bg-[#1b0b3a] px-8 py-10 sm:px-12">
          <div className={`pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full ${brandGradient} opacity-40 blur-3xl`} />
          <div className="pointer-events-none absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-[#d10c74] opacity-20 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-black text-white sm:text-3xl">
                Become our next{" "}
                <span className="bg-gradient-to-r from-[#c9a6ff] via-[#f062c0] to-[#ff7ac0] bg-clip-text text-transparent">
                  success story.
                </span>
              </h3>
              <p className="mt-2 text-white/60">
                Join the businesses growing with MerinaSoft.
              </p>
            </div>
            <Link
              to="/contact"
              className={`group inline-flex shrink-0 items-center gap-3 rounded-full ${brandGradient} px-7 py-4 font-bold text-white shadow-lg shadow-fuchsia-500/30 transition-transform duration-300 hover:-translate-y-0.5`}
            >
              Partner With Us
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
