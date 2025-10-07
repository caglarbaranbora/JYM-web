"use client";
import React from "react";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Pricing() {
  const router = useRouter();

  const plans = [
    {
      name: "Basic",
      price: "Free",
      subtitle: "Get started with essential features",
      features: [
        "Basic workout tracking",
        "Access to 50+ exercises",
        "Community support",
        "Progress statistics",
        "3 workout plans",
      ],
    },
    {
      name: "Calorie AI+",
      price: "$2.99",
      subtitle: "Unlock Calorie AI+",
      featured: true,
      main: "Everything in Basic, plus:",
      features: [
        "No Ads - Uninterrupted experience",
        "Calorie AI - Smart meal tracking",
        "Access to 800+ exercises",
        "Unlimited workout plans",
        "Advanced analytics",
        "Barcode nutrition scanner",
      ],
    },
    {
      name: "Calorie AI+ Annualy",
      price: "$35",
      subtitle: "Unlock Calorie AI+ Annualy",
      main: "Everything in Premium, plus:",
      features: ["24/7 Premium support"],
    },
  ];

  return (
    <div className="relative p-8 mb-4 overflow-hidden">
      <h1 className="absolute left-8 text-white text-[400px] font-black leading-none opacity-40 select-none z-0 text-left">
        Pricing
      </h1>
      {/* Kartlar */}
      <div className="relative z-10 flex justify-end">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 transition-all duration-300 hover:scale-105 cursor-pointer ${
                plan.featured
                  ? "bg-black border-2 border-[#e0fe10] relative"
                  : "bg-black border border-gray-800"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#e0fe10] text-black px-6 py-1 rounded-full text-xs font-bold">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl font-black text-white">
                    {plan.price}
                  </span>
                  {plan.price !== "Free" && plan.name !== "Calorie AI+" && (
                    <span className="text-gray-400 text-lg">/year</span>
                  )}
                  {plan.name === "Calorie AI+" && (
                    <span className="text-gray-400 text-lg">/month</span>
                  )}
                </div>
                <p className="text-gray-300 text-sm">{plan.subtitle}</p>
              </div>

              <button
                className={`w-full py-4 rounded-full font-bold mb-8 transition-all hover:scale-105 ${
                  plan.featured
                    ? "bg-[#e0fe10] text-black"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
                onClick={() => router.push("")}
              >
                Get Started
              </button>

              <div className="space-y-4">
                {plan.main && (
                  <div className="text-gray-400 text-sm mb-2">{plan.main}</div>
                )}
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div
                      className={`rounded-full p-1 flex-shrink-0 ${
                        plan.featured ? "bg-[#e0fe10]" : "bg-indigo-600"
                      }`}
                    >
                      <Check className="w-3 h-3 text-black" />
                    </div>
                    <span
                      className={`text-sm ${
                        feature.includes("No Ads") ||
                        feature.includes("Calorie AI")
                          ? "text-[#e0fe10] font-semibold"
                          : "text-gray-300"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alt bilgi */}
      <div className="mt-16 text-center relative z-10">
        <p className="text-gray-500 text-sm">
          All plans include 7-day free trial • Cancel anytime • No hidden fees
        </p>
      </div>
    </div>
  );
}
