"use client";

import { useState } from "react";
import Image from "next/image";

export const Testimonials = ({ testimonials, isVisible = true }) => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, testimonials.length));
  };

  const visibleTestimonials = testimonials.slice(0, visibleCount);

  return (
    <div
      className={`mx-auto w-full max-w-6xl outline-none transition-all duration-600 ease-out delay-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 border border-slate-900 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image
                  src={testimonial.img}
                  width={48}
                  height={48}
                  alt={testimonial.name}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center space-y-4">
        {visibleCount < testimonials.length && (
          <button
            onClick={handleLoadMore}
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Load More
          </button>
        )}
        <div>
          <button className="inline-flex items-center px-6 py-3 border border-slate-800 rounded-md shadow-sm bg-slate-900 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};
