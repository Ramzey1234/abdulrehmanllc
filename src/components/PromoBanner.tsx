"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PromoBannerProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  variant?: "dark" | "light" | "accent";
  href?: string; // collection URL or shop page
}

export function PromoBanner({
  title,
  subtitle,
  ctaText = "Shop Now",
  variant = "dark",
  href = "/shop",
}: PromoBannerProps) {
  const bgColors = {
    dark: "bg-neutral-900 text-white",
    light: "bg-neutral-100 text-neutral-900",
    accent: "bg-[#7a4b47] text-white",
  };

  return (
    <section className={cn("w-full py-12 md:py-16", bgColors[variant])}>
      <div className="container-page flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h2 className="text-2xl md:text-4xl font-light tracking-tight mb-2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm md:text-base opacity-80 max-w-md">
              {subtitle}
            </p>
          )}
        </div>

        <Link
          href={href}
          className="px-8 py-3 rounded-full border border-current hover:bg-white hover:text-black 
          transition-all duration-300 uppercase text-xs tracking-widest font-medium inline-flex items-center justify-center"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
