"use client";

import Image from "next/image";
import { NavBar } from "@/components/NavBar";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function SiteHeader() {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isOrthoDropdownOpen, setIsOrthoDropdownOpen] = useState(false);
  const [isPatientResourcesDropdownOpen, setIsPatientResourcesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/85 backdrop-blur-sm shadow-lg border-b border-blue-200 fixed top-0 left-0 right-0 z-50">
      <div className="w-full px-4 lg:px-8">
        <div className="flex justify-between items-center py-4 w-full">
          <a href="/" className="flex items-center gap-2 flex-shrink-0 min-w-0 hover:opacity-80 transition-opacity cursor-pointer -ml-2">
            <Image
              src="/Test_LOGO_WEBDEV.png"
              alt="Crystal Cove Orthodontics logo"
              width={200}
              height={80}
              className="h-14 md:h-16 lg:h-20 w-auto object-contain"
              priority
            />
            <h1 className="text-xl md:text-2xl lg:text-3xl font-medium text-slate-800 whitespace-nowrap font-[family-name:var(--font-great-vibes)]">Dr. Russell Choy</h1>
          </a>

          <NavBar 
            isAboutDropdownOpen={isAboutDropdownOpen}
            setIsAboutDropdownOpen={setIsAboutDropdownOpen}
            isOrthoDropdownOpen={isOrthoDropdownOpen}
            setIsOrthoDropdownOpen={setIsOrthoDropdownOpen}
            isPatientResourcesDropdownOpen={isPatientResourcesDropdownOpen}
            setIsPatientResourcesDropdownOpen={setIsPatientResourcesDropdownOpen}
          />

          {/* Mobile Call Now Button */}
          <a
            href="tel:+19495550123"
            className="lg:hidden inline-flex items-center rounded-md bg-slate-800 text-white px-3 py-2 text-sm font-medium hover:bg-slate-900 transition-colors mr-2"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call
          </a>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden inline-flex items-center text-slate-800 hover:text-slate-900 bg-white/80 border border-blue-200 rounded-md p-2 shadow-sm transition-colors"
            aria-label="Open mobile menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-lg z-50">
          <div className="px-4 py-2 space-y-1">
            <a href="/our-practice" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-blue-900 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">Our Practice</a>
            {/* About Us Section (collapsible) */}
            <div className="space-y-1">
              <button 
                className="w-full flex items-center justify-between px-3 py-2 text-blue-900 font-medium rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
              >
                <span>About Us</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isAboutDropdownOpen ? 'max-h-56 opacity-100' : 'max-h-0 opacity-0'}`}>
                <a href="/meet-the-doctor" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">Meet the Doctor</a>
                <a href="/meet-the-staff" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">Meet the Staff</a>
                <a href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">Blog</a>
              </div>
            </div>

            {/* Orthodontic Care Section (collapsible) */}
            <div className="space-y-1">
              <button 
                className="w-full flex items-center justify-between px-3 py-2 text-blue-900 font-medium rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setIsOrthoDropdownOpen(!isOrthoDropdownOpen)}
              >
                <span>Our Orthodontic Care</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isOrthoDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOrthoDropdownOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
                <a href="/invisalign" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">Invisalign Braces</a>
                <a href="/clear-braces" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">Clear Braces</a>
                <a href="/traditional-braces" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">Traditional Braces</a>
                <a href="/night-guards" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">Night Guards</a>
                <a href="/tmj" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">TMJ</a>
                <a href="/before-after" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">Before and After</a>
              </div>
            </div>

            {/* Patient Resources Section (collapsible) */}
            <div className="space-y-1">
              <button 
                className="w-full flex items-center justify-between px-3 py-2 text-blue-900 font-medium rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setIsPatientResourcesDropdownOpen(!isPatientResourcesDropdownOpen)}
              >
                <span>Patient Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isPatientResourcesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isPatientResourcesDropdownOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
                <a href="/new-patient" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">New Patient</a>
                <a href="/educational-videos" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">Educational Videos</a>
                <a href="/faqs" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">FAQs</a>
                <a href="/new-patient-special-offer" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">New Patient Special Offer</a>
              </div>
            </div>

            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-blue-900 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">SureSmile</a>
            <a href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-blue-900 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">Contact Us</a>
          </div>
        </div>
      )}
    </header>
  );
}


