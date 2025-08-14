"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavBar } from "@/components/NavBar";

export default function InvisalignPage() {
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
              <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-8">Invisalign Braces</h1>
              <div className="flex justify-center mb-8">
                <div className="relative w-full max-w-md">
                  <Image
                    src="/invisalignpic.png"
                    alt="Invisalign clear aligners"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              
              {/* Is Invisalign Right for You */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Is Invisalign treatment right for you?</h2>
                <p className="text-lg text-slate-700 mb-8">
                  If you want clear, comfortable, removable aligners instead of braces and wires-Invisalign is a great choice.
                </p>
              </div>

              {/* Consultation Information */}
              <div className="bg-blue-50 rounded-xl p-8 mb-12">
                <h3 className="text-2xl font-semibold text-blue-900 mb-6">
                  Get your questions answered by coming for a free exam and consultation with preferred Invisalign provider Dr. Cynthia Wong:
                </h3>
                <ul className="space-y-4 text-slate-700 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    A complete exam to pinpoint issues with orthodontic alignment and potential for malocclusion
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    See and feel for yourself what the Invisalign aligners are like
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Discussion of what results you can expect
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Information on costs including insurance and payment plans
                  </li>
                </ul>
                <div className="text-center">
                  <p className="text-lg text-slate-700 mb-4">
                    For many people, Invisalign is the clear choice. Call <strong className="text-blue-900">708-444-8341</strong> or schedule online and find out for yourself with a free, professional exam and consultation with Dr. Cynthia Wong.
                  </p>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Schedule Your Free Consultation
                  </button>
                </div>
              </div>

              {/* Confidence Builder */}
              <div className="text-center mb-12">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">A beautiful smile is a great confidence builder.</h3>
              </div>

              {/* Malocclusion Information */}
              <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-8 mb-12">
                <div className="space-y-4 text-slate-700">
                  <p>
                    Teeth that are not aligned properly in your mouth create what Orthodontists call "malocclusion."
                  </p>
                  <p>
                    Left untreated, malocclusion can lead to periodontal disease and create abnormal stress on teeth and jaws,
                    which can lead to premature wear, early tooth loss and an unsightly smile.
                  </p>
                  <p>
                    It's also possible that you are just looking for a better smile.
                  </p>
                  <p className="font-semibold text-blue-900">
                    All of these are great reasons to come in for a free consultation with Dr. Wong.
                  </p>
                </div>
              </div>

              {/* Invisalign Details */}
              <div className="bg-white border border-blue-200 rounded-xl p-8">
                <h3 className="text-3xl font-bold text-blue-900 mb-6">Invisalign®</h3>
                <p className="text-lg text-slate-700 mb-6">
                  Invisalign® is the "clear" alternative to braces. With Invisalign®, your teeth are gradually moved through a series of custom-made, removable, nearly invisible aligners.
                </p>
                
                <h4 className="text-xl font-semibold text-blue-900 mb-4">Invisalign® custom-made aligners are:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-800">Virtually invisible</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-800">Removable</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-800">Comfortable</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-800">You can still eat what you want</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-800">Less irritation to gum tissue</span>
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
                  <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Traditional Braces</a></li>
                  <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Clear Braces</a></li>
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
