import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaLaptopCode,
  FaCode,
  FaGlobe,
  FaMobileScreenButton,
  FaBullhorn,
  FaCloud,
  FaArrowRightLong,
} from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: FaLaptopCode,
    title: "Software Development",
    description:
      "Software development solutions to drive your digital success. Unlock new possibilities for your business with MerinaSoft BD’s expert software consulting and development services.",
    number: "01",
  },
  {
    icon: FaCode,
    title: "Custom Software Development",
    description:
      "Tailored to your business requirements. With 7+ years of experience across 12+ industries, MerinaSoft BD delivers powerful and reliable custom software solutions.",
    number: "02",
  },
  {
    icon: FaGlobe,
    title: "Web Development Service",
    description:
      "We provide high-quality web design and development, database design, integration, programming, website maintenance, e-commerce solutions, and application development.",
    number: "03",
  },
  {
    icon: FaMobileScreenButton,
    title: "Mobile Application",
    description:
      "Crafting high-end mobile experiences with unmatched expertise. Since 2018, MerinaSoft BD has created native, cross-platform, and progressive web applications.",
    number: "04",
  },
  {
    icon: FaBullhorn,
    title: "Digital Marketing",
    description:
      "We help companies reach their target audience, improve brand awareness, and drive sales through SEO, social media marketing, content marketing, and email marketing.",
    number: "05",
  },
  {
    icon: FaCloud,
    title: "Cloud Application Development",
    description:
      "MerinaSoft BD offers cloud application development services that help businesses build and run powerful cloud-based apps using modern cloud technologies.",
    number: "06",
  },
];

const ServicesBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 1050"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="servicesGrid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M48 0H0V48"
              fill="none"
              stroke="#3b1578"
              strokeWidth="0.7"
              opacity="0.08"
            />
          </pattern>

          <linearGradient id="serviceGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b1578" />
            <stop offset="50%" stopColor="#a31180" />
            <stop offset="100%" stopColor="#d10c74" />
          </linearGradient>
        </defs>

        <rect width="1440" height="1050" fill="url(#servicesGrid)" />

        <circle cx="150" cy="160" r="260" fill="#3b1578" opacity="0.12" />
        <circle cx="1260" cy="230" r="280" fill="#a31180" opacity="0.12" />
        <circle cx="720" cy="920" r="340" fill="#d10c74" opacity="0.1" />

        <path
          className="service-wave"
          d="M-100 240C190 80 370 390 640 230C910 70 1100 350 1540 150"
          stroke="url(#serviceGradient)"
          strokeWidth="2"
          opacity="0.22"
        />

        <path
          className="service-wave"
          d="M-100 780C160 660 400 940 690 760C980 580 1130 850 1540 690"
          stroke="url(#serviceGradient)"
          strokeWidth="2"
          opacity="0.16"
        />

        <path
          className="service-line"
          d="M180 500H360V390H530"
          stroke="#3b1578"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.22"
        />

        <path
          className="service-line"
          d="M1220 470H1040V610H850"
          stroke="#d10c74"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.2"
        />

        <circle
          className="service-node"
          cx="180"
          cy="500"
          r="7"
          fill="#3b1578"
          opacity="0.4"
        />
        <circle
          className="service-node"
          cx="360"
          cy="390"
          r="7"
          fill="#a31180"
          opacity="0.4"
        />
        <circle
          className="service-node"
          cx="530"
          cy="390"
          r="7"
          fill="#d10c74"
          opacity="0.4"
        />
        <circle
          className="service-node"
          cx="1220"
          cy="470"
          r="7"
          fill="#d10c74"
          opacity="0.4"
        />
        <circle
          className="service-node"
          cx="1040"
          cy="610"
          r="7"
          fill="#3b1578"
          opacity="0.4"
        />
        <circle
          className="service-node"
          cx="850"
          cy="610"
          r="7"
          fill="#a31180"
          opacity="0.4"
        />

        <text
          className="service-code"
          x="110"
          y="700"
          fill="#3b1578"
          opacity="0.13"
          fontSize="76"
          fontWeight="900"
        >
          {"</>"}
        </text>

        <text
          className="service-code"
          x="1180"
          y="365"
          fill="#d10c74"
          opacity="0.14"
          fontSize="68"
          fontWeight="900"
        >
          {"{}"}
        </text>
      </svg>

      <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-[#3b1578]/20 blur-3xl" />
      <div className="absolute -right-32 top-32 h-[420px] w-[420px] rounded-full bg-[#a31180]/20 blur-3xl" />
      <div className="absolute bottom-16 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#d10c74]/20 blur-3xl" />
    </div>
  );
};

const OurServices = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-reveal",
        { y: 55, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        ".service-card",
        { y: 70, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.95,
          stagger: 0.13,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 78%",
          },
        },
      );

      gsap.to(".service-wave", {
        x: 35,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".service-line", {
        opacity: 0.45,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.25,
        ease: "sine.inOut",
      });

      gsap.to(".service-node", {
        scale: 1.5,
        transformOrigin: "center",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.16,
        ease: "sine.inOut",
      });

      gsap.to(".service-code", {
        y: -18,
        duration: 3,
        repeat: -1,
        yoyo: true,
        stagger: 0.4,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-primary-bg px-6 py-24 font-arimo sm:px-10 lg:px-20"
    >
      <ServicesBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="services-reveal mx-auto mb-5 inline-flex items-center gap-3 rounded-full border border-[#a31180]/15 bg-white/80 px-5 py-2 shadow-sm backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-[#d10c74]" />
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#3b1578]">
              What We Provide
            </span>
          </div>

          <h2 className="services-reveal text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-7xl">
            Our{" "}
            <span className="bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="services-reveal mx-auto mt-6 max-w-3xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
            We deliver powerful software, web, mobile, cloud, and digital
            marketing solutions that help businesses grow faster, work smarter,
            and scale with confidence.
          </p>
        </div>

        <div className="services-grid grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="service-card group relative overflow-hidden rounded-[34px] border border-white bg-white/85 p-7 shadow-[0_25px_80px_rgba(59,21,120,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_100px_rgba(163,17,128,0.18)]"
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-gradient-to-br from-[#3b1578]/10 via-[#a31180]/10 to-[#d10c74]/10 transition-all duration-500 group-hover:scale-125 group-hover:opacity-80" />

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] transition-all duration-500 group-hover:w-full" />

                <div className="relative z-10">
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#3b1578] via-[#a31180] to-[#d10c74] text-2xl text-white shadow-xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <Icon />
                    </div>

                    <span className="text-5xl font-black text-slate-900/5 transition-all duration-500 group-hover:text-[#d10c74]/10">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mb-4 text-2xl font-black leading-tight text-slate-950">
                    {service.title}
                  </h3>

                  <p className="min-h-[150px] text-sm font-medium leading-7 text-slate-600 sm:text-base">
                    {service.description}
                  </p>

                  <button className="mt-7 inline-flex items-center gap-3 rounded-full border border-[#a31180]/15 bg-gradient-to-r from-[#3b1578]/5 via-[#a31180]/5 to-[#d10c74]/5 px-5 py-3 text-sm font-black text-[#3b1578] transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-[#3b1578] hover:via-[#a31180] hover:to-[#d10c74] hover:text-white">
                    Explore Service
                    <FaArrowRightLong className="transition-all duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OurServices;
