import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdul Rehman Store — Nature's Elegance for Your Lifestyle",
  description:
    "Discover quality products inspired by nature. Abdul Rehman Store brings elegance and sustainability to your everyday life.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Abdul Rehman Store",
    description:
      "Quality products inspired by nature. Elevate your lifestyle with elegance and grace.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rehman Store",
    description:
      "Quality products inspired by nature. Elevate your lifestyle with elegance and grace.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Allura&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
