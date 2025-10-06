import React from "react";
import Hero from "@/components/landing/Hero";
import Navigation from "@/components/landing/Navigation";
import {
  GetYourFit,
  WorkoutSpace,
  Typeface,
  Headlines,
  DreamSection,
  StatsGrid,
  Palette,
  TrackingSection,
  FinalCTA,
  Footer,
} from "@/components/landing/Sections";
import Pricing from "@/components/landing/Pricing";

export default function FitGuideLanding() {
  return (
    <div className="min-h-screen md:py-8 md:px-4 bg-black text-foreground">
      <div className="max-w-8xl mx-auto">
        <Navigation />
        <Hero />
        <GetYourFit />
        <Pricing />
        <WorkoutSpace />
        <Typeface />
        <Headlines />
        <DreamSection />
        <StatsGrid />
        <Palette />
        <TrackingSection />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}
