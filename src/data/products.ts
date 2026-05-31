export interface Product {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  price: number;
  image: string;
  benefits: string[];
  usage: string;
}

export const products: Product[] = [
  {
    id: "1kg",
    name: "1 KG Pack",
    description: "Perfect for home gardens, potted plants, and kitchen gardens. Improves soil health naturally.",
    detailedDescription: "Erganic Farms Premium 1 KG Pack is perfect for indoor plants, container gardening, and small kitchen vegetable beds. It is processed scientifically under controlled environments to deliver maximum nutrition, containing millions of beneficial soil microbes that revive depleted soil structures.",
    price: 149,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/matt-copy-front.jpg-resized-1769707932273.jpeg?width=800&height=800&resize=contain",
    benefits: [
      "100% Organic & Odorless",
      "Increases soil aeration and drainage",
      "Contains trace minerals for vibrant foliage",
      "Safe for all house plants and succulent mixes"
    ],
    usage: "Add 2-3 tablespoons (about 50g) to a medium-sized pot once a month. Gently rake into the topsoil and water lightly."
  },
  {
    id: "2kg",
    name: "2 KG Pack",
    description: "Balanced nutrition for terrace gardens and small green spaces.",
    detailedDescription: "Our 2 KG Pack provides the perfect volume of nutrient-dense vermicompost for balcony gardeners, terrace growers, and flower bed maintainers. Rich in humic acids, it promotes vibrant blooms, healthy growth, and robust root structures without synthetic additives.",
    price: 279,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/matt-copy-front.jpg-resized-1769707932273.jpeg?width=800&height=800&resize=contain",
    benefits: [
      "Rich in organic carbon and humus",
      "Improves nutrient uptake of flowering plants",
      "Enhances water-retention capacity of container soil",
      "Promotes earthworm activity in organic beds"
    ],
    usage: "Spread a 1-inch layer of vermicompost over the potting mix. Mix it into the top 2 inches of soil, then water thoroughly."
  },
  {
    id: "5kg",
    name: "5 KG Pack",
    description: "Supports stronger root development and improved flowering.",
    detailedDescription: "Designed for mid-sized lawn maintenance, home orchards, and vegetable plots, our 5 KG Pack offers a generous supply of premium, double-sifted vermicompost. It supplies plants with a slow-release form of nitrogen, phosphorus, and potassium, ensuring steady nourishment.",
    price: 599,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/matt-copy-front.jpg-resized-1769707932273.jpeg?width=800&height=800&resize=contain",
    benefits: [
      "Provides sustained nutrition for up to 8 weeks",
      "Minimizes transplant shock for seedlings",
      "Accelerates germination rates of new seeds",
      "Restores microbial diversity in depleted garden soil"
    ],
    usage: "Mix 1 part vermicompost with 3 parts soil when preparing potting media, or apply 200g-300g per plant for established shrubs."
  },
  {
    id: "10kg",
    name: "10 KG Pack",
    description: "Professional-grade nutrition suited for nurseries and cultivation.",
    detailedDescription: "The 10 KG Pack is the ideal choice for professional nursery operators, landscapers, and organic market gardeners. This clean, fully aged, and sifted vermicompost ensures uniform distribution, optimal water retention, and high germination efficiency for commercial crop beds.",
    price: 1099,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/matt-copy-front.jpg-resized-1769707932273.jpeg?width=800&height=800&resize=contain",
    benefits: [
      "Double-sifted, debris-free organic compost",
      "High concentration of plant growth hormones",
      "Suppresses soil-borne plant diseases naturally",
      "Optimized for professional plant nursery mixes"
    ],
    usage: "Incorporate 500g per square meter of garden bed area. Work it into the top soil before planting, or apply around the root zone of nursery saplings."
  },
  {
    id: "20kg",
    name: "20 KG Pack",
    description: "Bulk organic nutrition for farms and large-scale cultivation.",
    detailedDescription: "For commercial farming, extensive landscape installations, and community gardens, the 20 KG Bulk Pack delivers outstanding value. It is packed in heavy-duty, moisture-resistant bags to preserve the vitality of beneficial microbes and ensure high-potency soil enhancement over larger acreage.",
    price: 1999,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/matt-copy-front.jpg-resized-1769707932273.jpeg?width=800&height=800&resize=contain",
    benefits: [
      "Cost-effective bulk agricultural packing",
      "Sustains soil structure for long-term farm cultivation",
      "Reduces water requirements by holding up to 9x its weight in water",
      "Rich in natural NPK and humic acid profiles"
    ],
    usage: "Apply 1kg to 2kg per fruit tree annually, or apply 500kg per acre of agricultural land during land preparation."
  }
];
