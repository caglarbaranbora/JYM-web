import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white relative z-30 p-4 sm:p-6 md:p-8 mb-4">
      <div className="mx-auto">
        {/* Main Footer Content - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-[#e0fe10]">
              Company
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-[#e0fe10]">
              Support
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-[#e0fe10]">
              Legal
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-use"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/delete-account"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Delete Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-[#e0fe10]">
              Download App
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-8">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Image
                    src="/icons/apple.png"
                    alt="App Store"
                    width={150}
                    height={40}
                    className="w-32 sm:w-36 md:w-40 lg:w-[150px] h-auto"
                  />
                </a>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Image
                    src="/icons/googleplay.png"
                    alt="Google Play"
                    width={150}
                    height={40}
                    className="w-32 sm:w-36 md:w-40 lg:w-[150px] h-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Bölüm - Responsive */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Image
                src="/icons/yellowLogo.png"
                alt="JYM Fitness"
                width={60}
                height={60}
                className="w-12 sm:w-14 md:w-[60px] h-auto"
              />
              <div className="text-center md:text-left">
                <h3 className="text-lg sm:text-xl font-bold">JYM Fitness</h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  Stay Strong, Achieve More
                </p>
              </div>
            </div>

            {/* Telif Hakkı */}
            <div className="text-center md:text-right">
              <p className="text-xs sm:text-sm text-gray-400">
                © 2025 JYM Fitness. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
