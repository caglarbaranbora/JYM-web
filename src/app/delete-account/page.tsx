"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Trash2,
  AlertTriangle,
  Clock,
  Mail,
  Shield,
  CheckCircle,
} from "lucide-react";

export default function DeleteAccount() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
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

        {/* Success Message */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-8">
          <div className="bg-[#222222] rounded-[60px] p-12 text-center">
            <CheckCircle className="h-20 w-20 text-[#e0fe10] mx-auto mb-6" />
            <h1 className="text-4xl font-black mb-4">
              Deletion Request Submitted
            </h1>
            <p className="text-gray-300 text-lg mb-6">
              Your account deletion request has been submitted successfully. You
              will receive a confirmation email shortly.
            </p>
            <div className="bg-[#e0fe10]/20 border border-[#e0fe10]/30 rounded-2xl p-6 mb-8">
              <p className="text-[#e0fe10]">
                <strong>What happens next:</strong>
                <br />
                • You&apos;ll receive an email confirmation within 24 hours
                <br />
                • Your account will be permanently deleted within 7 business
                days
                <br />• All your data will be removed from our systems
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#e0fe10] text-black font-bold rounded-full hover:bg-[#d0ee00] transition-all duration-300"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
          <Trash2 className="h-16 w-16 text-[#e0fe10] mr-4" />
          <h1 className="text-6xl md:text-8xl font-black">Delete Account</h1>
        </div>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
          This page allows you to delete your JYM account. This action cannot be
          undone.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Warning Card */}
        <div className="bg-red-500/10 border-2 border-red-500/30 rounded-[40px] p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-8 w-8 text-red-500" />
            <h2 className="text-3xl font-black text-red-500">
              Important Warning
            </h2>
          </div>
          <div className="text-gray-300">
            <p className="mb-4">
              Deleting your account will permanently remove all your data
              including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Your profile information and preferences</li>
              <li>Workout history and progress tracking</li>
              <li>Personalized recommendations and assessments</li>
              <li>All associated app data and settings</li>
            </ul>
            <p className="text-red-400 font-semibold">
              This action cannot be undone. Please make sure you want to
              proceed.
            </p>
          </div>
        </div>

        {/* Deletion Form */}
        <div className="bg-[#222222] rounded-[40px] p-8 mb-8">
          <h2 className="text-3xl font-black mb-6">Account Deletion Request</h2>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-4 bg-black border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e0fe10] transition-colors"
                  placeholder="Enter your registered email address"
                  required
                />
                <p className="text-sm text-gray-400 mt-2">
                  We&apos;ll send a confirmation email to this address
                </p>
              </div>

              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-2xl p-4">
                <p className="text-yellow-400 text-sm">
                  <strong>Note:</strong> You must use the email address
                  associated with your JYM Fitness account. If you don&apos;t
                  remember your email, please contact support first.
                </p>
              </div>

              <button
                type="submit"
                disabled={isLoading || !email}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Trash2 className="h-5 w-5" />
                    Delete My Account
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Process Information */}
        <div className="bg-[#222222] rounded-[40px] p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="h-8 w-8 text-[#e0fe10]" />
            <h2 className="text-3xl font-black">Deletion Process</h2>
          </div>
          <div className="text-gray-300 space-y-4">
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#e0fe10] rounded-full flex items-center justify-center text-black text-sm font-bold mr-3 mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-semibold text-white">Email Confirmation</p>
                  <p className="text-sm">
                    You&apos;ll receive a confirmation email within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#e0fe10] rounded-full flex items-center justify-center text-black text-sm font-bold mr-3 mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-semibold text-white">Review Period</p>
                  <p className="text-sm">
                    7 business days to process your request
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#e0fe10] rounded-full flex items-center justify-center text-black text-sm font-bold mr-3 mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-semibold text-white">Permanent Deletion</p>
                  <p className="text-sm">
                    All data will be permanently removed from our systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative Options */}
        <div className="bg-[#222222] rounded-[40px] p-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-8 w-8 text-[#e0fe10]" />
            <h2 className="text-3xl font-black">Alternative Options</h2>
          </div>
          <div className="text-gray-300 space-y-4">
            <p>Before deleting your account, consider these alternatives:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Data Export:</strong> Download your data before deletion
              </li>
              <li>
                <strong>Account Deactivation:</strong> Temporarily disable your
                account
              </li>
              <li>
                <strong>Privacy Settings:</strong> Adjust your privacy
                preferences
              </li>
              <li>
                <strong>Contact Support:</strong> Get help with account issues
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Contact Support
              </Link>
              <Link
                href="/privacy-policy"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                <Shield className="h-4 w-4" />
                Privacy Settings
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm mb-4">
            Need help? Contact our support team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact.jymfitness@gmail.com"
              className="text-[#e0fe10] hover:text-[#e0fe10]/80 transition-colors"
            >
              contact.jymfitness@gmail.com
            </a>
            <span className="hidden sm:block text-gray-500">•</span>
            <Link
              href="/contact"
              className="text-[#e0fe10] hover:text-[#e0fe10]/80 transition-colors"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
