import React from "react";
import Hero from "@/components/landing/Hero";
import Navigation from "@/components/landing/Navigation";
import GetYourFit from "@/components/landing/Sections";
import Pricing from "@/components/landing/Pricing";
import CalorieAi from "@/components/landing/CalorieAi";
import Footer from "@/components/landing/Footer";
import Stats from "@/components/landing/Stats";
import Tracking from "@/components/landing/Tracking";

export default function RootPage() {
  return (
    <div className="min-h-screen py-0 px-0 sm:py-4 sm:px-2 md:py-8 md:px-4 bg-black text-foreground">
      <div className="max-w-8xl mx-auto">
        <Navigation />
        <Hero />
        <GetYourFit />
        <CalorieAi />
        <Pricing />
        <Stats />
        <Tracking />
        <Footer />
      </div>
    </div>
  );
}
