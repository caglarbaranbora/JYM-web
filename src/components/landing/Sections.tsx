"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function GetYourFit() {
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

export function Headlines() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="bg-yellow-400 rounded-3xl p-12 relative overflow-hidden">
        <div className="bg-black text-white px-4 py-2 rounded-full inline-block mb-4 text-sm">
          Funk Style
        </div>
        <h2 className="text-8xl font-black text-black mb-0 leading-none">
          Headli
        </h2>
      </div>
      <div className="bg-black rounded-3xl p-8">
        <div className="bg-gray-900 rounded-2xl p-6 mb-4">
          <div className="text-white text-sm mb-2">STYLE GUIDE &</div>
          <div className="text-white text-sm">COMPONENT LIBRARY</div>
        </div>
      </div>
      <div className="bg-indigo-600 rounded-3xl p-12">
        <div className="bg-black text-white px-4 py-2 rounded-full inline-block mb-4 text-sm">
          Silent Black
        </div>
        <p className="text-white">
          Incorporating bold, vibrant hues that evoke energy, paired with sleek
          dark tones for a modern look
        </p>
      </div>
    </div>
  );
}

export function DreamSection() {
  return (
    <div className="bg-black rounded-3xl p-12 mb-8 text-center">
      <h2 className="text-white text-4xl font-bold mb-4">
        Dream Bigger, Achieve Beyond
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Push past your limits and turn ambition into reality with every rep
      </p>
    </div>
  );
}

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-black rounded-3xl p-8 col-span-2">
        <div className="text-gray-400 text-sm mb-2">Over Worldwide</div>
        <div className="grid grid-cols-3 gap-4">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="w-12 h-12 border-2 border-gray-800 rounded-lg"
            ></div>
          ))}
        </div>
      </div>
      <div className="bg-black rounded-3xl p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl font-bold text-white mb-2">58</div>
          <div className="text-gray-400 text-sm">Over Countries</div>
        </div>
      </div>
      <div className="bg-black rounded-3xl p-8"></div>
      <div className="bg-yellow-400 rounded-3xl p-8 flex items-center justify-center">
        <div className="text-black text-center">
          <div className="text-sm mb-2">Over Our Users</div>
          <div className="text-2xl font-bold">Worldwide</div>
        </div>
      </div>
      <div className="bg-black rounded-3xl p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl font-bold text-white mb-2">127</div>
          <div className="text-gray-400 text-sm">Client Increase Level</div>
        </div>
      </div>
      <div className="bg-black rounded-3xl p-8"></div>
      <div className="bg-black rounded-3xl p-8 col-span-2"></div>
    </div>
  );
}

export function TrackingSection() {
  return (
    <div className="bg-black rounded-3xl p-12 mb-8">
      <h2 className="text-white text-4xl font-bold text-center mb-4">
        Tracking & Progress
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
        Monitor every milestone with precision and celebrate your growth
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-gray-900 rounded-2xl h-96 overflow-hidden">
            <div className="p-4">
              <div className="text-white text-xs mb-4">9:41</div>
              {i === 2 && (
                <div className="bg-indigo-600 rounded-xl p-6">
                  <div className="w-full h-32 bg-purple-500 rounded-lg mb-4"></div>
                </div>
              )}
              {i === 3 && (
                <div className="space-y-3">
                  <div className="bg-indigo-600 rounded-xl p-4">
                    <div className="text-white font-bold">WEEK 2</div>
                    <div className="text-gray-300 text-sm">
                      Building Strength
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-4">
                    <div className="text-white text-sm">Day 1</div>
                  </div>
                  <div className="bg-indigo-600 rounded-xl p-4">
                    <div className="text-white text-sm">Day 2</div>
                  </div>
                </div>
              )}
              {i === 4 && (
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">6</div>
                  <div className="text-gray-400 text-sm">DAYS STREAK</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="bg-gray-900 rounded-3xl p-12 text-center">
      <div className="text-gray-600 text-xs mb-4">LET'S WORK TOGETHER</div>
      <h2 className="text-white text-4xl font-bold mb-8">Start Your Project</h2>
    </div>
  );
}
