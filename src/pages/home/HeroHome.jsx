import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.jpg";

const slides = [
  {
    image: slider1,
    title: "We Offer You",
    typeWords: [
      "Software Development",
      "Web Development",
      "Mobile App Development",
      "Custom Software",
      "UI/UX Design",
      "Business Automation",
    ],
    description:
      "Smart digital services to grow your business with modern technology.",
  },
  {
    image: slider2,
    title: "Your One-Stop Software Partner",
    lines: [
      "We provide complete end-to-end software products and services",
      "from design to development",
    ],
  },
  {
    image: slider3,
    title: "Powerful Software Solutions for Your Business",
    lines: ["MerinaSoft — Elevating Businesses", "Through Innovation"],
  },
];

const HeroHome = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [typeText, setTypeText] = useState("");

  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const textRefs = useRef([]);
  const arrowLeftRef = useRef(null);
  const arrowRightRef = useRef(null);

  const currentSlide = slides[activeSlide];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => clearInterval(autoSlide);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.12, opacity: 0.8 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        titleRef.current,
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.2,
        },
      );

      gsap.fromTo(
        textRefs.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.16,
          ease: "power3.out",
          delay: 0.45,
        },
      );

      gsap.fromTo(
        [arrowLeftRef.current, arrowRightRef.current],
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.7)",
          delay: 0.8,
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [activeSlide]);

  useEffect(() => {
    if (activeSlide !== 0) return;

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    const words = slides[0].typeWords;

    const type = () => {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        setTypeText(currentWord.substring(0, charIndex + 1));
        charIndex++;

        if (charIndex === currentWord.length) {
          isDeleting = true;
          timeout = setTimeout(type, 1200);
          return;
        }
      } else {
        setTypeText(currentWord.substring(0, charIndex - 1));
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }

      timeout = setTimeout(type, isDeleting ? 45 : 80);
    };

    type();

    return () => clearTimeout(timeout);
  }, [activeSlide]);

  return (
    <section
      ref={containerRef}
      className="relative mt-10 h-[70vh] w-full overflow-hidden bg-primary-bg font-arimo"
    >
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${currentSlide.image})`,
        }}
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/55" />

      <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 text-center sm:px-10 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <div
            ref={(el) => (textRefs.current[4] = el)}
            className="mx-auto mb-5 h-[3px] w-20 rounded-full bg-white"
          />

          <h1
            ref={titleRef}
            className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight text-white drop-shadow-2xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {currentSlide.title}
          </h1>

          {activeSlide === 0 ? (
            <>
              <h2
                ref={(el) => (textRefs.current[0] = el)}
                className="mx-auto mt-5 min-h-[48px] max-w-3xl text-2xl font-bold leading-tight text-white drop-shadow-xl sm:text-3xl md:text-4xl"
              >
                {typeText}
                <span className="ml-1 animate-pulse text-white">|</span>
              </h2>

              <p
                ref={(el) => (textRefs.current[1] = el)}
                className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-white/95 drop-shadow-lg sm:text-base md:text-lg"
              >
                {currentSlide.description}
              </p>
            </>
          ) : (
            <div className="mx-auto mt-6 max-w-4xl space-y-4">
              {currentSlide.lines.map((line, index) => (
                <p
                  key={index}
                  ref={(el) => (textRefs.current[index] = el)}
                  className={`mx-auto max-w-3xl font-semibold leading-relaxed text-white drop-shadow-xl ${
                    index === 0
                      ? "text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                      : "text-lg sm:text-xl md:text-2xl lg:text-3xl"
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        ref={arrowLeftRef}
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-3xl text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black sm:left-8"
      >
        ‹
      </button>

      <button
        ref={arrowRightRef}
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-3xl text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black sm:right-8"
      >
        ›
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "w-9 bg-white"
                : "w-2.5 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroHome;
