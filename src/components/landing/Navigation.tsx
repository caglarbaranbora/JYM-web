"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero section'ın yüksekliğini ayarlayın (örnek: 600px)
      // Veya hero section'a ref ile dinamik olarak alabilirsiniz
      const heroHeight = 50; // Bu değeri hero section'ınızın yüksekliğine göre ayarlayın

      if (window.scrollY > heroHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-black rounded-full px-6 py-3 flex items-center justify-between mb-4 fixed top-4 left-1/2 -translate-x-1/2 z-99999 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
      style={{ width: "calc(100% - 2rem)", maxWidth: "1200px" }}
    >
      <button
        className="text-white text-md hover:text-gray-300"
        onClick={() => router.push("/privacy-policy")}
      >
        Privacy & Policy
      </button>
      <button className="text-white text-md hover:text-gray-300">EULA</button>
      <div
        className="transition-colors cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image src="/yellowLogo.png" alt="logo" width={70} height={70} />
      </div>

      <button className="text-white text-md hover:text-gray-300">
        My process
      </button>
      <button className=" text-white text-md hover:text-gray-300">
        Contact
      </button>
    </nav>
  );
}
