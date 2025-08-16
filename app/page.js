"use client";

import Image from "next/image";
import { Hero } from "@/components/Hero";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isOrthoDropdownOpen, setIsOrthoDropdownOpen] = useState(false);
  const [isPatientResourcesDropdownOpen, setIsPatientResourcesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-blue-200 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="/" className="flex items-center gap-2 flex-shrink-0 min-w-0 hover:opacity-80 transition-opacity cursor-pointer">
        <Image
                src="/Test_LOGO_WEBDEV.png"
                alt="Crystal Cove Orthodontics logo"
                width={200}
                height={80}
                className="h-14 md:h-16 lg:h-20 w-auto object-contain"
          priority
        />
              <h1 className="text-xl md:text-2xl lg:text-3xl font-medium text-slate-800 whitespace-nowrap" style={{fontFamily: "'Baguet Script', 'Brush Script MT', cursive"}}>Dr. Russell Choy</h1>
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

            {/* Mobile menu button */}
            <button 
              className="lg:hidden text-slate-800 hover:text-slate-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              <a href="/our-practice" className="block px-3 py-2 text-slate-700 hover:text-slate-800 hover:bg-gray-50 rounded-md transition-colors">
                Our Practice
              </a>
              
              {/* About Us Section */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-slate-800 font-medium">About Us</div>
                <a href="/meet-the-doctor" className="block px-6 py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded-md transition-colors">
                  Meet the Doctor
                </a>
                <a href="/meet-the-staff" className="block px-6 py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded-md transition-colors">
                  Meet the Staff
                </a>
                <a href="/blog" className="block px-6 py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded-md transition-colors">
                  Blog
                </a>
              </div>
              
              {/* Orthodontic Care Section */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-slate-800 font-medium">Our Orthodontic Care</div>
                <a href="/invisalign" className="block px-6 py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded-md transition-colors">
                  Invisalign Braces
                </a>
                <a href="/clear-braces" className="block px-6 py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded-md transition-colors">
                  Clear Braces
                </a>
                <a href="/traditional-braces" className="block px-6 py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded-md transition-colors">
                  Traditional Braces
                </a>
                <a href="/night-guards" className="block px-6 py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded-md transition-colors">
                  Night Guards
                </a>
                <a href="/tmj" className="block px-6 py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded-md transition-colors">
                  TMJ
                </a>
                <a href="/before-after" className="block px-6 py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded-md transition-colors">
                  Before and After
                </a>
              </div>
              
              {/* Patient Resources Section */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-slate-800 font-medium">Patient Resources</div>
                <a href="/new-patient" className="block px-6 py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded-md transition-colors">
                  New Patient
                </a>
                <a href="/educational-videos" className="block px-6 py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded-md transition-colors">
                  Educational Videos
                </a>
                <a href="/faqs" className="block px-6 py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded-md transition-colors">
                  FAQs
                </a>
                <a href="/new-patient-special-offer" className="block px-6 py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded-md transition-colors">
                  New Patient Special Offer
                </a>
              </div>
              
              <a href="#services" className="block px-3 py-2 text-slate-700 hover:text-slate-800 hover:bg-gray-50 rounded-md transition-colors">
                SureSmile
              </a>
              <a href="/contact" className="block px-3 py-2 text-slate-700 hover:text-slate-800 hover:bg-gray-50 rounded-md transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/hero-image.png')"}}>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light italic mb-6 tracking-wide drop-shadow-2xl" style={{fontFamily: 'Georgia, serif', textShadow: '0 8px 16px rgba(0,0,0,0.6), 0 4px 8px rgba(0,0,0,0.4)'}}>
            Welcome to Crystal Cove Orthodontics
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">
            Friendly Staff. Beautiful Smiles. Welcoming Environment.
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Your Orthodontist in Orland Park, IL - Dr. Russell Choy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </button>
            <button className="bg-white/30 backdrop-blur-md hover:bg-white/40 text-white border border-white/50 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center gap-3 shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Book Appointment
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Crystal Cove Orthodontics Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side - Image Grid */}
            <div className="relative mt-16">
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
            <div>
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
          
          <div className="mt-16 bg-white rounded-xl shadow-2xl p-8 border-2 border-blue-900" style={{boxShadow: '0 25px 50px -12px rgba(37, 99, 235, 0.3), 0 10px 20px -5px rgba(59, 130, 246, 0.15)'}}>
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
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gradient-to-b from-blue-50 to-blue-50 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-20"></div>
          <div className="absolute top-1/2 -left-32 w-64 h-64 bg-blue-200 rounded-full opacity-15"></div>
        </div>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Centered Title and Description */}
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">Our Services</h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                We offer comprehensive orthodontic solutions to create beautiful, healthy smiles for patients of all ages.
              </p>
            </div>
            
            {/* Services Grid - One Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Braces for Children and Adults */}
              <div className="group relative">
                <a href="/traditional-braces" className="block bg-white rounded-lg p-6 text-center border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-slate-800 leading-tight">Braces for Children and Adults</h3>
                </a>
                
                {/* Popup Tooltip - Below */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-80 bg-slate-800 text-white rounded-lg p-5 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-1">
                    <div className="w-3 h-3 bg-slate-800 rotate-45"></div>
                  </div>
                  <h4 className="font-semibold mb-2 text-white text-sm">Braces for Children and Adults</h4>
                  <p className="text-xs leading-relaxed text-gray-200">Traditional metal braces are the most effective and affordable option for correcting complex orthodontic issues. They provide precise control for achieving optimal results in both children and adults.</p>
                </div>
              </div>

              {/* Invisalign */}
              <div className="group relative">
                <a href="/invisalign" className="block bg-white rounded-lg p-6 text-center border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-slate-800 leading-tight">Invisalign</h3>
                </a>
                
                {/* Popup Tooltip - Below */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-80 bg-slate-800 text-white rounded-lg p-5 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-1">
                    <div className="w-3 h-3 bg-slate-800 rotate-45"></div>
                  </div>
                  <h4 className="font-semibold mb-2 text-white text-sm">Invisalign</h4>
                  <p className="text-xs leading-relaxed text-gray-200">Clear, removable aligners that straighten teeth discreetly without metal brackets. Perfect for adults and teens who want to maintain their confidence while achieving a perfect smile.</p>
                </div>
              </div>

              {/* SureSmile */}
              <div className="group relative">
                <a href="#services" className="block bg-white rounded-lg p-6 text-center border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-slate-800 leading-tight">SureSmile</h3>
                </a>
                
                {/* Popup Tooltip - Below */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-80 bg-slate-800 text-white rounded-lg p-5 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-1">
                    <div className="w-3 h-3 bg-slate-800 rotate-45"></div>
                  </div>
                  <h4 className="font-semibold mb-2 text-white text-sm">SureSmile</h4>
                  <p className="text-xs leading-relaxed text-gray-200">Advanced digital orthodontics using 3D imaging and robotically bent wires for faster, more precise treatment. Reduces treatment time while delivering exceptional results with greater comfort.</p>
                </div>
              </div>

              {/* Removable Appliances */}
              <div className="group relative">
                <a href="#services" className="block bg-white rounded-lg p-6 text-center border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-slate-800 leading-tight">Removable Appliances</h3>
                </a>
                
                {/* Popup Tooltip - Below */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-80 bg-slate-800 text-white rounded-lg p-5 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-1">
                    <div className="w-3 h-3 bg-slate-800 rotate-45"></div>
                  </div>
                  <h4 className="font-semibold mb-2 text-white text-sm">Removable Appliances</h4>
                  <p className="text-xs leading-relaxed text-gray-200">Custom retainers, night guards, and space maintainers designed to protect your investment and maintain your beautiful smile. Essential for long-term orthodontic success and oral health.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-blue-100 rounded-full opacity-20"></div>
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-blue-200 rounded-full opacity-15"></div>
        </div>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">What Our Patients Say</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Discover why families throughout Orland Park trust Crystal Cove Orthodontics for their smile transformations.
              </p>
            </div>
            <Testimonials testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/Test_LOGO_WEBDEV.png" alt="Crystal Cove Orthodontics" width={40} height={40} className="rounded-full" />
                <h3 className="text-xl font-bold">Crystal Cove Orthodontics</h3>
        </div>
              <p className="text-blue-100 mb-4">
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
          <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 Crystal Cove Orthodontics. All rights reserved.</p>
        </div>
        </div>
      </footer>
    </div>
  );
}
