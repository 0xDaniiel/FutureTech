import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Future Tech | AI News, Trends & Innovations",
  description:
    "Stay ahead with Future Tech. your go-to blog for AI trends, latest innovations, and expert insights on artificial intelligence.",
  icons: {
    icon: "/images/futureTech.svg",
  },
  keywords:
    "AI, artificial intelligence, AI news, AI trends, machine learning, future tech, technology",
  authors: [
    { name: "Daniel Chimezie ", url: "https://danieltriedcoding.vercel.app/" },
  ],
  robots: "index, follow",
  openGraph: {
    title: "Future Tech | AI News & Innovations",
    description:
      "Explore the latest in AI trends, machine learning, and futuristic technologies.",
    siteName: "Future Tech",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black`}>
        <Header />
        <div className="relative z-0">{children}</div>{" "}
        {/* Ensures content is above background */}
      </body>
    </html>
  );
}
