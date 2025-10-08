import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white relative z-30 p-8 mb-4">
      <div className="mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#e0fe10]">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#e0fe10]">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#e0fe10]">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-use"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/delete-account"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Delete Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#e0fe10]">
              Download App
            </h3>
            <div className="space-y-4">
              <div className="flex flex-row items-center gap-8">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Image
                    src="/apple.png"
                    alt="App Store"
                    width={150}
                    height={40}
                  />
                </a>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Image
                    src="/googleplay.png"
                    alt="Google Play"
                    width={150}
                    height={40}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Bölüm */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <Image
                src="/yellowLogo.png"
                alt="JYM Fitness"
                width={60}
                height={60}
              />
              <div>
                <h3 className="text-xl font-bold">JYM Fitness</h3>
                <p className="text-sm text-gray-400">
                  Stay Strong, Achieve More
                </p>
              </div>
            </div>

            {/* Sosyal Medya */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#222222] rounded-full flex items-center justify-center hover:bg-[#e0fe10] transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-black" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#222222] rounded-full flex items-center justify-center hover:bg-[#e0fe10] transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-white group-hover:text-black" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#222222] rounded-full flex items-center justify-center hover:bg-[#e0fe10] transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-white group-hover:text-black" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#222222] rounded-full flex items-center justify-center hover:bg-[#e0fe10] transition-all duration-300 group"
              >
                <Youtube className="w-5 h-5 text-white group-hover:text-black" />
              </a>
            </div>

            {/* Telif Hakkı */}
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">
                © 2025 JYM Fitness. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
