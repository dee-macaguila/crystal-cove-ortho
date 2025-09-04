"use client";

import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";

export default function InvisalignPage() {
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
            Invisalign Braces
          </h1>
          <p className="text-xl text-white/90 font-light">
            Clear, comfortable, removable aligners for a beautiful smile
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column - Content */}
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
                    Get a personalized treatment plan and timeline
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Learn about payment options and insurance coverage
                  </li>
                </ul>
              </div>

              {/* Benefits Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Benefits of Invisalign</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Virtually invisible aligners
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Removable for eating and cleaning
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Comfortable smooth plastic
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      No metal wires or brackets
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Treatment Process</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Custom treatment plan created
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Series of custom aligners made
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Wear aligners 20-22 hours daily
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Change aligners every 1-2 weeks
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="flex items-center justify-center">
              <div className="w-full h-96 bg-blue-100 rounded-lg flex items-center justify-center border-2 border-dashed border-blue-300">
                <div className="text-center text-blue-600">
                  <div className="text-4xl mb-2">📷</div>
                  <p className="text-lg font-medium">Image Placeholder</p>
                  <p className="text-sm text-blue-500">Add your image here</p>
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
