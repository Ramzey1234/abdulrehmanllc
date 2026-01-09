import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Idrees Store — Buy New Cosmetics",
  description:
    "A premium demo storefront for LLCs. Built with Next.js + Tailwind.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Idrees Store",
    description: "A premium demo storefront for LLCs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Idrees Store",
    description: "A premium demo storefront for LLCs.",
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
