import React from "react";
import logo from "/logo.png";

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M14 8.5V6.8c0-.8.5-1.3 1.4-1.3H17V2.3c-.8-.1-1.7-.2-2.5-.2-2.6 0-4.4 1.6-4.4 4.5v1.9H7.2V12h2.9v9.8H14V12h2.8l.5-3.5H14Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M6.5 8.8H3.2V21h3.3V8.8ZM4.9 3C3.8 3 3 3.8 3 4.8s.8 1.8 1.9 1.8 1.9-.8 1.9-1.8S5.9 3 4.9 3ZM21 14c0-3.2-1.7-5.4-4.6-5.4-1.8 0-2.9 1-3.4 1.9V8.8H9.7V21H13v-6.4c0-1.7.9-2.8 2.3-2.8 1.3 0 2.2.9 2.2 2.8V21H21v-7Z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.8 4 12 4 12 4s-3.8 0-6.7.2c-.4.1-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2.2 9 2.2 10.8v1.7c0 1.8.2 3.6.2 3.6s.2 1.5.8 2.1c.8.8 1.9.8 2.4.9 1.7.2 6.4.2 6.4.2s3.8 0 6.7-.2c.4-.1 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.8.2-3.6v-1.7c0-1.8-.2-3.6-.2-3.6ZM10.2 14.9V8.8l5.7 3.1-5.7 3Z" />
      </svg>
    ),
  },
];

const industries = [
  "Retail / Wholesale / Distribution",
  "E-commerce",
  "Travel, Hotel & Tourism",
  "Publishing",
  "Utility & Energy",
];

const services = [
  "Software Development",
  "Mobile Application",
  "Web Development Service",
  "Custom Software Development",
  "Digital Marketing",
  "Cloud Application Development",
];

const contacts = [
  "Mob: +8801405700100 (Office)",
  "Mob: +8801704473813 (HR)",
  "Mob: +8801686357311 (Marketing)",
  "merinasoftteam@gmail.com",
  "merinasof.official@gmail.com",
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#160b56] font-arimo text-white">
      <div className="relative z-10 mx-auto container px-4 py-14">
        {/* Top */}
        <div className="mb-14 flex flex-col gap-8 border-b border-white/10 pb-10 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Merinasoft"
                className="h-12 w-12 object-contain"
              />
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Merinasoft
              </h2>
            </div>

            <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-white/70 sm:text-base">
              Transforming ideas into powerful software, web, mobile, cloud, and
              digital solutions for modern businesses.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                aria-label={item.name}
                className="group flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-[#3b1578] hover:via-[#a31180] hover:to-[#d10c74] hover:shadow-xl"
              >
                <span className="transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Address */}
          <div>
            <h3 className="relative mb-6 inline-block text-xl font-black">
              Address
              <span className="absolute -bottom-2 left-0 h-1 w-12 rounded-full bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74]" />
            </h3>

            <p className="max-w-xs text-base font-medium leading-8 text-white/75">
              2nd Floor, A&amp;A Tower, 173 Arambagh, Dhaka 1000
            </p>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">
                Office Time
              </p>
              <p className="mt-2 text-base font-bold text-white">
                Sat - Thu, 10:00 AM - 7:00 PM
              </p>
            </div>
          </div>

          {/* Industry */}
          <div>
            <h3 className="relative mb-6 inline-block text-xl font-black">
              Top Industry
              <span className="absolute -bottom-2 left-0 h-1 w-12 rounded-full bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74]" />
            </h3>

            <ul className="space-y-3">
              {industries.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-2 text-base font-semibold text-white/75 transition-all duration-300 hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d10c74] opacity-70 transition-all duration-300 group-hover:w-4" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="relative mb-6 inline-block text-xl font-black">
              Top Services
              <span className="absolute -bottom-2 left-0 h-1 w-12 rounded-full bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74]" />
            </h3>

            <ul className="space-y-3">
              {services.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-2 text-base font-semibold text-white/75 transition-all duration-300 hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#a31180] opacity-70 transition-all duration-300 group-hover:w-4" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="relative mb-6 inline-block text-xl font-black">
              Get In Touch
              <span className="absolute -bottom-2 left-0 h-1 w-12 rounded-full bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74]" />
            </h3>

            <ul className="space-y-3">
              {contacts.map((item, index) => (
                <li
                  key={index}
                  className="text-base font-semibold leading-7 text-white/75 transition-all duration-300 hover:text-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-center text-sm font-semibold text-white/60 md:flex-row md:items-center md:justify-between md:text-left">
          <p>© {new Date().getFullYear()} Merinasoft. All Rights Reserved.</p>

          <div className="flex justify-center gap-5">
            <a
              href="#"
              className="transition-all duration-300 hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-white"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
