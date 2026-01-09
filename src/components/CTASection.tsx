"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-[#f0fdf4] pt-24 pb-12 border-t border-[#d1fae5]">
      <div className="container-page">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link
              href="/"
              className="font-serif text-3xl text-[#064e3b] tracking-tighter"
            >
              Abdul Rehman Store
            </Link>
            <p className="text-[#065f46] leading-relaxed text-sm">
              Bringing nature's elegance to your everyday. Every piece is chosen
              to elevate your lifestyle with quality and grace.
            </p>
            <div className="flex gap-4">
              {/* Mock Social Icons */}
              {["IG", "FB", "YT", "PIN"].map((social) => (
                <div
                  key={social}
                  className="w-8 h-8 rounded-full border border-[#a7f3d0] flex items-center justify-center text-[10px] text-[#059669] cursor-pointer hover:bg-[#059669] hover:text-white transition-colors"
                >
                  {social}
                </div>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-bold text-[#064e3b] mb-6 uppercase text-xs tracking-widest">
              Shop
            </h4>
            <ul className="space-y-4 text-sm text-[#065f46]">
              <li>
                <Link
                  href="/shop"
                  className="hover:text-[#059669] transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=beauty-self-care"
                  className="hover:text-[#7a4b47] transition-colors"
                >
                  Beauty & Self Care
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=home-kitchen"
                  className="hover:text-[#7a4b47] transition-colors"
                >
                  Home & Kitchen
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=office-products"
                  className="hover:text-[#7a4b47] transition-colors"
                >
                  Office Products
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-[#7a4b47] transition-colors"
                >
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-[#2f2423] mb-6 uppercase text-xs tracking-widest">
              Support
            </h4>
            <ul className="space-y-4 text-sm text-[#6a5854]">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#7a4b47] transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#7a4b47] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#7a4b47] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#7a4b47] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#7a4b47] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-[#2f2423] mb-6 uppercase text-xs tracking-widest">
              Stay Connected
            </h4>
            <p className="text-[#065f46] text-sm mb-4">
              Join our newsletter for exclusive drops and guided rituals.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#d1fae5] text-[#064e3b] focus:outline-none focus:border-[#10b981] text-sm"
              />
              <button className="w-full py-3 bg-[#064e3b] text-white rounded-lg text-sm font-bold uppercase tracking-wide hover:bg-[#065f46] transition-colors shadow-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#d1fae5] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#059669] text-xs">
            © {new Date().getFullYear()} Abdul Rehman Store. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-[#059669] text-xs uppercase tracking-wide">
            <span>Made with care</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
