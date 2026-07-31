import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Mastering the V60 Pour-Over",
    description: "A step-by-step guide to unlocking the clarity and bright acidity of our light roasts.",
    image: "/cover website/Background.jpg",
    link: "/blog/v60-pour-over",
  },
  {
    id: 2,
    title: "The Art of Indonesian Coffee",
    description: "Exploring the diverse heritage of brewing methods across the 17,000 islands.",
    image: "/cover website/Background-1.jpg",
    link: "/blog/indonesian-coffee",
  },
  {
    id: 3,
    title: "Finding Your Perfect Roast",
    description: "Unsure which bean fits your palate? Our roast level comparison helps you choose.",
    image: "/cover website/background3.jpg",
    link: "/blog/perfect-roast",
  },
];

export default function BrewGuides() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2C1B10] tracking-tight mb-4 uppercase">
            Brew Guides
          </h2>
          <p className="text-[#6B5E55] text-base md:text-lg max-w-2xl mx-auto">
            Master the craft of coffee making with our expert guides designed for the home barista.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={post.link} key={post.id} className="group block flex flex-col h-full">
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-6 bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#2C1B10] mb-3 group-hover:text-[#D4A373] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#6B5E55] mb-6 text-sm md:text-base flex-grow">
                  {post.description}
                </p>
                
                <span className="text-[#2C1B10] text-xs font-bold tracking-widest uppercase mt-auto">
                  Read More
                </span>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
}
