"use client";

import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";

export default function TraditionalBracesPage() {
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
            Traditional Braces
          </h1>
          <p className="text-xl text-white/90 font-light">
            The time-tested standard for straightening your smile with proven results and reliable technology
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            
            {/* Main Content */}
            <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-8 mb-12">
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  Traditional braces have been around for many years. They are the standard among patients looking to straighten their smile.
                </p>
                <p>
                  Today's contemporary braces are made of exceptionally strong metals as they need to be able to stand the test of time while they are on your teeth.
                </p>
                <p>
                  While contemporary braces are metallic colored, there are a number of bands and features that can be utilized to spruce them up.
                </p>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Benefits of Traditional Braces</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Proven track record of success
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Effective for complex cases
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Cost-effective treatment option
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Suitable for all ages
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Treatment Process</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Initial consultation and examination
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Custom treatment plan development
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Braces placement appointment
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Regular adjustment visits
                  </li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready for Your Perfect Smile?</h2>
              <p className="text-lg mb-6">
                Give us a call today so we can discuss in more detail about getting you that perfect smile!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="tel:(949) 555-0123" 
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Call (949) 555-0123
                </a>
                <a 
                  href="/contact" 
                  className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
