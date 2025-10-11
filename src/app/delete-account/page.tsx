"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function DeleteAccount() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
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
                  src="/icons/yellowLogo.png"
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-12">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 mb-6">
                <svg
                  className="w-10 h-10 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">
                Request Received
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Your account deletion request has been submitted successfully.
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-8 mb-8 text-left">
              <h2 className="text-xl font-semibold text-white mb-4">
                What Happens Next
              </h2>
              <div className="space-y-4 text-base text-gray-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-white">Email Confirmation</p>
                    <p className="text-sm text-gray-400">
                      You will receive a confirmation email within 24 hours to
                      verify your request.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-white">Processing Period</p>
                    <p className="text-sm text-gray-400">
                      Your request will be processed within 7 business days.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                    3
                  </div>
                  <div>
                    <p className="font-medium text-white">Data Deletion</p>
                    <p className="text-sm text-gray-400">
                      All your personal data will be permanently deleted from
                      our systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
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
                src="/icons/yellowLogo.png"
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

      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Delete Your Account
        </h1>
        <p className="text-base text-gray-400 mb-2">
          Request permanent deletion of your JYM Fitness account and all
          associated data.
        </p>
        <p className="text-sm text-gray-500">This action cannot be undone.</p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="prose prose-invert max-w-none">
          {/* Warning Section */}
          <section className="mb-12 p-6 bg-red-900/10 border border-red-900/30 rounded-lg">
            <h2 className="text-xl font-bold text-red-400 mb-4">
              ⚠ Important Information
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              Deleting your account will permanently remove all your data from
              our systems. This action cannot be undone.
            </p>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">
                The following data will be permanently deleted:
              </strong>
            </p>
            <ul className="list-disc list-inside text-base text-gray-300 space-y-2 ml-4">
              <li>Your profile information and account credentials</li>
              <li>All workout history and exercise logs</li>
              <li>Nutrition data and calorie tracking records</li>
              <li>Progress photos and measurements</li>
              <li>Custom workout plans and saved exercises</li>
              <li>Achievement badges and milestones</li>
              <li>All app preferences and settings</li>
            </ul>
          </section>

          {/* Deletion Form */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Account Deletion Request
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              To proceed with deleting your account, please complete the form
              below. We will send a confirmation email to verify your request.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-white mb-2"
                >
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  placeholder="Enter your registered email address"
                  required
                />
                <p className="text-sm text-gray-400 mt-2">
                  This must match the email address associated with your JYM
                  Fitness account.
                </p>
              </div>

              <div>
                <label
                  htmlFor="reason"
                  className="block text-base font-medium text-white mb-2"
                >
                  Reason for Deletion (Optional)
                </label>
                <textarea
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors resize-none"
                  placeholder="Help us improve by sharing why you're leaving (optional)"
                />
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Before you go:</strong> If
                  you&apos;re experiencing issues with the app or have concerns
                  about your data, please{" "}
                  <Link
                    href="/contact"
                    className="text-white underline hover:text-gray-300"
                  >
                    contact our support team
                  </Link>
                  . We may be able to help resolve your concerns without
                  deleting your account.
                </p>
              </div>

              <button
                type="submit"
                disabled={isLoading || !email}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing Request...
                  </>
                ) : (
                  "Submit Deletion Request"
                )}
              </button>
            </form>
          </section>

          {/* Process Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              How Account Deletion Works
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Step 1: Request Submission
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  After submitting your deletion request, you will receive an
                  automated confirmation email within 24 hours. This email will
                  contain a verification link to confirm your identity and
                  deletion request.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Step 2: Verification
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  You must click the verification link in the email within 7
                  days to confirm your request. If you do not verify your
                  request within this timeframe, the deletion request will be
                  automatically cancelled for security purposes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Step 3: Processing
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  Once verified, your account will be marked for deletion.
                  During a 7-day grace period, your account will be deactivated
                  but not yet deleted. You can cancel the deletion request
                  during this period by contacting support.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Step 4: Permanent Deletion
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  After the grace period expires, all your personal data will be
                  permanently deleted from our servers. This process typically
                  completes within 30 days to ensure complete removal from all
                  systems, including backups.
                </p>
              </div>
            </div>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Data Retention and Exceptions
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              While we delete all your personal data, we may retain certain
              information for legal and operational purposes:
            </p>
            <ul className="list-disc list-inside text-base text-gray-300 space-y-2 mb-4 ml-4">
              <li>
                Transaction records required for accounting and tax purposes
                (typically 7 years)
              </li>
              <li>
                Records necessary to comply with legal obligations and resolve
                disputes
              </li>
              <li>
                Aggregated, anonymized data that cannot be linked back to you
              </li>
              <li>
                Information necessary to prevent fraud and ensure platform
                security
              </li>
            </ul>
            <p className="text-base text-gray-300 leading-relaxed">
              This retained information is kept securely and is not used for any
              purpose other than legal compliance and security.
            </p>
          </section>

          {/* Alternative Options */}
          <section className="mb-12 pb-8 border-b border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">
              Alternatives to Account Deletion
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              If you&apos;re not ready to permanently delete your account,
              consider these alternatives:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Export Your Data
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  Download a copy of your workout history, nutrition logs, and
                  other data before deleting your account. Contact{" "}
                  <a
                    href="mailto:contact.jymfitness@gmail.com"
                    className="text-white underline hover:text-gray-300"
                  >
                    support
                  </a>{" "}
                  to request a data export.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Adjust Privacy Settings
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  You can control what data we collect and how it&apos;s used in
                  your account privacy settings. Review our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-white underline hover:text-gray-300"
                  >
                    Privacy Policy
                  </Link>{" "}
                  for more information.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Cancel Subscriptions
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  If you&apos;re deleting your account due to subscription
                  concerns, you can cancel your subscription through your App
                  Store or Google Play Store account settings without deleting
                  your account.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Need Help?</h2>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              If you have questions about account deletion or need assistance
              with your account, please contact us:
            </p>
            <div className="text-base text-gray-300 space-y-2">
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href="mailto:contact.jymfitness@gmail.com"
                  className="text-white underline hover:text-gray-300"
                >
                  contact.jymfitness@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-white">Support:</strong>{" "}
                <Link
                  href="/contact"
                  className="text-white underline hover:text-gray-300"
                >
                  Contact Form
                </Link>
              </p>
              <p>
                <strong className="text-white">Privacy Policy:</strong>{" "}
                <Link
                  href="/privacy-policy"
                  className="text-white underline hover:text-gray-300"
                >
                  View Privacy Policy
                </Link>
              </p>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              We typically respond to all inquiries within 48 hours.
            </p>
          </section>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="border-t border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href="/"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              ← Back to Home
            </Link>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
