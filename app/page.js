"use client";

import Image from "next/image";
import { Hero } from "@/components/Hero";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { Testimonials } from "@/components/Testimonials";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

export default function Home() {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isOrthoDropdownOpen, setIsOrthoDropdownOpen] = useState(false);
  const [isPatientResourcesDropdownOpen, setIsPatientResourcesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll animation hooks for different sections
  const [aboutRef, isAboutVisible] = useScrollAnimation(0.2);
  const [drChoyRef, isDrChoyVisible] = useScrollAnimation(0.3);
  const [servicesRef, isServicesVisible] = useScrollAnimation(0.2);
  const [testimonialsRef, isTestimonialsVisible] = useScrollAnimation(0.2);
  const [footerRef, isFooterVisible] = useScrollAnimation(0.1);

  // Testimonials data
  const testimonials = [
    {
      img: "/smiles.jpg",
      quote: "Dr. Choy and his team made my orthodontic journey so comfortable and easy. My smile transformation exceeded all my expectations!",
      name: "Sarah Martinez",
      role: "Adult Patient"
    },
    {
      img: "/braces.jpg", 
      quote: "As a parent, I was worried about my daughter's treatment, but the staff was amazing with kids. She actually looked forward to her appointments!",
      name: "Michael Chen",
      role: "Parent"
    },
    {
      img: "/Test.png",
      quote: "The Invisalign treatment was perfect for my lifestyle. I could eat normally and my colleagues barely noticed I was wearing them.",
      name: "Jennifer Taylor", 
      role: "Professional"
    },
    {
      img: "/xray.jpeg",
      quote: "The advanced technology and personalized care at Crystal Cove Orthodontics made all the difference. Highly recommend!",
      name: "David Rodriguez",
      role: "Teen Patient"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white overflow-x-hidden">
      {/* Header */}
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

            {/* Primary Nav with Animation */}
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
              <a href="/our-practice" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-blue-900 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">
                Our Practice
              </a>
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
                  <a href="/meet-the-doctor" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">
                    Meet the Doctor
                  </a>
                  <a href="/meet-the-staff" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">
                    Meet the Staff
                  </a>
                  <a href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">
                    Blog
                  </a>
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
                  <a href="/invisalign" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">
                    Invisalign Braces
                  </a>
                  <a href="/clear-braces" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">
                    Clear Braces
                  </a>
                  <a href="/traditional-braces" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">
                    Traditional Braces
                  </a>
                  <a href="/night-guards" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">
                    Night Guards
                  </a>
                  <a href="/tmj" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">
                    TMJ
                  </a>
                  <a href="/before-after" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">
                    Before and After
                  </a>
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
                  <a href="/new-patient" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">
                    New Patient
                  </a>
                  <a href="/educational-videos" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">
                    Educational Videos
                  </a>
                  <a href="/faqs" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">
                    FAQs
                  </a>
                  <a href="/new-patient-special-offer" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-blue-800 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">
                    New Patient Special Offer
                  </a>
                </div>
              </div>
              
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-blue-900 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">
                SureSmile
              </a>
              <a href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-blue-900 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/hero-image.png')"}}>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-3 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light italic mb-6 tracking-wide drop-shadow-2xl" style={{fontFamily: 'Georgia, serif', textShadow: '0 8px 16px rgba(0,0,0,0.6), 0 4px 8px rgba(0,0,0,0.4)'}}>
            Welcome to Crystal Cove Orthodontics
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light font-[family-name:var(--font-dancing-script)]">
            Friendly Staff. Beautiful Smiles. Welcoming Environment.
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-90 font-[family-name:var(--font-dancing-script)]">
            Your Orthodontist in Orland Park, IL - Dr. Russell Choy
          </p>
          <div className="flex justify-center items-center">
            <button className="bg-white/30 backdrop-blur-md hover:bg-white/40 text-white border border-white/50 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center gap-3 shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Book Appointment
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Crystal Cove Orthodontics Section */}
      <section 
        ref={aboutRef}
        className={`py-16 bg-gradient-to-b from-blue-50 to-blue-50 relative transition-all duration-600 ease-out ${
          isAboutVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side - Image Grid */}
            <div 
                          className={`relative mt-16 transition-all duration-600 ease-out delay-200 ${
              isAboutVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            >
              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-400 rounded-full opacity-30"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-300 rounded-full"></div>
              
              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {/* Left - Modern Equipment (positioned higher) */}
                <div className="bg-white rounded-xl overflow-hidden shadow-xl" style={{width: '280px', height: '480px'}}>
                  <img 
                    src="/Image-1.png" 
                    alt="Modern orthodontic equipment" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Right - Patient Care (positioned lower with offset) */}
                <div className="bg-white rounded-xl overflow-hidden shadow-xl mt-12" style={{width: '280px', height: '480px'}}>
                  <img 
                    src="/Image-2.png" 
                    alt="Orthodontic treatment in progress" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Decorative dots pattern */}
              <div className="absolute bottom-0 right-0 grid grid-cols-4 gap-2 opacity-40">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-blue-300 rounded-full"></div>
                ))}
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div 
                          className={`transition-all duration-600 ease-out delay-300 ${
              isAboutVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">About Crystal Cove Orthodontics</h2>
              <div className="text-lg text-slate-700 mb-8 leading-relaxed space-y-4">
                <p>
                  Our orthodontic practice, located in the city of <strong>Orland Park</strong>, is built upon the values of accommodation and friendliness. We take pride in offering affordable yet high-quality orthodontic services while ensuring convenience for our patients.
                </p>
                
                <p>
                  We prioritize creating a positive and welcoming environment for both our patients and employees. We are dedicated to delivering services that not only meet your expectations but surpass them, achieved by employing the finest materials and techniques.
                </p>
                
                <p>
                  Our services include <strong>traditional metal braces, clear ceramic braces, Invisalign clear aligners, SureSmile digital orthodontics, retainers, night guards, TMJ treatment, and early interceptive treatment</strong>. Situated conveniently in <strong>Orland Park</strong>, our location eliminates the need for extensive travel, allowing you to easily access our services.
                </p>
                
                <p>
                  We understand the demands of your busy schedule and strive to accommodate your orthodontic needs. Whether you require a routine orthodontic consultation or comprehensive orthodontic treatment, rest assured that we have all your orthodontic needs covered.
                </p>
              </div>
            </div>
            
          </div>
          
          <div 
            ref={drChoyRef}
            className={`mt-16 bg-white rounded-xl shadow-2xl p-8 border-2 border-blue-900 transition-all duration-600 ease-out ${
              isDrChoyVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`} 
            style={{boxShadow: '0 25px 50px -12px rgba(37, 99, 235, 0.3), 0 10px 20px -5px rgba(59, 130, 246, 0.15)'}}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Text Content */}
              <div 
                className={`transition-all duration-600 ease-out delay-200 ${
                  isDrChoyVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Dr. Russell Choy</h3>
                <p className="text-lg italic text-black mb-6">Your Orland Park Orthodontist</p>
                
                <div className="text-lg text-slate-700 leading-relaxed">
                  <p>
                    Dr. Choy has enjoyed a long and rewarding career in Orthodontistry. He first worked as a licensed orthodontic hygienist. From there he attended Southern Illinois University where he obtained the Degree of Doctor of Dental Medicine (D.M.D). He then completed two additional years of specialty training in orthodontics at St. Louis University where he obtained his Masters of Science Degree (M.S.). 
                    <a 
                      href="/meet-the-doctor" 
                      className="text-blue-500 hover:text-blue-600 font-medium transition-colors ml-1"
                    >
                      Read More
                    </a>
                  </p>
                </div>
              </div>
              
              {/* Right Side - Dr. Choy's Image */}
              <div 
                className={`flex justify-center lg:justify-center transition-all duration-600 ease-out delay-400 ${
                  isDrChoyVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="relative lg:ml-8">
                  <Image
                    src="/test_DR_CHOY.png"
                    alt="Dr. Russell Choy"
                    width={300}
                    height={400}
                    className="rounded-lg shadow-lg object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesRef}
        id="services" 
        className={`py-8 bg-gradient-to-b from-blue-50 to-blue-50 relative transition-all duration-600 ease-out ${isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-20"></div>
          <div className="absolute top-1/2 -left-32 w-64 h-64 bg-blue-200 rounded-full opacity-15"></div>
        </div>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`bg-gradient-to-br from-blue-900 to-slate-700 rounded-lg p-8 shadow-lg border border-blue-800 transition-all duration-600 ease-out delay-100 ${isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className={`mb-8 text-center transition-all duration-600 ease-out delay-200 ${isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Services</h2>
                <p className="text-lg text-white leading-relaxed">We offer comprehensive orthodontic solutions to create beautiful, healthy smiles for patients of all ages.</p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Braces for Children and Adults</h3>
                  <p className="text-slate-700">Traditional metal braces are the most effective and affordable option for correcting complex orthodontic issues.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Invisalign</h3>
                  <p className="text-slate-700">Clear, removable aligners that straighten teeth discreetly without metal brackets.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">SureSmile</h3>
                  <p className="text-slate-700">Advanced digital orthodontics using 3D imaging and robotically bent wires for precise treatment.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Removable Appliances</h3>
                  <p className="text-slate-700">Custom retainers, night guards, and space maintainers designed to protect your investment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        ref={testimonialsRef}
        className={`py-16 bg-white relative transition-all duration-600 ease-out ${isTestimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className={`text-center mb-12 transition-all duration-600 ease-out delay-200 ${isTestimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">What Our Patients Say</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Discover why families throughout Orland Park trust Crystal Cove Orthodontics for their smile transformations.
              </p>
            </div>
            <Testimonials testimonials={testimonials} isVisible={isTestimonialsVisible} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        ref={footerRef}
        className={`bg-gradient-to-b from-slate-900 to-slate-800 text-white transition-all duration-600 ease-out ${isFooterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-600 ease-out delay-200 ${isFooterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/Test_LOGO_WEBDEV.png" alt="Crystal Cove Orthodontics" width={40} height={40} className="rounded-full" />
                <h3 className="text-xl font-bold">Crystal Cove Orthodontics</h3>
              </div>
              <p className="text-gray-700 mb-4">
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
            className={`border-t border-blue-700 mt-8 pt-8 text-center text-blue-200 transition-all duration-600 ease-out delay-300 ${isFooterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p>&copy; 2024 Crystal Cove Orthodontics. All rights reserved.</p>
        </div>
        </div>
      </footer>
    </div>
  );
}