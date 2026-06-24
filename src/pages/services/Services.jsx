import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Software Development",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
    type: "code",
    description:
      "Software development solutions to drive your digital success. Unlock new possibilities for your business with MerinaSoft BD’s expert software consulting and development services.",
  },
  {
    title: "Mobile Application",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80",
    type: "mobile",
    description:
      "Crafting high-end mobile experiences with unmatched expertise. Since 2018, MerinaSoft BD creates native, cross-platform, and progressive mobile applications.",
  },
  {
    title: "Cloud Application Development",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    type: "cloud",
    description:
      "We offer cloud application development services that help businesses build and run powerful cloud-based apps using modern cloud platforms and services.",
  },
  {
    title: "Web Development Service",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    type: "web",
    description:
      "MerinaSoft BD provides high-quality web design, web development, database integration, website maintenance, e-commerce solutions, and application development.",
  },
  {
    title: "Custom Software Development",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
    type: "custom",
    description:
      "Tailored to your business requirements. With 7+ years of experience across 12+ industries, we provide powerful and reliable custom software solutions.",
  },
  {
    title: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    type: "marketing",
    description:
      "We help companies reach their target audience, improve brand awareness, and drive sales through SEO, social media marketing, content marketing, and email marketing.",
  },
];

const ServiceIcon = ({ type }) => {
  const cls = "h-7 w-7";

  if (type === "code") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none">
        <path
          d="M8 8 4 12l4 4M16 8l4 4-4 4M14 4l-4 16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "mobile") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none">
        <rect
          x="7"
          y="2"
          width="10"
          height="20"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M11 18h2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "cloud") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none">
        <path
          d="M7 18h11a4 4 0 0 0 .5-8A6.5 6.5 0 0 0 6 8.5 4.8 4.8 0 0 0 7 18Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "web") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path
          d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21M12 3C9.5 5.5 8.2 8.5 8.2 12S9.5 18.5 12 21"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (type === "custom") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2 4 6v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V6l-8-4Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="m9 12 2 2 4-5" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 19V5M4 19h16M8 15l3-3 3 2 5-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

const ServicesBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 1250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="servicePageGrid"
            width="54"
            height="54"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M54 0H0V54"
              fill="none"
              stroke="#3b1578"
              strokeWidth="0.7"
              opacity="0.07"
            />
          </pattern>

          <linearGradient id="servicePageGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b1578" />
            <stop offset="50%" stopColor="#a31180" />
            <stop offset="100%" stopColor="#d10c74" />
          </linearGradient>
        </defs>

        <rect width="1440" height="1250" fill="url(#servicePageGrid)" />

        <circle cx="100" cy="180" r="260" fill="#3b1578" opacity="0.12" />
        <circle cx="1280" cy="280" r="300" fill="#a31180" opacity="0.12" />
        <circle cx="720" cy="1120" r="360" fill="#d10c74" opacity="0.1" />

        <path
          className="services-wave"
          d="M-100 250C200 80 430 410 710 230C990 50 1120 360 1540 150"
          stroke="url(#servicePageGradient)"
          strokeWidth="2"
          opacity="0.2"
        />

        <path
          className="services-wave"
          d="M-100 850C190 690 440 980 740 800C1040 620 1190 900 1540 710"
          stroke="url(#servicePageGradient)"
          strokeWidth="2"
          opacity="0.14"
        />

        <text
          className="services-code"
          x="100"
          y="700"
          fill="#3b1578"
          opacity="0.1"
          fontSize="100"
          fontWeight="900"
        >
          {"</>"}
        </text>

        <text
          className="services-code"
          x="1180"
          y="520"
          fill="#d10c74"
          opacity="0.1"
          fontSize="90"
          fontWeight="900"
        >
          {"{}"}
        </text>
      </svg>

      <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-[#3b1578]/20 blur-3xl" />
      <div className="absolute -right-40 top-40 h-[430px] w-[430px] rounded-full bg-[#a31180]/20 blur-3xl" />
      <div className="absolute bottom-10 left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[#d10c74]/20 blur-3xl" />
    </div>
  );
};

