"use client";

import { useState } from "react";

export const FloatingConsultButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Scroll to the free consultation section
    const consultSection = document.getElementById('free-consultation');
    if (consultSection) {
      consultSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative"
        aria-label="Free Consultation"
      >
        {/* Diamond Shape */}
        <div className={`
          w-20 h-20 
          bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900
          transform rotate-45 
          shadow-2xl 
          border-2 border-yellow-300
          transition-all duration-300 ease-out
          ${isHovered ? 'scale-110 shadow-yellow-300/50' : 'scale-100'}
        `}>
          {/* Inner diamond for depth */}
          <div className="absolute inset-1 bg-gradient-to-br from-slate-600 to-slate-700 rounded-sm transform rotate-45"></div>
        </div>

        {/* Text Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-sm font-bold text-yellow-200 leading-tight">
              FREE
            </div>
            <div className="text-sm font-bold text-yellow-200 leading-tight">
              CONSULT
            </div>
          </div>
        </div>

        {/* Hover Effect - Glow */}
        <div className={`
          absolute inset-0 
          bg-gradient-to-br from-yellow-200 to-yellow-300 
          transform rotate-45 
          opacity-0 
          blur-sm
          transition-opacity duration-300
          ${isHovered ? 'opacity-70' : 'opacity-0'}
        `}></div>

        {/* Pulse Animation */}
        <div className="absolute inset-0 transform rotate-45">
          <div className="w-full h-full bg-yellow-200 rounded-sm animate-ping opacity-30"></div>
        </div>

        {/* Tooltip */}
        <div className={`
          absolute left-full ml-4 top-1/2 transform -translate-y-1/2
          bg-slate-800 text-yellow-200 px-3 py-2 rounded-lg text-sm font-medium
          whitespace-nowrap
          opacity-0 pointer-events-none
          transition-all duration-300
          ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}
        `}>
          Schedule Your Free Consultation
          {/* Arrow */}
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-slate-800"></div>
        </div>
      </button>
    </div>
  );
};
