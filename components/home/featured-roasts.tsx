import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const featuredProducts = [
  {
    id: "flores-bajawa",
    name: "Flores Bajawa",
    description: "Chocolate, Tobacco, Spicy notes",
    price: "Rp. 90.000",
    image: "/cover website/flores-bajawa.png",
  },
  {
    id: "lampung-mountain",
    name: "Lampung Mountain",
    description: "Earthy, Cedar, Tropical Fruit",
    price: "Rp. 95.000",
    image: "/cover website/robusta-lampung.png",
  },
  {
    id: "arabica-puntang",
    name: "Arabica Puntang",
    description: "Floral, Lemonade, Herbal undertones",
    price: "Rp. 92.000",
    image: "/cover website/arabica-puntang.png",
  },
  {
    id: "aceh-gayo",
    name: "Aceh Gayo",
    description: "Dark Chocolate, Brown Sugar, Spices",
    price: "Rp. 95.000",
    image: "/cover website/aceh-gayo.png",
  },
];

export default function FeaturedRoasts() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h3 className="text-[#D4A373] text-sm font-bold tracking-wider mb-2">
              OUR SELECTION
            </h3>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2C1B10] tracking-tight">
              FEATURED ROASTS
            </h2>
          </div>
          <Link
            href="/products"
            className="text-[#2C1B10] text-sm font-bold tracking-widest underline decoration-2 underline-offset-4 hover:text-[#D4A373] transition-colors"
          >
            VIEW ALL COLLECTIONS
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
                {/* <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                  <span className="text-[#2C1B10] text-xs font-bold tracking-wider">
                    {product.roastLevel}
                  </span>
                </div> */}
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
                  <span className="text-base font-bold text-[#547556]">
                    {product.price}
                  </span>
                  
                  <a
                    href={siteConfig.links.tokopedia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2C1B10] text-xs font-semibold underline decoration-1 underline-offset-4 hover:text-[#D4A373] transition-colors uppercase tracking-wider"
                  >
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
