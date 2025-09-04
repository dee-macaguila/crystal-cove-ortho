"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { useState } from "react";

export default function MeetTheDoctorPage() {
  const [activeTab, setActiveTab] = useState('about');

  const testimonials = [
    {
      quote: "Dr. Choy transformed my smile and my confidence. His expertise and caring approach made the entire process comfortable and enjoyable.",
      author: "Sarah Martinez",
      role: "Adult Patient"
    },
    {
      quote: "As a parent, I was worried about my daughter's treatment, but Dr. Choy and his team were amazing. She actually looked forward to her appointments!",
      author: "Michael Chen",
      role: "Parent"
    },
    {
      quote: "Dr. Choy's attention to detail and personalized care exceeded all my expectations. I couldn't be happier with my results.",
      author: "Jennifer Taylor",
      role: "Teen Patient"
    }
  ];
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white overflow-x-hidden">
      <SiteHeader />
      <div className="h-20 lg:h-24" />

      {/* Header Section - use hero background */}
      <section className="relative w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-image.png')" }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-6xl font-light italic text-white tracking-wide mb-4" style={{fontFamily: 'Georgia, serif'}}>
            Meet Dr. Russell Choy
          </h1>
          <p className="text-xl text-white/90 font-light">
            Your Newport Beach Orthodontist
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Enhanced Doctor Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            
            {/* Doctor Image with Enhanced Styling */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl border border-blue-200">
                <img 
                  src="/DrChoy.png" 
                  alt="Dr. Russell Choy" 
                  className="w-full h-auto rounded-xl shadow-lg object-cover mb-6"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">Dr. Russell Choy</h3>
                  <p className="text-blue-600 font-medium">Orthodontist</p>
                </div>
              </div>
            </div>

            {/* Enhanced Doctor Information */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Introduction with Better Typography */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-200">
                <h2 className="text-4xl font-bold text-blue-900 mb-6" style={{fontFamily: 'Georgia, serif'}}>Meet Dr. Russell Choy</h2>
                <p className="text-xl text-slate-700 leading-relaxed mb-4" style={{fontFamily: 'Georgia, serif'}}>
                  Dr. Choy has enjoyed a long and rewarding career in Orthodontistry. He first worked as a licensed orthodontic hygienist. 
                  From there he attended Southern Illinois University where he obtained the Degree of Doctor of Dental Medicine (D.M.D). 
                  He then completed two additional years of specialty training in orthodontics at St. Louis University where he obtained 
                  his Masters of Science Degree (M.S.).
                </p>
                <p className="text-xl text-slate-700 leading-relaxed" style={{fontFamily: 'Georgia, serif'}}>
                  Dr. Choy also specializes in Invisalign Clear Braces, and is an Invisalign preferred provider. He offers a free initial 
                  consultation and exam for patients interested in learning about Invisalign Braces.
                </p>
              </div>

              {/* Enhanced Education Section */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900" style={{fontFamily: 'Georgia, serif'}}>Education & Training</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                    <h4 className="font-bold text-blue-900 mb-3">Licensed Orthodontic Hygienist</h4>
                    <p className="text-slate-600">Foundation in patient care and orthodontic procedures</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                    <h4 className="font-bold text-blue-900 mb-3">Doctor of Dental Medicine (D.M.D)</h4>
                    <p className="text-slate-600">Southern Illinois University</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                    <h4 className="font-bold text-blue-900 mb-3">Masters of Science (M.S.)</h4>
                    <p className="text-slate-600">Orthodontics - St. Louis University</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                    <h4 className="font-bold text-blue-900 mb-3">Invisalign Preferred Provider</h4>
                    <p className="text-slate-600">Certified specialist in clear aligner treatment</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Specialties */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-blue-900" style={{fontFamily: 'Georgia, serif'}}>Areas of Expertise</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-md border border-blue-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-blue-900">Traditional Braces</h4>
                    </div>
                    <p className="text-slate-600">Metal and ceramic braces for all ages with proven results</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md border border-blue-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-blue-900">Clear Aligners</h4>
                    </div>
                    <p className="text-slate-600">Invisalign and other clear aligner systems for discreet treatment</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md border border-blue-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-blue-900">Early Treatment</h4>
                    </div>
                    <p className="text-slate-600">Interceptive orthodontics for children to guide jaw growth</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md border border-blue-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-blue-900">Adult Treatment</h4>
                    </div>
                    <p className="text-slate-600">Specialized care for adult patients seeking smile improvement</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Philosophy of Care */}
              <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-2xl p-8 shadow-xl border border-blue-200">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-blue-900 mb-6" style={{fontFamily: 'Georgia, serif'}}>Philosophy of Care</h3>
                    <div className="space-y-6 text-slate-700">
                      <div className="bg-white rounded-xl p-6 shadow-md border border-blue-100">
                        <p className="text-xl leading-relaxed italic text-blue-900" style={{fontFamily: 'Georgia, serif'}}>
                          "I believe every patient deserves a healthy smile they can be proud of. My goal is to make dental visits stress-free and comfortable."
                        </p>
                      </div>
                      <p className="text-lg leading-relaxed" style={{fontFamily: 'Georgia, serif'}}>
                        At Crystal Cove Orthodontics, we don't just straighten teeth—we transform lives. Every patient is unique, and I take pride in creating 
                        personalized treatment plans that address individual needs, concerns, and goals. My commitment is to provide compassionate, 
                        patient-centered care in a warm, welcoming environment where everyone feels like family.
                      </p>
                      <p className="text-lg leading-relaxed" style={{fontFamily: 'Georgia, serif'}}>
                        I understand that orthodontic treatment can be a significant investment in time and resources, which is why I'm dedicated to 
                        ensuring each patient receives the highest quality care with the most advanced technology and techniques available.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/Test_LOGO_WEBDEV.png" alt="Crystal Cove Orthodontics" width={40} height={40} className="rounded-full" />
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
                <li><a href="/meet-the-doctor" className="text-blue-200 hover:text-white transition-colors">Meet the Doctor</a></li>
                <li><a href="/meet-the-staff" className="text-blue-200 hover:text-white transition-colors">Meet the Staff</a></li>
                <li><a href="/contact" className="text-blue-200 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="/traditional-braces" className="text-blue-200 hover:text-white transition-colors">Traditional Braces</a></li>
                <li><a href="/invisalign" className="text-blue-200 hover:text-white transition-colors">Invisalign</a></li>
                <li><a href="/clear-braces" className="text-blue-200 hover:text-white transition-colors">Clear Braces</a></li>
                <li><a href="/night-guards" className="text-blue-200 hover:text-white transition-colors">Night Guards</a></li>
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
    </main>
  );
}
