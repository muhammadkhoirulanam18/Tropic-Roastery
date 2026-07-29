"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/", isActive: true },
    { label: "Our Beans", href: "/products", isActive: false },
    { label: "About", href: "/about", isActive: false },
    { label: "Blog", href: "/blog", isActive: false },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-[#FAFAFA]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Left Section: Brand Logo & Title */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo Box */}
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F5F0E6] p-1.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/cover website/Logo.png"
                alt="Tropic Roastery Logo"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            {/* Brand Name */}
            <span className="text-[18px] md:text-[20px] font-bold text-[#1C100B] tracking-tight transition-colors duration-200 group-hover:text-[#C68B59]">
              Tropic Roastery
            </span>
          </Link>
        </div>

        {/* Center Section: Navigation Links (Desktop) */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`relative py-2 text-sm md:text-[15px] font-medium transition-colors duration-200 ${
                    item.isActive
                      ? "text-[#1C100B] font-bold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#C68B59] after:content-['']"
                      : "text-[#4A403A] hover:text-[#1C100B]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section: CTA Button (Desktop) & Hamburger Icon (Mobile) */}
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.links.shopee}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex rounded-full bg-[#211510] px-6 py-2.5 text-[13px] font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#3d271e] hover:shadow-lg active:scale-95"
          >
            ORDER NOW
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-[#4A403A] transition-colors hover:bg-zinc-50 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              /* Close Icon SVG */
              <svg
                className="h-5 w-5 animate-in fade-in zoom-in-50 duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* Menu Hamburger Icon SVG */
              <svg
                className="h-5 w-5 animate-in fade-in zoom-in-50 duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Navigation Overlay */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-zinc-200 px-6 py-6 shadow-xl transition-all duration-300 ease-in-out md:hidden">
          <nav className="flex flex-col gap-6">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 text-base font-medium transition-colors duration-200 ${
                      item.isActive
                        ? "text-[#1C100B] font-bold border-l-4 border-[#C68B59] pl-3"
                        : "text-[#4A403A] hover:text-[#1C100B] pl-3"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="border-t border-zinc-100 pt-4 px-3">
              <a
                href={siteConfig.links.shopee}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-[#211510] py-3 text-[14px] font-semibold uppercase tracking-wider text-white shadow-md transition-colors hover:bg-[#3d271e]"
              >
                ORDER NOW
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
