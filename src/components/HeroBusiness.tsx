import Link from "next/link";

export function HeroBusiness() {
  return (
    <section className="relative w-full h-[60vh] flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/images/banner.jpg')" }}
      />

      {/* Soft cosmetic overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-200/40 via-neutral-100/25 to-transparent" />

      {/* Content */}
      <div className="relative w-full h-full flex items-center">
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 pl-10 md:pl-20 lg:pl-28 py-6 max-w-2xl">
          {/* Tagline */}
          <p className="text-sm tracking-wider font-light text-[#c5a059]">
            Luxury begins here
          </p>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-[#171717] drop-shadow-sm">
            Elevate your lifestyle with modern luxury.
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg leading-relaxed font-light text-[#404040] max-w-xl">
            Discover premium products crafted to refine, inspire, and leave your
            space luminous. Exquisite craftsmanship, timeless design, effortless
            style.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-1">
            <Link
              href="/shop"
              className="px-7 py-3 rounded-full bg-[#c5a059] text-[#fafafa] font-medium shadow-md shadow-[#c5a059]/30 hover:bg-[#d4af37] transition"
            >
              Shop now
            </Link>

            <Link
              href="/about"
              className="px-7 py-3 rounded-full border border-[#c5a059] text-[#171717] bg-[#fafafa]/70 backdrop-blur-sm hover:bg-[#ede9fe] hover:text-[#404040] transition"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
