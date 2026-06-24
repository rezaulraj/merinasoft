import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import partner from "../../assets/partner.png";

gsap.registerPlugin(ScrollTrigger);

const PartnerCharacter = () => {
  return (
    <svg
      className="h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] lg:h-[260px] lg:w-[260px]"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Floating shapes */}
      <rect
        className="partner-float-shape"
        x="35"
        y="25"
        width="18"
        height="18"
        rx="4"
        fill="#3b1578"
        opacity="0.85"
        transform="rotate(-20 35 25)"
      />
      <circle
        className="partner-float-shape"
        cx="250"
        cy="48"
        r="11"
        fill="#a31180"
        opacity="0.8"
      />
      <circle
        className="partner-float-shape"
        cx="270"
        cy="100"
        r="8"
        fill="#d10c74"
        opacity="0.75"
      />

      {/* Shadow */}
      <ellipse
        cx="150"
        cy="265"
        rx="75"
        ry="16"
        fill="#3b1578"
        opacity="0.12"
      />

      {/* Body */}
      <path
        d="M88 124C98 95 122 78 151 79C181 80 205 98 213 128L226 195C231 218 212 239 188 239H111C88 239 70 218 75 195L88 124Z"
        fill="#1f1f1f"
      />

      {/* Head */}
      <circle cx="151" cy="61" r="32" fill="#E5E7EB" />
      <path
        d="M121 59C124 39 136 28 154 28C170 28 182 38 184 55C170 48 143 47 121 59Z"
        fill="#111827"
      />

      {/* Headphone */}
      <path
        d="M117 61C117 39 131 22 151 22C171 22 186 39 186 61"
        stroke="#111827"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <rect x="104" y="55" width="16" height="28" rx="8" fill="#d10c74" />
      <rect x="183" y="55" width="16" height="28" rx="8" fill="#d10c74" />

      {/* Face */}
      <circle cx="140" cy="62" r="3" fill="#111827" />
      <circle cx="162" cy="62" r="3" fill="#111827" />
      <path
        d="M142 75C148 80 155 80 161 75"
        stroke="#111827"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Arms */}
      <path
        d="M94 132C70 135 52 143 49 157C46 169 57 177 76 174L108 169"
        stroke="#1f1f1f"
        strokeWidth="26"
        strokeLinecap="round"
      />
      <path
        d="M207 132C232 139 247 151 246 165C245 177 232 184 215 176L189 164"
        stroke="#1f1f1f"
        strokeWidth="26"
        strokeLinecap="round"
      />

      {/* Laptop */}
      <rect x="105" y="132" width="92" height="65" rx="6" fill="#8B8B8B" />
      <rect x="92" y="197" width="118" height="14" rx="5" fill="#6B6B6B" />

      {/* Hands */}
      <ellipse cx="104" cy="141" rx="18" ry="9" fill="#D1D5DB" />
      <ellipse cx="198" cy="142" rx="18" ry="9" fill="#D1D5DB" />

      {/* Legs */}
      <path
        d="M120 232C96 246 81 257 81 271"
        stroke="#9CA3AF"
        strokeWidth="24"
        strokeLinecap="round"
      />
      <path
        d="M174 231C198 245 215 256 218 270"
        stroke="#9CA3AF"
        strokeWidth="24"
        strokeLinecap="round"
      />
      <path
        d="M84 270H112"
        stroke="#111827"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M204 270H232"
        stroke="#111827"
        strokeWidth="12"
        strokeLinecap="round"
      />
    </svg>
  );
};

const PartnerBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="partnerGrid"
            width="52"
            height="52"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M52 0H0V52"
              fill="none"
              stroke="#3b1578"
              strokeWidth="0.7"
              opacity="0.07"
            />
          </pattern>

          <linearGradient id="partnerGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b1578" />
            <stop offset="50%" stopColor="#a31180" />
            <stop offset="100%" stopColor="#d10c74" />
          </linearGradient>
        </defs>

        <rect width="1440" height="720" fill="url(#partnerGrid)" />

        <circle cx="90" cy="130" r="240" fill="#3b1578" opacity="0.11" />
        <circle cx="1260" cy="110" r="260" fill="#a31180" opacity="0.1" />
        <circle cx="720" cy="690" r="310" fill="#d10c74" opacity="0.09" />

        <path
          className="partner-wave"
          d="M-100 190C180 55 410 315 690 160C970 5 1160 260 1540 90"
          stroke="url(#partnerGradient)"
          strokeWidth="2"
          opacity="0.18"
        />

        <path
          className="partner-wave"
          d="M-100 600C180 470 420 690 720 550C1020 410 1180 640 1540 500"
          stroke="url(#partnerGradient)"
          strokeWidth="2"
          opacity="0.13"
        />
      </svg>

      <div className="absolute -left-36 top-20 h-96 w-96 rounded-full bg-[#3b1578]/20 blur-3xl" />
      <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-[#a31180]/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#d10c74]/20 blur-3xl" />
    </div>
  );
};

const Partner = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".partner-reveal",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        ".partner-image-box",
        { y: 70, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".partner-image-box",
            start: "top 80%",
          },
        },
      );

      gsap.to(".partner-wave", {
        x: 35,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".partner-character", {
        y: -16,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".partner-float-shape", {
        y: -14,
        rotate: 20,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.25,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-primary-bg px-6 py-20 font-arimo sm:px-10 lg:px-20"
    >
      <PartnerBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top Area */}
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="partner-reveal mb-7 h-2 w-28 rounded-full bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74]" />

            <div className="partner-reveal mb-5 inline-flex items-center gap-3 rounded-full border border-[#a31180]/15 bg-white/80 px-5 py-2 shadow-sm backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full bg-[#d10c74]" />
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#3b1578]">
                Trusted Partners
              </span>
            </div>

            <h2 className="partner-reveal max-w-4xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Who{" "}
              <span className="bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] bg-clip-text text-transparent">
                We Have Worked
              </span>{" "}
              With
            </h2>

            <p className="partner-reveal mt-6 max-w-2xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
              We proudly worked with businesses, organizations, startups, and
              growing brands by delivering reliable digital solutions.
            </p>
          </div>

          <div className="partner-character partner-reveal flex justify-center lg:justify-end">
            <PartnerCharacter />
          </div>
        </div>

        {/* Partner Image */}
        <div className="partner-image-box relative mt-12 overflow-hidden rounded-[38px] border border-white bg-white/80 p-4 shadow-[0_35px_110px_rgba(59,21,120,0.12)] backdrop-blur-xl sm:p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3b1578]/5 via-[#a31180]/5 to-[#d10c74]/5" />

          <div className="relative overflow-hidden rounded-[28px] bg-white p-4 sm:p-6">
            <img
              src={partner}
              alt="MerinaSoft Partners"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
