"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import Image from "next/image";
import { useState } from "react";

export default function OurPracticePage() {
  // State for flip cards
  const [flippedCards, setFlippedCards] = useState({});

  // Function to handle card flip
  const handleCardFlip = (cardId) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  // Scroll animation hooks for different sections
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.2);
  const [facilityRef, isFacilityVisible] = useScrollAnimation(0.2);
  const [appointmentsRef, isAppointmentsVisible] = useScrollAnimation(0.2);
  const [financialRef, isFinancialVisible] = useScrollAnimation(0.2);
  const [cancellationRef, isCancellationVisible] = useScrollAnimation(0.2);
  const [whyChooseRef, isWhyChooseVisible] = useScrollAnimation(0.2);
  const [thankYouRef, isThankYouVisible] = useScrollAnimation(0.2);
  const [footerRef, isFooterVisible] = useScrollAnimation(0.2);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <SiteHeader />
      <div className="h-20 lg:h-24" />

      {/* Header Section - use hero background */}
      <section 
        ref={headerRef}
        className="relative w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-image.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-all duration-300 ease-out ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-6xl font-light italic text-white tracking-wide mb-4" style={{fontFamily: 'Georgia, serif'}}>
            Our Practice
          </h1>
          <p className="text-xl text-white/90 font-light">
            A Beautiful Practice For All Your Orthodontic Needs
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-16 opacity-100 translate-y-0"
          >
            <h2 className="text-4xl md:text-5xl font-light italic text-blue-900 mb-6 tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
              Welcome to Excellence in Orthodontics
            </h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Georgia, serif'}}>
              At Crystal Cove Orthodontics, we don't just straighten teeth—we transform lives. 
              Our commitment to creating beautiful smiles and confident patients has made us the trusted choice 
              for orthodontic care in Newport Beach and beyond.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-500 rounded-xl p-6 shadow-lg border border-slate-900">
              <div className="text-4xl font-bold text-white mb-2" style={{fontFamily: 'Georgia, serif'}}>2,500+</div>
              <div className="text-cyan-100 font-medium" style={{fontFamily: 'Georgia, serif'}}>Smiles Transformed</div>
            </div>
            <div className="text-center bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-500 rounded-xl p-6 shadow-lg border border-slate-900">
              <div className="text-4xl font-bold text-white mb-2" style={{fontFamily: 'Georgia, serif'}}>15+</div>
              <div className="text-cyan-100 font-medium" style={{fontFamily: 'Georgia, serif'}}>Years of Excellence</div>
            </div>
            <div className="text-center bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-500 rounded-xl p-6 shadow-lg border border-slate-900">
              <div className="text-4xl font-bold text-white mb-2" style={{fontFamily: 'Georgia, serif'}}>98%</div>
              <div className="text-cyan-100 font-medium" style={{fontFamily: 'Georgia, serif'}}>Patient Satisfaction</div>
            </div>
            <div className="text-center bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-500 rounded-xl p-6 shadow-lg border border-slate-900">
              <div className="text-4xl font-bold text-white mb-2" style={{fontFamily: 'Georgia, serif'}}>24/7</div>
              <div className="text-cyan-100 font-medium" style={{fontFamily: 'Georgia, serif'}}>Emergency Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light italic text-blue-900 mb-6 tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Georgia, serif'}}>
              We offer a complete range of orthodontic solutions to create beautiful, healthy smiles for patients of all ages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Traditional Braces */}
            <div className="relative h-80 cursor-pointer perspective-1000" onClick={() => handleCardFlip('traditional')}>
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flippedCards.traditional ? 'rotate-y-180' : ''}`}>
                {/* Front of card */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-200 backface-hidden flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center" style={{fontFamily: 'Georgia, serif'}}>Traditional Braces</h3>
                  <p className="text-slate-600 text-center text-sm" style={{fontFamily: 'Georgia, serif'}}>Click to learn more</p>
                </div>
                {/* Back of card */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-200 backface-hidden rotate-y-180 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 text-center" style={{fontFamily: 'Georgia, serif'}}>Traditional Braces</h3>
                  <p className="text-slate-700 text-center leading-relaxed" style={{fontFamily: 'Georgia, serif'}}>
                    The most effective and affordable option for correcting complex orthodontic issues with proven results.
                  </p>
                  <p className="text-slate-600 text-center text-sm mt-4" style={{fontFamily: 'Georgia, serif'}}>Click to flip back</p>
                </div>
              </div>
            </div>

            {/* Invisalign */}
            <div className="relative h-80 cursor-pointer perspective-1000" onClick={() => handleCardFlip('invisalign')}>
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flippedCards.invisalign ? 'rotate-y-180' : ''}`}>
                {/* Front of card */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-200 backface-hidden flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center" style={{fontFamily: 'Georgia, serif'}}>Invisalign</h3>
                  <p className="text-slate-600 text-center text-sm" style={{fontFamily: 'Georgia, serif'}}>Click to learn more</p>
                </div>
                {/* Back of card */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-200 backface-hidden rotate-y-180 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 text-center" style={{fontFamily: 'Georgia, serif'}}>Invisalign</h3>
                  <p className="text-slate-700 text-center leading-relaxed" style={{fontFamily: 'Georgia, serif'}}>
                    Clear, removable aligners that straighten teeth discreetly without metal brackets or wires.
                  </p>
                  <p className="text-slate-600 text-center text-sm mt-4" style={{fontFamily: 'Georgia, serif'}}>Click to flip back</p>
                </div>
              </div>
            </div>

            {/* SureSmile */}
            <div className="relative h-80 cursor-pointer perspective-1000" onClick={() => handleCardFlip('suresmile')}>
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flippedCards.suresmile ? 'rotate-y-180' : ''}`}>
                {/* Front of card */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-200 backface-hidden flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center" style={{fontFamily: 'Georgia, serif'}}>SureSmile</h3>
                  <p className="text-slate-600 text-center text-sm" style={{fontFamily: 'Georgia, serif'}}>Click to learn more</p>
                </div>
                {/* Back of card */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-200 backface-hidden rotate-y-180 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 text-center" style={{fontFamily: 'Georgia, serif'}}>SureSmile</h3>
                  <p className="text-slate-700 text-center leading-relaxed" style={{fontFamily: 'Georgia, serif'}}>
                    Advanced digital orthodontics using 3D imaging and robotically bent wires for precise treatment.
                  </p>
                  <p className="text-slate-600 text-center text-sm mt-4" style={{fontFamily: 'Georgia, serif'}}>Click to flip back</p>
                </div>
              </div>
            </div>

            {/* Early Treatment */}
            <div className="relative h-80 cursor-pointer perspective-1000" onClick={() => handleCardFlip('early')}>
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flippedCards.early ? 'rotate-y-180' : ''}`}>
                {/* Front of card */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-200 backface-hidden flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center" style={{fontFamily: 'Georgia, serif'}}>Early Treatment</h3>
                  <p className="text-slate-600 text-center text-sm" style={{fontFamily: 'Georgia, serif'}}>Click to learn more</p>
                </div>
                {/* Back of card */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-200 backface-hidden rotate-y-180 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 text-center" style={{fontFamily: 'Georgia, serif'}}>Early Treatment</h3>
                  <p className="text-slate-700 text-center leading-relaxed" style={{fontFamily: 'Georgia, serif'}}>
                    Interceptive orthodontics for children to guide jaw growth and prevent future problems.
                  </p>
                  <p className="text-slate-600 text-center text-sm mt-4" style={{fontFamily: 'Georgia, serif'}}>Click to flip back</p>
                </div>
              </div>
            </div>

            {/* Adult Treatment */}
            <div className="relative h-80 cursor-pointer perspective-1000" onClick={() => handleCardFlip('adult')}>
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flippedCards.adult ? 'rotate-y-180' : ''}`}>
                {/* Front of card */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-200 backface-hidden flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center" style={{fontFamily: 'Georgia, serif'}}>Adult Treatment</h3>
                  <p className="text-slate-600 text-center text-sm" style={{fontFamily: 'Georgia, serif'}}>Click to learn more</p>
                </div>
                {/* Back of card */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-200 backface-hidden rotate-y-180 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 text-center" style={{fontFamily: 'Georgia, serif'}}>Adult Treatment</h3>
                  <p className="text-slate-700 text-center leading-relaxed" style={{fontFamily: 'Georgia, serif'}}>
                    Specialized orthodontic solutions for adults seeking to improve their smile and oral health.
                  </p>
                  <p className="text-slate-600 text-center text-sm mt-4" style={{fontFamily: 'Georgia, serif'}}>Click to flip back</p>
                </div>
              </div>
            </div>

            {/* Retainers & Appliances */}
            <div className="relative h-80 cursor-pointer perspective-1000" onClick={() => handleCardFlip('retainers')}>
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flippedCards.retainers ? 'rotate-y-180' : ''}`}>
                {/* Front of card */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-200 backface-hidden flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center" style={{fontFamily: 'Georgia, serif'}}>Retainers & Appliances</h3>
                  <p className="text-slate-600 text-center text-sm" style={{fontFamily: 'Georgia, serif'}}>Click to learn more</p>
                </div>
                {/* Back of card */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-200 backface-hidden rotate-y-180 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 text-center" style={{fontFamily: 'Georgia, serif'}}>Retainers & Appliances</h3>
                  <p className="text-slate-700 text-center leading-relaxed" style={{fontFamily: 'Georgia, serif'}}>
                    Custom retainers, night guards, and specialized appliances to protect your investment.
                  </p>
                  <p className="text-slate-600 text-center text-sm mt-4" style={{fontFamily: 'Georgia, serif'}}>Click to flip back</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Facilities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light italic text-blue-900 mb-6 tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
              State-of-the-Art Technology & Facilities
            </h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Georgia, serif'}}>
              Experience the future of orthodontics with our cutting-edge technology and modern, welcoming environment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Technology Content */}
            <div>
              <h3 className="text-3xl font-bold text-blue-900 mb-6" style={{fontFamily: 'Georgia, serif'}}>Advanced Technology</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-900 mb-2" style={{fontFamily: 'Georgia, serif'}}>Digital X-Rays</h4>
                    <p className="text-slate-700" style={{fontFamily: 'Georgia, serif'}}>
                      Low-radiation digital imaging for precise diagnosis and treatment planning with instant results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-green-900 mb-2" style={{fontFamily: 'Georgia, serif'}}>3D Scanning</h4>
                    <p className="text-slate-700" style={{fontFamily: 'Georgia, serif'}}>
                      Advanced 3D imaging technology for comprehensive treatment planning and progress tracking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-purple-900 mb-2" style={{fontFamily: 'Georgia, serif'}}>Laser Dentistry</h4>
                    <p className="text-slate-700" style={{fontFamily: 'Georgia, serif'}}>
                      Precise, minimally invasive procedures with faster healing and reduced discomfort.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-orange-900 mb-2" style={{fontFamily: 'Georgia, serif'}}>Digital Treatment Planning</h4>
                    <p className="text-slate-700" style={{fontFamily: 'Georgia, serif'}}>
                      Computer-aided treatment planning for predictable, efficient results.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Facility Image Placeholder */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 shadow-lg border border-blue-300">
              <div className="aspect-video bg-white rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="text-blue-600 font-semibold" style={{fontFamily: 'Georgia, serif'}}>Modern Clinic Photos</p>
                  <p className="text-blue-500 text-sm" style={{fontFamily: 'Georgia, serif'}}>Clean & Welcoming Environment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Facility Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mb-3" style={{fontFamily: 'Georgia, serif'}}>Comfortable Environment</h4>
              <p className="text-slate-700" style={{fontFamily: 'Georgia, serif'}}>
                Relaxing waiting areas, private consultation rooms, and entertainment options for all ages.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mb-3" style={{fontFamily: 'Georgia, serif'}}>Safety & Hygiene</h4>
              <p className="text-slate-700" style={{fontFamily: 'Georgia, serif'}}>
                Exceeds OSHA & CDC standards with advanced sterilization and air purification systems.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mb-3" style={{fontFamily: 'Georgia, serif'}}>Modern Equipment</h4>
              <p className="text-slate-700" style={{fontFamily: 'Georgia, serif'}}>
                Latest orthodontic technology and equipment for precise, efficient treatment delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* Facility Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={facilityRef}
            className={`bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg border border-blue-200 transition-all duration-300 ease-out ${isFacilityVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-blue-900" style={{fontFamily: 'Georgia, serif'}}>State-of-the-Art Facility</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6" style={{fontFamily: 'Georgia, serif'}}>
              Step into our <strong>luxurious, modern facility</strong> designed with your comfort and safety in mind. 
              Our office features the latest in orthodontic technology, including 3D digital scanning, 
              advanced treatment planning software, and cutting-edge equipment that ensures precise, efficient care.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2" style={{fontFamily: 'Georgia, serif'}}>✨ Premium Amenities</h4>
                <ul className="text-slate-600 space-y-1" style={{fontFamily: 'Georgia, serif'}}>
                  <li>• Comfortable waiting area with refreshments</li>
                  <li>• Private consultation rooms</li>
                  <li>• Entertainment options for all ages</li>
                  <li>• Free Wi-Fi and charging stations</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2" style={{fontFamily: 'Georgia, serif'}}>🛡️ Safety & Standards</h4>
                <ul className="text-slate-600 space-y-1" style={{fontFamily: 'Georgia, serif'}}>
                  <li>• Exceeds OSHA & CDC standards</li>
                  <li>• Advanced sterilization protocols</li>
                  <li>• Air purification systems</li>
                  <li>• Regular safety audits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointments Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={appointmentsRef}
            className={`bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-200 transition-all duration-300 ease-out ${isAppointmentsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-blue-900" style={{fontFamily: 'Georgia, serif'}}>Easy Appointment Scheduling</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6" style={{fontFamily: 'Georgia, serif'}}>
              Getting started with your smile transformation has never been easier! We offer <strong>flexible scheduling options</strong> 
              to accommodate your busy lifestyle, including early morning, evening, and weekend appointments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 text-center border border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-blue-900 mb-2" style={{fontFamily: 'Georgia, serif'}}>📞 Call Us</h4>
                <p className="text-slate-600 text-sm" style={{fontFamily: 'Georgia, serif'}}>Speak directly with our friendly staff</p>
                <p className="text-blue-600 font-semibold mt-2" style={{fontFamily: 'Georgia, serif'}}>(949) 555-0123</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center border border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-blue-900 mb-2" style={{fontFamily: 'Georgia, serif'}}>📧 Email Us</h4>
                <p className="text-slate-600 text-sm" style={{fontFamily: 'Georgia, serif'}}>Send us a message anytime</p>
                <p className="text-blue-600 font-semibold mt-2" style={{fontFamily: 'Georgia, serif'}}>info@crystalcoveortho.com</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center border border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-blue-900 mb-2" style={{fontFamily: 'Georgia, serif'}}>⚡ Quick Response</h4>
                <p className="text-slate-600 text-sm" style={{fontFamily: 'Georgia, serif'}}>We respond within 2 hours</p>
                <p className="text-green-600 font-semibold mt-2" style={{fontFamily: 'Georgia, serif'}}>24/7 Emergency Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={financialRef}
            className={`bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-green-200 transition-all duration-300 ease-out ${isFinancialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-blue-900" style={{fontFamily: 'Georgia, serif'}}>Affordable Care Options</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6" style={{fontFamily: 'Georgia, serif'}}>
              We believe that <strong>everyone deserves a beautiful smile</strong>, regardless of their budget. That's why we offer 
              flexible payment options and work with most insurance providers to make your orthodontic treatment as affordable as possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 border border-green-100">
                <h4 className="font-semibold text-green-800 mb-4 text-lg" style={{fontFamily: 'Georgia, serif'}}>💳 Payment Options</h4>
                <ul className="space-y-3 text-slate-700" style={{fontFamily: 'Georgia, serif'}}>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span><strong>Flexible Payment Plans:</strong> 0% interest financing available</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span><strong>Multiple Payment Methods:</strong> Cash, check, credit cards</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span><strong>Family Discounts:</strong> Special rates for multiple family members</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span><strong>No Hidden Fees:</strong> Transparent pricing from day one</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 border border-green-100">
                <h4 className="font-semibold text-green-800 mb-4 text-lg" style={{fontFamily: 'Georgia, serif'}}>🛡️ Insurance & Benefits</h4>
                <ul className="space-y-3 text-slate-700" style={{fontFamily: 'Georgia, serif'}}>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span><strong>Insurance Processing:</strong> We handle all paperwork for you</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span><strong>Maximize Benefits:</strong> Get the most from your coverage</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span><strong>Third-Party Financing:</strong> CareCredit and other options</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span><strong>Free Consultations:</strong> No cost for initial evaluation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient-Centered Care Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={cancellationRef}
            className={`bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-pink-200 transition-all duration-300 ease-out ${isCancellationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-blue-900" style={{fontFamily: 'Georgia, serif'}}>Patient-Centered Care</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6" style={{fontFamily: 'Georgia, serif'}}>
              Your comfort and well-being are our top priorities. We believe in <strong>pain-free dentistry</strong> and offer 
              various comfort options to ensure your treatment experience is as pleasant as possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 border border-pink-100">
                <h4 className="font-semibold text-pink-800 mb-4 text-lg" style={{fontFamily: 'Georgia, serif'}}>🛡️ Comfort & Safety</h4>
                <ul className="space-y-3 text-slate-700" style={{fontFamily: 'Georgia, serif'}}>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    <span><strong>Pain-Free Dentistry:</strong> Gentle techniques and modern technology</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    <span><strong>Sedation Options:</strong> Nitrous oxide and oral sedation available</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    <span><strong>Anxiety Management:</strong> Relaxing environment and patient education</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    <span><strong>Child-Friendly:</strong> Special care for our youngest patients</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 border border-pink-100">
                <h4 className="font-semibold text-pink-800 mb-4 text-lg" style={{fontFamily: 'Georgia, serif'}}>🎯 Personalized Treatment</h4>
                <ul className="space-y-3 text-slate-700" style={{fontFamily: 'Georgia, serif'}}>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    <span><strong>Individualized Plans:</strong> Tailored to your unique needs</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    <span><strong>Progress Monitoring:</strong> Regular check-ins and adjustments</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    <span><strong>Patient Education:</strong> Clear explanations and treatment options</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    <span><strong>Ongoing Support:</strong> Available for questions and concerns</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Expertise Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={cancellationRef}
            className={`bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-200 transition-all duration-300 ease-out ${isCancellationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-blue-900" style={{fontFamily: 'Georgia, serif'}}>Team Expertise</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6" style={{fontFamily: 'Georgia, serif'}}>
              Our experienced team brings together decades of orthodontic expertise, advanced training, and a passion for 
              creating beautiful smiles. Meet the professionals dedicated to your orthodontic journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-4 text-lg" style={{fontFamily: 'Georgia, serif'}}>👨‍⚕️ Dr. Russell Choy</h4>
                <ul className="space-y-3 text-slate-700" style={{fontFamily: 'Georgia, serif'}}>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span><strong>Education:</strong> Advanced orthodontic training and certifications</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span><strong>Experience:</strong> 15+ years in orthodontic practice</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span><strong>Specialties:</strong> Invisalign, SureSmile, adult orthodontics</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span><strong>Approach:</strong> Patient-centered, gentle, and effective</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-4 text-lg" style={{fontFamily: 'Georgia, serif'}}>👥 Our Team</h4>
                <ul className="space-y-3 text-slate-700" style={{fontFamily: 'Georgia, serif'}}>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span><strong>Certified Staff:</strong> Licensed orthodontic assistants and hygienists</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span><strong>Ongoing Training:</strong> Regular continuing education and skill development</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span><strong>Patient Care:</strong> Compassionate, experienced, and dedicated</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span><strong>Technology:</strong> Trained in latest orthodontic techniques</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Policy Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={cancellationRef}
            className={`bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg border border-orange-200 transition-all duration-300 ease-out ${isCancellationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-blue-900" style={{fontFamily: 'Georgia, serif'}}>Appointment Policy</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6" style={{fontFamily: 'Georgia, serif'}}>
              We value your time and ours! To ensure we can provide the best care for all our patients, 
              we kindly request <strong>24 hours notice</strong> for any appointment changes or cancellations.
            </p>
            <div className="bg-white rounded-lg p-6 border border-orange-100">
              <h4 className="font-semibold text-orange-800 mb-4 text-lg" style={{fontFamily: 'Georgia, serif'}}>📋 Our Policy</h4>
              <ul className="space-y-3 text-slate-700" style={{fontFamily: 'Georgia, serif'}}>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                  <span><strong>24-Hour Notice:</strong> Please notify us at least 24 hours before your appointment</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                  <span><strong>Emergency Situations:</strong> We understand emergencies happen and will work with you</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                  <span><strong>No-Show Policy:</strong> A fee may apply for missed appointments without notice</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                  <span><strong>Rescheduling:</strong> We're happy to help you find a more convenient time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className={`bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg border border-blue-200 transition-all duration-600 ease-out ${isWhyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4" style={{fontFamily: 'Georgia, serif'}}>What Our Patients Say</h2>
              <p className="text-lg text-slate-700" style={{fontFamily: 'Georgia, serif'}}>Real stories from real patients who transformed their smiles with us</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div className="bg-white rounded-lg p-6 shadow-md border border-blue-100">
                 <div className="flex items-center mb-4">
                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                     <span className="text-blue-600 font-semibold">SM</span>
                   </div>
                  <div>
                    <h4 className="font-semibold text-blue-900" style={{fontFamily: 'Georgia, serif'}}>Sarah Martinez</h4>
                    <p className="text-sm text-slate-600" style={{fontFamily: 'Georgia, serif'}}>Adult Patient</p>
                  </div>
                </div>
                <p className="text-slate-700 italic" style={{fontFamily: 'Georgia, serif'}}>"Dr. Choy and his team made my orthodontic journey so comfortable and easy. My smile transformation exceeded all my expectations!"</p>
                <div className="flex text-yellow-400 mt-3">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
                             <div className="bg-white rounded-lg p-6 shadow-md border border-blue-100">
                 <div className="flex items-center mb-4">
                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                     <span className="text-blue-600 font-semibold">MC</span>
                   </div>
                  <div>
                    <h4 className="font-semibold text-blue-900" style={{fontFamily: 'Georgia, serif'}}>Michael Chen</h4>
                    <p className="text-sm text-slate-600" style={{fontFamily: 'Georgia, serif'}}>Parent</p>
                  </div>
                </div>
                <p className="text-slate-700 italic" style={{fontFamily: 'Georgia, serif'}}>"As a parent, I was worried about my daughter's treatment, but the staff was amazing with kids. She actually looked forward to her appointments!"</p>
                <div className="flex text-yellow-400 mt-3">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

             {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={whyChooseRef}
            className={`bg-gradient-to-br from-blue-900 to-slate-800 rounded-2xl shadow-xl p-8 border border-blue-700 transition-all duration-300 ease-out ${isWhyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center" style={{fontFamily: 'Georgia, serif'}}>Why Choose Crystal Cove Orthodontics?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3" style={{fontFamily: 'Georgia, serif'}}>Advanced Technology</h3>
                <p className="text-blue-100" style={{fontFamily: 'Georgia, serif'}}>Latest 3D scanning, digital treatment planning, and cutting-edge equipment for precise results.</p>
              </div>
              
              <div className="text-center bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0 a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3" style={{fontFamily: 'Georgia, serif'}}>Personalized Care</h3>
                <p className="text-blue-100" style={{fontFamily: 'Georgia, serif'}}>Individualized treatment plans tailored to your unique needs and lifestyle.</p>
              </div>
              
              <div className="text-center bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3" style={{fontFamily: 'Georgia, serif'}}>Flexible Scheduling</h3>
                <p className="text-blue-100" style={{fontFamily: 'Georgia, serif'}}>Early morning, evening, and weekend appointments to fit your busy lifestyle.</p>
              </div>

              <div className="text-center bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3" style={{fontFamily: 'Georgia, serif'}}>Compassionate Care</h3>
                <p className="text-blue-100" style={{fontFamily: 'Georgia, serif'}}>Warm, welcoming environment where every patient feels like family.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">













        </div>
      </section>

      {/* Footer */}
      <footer 
        ref={footerRef}
        className={`bg-gradient-to-b from-slate-900 to-slate-800 text-white transition-all duration-300 ease-out ${isFooterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-300 ease-out delay-100 ${isFooterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/Test_LOGO_WEBDEV.png" alt="Crystal Cove Orthodontics" width={40} height={40} className="rounded-full" />
                <h3 className="text-xl font-bold">Crystal Cove Orthodontics</h3>
              </div>
              <p className="text-blue-200 mb-4">
                Creating beautiful smiles and confident patients through exceptional orthodontic care.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/our-practice" className="text-blue-200 hover:text-white transition-colors">Our Practice</a></li>
                <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Our Orthodontic Care</a></li>
                <li><a href="#resources" className="text-blue-200 hover:text-white transition-colors">Patient Resources</a></li>
                <li><a href="#testimonials" className="text-blue-200 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="/contact" className="text-blue-200 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="/traditional-braces" className="text-blue-200 hover:text-white transition-colors">Traditional Braces</a></li>
                <li><a href="/invisalign" className="text-blue-200 hover:text-white transition-colors">Invisalign</a></li>
                <li><a href="/clear-braces" className="text-blue-200 hover:text-white transition-colors">Clear Braces</a></li>
                <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">SureSmile</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="text-blue-200 space-y-2">
                <p>123 Crystal Cove Drive<br />Newport Beach, CA 92660</p>
                <p>Phone: (949) 555-0123</p>
                <p>Email: info@crystalcoveortho.com</p>
              </div>
            </div>
          </div>
          <div 
            className={`border-t border-blue-700 mt-8 pt-8 text-center text-blue-200 transition-all duration-300 ease-out delay-150 ${isFooterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p>&copy; 2024 Crystal Cove Orthodontics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}