import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const featuredProducts = [
  {
    id: "flores-bajawa",
    name: "Flores Bajawa",
    description: "Chocolate, Tobacco, Spicy notes",
    price: "Rp. 90.000",
    image: "/cover website/Flores.jpg",
    roastLevel: "MEDIUM ROAST",
  },
  {
    id: "gayo-mountain",
    name: "Gayo Mountain",
    description: "Earthy, Cedar, Tropical Fruit",
    price: "Rp. 95.000",
    image: "/cover website/Gayo.jpg",
    roastLevel: "DARK ROAST",
  },
  {
    id: "toraja-kalossi",
    name: "Toraja Kalossi",
    description: "Floral, Lemonade, Herbal undertones",
    price: "Rp. 92.000",
    image: "/cover website/Toraja.jpg",
    roastLevel: "LIGHT ROAST",
  },
];

export default function FeaturedRoasts() {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#2C1B10]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h3 className="text-[#D4A373] text-sm font-bold tracking-wider mb-2">
              OUR SELECTION
            </h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              FEATURED ROASTS
            </h2>
          </div>
          <Link
            href="/products"
            className="text-[#D4A373] text-sm font-bold tracking-widest underline decoration-2 underline-offset-4 hover:text-white transition-colors"
          >
            VIEW ALL COLLECTIONS
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group border border-[#E5E0D8] rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F5F5F5]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Roast Label */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                  <span className="text-[#2C1B10] text-xs font-bold tracking-wider">
                    {product.roastLevel}
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h4 className="text-xl font-bold text-[#2C1B10] mb-2 group-hover:text-[#D4A373] transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-sm text-[#8C7A6B] mb-6 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#F2EFE9]">
                  <span className="text-xl font-bold text-[#2C1B10]">
                    {product.price}
                  </span>
                  
                  <a
                    href={siteConfig.links.tokopedia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#F5F2EC] hover:bg-[#E8E3DA] text-[#2C1B10] px-4 py-2.5 rounded-full font-semibold text-sm transition-colors"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <circle cx="8" cy="21" r="1"/>
                      <circle cx="19" cy="21" r="1"/>
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                    </svg>
                    Beli Sekarang
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
