import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, Eye, Lock, Database, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/yellowLogo.png"
                alt="JYM Fitness"
                width={50}
                height={50}
              />
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
      <div className="bg-accent rounded-[80px] mx-4 md:mx-8 mt-8 p-12 md:p-16 text-center">
        <div className="flex items-center justify-center mb-6">
          <Shield className="h-16 w-16 text-[#e0fe10] mr-4" />
          <h1 className="text-6xl md:text-8xl font-black">Privacy Policy</h1>
        </div>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
          Your privacy is important to us. This policy explains how we collect,
          use, and protect your information.
        </p>
        <p className="text-sm text-white/70 mt-4">Last updated: January 2025</p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {/* Information We Collect */}
          <div className="bg-[#222222] rounded-[40px] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-8 w-8 text-[#e0fe10]" />
              <h2 className="text-3xl font-black">Information We Collect</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">
                  Personal Information
                </h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Name and email address</li>
                  <li>Profile information and preferences</li>
                  <li>Fitness goals and assessment data</li>
                  <li>Workout history and progress tracking</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Usage Data</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>App usage patterns and interactions</li>
                  <li>Device information and operating system</li>
                  <li>Performance metrics and crash reports</li>
                  <li>Location data (if enabled)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="bg-[#222222] rounded-[40px] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-8 w-8 text-[#e0fe10]" />
              <h2 className="text-3xl font-black">
                How We Use Your Information
              </h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide personalized workout recommendations</li>
                <li>Track your fitness progress and achievements</li>
                <li>Improve app performance and user experience</li>
                <li>Send important updates and notifications</li>
                <li>Provide customer support and assistance</li>
                <li>Analyze usage patterns to enhance features</li>
              </ul>
            </div>
          </div>

          {/* Data Protection */}
          <div className="bg-[#222222] rounded-[40px] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="h-8 w-8 text-[#e0fe10]" />
              <h2 className="text-3xl font-black">
                Data Protection & Security
              </h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">
                  Security Measures
                </h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>End-to-end encryption for sensitive data</li>
                  <li>Secure cloud storage with AWS</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">
                  Data Retention
                </h4>
                <p className="ml-4">
                  We retain your data only as long as necessary to provide our
                  services. You can request data deletion at any time through
                  our account deletion process.
                </p>
              </div>
            </div>
          </div>

          {/* Third-Party Services */}
          <div className="bg-[#222222] rounded-[40px] p-8">
            <h2 className="text-3xl font-black mb-6 text-[#e0fe10]">
              Third-Party Services
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                We use the following third-party services to provide our app
                functionality:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>AWS CloudFront:</strong> Content delivery and data
                  storage
                </li>
                <li>
                  <strong>Firebase:</strong> Backend services and authentication
                </li>
                <li>
                  <strong>Clerk:</strong> User authentication and management
                </li>
                <li>
                  <strong>Analytics:</strong> App usage and performance
                  monitoring
                </li>
              </ul>
              <p className="text-sm text-gray-400 mt-4">
                These services have their own privacy policies and data handling
                practices.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-[#222222] rounded-[40px] p-8">
            <h2 className="text-3xl font-black mb-6 text-[#e0fe10]">
              Your Rights
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account and data</li>
                <li>Export your data</li>
                <li>Opt-out of certain data processing</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-[#222222] rounded-[40px] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="h-8 w-8 text-[#e0fe10]" />
              <h2 className="text-3xl font-black">Contact Us</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="bg-[#2a3a40] p-4 rounded-lg">
                <p>
                  <strong>Email:</strong> contact.jymfitness@gmail.com
                </p>
                <p>
                  <strong>Support:</strong>{" "}
                  <Link href="/contact" className="text-[#e0fe10] underline">
                    Contact Form
                  </Link>
                </p>
              </div>
              <p className="text-sm text-gray-400">
                We will respond to your inquiry within 24-48 hours.
              </p>
            </div>
          </div>

          {/* Updates */}
          <div className="bg-[#222222] rounded-[40px] p-8">
            <h2 className="text-3xl font-black mb-6 text-[#e0fe10]">
              Policy Updates
            </h2>
            <div className="text-gray-300">
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any significant changes through the app or via
                email. Your continued use of the app after such changes
                constitutes acceptance of the updated policy.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#e0fe10] text-black font-bold rounded-full hover:bg-[#d0ee00] transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
