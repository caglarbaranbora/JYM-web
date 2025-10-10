"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 50;

      if (window.scrollY > heroHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Privacy & Policy", path: "/privacy-policy" },
    { label: "EULA", path: "/terms-of-use" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`bg-black rounded-full px-4 sm:px-6 py-3 hidden md:flex items-center justify-between mb-4 fixed top-4 left-1/2 -translate-x-1/2 z-[99999] transition-all duration-300 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{ width: "calc(100% - 2rem)", maxWidth: "1200px" }}
      >
        <button
          className="text-white text-sm lg:text-md hover:text-gray-300"
          onClick={() => router.push("/privacy-policy")}
        >
          Privacy & Policy
        </button>
        <button
          className="text-white text-sm lg:text-md hover:text-gray-300"
          onClick={() => router.push("/terms-of-use")}
        >
          EULA
        </button>
        <div
          className="transition-colors cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="/yellowLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="w-12 lg:w-16 xl:w-[70px] h-auto"
          />
        </div>

        <button
          className="text-white text-sm lg:text-md hover:text-gray-300"
          onClick={() => router.push("/about")}
        >
          About
        </button>
        <button
          className="text-white text-sm lg:text-md hover:text-gray-300"
          onClick={() => router.push("/contact")}
        >
          Contact
        </button>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`bg-black rounded-full px-4 py-3 flex md:hidden items-center justify-between mb-4 fixed top-4 left-1/2 -translate-x-1/2 z-[99999] transition-all duration-300 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{ width: "calc(100% - 2rem)", maxWidth: "500px" }}
      >
        <div
          className="transition-colors cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="/yellowLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="w-10 sm:w-12 h-auto"
          />
        </div>

        <button
          className="text-white p-2 hover:text-gray-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden fixed top-20 left-1/2 -translate-x-1/2 z-[99998] bg-black rounded-3xl p-6 shadow-xl transition-all duration-300 ${
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ width: "calc(100% - 2rem)", maxWidth: "500px" }}
        >
          <div className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="text-white text-left py-2 px-4 hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => {
                  router.push(item.path);
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