const Services = () => {
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
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        ".service-image-card",
        { y: 70, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.95,
          stagger: 0.13,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-card-grid",
            start: "top 78%",
          },
        },
      );

      gsap.fromTo(
        ".partner-box",
        { y: 70, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".partner-box",
            start: "top 82%",
          },
        },
      );

      gsap.to(".services-wave", {
        x: 35,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".services-code", {
        y: -18,
        duration: 3,
        repeat: -1,
        yoyo: true,
        stagger: 0.35,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={sectionRef}
      className="relative overflow-hidden bg-primary-bg px-6 py-24 font-arimo sm:px-10 lg:px-20"
    >
      <ServicesBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="services-reveal mx-auto mb-5 inline-flex items-center gap-3 rounded-full border border-[#a31180]/15 bg-white/80 px-5 py-2 shadow-sm backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-[#d10c74]" />
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#3b1578]">
              What We Do
            </span>
          </div>

          <h1 className="services-reveal text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-7xl">
            Services That Power Your{" "}
            <span className="bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] bg-clip-text text-transparent">
              Digital Growth
            </span>
          </h1>

          <p className="services-reveal mx-auto mt-7 max-w-3xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
            Choosing the right software partner is important. We provide
            reliable, modern, and customer-focused digital solutions so you can
            grow your business with confidence and peace of mind.
          </p>
        </div>

        {/* Highlight Banner */}
        <div className="services-reveal mb-10 overflow-hidden rounded-[40px] bg-slate-950 p-[1px] shadow-[0_35px_110px_rgba(59,21,120,0.18)]">
          <div className="relative overflow-hidden rounded-[39px] bg-slate-950 px-8 py-10 sm:px-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#3b1578_0%,transparent_35%),radial-gradient(circle_at_bottom_right,#d10c74_0%,transparent_35%)] opacity-80" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="text-sm font-black uppercase tracking-[0.25em] text-[#d10c74]">
                  Why Choose MerinaSoft BD?
                </span>

                <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                  Perfect service, clear communication, and customer
                  satisfaction first.
                </h2>
              </div>

              <p className="text-base font-medium leading-8 text-white/70">
                You may see the same services offered by many companies, but we
                focus on quality, transparency, support, and solutions that are
                truly useful for your business. Our priority is always client
                satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="services-card-grid grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={index}
              className="service-image-card group overflow-hidden rounded-[36px] border border-white bg-white/85 shadow-[0_25px_80px_rgba(59,21,120,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_35px_110px_rgba(163,17,128,0.18)]"
            >
              <div className="relative h-[245px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

                <div className="absolute left-6 top-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/90 text-[#3b1578] shadow-2xl backdrop-blur-md transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <ServiceIcon type={service.type} />
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="mb-3 inline-flex rounded-full bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
                    Service {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-2xl font-black leading-tight text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="p-7">
                <p className="min-h-[150px] text-sm font-medium leading-7 text-slate-600 sm:text-base">
                  {service.description}
                </p>

                <button className="mt-7 inline-flex items-center gap-3 rounded-full border border-[#a31180]/15 bg-gradient-to-r from-[#3b1578]/5 via-[#a31180]/5 to-[#d10c74]/5 px-5 py-3 text-sm font-black text-[#3b1578] transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-[#3b1578] hover:via-[#a31180] hover:to-[#d10c74] hover:text-white">
                  Learn More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Partner CTA */}
        <div className="partner-box mt-16 overflow-hidden rounded-[42px] bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] p-[1px] shadow-[0_35px_110px_rgba(163,17,128,0.25)]">
          <div className="relative overflow-hidden rounded-[41px] bg-white px-8 py-12 text-center sm:px-12">
            <div className="absolute -left-20 top-0 h-60 w-60 rounded-full bg-[#3b1578]/10 blur-3xl" />
            <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-[#d10c74]/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-4xl">
              <span className="mb-5 inline-flex rounded-full bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] px-5 py-2 text-sm font-black text-white">
                Partnership Opportunity
              </span>

              <h2 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Want to Join Us as a Partner?
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
                MerinaSoft BD offers partnership opportunities to industries
                worldwide. Through partnership, both parties benefit through
                network, product, service, and solution growth.
              </p>

              <button className="mt-8 rounded-full bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] px-9 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(163,17,128,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(163,17,128,0.40)]">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
