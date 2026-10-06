import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FaLaptopCode,
  FaMobileScreenButton,
  FaCloud,
  FaGlobe,
  FaCode,
  FaBullhorn,
} from "react-icons/fa6";
import {
  ArrowRight,
  ArrowDown,
  Gem,
  Eye,
  LifeBuoy,
  Handshake,
  HeartHandshake,
} from "lucide-react";
import { getLenis } from "../../hooks/useSmoothScroll";

gsap.registerPlugin(ScrollTrigger);

const yearsOfExperience = new Date().getFullYear() - 2018;

const unsplash = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

const services = [
  {
    id: "software",
    title: "Software Development",
    icon: FaLaptopCode,
    image: unsplash("1515879218367-8466d910aaa4"),
    description:
      "Software development solutions to drive your digital success. Unlock new possibilities for your business with MerinaSoft BD’s expert software consulting and development services.",
    tags: ["Consulting", "Business Software", "Automation"],
  },
  {
    id: "mobile",
    title: "Mobile Application",
    icon: FaMobileScreenButton,
    image: unsplash("1551650975-87deedd944c3"),
    description:
      "Crafting high-end mobile experiences with unmatched expertise. Since 2018, MerinaSoft BD creates native, cross-platform, and progressive mobile applications.",
    tags: ["Native", "Cross-platform", "PWA"],
  },
  {
    id: "cloud",
    title: "Cloud Application Development",
    icon: FaCloud,
    image: unsplash("1451187580459-43490279c0fa"),
    description:
      "Cloud application development services that help businesses build and run powerful cloud-based apps using modern cloud platforms and services.",
    tags: ["Cloud Apps", "Modern Platforms", "Scalable"],
  },
  {
    id: "web",
    title: "Web Development",
    icon: FaGlobe,
    image: unsplash("1498050108023-c5249f4df085"),
    description:
      "High-quality web design, web development, database integration, website maintenance, e-commerce solutions, and application development.",
    tags: ["Web Design", "E-commerce", "Maintenance"],
  },
  {
    id: "custom",
    title: "Custom Software Development",
    icon: FaCode,
    image: unsplash("1551434678-e076c223a692"),
    description: `Tailored to your business requirements. With ${yearsOfExperience}+ years of experience across 12+ industries, we provide powerful and reliable custom software solutions.`,
    tags: ["Tailored", "Reliable", "Scalable"],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    icon: FaBullhorn,
    image: unsplash("1460925895917-afdab827c52f"),
    description:
      "We help companies reach their target audience, improve brand awareness, and drive sales through SEO, social media marketing, content marketing, and email marketing.",
    tags: ["SEO", "Social Media", "Content & Email"],
  },
];

const reasons = [
  { icon: Gem, title: "Quality", text: "Carefully built software that is truly useful for your business." },
  { icon: Eye, title: "Transparency", text: "Clear communication and honest updates at every step." },
  { icon: LifeBuoy, title: "Support", text: "We stay with you after launch to keep everything running smoothly." },
];

const brandGradient = "bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74]";
const textGradient = `${brandGradient} bg-clip-text text-transparent`;
const pad = (i) => String(i + 1).padStart(2, "0");

