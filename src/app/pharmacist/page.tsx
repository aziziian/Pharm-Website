'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MeetThePharmacist() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-[#4A7B63] to-[#3d6351] text-white py-16">
        <div className="container mx-auto px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Meet Our Pharmacists</h1>
          <p className="text-xl text-center mt-4 max-w-2xl mx-auto">Experienced professionals dedicated to serving our Mesa community</p>
        </div>
      </section>

      {/* Pharmacist Profiles */}
      <section className="py-20 mt-16">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Pharmacist Profile - Benjamin Azizi */}
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h2 className="text-2xl font-bold text-[#4A7B63] mb-2">Benjamin Azizi</h2>
              <p className="text-lg font-semibold mb-4 text-gray-700">B.S. Pharm. - R.Ph. - Pharmacist</p>
              <p className="text-gray-600 mb-4">
                Mr. Azizi is a board-certified pharmacist who graduated from St. John's University, New York in 1996. 
                He has a wide range of pharmacy experience in hospital, retail, and clinical management. He did 4 years 
                of internship at Cornell University and New York Hospital.
              </p>
              <p className="text-gray-600">
                He was a pharmacy manager at Walgreens, Walmart, and Fry's Food and Drugs.
              </p>
            </div>

            {/* Pharmacist Profile - Dr. Ahmad Golchin */}
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h2 className="text-2xl font-bold text-[#4A7B63] mb-2">Dr. Ahmad Golchin</h2>
              <p className="text-lg font-semibold mb-4 text-gray-700">PharmD - Pharmacist</p>
              <p className="text-gray-600">
                Dr. Golchin is a pharmacotherapy board-certified pharmacist who graduated from the University of 
                North Carolina - Chapel Hill in 1987. He has a wide range of pharmacy experience in retail, hospital, 
                clinical, and formulary management and has provided public service at the American Indian Health Service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Schedule a Consultation</h2>
            <p className="text-gray-600 mb-8">Have questions about your medications? Want to discuss your health goals? Our pharmacists are here to help.</p>
            <a href="tel:480-834-0444" 
              className="inline-block bg-[#4A7B63] text-white px-8 py-4 rounded-md hover:bg-[#3d6351] transition-colors font-medium text-lg">
              Call (480) 834-0444
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 