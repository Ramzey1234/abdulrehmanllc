"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Footer } from "@/components/CTASection";
import { sendContactEmail } from "@/app/actions";

const faqs = [
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship globally. All international orders are tracked and insured to ensure they arrive safely at your sanctuary.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of delivery. Items must be unused and in their original packaging. We believe in hassle-free peace of mind.",
  },
  {
    question: "Are your products eco-friendly?",
    answer:
      "Sustainability is at our core. We use recycled materials for packaging and ethically source all ingredients and materials.",
  },
  {
    question: "Can I collaborate with your brand?",
    answer:
      "We love partnering with like-minded creators. Please fill out the form above with 'Collaboration' as the subject.",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState<{
    status: "idle" | "submitting" | "success" | "error";
    message: string;
  }>({ status: "idle", message: "" });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: "submitting", message: "" });

    const formData = new FormData(e.target as HTMLFormElement);
    const result = await sendContactEmail(formData);

    if (result.success) {
      setFormState({ status: "success", message: result.message });
      (e.target as HTMLFormElement).reset();
    } else {
      setFormState({ status: "error", message: result.message });
    }
  };

  return (
    <div className="bg-[#faf8f6]">
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#f2e6e1]/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-[#e8dcd9]/40 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="container-page relative z-10 max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs font-bold tracking-[0.25em] text-[#7a4b47] uppercase mb-5"
            >
              Connect With Us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-light text-[#2f2423] mb-8 tracking-tight"
            >
              Let&apos;s create something beautiful.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-[#6a5854] font-light leading-relaxed max-w-2xl mx-auto"
            >
              We are always open to new ideas, collaborations, and stories. Tell
              us what&apos;s on your mind.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch mb-32">
            {/* Left Column: Visual & Aesthetic Content (5cols) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 flex flex-col gap-8 h-full"
            >
              {/* Image Card */}
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group flex-grow min-h-[400px]">
                <Image
                  src="/assets/images/vase.avif"
                  alt="Aesthetic Vase"
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <p className="font-serif text-2xl md:text-3xl italic opacity-90 mb-2">
                    &quot;Simplicity is the ultimate sophistication.&quot;
                  </p>
                  <p className="text-sm font-medium tracking-widest opacity-80 uppercase">
                    — The Studio
                  </p>
                </div>
              </div>

              {/* Social/Link Block */}
              <div className="bg-white rounded-[2rem] p-8 border border-[#efe8e6] shadow-sm flex flex-col justify-center">
                <h3 className="text-[#2f2423] text-lg font-medium mb-4">
                  Follow our Journey
                </h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center justify-between group py-2 border-b border-[#f2e8e6] hover:border-[#7a4b47] transition-colors"
                  >
                    <span className="text-[#6a5854] group-hover:text-[#7a4b47] transition-colors">
                      Instagram
                    </span>
                    <span className="text-[#d8c4c0] group-hover:text-[#7a4b47] transition-colors">
                      ↗
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-between group py-2 border-b border-[#f2e8e6] hover:border-[#7a4b47] transition-colors"
                  >
                    <span className="text-[#6a5854] group-hover:text-[#7a4b47] transition-colors">
                      Pinterest
                    </span>
                    <span className="text-[#d8c4c0] group-hover:text-[#7a4b47] transition-colors">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Form (7cols) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_25px_50px_rgba(0,0,0,0.03)] border border-[#f5efed] relative overflow-hidden flex flex-col justify-center"
            >
              <div className="mb-10">
                <h2 className="text-3xl font-light text-[#2f2423] mb-3">
                  Send a Message
                </h2>
                <p className="text-[#8c7a76] font-light">
                  Inquiries, feedback, or just sharing the love.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full py-4 bg-transparent border-b border-[#e0d0cc] text-[#2f2423] placeholder-transparent focus:outline-none focus:border-[#7a4b47] transition-all peer"
                      id="name"
                      placeholder="Name"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-3.5 text-xs text-[#7a4b47] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#a38e8a] peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#7a4b47]"
                    >
                      Your Name
                    </label>
                  </div>
                  <div className="relative group">
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full py-4 bg-transparent border-b border-[#e0d0cc] text-[#2f2423] placeholder-transparent focus:outline-none focus:border-[#7a4b47] transition-all peer"
                      id="email"
                      placeholder="Email"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-xs text-[#7a4b47] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#a38e8a] peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#7a4b47]"
                    >
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="relative group">
                  <input
                    name="subject"
                    type="text"
                    className="w-full py-4 bg-transparent border-b border-[#e0d0cc] text-[#2f2423] placeholder-transparent focus:outline-none focus:border-[#7a4b47] transition-all peer"
                    id="subject"
                    placeholder="Subject"
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-0 -top-3.5 text-xs text-[#7a4b47] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#a38e8a] peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#7a4b47]"
                  >
                    Subject (Optional)
                  </label>
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full py-4 bg-transparent border-b border-[#e0d0cc] text-[#2f2423] placeholder-transparent focus:outline-none focus:border-[#7a4b47] transition-all peer resize-none"
                    id="message"
                    placeholder="Message"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 -top-3.5 text-xs text-[#7a4b47] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#a38e8a] peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#7a4b47]"
                  >
                    Tell us more...
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={formState.status === "submitting"}
                    className="inline-flex items-center justify-center px-10 py-4 bg-[#2f2423] text-white rounded-full font-medium tracking-wide hover:bg-[#4a3a38] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {formState.status === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>

                {formState.status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-red-800 bg-red-50 px-6 py-4 rounded-xl border border-red-100 flex items-center gap-3 mt-4"
                  >
                    <span className="text-xl">⚠️</span>
                    <p className="font-medium">{formState.message}</p>
                  </motion.div>
                )}

                {formState.status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-green-800 bg-green-50 px-6 py-4 rounded-xl border border-green-100 flex items-center gap-3"
                  >
                    <span className="text-xl">✨</span>
                    <p className="font-medium">{formState.message}</p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>

          {/* New Content: FAQ Section */}
          <div className="max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-light text-[#2f2423] mb-4">
                Common Questions
              </h3>
              <p className="text-[#6a5854] font-light">
                Everything you need to know about our products and services.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-[#efe8e6] overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-lg text-[#2f2423] font-medium">
                      {faq.question}
                    </span>
                    <span
                      className={`text-[#7a4b47] transform transition-transform duration-300 ${
                        openFaq === index ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-[#6a5854] leading-relaxed font-light">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
