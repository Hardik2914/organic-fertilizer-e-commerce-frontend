"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

const products = [
  {
    id: "1kg",
    name: "1 KG Pack",
    description:
      "Perfect for home gardens, potted plants, and kitchen gardens. Improves soil health naturally.",
    price: "₹149",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/matt-copy-front.jpg-resized-1769707932273.jpeg?width=800&height=800&resize=contain",
  },
  {
    id: "2kg",
    name: "2 KG Pack",
    description:
      "Balanced nutrition for terrace gardens and small green spaces.",
    price: "₹279",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/matt-copy-front.jpg-resized-1769707932273.jpeg?width=800&height=800&resize=contain",
  },
  {
    id: "5kg",
    name: "5 KG Pack",
    description:
      "Supports stronger root development and improved flowering.",
    price: "₹599",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/matt-copy-front.jpg-resized-1769707932273.jpeg?width=800&height=800&resize=contain",
  },
  {
    id: "10kg",
    name: "10 KG Pack",
    description:
      "Professional-grade nutrition suited for nurseries and cultivation.",
    price: "₹1,099",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/matt-copy-front.jpg-resized-1769707932273.jpeg?width=800&height=800&resize=contain",
  },
  {
    id: "20kg",
    name: "20 KG Pack",
    description:
      "Bulk organic nutrition for farms and large-scale cultivation.",
    price: "₹1,999",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/matt-copy-front.jpg-resized-1769707932273.jpeg?width=800&height=800&resize=contain",
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main className="pt-40 pb-32">
        <div className="container mx-auto px-6">

          {/* OUR PRODUCTS SECTION */}
          <div className="mb-20 text-center">
            <p className="uppercase tracking-[0.4em] text-green-700 text-xs mb-4">
              Erganic Farms
            </p>
            <h1 className="text-5xl md:text-7xl font-black uppercase">
              Our Products
            </h1>
          </div>

          <div className="flex flex-col gap-20">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-12 items-center border-b pb-16"
              >
                {/* Image */}
                <div className="relative aspect-square bg-zinc-50 rounded-3xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-12"
                  />
                </div>

                {/* Details */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-black mb-4">
                    {product.name}
                  </h2>

                  <p className="text-zinc-600 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <p className="text-2xl font-bold text-green-800 mb-8">
                    {product.price}
                  </p>

                  <button className="bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wide hover:bg-green-800 transition flex items-center gap-2">
                    <ShoppingBag size={16} />
                    Add to Cart
                  </button>
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
