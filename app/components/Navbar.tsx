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
      <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-start lg:gap-4">
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
                title="Start Your Bizzie Journey"
                description="Ready to transform your business? Let's discuss how Bizzie can help you achieve your financial goals."
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
          className="overflow-hidden px-[5%] text-left lg:flex lg:items-center lg:justify-start lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          <Link
            href="/"
            className="text-regular block py-3 first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2"
          >
            Home Services
          </Link>
          <Link
            href="/pricing"
            className="text-regular block py-3 first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2"
          >
            Pricing Plans
          </Link>
          <Link
            href="/features"
            className="text-regular block py-3 first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2"
          >
            Features List
          </Link>
          <div
            onMouseEnter={useActive.openOnDesktopDropdownMenu}
            onMouseLeave={useActive.closeOnDesktopDropdownMenu}
          >
            <button
              className="text-regular flex w-full items-center justify-start gap-4 py-3 text-left lg:w-auto lg:flex-none lg:justify-start lg:gap-2 lg:px-4 lg:py-2"
              onClick={useActive.openOnMobileDropdownMenu}
            >
              <span>Resources</span>
              <motion.span
                variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
                animate={useActive.animateDropdownMenuIcon}
                transition={{ duration: 0.3 }}
              >
                <KeyboardArrowDown className="text-scheme-text" />
              </motion.span>
            </button>
            <AnimatePresence>
              <motion.nav
                variants={{
                  open: {
                    visibility: "visible",
                    opacity: "var(--opacity-open, 100%)",
                    display: "block",
                    y: 0,
                  },
                  close: {
                    visibility: "hidden",
                    opacity: "var(--opacity-close, 0)",
                    display: "none",
                    y: "var(--y-close, 0%)",
                  },
                }}
                animate={useActive.animateDropdownMenu}
                initial="close"
                exit="close"
                transition={{ duration: 0.2 }}
                className="bg-scheme-background lg:absolute lg:z-50 lg:border lg:border-scheme-border lg:p-2 lg:[--y-close:25%]"
              >
                <Link
                  href="/roadmap"
                  className="block py-3 text-left lg:px-4 lg:py-2"
                >
                  Roadmap
                </Link>
                <Link
                  href="/support"
                  className="block py-3 text-left lg:px-4 lg:py-2"
                >
                  Support Center
                </Link>
                <Link
                  href="/contact"
                  className="block py-3 text-left lg:px-4 lg:py-2"
                >
                  Contact Us
                </Link>
              </motion.nav>
            </AnimatePresence>
          </div>
        </motion.div>
        <div className="hidden justify-self-end lg:flex lg:items-center lg:gap-4">
          <DarkModeToggle />
          <ContactForm 
            triggerText="Start" 
            title="Start Your Bizzie Journey"
            description="Ready to transform your business? Let's discuss how Bizzie can help you achieve your financial goals."
            variant="bizzie"
            size="sm"
          />
        </div>
      </div>
    </section>
  );
}
