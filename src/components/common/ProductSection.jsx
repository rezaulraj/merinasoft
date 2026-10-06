import { useLayoutEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaTshirt,
  FaStore,
  FaPrescriptionBottleAlt,
  FaIndustry,
  FaBath,
  FaShoppingCart,
  FaGraduationCap,
} from "react-icons/fa";
import { ArrowRight, ArrowUpRight, Check, MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SCAN = "#f062c0";

const unsplash = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

const products = [
  {
    id: 1,
    name: "Clothing POS",
    category: "Point of Sale",
    price: 15000,
    icon: FaTshirt,
    to: "/clothing-point-of-sale",
    image: unsplash("1441986300917-64674bd600d8"),
    description: "Complete POS solution for fashion, clothing and apparel businesses.",
    features: ["Inventory Management", "Sales & Purchase", "Customer Management"],
  },
  {
    id: 2,
    name: "Supershop POS",
    category: "Point of Sale",
    price: 15000,
    icon: FaStore,
    to: "/supershop-point-of-sale",
    image: unsplash("1604719312566-8912e9227c6a"),
    description: "Smart and powerful POS software designed for supermarkets and supershops.",
    features: ["Barcode Support", "Stock Management", "Sales Reports"],
  },
  {
    id: 3,
    name: "Pharmacy POS",
    category: "Point of Sale",
    price: 15000,
    icon: FaPrescriptionBottleAlt,
    to: "/pharmacy-point-of-sale",
    image: unsplash("1587854692152-cbe660dbde88"),
    description: "Easy-to-use pharmacy POS for medicine sales and stock management.",
    features: ["Medicine Inventory", "Expiry Tracking", "Sales Management"],
  },
  {
    id: 4,
    name: "Cement POS",
    category: "Point of Sale",
    price: 15000,
    icon: FaIndustry,
    to: "/cement-point-of-sale",
    image: unsplash("1504307651254-35680f356dfd"),
    description: "Manage cement, building materials, suppliers and daily sales easily.",
    features: ["Product Inventory", "Supplier Management", "Sales & Due Tracking"],
  },
  {
    id: 5,
    name: "Sanitary POS",
    category: "Point of Sale",
    price: 15000,
    icon: FaBath,
    to: "/sanitary-point-of-sale",
    image: unsplash("1584622650111-993a426fbf0a"),
    description: "Modern POS solution for sanitary, tiles and bathroom product businesses.",
    features: ["Stock Management", "Customer Accounts", "Invoice & Reports"],
  },
  {
    id: 6,
    name: "E-Commerce",
    category: "Online Business",
    price: 20000,
    icon: FaShoppingCart,
    to: "/e-commerce",
    image: unsplash("1556742049-0cfed4f6a45d"),
    description: "Launch your professional online store with a modern e-commerce solution.",
    features: ["Online Store", "Order Management", "Payment Integration"],
  },
  {
    id: 7,
    name: "LMS",
    category: "Learning Management",
    price: 30000,
    icon: FaGraduationCap,
    to: "/lms",
    image: unsplash("1523240795612-9a054b0db644"),
    description: "Complete learning management system for courses, students and instructors.",
    features: ["Course Management", "Student Dashboard", "Online Learning"],
  },
];

const titleWords = [
  { word: "Ready-made" },
  { word: "software" },
  { word: "to" },
  { word: "grow", accent: true },
  { word: "your" },
  { word: "business." },
];

const brandGradient = "bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74]";
const textGradient = `${brandGradient} bg-clip-text text-transparent`;
const pad = (i) => String(i + 1).padStart(2, "0");
const formatPrice = (price) => new Intl.NumberFormat("en-BD").format(price);

const ProductPanel = ({ product, index, reduced, registerRef, total }) => {
  const imageLeft = index % 2 === 0;
  const Icon = product.icon;

  return (
    <section
      ref={registerRef}
      aria-label={product.name}
      style={{ zIndex: index + 1 }}
      className={`relative w-full ${reduced ? "py-16" : "h-svh min-h-[680px]"} ${
        index % 2 === 0 ? "bg-(--color-primary-bg)" : "bg-[#faf4fb]"
      } ${
        index > 0
          ? "rounded-t-[36px] shadow-[0_-40px_80px_-40px_rgba(59,21,120,0.4)]"
          : ""
      }`}
    >
      <div
        data-inner
        className={`flex items-center ${reduced ? "" : "h-full pb-14 pt-[100px]"}`}
      >
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:h-[min(68svh,620px)] lg:grid-cols-2 lg:gap-16">
            {/* ---------- Image with scan reveal ---------- */}
            <div
              className={`relative h-[28svh] min-h-[180px] w-full lg:h-full ${
                imageLeft ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <div className={`absolute -inset-3 rounded-[34px] ${brandGradient} opacity-20 blur-2xl`} />
              <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-[#1b0b3a] shadow-[0_40px_80px_-40px_rgba(59,21,120,0.65)]">
                {!reduced && (
                  <img
                    data-dim
                    src={product.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ filter: "grayscale(1) brightness(0.45) blur(5px)" }}
                  />
                )}
                <img
                  data-sharp
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#3b1578]/40 via-transparent to-[#d10c74]/20 mix-blend-multiply" />

                {!reduced && (
                  <>
                    <div
                      data-grid
                      className="pointer-events-none absolute inset-0"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(240,98,192,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(240,98,192,0.18) 1px, transparent 1px)",
                        backgroundSize: "36px 36px",
                      }}
                    />
                    <div
                      data-scan
                      className="pointer-events-none absolute inset-x-0 top-0 h-[2px]"
                      style={{
                        backgroundColor: SCAN,
                        boxShadow: `0 0 22px 6px ${SCAN}88, 0 -34px 60px 18px ${SCAN}22`,
                      }}
                    />
                    <div data-brackets className="pointer-events-none absolute inset-4">
                      <span className="absolute left-0 top-0 h-6 w-6 rounded-tl-md border-l-2 border-t-2 border-[#f062c0]/80" />
                      <span className="absolute right-0 top-0 h-6 w-6 rounded-tr-md border-r-2 border-t-2 border-[#f062c0]/80" />
                      <span className="absolute bottom-0 left-0 h-6 w-6 rounded-bl-md border-b-2 border-l-2 border-[#f062c0]/80" />
                      <span className="absolute bottom-0 right-0 h-6 w-6 rounded-br-md border-b-2 border-r-2 border-[#f062c0]/80" />
                    </div>
                  </>
                )}

                {/* Product badge */}
                <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/15 py-2 pl-2 pr-4 text-white backdrop-blur-md">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${brandGradient} text-lg`}>
                    <Icon />
                  </span>
                  <span className="text-sm font-semibold">{product.category}</span>
                </div>

                {/* Price sticker */}
                <div className={`absolute right-5 top-5 flex h-24 w-24 rotate-12 flex-col items-center justify-center rounded-full ${brandGradient} text-white shadow-[0_20px_40px_-10px_rgba(209,12,116,0.6)] ring-4 ring-white/70 sm:h-28 sm:w-28`}>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-white/80">Only</span>
                  <span className="text-lg font-semibold leading-tight sm:text-xl">৳{formatPrice(product.price)}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white/80">One-time</span>
                </div>
              </div>
            </div>

            {/* ---------- Copy ---------- */}
            <div className={`relative ${imageLeft ? "lg:order-2" : "lg:order-1"}`}>
              <span
                aria-hidden="true"
                className="sv-t pointer-events-none absolute -top-16 left-0 hidden select-none text-[clamp(120px,15vw,210px)] font-semibold leading-none text-[#3b1578]/[0.06] lg:block"
              >
                {pad(index)}
              </span>

              <span className="sv-t relative inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-[#a31180]">
                <Icon className="h-4 w-4" />
                Product {pad(index)} · {product.category}
              </span>

              <h3 className="sv-t relative mt-4 text-[clamp(30px,4vw,56px)] font-semibold leading-[1.06] tracking-[-0.03em] text-[#1b0b3a]">
                {product.name}
              </h3>
              <span className={`sv-t mt-5 block h-[3px] w-14 rounded-full ${brandGradient}`} />
              <p className="sv-t mt-5 max-w-md text-[15.5px] leading-relaxed text-[#1b0b3a]/70 sm:text-[17px]">
                {product.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {product.features.map((feature) => (
                  <li key={feature} className="sv-t flex items-center gap-3 text-[15px] font-semibold text-[#1b0b3a]">
                    <span className={`flex h-6 w-6 items-center justify-center rounded-full ${brandGradient} text-white`}>
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="sv-t mt-7 flex items-baseline gap-2">
                <span className={`text-3xl font-semibold ${textGradient}`}>৳{formatPrice(product.price)}</span>
                <span className="text-sm font-semibold text-gray-400">one-time payment</span>
              </div>

              <div className="sv-t mt-7 flex flex-wrap items-center gap-5">
                <Link
                  to={product.to}
                  className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full ${brandGradient} px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a31180]`}
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative">View Details & Buy</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#1b0b3a]"
                >
                  <MessageCircle className="h-5 w-5 text-[#a31180]" />
                  <span className="border-b-2 border-transparent pb-0.5 transition-colors duration-300 group-hover:border-[#d10c74]">
                    Request a Demo
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!reduced && (
        <>
          <div
            data-veil
            className="pointer-events-none absolute inset-0 rounded-t-[36px] bg-[#1b0b3a] opacity-0"
          />

          <div className="pointer-events-none absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3">
            <span className="text-[14px] font-bold tabular-nums text-[#1b0b3a]">{pad(index)}</span>
            <span className="flex gap-1.5">
              {Array.from({ length: total }, (_, i) => (
                <span
                  key={i}
                  className={`h-[3px] w-4 rounded-full sm:w-7 ${i <= index ? brandGradient : "bg-[#3b1578]/10"}`}
                />
              ))}
            </span>
            <span className="text-[14px] font-semibold tabular-nums text-[#1b0b3a]/40">{pad(total - 1)}</span>
          </div>
        </>
      )}
    </section>
  );
};

const ProductSection = () => {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const panelRefs = useRef([]);

  const reduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  // Heading: words rise in
  useLayoutEffect(() => {
    if (reduced) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: { trigger: headRef.current, start: "top 85%", once: true },
        })
        .from(".sv-word", {
          yPercent: 110,
          opacity: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power4.out",
        })
        .from(
          ".sv-sub",
          { y: 20, opacity: 0, filter: "blur(8px)", duration: 0.8, ease: "power3.out" },
          "-=0.5",
        );
    }, headRef);
    return () => ctx.revert();
  }, [reduced]);

  // Stacked, pinned panels with scan-line image reveal
  useLayoutEffect(() => {
    if (reduced) return;

    const panels = panelRefs.current.filter(Boolean);
    const n = panels.length;
    if (!n) return;

    const ctx = gsap.context(() => {
      const last = panels[n - 1];

      panels.slice(0, n - 1).forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          endTrigger: last,
          end: "top top",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        });
      });

      panels.forEach((panel, i) => {
        const sharp = panel.querySelector("[data-sharp]");
        const dim = panel.querySelector("[data-dim]");
        const scan = panel.querySelector("[data-scan]");
        const grid = panel.querySelector("[data-grid]");
        const brackets = panel.querySelector("[data-brackets]");
        const texts = panel.querySelectorAll(".sv-t");
        const state = { v: 0 };

        const render = () => {
          const v = state.v;
          sharp.style.clipPath = `inset(0% 0% ${(1 - v) * 100}% 0%)`;
          scan.style.top = `${v * 100}%`;
          scan.style.opacity = v > 0.001 && v < 0.999 ? "1" : "0";
          grid.style.opacity = `${1 - v}`;
          brackets.style.opacity = `${1 - Math.min(1, Math.max(0, (v - 0.75) / 0.25))}`;
        };
        render();

        gsap
          .timeline({
            scrollTrigger: { trigger: panel, start: "top 85%", end: "top 25%", scrub: 0.5 },
          })
          .fromTo([sharp, dim], { scale: 1.15 }, { scale: 1, duration: 1, ease: "power1.out" }, 0)
          .to(state, { v: 1, duration: 0.75, ease: "power1.inOut", onUpdate: render }, 0)
          .fromTo(
            texts,
            { opacity: 0, y: 36 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power3.out" },
            0.3,
          );

        // Previous panel shrinks and darkens as the next one slides over it
        if (i < n - 1) {
          const inner = panel.querySelector("[data-inner]");
          const veil = panel.querySelector("[data-veil]");
          gsap.set(inner, { transformOrigin: "50% 0%" });

          gsap
            .timeline({
              defaults: { ease: "none" },
              scrollTrigger: { trigger: panels[i + 1], start: "top bottom", end: "top top", scrub: true },
            })
            .to(inner, { scale: 0.92, yPercent: -3 }, 0)
            .to(veil, { opacity: 0.4 }, 0);
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="products-heading"
      className="relative w-full overflow-x-clip bg-transparent font-arimo"
    >
      <div
        ref={headRef}
        className="relative mx-auto max-w-3xl px-4 pb-12 pt-20 text-center sm:px-6 sm:pb-16 sm:pt-24"
      >
        <div className="sv-sub mb-5 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-[#a31180]">
          <span className={`h-0.5 w-10 rounded-full ${brandGradient}`} />
          Our Products
          <span className={`h-0.5 w-10 rounded-full ${brandGradient}`} />
        </div>
        <h2
          id="products-heading"
          className="text-[clamp(32px,4.8vw,60px)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#1b0b3a]"
        >
          {titleWords.map(({ word, accent }, i) => (
            <span key={`${word}-${i}`} className="mr-[0.26em] inline-block overflow-hidden pb-1 align-bottom">
              <span className={`sv-word inline-block ${accent ? `${textGradient} italic` : ""}`}>{word}</span>
            </span>
          ))}
        </h2>
        <p className="sv-sub mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-[#1b0b3a]/70 sm:text-[17px]">
          Powerful and easy-to-use software solutions designed to simplify your
          business operations and help you grow faster — with a single one-time payment.
        </p>
      </div>

      <div className="relative">
        {products.map((product, index) => (
          <ProductPanel
            key={product.id}
            product={product}
            index={index}
            reduced={reduced}
            total={products.length}
            registerRef={(el) => {
              panelRefs.current[index] = el;
            }}
          />
        ))}
      </div>

      {/* Custom solution CTA */}
      <div className="relative z-20 bg-(--color-primary-bg) px-4 py-20">
        <Link
          to="/contact"
          className="group mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 rounded-[28px] bg-[#1b0b3a] px-8 py-8 text-white shadow-[0_30px_60px_-30px_rgba(59,21,120,0.7)] sm:flex-row sm:px-12"
        >
          <p className="text-center text-xl font-semibold sm:text-left sm:text-2xl">
            Need a customized solution?{" "}
            <span className="bg-gradient-to-r from-[#c9a6ff] via-[#f062c0] to-[#ff7ac0] bg-clip-text text-transparent">
              Let’s build it for you.
            </span>
          </p>
          <span className={`inline-flex shrink-0 items-center gap-2 rounded-full ${brandGradient} px-6 py-3.5 font-semibold`}>
            Contact Us
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default ProductSection;
