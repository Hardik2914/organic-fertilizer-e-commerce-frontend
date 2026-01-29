"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ShoppingBag, ArrowRight } from "lucide-react";

const products = [
  {
    id: "1kg",
    name: "1 KG Pack",
    tagline: "Small Pack. Powerful Results.",
    description: "Perfect for home gardens, potted plants, and kitchen gardens, the 1 kg pack provides an easy and effective way to nourish plants naturally and improve soil health.",
    price: "₹149",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/matt-copy-front.jpg-resized-1769707932273.jpeg?width=800&height=800&resize=contain"
  },
  {
    id: "2kg",
    name: "2 KG Pack",
    tagline: "Balanced Nutrition for Everyday Gardening.",
    description: "Designed for terrace gardens and small green spaces, the 2 kg pack ensures steady plant growth while enhancing soil structure and microbial activity.",
    price: "₹279",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/matt-copy-front.jpg-resized-1769707932273.jpeg?width=800&height=800&resize=contain"
  },
  {
    id: "5kg",
    name: "5 KG Pack",
    tagline: "For Healthier Plants and Richer Soil.",
    description: "Ideal for serious gardeners and small farms, the 5 kg pack supports stronger root development, improved flowering, and long-term soil fertility.",
    price: "₹599",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/matt-copy-front.jpg-resized-1769707932273.jpeg?width=800&height=800&resize=contain"
  },
  {
    id: "10kg",
    name: "10 KG Pack",
    tagline: "Professional-Grade Organic Nutrition.",
    description: "Suited for nurseries, landscapers, and medium-scale cultivation, the 10 kg pack offers consistent nutrient supply and superior soil conditioning for higher productivity.",
    price: "₹1,099",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/matt-copy-front.jpg-resized-1769707932273.jpeg?width=800&height=800&resize=contain"
  },
  {
    id: "20kg",
    name: "20 KG Pack",
    tagline: "Organic Strength for Large-Scale Growth.",
    description: "Recommended for farmers and commercial agriculture, the 20 kg pack delivers bulk organic nutrition to improve crop yield, soil vitality, and sustainable farm performance.",
    price: "₹1,999",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/matt-copy-front.jpg-resized-1769707932273.jpeg?width=800&height=800&resize=contain"
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-green-100 selection:text-green-900">
      <Header />
      
      <main className="pt-40 pb-32">
        <div className="container mx-auto px-6">
          <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-3xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-green-700 mb-8 block">Shop Collection</span>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase">
                Premium <br />
                <span className="text-green-800 italic font-serif lowercase tracking-normal">vermi</span><br />
                compost
              </h1>
            </div>
            <p className="text-zinc-500 text-sm font-bold uppercase tracking-[0.2em]">
              Showing {products.length} sizes
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] bg-zinc-50 rounded-[2.5rem] overflow-hidden mb-10 group-hover:shadow-2xl transition-all duration-700">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-12 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-8 left-8">
                    <span className="bg-white/90 backdrop-blur px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border border-zinc-100">
                      Erganic Farms
                    </span>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute inset-x-8 bottom-8 flex justify-center"
                  >
                    <button className="w-full bg-zinc-900 text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-[10px] shadow-xl hover:bg-green-800 transition-colors flex items-center justify-center gap-2">
                      <ShoppingBag size={14} /> Add to Cart
                    </button>
                  </motion.div>
                </div>
                
                <div className="px-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-black text-2xl tracking-tighter uppercase group-hover:text-green-800 transition-colors">{product.name}</h3>
                    <p className="font-black text-2xl text-green-800">{product.price}</p>
                  </div>
                  <p className="text-green-700 text-[10px] font-bold uppercase tracking-widest mb-4">{product.tagline}</p>
                  <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 mb-6">{product.description}</p>
                  <div className="w-10 h-px bg-zinc-200 group-hover:w-full transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
