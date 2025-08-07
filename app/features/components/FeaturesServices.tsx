"use client";

import React from "react";
import { ContactForm } from "../../components/ui/contact-form";
import Link from "next/link";

export function FeaturesServices() {
  const services = [
    {
      title: "Financial Dashboard",
      description: "Real-time insights into your business finances with easy-to-understand visualizations.",
      features: [
        "Live profit & loss tracking",
        "Cash flow monitoring", 
        "Expense categorization",
        "Revenue analytics"
      ],
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      )
    },
    {
      title: "Expense Tracking",
      description: "Seamlessly track and categorize all your business expenses across multiple sources.",
      features: [
        "Bank account integration",
        "Receipt scanning",
        "Automatic categorization", 
        "Recurring expense management"
      ],
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      )
    },
    {
      title: "Profit Optimization",
      description: "Identify opportunities to increase profitability with intelligent insights and recommendations.",
      features: [
        "Margin analysis",
        "Cost optimization",
        "Pricing recommendations",
        "Performance benchmarking"
      ],
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Reporting & Analytics",
      description: "Generate comprehensive reports to understand your business performance and trends.",
      features: [
        "Custom report builder",
        "Automated insights",
        "Trend analysis",
        "Export capabilities"
      ],
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      title: "Integration Hub",
      description: "Connect Bizzie with your existing tools for a seamless workflow experience.",
      features: [
        "QuickBooks sync",
        "Bank connections",
        "Payment gateways",
        "API access"
      ],
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Customer Support",
      description: "Get the help you need with our comprehensive support system and resources.",
      features: [
        "24/7 chat support",
        "Video tutorials",
        "Knowledge base",
        "Personal onboarding"
      ],
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-light-accent">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Complete Service Suite
          </h2>
          <p className="text-lg">
            Comprehensive financial management solutions designed specifically for home-service businesses. 
            Everything you need to understand, track, and optimize your business finances.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-bizzie-800 rounded-xl p-8 shadow-soft-lg border border-bizzie-200 dark:border-bizzie-700 hover:shadow-soft-xl transition-shadow">
              <div className="w-20 h-20 bg-bizzie-600 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-bizzie-600 dark:text-bizzie-300 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            How It Works
          </h3>
          <p className="text-lg mb-12">
            Get started with Bizzie in three simple steps and transform your business financial management.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-bizzie-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-xl font-bold mb-4">Connect Your Accounts</h4>
              <p>
                Securely link your bank accounts, credit cards, and existing tools to automatically import your financial data.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-bizzie-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-xl font-bold mb-4">Organize & Categorize</h4>
              <p>
                Our intelligent system automatically categorizes your transactions and expenses, saving you hours of manual work.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-bizzie-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-xl font-bold mb-4">Optimize & Grow</h4>
              <p>
                Get actionable insights and recommendations to optimize your costs, improve margins, and grow your business.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg mb-8">
            Join thousands of home-service businesses already using Bizzie to optimize their finances and grow sustainably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactForm 
              triggerText="Get Started Today" 
              title="Start Your Bizzie Journey"
              description="Ready to transform your business? Let's discuss how our services can help you achieve your financial goals."
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
      </div>
    </section>
  );
}
