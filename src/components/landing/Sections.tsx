"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function GetYourFit() {
  const router = useRouter();
  return (
    <div className="mb-4 p-4 sm:p-6 md:p-8">
      {/* Header Section - Responsive layout */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-6 gap-4">
        <div className="flex flex-col text-center lg:text-left">
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            Get Your Fit
          </h2>
          <h3 className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-2">
            Plan workout days, set goals, select exercises.
          </h3>
        </div>

        {/* App Store Buttons - Responsive */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
          <button
            onClick={() => router.push("/")}
            className="cursor-pointer transition-transform hover:scale-105"
          >
            <Image
              src={"/icons/googleplay.png"}
              alt="playstore"
              width={200}
              height={0}
              className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-[200px] h-auto"
            />
          </button>
          <button
            onClick={() => router.push("/")}
            className="cursor-pointer transition-transform hover:scale-105"
          >
            <Image
              src={"/icons/apple.png"}
              alt="appstore"
              width={200}
              height={0}
              className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-[200px] h-auto"
            />
          </button>
        </div>
      </div>

      {/* Images Section - Responsive */}
      <div className="flex-1">
        <div className="flex gap-2 sm:gap-3 md:gap-4 items-center justify-center">
          {/* Show fewer images on mobile */}
          <div className="z-[9999]">
            <Image
              src={"/images/1.png"}
              alt="mockup"
              width={400}
              height={800}
              className="w-28 sm:w-36 md:w-48 lg:w-64 xl:w-[400px] h-auto"
            />
          </div>
          <div className="-ml-8 sm:-ml-12 md:-ml-16 lg:-ml-20 -mr-8 sm:-mr-12 md:-mr-16 lg:-mr-20 z-[9998]">
            <Image
              src={"/images/2.png"}
              alt="mockup"
              width={370}
              height={800}
              className="w-24 sm:w-32 md:w-44 lg:w-60 xl:w-[370px] h-auto"
            />
          </div>
          <div className="z-[9997] -mr-8 sm:-mr-12 md:-mr-16 lg:-mr-20">
            <Image
              src={"/images/8.png"}
              alt="mockup1"
              width={340}
              height={800}
              className="w-20 sm:w-28 md:w-40 lg:w-56 xl:w-[340px] h-auto"
            />
          </div>
          <div className="hidden md:block z-[9996] -mr-8 md:-mr-16 lg:-mr-20">
            <Image
              src={"/images/6.png"}
              alt="mockup1"
              width={310}
              height={800}
              className="w-32 lg:w-52 xl:w-[310px] h-auto"
            />
          </div>
          <div className="hidden lg:block z-[9995]">
            <Image
              src={"/images/7.png"}
              alt="mockup1"
              width={280}
              height={800}
              className="w-48 xl:w-[280px] h-auto"
            />
          </div>
        </div>
        <div className="bg-accent rounded-[30px] sm:rounded-[40px] md:rounded-[60px] lg:rounded-[80px] p-4 sm:p-6 md:p-8 h-24 sm:h-32 md:h-40 lg:h-[150px] xl:h-[500px] overflow-hidden -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-[120px] xl:-mt-[400px]"></div>
      </div>
    </div>
  );
}
