import Image from "next/image";
import Link from "next/link";

export default function BeanPath() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#FDFBF7]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Images */}
        <div className="w-full lg:w-1/2 relative">
          {/* Main Large Image */}
          <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/cover website/Background.png"
              alt="Coffee roasting process"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          {/* Smaller Overlapping Image */}
          <div className="absolute -bottom-10 -right-4 md:-right-10 w-1/2 md:w-[45%] aspect-square bg-white p-2.5 md:p-4 rounded-xl shadow-2xl z-10">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/cover website/Background2.png"
                alt="Coffee farmers illustration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full lg:w-1/2 mt-16 lg:mt-0">
          <h3 className="text-[#D4A373] text-sm md:text-base font-bold tracking-widest mb-4 uppercase">
            The Bean Path
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2C1B10] tracking-tight mb-8 uppercase">
            Sustainable Sourcing
          </h2>
          
          <div className="space-y-6 text-base md:text-lg text-[#5C4A3D] leading-relaxed">
            <p>
              We believe that great coffee starts at the roots. By partnering directly with farmers across North Sumatra, Bali, and Sulawesi, we ensure they receive up to 50% above fair-trade prices.
            </p>
            <p className="italic font-medium text-[#7A6554]">
              "Every bag of Tropic Roastery coffee tells a story of direct trade, ethical empowerment, and the unique terroir of the Indonesian archipelago."
            </p>
          </div>

          <div className="mt-10">
            <Link 
              href="/ethos"
              className="group inline-flex items-center gap-2 text-[#2C1B10] text-sm md:text-base font-bold tracking-widest uppercase hover:text-[#D4A373] transition-colors"
            >
              Learn about our ethos
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
