"use client";

import { SiteHeader } from "@/components/SiteHeader";

export default function BlogPage() {
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
            Blog
          </h1>
          <p className="text-xl text-white/90 font-light">
            Orthodontic Tips, News & Insights
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          
          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
              <span className="text-sm text-blue-600 font-medium">Featured Post</span>
              <h2 className="text-3xl font-bold text-blue-900 mt-2 mb-4">
                The Complete Guide to Adult Orthodontics
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                It's never too late to achieve the smile you've always wanted. Learn about the orthodontic 
                options available for adults and how modern treatments can fit seamlessly into your lifestyle.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Published on March 15, 2024</span>
                <a href="#" className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Blog Post 1 */}
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <span className="text-4xl">🦷</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">Retainers</span>
                <h3 className="text-xl font-semibold text-blue-900 mt-2 mb-3">
                  How Long Should You Wear Your Retainer After Braces Removal?
                </h3>
                <p className="text-slate-700 mb-4">
                  When you are done with braces, you will probably walk out of your orthodontist's office with a retainer or two. Orthodontists are good about giving directions about retainers, but most people wear retainers for a while and stop...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">January 20, 2024</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More</a>
                </div>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <span className="text-4xl">✨</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">Invisalign</span>
                <h3 className="text-xl font-semibold text-blue-900 mt-2 mb-3">
                  Can Invisalign Braces Become Discolored?
                </h3>
                <p className="text-slate-700 mb-4">
                  Whether you have had your Invisalign clear braces for years or you have been thinking about getting them, it is completely normal to have a few questions. We've addressed many common questions about Invisalign in our blog previously...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">January 18, 2024</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More</a>
                </div>
              </div>
            </article>

            {/* Blog Post 3 */}
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <span className="text-4xl">🍽️</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">Lifestyle</span>
                <h3 className="text-xl font-semibold text-blue-900 mt-2 mb-3">
                  Your Guide to Eating and Drinking with Invisalign
                </h3>
                <p className="text-slate-700 mb-4">
                  One of the biggest reasons why so many people choose Invisalign clear braces over other kinds of braces is the fact that they require relatively small adjustments to your everyday life...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">January 15, 2024</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More</a>
                </div>
              </div>
            </article>

            {/* Blog Post 4 */}
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <span className="text-4xl">📋</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">Preparation</span>
                <h3 className="text-xl font-semibold text-blue-900 mt-2 mb-3">
                  Preparing Yourself for Braces
                </h3>
                <p className="text-slate-700 mb-4">
                  Many people think that simply making the decision to get braces is all that they need to do to prepare for them, but you are about to enter into a commitment that could last a couple of years...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">January 12, 2024</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More</a>
                </div>
              </div>
            </article>

            {/* Blog Post 5 */}
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <span className="text-4xl">💎</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">Benefits</span>
                <h3 className="text-xl font-semibold text-blue-900 mt-2 mb-3">
                  The Benefits of Invisalign
                </h3>
                <p className="text-slate-700 mb-4">
                  A confident smile can change your life in so many ways, and if you don't have one, you could actually be holding yourself back! Many people, adults especially, aren't comfortable with traditional wire braces...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">January 10, 2024</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More</a>
                </div>
              </div>
            </article>

            {/* Blog Post 6 */}
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <span className="text-4xl">🧼</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">Care</span>
                <h3 className="text-xl font-semibold text-blue-900 mt-2 mb-3">
                  Cleaning Your Invisalign Braces
                </h3>
                <p className="text-slate-700 mb-4">
                  It is so important to keep the bacteria at bay in our mouths. Improper oral care leads to bad breath, yellow teeth and even infections that could affect your overall health...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">January 8, 2024</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More</a>
                </div>
              </div>
            </article>

            {/* Blog Post 7 */}
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <span className="text-4xl">👶</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">Children's Health</span>
                <h3 className="text-xl font-semibold text-blue-900 mt-2 mb-3">
                  How Thumb Sucking Affects Your Child's Teeth
                </h3>
                <p className="text-slate-700 mb-4">
                  We all would love to have perfect teeth, but unfortunately that just isn't possible for everyone. There are many theories out there as to what causes teeth to become crooked...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">January 5, 2024</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More</a>
                </div>
              </div>
            </article>

            {/* Blog Post 8 */}
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <span className="text-4xl">🎆</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">New Year</span>
                <h3 className="text-xl font-semibold text-blue-900 mt-2 mb-3">
                  A New Year, A New Smile
                </h3>
                <p className="text-slate-700 mb-4">
                  In just a few days 2014 will be winding down, and the new year will be here at last! New Year's Day is often the day that many of us make resolutions to eat healthier, save more money, and to start exercising...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">January 1, 2024</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More</a>
                </div>
              </div>
            </article>

            {/* Blog Post 9 */}
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <span className="text-4xl">👨‍⚕️</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">Adult Orthodontics</span>
                <h3 className="text-xl font-semibold text-blue-900 mt-2 mb-3">
                  Orthodontic Care isn't Just for Kids Anymore
                </h3>
                <p className="text-slate-700 mb-4">
                  Did you miss the bus for getting braces as a child? Are you sick of living day after day with a crooked smile that you feel you have to hide from the world? Do you feel like you will look silly...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">December 28, 2023</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More</a>
                </div>
              </div>
            </article>

            {/* Blog Post 10 */}
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <span className="text-4xl">😊</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">Wellness</span>
                <h3 className="text-xl font-semibold text-blue-900 mt-2 mb-3">
                  Why You Should Start Smiling More
                </h3>
                <p className="text-slate-700 mb-4">
                  There is nothing quite like a bright, confident smile. Unfortunately, if you are embarrassed by your teeth, you may feel like you have to go through life hiding your smile or, even worse, not smiling at all...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">December 25, 2023</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More</a>
                </div>
              </div>
            </article>

          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-slate-900 to-blue-900 rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-blue-100 mb-6">
              Subscribe to our newsletter for the latest orthodontic tips and practice news.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white text-gray-900 border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-900 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Subscribe
              </button>
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
