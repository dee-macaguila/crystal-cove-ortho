"use client";

import { SiteHeader } from "@/components/SiteHeader";

export default function MeetTheStaffPage() {
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
            Meet the Staff
          </h1>
          <p className="text-xl text-white/90 font-light">
            Our Dedicated Team of Orthodontic Professionals
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              A Team Committed to Your Smile
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Our experienced and friendly team is dedicated to making your orthodontic experience comfortable, 
              efficient, and successful. Each team member brings unique skills and a shared commitment to 
              excellence in patient care.
            </p>
          </div>

          {/* Staff Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Office Manager */}
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👩‍💼</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Sarah Johnson</h3>
              <p className="text-blue-600 font-medium mb-3">Office Manager</p>
              <p className="text-sm text-slate-700">
                Sarah coordinates patient care and ensures smooth office operations. 
                With over 8 years in orthodontics, she's here to help with appointments, 
                insurance, and any questions you may have.
              </p>
            </div>

            {/* Orthodontic Assistant 1 */}
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👩‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Maria Rodriguez</h3>
              <p className="text-blue-600 font-medium mb-3">Lead Orthodontic Assistant</p>
              <p className="text-sm text-slate-700">
                Maria assists Dr. Choy with all orthodontic procedures and patient care. 
                Her gentle approach and technical expertise help ensure comfortable 
                treatment experiences for all our patients.
              </p>
            </div>

            {/* Orthodontic Assistant 2 */}
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">David Kim</h3>
              <p className="text-blue-600 font-medium mb-3">Orthodontic Assistant</p>
              <p className="text-sm text-slate-700">
                David specializes in patient education and treatment coordination. 
                He takes pride in helping patients understand their treatment and 
                maintaining excellent oral hygiene during orthodontic care.
              </p>
            </div>

            {/* Treatment Coordinator */}
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👩‍💻</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Jennifer Lee</h3>
              <p className="text-blue-600 font-medium mb-3">Treatment Coordinator</p>
              <p className="text-sm text-slate-700">
                Jennifer guides new patients through the consultation process and 
                helps develop personalized treatment plans. She's your go-to person 
                for treatment options and financial planning.
              </p>
            </div>

            {/* Hygienist */}
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👩‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Lisa Chen</h3>
              <p className="text-blue-600 font-medium mb-3">Dental Hygienist</p>
              <p className="text-sm text-slate-700">
                Lisa provides professional cleanings and oral health education. 
                She works closely with our orthodontic team to ensure optimal 
                oral health throughout your treatment journey.
              </p>
            </div>

            {/* Receptionist */}
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Michael Thompson</h3>
              <p className="text-blue-600 font-medium mb-3">Patient Relations Specialist</p>
              <p className="text-sm text-slate-700">
                Michael is often the first friendly face you'll see when you visit. 
                He handles scheduling, patient communications, and ensures everyone 
                feels welcome in our practice.
              </p>
            </div>

          </div>

          {/* Team Values */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg p-8 text-center text-white mb-12">
            <h3 className="text-2xl font-bold mb-4">Our Team Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold mb-2">Excellence</h4>
                <p className="text-blue-100">Committed to the highest standards of orthodontic care</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Compassion</h4>
                <p className="text-blue-100">Treating every patient with kindness and understanding</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Innovation</h4>
                <p className="text-blue-100">Embracing the latest technologies and techniques</p>
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
