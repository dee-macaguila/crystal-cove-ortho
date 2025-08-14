"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavBar } from "@/components/NavBar";

export default function ClearBracesPage() {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isOrthoDropdownOpen, setIsOrthoDropdownOpen] = useState(false);
  const [isPatientResourcesDropdownOpen, setIsPatientResourcesDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-blue-200 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="/" className="flex items-center gap-2 flex-shrink-0 min-w-0 hover:opacity-80 transition-opacity cursor-pointer">
              <Image
                src="/Test-new.png"
                alt="Crystal Cove Orthodontics logo"
                width={200}
                height={80}
                className="h-14 md:h-16 lg:h-20 w-auto object-contain"
                priority
              />
              <h1 className="text-xl md:text-2xl lg:text-3xl font-medium text-blue-900 whitespace-nowrap" style={{fontFamily: "'Baguet Script', 'Brush Script MT', cursive"}}>Dr. Russell Choy</h1>
            </a>

            {/* Primary Nav with Animation */}
            <NavBar 
              isAboutDropdownOpen={isAboutDropdownOpen}
              setIsAboutDropdownOpen={setIsAboutDropdownOpen}
              isOrthoDropdownOpen={isOrthoDropdownOpen}
              setIsOrthoDropdownOpen={setIsOrthoDropdownOpen}
              isPatientResourcesDropdownOpen={isPatientResourcesDropdownOpen}
              setIsPatientResourcesDropdownOpen={setIsPatientResourcesDropdownOpen}
            />

            {/* Mobile menu button (placeholder) */}
            <button className="lg:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-white via-blue-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-8">Clear Braces</h1>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                Look your best while achieving the perfect smile with our translucent ceramic braces technology.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              
              {/* Main Content */}
              <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-8 mb-12">
                <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                  <p>
                    Whether you're an adult or a teen, we all want to look our best at all times. Changing the way your teeth are structured takes time and there are now ways to keep you looking your best during this period.
                  </p>
                  <p>
                    Clear braces or ceramic braces are translucent. This new technology is available for most cases. The great benefit of these braces is that you won't have to have that metallic look.
                  </p>
                  <p>
                    In addition, clear braces are specifically designed so that they won't stain or wear over time.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-lg mb-6">
                  Give us a call today to see if you're a candidate for ceramic braces!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="tel:708-444-8341" 
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Call 708-444-8341
                  </a>
                  <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                    Schedule Consultation
                  </button>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="bg-white border border-blue-200 rounded-xl p-8">
                <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center">Benefits of Clear Braces</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Translucent Design</h4>
                      <p className="text-slate-600 text-sm">Nearly invisible ceramic material blends with your natural teeth.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Stain Resistant</h4>
                      <p className="text-slate-600 text-sm">Advanced materials designed not to stain or discolor over time.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Durable Technology</h4>
                      <p className="text-slate-600 text-sm">Built to withstand daily wear without compromising effectiveness.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-4a9 9 0 019-9 9 9 0 019 9 9 9 0 01-9 9 9 9 0 01-9-9z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Confidence Boost</h4>
                      <p className="text-slate-600 text-sm">Look and feel your best throughout your orthodontic treatment.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Who It's For Section */}
              <div className="bg-blue-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Perfect for Adults and Teens</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-blue-900 mb-2">Working Professionals</h4>
                    <p className="text-slate-700">Maintain a professional appearance during meetings and presentations.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-blue-900 mb-2">Students & Teens</h4>
                    <p className="text-slate-700">Feel confident in social situations and school activities.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-12 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-5 left-20 w-16 h-16 border border-white rounded-full"></div>
          <div className="absolute top-20 right-32 w-12 h-12 bg-white rounded-full"></div>
          <div className="absolute bottom-10 left-1/3 w-20 h-20 border border-white rounded-lg rotate-12"></div>
        </div>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-4">Crystal Cove Orthodontics</h3>
                <p className="text-blue-100 mb-4">
                  Creating beautiful smiles and confident patients through exceptional orthodontic care.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                <p className="text-blue-200">Phone: 708-444-8341</p>
                <p className="text-blue-200">Email: info@crystalcoveortho.com</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><a href="/invisalign" className="text-blue-200 hover:text-white transition-colors">Invisalign</a></li>
                  <li><a href="/clear-braces" className="text-blue-200 hover:text-white transition-colors">Clear Braces</a></li>
                  <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Traditional Braces</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-blue-800 mt-8 pt-8 text-center">
              <p className="text-blue-200">
                © 2024 Crystal Cove Orthodontics. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
