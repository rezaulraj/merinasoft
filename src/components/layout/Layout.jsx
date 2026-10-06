import React from "react";
import Header from "../common/Header";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";

// Site-wide background: same cream base, brand glows and grid as the home hero
const SiteBackground = () => (
  <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[#3b1578] opacity-[0.10] blur-[120px] animate-blob motion-reduce:animate-none" />
    <div className="absolute right-[-8rem] top-1/4 h-[26rem] w-[26rem] rounded-full bg-[#a31180] opacity-[0.10] blur-[120px] animate-blob [animation-delay:-5s] motion-reduce:animate-none" />
    <div className="absolute bottom-[-10rem] left-1/3 h-[24rem] w-[24rem] rounded-full bg-[#d10c74] opacity-[0.08] blur-[120px] animate-blob [animation-delay:-10s] motion-reduce:animate-none" />
    <div
      className="absolute inset-0 opacity-60"
      style={{
        backgroundImage:
          "linear-gradient(rgba(59,21,120,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,21,120,0.05) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 85%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 85%)",
      }}
    />
  </div>
);

const Layout = () => {
  useSmoothScroll();

  return (
    <div className="relative isolate min-h-screen bg-(--color-primary-bg) font-(--font-arimo)">
      <SiteBackground />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
