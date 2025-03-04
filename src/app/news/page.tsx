'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NewsAndResources() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-[#4A7B63] to-[#3d6351] text-white py-16">
        <div className="container mx-auto px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">News & Resources</h1>
          <p className="text-xl text-center mt-4 max-w-2xl mx-auto">Stay informed with the latest healthcare news and trusted resources</p>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 mt-16 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Latest Health News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-[#4A7B63] bg-opacity-10"></div>
              <div className="p-6">
                <span className="text-sm text-[#4A7B63] font-medium">Pharmacy Updates</span>
                <h3 className="text-xl font-bold mt-2 mb-3">COVID-19 Vaccine Updates</h3>
                <p className="text-gray-600">Latest information about COVID-19 vaccines, boosters, and availability at our pharmacy.</p>
                <a href="#" className="inline-block mt-4 text-[#4A7B63] font-medium hover:underline">Read More →</a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-[#4A7B63] bg-opacity-10"></div>
              <div className="p-6">
                <span className="text-sm text-[#4A7B63] font-medium">Health Tips</span>
                <h3 className="text-xl font-bold mt-2 mb-3">Flu Season Preparedness</h3>
                <p className="text-gray-600">Essential tips for staying healthy during flu season and information about flu shots.</p>
                <a href="#" className="inline-block mt-4 text-[#4A7B63] font-medium hover:underline">Read More →</a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-[#4A7B63] bg-opacity-10"></div>
              <div className="p-6">
                <span className="text-sm text-[#4A7B63] font-medium">Medication Safety</span>
                <h3 className="text-xl font-bold mt-2 mb-3">Understanding Your Medications</h3>
                <p className="text-gray-600">Important information about medication safety and proper usage guidelines.</p>
                <a href="#" className="inline-block mt-4 text-[#4A7B63] font-medium hover:underline">Read More →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Trusted Healthcare Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="https://www.fda.gov/drugs" target="_blank" rel="noopener noreferrer" 
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-[#4A7B63] mb-3">FDA Drug Information</h3>
              <p className="text-gray-600">Access official drug information, safety updates, and approval information from the FDA.</p>
            </a>
            
            <a href="https://www.goodrx.com" target="_blank" rel="noopener noreferrer" 
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-[#4A7B63] mb-3">GoodRx</h3>
              <p className="text-gray-600">Compare prescription drug prices and find coupons to save on medications.</p>
            </a>

            <a href="https://www.rxlist.com" target="_blank" rel="noopener noreferrer" 
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-[#4A7B63] mb-3">RxList</h3>
              <p className="text-gray-600">Comprehensive drug database and medical information resource.</p>
            </a>

            <a href="https://www.cdc.gov" target="_blank" rel="noopener noreferrer" 
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-[#4A7B63] mb-3">CDC Health Information</h3>
              <p className="text-gray-600">Latest health information and guidelines from the CDC.</p>
            </a>

            <a href="https://medlineplus.gov" target="_blank" rel="noopener noreferrer" 
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-[#4A7B63] mb-3">MedlinePlus</h3>
              <p className="text-gray-600">Reliable health information from the National Library of Medicine.</p>
            </a>

            <a href="https://www.webmd.com/interaction-checker" target="_blank" rel="noopener noreferrer" 
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-[#4A7B63] mb-3">Drug Interaction Checker</h3>
              <p className="text-gray-600">Check for potential interactions between your medications.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Patient Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#4A7B63] mb-6">Medication Guides</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#4A7B63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <a href="#" className="text-gray-600 hover:text-[#4A7B63]">Understanding Your Prescriptions</a>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#4A7B63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <a href="#" className="text-gray-600 hover:text-[#4A7B63]">Medication Storage Guidelines</a>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#4A7B63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <a href="#" className="text-gray-600 hover:text-[#4A7B63]">Side Effects Management</a>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#4A7B63] mb-6">Health & Wellness</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#4A7B63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <a href="#" className="text-gray-600 hover:text-[#4A7B63]">Seasonal Health Tips</a>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#4A7B63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <a href="#" className="text-gray-600 hover:text-[#4A7B63]">Vaccination Schedules</a>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#4A7B63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <a href="#" className="text-gray-600 hover:text-[#4A7B63]">Healthy Living Resources</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 