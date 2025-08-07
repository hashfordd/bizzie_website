"use client";

import { Button } from "@relume_io/relume-ui";
import { useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { KeyboardArrowDown } from "relume-icons";
import Link from "next/link";
import { DarkModeToggle } from "./ui/dark-mode-toggle";
import { ContactForm } from "./ui/contact-form";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar() {
  const useActive = useRelume();
  return (
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
            <div>
              <ContactForm 
                triggerText="Start" 
                title="Join the Bizzie Waitlist"
                description="Be the first to experience Bizzie when we launch. We'll keep you updated on our progress."
                variant="bizzie"
                size="sm"
              />
            </div>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={useActive.toggleMobileMenu}
            >
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-neutral-darkest"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: 8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-neutral-darkest"
                animate={useActive.animateMobileMenu}
                variants={{
                  open: { width: 0, transition: { duration: 0.1 } },
                  closed: {
                    width: "1.5rem",
                    transition: { delay: 0.3, duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-neutral-darkest"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: -8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
            </button>
          </div>
        </div>
        <motion.div
          variants={{
            open: { height: "var(--height-open, 100dvh)" },
            close: { height: "var(--height-closed, 0)" },
          }}
          animate={useActive.animateMobileMenu}
          initial="close"
          exit="close"
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] text-left lg:flex lg:items-center lg:justify-center lg:flex-1 lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          <Link
            href="/"
            className="text-regular block py-3 first:pt-7 lg:px-6 lg:py-2 first:lg:pt-2 text-black dark:text-white"
          >
            Home
          </Link>
          <Link
            href="/pricing"
            className="text-regular block py-3 first:pt-7 lg:px-6 lg:py-2 first:lg:pt-2 text-black dark:text-white"
          >
            Pricing
          </Link>
          <Link
            href="/features"
            className="text-regular block py-3 first:pt-7 lg:px-6 lg:py-2 first:lg:pt-2 text-black dark:text-white"
          >
            Features
          </Link>
          <div
            onMouseEnter={useActive.openOnDesktopDropdownMenu}
            onMouseLeave={useActive.closeOnDesktopDropdownMenu}
          >
            <button
              className="btn-nav text-regular flex w-full items-center justify-start gap-4 py-3 text-left lg:w-auto lg:flex-none lg:justify-start lg:gap-2 lg:px-6 lg:py-2 text-black dark:text-white bg-transparent hover:bg-transparent border-none"
              onClick={useActive.openOnMobileDropdownMenu}
            >
              <span>More Info</span>
              <motion.span
                variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
                animate={useActive.animateDropdownMenuIcon}
                transition={{ duration: 0.3 }}
              >
                <KeyboardArrowDown className="text-black dark:text-white" />
              </motion.span>
            </button>
            <AnimatePresence>
              <motion.nav
                variants={{
                  open: {
                    visibility: "visible",
                    opacity: "var(--opacity-open, 100%)",
                    display: "block",
                    height: "auto",
                  },
                  close: {
                    visibility: "hidden",
                    opacity: "var(--opacity-close, 0)",
                    display: "none",
                    height: 0,
                  },
                }}
                animate={useActive.animateDropdownMenu}
                initial="close"
                exit="close"
                transition={{ duration: 0.3 }}
                className="lg:absolute lg:top-full lg:left-0 lg:right-0 lg:w-full !bg-white dark:!bg-bizzie-900 lg:border-t lg:border-gray-200 lg:dark:border-bizzie-700 lg:shadow-lg !text-gray-900 dark:!text-white"
              >
                <div className="lg:px-[5%] !bg-white dark:!bg-bizzie-900">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 lg:py-8 !bg-white dark:!bg-bizzie-900">
                    
                    {/* Core Features */}
                    <div className="p-6 !bg-white dark:!bg-bizzie-900">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">
                        Core Features
                      </h3>
                      <div className="space-y-4">
                        <Link href="/features" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-bizzie-800/50 transition-colors group">
                          <div className="w-8 h-8 bg-gray-100 dark:bg-bizzie-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-gray-600 dark:text-bizzie-300" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-bizzie-600 dark:group-hover:text-bizzie-300">Financial Dashboard</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Real-time insights into your business finances.</p>
                          </div>
                        </Link>
                        
                        <Link href="/features" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-bizzie-800/50 transition-colors group">
                          <div className="w-8 h-8 bg-gray-100 dark:bg-bizzie-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-gray-600 dark:text-bizzie-300" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-bizzie-600 dark:group-hover:text-bizzie-300">Expense Tracking</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Seamlessly track all your business expenses.</p>
                          </div>
                        </Link>

                        <Link href="/features" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-bizzie-800/50 transition-colors group">
                          <div className="w-8 h-8 bg-gray-100 dark:bg-bizzie-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-gray-600 dark:text-bizzie-300" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-bizzie-600 dark:group-hover:text-bizzie-300">Profit Optimization</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Identify opportunities to increase profitability.</p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Business Tools */}
                    <div className="p-6 !bg-white dark:!bg-bizzie-900">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">
                        Business Tools
                      </h3>
                      <div className="space-y-4">
                        <Link href="/pricing" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-bizzie-800/50 transition-colors group">
                          <div className="w-8 h-8 bg-gray-100 dark:bg-bizzie-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-gray-600 dark:text-bizzie-300" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-bizzie-600 dark:group-hover:text-bizzie-300">Pricing Plans</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Find the perfect plan for your business needs.</p>
                          </div>
                        </Link>
                        
                        <Link href="/roadmap" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-bizzie-800/50 transition-colors group">
                          <div className="w-8 h-8 bg-gray-100 dark:bg-bizzie-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-gray-600 dark:text-bizzie-300" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-bizzie-600 dark:group-hover:text-bizzie-300">Product Roadmap</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">See what's coming next for Bizzie.</p>
                          </div>
                        </Link>

                        <Link href="/features" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-bizzie-800/50 transition-colors group">
                          <div className="w-8 h-8 bg-gray-100 dark:bg-bizzie-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-gray-600 dark:text-bizzie-300" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-bizzie-600 dark:group-hover:text-bizzie-300">Integrations</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Connect with your existing business tools.</p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Resources */}
                    <div className="p-6 !bg-white dark:!bg-bizzie-900">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">
                        Resources
                      </h3>
                      <div className="space-y-4">
                        <Link href="/support" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-bizzie-800/50 transition-colors group">
                          <div className="w-8 h-8 bg-gray-100 dark:bg-bizzie-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-gray-600 dark:text-bizzie-300" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-bizzie-600 dark:group-hover:text-bizzie-300">Support Center</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Get help when you need it most.</p>
                          </div>
                        </Link>
                        
                        <Link href="/faq" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-bizzie-800/50 transition-colors group">
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

                        <Link href="/contact" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-bizzie-800/50 transition-colors group">
                          <div className="w-8 h-8 bg-gray-100 dark:bg-bizzie-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-gray-600 dark:text-bizzie-300" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-bizzie-600 dark:group-hover:text-bizzie-300">Contact Us</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Reach out to our team directly.</p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Company */}
                    <div className="p-6 !bg-white dark:!bg-bizzie-900">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">
                        Company
                      </h3>
                      <div className="space-y-4">
                                                <Link href="/about" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-bizzie-800/50 transition-colors group">
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
                        
                                                <Link href="/careers" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-bizzie-800/50 transition-colors group">
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

                                                <Link href="/privacy" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-bizzie-800/50 transition-colors group">
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
              </motion.nav>
            </AnimatePresence>
          </div>
        </motion.div>
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <DarkModeToggle />
          <ContactForm 
            triggerText="Start" 
            title="Join the Bizzie Waitlist"
            description="Be the first to experience Bizzie when we launch. We'll keep you updated on our progress."
            variant="bizzie"
            size="sm"
          />
        </div>
      </div>
    </section>
  );
}
