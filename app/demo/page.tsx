"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ui/contact-form";
import Link from "next/link";

export default function DemoPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-16 md:pt-18 px-[5%] py-16 md:py-24 lg:py-28 section-bg-subtle">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bizzie-900 dark:text-bizzie-100 mb-6 leading-tight">
              Experience <span className="text-bizzie-600 dark:text-bizzie-400">Bizzie</span> in Action
            </h1>
            <p className="text-lg text-bizzie-700 dark:text-bizzie-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              See how Bizzie transforms home-service businesses with our interactive demo. 
              Discover the tools that will revolutionize your financial management.
            </p>
          </div>
          
          <div className="animate-slide-up mb-16" style={{animationDelay: '0.2s'}}>
            <div className="aspect-video bg-bizzie-100 dark:bg-bizzie-800 rounded-xl shadow-soft-lg border border-bizzie-200 dark:border-bizzie-700 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-bizzie-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-bizzie-600 dark:text-bizzie-400 font-medium">Interactive Demo Coming Soon</p>
                <p className="text-bizzie-500 dark:text-bizzie-500 text-sm mt-2">Schedule a personalized walkthrough with our team</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card-enhanced text-center animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="w-12 h-12 bg-bizzie-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-bizzie-900 dark:text-bizzie-100 mb-2">Financial Dashboard</h3>
              <p className="text-bizzie-700 dark:text-bizzie-300">Real-time insights into your business performance</p>
            </div>

            <div className="card-enhanced text-center animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="w-12 h-12 bg-bizzie-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-bizzie-900 dark:text-bizzie-100 mb-2">Profit Optimization</h3>
              <p className="text-bizzie-700 dark:text-bizzie-300">AI-powered recommendations to boost profitability</p>
            </div>

            <div className="card-enhanced text-center animate-slide-up" style={{animationDelay: '0.5s'}}>
              <div className="w-12 h-12 bg-bizzie-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-bizzie-900 dark:text-bizzie-100 mb-2">Quality Assurance</h3>
              <p className="text-bizzie-700 dark:text-bizzie-300">Maintain excellence across all service operations</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center animate-slide-up" style={{animationDelay: '0.6s'}}>
            <ContactForm 
              triggerText="Schedule Demo" 
              title="Book Your Personal Demo"
              description="Get a personalized walkthrough of Bizzie's features tailored to your business needs."
              variant="bizzie"
              size="lg"
            />
            <Link 
              href="/pricing" 
              className="btn-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
