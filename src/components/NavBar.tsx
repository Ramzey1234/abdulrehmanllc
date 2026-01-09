"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { dynamicCategories, categoryLabels } from "./Products";
import { ShoppingBag, Menu, X, ChevronDown, Leaf } from "lucide-react";

export function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const mainNav = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggle = () => setOpen((v) => !v);
  const close = () => {
    setOpen(false);
    setShowCategories(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-emerald-100/50"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="container-page">
        {/* Main Navigation Bar */}
        <div className="flex items-center justify-between h-20 px-4 md:px-8">
          {/* Logo with Icon */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-200/50 group-hover:shadow-emerald-300/70 transition-all duration-300 group-hover:scale-110">
              <Leaf className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-semibold text-emerald-900 tracking-tight leading-none">
                Abdul Rehman
              </span>
              <span className="text-xs text-emerald-600 font-light tracking-wider">
                NATURE'S ELEGANCE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNav.map((item, index) => {
              const active = pathname === item.href;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg ${
                      active
                        ? "text-emerald-700"
                        : "text-gray-700 hover:text-emerald-600"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}

            {/* Categories Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowCategories(true)}
              onMouseLeave={() => setShowCategories(false)}
            >
              <button className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors rounded-lg">
                Categories
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showCategories ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {showCategories && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl shadow-emerald-100/50 border border-emerald-100 overflow-hidden"
                  >
                    <div className="p-2">
                      <Link
                        href="/shop?category=all"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors font-medium"
                        onClick={() => setShowCategories(false)}
                      >
                        All Products
                      </Link>
                      {dynamicCategories.map((cat) => (
                        <Link
                          key={cat}
                          href={`/shop?category=${cat}`}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                          onClick={() => setShowCategories(false)}
                        >
                          {categoryLabels[cat]}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Section: Cart & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <Link
              href="/cart"
              className="relative p-2.5 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-all duration-300 group"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg">
                0
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggle}
              className="lg:hidden p-2.5 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-all"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-emerald-100"
            >
              <nav className="px-4 py-6 space-y-2">
                {mainNav.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={close}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        active
                          ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-200/50"
                          : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                {/* Mobile Categories */}
                <div className="pt-4 border-t border-emerald-100">
                  <p className="px-4 py-2 text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                    Categories
                  </p>
                  <Link
                    href="/shop?category=all"
                    onClick={close}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                  >
                    All Products
                  </Link>
                  {dynamicCategories.map((cat) => (
                    <Link
                      key={cat}
                      href={`/shop?category=${cat}`}
                      onClick={close}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                    >
                      {categoryLabels[cat]}
                    </Link>
                  ))}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
