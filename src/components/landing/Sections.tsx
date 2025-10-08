"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function GetYourFit() {
  const router = useRouter();
  return (
    <div className="mb-4 p-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <h2 className="text-white text-8xl font-bold">Get Your Fit</h2>
          <h3 className="text-gray-300 text-3xl">
            Plan workout days,set goals, select exercises.
          </h3>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => router.push("/")}
            className="cursor-pointer transition-transform hover:scale-105"
          >
            <Image
              src={"/googleplay.png"}
              alt="playstore"
              width={200}
              height={0}
            />
          </button>
          <button
            onClick={() => router.push("/")}
            className="cursor-pointer transition-transform hover:scale-105"
          >
            <Image src={"/apple.png"} alt="playstore" width={200} height={0} />
          </button>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex gap-4 items-center justify-center">
          <div className="z-9999">
            <Image src={"/1.png"} alt="mockup" width={400} height={800} />
          </div>
          <div className="-ml-20 -mr-20 z-9998">
            <Image src={"/2.png"} alt="mockup" width={370} height={800} />
          </div>
          <div className="z-9997 -mr-20">
            <Image src={"/8.png"} alt="mockup1" width={340} height={800} />
          </div>
          <div className="z-9996 -mr-20">
            <Image src={"/6.png"} alt="mockup1" width={310} height={800} />
          </div>
          <div className="z-9995">
            <Image src={"/7.png"} alt="mockup1" width={280} height={800} />
          </div>
        </div>
        <div className="bg-accent rounded-[80px] p-8 h-150 overflow-hidden -mt-120"></div>
      </div>
    </div>
  );
}
