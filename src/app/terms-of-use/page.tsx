import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  FileText,
  Shield,
  Users,
  CreditCard,
  Ban,
  Scale,
} from "lucide-react";

export default function TermsOfUsePage() {
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
          <FileText className="h-16 w-16 text-[#e0fe10] mr-4" />
          <h1 className="text-6xl md:text-8xl font-black">Terms of Use</h1>
        </div>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
          Please read these terms carefully before using JYM Fitness
        </p>
        <p className="text-sm text-white/70 mt-4">Last updated: January 2025</p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {/* Introduction */}
          <div className="bg-[#222222] rounded-[40px] p-8">
            <h2 className="text-3xl font-black mb-4 text-[#e0fe10]">
              1. Introduction
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Welcome to JYM Fitness (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;). These Terms of Use (&quot;Terms&quot;) govern
                your access to and use of the JYM Fitness mobile application,
                website, and related services (collectively, the
                &quot;Service&quot;).
              </p>
              <p>
                By accessing or using our Service, you agree to be bound by
                these Terms. If you do not agree to these Terms, please do not
                use our Service.
              </p>
            </div>
          </div>

          {/* Account Registration */}
          <div className="bg-[#222222] rounded-[40px] p-8">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-8 w-8 text-[#e0fe10]" />
              <h2 className="text-3xl font-black">2. Account Registration</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                To use certain features of the Service, you must register for an
                account. When you register, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate, current, and complete information</li>
                <li>
                  Maintain and update your information to keep it accurate
                </li>
                <li>Maintain the security of your password and account</li>
                <li>
                  Accept all responsibility for activities that occur under your
                  account
                </li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>
              <p>
                You must be at least 13 years old to use our Service. If you are
                under 18, you must have parental consent.
              </p>
            </div>
          </div>

          {/* User Conduct */}
          <div className="bg-[#222222] rounded-[40px] p-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-8 w-8 text-[#e0fe10]" />
              <h2 className="text-3xl font-black">3. User Conduct</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Use the Service for any illegal purpose or in violation of any
                  laws
                </li>
                <li>
                  Violate, infringe, or misappropriate other people&apos;s
                  intellectual property or privacy rights
                </li>
                <li>
                  Post or transmit any content that is harmful, threatening,
                  abusive, or otherwise objectionable
                </li>
                <li>
                  Attempt to interfere with, compromise, or reverse engineer the
                  Service
                </li>
                <li>Upload viruses, malware, or other malicious code</li>
                <li>Harvest or collect user data without permission</li>
                <li>Use the Service to spam, advertise, or solicit</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </div>
          </div>

          {/* Subscription & Payments */}
          <div className="bg-[#222222] rounded-[40px] p-8">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="h-8 w-8 text-[#e0fe10]" />
              <h2 className="text-3xl font-black">
                4. Subscription & Payments
              </h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <h3 className="text-xl font-bold text-white">
                Subscription Plans
              </h3>
              <p>JYM Fitness offers various subscription plans:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Basic (Free):</strong> Access to basic features
                </li>
                <li>
                  <strong>Calorie AI+ (Monthly):</strong> $2.99/month with
                  premium features
                </li>
                <li>
                  <strong>Calorie AI+ (Annual):</strong> $35/year with all
                  premium features
                </li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-6">
                Payment Terms
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Subscriptions automatically renew unless cancelled before the
                  renewal date
                </li>
                <li>You will be charged at the start of each billing period</li>
                <li>All fees are non-refundable except as required by law</li>
                <li>We reserve the right to change our prices with notice</li>
                <li>Free trials may be offered at our discretion</li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-6">
                Cancellation
              </h3>
              <p>
                You may cancel your subscription at any time through your
                account settings or the app store where you purchased.
                Cancellation takes effect at the end of your current billing
                period.
              </p>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="bg-[#222222] rounded-[40px] p-8">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-8 w-8 text-[#e0fe10]" />
              <h2 className="text-3xl font-black">5. Intellectual Property</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                The Service and its original content, features, and
                functionality are owned by JYM Fitness and are protected by
                international copyright, trademark, and other intellectual
                property laws.
              </p>
              <p>
                You may not copy, modify, distribute, sell, or lease any part of
                our Service without our express written permission.
              </p>
              <p>
                User-generated content remains your property, but you grant us a
                license to use, modify, and display it in connection with the
                Service.
              </p>
            </div>
          </div>

          {/* Disclaimers */}
          <div className="bg-[#222222] rounded-[40px] p-8">
            <div className="flex items-center gap-3 mb-4">
              <Ban className="h-8 w-8 text-[#e0fe10]" />
              <h2 className="text-3xl font-black">
                6. Disclaimers & Limitations
              </h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <h3 className="text-xl font-bold text-white">
                Medical Disclaimer
              </h3>
              <p className="text-yellow-400">
                <strong>IMPORTANT:</strong> JYM Fitness is not a medical device
                or service. The information provided is for educational and
                informational purposes only and should not replace professional
                medical advice.
              </p>
              <p>
                Always consult with a qualified healthcare provider before
                starting any fitness or nutrition program, especially if you
                have any medical conditions or concerns.
              </p>

              <h3 className="text-xl font-bold text-white mt-6">
                Service Disclaimer
              </h3>
              <p>
                THE SERVICE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF
                ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE
                SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
              </p>

              <h3 className="text-xl font-bold text-white mt-6">
                Limitation of Liability
              </h3>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, JYM FITNESS SHALL NOT BE
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE SERVICE.
              </p>
            </div>
          </div>

          {/* Privacy */}
          <div className="bg-[#222222] rounded-[40px] p-8">
            <h2 className="text-3xl font-black mb-4 text-[#e0fe10]">
              7. Privacy
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Your privacy is important to us. Our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[#e0fe10] underline"
                >
                  Privacy Policy
                </Link>{" "}
                explains how we collect, use, and protect your personal
                information. By using the Service, you agree to our privacy
                practices.
              </p>
            </div>
          </div>

          {/* Termination */}
          <div className="bg-[#222222] rounded-[40px] p-8">
            <h2 className="text-3xl font-black mb-4 text-[#e0fe10]">
              8. Termination
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                We reserve the right to suspend or terminate your account and
                access to the Service at our sole discretion, without notice,
                for conduct that we believe:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violates these Terms</li>
                <li>Is harmful to other users, us, or third parties</li>
                <li>Violates applicable laws or regulations</li>
              </ul>
              <p>
                Upon termination, your right to use the Service will immediately
                cease. You may also delete your account at any time through our{" "}
                <Link
                  href="/delete-account"
                  className="text-[#e0fe10] underline"
                >
                  account deletion page
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="bg-[#222222] rounded-[40px] p-8">
            <h2 className="text-3xl font-black mb-4 text-[#e0fe10]">
              9. Changes to Terms
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                We may modify these Terms at any time. We will notify you of
                material changes by posting the updated Terms in the app or via
                email. Your continued use of the Service after such changes
                constitutes acceptance of the new Terms.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div className="bg-[#222222] rounded-[40px] p-8">
            <h2 className="text-3xl font-black mb-4 text-[#e0fe10]">
              10. Governing Law
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of Turkey, without regard to its conflict of law
                provisions.
              </p>
              <p>
                Any disputes arising from these Terms or your use of the Service
                shall be resolved in the courts of Istanbul, Turkey.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-accent rounded-[40px] p-8">
            <h2 className="text-3xl font-black mb-4">Contact Us</h2>
            <div className="text-white space-y-4">
              <p>
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-black rounded-2xl p-4">
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
            </div>
          </div>
        </div>

        {/* Back Button */}
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
