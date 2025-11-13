"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

type HeroProps = {
  leftTitle?: string;
  primaryMockupSrc?: string;
  secondaryMockupSrc?: string;
  thirdMockupSrc?: string;
};

export default function Hero({
  leftTitle = "Stay\nStrong",
  primaryMockupSrc = "/images/4.png",
  secondaryMockupSrc = "/images/5.png",
  thirdMockupSrc = "/images/9.png",
}: HeroProps) {
  const [line1, line2] = leftTitle.split("\n");
  const router = useRouter();

  return (
    <div className="p-4 sm:p-6 md:p-8 mb-4 -mt-5 relative overflow-hidden rounded-[80px]">
      {/* Unicorn Studio Background */}

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center">
        {/* Text Section - Responsive font sizes */}
        <div className="flex flex-col mb-6 sm:mb-8 lg:mb-0 justify-center text-start lg:text-left w-full lg:w-auto">
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[180px] xl:text-[280px] font-black text-white mb-2 sm:mb-4 leading-[0.9]">
            {line1}
          </h1>
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[180px] xl:text-[280px] font-black text-white mb-2 sm:mb-4 leading-[0.9]">
            {line2}
          </h1>
          {/* App Store Buttons - Responsive */}
          <div className="flex items-center justify-start gap-2 sm:gap-3 md:gap-4">
            <Link
              href={"https://groups.google.com/g/jym-fitness-test"}
              className="cursor-pointer transition-transform hover:scale-105"
              target="blank"
            >
              <Image
                src={"/icons/googleplay.png"}
                alt="playstore"
                width={200}
                height={0}
                className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-[200px] h-auto bg-black p-2 rounded-lg"
              />
            </Link>
            <Link
              href={
                "https://apps.apple.com/tr/app/jym-fitness/id6753074763?l=tr"
              }
              className="cursor-pointer transition-transform hover:scale-105"
              target="blank"
            >
              <Image
                src={"/icons/apple.png"}
                alt="appstore"
                width={200}
                height={0}
                className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-[200px] h-auto"
              />
            </Link>
          </div>
        </div>

        {/* Images Section - Responsive layout */}
        <div className="flex gap-2 sm:gap-3 md:gap-4 items-center justify-center w-full lg:w-auto">
          {/* Hide third image on mobile */}
          <div className="hidden sm:block">
            <Image
              src={secondaryMockupSrc}
              alt="mockup"
              width={340}
              height={800}
              className="w-24 sm:w-32 md:w-40 lg:w-60 xl:w-[340px] h-auto"
            />
          </div>
          <div className="-ml-0 sm:-ml-8 md:-ml-12 lg:-ml-50 -mr-0 sm:-mr-8 md:-mr-12 lg:-mr-50">
            <Image
              src={primaryMockupSrc}
              alt="mockup"
              width={370}
              height={800}
              className="w-32 sm:w-40 md:w-48 lg:w-64 xl:w-[370px] h-auto"
            />
          </div>
          <div>
            <Image
              src={thirdMockupSrc}
              alt="mockup1"
              width={400}
              height={800}
              className="w-36 sm:w-44 md:w-52 lg:w-72 xl:w-[400px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
