import React, { useEffect, useRef } from "react";
import logo from "/logo.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactDetails = [
  {
    title: "Office Address",
    value: "2nd Floor, A&A Tower, 173 Arambagh, Dhaka 1000",
    type: "location",
  },
  {
    title: "Office Phone",
    value: "+8801405700100",
    type: "phone",
  },
  {
    title: "HR Contact",
    value: "+8801704473813",
    type: "user",
  },
  {
    title: "Marketing & Sales",
    value: "+8801405700200",
    type: "sales",
  },
  {
    title: "Email Address",
    value: "merinasoftteam@gmail.com",
    type: "email",
  },
];

const Icon = ({ type }) => {
  const cls = "h-6 w-6";

  if (type === "location") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none">
        <path
          d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L9 10.6a16 16 0 0 0 4.4 4.4l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "user") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
        <path
          d="M4 21c1.5-4 4.2-6 8-6s6.5 2 8 6"
          stroke="currentColor"
          strokeWidth="2"
        />
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

const ContactBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="contactPageGrid"
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

          <linearGradient id="contactPageGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b1578" />
            <stop offset="50%" stopColor="#a31180" />
            <stop offset="100%" stopColor="#d10c74" />
          </linearGradient>
        </defs>

        <rect width="1440" height="1200" fill="url(#contactPageGrid)" />

        <circle cx="130" cy="190" r="280" fill="#3b1578" opacity="0.12" />
        <circle cx="1280" cy="280" r="310" fill="#a31180" opacity="0.12" />
        <circle cx="720" cy="1080" r="360" fill="#d10c74" opacity="0.1" />

        <path
          className="contact-wave"
          d="M-100 260C180 80 430 420 720 230C1010 40 1140 370 1540 150"
          stroke="url(#contactPageGradient)"
          strokeWidth="2"
          opacity="0.2"
        />

        <path
          className="contact-wave"
          d="M-100 860C190 690 440 980 740 800C1040 620 1190 900 1540 710"
          stroke="url(#contactPageGradient)"
          strokeWidth="2"
          opacity="0.14"
        />

        <text
          className="contact-code"
          x="100"
          y="690"
          fill="#3b1578"
          opacity="0.1"
          fontSize="100"
          fontWeight="900"
        >
          {"</>"}
        </text>

        <text
          className="contact-code"
          x="1180"
          y="500"
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

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-reveal",
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
        ".contact-card",
        { y: 70, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.95,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-card-area",
            start: "top 78%",
          },
        },
      );

      gsap.fromTo(
        ".map-box",
        { y: 70, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".map-box",
            start: "top 82%",
          },
        },
      );

      gsap.to(".contact-wave", {
        x: 35,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".contact-code", {
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
      <ContactBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="contact-reveal mx-auto mb-5 inline-flex items-center gap-3 rounded-full border border-[#a31180]/15 bg-white/80 px-5 py-2 shadow-sm backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-[#d10c74]" />
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#3b1578]">
              Contact MerinaSoft
            </span>
          </div>

          <h1 className="contact-reveal text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-7xl">
            Let’s Build Something{" "}
            <span className="bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>

          <p className="contact-reveal mx-auto mt-7 max-w-3xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
            Have a software idea, website project, mobile app, or digital
            solution in mind? Reach us quickly and our team will get back to you
            soon.
          </p>
        </div>

        {/* Main Contact Area */}
        <div className="contact-card-area grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Info */}
          <div className="contact-card rounded-[40px] border border-white bg-white/85 p-7 shadow-[0_35px_110px_rgba(59,21,120,0.10)] backdrop-blur-xl sm:p-9">
            <div className="mb-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white shadow-xl">
                  <img
                    src={logo}
                    alt="MerinaSoft"
                    className="h-11 w-11 object-contain"
                  />
                </div>

                <div>
                  <h2 className="text-3xl font-black text-slate-950">
                    MerinaSoft
                  </h2>
                  <p className="mt-1 text-sm font-bold uppercase tracking-[0.2em] text-[#a31180]">
                    Software Company
                  </p>
                </div>
              </div>

              <h3 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
                Contact with us easily.
              </h3>

              <p className="mt-5 text-base font-medium leading-8 text-slate-600">
                Visit our office or send your project requirements through the
                contact form. We are ready to help your business grow with
                modern IT solutions.
              </p>
            </div>

            <div className="space-y-4">
              {contactDetails.map((item, index) => (
                <div
                  key={index}
                  className="group flex gap-4 rounded-3xl border border-[#a31180]/10 bg-gradient-to-r from-[#3b1578]/5 via-[#a31180]/5 to-[#d10c74]/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3b1578] via-[#a31180] to-[#d10c74] text-white shadow-lg transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <Icon type={item.type} />
                  </div>

                  <div>
                    <h4 className="text-base font-black text-slate-950">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm font-semibold leading-6 text-slate-600">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="contact-card overflow-hidden">
            <div className="rounded-[39px] bg-white/95 p-7 backdrop-blur-xl sm:p-9">
              <div className="mb-8">
                <span className="mb-4 inline-flex rounded-full bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] px-5 py-2 text-sm font-black text-white">
                  Reach Us Quickly
                </span>

                <h3 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
                  Send your message
                </h3>

                <p className="mt-3 text-base font-medium leading-7 text-slate-600">
                  Fill out the form below and our team will contact you as soon
                  as possible.
                </p>
              </div>

              <form className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    className="h-14 rounded-2xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#a31180] focus:shadow-[0_0_0_4px_rgba(163,17,128,0.10)]"
                  />

                  <select className="h-14 rounded-2xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 outline-none transition-all duration-300 focus:border-[#a31180] focus:shadow-[0_0_0_4px_rgba(163,17,128,0.10)]">
                    <option>Bangladesh</option>
                    <option>India</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>United Arab Emirates</option>
                  </select>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="h-14 rounded-2xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#a31180] focus:shadow-[0_0_0_4px_rgba(163,17,128,0.10)]"
                  />

                  <input
                    type="text"
                    placeholder="Enter Your Phone Number"
                    className="h-14 rounded-2xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#a31180] focus:shadow-[0_0_0_4px_rgba(163,17,128,0.10)]"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <select className="h-14 rounded-2xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 outline-none transition-all duration-300 focus:border-[#a31180] focus:shadow-[0_0_0_4px_rgba(163,17,128,0.10)]">
                    <option>Select Service</option>
                    <option>Software Development</option>
                    <option>Custom Software Development</option>
                    <option>Web Development</option>
                    <option>Mobile Application</option>
                    <option>Digital Marketing</option>
                    <option>Cloud Application Development</option>
                  </select>

                  <select className="h-14 rounded-2xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 outline-none transition-all duration-300 focus:border-[#a31180] focus:shadow-[0_0_0_4px_rgba(163,17,128,0.10)]">
                    <option>Select Budget</option>
                    <option>Budget Friendly</option>
                    <option>Standard Project</option>
                    <option>Premium Solution</option>
                    <option>Enterprise Package</option>
                  </select>
                </div>

                <textarea
                  rows="6"
                  placeholder="Write Your Message"
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#a31180] focus:shadow-[0_0_0_4px_rgba(163,17,128,0.10)]"
                />

                <button
                  type="submit"
                  className="group relative h-14 w-full overflow-hidden rounded-2xl bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] text-sm font-black uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(163,17,128,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(163,17,128,0.40)]"
                >
                  <span className="relative z-10">Submit Message</span>
                  <span className="absolute inset-0 translate-x-[-100%] bg-white/20 transition-transform duration-500 group-hover:translate-x-[100%]" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-box mt-16 overflow-hidden rounded-[42px] border border-white bg-white/85 p-4 shadow-[0_35px_110px_rgba(59,21,120,0.12)] backdrop-blur-xl sm:p-6">
          <div className="mb-6 flex flex-col gap-4 px-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.25em] text-[#a31180]">
                Our Location
              </span>
              <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">
                Visit MerinaSoft Office
              </h2>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=A%26A%20Tower%20173%20Arambagh%20Dhaka%201000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(163,17,128,0.28)] transition-all duration-300 hover:-translate-y-1"
            >
              Open In Google Map
            </a>
          </div>

          <div className="relative overflow-hidden rounded-[34px]">
            <iframe
              title="MerinaSoft Office Location"
              src="https://www.google.com/maps?q=A%26A%20Tower%20173%20Arambagh%20Dhaka%201000&output=embed"
              className="h-[420px] w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
