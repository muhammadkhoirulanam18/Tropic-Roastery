import React from "next/react";
import Link from "next/link";

export default function Location() {
  return (
    <section className="bg-[#FAF8F5] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Left Side: Contact Info Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#F2EFE9] flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C1B10] mb-4">
            VISIT OUR ROASTERY
          </h2>
          <p className="text-[#6B5E55] text-base leading-relaxed mb-10 max-w-md">
            Experience the aroma first-hand at our flagship shop in the heart of Lampung.
          </p>

          <div className="space-y-8 mb-12">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4A373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4 className="text-[#2C1B10] font-bold text-sm md:text-base">Bandar lampung</h4>
                <p className="text-[#8C7A6B] text-sm">Lampung, Indonesia</p>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4A373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <h4 className="text-[#2C1B10] font-bold text-sm md:text-base">Open Daily</h4>
                <p className="text-[#8C7A6B] text-sm">08:00 AM — 10:00 PM</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-[#F5F2EC] flex items-center justify-center text-[#2C1B10] hover:bg-[#E8E3DA] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#F5F2EC] flex items-center justify-center text-[#2C1B10] hover:bg-[#E8E3DA] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#F5F2EC] flex items-center justify-center text-[#2C1B10] hover:bg-[#E8E3DA] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side: Map */}
        <div className="relative w-full h-[400px] lg:h-auto rounded-3xl overflow-hidden shadow-sm border border-[#F2EFE9]">
          <iframe 
            src="https://maps.google.com/maps?q=-5.4276378,105.2698164&hl=en&z=16&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "grayscale(0.6) contrast(1.1) opacity(0.9)" }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Tropic Roastery Location Map"
            className="absolute inset-0"
          ></iframe>
          
          {/* Mock Floating Pin based on UI */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-[#E5E0D8] flex items-center gap-3 pointer-events-none">
            <div className="w-8 h-8 rounded-full bg-[#D4A373] text-white flex items-center justify-center font-bold text-xs">
              TR
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#2C1B10] uppercase tracking-wider leading-tight">Tropic Roastery</p>
              <p className="text-[9px] text-[#8C7A6B] uppercase tracking-widest">Flagship</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
