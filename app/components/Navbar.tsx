"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DarkModeToggle } from "./ui/dark-mode-toggle";

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <section className="fixed top-0 left-0 right-0 z-[999] flex w-full items-center navbar-enhanced lg:min-h-18 lg:px-[5%]">
        <div className="mx-auto size-full lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
            <Link href="/" className="flex items-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                alt="Bizzie Logo"
                className="h-8 w-auto transition-opacity duration-200 hover:opacity-80"
              />
            </Link>
            <div className="flex items-center gap-3 lg:hidden">
              <DarkModeToggle />
            </div>
          </div>

          <nav className="hidden lg:flex lg:items-center lg:gap-0">
            <Link
              href="/"
              className="text-regular block py-3 lg:px-6 lg:py-2 text-black dark:text-white hover:text-bizzie-600 dark:hover:text-bizzie-300"
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="text-regular block py-3 lg:px-6 lg:py-2 text-black dark:text-white hover:text-bizzie-600 dark:hover:text-bizzie-300"
            >
              Pricing
            </Link>
            <Link
              href="/features"
              className="text-regular block py-3 lg:px-6 lg:py-2 text-black dark:text-white hover:text-bizzie-600 dark:hover:text-bizzie-300"
            >
              Features
            </Link>
            
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-regular flex items-center gap-2 py-3 lg:px-6 lg:py-2 text-black dark:text-white hover:text-bizzie-600 dark:hover:text-bizzie-300">
                More Info
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </nav>

          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <DarkModeToggle />
          </div>
        </div>
      </section>
      
      <div 
        className={`fixed top-[72px] left-0 right-0 w-full bg-white dark:bg-bizzie-900 shadow-lg border-t border-gray-200 dark:border-bizzie-700 z-[998] transition-all duration-200 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <div className="px-[5%] py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">
                Product
              </h3>
              <div className="space-y-4">
                <Link href="/features" className="flex items-start gap-3 p-2 rounded-lg transition-colors group">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-bizzie-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-600 dark:text-bizzie-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-bizzie-600 dark:group-hover:text-bizzie-300">All Features</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Complete overview of platform capabilities.</p>
                  </div>
                </Link>

                <Link href="/pricing" className="flex items-start gap-3 p-2 rounded-lg transition-colors group">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-bizzie-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-600 dark:text-bizzie-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-bizzie-600 dark:group-hover:text-bizzie-300">Pricing Plans</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Choose the perfect plan for your business.</p>
                  </div>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">
                Platform
              </h3>
              <div className="space-y-4">
                <Link href="/roadmap" className="flex items-start gap-3 p-2 rounded-lg transition-colors group">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-bizzie-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-600 dark:text-bizzie-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-bizzie-600 dark:group-hover:text-bizzie-300">Roadmap</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">See what's coming next for Bizzie.</p>
                  </div>
                </Link>

                <Link href="/demo" className="flex items-start gap-3 p-2 rounded-lg transition-colors group">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-bizzie-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-600 dark:text-bizzie-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-bizzie-600 dark:group-hover:text-bizzie-300">Demo</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">See Bizzie in action with a live demo.</p>
                  </div>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">
                Resources
              </h3>
              <div className="space-y-4">
                <Link href="/support" className="flex items-start gap-3 p-2 rounded-lg transition-colors group">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-bizzie-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-600 dark:text-bizzie-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-bizzie-600 dark:group-hover:text-bizzie-300">Help Center</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Get help when you need it most.</p>
                  </div>
                </Link>

                <Link href="/faq" className="flex items-start gap-3 p-2 rounded-lg transition-colors group">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-bizzie-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-600 dark:text-bizzie-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-bizzie-600 dark:group-hover:text-bizzie-300">FAQ</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Quick answers to common questions.</p>
                  </div>
                </Link>

                <Link href="/contact" className="flex items-start gap-3 p-2 rounded-lg transition-colors group">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-bizzie-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-600 dark:text-bizzie-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-bizzie-600 dark:group-hover:text-bizzie-300">Contact</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Reach out to our team directly.</p>
                  </div>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">
                Company
              </h3>
              <div className="space-y-4">
                <Link href="/about" className="flex items-start gap-3 p-2 rounded-lg transition-colors group">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-bizzie-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-600 dark:text-bizzie-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-bizzie-600 dark:group-hover:text-bizzie-300">About Us</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Learn about our mission and team.</p>
                  </div>
                </Link>

                <Link href="/careers" className="flex items-start gap-3 p-2 rounded-lg transition-colors group">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-bizzie-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-600 dark:text-bizzie-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-bizzie-600 dark:group-hover:text-bizzie-300">Careers</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Join our growing team.</p>
                  </div>
                </Link>

                <Link href="/privacy" className="flex items-start gap-3 p-2 rounded-lg transition-colors group">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-bizzie-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-600 dark:text-bizzie-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-bizzie-600 dark:group-hover:text-bizzie-300">Privacy & Legal</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Our commitment to your privacy.</p>
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}