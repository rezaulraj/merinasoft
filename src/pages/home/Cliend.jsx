import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import cliend from "../../assets/cliend.png";

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

const FloatingSvg = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="clientGrid"
            width="52"
            height="52"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M52 0H0V52"
              fill="none"
              stroke="#3b1578"
              strokeWidth="0.7"
              opacity="0.08"
            />
          </pattern>

          <linearGradient id="clientGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b1578" />
            <stop offset="50%" stopColor="#a31180" />
            <stop offset="100%" stopColor="#d10c74" />
          </linearGradient>
        </defs>

        <rect width="1440" height="900" fill="url(#clientGrid)" />

        <circle cx="120" cy="170" r="240" fill="#3b1578" opacity="0.12" />
        <circle cx="1280" cy="260" r="270" fill="#a31180" opacity="0.12" />
        <circle cx="720" cy="820" r="310" fill="#d10c74" opacity="0.1" />

        <path
          className="client-wave"
          d="M-100 220C170 80 390 380 650 220C910 60 1120 330 1540 150"
          stroke="url(#clientGradient)"
          strokeWidth="2"
          opacity="0.2"
        />

        <path
          className="client-wave"
          d="M-100 720C190 580 430 840 720 680C1010 520 1160 790 1540 610"
          stroke="url(#clientGradient)"
          strokeWidth="2"
          opacity="0.15"
        />

        <text
          className="quote-shape"
          x="115"
          y="665"
          fill="#3b1578"
          opacity="0.12"
          fontSize="120"
          fontWeight="900"
        >
          “
        </text>

        <text
          className="quote-shape"
          x="1200"
          y="320"
          fill="#d10c74"
          opacity="0.12"
          fontSize="120"
          fontWeight="900"
        >
          ”
        </text>
      </svg>

      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#3b1578]/20 blur-3xl" />
      <div className="absolute -right-32 top-28 h-[420px] w-[420px] rounded-full bg-[#a31180]/20 blur-3xl" />
      <div className="absolute bottom-10 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#d10c74]/20 blur-3xl" />
    </div>
  );
};

const Cliend = () => {
  const [active, setActive] = useState(0);

  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const textBoxRef = useRef(null);
  const imageRef = useRef(null);
  const floatingCardRef = useRef(null);
  const dotsRef = useRef([]);

  const current = testimonials[active];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [badgeRef.current, titleRef.current],
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        imageRef.current,
        { x: 70, opacity: 0, scale: 0.94 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.25,
        },
      );

      gsap.to(".client-wave", {
        x: 35,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".quote-shape", {
        y: -18,
        duration: 3,
        repeat: -1,
        yoyo: true,
        stagger: 0.4,
        ease: "sine.inOut",
      });

      gsap.to(".client-float-one", {
        y: -18,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".client-float-two", {
        y: 18,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".client-float-three", {
        x: 14,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textBoxRef.current,
        { y: 45, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        floatingCardRef.current,
        { y: 35, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          ease: "back.out(1.7)",
        },
      );

      gsap.fromTo(
        dotsRef.current[active],
        { scale: 0.75 },
        {
          scale: 1,
          duration: 0.35,
          ease: "back.out(1.7)",
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [active]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-primary-bg px-6 py-24 font-arimo sm:px-10 lg:px-20"
    >
      <FloatingSvg />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left Text */}
          <div>
            <div
              ref={badgeRef}
              className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#a31180]/15 bg-white/80 px-5 py-2 shadow-sm backdrop-blur-md"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#d10c74]" />
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#3b1578]">
                Testimonials
              </span>
            </div>

            <h2
              ref={titleRef}
              className="max-w-2xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl"
            >
              Our Radiant Clients{" "}
              <span className="bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] bg-clip-text text-transparent">
                Says Something
              </span>{" "}
              About Us
            </h2>

            <div
              ref={textBoxRef}
              className="mt-10 rounded-[34px] border border-white bg-white/85 p-7 shadow-[0_30px_90px_rgba(59,21,120,0.10)] backdrop-blur-xl sm:p-9"
            >
              <div className="mb-6 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((item) => (
                  <span key={item} className="text-xl text-[#d10c74]">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-base font-medium leading-8 text-slate-600 sm:text-lg">
                “{current.quote}”
              </p>

              <div className="mt-8 flex items-center justify-between gap-5">
                <div>
                  <h4 className="text-xl font-black text-slate-950">
                    {current.name}
                  </h4>
                  <p className="mt-1 text-sm font-bold text-[#a31180]">
                    {current.role}
                  </p>
                  <p className="text-sm font-medium text-slate-500">
                    {current.company}
                  </p>
                </div>

                <div className="hidden h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#3b1578] via-[#a31180] to-[#d10c74] text-4xl font-black text-white shadow-xl sm:flex">
                  “
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  ref={(el) => (dotsRef.current[index] = el)}
                  onClick={() => setActive(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    active === index
                      ? "w-10 bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74]"
                      : "w-3 bg-slate-300 hover:bg-[#a31180]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Static Image */}
          <div ref={imageRef} className="relative">
            <div className="absolute -inset-5 rounded-[42px] bg-gradient-to-br from-[#3b1578]/20 via-[#a31180]/20 to-[#d10c74]/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[42px] border border-white bg-white/70 p-5 shadow-[0_35px_110px_rgba(163,17,128,0.18)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#3b1578_0%,transparent_35%),radial-gradient(circle_at_bottom_right,#d10c74_0%,transparent_35%)] opacity-10" />

              <img
                src={cliend}
                alt="MerinaSoft Client"
                className="relative z-10 mx-auto h-[420px] w-full object-contain sm:h-[520px]"
              />

              {/* Auto Changing Floating Text */}
              <div
                ref={floatingCardRef}
                className="client-float-one absolute left-5 top-8 z-20 max-w-[260px] rounded-3xl border border-white/40 bg-white/85 p-5 shadow-2xl backdrop-blur-xl"
              >
                <p className="line-clamp-3 text-sm font-bold leading-6 text-slate-700">
                  “{current.quote}”
                </p>
                <h5 className="mt-3 text-sm font-black text-[#3b1578]">
                  - {current.name}
                </h5>
              </div>

              <div className="client-float-two absolute bottom-8 right-5 z-20 rounded-3xl border border-white/40 bg-white/85 px-5 py-4 shadow-2xl backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                  Client Trust
                </p>
                <h4 className="mt-1 text-3xl font-black bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] bg-clip-text text-transparent">
                  100%
                </h4>
              </div>

              <div className="client-float-three absolute right-6 top-28 z-20 hidden rounded-3xl border border-white/40 bg-white/85 px-5 py-4 shadow-2xl backdrop-blur-xl md:block">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                  Rating
                </p>
                <p className="mt-1 text-lg text-[#d10c74]">★★★★★</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cliend;
