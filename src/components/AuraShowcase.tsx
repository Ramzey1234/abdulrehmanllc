import Image from "next/image";

export function AuraShowcase() {
  return (
    <section className="relative py-24 md:py-44 overflow-hidden">
      {/* Background wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7e6e3] via-[#fff9f7] to-[#f3e7e4]" />

      {/* Decorative static shape (reduced runtime cost) */}
      <svg
        className="absolute -top-40 right-0 w-[750px] opacity-25 text-[#edcfc8] pointer-events-none"
        viewBox="0 0 200 200"
      >
        <path
          fill="currentColor"
          d="M44.8,-74.3C56.4,-66.9,63.7,-52.9,71.2,-38.4C78.7,-23.9,86.4,-8.9,84.6,4.7C82.8,18.3,71.6,29.5,61.3,40.6C51.1,51.6,41.8,62.6,29.1,67.3C16.3,72,0.2,70.4,-12.5,65.3C-25.2,60.2,-34.4,51.6,-47.1,42.5C-59.8,33.4,-75.9,23.8,-81.6,10.3C-87.3,-3.1,-82.7,-20.5,-72.6,-33.5C-62.5,-46.5,-47,-55.2,-32.1,-61.9C-17.2,-68.6,-8.6,-73.3,4.2,-79.7C17.1,-86.1,34.2,-94.3,44.8,-74.3Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Perfume cluster */}
      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none z-10 overflow-visible">
        {/* Glow (static subtle background) */}
        <div className="absolute bottom-10 right-[6vw] w-[60vw] h-[25vw] bg-[#eac4bc]/60 blur-[100px] rounded-full md:w-[50vw] md:h-[18vw] pointer-events-none" />

        {/* Bottle image - optimized with next/image (improves LCP) */}
        <div className="relative h-[130%] w-auto md:h-[80vh] md:w-[55vw] lg:w-[50vw] md:relative md:right-[-12vw] lg:right-[-18vw] xl:right-[-22vw] max-w-none drop-shadow-[0_60px_85px_rgba(0,0,0,0.2)] pointer-events-none">
          <Image
            src="/assets/images/perfume.png"
            alt="Featured Product"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 55vw, 40vw"
            className="object-contain opacity-40 md:opacity-100"
          />
        </div>
      </div>

      {/* TEXT CONTENT */}
      <div className="container-page relative z-20 max-w-xl">
        {/* Mobile readability gradient - Removed as we are switching to dark text */}

        <h2 className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-[#3f2f2d]">
          A singular moment of
          <span className="text-[#8b5f5a] block md:inline">
            {" "}
            pure radiance.
          </span>
        </h2>

        <p className="relative z-10 mt-6 text-lg md:text-xl leading-relaxed font-normal max-w-md md:max-w-xl text-[#5b4744]">
          Meet the centerpiece of your ritual, crafted to elevate your glow with
          a touch of softness and an air of luxury. Let your skin indulge in the
          refinement it deserves.
        </p>

        <button className="relative z-10 mt-12 px-10 py-4 rounded-full bg-[#7a4b47] text-[#f9ece9] text-lg shadow-lg shadow-[#7a4b47]/40 hover:bg-[#673d3a] transition font-medium motion-reduce:transform-none motion-reduce:transition-none">
          Discover Now
        </button>
      </div>
    </section>
  );
}
