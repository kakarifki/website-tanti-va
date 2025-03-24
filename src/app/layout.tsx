import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tanti Pujian's Website",
  description: "Your Personal Virtual Assistant",
  openGraph: {
    title: "Tanti Pujian - Virtual Assistant",
    description: "Professional Virtual Assistant services including administrative support, social media management, and customer support.",
    url: "https://tantipujian.vercel.app",
    siteName: "Tanti Pujian VA",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tanti Pujian - Personal Virtual Assistant"
      }
    ],
    locale: "en_ID",
    type: "website"
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Tanti Pujian's Website",
  //   description: "Your Personal Virtual Assistant",
  //   images: ["/og-image.jpg"],
  //   creator: "@tantipujian"
  // },
  metadataBase: new URL("https://tantipujian.vercel.app")
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
