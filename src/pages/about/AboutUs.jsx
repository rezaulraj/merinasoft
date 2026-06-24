import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutImages = {
  team: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  office:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  developer:
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
};

const values = [
  {
    number: "01",
    title: "Customer-Centric",
    text: "We focus on understanding each client’s unique needs and building solutions that create real business value.",
  },
  {
    number: "02",
    title: "Innovation First",
    text: "We continuously explore new technologies and smarter ways to solve complex business problems.",
  },
  {
    number: "03",
    title: "Transparency",
    text: "We keep our clients informed with clear project plans, progress updates, and honest communication.",
  },
  {
    number: "04",
    title: "Long-Term Support",
    text: "We provide ongoing maintenance and support to keep software secure, updated, and performing smoothly.",
  },
];

const services = [
  "Web Development",
  "Mobile App Development",
  "Custom Software",
  "Cloud Solutions",
  "UI/UX Focused Software",
  "Ongoing Maintenance",
];

const industries = [
  "Healthcare",
  "Finance",
  "Education",
  "Retail",
  "Business Automation",
  "Enterprise Software",
];

const AboutIcon = ({ type }) => {
  const cls = "h-7 w-7";

  if (type === "team") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none">
        <path
          d="M16 11a4 4 0 1 0-8 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="2" />
        <path
          d="M4 21c1.5-4 4.2-6 8-6s6.5 2 8 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

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

  if (type === "growth") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none">
        <path
          d="M4 19V5M4 19h16M8 15l3-3 3 2 5-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2 14.8 8.4 22 9.1l-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.1l7.2-.7L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const AboutBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 1600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="aboutGrid"
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

          <linearGradient id="aboutGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b1578" />
            <stop offset="50%" stopColor="#a31180" />
            <stop offset="100%" stopColor="#d10c74" />
          </linearGradient>
        </defs>

        <rect width="1440" height="1600" fill="url(#aboutGrid)" />

        <circle cx="120" cy="220" r="280" fill="#3b1578" opacity="0.12" />
        <circle cx="1280" cy="320" r="310" fill="#a31180" opacity="0.12" />
        <circle cx="720" cy="1380" r="360" fill="#d10c74" opacity="0.1" />

        <path
          className="about-wave"
          d="M-100 260C190 90 420 410 700 230C980 50 1120 350 1540 150"
          stroke="url(#aboutGradient)"
          strokeWidth="2"
          opacity="0.2"
        />

        <path
          className="about-wave"
          d="M-100 980C170 820 430 1120 730 930C1030 740 1180 1040 1540 860"
          stroke="url(#aboutGradient)"
          strokeWidth="2"
          opacity="0.14"
        />

        <text
          className="about-code"
          x="110"
          y="740"
          fill="#3b1578"
          opacity="0.1"
          fontSize="100"
          fontWeight="900"
        >
          {"</>"}
        </text>

        <text
          className="about-code"
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
      <div className="absolute -right-40 top-44 h-[430px] w-[430px] rounded-full bg-[#a31180]/20 blur-3xl" />
      <div className="absolute bottom-10 left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[#d10c74]/20 blur-3xl" />
    </div>
  );
};

const AboutUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-reveal",
        { y: 60, opacity: 0 },
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
        ".about-card",
        { y: 70, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.95,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-card-area",
            start: "top 78%",
          },
        },
      );

      gsap.fromTo(
        ".value-card",
        { y: 60, opacity: 0, rotateX: 12 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".value-area",
            start: "top 78%",
          },
        },
      );

      gsap.to(".about-wave", {
        x: 35,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".about-code", {
        y: -18,
        duration: 3,
        repeat: -1,
        yoyo: true,
        stagger: 0.35,
        ease: "sine.inOut",
      });

      gsap.to(".float-img-one", {
        y: -18,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".float-img-two", {
        y: 16,
        duration: 3.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={sectionRef}
      className="relative overflow-hidden bg-primary-bg font-arimo"
    >
      <AboutBackground />

      <section className="relative z-10 px-6 pb-20 pt-28 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* Hero */}
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="about-reveal mb-5 inline-flex items-center gap-3 rounded-full border border-[#a31180]/15 bg-white/80 px-5 py-2 shadow-sm backdrop-blur-md">
                <span className="h-2.5 w-2.5 rounded-full bg-[#d10c74]" />
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#3b1578]">
                  About MerinaSoft
                </span>
              </div>

              <h1 className="about-reveal text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-7xl">
                We Build Software That{" "}
                <span className="bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] bg-clip-text text-transparent">
                  Moves Business Forward
                </span>
              </h1>

              <p className="about-reveal mt-7 max-w-2xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
                Our software company is a team of dedicated professionals
                passionate about creating innovative solutions that empower
                clients to achieve their goals. We deliver cutting-edge software
                that is functional, intuitive, and user-friendly.
              </p>

              <div className="about-reveal mt-9 flex flex-wrap gap-4">
                <button className="rounded-full bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(163,17,128,0.30)] transition-all duration-300 hover:-translate-y-1">
                  Start a Project
                </button>

                <button className="rounded-full border border-[#a31180]/20 bg-white px-8 py-4 text-sm font-black uppercase tracking-wide text-[#3b1578] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#3b1578] hover:text-white">
                  Explore Services
                </button>
              </div>
            </div>

            {/* Image Collage */}
            <div className="about-reveal relative min-h-[560px]">
              <div className="absolute inset-0 rounded-[50px] bg-gradient-to-br from-[#3b1578]/20 via-[#a31180]/20 to-[#d10c74]/20 blur-2xl" />

              <div className="relative ml-auto h-[470px] max-w-[520px] overflow-hidden rounded-[46px] border border-white bg-white/70 p-4 shadow-[0_35px_110px_rgba(59,21,120,0.18)] backdrop-blur-xl">
                <img
                  src={aboutImages.team}
                  alt="Software team collaboration"
                  className="h-full w-full rounded-[34px] object-cover"
                />
              </div>

              <div className="float-img-one absolute left-0 top-10 hidden w-[250px] overflow-hidden rounded-[34px] border border-white bg-white p-3 shadow-2xl sm:block">
                <img
                  src={aboutImages.developer}
                  alt="Developer working"
                  className="h-[170px] w-full rounded-[24px] object-cover"
                />
                <div className="px-2 py-4">
                  <p className="text-sm font-black text-slate-950">
                    Agile Development
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    Transparent workflow
                  </p>
                </div>
              </div>

              <div className="float-img-two absolute bottom-5 right-0 w-[280px] rounded-[34px] border border-white bg-slate-950 p-5 shadow-2xl">
                <div className="mb-4 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#d10c74]" />
                  <span className="h-3 w-3 rounded-full bg-[#a31180]" />
                  <span className="h-3 w-3 rounded-full bg-white/60" />
                </div>

                <p className="text-sm leading-7 text-white/75">
                  <span className="text-[#d10c74]">const</span>{" "}
                  <span className="text-white">solution</span>{" "}
                  <span className="text-white/50">=</span>{" "}
                  <span className="text-[#a31180]">clientNeeds</span>
                </p>

                <div className="mt-5 rounded-2xl bg-white/10 p-4">
                  <h4 className="text-3xl font-black text-white">7+</h4>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Cards */}
          <div className="about-card-area mt-20 grid gap-6 md:grid-cols-3">
            <div className="about-card rounded-[34px] border border-white bg-white/85 p-7 shadow-[0_25px_80px_rgba(59,21,120,0.08)] backdrop-blur-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#3b1578] text-white shadow-xl">
                <AboutIcon type="team" />
              </div>
              <h3 className="text-2xl font-black text-slate-950">
                Collaborative Team
              </h3>
              <p className="mt-4 text-base font-medium leading-8 text-slate-600">
                Our company is built on collaboration and teamwork. We believe
                the best results come from working together with open
                communication.
              </p>
            </div>

            <div className="about-card rounded-[34px] border border-white bg-white/85 p-7 shadow-[0_25px_80px_rgba(163,17,128,0.08)] backdrop-blur-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#a31180] text-white shadow-xl">
                <AboutIcon type="code" />
              </div>
              <h3 className="text-2xl font-black text-slate-950">
                Smart Software
              </h3>
              <p className="mt-4 text-base font-medium leading-8 text-slate-600">
                We create software that is powerful, reliable, user-friendly,
                and tailored to meet each client’s specific business needs.
              </p>
            </div>

            <div className="about-card rounded-[34px] border border-white bg-white/85 p-7 shadow-[0_25px_80px_rgba(209,12,116,0.08)] backdrop-blur-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#d10c74] text-white shadow-xl">
                <AboutIcon type="growth" />
              </div>
              <h3 className="text-2xl font-black text-slate-950">
                Business Value
              </h3>
              <p className="mt-4 text-base font-medium leading-8 text-slate-600">
                We believe our success is directly tied to our clients’ success,
                so every solution is designed to create real business value.
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="about-card overflow-hidden rounded-[40px] border border-white bg-white/80 p-4 shadow-[0_35px_110px_rgba(59,21,120,0.12)] backdrop-blur-xl">
              <img
                src={aboutImages.office}
                alt="Modern software office"
                className="h-[420px] w-full rounded-[30px] object-cover"
              />
            </div>

            <div className="about-card rounded-[40px] border border-white bg-white/85 p-8 shadow-[0_30px_100px_rgba(163,17,128,0.10)] backdrop-blur-xl sm:p-10">
              <span className="mb-5 inline-flex rounded-full bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] px-5 py-2 text-sm font-black text-white">
                Our Working Philosophy
              </span>

              <h2 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
                Transparent, collaborative, and focused on your goals.
              </h2>

              <p className="mt-6 text-base font-medium leading-8 text-slate-600">
                We understand that software development can be complex and
                time-consuming. That is why we make the process as transparent,
                collaborative, and simple as possible for our clients.
              </p>

              <p className="mt-5 text-base font-medium leading-8 text-slate-600">
                We work closely with clients to understand their specific needs,
                tailor solutions accordingly, and exceed expectations through
                reliable delivery.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-gradient-to-r from-[#3b1578]/5 via-[#a31180]/5 to-[#d10c74]/5 px-5 py-4 text-sm font-black text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="value-area mt-20">
            <div className="mx-auto mb-12 max-w-4xl text-center">
              <h2 className="about-card text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
                What Makes Us{" "}
                <span className="bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] bg-clip-text text-transparent">
                  Different
                </span>
              </h2>

              <p className="about-card mx-auto mt-5 max-w-3xl text-base font-medium leading-8 text-slate-600">
                We combine technical expertise, ethical business practice,
                strong communication, and client-focused delivery.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {values.map((item, index) => (
                <div
                  key={index}
                  className="value-card group rounded-[34px] border border-white bg-white/85 p-7 shadow-[0_25px_80px_rgba(59,21,120,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_100px_rgba(163,17,128,0.16)]"
                >
                  <span className="text-5xl font-black text-slate-900/5 transition-all duration-300 group-hover:text-[#d10c74]/15">
                    {item.number}
                  </span>

                  <h3 className="mt-4 text-2xl font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="about-card mt-20 rounded-[40px] bg-slate-950 p-8 shadow-[0_35px_110px_rgba(59,21,120,0.20)] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <span className="text-sm font-black uppercase tracking-[0.25em] text-[#d10c74]">
                  Industries We Serve
                </span>

                <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                  Experienced across multiple business sectors.
                </h2>

                <p className="mt-5 text-base font-medium leading-8 text-white/65">
                  We work with clients from different industries and build
                  solutions that match their operations, customers, and goals.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {industries.map((item, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-black text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-[#3b1578] hover:via-[#a31180] hover:to-[#d10c74]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="about-card mt-10 overflow-hidden rounded-[40px] bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] p-[1px] shadow-[0_35px_110px_rgba(163,17,128,0.25)]">
            <div className="rounded-[39px] bg-white px-8 py-12 text-center sm:px-12">
              <h2 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Looking for a software partner committed to excellence?
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-8 text-slate-600">
                We are ready to help you plan, design, develop, launch, and
                support software solutions that grow with your business.
              </p>

              <button className="mt-8 rounded-full bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] px-9 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(163,17,128,0.30)] transition-all duration-300 hover:-translate-y-1">
                Let’s Build Together
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
