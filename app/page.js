"use client";

import Image from "next/image";
import { Hero } from "@/components/Hero";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
        <Image
                src="/test.png"
                alt="Crystal Cove Orthodontics logo"
                width={200}
                height={80}
                className="h-14 md:h-16 lg:h-20 w-auto object-contain"
          priority
        />
              <h1 className="text-2xl md:text-3xl font-normal italic text-blue-700 font-moontime">Dr. Russell Choy</h1>
            </div>

            {/* Primary Nav with Animation */}
            <NavBar 
              isAboutDropdownOpen={isAboutDropdownOpen}
              setIsAboutDropdownOpen={setIsAboutDropdownOpen}
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
      <section id="home" className="relative bg-gradient-to-r from-white via-blue-50 to-blue-100">
        <Hero />
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We offer comprehensive orthodontic solutions to create beautiful, healthy smiles for patients of all ages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <a href="#services" className="theme-card rounded-lg p-4 text-blue-800 hover:text-blue-900 hover:shadow-md transition text-center font-medium">Braces for Children and Adults</a>
            <a href="#services" className="theme-card rounded-lg p-4 text-blue-800 hover:text-blue-900 hover:shadow-md transition text-center font-medium">Invisalign</a>
            <a href="#services" className="theme-card rounded-lg p-4 text-blue-800 hover:text-blue-900 hover:shadow-md transition text-center font-medium">SureSmile</a>
            <a href="#services" className="theme-card rounded-lg p-4 text-blue-800 hover:text-blue-900 hover:shadow-md transition text-center font-medium">Removable Appliances</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Traditional Braces */}
            <div className="theme-card rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Traditional Braces</h3>
              <p className="text-slate-600 mb-4">
                Time-tested metal braces that effectively straighten teeth and correct bite issues.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Effective for complex cases</li>
                <li>• Customizable colors</li>
                <li>• Proven results</li>
              </ul>
            </div>

            {/* Clear Aligners */}
            <div className="theme-card rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Clear Aligners</h3>
              <p className="text-slate-600 mb-4">
                Nearly invisible aligners that gradually move your teeth into proper alignment.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Removable and comfortable</li>
                <li>• Virtually invisible</li>
                <li>• Easy to maintain</li>
              </ul>
            </div>

            {/* Early Treatment */}
            <div className="theme-card rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="W-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Early Treatment</h3>
              <p className="text-slate-600 mb-4">
                Interceptive orthodontics for children to guide proper jaw and tooth development.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Ages 7-11</li>
                <li>• Prevents future problems</li>
                <li>• Shorter treatment time</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">About Crystal Cove Orthodontics</h2>
              <p className="text-lg text-slate-700 mb-6">
                At Crystal Cove Orthodontics, we believe everyone deserves a confident, beautiful smile. 
                Our experienced team combines advanced technology with personalized care to deliver 
                exceptional results for patients of all ages.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-semibold text-blue-900">Meet Dr. Cynthia Wong</h3>
                <p className="text-slate-700">
                  Dr. Wong has enjoyed a long and rewarding career in Orthodontistry. She first worked as a licensed orthodontic hygienist. From there she attended Southern Illinois University where she obtained the Degree of Doctor of Dental Medicine (D.M.D). She then completed two additional years of specialty training in orthodontics at St. Louis University where she obtained her Masters of Science Degree (M.S.).
                </p>
                <p className="text-slate-700">
                  Dr. Wong also specializes in Invisalign Clear Braces, and is an Invisalign preferred provider. She offers a free initial consultation and exam for patients interested in learning about Invisalign Braces.
                </p>
                <div>
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">Professional Memberships</h4>
                  <ul className="list-disc pl-5 text-slate-700 space-y-1">
                    <li>The ADA (American Dental Association)</li>
                    <li>The AAO (American Association of Orthodontists)</li>
                    <li>The CDS (Chicago Dental Society)</li>
                    <li>The ISO (Illinois Society of Orthodontist)</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-800">Board-certified orthodontists</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-800">State-of-the-art technology</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-800">Comfortable, family-friendly environment</span>
                </div>
              </div>
            </div>
            <div className="theme-card rounded-2xl shadow-xl p-8 bg-white">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center">Why Choose Us?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Advanced Technology</h4>
                    <p className="text-slate-600 text-sm">Latest digital scanning and treatment planning for precise results.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0 a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Personalized Care</h4>
                    <p className="text-slate-600 text-sm">Individualized treatment plans tailored to your unique needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Flexible Scheduling</h4>
                    <p className="text-slate-600 text-sm">Convenient appointment times to fit your busy lifestyle.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
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
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-blue-900 mb-4">Office Hours</h4>
                <div className="space-y-2 text-slate-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="theme-card rounded-xl p-8 bg-white">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Schedule Your Consultation</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">Preferred Date</label>
                  <input type="date" className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Schedule Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">Crystal Cove Orthodontics</h3>
              <p className="text-blue-100 mb-4">
                Creating beautiful smiles and confident patients through exceptional orthodontic care.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224 .084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46 .69.88-.53 1.56-1.37 1.88-2.38-.83 .5-1.75 .85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34 .04 .67 .11 .98C8.28 9.09 5.11 7.38 3 4.79c-.37 .63-.58 1.37-.58 2.15 0 1.49 .75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v .03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93 .07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68 -.02-1.02 -.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0 -.19 0 -.37-.01 -.56 .84 -.6 1.56 -1.36 2.14 -2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367 .029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105 -.949-.199 -2.403 .041 -3.439 .219 -.937 1.406 -5.957 1.406 -5.957s-.359 -.72-.359 -1.781c0 -1.663 .967 -2.911 2.168 -2.911 1.024 0 1.518 .769 1.518 1.688 0 1.029 -.653 2.567 -.992 3.992 -.285 1.193 .6 2.165 1.775 2.165 2.128 0 3.768 -2.245 3.768 -5.487 0 -2.861 -2.063 -4.869 -5.008 -4.869 -3.41 0 -5.409 2.562 -5.409 5.199 0 1.033 .394 2.143 .889 2.741 .099 .12 .112 .225 .085 .345-.09 .375-.293 1.199 -.334 1.363-.053 .225-.172 .271-.402 .165-1.495 -.69-2.433 -2.878-2.433 -4.646 0 -3.776 2.748 -7.252 7.92 -7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135 -2.607 7.462 -6.233 7.462 -1.214 0 -2.357 -.629 -2.746 -1.378l-.748 2.853c-.271 1.043 -1.002 2.35 -1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99 -5.367 11.99 -11.988C24.007 5.367 18.641 .001 12.017 .001z"/>
                  </svg>
                </a>
              </div>
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
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Traditional Braces</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Clear Aligners</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Early Treatment</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Consultations</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-blue-200">
              © 2024 Crystal Cove Orthodontics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
