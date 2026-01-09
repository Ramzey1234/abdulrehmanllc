import { Footer } from "@/components/CTASection";
export default function AboutPage() {
  return (
    <div
      className="bg-no-repeat bg-bottom"
      style={{
        backgroundImage: `url('/assets/images/beige.webp')`,
        backgroundSize: "100%",
      }}
    >
      <section className="relative py-24">
        {/* Soft background texture */}
        <div className="absolute inset-0 opacity-[0.12] bg-[url('/assets/images/paper-texture.png')] bg-repeat pointer-events-none" />
        <div className="container-page relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <h1 className="text-5xl font-light tracking-tight text-[#3f2f2d] animate-textIn">
              About Idrees Store
            </h1>
            <p className="mt-5 text-lg text-[#6a5854] leading-relaxed max-w-3xl animate-textInSlow">
              Idrees Store was built for founders and operators who prefer
              clarity over clutter. The experience is designed to feel clean,
              corporate, and quietly confident, the type of storefront that says
              “we know what we’re doing” without raising its voice.
            </p>
            <p className="mt-4 text-[#6a5854] leading-relaxed max-w-3xl animate-textInSlower">
              The stack stays intentionally simple. Next.js keeps everything
              fast and predictable, Tailwind maintains visual consistency, and
              the UI components follow a calm, modern aesthetic with enough
              polish to feel premium. Replace the copy, plug in your CRM or
              backend, and you’ve got a sales-ready presence that looks
              trustworthy out of the box.
            </p>
            {/* Decorative Divider */}
            <div className="mt-16 h-[1px] w-full bg-[#e9dcd8]"></div>
            {/* Extra section */}
            <div className="mt-12 max-w-3xl">
              <h2 className="text-3xl font-light text-[#3f2f2d]">
                A storefront that feels serious
              </h2>
              <p className="mt-4 text-[#6a5854] leading-relaxed">
                Whether you’re offering filings, consulting, digital products,
                or anything that benefits from a clean corporate look, this
                design system adapts easily. The colors stay warm and minimal,
                the spacing stays generous, and the tone stays professional
                without feeling stiff.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
