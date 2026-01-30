"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Leaf } from "lucide-react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Background animations
  const leaf1Y = useTransform(smoothProgress, [0, 1], [0, -1000]);
  const leaf1Rotate = useTransform(smoothProgress, [0, 1], [0, 180]);
  const leaf2Y = useTransform(smoothProgress, [0, 1], [0, -800]);
  const leaf2Rotate = useTransform(smoothProgress, [0, 1], [0, -120]);

  const productImg = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/matt-copy-front.jpg-resized-1769707932273.jpeg?width=800&height=800&resize=contain";

  return (
    <div ref={containerRef} className="relative min-h-screen bg-white text-zinc-900 overflow-x-hidden selection:bg-green-100 selection:text-green-900">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Floating Background Plants */}
        <motion.div 
          style={{ y: leaf1Y, rotate: leaf1Rotate }}
          className="absolute top-20 left-[5%] text-green-50 opacity-[0.4] pointer-events-none"
        >
          <Leaf size={400} />
        </motion.div>
        
        <motion.div 
          style={{ y: leaf2Y, rotate: leaf2Rotate }}
          className="absolute bottom-20 right-[5%] text-green-50 opacity-[0.4] pointer-events-none"
        >
          <Leaf size={350} />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] md:text-[9vw] font-black tracking-[-0.06em] lineage-[0.8] text-zinc-900 mb-12 uppercase"
            >
              Soil <span className="text-green-800 font-serif tracking-normal uppercase">FOR</span><br />
              the <span className="relative">Soul<motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute bottom-4 left-0 h-[0.1em] bg-green-800/20 -z-10"
              /></span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
            >
              At Erganic Farms, we manufacture premium-quality organic fertilisers with a strong focus on scientifically processed vermicompost.
            </motion.p>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-400 rotate-90 origin-left translate-x-1">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-zinc-200 to-transparent"></div>
        </motion.div>
      </section>

      {/* Brand Intro / Mission */}
      <section className="py-40 bg-zinc-50 border-y border-zinc-100 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-green-700 mb-8 block">Our Commitment</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-8 uppercase">
                Cultivating a <br />
                <span className="text-green-800 font-serif uppercase tracking-normal">greener</span> future
              </h2>
              <p className="text-zinc-600 text-lg leading-relaxed mb-10">
                Erganic Farms is a leading manufacturer of organic fertilisers, specialising in high-grade vermicompost. With a commitment to sustainability and quality, we combine natural processes with modern manufacturing standards to support healthier soils and higher yields.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-black text-zinc-900 mb-2">100%</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Organic Matter</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-zinc-900 mb-2">Eco</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Conscious Practices</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-green-100 rounded-[3rem] rotate-3 scale-95" />
              <div className="absolute inset-0 bg-zinc-200 rounded-[3rem] -rotate-3 scale-95" />
              <div className="relative h-full w-full bg-white rounded-[3rem] overflow-hidden border border-zinc-100 shadow-2xl flex items-center justify-center p-12 group">
                <Image
                  src={productImg}
                  alt="Erganic Farms Vermicompost"
                  width={600}
                  height={600}
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-40 bg-[#2b1f14] text-white overflow-hidden relative">
        <motion.div 
          style={{ x: useTransform(smoothProgress, [0.3, 0.7], [200, -200]) }}
          className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none whitespace-nowrap text-[30vh] font-black uppercase flex items-center"
        >
          VERMICOMPOST VERMICOMPOST VERMICOMPOST
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="flex-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-green-400 mb-8 block">Product Spotlight</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9]">
                PREMIUM <br />
                <span className="text-green-400 font-serif uppercase tracking-normal">vermi</span><br />
                COMPOST
              </h2>
              <p className="text-zinc-400 text-lg mb-12 leading-relaxed max-w-lg">
                Manufactured through controlled vermi-processing using high-quality organic matter. Rich in essential macro and micro nutrients, beneficial microbes, and natural growth promoters.
              </p>
              <Link href="/products" className="inline-flex px-12 py-6 bg-white text-zinc-900 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-green-400 transition-all gap-3 items-center group">
                Shop All Packs <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="flex-1 relative">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Image
                  src={productImg}
                  alt="Premium Vermicompost"
                  width={700}
                  height={700}
                  className="object-contain drop-shadow-[0_35px_35px_rgba(255,255,255,0.1)]"
                />
              </motion.div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#7a4a2e]/30 blur-[120px] blur-[120px] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="py-40 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter mb-12 leading-[0.85] uppercase">
              Join the <br />
              <span className="text-green-800 font-serif uppercase tracking-normal">organic</span><br />
              movement
            </h2>
            <p className="text-zinc-500 text-xl mb-16 max-w-2xl mx-auto font-medium">
              Trusted by farmers, landscapers, and agri-businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="text-left p-8 bg-zinc-50 rounded-[2rem] border border-zinc-100 flex-1 w-full">
                <h4 className="text-xs font-bold uppercase tracking-widest text-green-800 mb-4">Domestic</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">Serving farmers and gardeners across the nation with purity and performance.</p>
              </div>
              <div className="text-left p-8 bg-zinc-50 rounded-[2rem] border border-zinc-100 flex-1 w-full">
                <h4 className="text-xs font-bold uppercase tracking-widest text-green-800 mb-4">International</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">Reliable organic solutions designed for global export and sustainable scale.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
