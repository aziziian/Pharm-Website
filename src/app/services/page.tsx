'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Services Header */}
      <section className="bg-gradient-to-r from-[#4A7B63] to-[#3d6351] text-white py-16">
        <div className="container mx-auto px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Our Services</h1>
          <p className="text-xl text-center mt-4 max-w-2xl mx-auto">Comprehensive pharmacy services tailored to meet your healthcare needs</p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 mt-16 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h2 className="text-2xl font-bold text-[#4A7B63] mb-6">Prescription Services</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#4A7B63] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">New Prescriptions</h3>
                    <p className="text-gray-600">Quick and accurate processing of new prescriptions</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#4A7B63] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Prescription Refills</h3>
                    <p className="text-gray-600">Easy refill requests online or by phone</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#4A7B63] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Prescription Transfers</h3>
                    <p className="text-gray-600">Seamless transfer of prescriptions from other pharmacies</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#4A7B63] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Auto Refill Program</h3>
                    <p className="text-gray-600">Automatic refills for maintenance medications</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h2 className="text-2xl font-bold text-[#4A7B63] mb-6">Clinical Services</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#4A7B63] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Medication Therapy Management</h3>
                    <p className="text-gray-600">Comprehensive medication reviews and optimization</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#4A7B63] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Immunizations</h3>
                    <p className="text-gray-600">Flu shots and other recommended vaccinations</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#4A7B63] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Health Screenings</h3>
                    <p className="text-gray-600">Blood pressure, diabetes, and cholesterol screenings</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#4A7B63] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Medication Synchronization</h3>
                    <p className="text-gray-600">Coordinate refill dates for all your medications</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#4A7B63] mb-3">Compounding</h3>
              <p className="text-gray-600">Custom medication preparation to meet specific patient needs</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#4A7B63] mb-3">Durable Medical Equipment</h3>
              <p className="text-gray-600">Quality medical supplies and equipment for home use</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#4A7B63] mb-3">Medicare Part D</h3>
              <p className="text-gray-600">Assistance with Medicare prescription drug plans</p>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Resources */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Helpful Healthcare Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="https://www.fda.gov/drugs" target="_blank" rel="noopener noreferrer" 
              className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-[#4A7B63] mb-3">FDA Drug Information</h3>
              <p className="text-gray-600">Official drug information and safety updates</p>
            </a>
            
            <a href="https://www.goodrx.com" target="_blank" rel="noopener noreferrer" 
              className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-[#4A7B63] mb-3">GoodRx</h3>
              <p className="text-gray-600">Compare prescription drug prices and find coupons</p>
            </a>

            <a href="https://www.rxlist.com" target="_blank" rel="noopener noreferrer" 
              className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-[#4A7B63] mb-3">RxList</h3>
              <p className="text-gray-600">Detailed drug information and medical dictionary</p>
            </a>

            <a href="https://www.nia.nih.gov/health/safe-use-medicines-older-adults" target="_blank" rel="noopener noreferrer" 
              className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-[#4A7B63] mb-3">NIH Senior Health</h3>
              <p className="text-gray-600">Medication safety tips for older adults</p>
            </a>

            <a href="https://www.webmd.com/interaction-checker" target="_blank" rel="noopener noreferrer" 
              className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-[#4A7B63] mb-3">WebMD Interaction Checker</h3>
              <p className="text-gray-600">Check for potential drug interactions</p>
            </a>

            <a href="https://www.needymeds.org" target="_blank" rel="noopener noreferrer" 
              className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-[#4A7B63] mb-3">NeedyMeds</h3>
              <p className="text-gray-600">Information about medication assistance programs</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 