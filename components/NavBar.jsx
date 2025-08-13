"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function NavBar({ className, isAboutDropdownOpen, setIsAboutDropdownOpen }) {
  // Define navigation items with your specific menu items
  const items = [
    { name: "Our Practice", url: "/our-practice" },
    { name: "About Us", hasDropdown: true },
    { name: "Our Orthodontic Care", url: "#services" },
    { name: "Patient Resources", url: "#resources" },
    { name: "Testimonials", url: "#testimonials" },
    { name: "Contact Us", url: "#contact" },
    { name: "SureSmile", url: "#services" },
  ]

  const [activeTab, setActiveTab] = useState("")

  return (
    <nav className="hidden lg:flex items-center gap-1 text-sm md:text-base flex-shrink-0 ml-auto">
      {items.map((item) => {
        const isActive = activeTab === item.name

        // Handle About Us dropdown
        if (item.hasDropdown) {
          return (
            <div key={item.name} className="relative">
              <button
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                className="relative flex items-center gap-1 text-slate-700 hover:text-blue-700 transition-all duration-300 leading-tight px-2 py-2 rounded-lg hover:bg-blue-50"
              >
                <span>About Us</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
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
              
              {isAboutDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                >
                  <div className="py-1">
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
