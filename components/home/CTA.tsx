import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function CTA() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#547556] rounded-[2rem] p-10 md:p-16 lg:px-24 lg:py-20 flex flex-col md:flex-row items-center justify-between relative shadow-xl overflow-visible">
          
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 space-y-6 z-10 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#E3D9C6] leading-[1.1] tracking-tight">
              NEVER RUN OUT<br />OF COFFEE
            </h2>
            
            <p className="text-base md:text-lg text-[#E3D9C6]/90 leading-relaxed max-w-md mx-auto md:mx-0">
              Get the freshest harvests delivered to your doorstep monthly. Save 15% on all subscription orders.
            </p>

            {/* Optional Button (Functional CTA) */}
            <div className="pt-4">
              <a 
                href={siteConfig.links.tokopedia}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-8 py-3.5 text-sm font-bold text-[#547556] uppercase tracking-wider bg-[#E3D9C6] hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              >
                Subscribe Now
              </a>
            </div>
          </div>

          {/* Right Side: Floating Image in Oval */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-16 md:mt-0 relative">
            <div className="relative w-[220px] h-[340px] md:w-[260px] md:h-[380px] lg:w-[300px] lg:h-[440px] bg-[#E3D9C6] rounded-[150px] flex items-center justify-center">
              {/* Image overflowing the oval with floating animation */}
              <div className="absolute w-[140%] h-[120%] animate-float pointer-events-none drop-shadow-2xl z-20">
                <Image 
                  src="/cover website/CTA_image.png" 
                  alt="Tropic Roastery Coffee Pouch" 
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}