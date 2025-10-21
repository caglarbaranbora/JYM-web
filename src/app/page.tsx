import Hero from "@/components/landing/Hero";
import Navigation from "@/components/landing/Navigation";
import GetYourFit from "@/components/landing/Sections";
import CalorieAi from "@/components/landing/CalorieAi";
import Footer from "@/components/landing/Footer";
import Stats from "@/components/landing/Stats";
import Tracking from "@/components/landing/Tracking";
import AnimatedSection from "@/components/animations/AnimatedSection";

export default function RootPage() {
  return (
    <div className="min-h-screen py-0 px-0 sm:py-4 sm:px-2 md:py-8 md:px-4 bg-black text-foreground w-full overflow-x-clip">
      <div className="max-w-8xl mx-auto">
        <Navigation />

        <AnimatedSection delay={0.1}>
          <Hero />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <GetYourFit />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <CalorieAi />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Stats />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Tracking />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Footer />
        </AnimatedSection>
      </div>
    </div>
  );
}
