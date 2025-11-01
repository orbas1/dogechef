import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DogeChef | The Culinary Frontier of Memecoins",
  description:
    "DogeChef is the gastronomic memecoin, blending culinary creativity with cutting-edge tokenomics for a flavorful Web3 future.",
  metadataBase: new URL("https://dogechef.example"),
  openGraph: {
    title: "DogeChef | Futuristic Culinary Memecoin",
    description:
      "Discover the DogeChef universe—tastefully designed tokenomics, a visionary roadmap, and a vibrant community of flavor futurists.",
    url: "https://dogechef.example",
    siteName: "DogeChef",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "DogeChef aurora logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DogeChef | Futuristic Culinary Memecoin",
    description:
      "Taste the future of crypto with DogeChef's hyper-modern memecoin experience.",
    images: ["/logo.svg"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-950">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 antialiased`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(68,249,255,0.26),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(159,80,255,0.22),transparent_60%),radial-gradient(circle_at_50%_80%,rgba(255,178,77,0.18),transparent_65%)]" />
        </div>
        <div className="relative flex min-h-screen flex-col">
          <NavBar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
