import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".who-badge",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        ".who-title",
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );

      gsap.fromTo(
        ".who-subtitle",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 68%",
          },
        },
      );

      gsap.fromTo(
        ".who-main-card",
        { x: -70, opacity: 0, scale: 0.96 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".who-content",
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        ".who-info-card",
        { x: 70, opacity: 0, scale: 0.96 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".who-content",
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        ".who-stat",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".who-stats",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".who-chip",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".who-industries",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".who-bottom",
        { y: 50, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".who-bottom",
            start: "top 85%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-primary-bg px-6 py-20 font-arimo sm:px-10 lg:px-20"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="who-title text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            WHO WE{" "}
            <span className="bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] bg-clip-text text-transparent">
              ARE?
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74]" />

          <p className="who-subtitle mx-auto mt-6 max-w-3xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
            We create modern, efficient, and scalable IT solutions that help
            businesses grow faster and operate smarter.
          </p>
        </div>

        <div className="who-content grid items-center gap-10 lg:grid-cols-2">
          <div className="who-main-card relative overflow-hidden rounded-[34px] border border-white bg-white p-8 shadow-[0_30px_90px_rgba(59,21,120,0.12)] sm:p-10">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-gradient-to-br from-[#3b1578] via-[#a31180] to-[#d10c74]" />

            <div className="relative z-10">
              <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#3b1578] via-[#a31180] to-[#d10c74] text-2xl font-extrabold text-white shadow-xl">
                2018
              </div>

              <h3 className="mb-5 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
                Leading Software Development Company in Bangladesh
              </h3>

              <p className="mb-5 text-base leading-8 text-slate-600">
                MerinaSoft is a leading software development company in
                Bangladesh since 2018, dedicated to transforming your business
                with efficient and modern IT solutions.
              </p>

              <p className="text-base leading-8 text-slate-600">
                Our team of skilled developers creates custom software
                applications that streamline your operations, boost efficiency,
                and drive growth.
              </p>

              <div className="who-stats mt-9 grid gap-4 sm:grid-cols-3">
                <div className="who-stat rounded-3xl bg-[#3b1578]/5 p-5 text-center">
                  <h4 className="text-3xl font-extrabold text-[#3b1578]">6+</h4>
                  <p className="mt-1 text-sm font-semibold text-slate-600">
                    Years Experience
                  </p>
                </div>

                <div className="who-stat rounded-3xl bg-[#a31180]/5 p-5 text-center">
                  <h4 className="text-3xl font-extrabold text-[#a31180]">5+</h4>
                  <p className="mt-1 text-sm font-semibold text-slate-600">
                    Business Sectors
                  </p>
                </div>

                <div className="who-stat rounded-3xl bg-[#d10c74]/5 p-5 text-center">
                  <h4 className="text-3xl font-extrabold text-[#d10c74]">
                    100%
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-slate-600">
                    Custom Solution
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="who-info-card rounded-[30px] border border-white bg-white/90 p-7 shadow-[0_20px_70px_rgba(59,21,120,0.08)] backdrop-blur-md">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3b1578] text-xl font-extrabold text-white">
                01
              </div>

              <h3 className="mb-3 text-2xl font-bold text-slate-900">
                Started with Mobile App Solutions
              </h3>

              <p className="text-base leading-8 text-slate-600">
                In 2018, the company started as a mobile application development
                solutions provider to the local market.
              </p>
            </div>

            <div className="who-info-card rounded-[30px] border border-white bg-white/90 p-7 shadow-[0_20px_70px_rgba(163,17,128,0.08)] backdrop-blur-md">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#a31180] text-xl font-extrabold text-white">
                02
              </div>

              <h3 className="mb-3 text-2xl font-bold text-slate-900">
                Modern IT Solutions for Growth
              </h3>

              <p className="text-base leading-8 text-slate-600">
                Now, MerinaSoft continues to serve businesses with innovative
                solutions that help them stay ahead of the curve.
              </p>
            </div>

            <div className="who-info-card who-industries rounded-[30px] border border-white bg-white/90 p-7 shadow-[0_20px_70px_rgba(209,12,116,0.08)] backdrop-blur-md">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d10c74] text-xl font-extrabold text-white">
                03
              </div>

              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                Industries We Serve
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "Healthcare",
                  "Education",
                  "Retail",
                  "Banking",
                  "Corporate",
                  "E-commerce",
                ].map((item, index) => (
                  <span
                    key={index}
                    className="who-chip rounded-full border border-[#a31180]/10 bg-gradient-to-r from-[#3b1578]/5 via-[#a31180]/5 to-[#d10c74]/5 px-5 py-2 text-sm font-bold text-slate-700 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-[#3b1578] hover:via-[#a31180] hover:to-[#d10c74] hover:text-white hover:shadow-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="who-bottom mt-14 overflow-hidden rounded-[34px] bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] px-8 py-10 text-center shadow-[0_30px_90px_rgba(163,17,128,0.25)] sm:px-12">
          <h3 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
            MerinaSoft — Transforming Ideas into Powerful Digital Solutions
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-8 text-white/85">
            From mobile apps to enterprise software, we create technology that
            simplifies business, improves productivity, and supports long-term
            growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
