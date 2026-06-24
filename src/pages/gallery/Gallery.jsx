import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpg";
import gallery3 from "../../assets/gallery3.jpg";
import gallery4 from "../../assets/gallery4.jpg";
import gallery5 from "../../assets/gallery5.jpg";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  {
    image: gallery1,
    title: "Creative Workspace",
    category: "Office",
    size: "lg:col-span-2 lg:row-span-2",
  },
  {
    image: gallery2,
    title: "Team Collaboration",
    category: "Team",
    size: "",
  },
  {
    image: gallery3,
    title: "Software Development",
    category: "Technology",
    size: "",
  },
  {
    image: gallery4,
    title: "Digital Innovation",
    category: "Innovation",
    size: "lg:col-span-2",
  },
  {
    image: gallery5,
    title: "Project Success",
    category: "Success",
    size: "",
  },
];

const GalleryBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 1050"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="galleryGrid"
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

          <linearGradient id="galleryGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b1578" />
            <stop offset="50%" stopColor="#a31180" />
            <stop offset="100%" stopColor="#d10c74" />
          </linearGradient>
        </defs>

        <rect width="1440" height="1050" fill="url(#galleryGrid)" />

        <circle cx="120" cy="190" r="260" fill="#3b1578" opacity="0.12" />
        <circle cx="1260" cy="240" r="290" fill="#a31180" opacity="0.12" />
        <circle cx="720" cy="950" r="350" fill="#d10c74" opacity="0.1" />

        <path
          className="gallery-wave"
          d="M-100 240C180 90 430 390 710 220C990 50 1120 350 1540 150"
          stroke="url(#galleryGradient)"
          strokeWidth="2"
          opacity="0.2"
        />

        <path
          className="gallery-wave"
          d="M-100 820C180 660 440 950 740 780C1040 610 1190 890 1540 690"
          stroke="url(#galleryGradient)"
          strokeWidth="2"
          opacity="0.14"
        />

        <text
          className="gallery-code"
          x="110"
          y="720"
          fill="#3b1578"
          opacity="0.1"
          fontSize="100"
          fontWeight="900"
        >
          {"</>"}
        </text>

        <text
          className="gallery-code"
          x="1180"
          y="480"
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

const Gallery = () => {
  const sectionRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gallery-reveal",
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
        ".gallery-card",
        { y: 70, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.95,
          stagger: 0.13,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gallery-grid",
            start: "top 78%",
          },
        },
      );

      gsap.to(".gallery-wave", {
        x: 35,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".gallery-code", {
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

  useEffect(() => {
    if (!selectedImage) return;

    gsap.fromTo(
      ".gallery-popup",
      { opacity: 0, scale: 0.9, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: "power3.out" },
    );
  }, [selectedImage]);

  return (
    <main
      ref={sectionRef}
      className="relative overflow-hidden bg-primary-bg px-6 py-24 font-arimo sm:px-10 lg:px-20"
    >
      <GalleryBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="gallery-reveal mx-auto mb-5 inline-flex items-center gap-3 rounded-full border border-[#a31180]/15 bg-white/80 px-5 py-2 shadow-sm backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-[#d10c74]" />
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#3b1578]">
              Our Gallery
            </span>
          </div>

          <h1 className="gallery-reveal text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-7xl">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] bg-clip-text text-transparent">
              Creative Moments
            </span>
          </h1>

          <p className="gallery-reveal mx-auto mt-6 max-w-3xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
            A visual showcase of our workspace, teamwork, innovation, and
            digital journey with MerinaSoft.
          </p>
        </div>

        <div className="gallery-grid grid auto-rows-[280px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item)}
              className={`gallery-card group relative cursor-pointer overflow-hidden rounded-[34px] border border-white bg-white/80 p-3 shadow-[0_25px_80px_rgba(59,21,120,0.10)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_110px_rgba(163,17,128,0.20)] ${item.size}`}
            >
              <div className="relative h-full overflow-hidden rounded-[26px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent opacity-80 transition-all duration-500 group-hover:opacity-95" />

                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#3b1578] shadow-lg backdrop-blur-md">
                  {item.category}
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-2xl font-black leading-tight text-white drop-shadow-xl">
                    {item.title}
                  </h3>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-semibold text-white/75">
                      Click to Preview
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl font-black text-[#3b1578] shadow-lg transition-all duration-300 group-hover:rotate-45 group-hover:bg-gradient-to-r group-hover:from-[#3b1578] group-hover:via-[#a31180] group-hover:to-[#d10c74] group-hover:text-white">
                      +
                    </span>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-1 w-0 bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-reveal mt-16 overflow-hidden rounded-[40px] bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] p-[1px] shadow-[0_35px_110px_rgba(163,17,128,0.25)]">
          <div className="rounded-[39px] bg-slate-950 px-8 py-12 text-center sm:px-12">
            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              Every project has a story. We build it beautifully.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-8 text-white/70">
              From planning to design, development, and delivery — our team
              works with passion to create meaningful digital experiences.
            </p>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/80 px-5 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="gallery-popup relative w-full max-w-5xl overflow-hidden rounded-[34px] border border-white/20 bg-white p-4 shadow-[0_35px_120px_rgba(0,0,0,0.45)]"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl font-black text-slate-950 shadow-xl transition-all duration-300 hover:bg-[#d10c74] hover:text-white"
            >
              ×
            </button>

            <div className="relative overflow-hidden rounded-[26px]">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[75vh] w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-8">
                <span className="mb-3 inline-flex rounded-full bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
                  {selectedImage.category}
                </span>

                <h3 className="text-3xl font-black text-white">
                  {selectedImage.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;
