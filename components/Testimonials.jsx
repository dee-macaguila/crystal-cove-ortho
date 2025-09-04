"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Testimonials = ({ testimonials, isVisible = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  return (
    <div
      className={`mx-auto w-full max-w-6xl outline-none transition-all duration-600 ease-out delay-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl border border-blue-100">
        {/* Testimonials Slides */}
        <div className="relative h-96 md:h-80">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 translate-x-0"
                  : index < currentIndex
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              }`}
            >
              <div className="flex flex-col items-center justify-center h-full p-8 md:p-12 text-center">
                {/* Profile Picture (replacing quote icon) */}
                <div className="mb-6">
                  <Image
                    src={testimonial.img}
                    width={80}
                    height={80}
                    alt={testimonial.name}
                    className="rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>

                {/* Testimonial Content */}
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author Info - Just name and role, no picture */}
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-slate-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-slate-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white border border-blue-200 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-slate-700" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white border border-blue-200 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-slate-700" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-600 scale-125"
                  : "bg-blue-300 hover:bg-blue-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-100">
          <div 
            className="h-full bg-blue-600 transition-all duration-500 ease-out"
            style={{ 
              width: `${((currentIndex + 1) / testimonials.length) * 100}%` 
            }}
          />
        </div>
      </div>

      {/* Additional CTA */}
      <div className="mt-8 text-center">
        <button className="inline-flex items-center px-6 py-3 border border-slate-800 rounded-md shadow-sm bg-slate-900 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors">
          Read More Reviews
        </button>
      </div>
    </div>
  );
};
