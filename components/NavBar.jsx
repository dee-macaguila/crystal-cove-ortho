"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"

export function NavBar({ className, isAboutDropdownOpen, setIsAboutDropdownOpen, isOrthoDropdownOpen, setIsOrthoDropdownOpen, isPatientResourcesDropdownOpen, setIsPatientResourcesDropdownOpen }) {
  const pathname = usePathname()
  
  // Define navigation items with your specific menu items
  const items = [
    { name: "Our Practice", url: "/our-practice" },
    { name: "About Us", hasDropdown: true, dropdownType: "about" },
    { name: "Our Orthodontic Care", hasDropdown: true, dropdownType: "ortho" },
    { name: "Patient Resources", hasDropdown: true, dropdownType: "patient" },
    { name: "SureSmile", url: "#services" },
    { name: "Contact Us", url: "/contact" },
  ]

  const [activeTab, setActiveTab] = useState("")

  return (
    <nav className="hidden lg:flex items-center gap-1 text-sm md:text-base flex-shrink-0 ml-auto -mr-2">
      {/* Call Now Button */}
      <a
        href="tel:+19495550123"
        className="relative inline-flex items-center rounded-md bg-blue-900 text-white px-4 py-2 text-sm font-medium hover:bg-blue-800 transition-colors leading-tight mr-4"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Call Now
      </a>
      {items.map((item) => {
        const isActive = activeTab === item.name || pathname === item.url

        // Handle dropdowns
        if (item.hasDropdown) {
          const isDropdownOpen = item.dropdownType === "about" ? isAboutDropdownOpen : 
                                 item.dropdownType === "ortho" ? isOrthoDropdownOpen : 
                                 isPatientResourcesDropdownOpen;
          const setDropdownOpen = item.dropdownType === "about" ? setIsAboutDropdownOpen : 
                                  item.dropdownType === "ortho" ? setIsOrthoDropdownOpen : 
                                  setIsPatientResourcesDropdownOpen;
          
          return (
            <div 
              key={item.name} 
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`relative flex items-center gap-1 text-blue-900 hover:text-blue-900 transition-all duration-300 leading-tight px-2 py-2 rounded-lg hover:bg-blue-50 ${isActive ? 'font-bold border-b-2 border-blue-900' : ''}`}
              >
                <span>{item.name}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                {isActive && (
                  <motion.div
                    layoutId="navHighlight"
                    className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </button>
              
              {isDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-[100]"
                >
                  <div className="py-1">
                    {item.dropdownType === "about" && (
                      <>
                        <a
                          href="/meet-the-doctor"
                          className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                        >
                          Meet the Doctor
                        </a>
                        <a
                          href="/meet-the-staff"
                          className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                        >
                          Meet the Staff
                        </a>
                        <a
                          href="/blog"
                          className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                        >
                          Blog
                        </a>
                      </>
                    )}
                    {item.dropdownType === "ortho" && (
                      <>
                        <a
                          href="/invisalign"
                          className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                        >
                          Invisalign Braces
                        </a>
                        <a
                          href="/clear-braces"
                          className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                        >
                          Clear Braces
                        </a>
                        <a
                          href="/traditional-braces"
                          className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                        >
                          Traditional Braces
                        </a>
                        <a
                          href="/night-guards"
                          className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                        >
                          Night Guards
                        </a>
                        <a
                          href="/tmj"
                          className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                        >
                          TMJ
                        </a>
                        <a
                          href="/before-after"
                          className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                        >
                          Before and After
                        </a>
                      </>
                    )}
                    {item.dropdownType === "patient" && (
                      <>
                        <a
                          href="/new-patient"
                          className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                        >
                          New Patient
                        </a>
                        <a
                          href="/educational-videos"
                          className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                        >
                          Educational Videos
                        </a>
                        <a
                          href="/faqs"
                          className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                        >
                          FAQs
                        </a>
                        <a
                          href="/new-patient-special-offer"
                          className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                        >
                          New Patient Special Offer
                        </a>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          )
        }

        // Handle Appointment Request button
        if (item.isButton) {
          return (
            <a
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className="relative inline-flex items-center rounded-md bg-blue-600 text-white px-3 py-1.5 text-sm font-medium hover:bg-blue-700 transition-colors leading-tight"
            >
              {item.name}
            </a>
          )
        }

        // Handle regular nav items
        return (
          <a
            key={item.name}
            href={item.url}
            onClick={() => setActiveTab(item.name)}
            className={`relative text-blue-900 hover:text-blue-900 transition-all duration-300 leading-tight px-2 py-2 rounded-lg hover:bg-blue-50 hover:scale-105 ${isActive ? 'font-bold border-b-2 border-blue-900' : ''}`}
          >
            {item.name}
            {isActive && (
              <motion.div
                layoutId="navHighlight"
                className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg -z-10 shadow-lg"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
          </a>
        )
      })}
    </nav>
  )
}
