import { Footer } from "@/components/CTASection";
export default function AboutPage() {
  return (
    <div
      className="bg-no-repeat bg-bottom"
      style={{
        // backgroundImage: `url('/assets/images/beige.webp')`,
        backgroundSize: "100%",
      }}
    >
      <section className="relative py-24">
        {/* Soft background texture */}
        <div className="absolute inset-0 opacity-[0.12] bg-[url('/assets/images/paper-texture.png')] bg-repeat pointer-events-none" />
        <div className="container-page relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <h1 className="text-5xl font-light tracking-tight text-[#064e3b] animate-textIn">
              About Abdul Rehman Store
            </h1>
            <p className="mt-5 text-lg text-[#065f46] leading-relaxed max-w-3xl animate-textInSlow">
              Abdul Rehman Store was established to bring you closer to nature
              through quality and elegance. We believe in providing products
              that not only serve a purpose but also enhance your lifestyle with
              a touch of serenity and grace.
            </p>
            <p className="mt-4 text-[#065f46] leading-relaxed max-w-3xl animate-textInSlower">
              Our collection is curated with care, focusing on sustainable
              materials, timeless designs, and exceptional craftsmanship. From
              home decor to personal care, every item in our store is chosen to
              reflect our commitment to excellence and our respect for the
              environment.
            </p>
            {/* Decorative Divider */}
            <div className="mt-16 h-[1px] w-full bg-[#a7f3d0]"></div>
            {/* Extra section */}
            <div className="mt-12 max-w-3xl">
              <h2 className="text-3xl font-light text-[#064e3b]">
                A commitment to quality
              </h2>
              <p className="mt-4 text-[#065f46] leading-relaxed">
                We take pride in our selection process, ensuring that every
                product meets our high standards. Whether you are looking for a
                gift or something for yourself, you can trust Abdul Rehman Store
                to deliver satisfaction and style.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
