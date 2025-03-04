'use client';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4A7B63] to-[#3d6351] text-white py-32 mt-0">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Welcome to Best-Rx Pharmacy
            </h1>
            <p className="text-xl mb-10 text-gray-100">
              Your Mesa Community Pharmacy - Where we put People Before Profit!
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="tel:480-834-0444" 
                className="bg-white text-[#4A7B63] px-8 py-4 rounded-md hover:bg-gray-100 transition-all transform hover:scale-105 font-medium text-lg shadow-lg">
                Call Us Now
              </a>
              <a href="/services" 
                className="border-2 border-white px-8 py-4 rounded-md hover:bg-white hover:text-[#4A7B63] transition-all transform hover:scale-105 font-medium text-lg">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-white mt-16">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="bg-[#4A7B63] p-4 rounded-lg inline-block mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Prescription Services</h3>
              <p className="text-gray-600 text-lg">Easy prescription filling and refills with our expert pharmacists ensuring accuracy and safety.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="bg-[#4A7B63] p-4 rounded-lg inline-block mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Free Delivery</h3>
              <p className="text-gray-600 text-lg">We offer free prescription delivery to make healthcare more accessible for our community.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="bg-[#4A7B63] p-4 rounded-lg inline-block mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Insurance Accepted</h3>
              <p className="text-gray-600 text-lg">We accept most major insurance plans to ensure affordable healthcare for everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Resources Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">
            Helpful Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="https://www.fda.gov/drugs" target="_blank" rel="noopener noreferrer" 
              className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
              <h3 className="text-xl font-bold text-[#4A7B63] mb-3">FDA Drug Information</h3>
              <p className="text-gray-600">Access official drug information, safety updates, and approval information from the FDA.</p>
            </a>
            
            <a href="https://medlineplus.gov" target="_blank" rel="noopener noreferrer" 
              className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
              <h3 className="text-xl font-bold text-[#4A7B63] mb-3">MedlinePlus</h3>
              <p className="text-gray-600">Reliable health information from the National Library of Medicine.</p>
            </a>

            <a href="https://www.drugs.com" target="_blank" rel="noopener noreferrer" 
              className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
              <h3 className="text-xl font-bold text-[#4A7B63] mb-3">Drugs.com</h3>
              <p className="text-gray-600">Comprehensive drug information and interaction checker.</p>
            </a>

            <a href="https://www.cdc.gov/vaccines" target="_blank" rel="noopener noreferrer" 
              className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
              <h3 className="text-xl font-bold text-[#4A7B63] mb-3">CDC Vaccines & Immunizations</h3>
              <p className="text-gray-600">Latest vaccination schedules and information from the CDC.</p>
            </a>

            <a href="https://www.medicare.gov" target="_blank" rel="noopener noreferrer" 
              className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
              <h3 className="text-xl font-bold text-[#4A7B63] mb-3">Medicare.gov</h3>
              <p className="text-gray-600">Official Medicare site with coverage information and resources.</p>
            </a>

            <a href="https://www.poison.org" target="_blank" rel="noopener noreferrer" 
              className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
              <h3 className="text-xl font-bold text-[#4A7B63] mb-3">Poison Control</h3>
              <p className="text-gray-600">Emergency information and resources for poison-related incidents.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">Visit Our Location</h2>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8123412340987!2d-111.8315!3d33.4198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI1JzExLjMiTiAxMTHCsDQ5JzUzLjQiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 