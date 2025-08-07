import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-16 md:pt-18">
        {/* Hero Section */}
        <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bizzie-900 dark:text-white mb-6 leading-tight">
                About <span className="text-bizzie-600">Bizzie</span>
              </h1>
              <p className="text-lg text-bizzie-700 dark:text-bizzie-200 mb-8 leading-relaxed">
                We're on a mission to empower home-service businesses with the financial clarity and tools they need to thrive. 
                Our story began with a simple belief: every business owner deserves to understand their numbers.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-bizzie-900 dark:text-white mb-6">
                  Our Story
                </h2>
                <p className="text-bizzie-700 dark:text-bizzie-200 mb-4 leading-relaxed">
                  Founded by entrepreneurs who understand the challenges of running a home-service business, 
                  Bizzie was born from real-world experience. We've seen too many talented business owners struggle 
                  with complex financial management systems that weren't built for their unique needs.
                </p>
                <p className="text-bizzie-700 dark:text-bizzie-200 leading-relaxed">
                  That's why we created Bizzie - a platform designed specifically for contractors, plumbers, 
                  electricians, and other home-service professionals who need clear, actionable insights without 
                  the complexity of traditional accounting software.
                </p>
              </div>
              <div>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Bizzie team at work"
                  className="w-full rounded-xl shadow-soft-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-light-accent">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-bizzie-900 dark:text-white mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-bizzie-700 dark:text-bizzie-200 mb-8 leading-relaxed">
                To transform how home-service businesses understand and manage their finances, 
                making profitability insights accessible to everyone, regardless of their accounting background.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-bizzie-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-bizzie-900 dark:text-white mb-2">Simplify</h3>
                  <p className="text-bizzie-700 dark:text-bizzie-200">
                    Make complex financial concepts easy to understand and act upon.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-bizzie-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-bizzie-900 dark:text-white mb-2">Empower</h3>
                  <p className="text-bizzie-700 dark:text-bizzie-200">
                    Give business owners the confidence to make data-driven decisions.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-bizzie-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-bizzie-900 dark:text-white mb-2">Grow</h3>
                  <p className="text-bizzie-700 dark:text-bizzie-200">
                    Help businesses scale sustainably with clear financial roadmaps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-bizzie-900 dark:text-white mb-12">
                Meet Our Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-bizzie-200 dark:bg-bizzie-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-bizzie-600 dark:text-bizzie-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-bizzie-900 dark:text-white mb-2">Sarah Johnson</h3>
                  <p className="text-bizzie-600 dark:text-bizzie-300 mb-2">CEO & Co-Founder</p>
                  <p className="text-sm text-bizzie-700 dark:text-bizzie-200">
                    Former contractor with 15 years of industry experience.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-bizzie-200 dark:bg-bizzie-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-bizzie-600 dark:text-bizzie-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-bizzie-900 dark:text-white mb-2">Michael Chen</h3>
                  <p className="text-bizzie-600 dark:text-bizzie-300 mb-2">CTO & Co-Founder</p>
                  <p className="text-sm text-bizzie-700 dark:text-bizzie-200">
                    Software architect passionate about simplifying business tools.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-bizzie-200 dark:bg-bizzie-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-bizzie-600 dark:text-bizzie-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-bizzie-900 dark:text-white mb-2">Emily Rodriguez</h3>
                  <p className="text-bizzie-600 dark:text-bizzie-300 mb-2">Head of Product</p>
                  <p className="text-sm text-bizzie-700 dark:text-bizzie-200">
                    UX designer focused on creating intuitive financial interfaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
