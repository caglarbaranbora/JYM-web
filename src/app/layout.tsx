import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JYM Fitness - Professional Fitness App",
  description: "A modern, scalable fitness application with 800+ exercises, nutrition tracking, and personalized workout plans. Built with React Native and Expo.",
  keywords: ["fitness", "workout", "exercise", "health", "mobile app", "React Native", "Expo", "JYM Fitness"],
  authors: [{ name: "JYM Fitness Team" }],
  openGraph: {
    title: "JYM Fitness - Professional Fitness App",
    description: "Transform your fitness journey with 800+ exercises, nutrition tracking, and personalized workout plans.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "JYM Fitness - Professional Fitness App",
    description: "Transform your fitness journey with 800+ exercises, nutrition tracking, and personalized workout plans.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
