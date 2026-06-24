import React from "react";

const technologiesTop = [
  { name: "React", icon: "react", color: "#61DAFB" },
  { name: "Node.js", icon: "node", color: "#5FA04E" },
  { name: "Spring", icon: "spring", color: "#6DB33F" },
  { name: "Python", icon: "python", color: "#3776AB" },
  { name: "Django", icon: "django", color: "#092E20" },
  { name: "Bootstrap", icon: "bootstrap", color: "#7952B3" },
  { name: "Tailwind CSS", icon: "tailwind", color: "#38BDF8" },
  { name: "Java", icon: "java", color: "#E76F00" },
];

const technologiesBottom = [
  { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6" },
  { name: "Next.js", icon: "next", color: "#111111" },
  { name: "Express.js", icon: "express", color: "#222222" },
  { name: "MongoDB", icon: "mongodb", color: "#47A248" },
  { name: "MySQL", icon: "mysql", color: "#4479A1" },
  { name: "Firebase", icon: "firebase", color: "#FFCA28" },
  { name: "Laravel", icon: "laravel", color: "#FF2D20" },
];

const TechSvgIcon = ({ type, color }) => {
  const common = "h-10 w-10";

  if (type === "react") {
    return (
      <svg viewBox="0 0 80 80" className={common} fill="none">
        <circle cx="40" cy="40" r="6" fill={color} />
        <ellipse
          cx="40"
          cy="40"
          rx="30"
          ry="12"
          stroke={color}
          strokeWidth="4"
        />
        <ellipse
          cx="40"
          cy="40"
          rx="30"
          ry="12"
          stroke={color}
          strokeWidth="4"
          transform="rotate(60 40 40)"
        />
        <ellipse
          cx="40"
          cy="40"
          rx="30"
          ry="12"
          stroke={color}
          strokeWidth="4"
          transform="rotate(120 40 40)"
        />
      </svg>
    );
  }

  if (type === "node") {
    return (
      <svg viewBox="0 0 80 80" className={common} fill="none">
        <path
          d="M40 6L69 23V57L40 74L11 57V23L40 6Z"
          fill={color}
          opacity="0.15"
          stroke={color}
          strokeWidth="4"
        />
        <text
          x="40"
          y="49"
          textAnchor="middle"
          fontSize="26"
          fontWeight="900"
          fill={color}
        >
          N
        </text>
      </svg>
    );
  }

  if (type === "spring") {
    return (
      <svg viewBox="0 0 80 80" className={common} fill="none">
        <path
          d="M65 16C48 14 27 19 18 37C8 58 29 73 49 62C65 53 70 34 65 16Z"
          fill={color}
          opacity="0.18"
        />
        <path
          d="M61 18C45 25 32 34 22 51"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M24 50C35 50 45 47 55 39"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "python") {
    return (
      <svg viewBox="0 0 80 80" className={common} fill="none">
        <rect x="18" y="10" width="35" height="28" rx="8" fill={color} />
        <rect x="27" y="42" width="35" height="28" rx="8" fill="#FFD43B" />
        <circle cx="29" cy="22" r="3" fill="white" />
        <circle cx="51" cy="58" r="3" fill="white" />
      </svg>
    );
  }

  if (type === "django") {
    return (
      <svg viewBox="0 0 80 80" className={common} fill="none">
        <rect
          x="14"
          y="10"
          width="52"
          height="60"
          rx="16"
          fill={color}
          opacity="0.15"
        />
        <text
          x="40"
          y="53"
          textAnchor="middle"
          fontSize="36"
          fontWeight="900"
          fill={color}
        >
          d
        </text>
      </svg>
    );
  }

  if (type === "bootstrap") {
    return (
      <svg viewBox="0 0 80 80" className={common} fill="none">
        <rect x="12" y="12" width="56" height="56" rx="16" fill={color} />
        <text
          x="40"
          y="53"
          textAnchor="middle"
          fontSize="34"
          fontWeight="900"
          fill="white"
        >
          B
        </text>
      </svg>
    );
  }

  if (type === "tailwind") {
    return (
      <svg viewBox="0 0 80 80" className={common} fill="none">
        <path
          d="M20 36C26 24 34 20 44 26C50 30 54 31 60 26C54 38 46 42 36 36C30 32 26 31 20 36Z"
          fill={color}
        />
        <path
          d="M20 54C26 42 34 38 44 44C50 48 54 49 60 44C54 56 46 60 36 54C30 50 26 49 20 54Z"
          fill={color}
          opacity="0.75"
        />
      </svg>
    );
  }

  if (type === "java") {
    return (
      <svg viewBox="0 0 80 80" className={common} fill="none">
        <path
          d="M35 13C48 22 27 27 39 36"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M26 43H55C55 58 48 66 40 66C32 66 26 58 26 43Z"
          stroke={color}
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path d="M56 47H65C65 55 60 58 55 58" stroke={color} strokeWidth="4" />
      </svg>
    );
  }

  if (type === "javascript" || type === "typescript") {
    return (
      <svg viewBox="0 0 80 80" className={common} fill="none">
        <rect x="12" y="12" width="56" height="56" rx="10" fill={color} />
        <text
          x="40"
          y="52"
          textAnchor="middle"
          fontSize="24"
          fontWeight="900"
          fill={type === "javascript" ? "#111827" : "white"}
        >
          {type === "javascript" ? "JS" : "TS"}
        </text>
      </svg>
    );
  }

  if (type === "next") {
    return (
      <svg viewBox="0 0 80 80" className={common} fill="none">
        <circle cx="40" cy="40" r="30" fill={color} />
        <text
          x="40"
          y="51"
          textAnchor="middle"
          fontSize="32"
          fontWeight="900"
          fill="white"
        >
          N
        </text>
      </svg>
    );
  }

  if (type === "express") {
    return (
      <svg viewBox="0 0 80 80" className={common} fill="none">
        <rect
          x="10"
          y="16"
          width="60"
          height="48"
          rx="14"
          fill={color}
          opacity="0.12"
        />
        <text
          x="40"
          y="49"
          textAnchor="middle"
          fontSize="24"
          fontWeight="900"
          fill={color}
        >
          ex
        </text>
      </svg>
    );
  }

  if (type === "mongodb") {
    return (
      <svg viewBox="0 0 80 80" className={common} fill="none">
        <path
          d="M41 7C53 22 58 35 54 49C51 60 45 68 40 73C35 68 29 60 26 49C22 35 28 22 41 7Z"
          fill={color}
        />
        <path d="M40 24V72" stroke="white" strokeWidth="3" opacity="0.7" />
      </svg>
    );
  }

  if (type === "mysql") {
    return (
      <svg viewBox="0 0 80 80" className={common} fill="none">
        <ellipse cx="40" cy="20" rx="26" ry="10" fill={color} />
        <path
          d="M14 20V55C14 61 26 68 40 68C54 68 66 61 66 55V20"
          fill={color}
          opacity="0.2"
        />
        <path
          d="M14 20V55C14 61 26 68 40 68C54 68 66 61 66 55V20"
          stroke={color}
          strokeWidth="4"
        />
      </svg>
    );
  }

  if (type === "firebase") {
    return (
      <svg viewBox="0 0 80 80" className={common} fill="none">
        <path d="M18 62L30 15L42 39L51 24L64 62L40 73L18 62Z" fill={color} />
        <path d="M30 15L42 39L18 62L30 15Z" fill="#FFA000" opacity="0.9" />
      </svg>
    );
  }

  if (type === "laravel") {
    return (
      <svg viewBox="0 0 80 80" className={common} fill="none">
        <path
          d="M14 23L40 10L66 23V53L40 70L14 53V23Z"
          stroke={color}
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path d="M14 23L40 40L66 23" stroke={color} strokeWidth="5" />
        <path d="M40 40V70" stroke={color} strokeWidth="5" />
      </svg>
    );
  }

  return null;
};

const MarqueeRow = ({ items, direction = "left" }) => {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="group relative overflow-hidden py-4">
      <div
        className={`flex w-max gap-5 ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        } group-hover:[animation-play-state:paused]`}
      >
        {duplicatedItems.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex min-w-[215px] items-center gap-4 rounded-3xl border border-white bg-white/85 px-6 py-5 shadow-[0_18px_60px_rgba(59,21,120,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_80px_rgba(163,17,128,0.16)]"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3b1578]/10 via-[#a31180]/10 to-[#d10c74]/10">
              <TechSvgIcon type={tech.icon} color={tech.color} />
            </div>

            <div>
              <h3 className="text-lg font-black text-slate-900">{tech.name}</h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Technology
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TechnologyUsed = () => {
  return (
    <section className="relative overflow-hidden bg-primary-bg px-6 py-24 font-arimo sm:px-10 lg:px-20">
      <style>
        {`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .animate-marquee-left {
            animation: marquee-left 32s linear infinite;
          }

          .animate-marquee-right {
            animation: marquee-right 32s linear infinite;
          }
        `}
      </style>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="techGrid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M50 0H0V50"
                fill="none"
                stroke="#3b1578"
                strokeWidth="0.8"
                opacity="0.08"
              />
            </pattern>

            <linearGradient id="techGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b1578" />
              <stop offset="50%" stopColor="#a31180" />
              <stop offset="100%" stopColor="#d10c74" />
            </linearGradient>
          </defs>

          <rect width="1440" height="700" fill="url(#techGrid)" />

          <circle cx="130" cy="140" r="240" fill="#3b1578" opacity="0.12" />
          <circle cx="1280" cy="220" r="280" fill="#a31180" opacity="0.12" />
          <circle cx="700" cy="650" r="320" fill="#d10c74" opacity="0.1" />

          <path
            d="M-100 170C180 40 390 310 660 160C930 10 1130 290 1540 100"
            stroke="url(#techGradient)"
            strokeWidth="2"
            opacity="0.18"
          />

          <path
            d="M-100 560C180 430 440 650 710 520C980 390 1160 610 1540 460"
            stroke="url(#techGradient)"
            strokeWidth="2"
            opacity="0.14"
          />
        </svg>

        <div className="absolute -left-36 top-20 h-96 w-96 rounded-full bg-[#3b1578]/20 blur-3xl" />
        <div className="absolute -right-36 top-28 h-[420px] w-[420px] rounded-full bg-[#a31180]/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#d10c74]/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="mx-auto mb-5 inline-flex items-center gap-3 rounded-full border border-[#a31180]/15 bg-white/80 px-5 py-2 shadow-sm backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-[#d10c74]" />
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#3b1578]">
              Our Tech Stack
            </span>
          </div>

          <h2 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] bg-clip-text text-transparent">
              Technology
            </span>{" "}
            We Used
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
            We use modern, reliable, and scalable technologies to build powerful
            web, mobile, cloud, and enterprise software solutions.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[40px] border border-white bg-white/45 py-8 shadow-[0_35px_110px_rgba(59,21,120,0.10)] backdrop-blur-xl">
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#fffef9] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#fffef9] to-transparent" />

          <MarqueeRow items={technologiesTop} direction="left" />
          <MarqueeRow items={technologiesBottom} direction="right" />
        </div>
      </div>
    </section>
  );
};

export default TechnologyUsed;
