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
  title: "Derek's Portfolio",
  description: "A brief showcase of my skills, projects, and more.",
  authors: [{ name: "Derek" }],
  keywords: ["portfolio", "developer", "projects", "skills", "Derek"],
  openGraph: {
    title: "Derek's Portfolio",
    description: "A brief showcase of my skills, projects, and more.",
    url: "https://your-portfolio-url.com",
    siteName: "Derek's Portfolio",
    images: [
      {
        url: "/webicon.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/public/webicon.png",
    shortcut: "/public/webicon.png",
    apple: "/webicon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/webicon.png",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Derek's Portfolio",
    description: "A brief showcase of my skills, projects, and more.",
    images: ["/webicon.png"],
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