import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Phone, Mail } from "lucide-react";
import logo from "/logo.png";
import { getLenis } from "../../hooks/useSmoothScroll";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const brandGradient = "bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74]";

const Brand = ({ compact = false }) => (
  <Link to="/" className="group flex items-center gap-2.5 shrink-0" aria-label="MerinaSoft home">
    <div className="relative">
      <div
        className={`absolute inset-0 rounded-2xl ${brandGradient} opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-40`}
      />
      <img
        src={logo}
        alt="MerinaSoft Logo"
        className={`relative w-auto object-contain transition-transform duration-500 group-hover:scale-105 ${
          compact ? "h-10" : "h-11 sm:h-12"
        }`}
      />
    </div>
    <div className="flex flex-col leading-none">
      <span
        className={`font-black tracking-tight ${compact ? "text-2xl" : "text-2xl sm:text-[1.75rem]"}`}
      >
        <span className="text-[#3b1578]">Merina</span>
        <span className={`${brandGradient} bg-clip-text text-transparent`}>Soft</span>
      </span>
      <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-gray-400">
        Software Solutions
      </span>
    </div>
  </Link>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock page scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) getLenis()?.stop();
    else getLenis()?.start();
    return () => {
      document.body.style.overflow = "";
      getLenis()?.start();
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 font-arimo">
      {/* Brand gradient strip */}
      <div className={`h-1 w-full ${brandGradient}`} />

      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-(--color-primary-bg)/85 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(59,21,120,0.25)] border-b border-fuchsia-100/60"
            : "bg-(--color-primary-bg) border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? "h-16" : "h-20"
            }`}
          >
            <Brand />

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-1 rounded-full border border-[#3b1578]/10 bg-(--color-primary-bg) p-1.5 shadow-xs backdrop-blur">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `relative rounded-full px-4 py-2 text-[15px] font-semibold transition-all duration-300 ${
                      isActive
                        ? `${brandGradient} text-white shadow-md shadow-fuchsia-500/25`
                        : "text-gray-600 hover:text-[#a31180] hover:bg-fuchsia-50"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full ${brandGradient} px-6 py-3 text-sm font-bold text-white shadow-lg shadow-fuchsia-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-fuchsia-500/40`}
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Get Started</span>
                <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded-xl border border-fuchsia-100 bg-(--color-primary-bg) p-2.5 text-[#3b1578] shadow-xs transition-colors hover:bg-fuchsia-50 hover:text-[#a31180] cursor-pointer"
              aria-expanded={isOpen}
              aria-label="Open main menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#3b1578]/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-(--color-primary-bg) shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className={`h-1 w-full ${brandGradient}`} />
        <div className="flex h-full flex-col p-6">
          <div className="mb-8 flex items-center justify-between">
            <Brand compact />
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-xl p-2 text-gray-500 transition-colors hover:bg-fuchsia-50 hover:text-[#a31180] cursor-pointer"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-1.5">
            {navItems.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                style={{ transitionDelay: isOpen ? `${index * 40}ms` : "0ms" }}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-all duration-300 ${
                    isOpen ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                  } ${
                    isActive
                      ? `${brandGradient} text-white shadow-md shadow-fuchsia-500/25`
                      : "text-gray-700 hover:bg-fuchsia-50 hover:text-[#a31180]"
                  }`
                }
              >
                {item.label}
                <ArrowRight className="h-4 w-4 opacity-60" />
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto space-y-4 pb-4">
            <div className="space-y-2 rounded-2xl border border-fuchsia-100 bg-(--color-primary-bg) p-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#a31180]" />
                <span>Talk to our team</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#a31180]" />
                <span>We reply within 24 hours</span>
              </div>
            </div>
            <Link
              to="/contact"
              className={`flex w-full items-center justify-center gap-2 rounded-xl ${brandGradient} px-5 py-3.5 font-bold text-white shadow-lg shadow-fuchsia-500/30`}
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Header;
