import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-16 md:py-24 lg:py-32">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-[#F5F0E6]/60 blur-3xl" />
      <div className="absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-[#D4A373]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start text-left">
            <h1 className="text-2xl font-extrabold tracking-tight text-[#211510] sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] md:leading-[1.2]">
              <span className="block text-[#211510]">INDONESIAN BEANS,</span>
              <span className="block text-[#C68B59] mt-1">ROASTED WITH CARE</span>
            </h1>
            
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#6B5E55] max-w-md">
              Small-batch roastery bringing you the archipelago's finest flavors. 
              From the volcanic soil of Flores to the misty highlands of Sumatra.
            </p>

            <div className="mt-6 sm:mt-8">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full bg-[#211510] px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-black/10 transition-all duration-300 hover:bg-[#3d271e] hover:shadow-xl hover:shadow-black/15 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
              >
                EXPLORE OUR BEANS
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Illustration */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-square overflow-hidden rounded-2xl md:rounded-3xl bg-[#F5F2EB] shadow-2xl transition-transform duration-500 hover:scale-[1.02] rotate-1 md:rotate-2">
              <Image
                src="/cover website/Hero Section.png"
                alt="Kopi Nusantara Illustration - Barista brewing pour-over coffee with monkeys and mountains"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
