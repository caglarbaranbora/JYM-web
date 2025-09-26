"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Trash2, 
  AlertTriangle, 
  Clock, 
  Mail, 
  Shield,
  CheckCircle
} from "lucide-react";

export default function DeleteAccount() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#192126] via-[#1a252a] to-[#192126]">
        {/* Navigation */}
        <nav className="border-b border-white/10 bg-black/20 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-white">
                  JYM
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

        {/* Success Message */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="bg-[#1a252a]/80 border-[#374151] backdrop-blur-md">
            <CardContent className="pt-6 text-center">
              <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-white mb-4">
                Deletion Request Submitted
              </h1>
              <p className="text-gray-300 mb-6">
                Your account deletion request has been submitted successfully. 
                You will receive a confirmation email shortly.
              </p>
              <div className="bg-[#BBF246]/20 border border-[#BBF246]/30 rounded-lg p-4 mb-6">
                <p className="text-[#BBF246] text-sm">
                  <strong>What happens next:</strong><br />
                  • You&apos;ll receive an email confirmation within 24 hours<br />
                  • Your account will be permanently deleted within 7 business days<br />
                  • All your data will be removed from our systems
                </p>
              </div>
              <Link href="/">
                <Button size="lg" className="bg-[#BBF246] hover:bg-[#BBF246]/90 text-[#192126] px-8 py-3 font-semibold">
                  Return to Home
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

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
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <Trash2 className="h-12 w-12 text-[#FF6B35] mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Delete Account
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            This page allows you to delete your JYM account. This action cannot be undone.
          </p>
        </div>

        {/* Warning Card */}
        <Card className="bg-[#FF6B35]/10 border-[#FF6B35]/30 backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-[#FF6B35] flex items-center">
              <AlertTriangle className="h-6 w-6 mr-3" />
              Important Warning
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <p className="mb-4">
              Deleting your account will permanently remove all your data including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Your profile information and preferences</li>
              <li>Workout history and progress tracking</li>
              <li>Personalized recommendations and assessments</li>
              <li>All associated app data and settings</li>
            </ul>
            <p className="text-[#FF6B35] font-semibold">
              This action cannot be undone. Please make sure you want to proceed.
            </p>
          </CardContent>
        </Card>

        {/* Deletion Form */}
        <Card className="bg-[#1a252a]/80 border-[#374151] backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-white">Account Deletion Request</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your registered email address"
                  required
                />
                <p className="text-sm text-gray-400 mt-2">
                  We&apos;ll send a confirmation email to this address
                </p>
              </div>

              <div className="bg-[#f59e0b]/20 border border-[#f59e0b]/30 rounded-lg p-4">
                <p className="text-[#f59e0b] text-sm">
                  <strong>Note:</strong> You must use the email address associated with your JYM Fitness account. 
                  If you don&apos;t remember your email, please contact support first.
                </p>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white py-3 font-semibold"
                disabled={isLoading || !email}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Trash2 className="mr-2 h-5 w-5" />
                    Delete My Account
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Process Information */}
        <Card className="bg-[#1a252a]/80 border-[#374151] backdrop-blur-md mb-8">
          <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Clock className="h-6 w-6 text-[#3b82f6] mr-3" />
                Deletion Process
              </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-[#3b82f6] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-semibold text-white">Email Confirmation</p>
                  <p className="text-sm">You&apos;ll receive a confirmation email within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-[#3b82f6] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-semibold text-white">Review Period</p>
                  <p className="text-sm">7 business days to process your request</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-[#3b82f6] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-semibold text-white">Permanent Deletion</p>
                  <p className="text-sm">All data will be permanently removed from our systems</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alternative Options */}
        <Card className="bg-[#1a252a]/80 border-[#374151] backdrop-blur-md">
          <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Shield className="h-6 w-6 text-[#BBF246] mr-3" />
                Alternative Options
              </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <p>
              Before deleting your account, consider these alternatives:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Data Export:</strong> Download your data before deletion</li>
              <li><strong>Account Deactivation:</strong> Temporarily disable your account</li>
              <li><strong>Privacy Settings:</strong> Adjust your privacy preferences</li>
              <li><strong>Contact Support:</strong> Get help with account issues</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Mail className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Shield className="mr-2 h-4 w-4" />
                Privacy Settings
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm mb-4">
            Need help? Contact our support team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@jymapp.com" 
              className="text-[#BBF246] hover:text-[#BBF246]/80 transition-colors"
            >
              support@jymapp.com
            </a>
            <span className="hidden sm:block text-gray-500">•</span>
            <a 
              href="mailto:privacy@jymapp.com" 
              className="text-[#BBF246] hover:text-[#BBF246]/80 transition-colors"
            >
              privacy@jymapp.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
