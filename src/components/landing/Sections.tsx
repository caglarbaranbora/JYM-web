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

export function WorkoutSpace() {
  return (
    <div className="mb-8">
      <div className="bg-black rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-white text-4xl font-bold">Workout</h2>
              <span className="text-yellow-400 text-4xl">✦</span>
              <h2 className="text-white text-4xl font-bold">Space</h2>
            </div>
            <p className="text-gray-400 mb-6">
              Choose between gym or home workouts—your space, your choice.
            </p>
            <button className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition-all hover:scale-105">
              <span>Get started now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900 rounded-2xl p-6 h-48">
              <div className="text-white font-bold">INFORMATION</div>
              <div className="text-gray-500 text-sm mt-2">Personal stats</div>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 h-48">
              <div className="text-white font-bold">Watch Your Progress</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Typeface() {
  return (
    <div className="bg-black rounded-3xl p-12 mb-8 text-center">
      <h2 className="text-white text-4xl font-bold mb-4">Typeface</h2>
      <p className="text-gray-400 mb-8">
        This font embodies strength and clarity, perfectly aligning with the
        fitness theme
      </p>
      <div className="flex justify-center gap-8">
        <button className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 cursor-pointer transition-all hover:scale-105">
          Aa | Satoshi
        </button>
        <button className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 cursor-pointer transition-all hover:scale-105">
          Aa | Cabinet
        </button>
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

export function Palette() {
  return (
    <div className="bg-black rounded-3xl p-12 mb-8">
      <div className="flex items-center gap-2 mb-8">
        <h2 className="text-white text-4xl font-bold">Palette</h2>
        <span className="text-white text-4xl">✦</span>
        <h2 className="text-white text-4xl font-bold">Panorama</h2>
      </div>
      <p className="text-gray-400 mb-8">
        A vibrant mix of bold purples, electric yellows, and deep
        blacks—designed to energize and inspire every workout
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-900 rounded-2xl p-6 h-32 flex items-center justify-center">
          <span className="text-white">0, 0, 0</span>
        </div>
        <div className="bg-yellow-400 rounded-2xl p-6 h-32 flex items-center justify-center">
          <span className="text-black">Yellow Pulse</span>
        </div>
        <div className="bg-gray-800 rounded-2xl p-6 h-32 flex items-center justify-center">
          <span className="text-white">Dark Storm</span>
        </div>
        <div className="bg-indigo-600 rounded-2xl p-6 h-32 flex items-center justify-center">
          <span className="text-white">Charcoal Black</span>
        </div>
      </div>
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

export function FinalCTA() {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-12 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <div className="bg-black rounded-2xl p-6 mb-4">
            <div className="text-white text-sm">GETTING YOUR BEST</div>
            <div className="text-white text-sm">WORKOUT PLAN</div>
          </div>
          <div className="bg-black rounded-2xl p-6">
            <div className="text-white">Tracking Your Goal</div>
          </div>
        </div>
        <div className="bg-indigo-600 rounded-3xl p-8">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-white text-4xl font-bold">Fit &</h2>
            <span className="text-yellow-400 text-4xl">⚡</span>
          </div>
          <h2 className="text-white text-4xl font-bold mb-6">Fuelled</h2>
          <p className="text-white mb-6 text-sm">
            Empower your fitness with data-driven plans and real-time progress
            tracking
          </p>
          <div className="flex gap-3">
            <button className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-900 flex items-center gap-2 cursor-pointer transition-all hover:scale-105">
              <span>All Workouts</span>
            </button>
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-full text-sm hover:bg-yellow-500 flex items-center gap-2 cursor-pointer transition-all hover:scale-105">
              <span>Get Started</span>
            </button>
          </div>
        </div>
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
