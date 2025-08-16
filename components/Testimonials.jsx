"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export const Testimonials = ({ testimonials }) => {
  const testimonialsRef = useRef(null);
  const [active, setActive] = useState(0);
  const [autorotate, setAutorotate] = useState(true);
  const autorotateTiming = 7000;

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive((prevActive) => 
        prevActive + 1 === testimonials.length ? 0 : prevActive + 1
      );
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate, testimonials.length]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement)
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <div className="mx-auto w-full max-w-4xl text-center">
      <div className="relative h-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-blue-500/25 before:via-blue-500/5 before:via-25% before:to-blue-500/0 before:to-75%">
          <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 -z-10 h-full transition-all duration-700 ease-out ${
                  active === index 
                    ? 'opacity-100 rotate-0' 
                    : 'opacity-0 rotate-[60deg]'
                }`}
              >
                <Image
                  className="relative left-1/2 top-11 -translate-x-1/2 rounded-full border-4 border-white shadow-lg"
                  src={testimonial.img}
                  width={80}
                  height={80}
                  alt={testimonial.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-9 transition-all delay-300 duration-150 ease-in-out">
        <div className="relative flex flex-col" ref={testimonialsRef}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                active === index 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-4 absolute'
              }`}
            >
              <div className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed before:content-['\201C'] after:content-['\201D'] px-4">
                {testimonial.quote}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="-m-1.5 flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            className={`m-1.5 inline-flex justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium shadow-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300 ${
              active === index
                ? "bg-slate-800 text-white shadow-slate-800/20"
                : "bg-white text-slate-800 hover:bg-blue-50 border border-blue-100"
            }`}
            onClick={() => {
              setActive(index);
              setAutorotate(false);
            }}
          >
            <span className="font-semibold">{testimonial.name}</span>
            <span className={`mx-2 ${active === index ? "text-blue-200" : "text-blue-400"}`}>
              •
            </span>
            <span className={`${active === index ? "text-blue-200" : "text-slate-600"}`}>
              {testimonial.role}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
