"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-white border border-zinc-100 rounded-[2rem] overflow-hidden p-6 hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-full"
    >
      <div>
        {/* Image Container with hover overlay */}
        <div className="relative aspect-square w-full bg-zinc-50 rounded-2xl overflow-hidden mb-6 flex items-center justify-center p-8">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="object-contain transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Quick Actions Hover Overlay */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <Link
              href={`/products/${product.id}`}
              className="w-12 h-12 rounded-full bg-white text-zinc-900 flex items-center justify-center shadow-lg hover:bg-green-800 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
            >
              <Eye size={18} />
            </Link>
          </div>
        </div>

        {/* Product Info */}
        <div className="px-2">
          <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-green-700 block mb-2">
            Erganic Farms
          </span>
          <Link href={`/products/${product.id}`} className="block group/title">
            <h3 className="text-xl font-black uppercase text-zinc-900 group-hover/title:text-green-800 transition-colors tracking-tight">
              {product.name}
            </h3>
          </Link>
          <p className="text-zinc-500 text-sm leading-relaxed mt-2 line-clamp-2">
            {product.description}
          </p>
        </div>
      </div>

      {/* Price & Details Link */}
      <div className="px-2 pt-6 mt-6 border-t border-zinc-50 flex items-center justify-between gap-4">
        <div>
          <span className="text-[9px] font-bold tracking-widest text-zinc-400 block uppercase">
            Price
          </span>
          <span className="text-lg font-bold text-green-900">
            ₹{product.price}
          </span>
        </div>

        <Link
          href={`/products/${product.id}`}
          className="flex items-center justify-center gap-2 bg-zinc-900 text-white px-5 py-3 rounded-xl font-bold uppercase tracking-wider text-[9px] hover:bg-green-800 transition-all duration-300 shadow-sm"
        >
          Details
        </Link>
      </div>
    </motion.div>
  );
}
