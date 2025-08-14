"use client";

import Image from "next/image";
import { Hero } from "@/components/Hero";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isOrthoDropdownOpen, setIsOrthoDropdownOpen] = useState(false);
  const [isPatientResourcesDropdownOpen, setIsPatientResourcesDropdownOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-blue-200 fixed top-0 left-0 right-0 z-50">
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
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center gap-3">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">About Crystal Cove Orthodontics</h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              At Crystal Cove Orthodontics, we believe everyone deserves a confident, beautiful smile. Our experienced team combines advanced technology with personalized care to deliver exceptional results for patients of all ages.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Dr. Russell Choy</h3>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left Side - Title and Description */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">Our Services</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
              We offer comprehensive orthodontic solutions to create beautiful, healthy smiles for patients of all ages.
            </p>
          </div>
          
            {/* Right Side - Service Items */}
            <div className="space-y-4">
              <a href="/traditional-braces" className="block bg-white rounded-lg p-6 text-blue-800 hover:text-blue-900 hover:shadow-lg transition-all border border-blue-100 hover:border-blue-200">
                <h3 className="text-xl font-semibold">Braces for Children and Adults</h3>
              </a>
              <a href="/invisalign" className="block bg-white rounded-lg p-6 text-blue-800 hover:text-blue-900 hover:shadow-lg transition-all border border-blue-100 hover:border-blue-200">
                <h3 className="text-xl font-semibold">Invisalign</h3>
              </a>
              <a href="#services" className="block bg-white rounded-lg p-6 text-blue-800 hover:text-blue-900 hover:shadow-lg transition-all border border-blue-100 hover:border-blue-200">
                <h3 className="text-xl font-semibold">SureSmile</h3>
              </a>
              <a href="#services" className="block bg-white rounded-lg p-6 text-blue-800 hover:text-blue-900 hover:shadow-lg transition-all border border-blue-100 hover:border-blue-200">
                <h3 className="text-xl font-semibold">Removable Appliances</h3>
              </a>
            </div>
          </div>

        </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-b from-white to-blue-50 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-100 rounded-full opacity-30"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-blue-200 rounded-full opacity-20"></div>
        </div>
        <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Contact Us</h2>
            <p className="text-lg text-slate-600">
              Ready to start your journey to a beautiful smile? Get in touch with us today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Address</h4>
                    <p className="text-slate-700">123 Crystal Cove Drive<br />Newport Beach, CA 92660</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Phone</h4>
                    <p className="text-slate-700">(949) 555-0123</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Email</h4>
                    <p className="text-slate-700">info@crystalcoveortho.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Hours</h4>
                    <p className="text-slate-700">Mon-Fri: 8:00 AM - 5:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Schedule Your Visit</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your orthodontic needs"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Schedule Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/Test-new.png" alt="Crystal Cove Orthodontics" width={40} height={40} className="rounded-full" />
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
                <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contact Us</a></li>
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
