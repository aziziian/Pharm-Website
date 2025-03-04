'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  return (
    <header className="w-full bg-white shadow-lg sticky top-0 z-50">
      <div className="bg-[#4A7B63] text-white py-1">
        <div className="container mx-auto px-8 text-center text-sm">
          <span className="font-medium">✨ Free Delivery Available! Most Insurance Plans Accepted ✨</span>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-[60px] h-[60px] transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Best-Rx Pharmacy Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div className="group-hover:translate-x-1 transition-transform">
              <h1 className="text-2xl font-bold tracking-tight">
                Best-<span className="text-[#4A7B63]">Rx</span> Pharmacy
              </h1>
              <p className="text-sm text-gray-600 font-medium">Your Mesa Community Pharmacy</p>
            </div>
          </Link>
          
          <a href="tel:480-834-0444" className="hidden md:flex flex-col items-end group">
            <span className="text-sm text-[#4A7B63] font-medium tracking-wide group-hover:text-[#3d6351] transition-colors">
              Call Us Now
            </span>
            <span className="text-xl font-bold text-[#4A7B63] group-hover:text-[#3d6351] transition-colors">
              (480) 834-0444
            </span>
          </a>
        </div>

        <nav className="flex items-center justify-center border-t border-gray-100">
          <Link href="/" className="px-6 py-3 text-gray-700 hover:text-[#4A7B63] hover:bg-gray-50 transition-all font-medium">
            Home
          </Link>
          <Link href="/services" className="px-6 py-3 text-gray-700 hover:text-[#4A7B63] hover:bg-gray-50 transition-all font-medium">
            Services
          </Link>
          <Link href="/news" className="px-6 py-3 text-gray-700 hover:text-[#4A7B63] hover:bg-gray-50 transition-all font-medium">
            News & Resources
          </Link>
          <Link href="/pharmacist" className="px-6 py-3 text-gray-700 hover:text-[#4A7B63] hover:bg-gray-50 transition-all font-medium">
            Meet the Pharmacist
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;