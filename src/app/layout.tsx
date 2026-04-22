import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdul Rehman Store LLC — Modern Luxury & Timeless Style",
  description:
    "Experience the pinnacle of modern luxury. Abdul Rehman Store LLC brings premium craftsmanship and timeless aesthetics to your everyday life.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Abdul Rehman Store LLC",
    description:
      "Modern luxury and timeless style. Elevate your everyday with premium craftsmanship.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rehman Store LLC",
    description:
      "Modern luxury and timeless style. Elevate your everyday with premium craftsmanship.",
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

