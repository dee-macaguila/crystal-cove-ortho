"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function NavBar({ className, isAboutDropdownOpen, setIsAboutDropdownOpen, isOrthoDropdownOpen, setIsOrthoDropdownOpen, isPatientResourcesDropdownOpen, setIsPatientResourcesDropdownOpen }) {
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
    <nav className="hidden lg:flex items-center gap-1 text-sm md:text-base flex-shrink-0 ml-auto">
      {items.map((item) => {
        const isActive = activeTab === item.name

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
                className="relative flex items-center gap-1 text-slate-700 hover:text-blue-700 transition-all duration-300 leading-tight px-2 py-2 rounded-lg hover:bg-blue-50"
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
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          Meet the Doctor
                        </a>
                        <a
                          href="/meet-the-staff"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          Meet the Staff
                        </a>
                        <a
                          href="/blog"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          Blog
                        </a>
                      </>
                    )}
                    {item.dropdownType === "ortho" && (
                      <>
                        <a
                          href="/invisalign"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          Invisalign Braces
                        </a>
                        <a
                          href="/clear-braces"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          Clear Braces
                        </a>
                        <a
                          href="/traditional-braces"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          Traditional Braces
                        </a>
                        <a
                          href="/night-guards"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          Night Guards
                        </a>
                        <a
                          href="/tmj"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          TMJ
                        </a>
                        <a
                          href="/before-after"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          Before and After
                        </a>
                      </>
                    )}
                    {item.dropdownType === "patient" && (
                      <>
                        <a
                          href="/new-patient"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          New Patient
                        </a>
                        <a
                          href="/educational-videos"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          Educational Videos
                        </a>
                        <a
                          href="/faqs"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          FAQs
                        </a>
                        <a
                          href="/new-patient-special-offer"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
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
            className="relative text-slate-700 hover:text-blue-700 transition-all duration-300 leading-tight px-2 py-2 rounded-lg hover:bg-blue-50 hover:scale-105"
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
