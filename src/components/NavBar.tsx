"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { dynamicCategories, categoryLabels } from "./Products";

export function NavBar() {
  const router = useRouter();

  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const mainNav = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
  ];

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-xl border-b border-[#e6dcd7]">
      <div className="container-page h-16 flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          <Link
            href="/"
            className="text-xl md:text-3xl font-light tracking-tight text-[#2f2423] hover:text-[#7a4b47] transition"
          >
            Idrees<span className="text-[#7a4b47]"> Store</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation (visible from md) */}
        <nav
          className="hidden md:flex items-center gap-1 md:gap-2"
          aria-label="Primary"
        >
          {mainNav.map((item, index) => {
            const active = pathname === item.href;

            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, delay: index * 0.04 }}
              >
                <Link
                  href={item.href}
                  className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-light transition-all duration-300 ${
                    active
                      ? "bg-[#7a4b47] text-white shadow-md shadow-[#7a4b47]/20"
                      : "text-[#5c4a47] hover:bg-[#f9ece9] hover:text-[#7a4b47]"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            );
          })}
          {/* Category Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.15 }}
            className="relative"
          >
            <select
              onChange={(e) => {
                const c = e.target.value;
                const params = new URLSearchParams(window.location.search);
                const sort = params.get("sort") || "default";
                window.location.href = `/shop?page=1&sort=${sort}&category=${c}`;
              }}
              className="px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-light text-[#5c4a47] bg-white border border-[#e6dcd7] hover:border-[#7a4b47] transition cursor-pointer"
              defaultValue={
                typeof window !== "undefined"
                  ? new URLSearchParams(window.location.search).get(
                      "category"
                    ) || "all"
                  : "all"
              }
            >
              <option value="all">All Products</option>

              {dynamicCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {categoryLabels[cat]}
                </option>
              ))}
            </select>
          </motion.div>
        </nav>

        {/* Right Section: Contact & Cart (desktop) + Mobile menu button */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Contact Button - hide on small to save space */}
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.12 }}
            className="hidden md:block"
          >
            <Link
              href="/contact"
              className="px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-light bg-[#7a4b47] text-white hover:bg-[#6a3f3b] shadow-md shadow-[#7a4b47]/20 hover:shadow-lg transition-all duration-300"
            >
              Contact
            </Link>
          </motion.div>

          {/* Cart Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.28, delay: 0.16 }}
          >
            <Link
              href="/cart"
              aria-label="Cart"
              title="Shopping Cart"
              className="inline-flex items-center justify-center p-2 md:p-2.5 rounded-full text-[#7a4b47] hover:bg-[#f9ece9] transition-all duration-300 group relative overflow-visible"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 transform-gpu origin-center transition-transform"
                style={{ willChange: "transform" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M3 11h18l-1 9a2 2 0 01-2 2H6a2 2 0 01-2-2l-1-9z"
                />
              </svg>
              <span className="sr-only">Cart</span>
            </Link>
          </motion.div>

          {/* Mobile menu button (visible on small screens) */}
          <button
            onClick={toggle}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-full text-[#2f2423] hover:bg-[#f3e9e7] transition"
            title="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden transition-max-h duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pb-6">
          <nav className="mt-2 flex flex-col gap-2" aria-label="Mobile Primary">
            {mainNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className={`w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition ${
                    active
                      ? "bg-[#7a4b47] text-white"
                      : "text-[#5c4a47] hover:bg-[#f9ece9]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <select
              onChange={(e) => {
                const c = e.target.value;
                const params = new URLSearchParams(window.location.search);
                const sort = params.get("sort") || "default";
                close();
                router.push(`/shop?page=1&sort=${sort}&category=${c}`);
              }}
              className="w-full px-4 py-2 rounded-xl text-sm font-medium bg-white border border-[#e6dcd7] text-[#5c4a47] focus:border-[#7a4b47] transition cursor-pointer"
              defaultValue={
                typeof window !== "undefined"
                  ? new URLSearchParams(window.location.search).get(
                      "category"
                    ) || "all"
                  : "all"
              }
            >
              <option value="all">All Products</option>
              {dynamicCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {categoryLabels[cat]}
                </option>
              ))}
            </select>

            <Link
              href="/contact"
              onClick={close}
              className="w-full text-left px-4 py-2 rounded-xl text-sm font-medium text-[#2f2423] hover:bg-[#f9ece9]"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
