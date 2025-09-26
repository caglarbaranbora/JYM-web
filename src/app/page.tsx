import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AppStoreButton } from "@/components/ui/app-store-button";
import { 
  Smartphone, 
  Database, 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  Target,
  Apple,
  Play,
  Star,
  Download,
  ArrowRight,
  CheckCircle,
  Dumbbell,
  Heart,
  Timer,
  Award,
  Menu,
  X,
  Camera,
  Brain,
  Calculator
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#192126] via-[#1a252a] to-[#192126]">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center space-x-3">
        <Image
                  src="/logo.png" 
                  alt="JYM Fitness Logo" 
                  width={80} 
                  height={80}
                  className="w-10 h-10"
                />
                <h1 className="text-2xl font-bold text-white">JYM Fitness</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="#features" className="text-white hover:text-[#BBF246] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Features
                </Link>
                <Link href="#app" className="text-white hover:text-[#BBF246] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  App
                </Link>
                <Link href="#testimonials" className="text-white hover:text-[#BBF246] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Reviews
                </Link>
                <Link href="/privacy" className="text-white hover:text-[#BBF246] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Privacy
                </Link>
                <Link href="/delete-account" className="text-white hover:text-[#BBF246] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Delete Account
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Button className="bg-[#BBF246] hover:bg-[#BBF246]/90 text-[#192126] font-semibold">
                <Download className="mr-2 h-4 w-4" />
                Download Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Solflare Style */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Transform Your
                <span className="text-[#BBF246]"> Fitness</span>
                <br />Journey
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                The most powerful fitness app with 800+ exercises, AI-powered calorie calculator, 
                nutrition tracking, and personalized workout plans. Your transformation starts here.
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#BBF246]">4.9★</div>
                  <div className="text-sm text-gray-400">Best rated on App Store</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#BBF246]">1M+</div>
                  <div className="text-sm text-gray-400">Active users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#BBF246]">800+</div>
                  <div className="text-sm text-gray-400">Exercises</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <AppStoreButton platform="ios" className="hover:scale-105 transition-transform" />
                <AppStoreButton platform="android" className="hover:scale-105 transition-transform" />
              </div>
            </div>

            {/* Right Content - Mobile Mockup */}
            <div className="relative">
              <div className="relative mx-auto w-80 h-[600px] bg-gradient-to-b from-[#1a252a] to-[#192126] rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-[#192126] rounded-[2.5rem] overflow-hidden relative">
                  {/* Mockup Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-8 h-8 bg-[#BBF246] rounded-full"></div>
                      <div className="text-white font-bold text-lg">JYM Fitness</div>
                      <div className="w-6 h-6 bg-gray-600 rounded"></div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-[#1a252a] rounded-xl p-4">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-8 h-8 bg-[#BBF246] rounded-lg flex items-center justify-center">
                            <Dumbbell className="w-4 h-4 text-[#192126]" />
                          </div>
                          <div>
                            <div className="text-white font-semibold">Push-ups</div>
                            <div className="text-gray-400 text-sm">3 sets × 15 reps</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-[#1a252a] rounded-xl p-4">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-8 h-8 bg-[#8b5cf6] rounded-lg flex items-center justify-center">
                            <Camera className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-white font-semibold">AI Calorie Scan</div>
                            <div className="text-gray-400 text-sm">Apple: 95 calories</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-[#1a252a] rounded-xl p-4">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-8 h-8 bg-[#FF6B35] rounded-lg flex items-center justify-center">
                            <Heart className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-white font-semibold">Heart Rate</div>
                            <div className="text-gray-400 text-sm">145 BPM</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-[#1a252a] rounded-xl p-4">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-8 h-8 bg-[#3b82f6] rounded-lg flex items-center justify-center">
                            <Timer className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-white font-semibold">Workout Time</div>
                            <div className="text-gray-400 text-sm">25:30</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Independence Section */}
      <section className="py-20 bg-[#1a252a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Independence in your hands
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take control of your fitness journey with the most comprehensive 
              and powerful fitness application available.
            </p>
          </div>
        </div>
      </section>

      {/* Revolution Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                A revolution in 
                <span className="text-[#BBF246]"> fitness freedom</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                JYM Fitness is the fastest-growing fitness ecosystem, with comprehensive 
                workout tracking, nutrition monitoring, and community features. 
                Built for speed, efficiency, and results.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#BBF246]" />
                  <span className="text-white">800+ professional exercises</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#BBF246]" />
                  <span className="text-white">AI-powered calorie calculator from photos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#BBF246]" />
                  <span className="text-white">AI-powered workout recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#BBF246]" />
                  <span className="text-white">Real-time progress tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#BBF246]" />
                  <span className="text-white">Nutrition and meal planning</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-[#1a252a]/80 border-[#374151] backdrop-blur-md p-6">
                  <Database className="h-12 w-12 text-[#BBF246] mb-4" />
                  <h3 className="text-white font-semibold mb-2">Exercise Database</h3>
                  <p className="text-gray-300 text-sm">800+ exercises with detailed instructions</p>
                </Card>
                <Card className="bg-[#1a252a]/80 border-[#374151] backdrop-blur-md p-6">
                  <TrendingUp className="h-12 w-12 text-[#FF6B35] mb-4" />
                  <h3 className="text-white font-semibold mb-2">Progress Tracking</h3>
                  <p className="text-gray-300 text-sm">Visual analytics and insights</p>
                </Card>
                <Card className="bg-[#1a252a]/80 border-[#374151] backdrop-blur-md p-6">
                  <Target className="h-12 w-12 text-[#3b82f6] mb-4" />
                  <h3 className="text-white font-semibold mb-2">Personalized Plans</h3>
                  <p className="text-gray-300 text-sm">AI-driven recommendations</p>
                </Card>
                <Card className="bg-[#1a252a]/80 border-[#374151] backdrop-blur-md p-6">
                  <Shield className="h-12 w-12 text-[#8b5cf6] mb-4" />
                  <h3 className="text-white font-semibold mb-2">Secure & Private</h3>
                  <p className="text-gray-300 text-sm">Enterprise-grade security</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sword and Shield Section */}
      <section className="py-20 bg-[#1a252a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              JYM Fitness is your sword and shield
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Master your fitness</h3>
              <p className="text-gray-300 mb-6">
                From live workout tracking to progress analytics, JYM Fitness has all the tools 
                you need to achieve your fitness goals successfully.
              </p>
              <Button className="bg-[#BBF246] hover:bg-[#BBF246]/90 text-[#192126] px-6 py-3 font-semibold">
                Master your fitness
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Keep your data safe</h3>
              <p className="text-gray-300 mb-6">
                Your fitness data and progress are secured with enterprise-grade encryption. 
                Your privacy is our sacred principle.
              </p>
              <Button variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-6 py-3 font-semibold">
                Enter Stronghold
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Make every workout count
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-[#1a252a]/80 border-[#374151] backdrop-blur-md text-center hover:border-[#BBF246]/30 transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#BBF246] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Dumbbell className="h-8 w-8 text-[#192126]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Quick Workouts</h3>
                <p className="text-gray-300 text-sm">Start your fitness journey with guided workouts</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1a252a]/80 border-[#374151] backdrop-blur-md text-center hover:border-[#BBF246]/30 transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#8b5cf6] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Calorie Scanner</h3>
                <p className="text-gray-300 text-sm">Take a photo and get instant calorie analysis</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1a252a]/80 border-[#374151] backdrop-blur-md text-center hover:border-[#BBF246]/30 transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#FF6B35] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Health Tracking</h3>
                <p className="text-gray-300 text-sm">Monitor your health metrics and progress</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1a252a]/80 border-[#374151] backdrop-blur-md text-center hover:border-[#BBF246]/30 transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#3b82f6] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Achievements</h3>
                <p className="text-gray-300 text-sm">Unlock badges and track your milestones</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-[#1a252a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              We&apos;ve got your back
            </h2>
            <h3 className="text-2xl font-semibold text-[#BBF246] mb-4">
              Around-the-clock support
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Whether you&apos;re new to fitness or an experienced athlete, our support team 
              is here to help 24/7. They are battle-tested and endlessly patient—your 
              powerful helping hand in fitness.
            </p>
            <Button className="bg-[#BBF246] hover:bg-[#BBF246]/90 text-[#192126] px-8 py-3 text-lg font-semibold">
              Need help? Let&apos;s talk
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Empowering our community
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A product is only as strong as its devoted community. We&apos;re here to build 
              your strength, educate and motivate. Join us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-[#1a252a]/80 border-[#374151] backdrop-blur-md p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#BBF246] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#192126] font-bold">JS</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">John Smith</div>
                    <div className="text-gray-400 text-sm">Fitness Enthusiast</div>
                  </div>
                </div>
                <p className="text-gray-300">
                  &quot;JYM Fitness is awesome. The team consistently delivers new features 
                  and the app is always first to implement the latest fitness trends.&quot;
                </p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#BBF246] fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a252a]/80 border-[#374151] backdrop-blur-md p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">MS</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Maria Santos</div>
                    <div className="text-gray-400 text-sm">Personal Trainer</div>
                  </div>
                </div>
                <p className="text-gray-300">
                  &quot;I have tried every fitness app and JYM Fitness is by far the best. 
                  The workout tracking is smooth, the UI is intuitive, and the progress 
                  analytics are incredibly detailed.&quot;
                </p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#BBF246] fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a252a]/80 border-[#374151] backdrop-blur-md p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#8b5cf6] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">AL</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Alex Lee</div>
                    <div className="text-gray-400 text-sm">Nutritionist</div>
                  </div>
                </div>
                <p className="text-gray-300">
                  &quot;The AI calorie scanner is revolutionary! Just take a photo of your meal 
                  and get instant, accurate calorie analysis. It&apos;s like having a nutritionist 
                  in your pocket. Game changer!&quot;
                </p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#BBF246] fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#BBF246] to-[#FF6B35]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#192126] mb-6">
            In every workout a victory, in every goal a crown
          </h2>
          <p className="text-xl text-[#192126]/80 mb-8">
            Master your own fitness destiny with JYM Fitness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AppStoreButton platform="ios" className="hover:scale-105 transition-transform" />
            <AppStoreButton platform="android" className="hover:scale-105 transition-transform" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a252a]/80 border-t border-[#374151]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">JYM Fitness</h3>
              <p className="text-gray-300 text-sm">
                The most powerful fitness app for modern athletes.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-gray-300 hover:text-[#BBF246] text-sm">Features</Link></li>
                <li><Link href="#app" className="text-gray-300 hover:text-[#BBF246] text-sm">App</Link></li>
                <li><Link href="#testimonials" className="text-gray-300 hover:text-[#BBF246] text-sm">Reviews</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-300 hover:text-[#BBF246] text-sm">Privacy Policy</Link></li>
                <li><Link href="/delete-account" className="text-gray-300 hover:text-[#BBF246] text-sm">Delete Account</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-[#BBF246] text-sm">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-300 hover:text-[#BBF246] text-sm">Twitter</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-[#BBF246] text-sm">Instagram</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-[#BBF246] text-sm">Discord</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#374151] mt-8 pt-8 text-center">
            <p className="text-gray-300 text-sm">
              © 2024 JYM Fitness. All rights reserved. Built with ❤️ for the fitness community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}