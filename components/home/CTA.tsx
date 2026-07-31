"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useEffect, useRef, useState } from "react";

export default function CTA() {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      
      // Calculate distance from center of screen
      const diff = elementCenter - windowCenter;
      
      // Move image slightly based on scroll position (parallax effect)
      // Negative multiplier means image moves up as you scroll down
      setOffsetY(diff * -0.15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Init
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#547556] rounded-[2rem] p-8 md:px-12 md:py-10 lg:px-20 lg:py-12 flex flex-col md:flex-row items-center justify-between relative shadow-xl overflow-visible">
          
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 space-y-6 z-10 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#E3D9C6] leading-[1.1] tracking-tight">
              NEVER RUN OUT<br />OF COFFEE
            </h2>
            
            <p className="text-base md:text-lg text-[#E3D9C6]/90 leading-relaxed max-w-md mx-auto md:mx-0">
              Get the freshest harvests delivered to your doorstep monthly. Save 15% on all subscription orders.
            </p>

            {/* <div className="pt-4">
              <a 
                href={siteConfig.links.tokopedia}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-8 py-3.5 text-sm font-bold text-[#547556] uppercase tracking-wider bg-[#E3D9C6] hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              >
                Subscribe Now
              </a>
            </div> */}
          </div>

          {/* Right Side: Scroll Parallax Image in Oval */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-16 md:mt-0 relative pr-0 md:pr-4 lg:pr-12">
            {/* The oval background: narrower and taller to make it more "lonjong" */}
            <div className="relative w-[220px] h-[320px] md:w-[240px] md:h-[360px] lg:w-[280px] lg:h-[420px] bg-[#E3D9C6] rounded-full flex items-center justify-center group cursor-default">
              
              {/* Image with scroll parallax and size overflowing the oval */}
              <div 
                className="absolute w-[95%] h-[95%] drop-shadow-2xl z-20 transition-transform duration-75 ease-out"
                style={{ transform: `translateY(${offsetY}px) rotate(-8deg)` }}
              >
                <Image 
                  src="/cover website/CTA_image.png" 
                  alt="Tropic Roastery Coffee Pouch" 
                  fill
                  className="object-contain transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-2"
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