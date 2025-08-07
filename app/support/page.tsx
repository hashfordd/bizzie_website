import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Link from "next/link";

export default function SupportPage() {
  const supportCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using Bizzie",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      articles: [
        "Setting up your Bizzie account",
        "Creating your first expense report", 
        "Understanding your dashboard",
        "Inviting team members"
      ]
    },
    {
      title: "Financial Management",
      description: "Master your business finances",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      ),
      articles: [
        "Tracking expenses and income",
        "Generating profit reports",
        "Understanding cash flow",
        "Setting up expense categories"
      ]
    },
    {
      title: "Integrations",
      description: "Connect Bizzie with your tools",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
        </svg>
      ),
      articles: [
        "QuickBooks integration setup",
        "Bank account connections",
        "Payment gateway sync",
        "API documentation"
      ]
    },
    {
      title: "Troubleshooting",
      description: "Solve common issues quickly",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11 14a1 1 0 11-2 0 1 1 0 012 0zm-2.5-3.5A.5.5 0 019 10h1a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H9a.5.5 0 01-.5-.5v-2zM10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" clipRule="evenodd" />
        </svg>
      ),
      articles: [
        "Login and password issues",
        "Data sync problems",
        "Report generation errors",
        "Browser compatibility"
      ]
    }
  ];

  const faqs = [
    {
      question: "How do I get started with Bizzie?",
      answer: "Getting started is easy! Sign up for a free account, follow our onboarding wizard to connect your bank accounts and expense sources, then start tracking your business finances immediately."
    },
    {
      question: "Can I import data from other accounting software?",
      answer: "Yes! Bizzie supports imports from QuickBooks, Excel/CSV files, and other popular accounting platforms. Our support team can help you migrate your data smoothly."
    },
    {
      question: "Is my financial data secure?",
      answer: "Absolutely. We use bank-level encryption, secure data centers, and follow industry best practices to protect your sensitive financial information. Your data is never shared with third parties."
    },
    {
      question: "Can I use Bizzie on my mobile device?",
      answer: "Yes! Bizzie works great on mobile browsers, and we're currently developing a dedicated mobile app that will be available in Q2 2025."
    },
    {
      question: "Do you offer customer support?",
      answer: "We provide comprehensive support through multiple channels: email support, live chat during business hours, video tutorials, and our extensive knowledge base."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time with no cancellation fees. You'll continue to have access to your account until the end of your current billing period."
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="pt-16 md:pt-18">
        {/* Hero Section */}
        <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bizzie-900 dark:text-white mb-6 leading-tight">
                Support <span className="text-bizzie-600">Center</span>
              </h1>
              <p className="text-lg text-bizzie-700 dark:text-bizzie-200 mb-8 leading-relaxed">
                Find answers, guides, and resources to help you get the most out of Bizzie. 
                Our support team is here to help you succeed.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for help articles, guides, and more..."
                    className="w-full px-6 py-4 text-lg border border-bizzie-300 dark:border-bizzie-600 rounded-lg focus:ring-2 focus:ring-bizzie-500 focus:border-bizzie-500 bg-white dark:bg-bizzie-700 text-bizzie-900 dark:text-white pr-12"
                  />
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-bizzie-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Categories */}
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-bizzie-900 dark:text-white text-center mb-12">
              Browse by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportCategories.map((category, index) => (
                <div key={index} className="bg-white dark:bg-bizzie-800 rounded-xl p-6 shadow-soft-lg border border-bizzie-200 dark:border-bizzie-700 hover:shadow-soft-xl transition-shadow">
                  <div className="w-16 h-16 bg-bizzie-600 rounded-lg flex items-center justify-center mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-bizzie-900 dark:text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <a href="#" className="text-sm text-bizzie-600 dark:text-bizzie-300 hover:underline">
                          {article}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-light-accent">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-bizzie-900 dark:text-white text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white dark:bg-bizzie-800 rounded-xl p-6 shadow-soft border border-bizzie-200 dark:border-bizzie-700">
                    <h3 className="text-lg font-bold text-bizzie-900 dark:text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-bizzie-700 dark:text-bizzie-200 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-bizzie-900 dark:text-white mb-6">
                Need More Help?
              </h2>
              <p className="text-lg text-bizzie-700 dark:text-bizzie-200 mb-8">
                Can't find what you're looking for? Our support team is ready to help you succeed.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-bizzie-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-bizzie-900 dark:text-white mb-2">Email Support</h3>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    Get detailed help via email. We typically respond within 24 hours.
                  </p>
                  <Link href="/contact" className="text-bizzie-600 hover:underline font-medium">
                    Send us an email →
                  </Link>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-bizzie-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-bizzie-900 dark:text-white mb-2">Live Chat</h3>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    Chat with our support team during business hours for instant help.
                  </p>
                  <a href="#" className="text-bizzie-600 hover:underline font-medium">
                    Start a chat →
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-bizzie-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-bizzie-900 dark:text-white mb-2">Phone Support</h3>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    Speak directly with our support team for complex issues.
                  </p>
                  <a href="tel:+18001234567" className="text-bizzie-600 hover:underline font-medium">
                    Call us at (800) 123-4567 →
                  </a>
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
