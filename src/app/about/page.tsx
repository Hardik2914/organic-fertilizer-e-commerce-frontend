"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Leaf, Sprout, ShieldCheck, Factory } from "lucide-react";
import Image from "next/image";

export default function About() {
  const productImg = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/matt-copy-front.jpg-resized-1769707932273.jpeg?width=800&height=800&resize=contain";

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-green-100 selection:text-green-900">
      <Header />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-24 border-b border-zinc-100">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-green-700 mb-8 block">Our Story</span>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-12 uppercase">
                Cultivating <br />
                <span className="text-green-800 italic font-serif lowercase tracking-normal">excellence</span><br />
                in every batch
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div className="space-y-12">
                <div className="prose prose-zinc prose-lg">
                  <p className="text-2xl font-medium leading-relaxed text-zinc-600">
                    Erganic Farms is a leading manufacturer of organic fertilisers, specialising in high-grade vermicompost.
                  </p>
                  <p className="text-zinc-500 leading-relaxed">
                    With a commitment to sustainability and quality, we combine natural processes with modern manufacturing standards to support healthier soils and higher yields. Our mission is to empower agriculture with clean, effective, and environmentally responsible nutrition solutions for a greener future.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-zinc-100">
                  <div className="group">
                    <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-800 group-hover:text-white transition-all">
                      <Factory size={20} />
                    </div>
                    <h3 className="font-bold text-xs uppercase tracking-widest mb-4">State-of-the-art</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">Produced at our facility, following strict quality standards and eco-conscious practices.</p>
                  </div>
                  <div className="group">
                    <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-800 group-hover:text-white transition-all">
                      <ShieldCheck size={20} />
                    </div>
                    <h3 className="font-bold text-xs uppercase tracking-widest mb-4">Purity & Performance</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">Rich in essential nutrients and beneficial microbes that improve soil structure.</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] bg-zinc-50 rounded-[3rem] overflow-hidden relative">
                  <Image
                    src={productImg}
                    alt="Erganic Farms Process"
                    fill
                    className="object-contain p-12 mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="absolute -bottom-12 -left-12 bg-green-900 text-white p-12 rounded-[2rem] max-w-xs hidden md:block">
                  <Leaf className="mb-6 text-green-400" />
                  <p className="text-sm font-medium leading-relaxed">
                    "We follow strict quality standards to ensure consistency, purity, and performance in every batch."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-32 bg-zinc-50">
          <div className="container mx-auto px-6 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 mb-12 block">Trusted Worldwide</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
              {[
                { label: "Farmers", value: "Trusted by thousands of small and large scale farmers." },
                { label: "Agri-businesses", value: "Reliable partner for commercial agricultural solutions." },
                { label: "Landscapers", value: "Preferred choice for premium soil conditioning." },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">{item.label}</h4>
                  <div className="w-12 h-1 bg-green-800 mb-6" />
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
