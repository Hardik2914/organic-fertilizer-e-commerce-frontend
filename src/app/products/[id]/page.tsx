"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Leaf } from "lucide-react";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = React.use(params);
  const productId = resolvedParams.id;
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between">
        <Header />
        <main className="pt-40 pb-32 flex-grow flex flex-col items-center justify-center">
          <div className="text-center max-w-md px-6">
            <h1 className="text-4xl font-black uppercase mb-4">Pack Not Found</h1>
            <p className="text-zinc-500 mb-8 font-medium">The product packaging size you are looking for does not exist or has been moved.</p>
            <Link href="/products" className="inline-flex px-8 py-4 bg-zinc-900 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-green-800 transition">
              Back to Products
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-green-100 selection:text-green-900">
      <Header />

      <main className="pt-40 pb-32">
        <div className="container mx-auto px-6">
          
          {/* Back Navigation */}
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-green-800 transition mb-12"
          >
            <ArrowLeft size={16} /> Back to products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left: Product Image */}
            <div className="lg:col-span-6 relative aspect-square bg-zinc-50 rounded-[3rem] overflow-hidden p-12 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-contain"
                />
              </motion.div>
            </div>

            {/* Right: Product details */}
            <div className="lg:col-span-6 space-y-10">
              <div>
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-green-700 block mb-3">
                  Scientifically Processed
                </span>
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-zinc-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-2xl font-bold text-green-800">
                  ₹{product.price}
                </p>
              </div>

              <div className="prose prose-zinc leading-relaxed text-zinc-600 font-medium">
                <p>{product.detailedDescription}</p>
              </div>

              {/* Inquiry Action Section */}
              <div className="pt-6 border-t border-zinc-100">
                <Link 
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex items-center justify-center gap-3 bg-zinc-900 text-white px-10 py-4 rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-green-800 transition shadow-lg shadow-zinc-100"
                >
                  Inquire Now
                </Link>
              </div>

              {/* Benefits Checklist */}
              <div className="pt-8 border-t border-zinc-100">
                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Key Benefits</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-zinc-700">
                      <span className="w-5 h-5 rounded-full bg-green-50 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} />
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Usage Instructions */}
              <div className="p-6 bg-zinc-50 rounded-2xl flex gap-4 items-start border border-zinc-100">
                <div className="p-3 bg-green-50 text-green-700 rounded-xl flex-shrink-0">
                  <Leaf size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-800 mb-2 flex items-center gap-1.5">
                    How to Use
                  </h4>
                  <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                    {product.usage}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
