import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Target, Users, Zap, Heart, Award, TrendingUp } from "lucide-react"
import AnimatedSection from "@/components/animations/AnimatedSection"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/icons/yellowLogo.png" alt="JYM Fitness" width={50} height={50} />
              <span className="text-2xl font-bold">JYM Fitness</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#222222] hover:bg-[#333333] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <AnimatedSection delay={0.1}>
        <div className="bg-accent rounded-[80px] mx-4 md:mx-8 mt-8 p-12 md:p-16 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            About <span className="text-[#e0fe10]">JYM</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Empowering your fitness journey with cutting-edge technology and personalized guidance
          </p>
        </div>
      </AnimatedSection>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <AnimatedSection delay={0.2}>
          <div className="mb-20">
            <h2 className="text-5xl font-black mb-8 text-center">
              Our <span className="text-[#e0fe10]">Story</span>
            </h2>
            <div className="bg-[#222222] rounded-[60px] p-12">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                JYM Fitness was born from a simple yet powerful idea: everyone deserves access to personalized,
                effective fitness guidance. We understand that starting a fitness journey can be overwhelming, with
                countless workout plans, conflicting nutrition advice, and a lack of personalized support.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                That&apos;s why we created JYM - a comprehensive fitness platform that combines advanced AI technology
                with proven fitness methodologies. Our mission is to make professional-grade fitness coaching accessible
                to everyone, anywhere, at any time.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you&apos;re a beginner taking your first steps into fitness or an experienced athlete looking to
                optimize your performance, JYM adapts to your unique needs, goals, and lifestyle.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Mission & Vision */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-[#222222] rounded-[60px] p-10">
              <div className="w-16 h-16 bg-[#e0fe10] rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl font-black mb-4">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To revolutionize fitness by providing intelligent, personalized workout and nutrition solutions that
                adapt to each individual&apos;s unique journey, making professional fitness guidance accessible to
                everyone.
              </p>
            </div>

            <div className="bg-[#222222] rounded-[60px] p-10">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become the world&apos;s leading AI-powered fitness platform, empowering millions to achieve their
                health and fitness goals through innovation, personalization, and unwavering support.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Core Values */}
        <AnimatedSection delay={0.2}>
          <div className="mb-20">
            <h2 className="text-5xl font-black mb-12 text-center">
              Our <span className="text-[#e0fe10]">Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#222222] rounded-[40px] p-8 text-center hover:bg-[#2a2a2a] transition-colors">
                <div className="w-16 h-16 bg-[#e0fe10] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Inclusivity</h3>
                <p className="text-gray-400">
                  Fitness is for everyone. We create solutions that work for all fitness levels, body types, and
                  backgrounds.
                </p>
              </div>

              <div className="bg-[#222222] rounded-[40px] p-8 text-center hover:bg-[#2a2a2a] transition-colors">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Excellence</h3>
                <p className="text-gray-400">
                  We&apos;re committed to delivering the highest quality features backed by science and validated by
                  results.
                </p>
              </div>

              <div className="bg-[#222222] rounded-[40px] p-8 text-center hover:bg-[#2a2a2a] transition-colors">
                <div className="w-16 h-16 bg-[#e0fe10] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Empowerment</h3>
                <p className="text-gray-400">
                  We empower our users with knowledge, tools, and support to take control of their fitness journey.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* What Makes Us Different */}
        <AnimatedSection delay={0.1}>
          <div className="bg-accent rounded-[80px] p-12 md:p-16 mb-20">
            <h2 className="text-5xl font-black mb-12 text-center">
              What Makes Us <span className="text-[#e0fe10]">Different</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black rounded-[40px] p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e0fe10] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black font-bold text-xl">AI</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Calorie AI+</h3>
                    <p className="text-gray-300">
                      Our revolutionary AI technology analyzes your meals through photos, providing accurate nutritional
                      information instantly. No more manual tracking or guesswork.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black rounded-[40px] p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e0fe10] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Personalized Plans</h3>
                    <p className="text-gray-300">
                      Every workout and meal plan is tailored to your specific goals, fitness level, and preferences.
                      Your journey is unique, and so is our approach.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black rounded-[40px] p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e0fe10] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black font-bold text-xl">800+</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Exercise Library</h3>
                    <p className="text-gray-300">
                      Access to over 800 exercises with detailed instructions, videos, and form guidance. Never run out
                      of workout ideas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black rounded-[40px] p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e0fe10] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Community Support</h3>
                    <p className="text-gray-300">
                      Join thousands of fitness enthusiasts. Share your progress, get motivated, and celebrate
                      achievements together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Statistics */}
        <AnimatedSection delay={0.2}>
          <div className="bg-[#222222] rounded-[80px] p-12 md:p-16 text-center">
            <h2 className="text-5xl font-black mb-12">
              Our <span className="text-[#e0fe10]">Impact</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-6xl font-black text-[#e0fe10] mb-3">10K+</div>
                <p className="text-gray-400 text-lg">Active Users</p>
              </div>
              <div>
                <div className="text-6xl font-black text-[#e0fe10] mb-3">800+</div>
                <p className="text-gray-400 text-lg">Exercises</p>
              </div>
              <div>
                <div className="text-6xl font-black text-[#e0fe10] mb-3">100+</div>
                <p className="text-gray-400 text-lg">Workout Plans</p>
              </div>
              <div>
                <div className="text-6xl font-black text-[#e0fe10] mb-3">24/7</div>
                <p className="text-gray-400 text-lg">AI Support</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection delay={0.1}>
          <div className="text-center mt-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Start Your Journey?</h2>
            <p className="text-gray-400 text-xl mb-8">
              Join thousands of users transforming their lives with JYM Fitness
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-8 py-4 bg-[#e0fe10] text-black font-bold rounded-full hover:bg-[#d0ee00] transition-all duration-300 text-lg"
              >
                Get Started Free
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
