import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
// Switch from Google Geist to local HubotSans/PolySans per user's provided fonts
import localFont from "next/font/local";
import "./globals.css";

const hubotSans = localFont({
  src: [
    {
      path: "../../public/fonts/HubotSans-VariableFont_wdth,wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/HubotSans-Italic-VariableFont_wdth,wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

const polySans = localFont({
  src: [
    {
      path: "../../public/fonts/polysanstrial-neutral.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/polysansitalictrial-neutralitalic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JYM Fitness - Professional Fitness App",
  description:
    "A modern, scalable fitness application with 800+ exercises, nutrition tracking, and personalized workout plans. Built with React Native and Expo.",
  keywords: [
    "fitness",
    "workout",
    "exercise",
    "health",
    "mobile app",
    "React Native",
    "Expo",
    "JYM Fitness",
  ],
  authors: [{ name: "JYM Fitness Team" }],
  openGraph: {
    title: "JYM Fitness - Professional Fitness App",
    description:
      "Transform your fitness journey with 800+ exercises, nutrition tracking, and personalized workout plans.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "JYM Fitness - Professional Fitness App",
    description:
      "Transform your fitness journey with 800+ exercises, nutrition tracking, and personalized workout plans.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${hubotSans.variable} ${polySans.variable} antialiased dark`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
