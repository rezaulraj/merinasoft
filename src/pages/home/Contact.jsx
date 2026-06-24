import React from "react";

const contactInfo = [
  {
    title: "Office Address",
    value: "2nd Floor, A&A Tower, 173 Arambagh, Dhaka 1000",
    icon: "location",
  },
  {
    title: "Office Phone",
    value: "+8801405700100",
    icon: "phone",
  },
  {
    title: "HR Contact",
    value: "+8801704473813",
    icon: "user",
  },
  {
    title: "Marketing & Sales",
    value: "+8801405700200",
    icon: "sales",
  },
  {
    title: "Email Address",
    value: "merinasoftteam@gmail.com",
    icon: "email",
  },
];

const Icon = ({ type }) => {
  const iconClass = "h-6 w-6";

  if (type === "location") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none">
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
      <svg className={iconClass} viewBox="0 0 24 24" fill="none">
        <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="2" />
        <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "user") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none">
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
    <svg className={iconClass} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 19V8m5 11V5m5 14v-8m5 8V3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

const Contact = () => {
  return (
    <section className="relative overflow-hidden bg-primary-bg px-6 py-24 font-arimo sm:px-10 lg:px-20">
      {/* Background SVG */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 850"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="contactGrid"
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

            <linearGradient id="contactGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b1578" />
              <stop offset="50%" stopColor="#a31180" />
              <stop offset="100%" stopColor="#d10c74" />
            </linearGradient>
          </defs>

          <rect width="1440" height="850" fill="url(#contactGrid)" />

          <circle cx="130" cy="180" r="250" fill="#3b1578" opacity="0.12" />
          <circle cx="1280" cy="230" r="280" fill="#a31180" opacity="0.12" />
          <circle cx="720" cy="780" r="330" fill="#d10c74" opacity="0.1" />

          <path
            d="M-100 250C190 95 390 390 670 220C950 50 1120 340 1540 160"
            stroke="url(#contactGradient)"
            strokeWidth="2"
            opacity="0.18"
          />

          <path
            d="M-100 705C180 560 420 810 720 660C1020 510 1180 750 1540 590"
            stroke="url(#contactGradient)"
            strokeWidth="2"
            opacity="0.14"
          />
        </svg>

        <div className="absolute -left-36 top-24 h-96 w-96 rounded-full bg-[#3b1578]/20 blur-3xl" />
        <div className="absolute -right-36 top-32 h-[420px] w-[420px] rounded-full bg-[#a31180]/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#d10c74]/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="mx-auto mb-5 inline-flex items-center gap-3 rounded-full border border-[#a31180]/15 bg-white/80 px-5 py-2 shadow-sm backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-[#d10c74]" />
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#3b1578]">
              Contact Us
            </span>
          </div>

          <h2 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Let’s Talk About Your{" "}
            <span className="bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] bg-clip-text text-transparent">
              Next Project
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
            It’s very easy to get in touch with us. Fill out the form or visit
            our office for a coffee and project discussion.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          {/* Left Contact Info */}
          <div className="rounded-[38px] border border-white bg-white/85 p-7 shadow-[0_35px_110px_rgba(59,21,120,0.10)] backdrop-blur-xl sm:p-9">
            <div className="mb-8">
              <span className="mb-4 inline-flex rounded-full bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] px-5 py-2 text-sm font-black text-white">
                Contact With Us
              </span>

              <h3 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
                We are ready to help your business grow.
              </h3>

              <p className="mt-5 text-base font-medium leading-8 text-slate-600">
                MerinaSoft provides modern software, web, mobile, cloud, and
                digital solutions for businesses.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group flex gap-4 rounded-3xl border border-[#a31180]/10 bg-gradient-to-r from-[#3b1578]/5 via-[#a31180]/5 to-[#d10c74]/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3b1578] via-[#a31180] to-[#d10c74] text-white shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Icon type={item.icon} />
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

          {/* Right Contact Form */}
          <div className="relative overflow-hidden">
            <div className="rounded-[37px] bg-white/95 p-7 backdrop-blur-xl sm:p-9">
              <div className="mb-8">
                <h3 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
                  Reach Us Quickly...
                </h3>

                <p className="mt-3 text-base font-medium leading-7 text-slate-600">
                  Share your requirements. Our team will contact you as soon as
                  possible.
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
                    <option>Select Price</option>
                    <option>Budget Friendly</option>
                    <option>Standard Project</option>
                    <option>Premium Solution</option>
                    <option>Enterprise Package</option>
                  </select>
                </div>

                <textarea
                  rows="6"
                  placeholder="Write Your Messages"
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#a31180] focus:shadow-[0_0_0_4px_rgba(163,17,128,0.10)]"
                />

                <button
                  type="submit"
                  className="group relative h-14 w-full overflow-hidden rounded-2xl bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] text-sm font-black uppercase tracking-wide text-white shadow-[0_18px_40px_rgba(163,17,128,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(163,17,128,0.40)]"
                >
                  <span className="relative z-10">Submit Message</span>
                  <span className="absolute inset-0 translate-x-[-100%] bg-white/20 transition-transform duration-500 group-hover:translate-x-[100%]" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