const scrollToService = (id) => {
  const el = document.getElementById(`service-${id}`);
  if (!el) return;
  const lenis = getLenis();
  if (lenis) lenis.scrollTo(el, { offset: -120, duration: 1.4 });
  else el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Eyebrow = ({ children, center = false, light = false }) => (
  <div className={`inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] ${light ? "text-[#ff7ac0]" : "text-[#a31180]"}`}>
    <span className={`h-0.5 w-10 rounded-full ${brandGradient}`} />
    {children}
    {center && <span className={`h-0.5 w-10 rounded-full ${brandGradient}`} />}
  </div>
);

const Services = () => {
  const pageRef = useRef(null);
  const [active, setActive] = useState(0);
  const ActiveIcon = services[active].icon;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Hero
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .from(".sp-hero-line", { yPercent: 110, duration: 1.1, stagger: 0.1 })
          .from(".sp-hero-fade", { y: 30, opacity: 0, duration: 0.9, stagger: 0.08 }, 0.4);

        // Generic reveals
        gsap.utils.toArray(".sp-reveal").forEach((el) => {
          gsap.from(el, {
            y: 50,
            opacity: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          });
        });
      });

      // Track which service block is in view (drives the sticky image)
      gsap.utils.toArray(".sp-block").forEach((block, i) => {
        ScrollTrigger.create({
          trigger: block,
          start: "top 55%",
          end: "bottom 55%",
          onToggle: (self) => self.isActive && setActive(i),
        });
      });
    },
    { scope: pageRef },
  );

  return (
    <main ref={pageRef} className="relative bg-transparent font-arimo text-[#1b0b3a]">
      {/* ================= HERO ================= */}
      <section className="container mx-auto px-4 pb-16 pt-16 text-center sm:pt-24">
        <div className="sp-hero-fade">
          <Eyebrow center>What We Do</Eyebrow>
        </div>

        <h1 className="mx-auto mt-8 max-w-5xl text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[1.04] tracking-[-0.035em]">
          <span className="block overflow-hidden pb-[0.08em]">
            <span className="sp-hero-line block">Services that power</span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <span className="sp-hero-line block">
              your <span className={`${textGradient} italic`}>digital growth.</span>
            </span>
          </span>
        </h1>

        <p className="sp-hero-fade mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
          Choosing the right software partner is important. We provide reliable,
          modern and customer-focused digital solutions so you can grow your
          business with confidence and peace of mind.
        </p>

        {/* Quick navigation */}
        <div className="sp-hero-fade mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2">
          {services.map(({ id, title, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToService(id)}
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#3b1578]/15 bg-white/60 px-4 py-2.5 text-sm font-semibold text-[#3b1578] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-[#1b0b3a] hover:text-white"
            >
              <Icon className="text-[#a31180] transition-colors group-hover:text-[#ff7ac0]" />
              {title}
            </button>
          ))}
        </div>

        <div className="sp-hero-fade mt-14 flex justify-center">
          <span className="flex h-12 w-12 animate-bounce items-center justify-center rounded-full border border-[#3b1578]/15 text-[#a31180] [animation-duration:2s] motion-reduce:animate-none">
            <ArrowDown className="h-5 w-5" />
          </span>
        </div>
      </section>

      {/* ================= STICKY SHOWCASE ================= */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Sticky visual (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-28 h-[calc(100svh-9rem)] max-h-[720px]">
              <div className="relative h-full overflow-hidden rounded-[32px] bg-[#1b0b3a] shadow-[0_50px_100px_-40px_rgba(59,21,120,0.8)]">
                {services.map((s, i) => (
                  <img
                    key={s.id}
                    src={s.image}
                    alt={i === active ? s.title : ""}
                    aria-hidden={i !== active}
                    className="absolute inset-0 h-full w-full object-cover transition-[clip-path,transform,opacity] duration-[1100ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
                    style={{
                      clipPath: i === active ? "inset(0% 0% 0% 0%)" : i < active ? "inset(0% 0% 100% 0%)" : "inset(100% 0% 0% 0%)",
                      transform: i === active ? "scale(1)" : "scale(1.12)",
                      zIndex: i === active ? 2 : 1,
                    }}
                  />
                ))}
                <div className="absolute inset-0 z-[3] bg-gradient-to-t from-[#1b0b3a]/90 via-[#1b0b3a]/10 to-transparent" />
                <div className={`absolute inset-x-0 top-0 z-[3] h-1 ${brandGradient}`} />

                {/* Overlay info */}
                <div className="absolute inset-x-0 bottom-0 z-[4] flex items-end justify-between gap-6 p-8 text-white">
                  <div className="flex items-center gap-4">
                    <span key={active} className={`flex h-14 w-14 items-center justify-center rounded-2xl ${brandGradient} text-2xl shadow-lg shadow-fuchsia-500/40`} style={{ animation: "spIcon 0.6s cubic-bezier(0.34,1.56,0.64,1)" }}>
                      <ActiveIcon />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">Now viewing</div>
                      <div key={active} className="text-xl font-semibold" style={{ animation: "spFade 0.6s ease-out" }}>
                        {services[active].title}
                      </div>
                    </div>
                  </div>
                  <div className="text-right font-semibold tabular-nums">
                    <span className="text-5xl leading-none">{pad(active)}</span>
                    <span className="text-white/40"> / {pad(services.length - 1)}</span>
                  </div>
                </div>

                {/* Vertical progress */}
                <div className="absolute right-6 top-1/2 z-[4] flex -translate-y-1/2 flex-col gap-2">
                  {services.map((s, i) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => scrollToService(s.id)}
                      aria-label={`Go to ${s.title}`}
                      className={`w-1.5 cursor-pointer rounded-full transition-all duration-500 ${
                        i === active ? "h-10 bg-white" : "h-4 bg-white/30 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling content */}
          <div>
            {services.map((s, i) => {
              const Icon = s.icon;
              const isActive = i === active;
              return (
                <article
                  key={s.id}
                  id={`service-${s.id}`}
                  className="sp-block flex min-h-[70svh] flex-col justify-center py-12 lg:min-h-[85svh]"
                >
                  {/* Mobile image */}
                  <div className="mb-8 overflow-hidden rounded-[28px] shadow-[0_30px_60px_-30px_rgba(59,21,120,0.7)] lg:hidden">
                    <img src={s.image} alt={s.title} loading="lazy" className="h-60 w-full object-cover sm:h-80" />
                  </div>

                  <div className={`transition-opacity duration-700 ease-out ${isActive ? "lg:opacity-100" : "lg:opacity-30"}`}>
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl text-lg transition-all duration-500 ${
                          isActive ? `${brandGradient} text-white shadow-lg shadow-fuchsia-500/30` : "bg-fuchsia-50 text-[#a31180]"
                        }`}
                      >
                        <Icon />
                      </span>
                      <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#a31180]">
                        Service {pad(i)}
                      </span>
                    </div>

                    <h2 className="mt-6 text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.06] tracking-[-0.03em]">
                      {s.title}
                    </h2>
                    <span
                      className={`mt-6 block h-[3px] rounded-full ${brandGradient} transition-all duration-700 ease-out ${
                        isActive ? "w-24" : "w-10"
                      }`}
                    />
                    <p className="mt-6 max-w-lg text-base leading-8 text-gray-600 sm:text-lg">{s.description}</p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#a31180]/15 bg-white/70 px-4 py-1.5 text-xs font-bold text-[#a31180]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="group mt-9 inline-flex items-center gap-3 font-semibold text-[#1b0b3a]"
                    >
                      <span className="border-b-2 border-transparent pb-0.5 transition-colors duration-300 group-hover:border-[#d10c74]">
                        Discuss your project
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#3b1578]/20 transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-[#3b1578] group-hover:to-[#d10c74] group-hover:text-white">
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="sp-reveal">
              <Eyebrow>Why Choose MerinaSoft BD?</Eyebrow>
            </div>
            <h2 className="sp-reveal mt-5 text-[clamp(2rem,4.5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
              Perfect service, clear communication and{" "}
              <span className={`${textGradient} italic`}>customer satisfaction first.</span>
            </h2>
            <p className="sp-reveal mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              You may see the same services offered by many companies, but we
              focus on quality, transparency, support, and solutions that are
              truly useful for your business. Our priority is always client
              satisfaction.
            </p>
          </div>

          <div className="space-y-4">
            {reasons.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className="sp-reveal group flex items-center gap-5 rounded-3xl border border-[#3b1578]/10 bg-white/60 p-6 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:bg-white hover:shadow-[0_25px_50px_-25px_rgba(59,21,120,0.45)]"
              >
                <span className="text-sm font-semibold tabular-nums text-gray-300">{pad(i)}</span>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-fuchsia-50 text-[#a31180] transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-[#3b1578] group-hover:via-[#a31180] group-hover:to-[#d10c74] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">{text}</p>
                </div>
              </div>
            ))}
            <div className="sp-reveal flex items-center gap-4 rounded-3xl bg-[#1b0b3a] p-6 text-white">
              <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${brandGradient}`}>
                <HeartHandshake className="h-6 w-6" />
              </span>
              <p className="text-lg font-semibold">Client satisfaction is always our priority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PARTNERSHIP ================= */}
      <section className="container mx-auto px-4 pb-28">
        <div className="sp-reveal relative overflow-hidden rounded-[36px] bg-[#1b0b3a] px-8 py-14 text-white sm:px-14 lg:py-20">
          <div className={`pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full ${brandGradient} opacity-40 blur-3xl`} />
          <div className="pointer-events-none absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-[#d10c74] opacity-20 blur-3xl" />
          <Handshake className="pointer-events-none absolute -bottom-10 right-6 h-64 w-64 text-white/[0.04]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_auto]">
            <div>
              <Eyebrow light>Partnership Opportunity</Eyebrow>
              <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
                Want to join us as a{" "}
                <span className="bg-gradient-to-r from-[#c9a6ff] via-[#f062c0] to-[#ff7ac0] bg-clip-text text-transparent italic">
                  partner?
                </span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                MerinaSoft BD offers partnership opportunities to industries
                worldwide. Through partnership, both parties benefit through
                network, product, service, and solution growth.
              </p>
            </div>
            <Link
              to="/contact"
              className={`group relative inline-flex items-center gap-3 self-start overflow-hidden rounded-full ${brandGradient} px-8 py-4 text-lg font-semibold shadow-[0_20px_50px_-12px_#d10c74] transition-transform duration-300 hover:-translate-y-1 lg:self-center`}
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Contact Us</span>
              <ArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spFade { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: none } }
        @keyframes spIcon { from { transform: scale(0.4) rotate(-30deg) } to { transform: none } }
      `}</style>
    </main>
  );
};

export default Services;
