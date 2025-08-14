"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavBar } from "@/components/NavBar";

export default function TraditionalBracesPage() {
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
              <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-8">Traditional Braces</h1>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                The time-tested standard for straightening your smile with proven results and reliable technology.
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
                    Traditional braces have been around for many years. They are the standard among patients looking to straighten their smile.
                  </p>
                  <p>
                    Today's contemporary braces are made of exceptionally strong metals as they need to be able to stand the test of time while they are on your teeth.
                  </p>
                  <p>
                    While contemporary braces are metallic colored, there are a number of bands and features that can be utilized to spruce them up.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Ready for Your Perfect Smile?</h2>
                <p className="text-lg mb-6">
                  Give us a call today so we can discuss in more detail about getting you that perfect smile!
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

              {/* Why Choose Traditional Braces */}
              <div className="bg-white border border-blue-200 rounded-xl p-8">
                <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center">Why Choose Traditional Braces?</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Proven Track Record</h4>
                      <p className="text-slate-600 text-sm">Time-tested technology with decades of successful results.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Exceptionally Strong</h4>
                      <p className="text-slate-600 text-sm">Made from high-grade metals built to withstand years of treatment.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M15 5h2a2 2 0 012 2v2" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Customizable</h4>
                      <p className="text-slate-600 text-sm">Various colored bands and features to personalize your look.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Cost Effective</h4>
                      <p className="text-slate-600 text-sm">Often the most affordable option for comprehensive orthodontic treatment.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Treatment Features */}
              <div className="bg-blue-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">What Makes Our Traditional Braces Special</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-blue-900 mb-2">Advanced Materials</h4>
                    <p className="text-slate-700 text-sm">Contemporary metals designed for maximum durability and effectiveness.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M15 5h2a2 2 0 012 2v2" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-blue-900 mb-2">Personal Expression</h4>
                    <p className="text-slate-700 text-sm">Choose from various colored bands to show your personality and style.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-blue-900 mb-2">Reliable Results</h4>
                    <p className="text-slate-700 text-sm">Consistent, predictable outcomes for even the most complex cases.</p>
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
                  <li><a href="/traditional-braces" className="text-blue-200 hover:text-white transition-colors">Traditional Braces</a></li>
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
