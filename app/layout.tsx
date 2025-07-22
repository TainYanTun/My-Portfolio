import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
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
  title: "Derek's Portfolio",
  description: "A brief showcase of my skills, projects, and more.",
  authors: [{ name: "Tain Yan Tun" }],
  keywords: ["portfolio", "developer", "projects", "skills", "Derek","Tain Yan Tun", "web developer", "software engineer", "student portfolio"],
  openGraph: {
    title: "Derek's Portfolio",
    description: "A brief showcase of my skills, projects, and more.",
    url: "https://portfolio-two-beta-hac3efbegb.vercel.app",
    siteName: "Derek's Portfolio",
    images: [
      {
        url: "/banner.png",
        width: 1000,
        height: 1000,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/banner.png",
    shortcut: "/webicon.svg",
    apple: "/webicon.svg",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/banner.png",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Derek's Portfolio",
    description: "A brief showcase of my skills, projects, and more.",
    images: ["/banner.png"],
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
        <SpeedInsights />
      </body>
    </html>
  );
}