"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavBar } from "@/components/NavBar";

export default function BeforeAfterPage() {
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
              <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-8">Before And After</h1>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                See the amazing transformations achieved through our orthodontic treatments.
              </p>
            </div>
          </div>
        </section>

        {/* Before and After Gallery */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              
              {/* Case 1 */}
              <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-2xl p-6 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Before */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">Before</h3>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm">Before Photo Placeholder</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* After */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">After</h3>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm">After Photo Placeholder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 2 */}
              <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-2xl p-6 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Before */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">Before</h3>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm">Before Photo Placeholder</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* After */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">After</h3>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm">After Photo Placeholder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 3 */}
              <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-2xl p-6 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Before */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">Before</h3>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm">Before Photo Placeholder</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* After */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">After</h3>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm">After Photo Placeholder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 4 */}
              <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-2xl p-6 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Before */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">Before</h3>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 8 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm">Before Photo Placeholder</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* After */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">After</h3>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm">After Photo Placeholder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Information Section */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Real Results from Real Patients</h2>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                Every smile transformation tells a unique story. These before and after photos showcase the life-changing results achieved through our comprehensive orthodontic treatments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Expert Treatment</h3>
                <p className="text-slate-700">Personalized orthodontic care tailored to each patient's unique needs and goals.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Proven Results</h3>
                <p className="text-slate-700">Consistent, beautiful outcomes achieved through time-tested orthodontic techniques.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-4a9 9 0 019-9 9 9 0 019 9 9 9 0 01-9 9 9 9 0 01-9-9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Life-Changing</h3>
                <p className="text-slate-700">More than just straighter teeth - building confidence and improving quality of life.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready for Your Own Transformation?</h2>
              <p className="text-lg mb-6">
                Schedule a consultation today and take the first step toward your perfect smile.
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
                  <li><a href="/night-guards" className="text-blue-200 hover:text-white transition-colors">Night Guards</a></li>
                  <li><a href="/tmj" className="text-blue-200 hover:text-white transition-colors">TMJ</a></li>
                  <li><a href="/before-after" className="text-blue-200 hover:text-white transition-colors">Before & After</a></li>
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
