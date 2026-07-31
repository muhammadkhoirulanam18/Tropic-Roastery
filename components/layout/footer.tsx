import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#E5E0D8] text-[#2C1B10] pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-12 border-b border-[#E5E0D8] gap-6">
          <div className="flex items-center gap-3">
            {/* Logo Icon (Mock) */}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#2C1B10]">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-[#2C1B10]">Tropic Roastery</span>
          </div>
          <p className="text-sm md:text-base font-semibold text-[#6B5E55]">
            Premium Indonesian Coffee Roastery
          </p>
        </div>

        {/* Middle Section */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-12">
          
          {/* Column 1: Info */}
          <div className="lg:col-span-2 space-y-6 text-sm text-[#6B5E55] leading-relaxed">
            <div>
              <p className="text-[#2C1B10] font-medium">Tropic Roastery</p>
              <p>Jl. Kedaton Raya No. 12,</p>
              <p>Bandar Lampung, Indonesia</p>
            </div>
            
            <div>
              <p>halo@tropicroastery.com</p>
              <p>+62 812 3456 7890</p>
            </div>
            
            <div className="flex gap-4">
              <div>
                <p>Mon - Fri</p>
                <p>Sat - Sun</p>
              </div>
              <div>
                <p>08.00 - 20.00</p>
                <p>09.00 - 22.00</p>
              </div>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-4">
            <h4 className="text-[#2C1B10] font-bold text-sm">Products</h4>
            <ul className="space-y-3 text-sm text-[#6B5E55]">
              <li><Link href="#" className="hover:text-[#D4A373] transition-colors">Single Origin</Link></li>
              <li><Link href="#" className="hover:text-[#D4A373] transition-colors">Espresso Blends</Link></li>
              <li><Link href="#" className="hover:text-[#D4A373] transition-colors">Cold Brew</Link></li>
              <li><Link href="#" className="hover:text-[#D4A373] transition-colors">Merchandise</Link></li>
            </ul>
          </div>

          {/* Column 3: Locations */}
          <div className="space-y-4">
            <h4 className="text-[#2C1B10] font-bold text-sm">Locations</h4>
            <ul className="space-y-3 text-sm text-[#6B5E55]">
              <li><Link href="#" className="hover:text-[#D4A373] transition-colors">Bandar Lampung</Link></li>
              <li><Link href="#" className="hover:text-[#D4A373] transition-colors">Jakarta Selatan</Link></li>
              <li><Link href="#" className="hover:text-[#D4A373] transition-colors">Bandung</Link></li>
              <li className="pt-2"><Link href="#" className="hover:text-[#D4A373] transition-colors font-medium">All Locations</Link></li>
            </ul>
          </div>

          {/* Column 4: Partnerships */}
          <div className="space-y-4">
            <h4 className="text-[#2C1B10] font-bold text-sm">Partnerships</h4>
            <ul className="space-y-3 text-sm text-[#6B5E55]">
              <li><Link href="#" className="hover:text-[#D4A373] transition-colors">Wholesale</Link></li>
              <li><Link href="#" className="hover:text-[#D4A373] transition-colors">Cafe Supply</Link></li>
              <li><Link href="#" className="hover:text-[#D4A373] transition-colors">Corporate</Link></li>
              <li><Link href="#" className="hover:text-[#D4A373] transition-colors">Franchise</Link></li>
            </ul>
          </div>

          {/* Column 5: About & Language */}
          <div className="flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h4 className="text-[#2C1B10] font-bold text-sm">About</h4>
              <ul className="space-y-3 text-sm text-[#6B5E55]">
                <li><Link href="#" className="hover:text-[#D4A373] transition-colors">Our Story</Link></li>
                <li><Link href="#" className="hover:text-[#D4A373] transition-colors">Direct Trade</Link></li>
                <li><Link href="#" className="hover:text-[#D4A373] transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-[#D4A373] transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            {/* Language Selector */}
            <div>
              <button className="flex items-center justify-between w-full max-w-[140px] px-4 py-2 border border-[#2C1B10] rounded-xl text-sm font-medium hover:bg-[#EAE4DD] transition-colors">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  English
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
            </div>
          </div>
          
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-[#E5E0D8] flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-[#8C7A6B]">
            © {new Date().getFullYear()} - Tropic Roastery
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-3">
            {[
              { name: "linkedin", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" },
              { name: "facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
              { name: "instagram", path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M2 8a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8z" },
              { name: "tiktok", path: "M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3v11a8 8 0 1 1-8-8v3a5 5 0 0 0 5 5z" }
            ].map((social) => (
              <a key={social.name} href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#EAE4DD] hover:bg-[#D4A373] text-[#2C1B10] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {social.name === 'linkedin' && <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>}
                  {social.name === 'facebook' && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />}
                  {social.name === 'instagram' && <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>}
                  {social.name === 'tiktok' && <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3v11a8 8 0 1 1-8-8v3a5 5 0 0 0 5 5z" />}
                </svg>
              </a>
            ))}
          </div>

          <div className="flex gap-4 sm:gap-6 text-xs font-semibold text-[#2C1B10]">
            <Link href="#" className="hover:text-[#D4A373] transition-colors">Terms</Link>
            <Link href="#" className="hover:text-[#D4A373] transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-[#D4A373] transition-colors">Cookies</Link>
            <Link href="#" className="hover:text-[#D4A373] transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
