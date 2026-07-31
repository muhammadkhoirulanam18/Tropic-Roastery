import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function CTA() {
  return (
    <section className="bg-[#FAF8F5] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* SISI KIRI: H1, Deskripsi, dan Tombol CTA */}
        <div className="space-y-6">
          <span className="text-xs font-bold tracking-widest text-[#D4A373] uppercase bg-white px-3 py-1.5 rounded-sm border border-[#E5E0D8]">
            Tropic Roastery Premium Coffee
          </span>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2C1B10] leading-tight">
            Rasakan Kelezatan Kopi Asli Indonesia di Setiap Seduhan
          </h2>
          
          <p className="text-lg text-[#6B5E55] leading-relaxed">
            Nikmati biji kopi pilihan terbaik dari Tropic Roastery yang dipanggang sempurna. Tersedia varian <em className="italic">Single Origin</em> Bali Blue Moon dan Sumatra Lintong untuk menemani hari-hari Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href={siteConfig.links.tokopedia}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-[#2C1B10] hover:bg-[#1A1009] rounded-xl transition-all duration-300"
            >
              Beli Sekarang
            </a>
          </div>
        </div>

        {/* SISI KANAN: Gambar Hasil Generasi */}
        <div className="relative flex justify-center items-center">
          <div className="relative overflow-hidden rounded-2xl shadow-xl w-full aspect-square md:aspect-[4/3] group">
            <Image 
              src="/cover website/cta.png" 
              alt="Tropic Roastery Coffee Pouch" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}