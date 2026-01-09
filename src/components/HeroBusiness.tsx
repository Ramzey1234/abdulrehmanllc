import Link from "next/link";

export function HeroBusiness() {
  return (
    <section className="relative w-full h-[60vh] flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/images/hero.jpg')" }}
      />

      {/* Soft cosmetic overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-200/40 via-rose-100/25 to-transparent" />

      {/* Content */}
      <div className="relative w-full h-full flex items-center">
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 pl-10 md:pl-20 lg:pl-28 py-6 max-w-2xl">
          {/* Tagline */}
          <p className="text-sm tracking-wider font-light text-[#7a4b47]">
            Beauty begins here
          </p>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-[#4a2e2b] drop-shadow-sm">
            Elevate your glow with luxury care.
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg leading-relaxed font-light text-[#5e3a37] max-w-xl">
            Discover skincare crafted to nourish, hydrate, and leave your skin
            luminous. Pure ingredients, gentle formulas, effortless beauty.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-1">
            <Link
              href="/shop"
              className="px-7 py-3 rounded-full bg-[#7a4b47] text-[#f9ece9] font-medium shadow-md shadow-[#7a4b47]/30 hover:bg-[#673d3a] transition"
            >
              Shop now
            </Link>

            <Link
              href="/about"
              className="px-7 py-3 rounded-full border border-[#7a4b47] text-[#4a2e2b] bg-[#fdf5f4]/70 backdrop-blur-sm hover:bg-[#f9e5e1] hover:text-[#673d3a] transition"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
