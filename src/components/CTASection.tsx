"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-[#fafafa] pt-24 pb-12 border-t border-[#e5e5e5]">
      <div className="container-page">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link
              href="/"
              className="font-serif text-3xl text-[#171717] tracking-tighter"
            >
              Abdul Rehman Store LLC
            </Link>
            <p className="text-[#404040] leading-relaxed text-sm">
              Elevating your lifestyle with modern luxury. Every piece is chosen
              to bring sophistication and premium quality to your everyday life.
            </p>
            <div className="flex gap-4">
              {/* Mock Social Icons */}
              {["IG", "FB", "YT", "PIN"].map((social) => (
                <div
                  key={social}
                  className="w-8 h-8 rounded-full border border-[#e5e5e5] flex items-center justify-center text-[10px] text-[#c5a059] cursor-pointer hover:bg-[#c5a059] hover:text-white transition-colors"
                >
                  {social}
                </div>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-bold text-[#171717] mb-6 uppercase text-xs tracking-widest">
              Shop
            </h4>
            <ul className="space-y-4 text-sm text-[#404040]">
              <li>
                <Link
                  href="/shop"
                  className="hover:text-[#c5a059] transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=beauty-self-care"
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Beauty & Self Care
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=home-kitchen"
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Home & Kitchen
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=office-products"
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Office Products
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-[#0a0a0a] mb-6 uppercase text-xs tracking-widest">
              Support
            </h4>
            <ul className="space-y-4 text-sm text-[#404040]">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#c5a059] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-[#0a0a0a] mb-6 uppercase text-xs tracking-widest">
              Stay Connected
            </h4>
            <p className="text-[#404040] text-sm mb-4">
              Join our newsletter for exclusive drops and premium updates.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#e5e5e5] text-[#171717] focus:outline-none focus:border-[#d4af37] text-sm"
              />
              <button className="w-full py-3 bg-[#171717] text-white rounded-lg text-sm font-bold uppercase tracking-wide hover:bg-[#404040] transition-colors shadow-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#e5e5e5] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#c5a059] text-xs">
            © {new Date().getFullYear()} Abdul Rehman Store LLC. All rights reserved.
          </p>
          <div className="flex gap-6 text-[#c5a059] text-xs uppercase tracking-wide">
            <span>Crafted with Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
