import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

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

      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-base text-gray-400 mb-2">
          Your privacy is important to us. This Privacy Policy explains how JYM
          Fitness collects, uses, and protects your personal information.
        </p>
        <p className="text-sm text-gray-500">Last Updated: January 2025</p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              1. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-white mb-4">
              1.1 Information You Provide
            </h3>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              When you create an account and use JYM Fitness, we collect
              information that you voluntarily provide to us, including:
            </p>
            <ul className="list-disc list-inside text-base text-gray-300 space-y-2 mb-6 ml-4">
              <li>Name and email address</li>
              <li>Profile information (age, gender, height, weight)</li>
              <li>Fitness goals and preferences</li>
              <li>Workout history and exercise data</li>
              <li>Nutrition logs and calorie tracking data</li>
              <li>Photos uploaded for AI calorie analysis</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-4">
              1.2 Automatically Collected Information
            </h3>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              When you use our application, we automatically collect certain
              information about your device and usage patterns:
            </p>
            <ul className="list-disc list-inside text-base text-gray-300 space-y-2 mb-6 ml-4">
              <li>
                Device information (model, operating system, unique device
                identifiers)
              </li>
              <li>App usage data and interaction patterns</li>
              <li>Performance data and crash reports</li>
              <li>IP address and approximate geographic location</li>
              <li>Log files and diagnostic data</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-4">
              1.3 Health and Fitness Data
            </h3>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              With your permission, we may access and process health and fitness
              data from your device&apos;s health apps (such as Apple Health or
              Google Fit), including step counts, heart rate, and other activity
              metrics.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              2. How We Use Your Information
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside text-base text-gray-300 space-y-2 mb-4 ml-4">
              <li>
                <strong className="text-white">
                  To provide and maintain our services:
                </strong>{" "}
                Including creating your account, processing your requests, and
                delivering the features of the application
              </li>
              <li>
                <strong className="text-white">
                  To personalize your experience:
                </strong>{" "}
                Providing customized workout recommendations, nutrition plans,
                and fitness insights based on your goals and progress
              </li>
              <li>
                <strong className="text-white">To improve our services:</strong>{" "}
                Analyzing usage patterns, testing new features, and enhancing
                app performance
              </li>
              <li>
                <strong className="text-white">To communicate with you:</strong>{" "}
                Sending you updates, notifications, and responding to your
                inquiries
              </li>
              <li>
                <strong className="text-white">To ensure security:</strong>{" "}
                Detecting and preventing fraud, abuse, and security incidents
              </li>
              <li>
                <strong className="text-white">
                  To comply with legal obligations:
                </strong>{" "}
                Meeting legal requirements and responding to lawful requests
                from authorities
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              3. Information Sharing and Disclosure
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              We do not sell your personal information. We may share your
              information only in the following circumstances:
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">
              3.1 Service Providers
            </h3>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              We work with third-party service providers who perform services on
              our behalf, including:
            </p>
            <ul className="list-disc list-inside text-base text-gray-300 space-y-2 mb-6 ml-4">
              <li>
                <strong className="text-white">
                  Cloud hosting and storage:
                </strong>{" "}
                Amazon Web Services (AWS)
              </li>
              <li>
                <strong className="text-white">Authentication services:</strong>{" "}
                Clerk
              </li>
              <li>
                <strong className="text-white">
                  Analytics and performance monitoring:
                </strong>{" "}
                Firebase Analytics
              </li>
              <li>
                <strong className="text-white">Payment processing:</strong>{" "}
                Apple App Store and Google Play Store
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-4">
              3.2 Legal Requirements
            </h3>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              We may disclose your information if required by law, regulation,
              legal process, or governmental request, or when we believe
              disclosure is necessary to protect our rights, your safety, or the
              safety of others.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">
              3.3 Business Transfers
            </h3>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              If JYM Fitness is involved in a merger, acquisition, or sale of
              assets, your information may be transferred as part of that
              transaction. We will notify you via email and/or prominent notice
              in the app of any such change in ownership.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              4. Data Security
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside text-base text-gray-300 space-y-2 mb-4 ml-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication requirements</li>
              <li>Secure data centers with physical security measures</li>
              <li>Employee training on data protection and privacy</li>
            </ul>
            <p className="text-base text-gray-300 leading-relaxed">
              However, no method of transmission over the Internet or electronic
              storage is 100% secure. While we strive to protect your
              information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              5. Data Retention
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              We retain your personal information for as long as necessary to
              provide you with our services and as described in this Privacy
              Policy. We will retain and use your information to the extent
              necessary to comply with our legal obligations, resolve disputes,
              and enforce our agreements.
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              If you delete your account, we will delete or anonymize your
              personal information within 30 days, except where we are required
              to retain it for legal purposes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              6. Your Privacy Rights
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding
              your personal information:
            </p>
            <ul className="list-disc list-inside text-base text-gray-300 space-y-2 mb-4 ml-4">
              <li>
                <strong className="text-white">Right to Access:</strong> Request
                a copy of the personal information we hold about you
              </li>
              <li>
                <strong className="text-white">Right to Rectification:</strong>{" "}
                Request correction of inaccurate or incomplete information
              </li>
              <li>
                <strong className="text-white">Right to Erasure:</strong>{" "}
                Request deletion of your personal information
              </li>
              <li>
                <strong className="text-white">
                  Right to Data Portability:
                </strong>{" "}
                Request a copy of your data in a structured, machine-readable
                format
              </li>
              <li>
                <strong className="text-white">Right to Object:</strong> Object
                to processing of your personal information
              </li>
              <li>
                <strong className="text-white">
                  Right to Restrict Processing:
                </strong>{" "}
                Request restriction of processing your personal information
              </li>
              <li>
                <strong className="text-white">
                  Right to Withdraw Consent:
                </strong>{" "}
                Withdraw consent where processing is based on consent
              </li>
            </ul>
            <p className="text-base text-gray-300 leading-relaxed">
              To exercise any of these rights, please contact us at
              contact.jymfitness@gmail.com or through our account deletion page.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              7. Children&apos;s Privacy
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              JYM Fitness is not intended for children under the age of 13. We
              do not knowingly collect personal information from children under
              13. If you are a parent or guardian and believe that your child
              has provided us with personal information, please contact us
              immediately.
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              If we discover that we have collected personal information from a
              child under 13, we will take steps to delete that information as
              quickly as possible.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              8. International Data Transfers
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              Your information may be transferred to and processed in countries
              other than your country of residence. These countries may have
              data protection laws that are different from the laws of your
              country.
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              When we transfer your information internationally, we take steps
              to ensure that your information receives an adequate level of
              protection through appropriate safeguards.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              9. Changes to This Privacy Policy
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by posting the new Privacy
              Policy in the application and updating the &quot;Last
              Updated&quot; date at the top of this policy.
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              We encourage you to review this Privacy Policy periodically. Your
              continued use of JYM Fitness after any changes constitutes your
              acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section className="mb-12 pb-8 border-b border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">
              10. Contact Us
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="text-base text-gray-300 space-y-2">
              <p>
                <strong className="text-white">Company Name:</strong> JYM
                Fitness
              </p>
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
                  https://jymfitness.com/contact
                </Link>
              </p>
              <p>
                <strong className="text-white">Account Deletion:</strong>{" "}
                <Link
                  href="/delete-account"
                  className="text-white underline hover:text-gray-300"
                >
                  https://jymfitness.com/delete-account
                </Link>
              </p>
            </div>
            <p className="text-base text-gray-300 leading-relaxed mt-4">
              We will respond to your inquiry within 48 hours.
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
                href="/terms-of-use"
                className="hover:text-white transition-colors"
              >
                Terms of Use
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
