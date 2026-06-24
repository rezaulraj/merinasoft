import React, { useState, useEffect } from "react";
import logo from "/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Services", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-(--color-primary-bg) font-(--font-arimo) border-b border-gray-100 shadow-xs transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <a
              href="/"
              className="flex items-center gap-1 tracking-tight hover:opacity-90 transition-opacity"
            >
              <img
                src={logo}
                alt="MerinaSoft Logo"
                className="h-14 sm:h-16 w-auto object-contain"
              />
              <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#3b1578] via-[#a31180] to-[#d10c74] bg-clip-text text-transparent drop-shadow-xs selection:bg-fuchsia-200">
                MerinaSoft
              </span>
            </a>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, index) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={index}
                  href={item.path}
                  className={`text-base font-semibold relative py-2 transition-colors duration-200 
                    ${
                      isActive
                        ? "text-[#a31180] after:w-full"
                        : "text-gray-600 hover:text-[#a31180] after:w-0 hover:after:w-full"
                    } 
                    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-[#3b1578] after:to-[#d10c74] after:transition-all after:duration-300`}
                >
                  {item.label}
                </a>
              );
            })}
            <button className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#3b1578] to-[#a31180] hover:from-[#4c1d95] hover:to-[#bd1e97] text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer">
              Get Started
            </button>
          </nav>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-[#a31180] hover:bg-fuchsia-50 focus:outline-none transition-colors duration-200 cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-7 w-7 transition-transform duration-300 ease-in-out"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-xs transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-72 max-w-sm bg-(--color-primary-bg) shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold bg-gradient-to-r from-[#3b1578] to-[#d10c74] bg-clip-text text-transparent">
              Menu
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col space-y-3">
            {navItems.map((item, index) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={index}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium p-2.5 rounded-xl transition-all duration-200 
                    ${
                      isActive
                        ? "text-[#a31180] bg-fuchsia-50/80 font-semibold shadow-xs border-l-4 border-[#a31180] pl-3"
                        : "text-gray-700 hover:text-[#a31180] hover:bg-fuchsia-50/50"
                    }`}
                >
                  {item.label}
                </a>
              );
            })}
            <hr className="border-gray-100 my-4" />
            <button className="w-full px-5 py-3 bg-gradient-to-r from-[#3b1578] to-[#a31180] text-white text-center font-semibold rounded-xl shadow-md">
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
