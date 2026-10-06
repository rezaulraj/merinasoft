import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiSpring,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiFirebase,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { Layers, Server, Database } from "lucide-react";
import logo from "/logo.png";

gsap.registerPlugin(ScrollTrigger);

// Each category is one orbit ring: radius in % of the orbit box, seconds per turn, direction
const categories = [
  {
    id: "data",
    label: "Database & Cloud",
    description: "Reliable storage and real-time cloud services.",
    icon: Database,
    radius: 19,
    duration: 40,
    reverse: false,
    techs: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    description: "Fast, beautiful interfaces for web and mobile.",
    icon: Layers,
    radius: 32,
    duration: 60,
    reverse: true,
    techs: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#111111" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description: "Secure, scalable APIs and business logic.",
    icon: Server,
    radius: 45,
    duration: 80,
    reverse: false,
    techs: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#222222" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "Java", icon: FaJava, color: "#E76F00" },
      { name: "Spring", icon: SiSpring, color: "#6DB33F" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    ],
  },
];

const totalTechs = categories.reduce((sum, c) => sum + c.techs.length, 0);

const brandGradient = "bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74]";
const textGradient = `${brandGradient} bg-clip-text text-transparent`;

const OrbitRing = ({ category, activeId }) => {
  const { radius, duration, reverse, techs } = category;
  const dimmed = activeId && activeId !== category.id;
  const highlighted = activeId === category.id;
  const spin = `techOrbit ${duration}s linear infinite${reverse ? " reverse" : ""}`;
  const counterSpin = `techOrbit ${duration}s linear infinite${reverse ? "" : " reverse"}`;

  return (
    <>
      {/* Ring track */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-500 ${
          highlighted
            ? "border-2 border-[#a31180]/50 shadow-[0_0_40px_rgba(163,17,128,0.25)]"
            : "border-dashed border-[#3b1578]/15"
        }`}
        style={{ width: `${radius * 2}%`, height: `${radius * 2}%` }}
      />

      {/* Rotating layer with logos */}
      <div className="orbit-spin absolute inset-0" style={{ animation: spin }}>
        {techs.map((tech, i) => {
          const angle = (i / techs.length) * Math.PI * 2 + radius; // offset rings so logos don't line up
          const Icon = tech.icon;
          return (
            <div
              key={tech.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${50 + radius * Math.cos(angle)}%`,
                top: `${50 + radius * Math.sin(angle)}%`,
              }}
            >
              <div className="orbit-spin" style={{ animation: counterSpin }}>
                <div
                  className={`group/logo relative transition-all duration-500 ${
                    dimmed ? "scale-75 opacity-25 grayscale" : "opacity-100"
                  } ${highlighted ? "scale-110" : ""}`}
                >
                  <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-2xl border border-[#3b1578]/10 bg-white shadow-[0_10px_25px_-10px_rgba(59,21,120,0.35)] transition-transform duration-300 hover:scale-125 sm:h-14 sm:w-14">
                    <Icon className="h-5 w-5 sm:h-7 sm:w-7" style={{ color: tech.color }} />
                  </div>
                  <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#1b0b3a] px-3 py-1 text-xs font-bold text-white opacity-0 transition-opacity duration-200 group-hover/logo:opacity-100">
                    {tech.name}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const TechnologyUsed = () => {
  const [activeId, setActiveId] = useState(null);
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".tech-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
      gsap.from(".tech-orbit", {
        scale: 0.6,
        rotate: -45,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-transparent py-24 font-arimo">
      <div className="container mx-auto grid items-center gap-16 px-4 lg:grid-cols-[1fr_1.1fr]">
        {/* ---------- Copy + category selector ---------- */}
        <div>
          <div className="tech-reveal inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-[#a31180]">
            <span className={`h-0.5 w-10 rounded-full ${brandGradient}`} />
            Technology Stack
          </div>
          <h2 className="tech-reveal mt-5 text-4xl font-black leading-[1.1] tracking-tight text-[#1b0b3a] sm:text-5xl lg:text-6xl">
            Modern tools, <span className={`${textGradient} italic`}>powerful</span> results.
          </h2>
          <p className="tech-reveal mt-6 max-w-lg text-base leading-8 text-gray-600 sm:text-lg">
            We pick proven, modern technologies so your software is fast,
            secure and ready to grow — {totalTechs}+ tools across every layer of
            your product.
          </p>

          <div className="mt-10 space-y-3" onMouseLeave={() => setActiveId(null)}>
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeId === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onMouseEnter={() => setActiveId(category.id)}
                  onFocus={() => setActiveId(category.id)}
                  onClick={() => setActiveId(isActive ? null : category.id)}
                  aria-pressed={isActive}
                  className={`tech-reveal group flex w-full cursor-pointer items-center gap-4 rounded-3xl border p-4 text-left transition-all duration-300 sm:p-5 ${
                    isActive
                      ? "border-transparent bg-[#1b0b3a] text-white shadow-[0_25px_50px_-20px_rgba(59,21,120,0.6)]"
                      : "border-[#3b1578]/10 bg-white/60 text-[#1b0b3a] backdrop-blur hover:bg-white"
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
                      isActive ? `${brandGradient} text-white` : "bg-fuchsia-50 text-[#a31180]"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <span className="text-lg font-black">{category.label}</span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                          isActive ? "bg-white/15 text-white" : "bg-[#3b1578]/5 text-[#3b1578]"
                        }`}
                      >
                        {category.techs.length}
                      </span>
                    </span>
                    <span className={`mt-0.5 block truncate text-sm ${isActive ? "text-white/60" : "text-gray-500"}`}>
                      {category.description}
                    </span>
                  </span>
                  <span className="hidden -space-x-2 sm:flex">
                    {category.techs.slice(0, 4).map(({ name, icon: TIcon, color }) => (
                      <span
                        key={name}
                        className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-white shadow-sm"
                      >
                        <TIcon className="h-4 w-4" style={{ color }} />
                      </span>
                    ))}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ---------- Orbit ---------- */}
        <div className="tech-orbit relative mx-auto aspect-square w-full max-w-[600px]">
          <div className={`absolute inset-[18%] rounded-full ${brandGradient} opacity-15 blur-3xl`} />

          {categories.map((category) => (
            <OrbitRing key={category.id} category={category} activeId={activeId} />
          ))}

          {/* Core */}
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <span className="absolute h-24 w-24 animate-ping rounded-full bg-[#a31180]/15 [animation-duration:2.5s] motion-reduce:animate-none sm:h-28 sm:w-28" />
            <div className={`relative rounded-full ${brandGradient} p-[3px] shadow-[0_20px_50px_-10px_rgba(163,17,128,0.6)]`}>
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-(--color-primary-bg) sm:h-24 sm:w-24">
                <img src={logo} alt="MerinaSoft" className="h-12 w-12 object-contain sm:h-14 sm:w-14" />
              </div>
            </div>
          </div>

          {/* Corner stat */}
          <div className="absolute bottom-0 right-0 rounded-2xl border border-[#a31180]/10 bg-(--color-primary-bg)/90 px-5 py-3 shadow-[0_20px_40px_-15px_rgba(59,21,120,0.35)] backdrop-blur sm:bottom-6">
            <div className={`text-3xl font-black leading-none ${textGradient}`}>{totalTechs}+</div>
            <div className="mt-1 text-xs font-bold uppercase tracking-widest text-gray-400">Technologies</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes techOrbit { to { transform: rotate(360deg); } }
        .tech-orbit:hover .orbit-spin { animation-play-state: paused !important; }
        @media (prefers-reduced-motion: reduce) { .orbit-spin { animation: none !important; } }
      `}</style>
    </section>
  );
};

export default TechnologyUsed;
