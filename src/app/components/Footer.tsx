import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div style={{ width: 120, height: 120, position: 'relative' }}>
            <Image
              src="/logo.png"
              alt="Best-Rx Pharmacy Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Best-Rx Pharmacy</h3>
            <div className="space-y-2">
              <p>455 N Mesa Dr. Suite 15,</p>
              <p>Mesa, Arizona 85201</p>
              <p className="mt-4">Monday-Friday: 9:00-6:00</p>
              <p>Saturday: 10:00-2:00</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p>Phone: (480) 834-0444</p>
              <p>Fax: (480) 834-1133</p>
              <p>Email: MesaBestRx@gmail.com</p>
              <p className="text-[#4A7B63] font-medium mt-4">Free Home Delivery!</p>
              <p>Most Insurances Accepted!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#4A7B63] text-white py-4">
        <div className="container mx-auto px-8 text-center">
          <p>© {new Date().getFullYear()} Best-Rx Pharmacy. Your Mesa Community Pharmacy - People Before Profit!</p>
        </div>
      </div>
    </footer>
  );
} 