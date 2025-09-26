import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Eye, Lock, Database, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#192126] via-[#1a252a] to-[#192126]">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <Image 
                  src="/logo.png" 
                  alt="JYM Fitness Logo" 
                  width={32} 
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-2xl font-bold text-white">JYM Fitness</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 text-[#BBF246] mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Last updated: December 2024
          </p>
        </div>

        <div className="space-y-8">
          {/* Information We Collect */}
          <Card className="bg-[#1a252a]/80 border-[#374151] backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Database className="h-6 w-6 text-[#3b82f6] mr-3" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">Personal Information</h4>
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
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="bg-[#1a252a]/80 border-[#374151] backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Eye className="h-6 w-6 text-[#FF6B35] mr-3" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide personalized workout recommendations</li>
                <li>Track your fitness progress and achievements</li>
                <li>Improve app performance and user experience</li>
                <li>Send important updates and notifications</li>
                <li>Provide customer support and assistance</li>
                <li>Analyze usage patterns to enhance features</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="bg-[#1a252a]/80 border-[#374151] backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Lock className="h-6 w-6 text-[#ef4444] mr-3" />
                Data Protection & Security
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">Security Measures</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>End-to-end encryption for sensitive data</li>
                  <li>Secure cloud storage with AWS</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Data Retention</h4>
                <p className="ml-4">
                  We retain your data only as long as necessary to provide our services. 
                  You can request data deletion at any time through our account deletion process.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Services */}
          <Card className="bg-[#1a252a]/80 border-[#374151] backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white">Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                We use the following third-party services to provide our app functionality:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>AWS CloudFront:</strong> Content delivery and data storage</li>
                <li><strong>Firebase:</strong> Backend services and authentication</li>
                <li><strong>Clerk:</strong> User authentication and management</li>
                <li><strong>Analytics:</strong> App usage and performance monitoring</li>
              </ul>
              <p className="text-sm text-gray-400 mt-4">
                These services have their own privacy policies and data handling practices.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="bg-[#1a252a]/80 border-[#374151] backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white">Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account and data</li>
                <li>Export your data</li>
                <li>Opt-out of certain data processing</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-[#1a252a]/80 border-[#374151] backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Mail className="h-6 w-6 text-[#8b5cf6] mr-3" />
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="bg-[#2a3a40] p-4 rounded-lg">
                <p><strong>Email:</strong> privacy@jymapp.com</p>
                <p><strong>Support:</strong> support@jymapp.com</p>
                <p><strong>Data Protection Officer:</strong> dpo@jymapp.com</p>
              </div>
              <p className="text-sm text-gray-400">
                We will respond to your inquiry within 7 business days.
              </p>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card className="bg-[#1a252a]/80 border-[#374151] backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white">Policy Updates</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>
                We may update this Privacy Policy from time to time. We will notify you 
                of any significant changes through the app or via email. Your continued 
                use of the app after such changes constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <Link href="/">
            <Button size="lg" className="bg-[#BBF246] hover:bg-[#BBF246]/90 text-[#192126] px-8 py-3 font-semibold">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
