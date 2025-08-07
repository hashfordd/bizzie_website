import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Link from "next/link";

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Getting Started",
      faqs: [
        {
          question: "How do I get started with Bizzie?",
          answer: "Getting started is easy! Sign up for a free account, follow our onboarding wizard to connect your bank accounts and expense sources, then start tracking your business finances immediately. Our support team is available to help with setup if needed."
        },
        {
          question: "What information do I need to set up my account?",
          answer: "You'll need your business information, bank account details for data sync, and any existing financial software credentials you'd like to integrate. The setup process takes about 5-10 minutes."
        },
        {
          question: "Is there a free trial available?",
          answer: "Yes! We offer a 14-day free trial of our Business plan so you can explore all features before committing. No credit card required to start your trial."
        }
      ]
    },
    {
      title: "Features & Functionality",
      faqs: [
        {
          question: "Can I import data from other accounting software?",
          answer: "Yes! Bizzie supports imports from QuickBooks, Excel/CSV files, and other popular accounting platforms. Our support team can help you migrate your data smoothly during onboarding."
        },
        {
          question: "How does expense categorization work?",
          answer: "Our intelligent system automatically categorizes your transactions based on merchant information and transaction patterns. You can also manually adjust categories and create custom expense categories for your business."
        },
        {
          question: "Can I generate custom reports?",
          answer: "Absolutely! Bizzie includes a custom report builder that lets you create profit & loss statements, cash flow reports, expense breakdowns, and more. You can save and schedule reports for regular delivery."
        },
        {
          question: "Does Bizzie work on mobile devices?",
          answer: "Yes! Bizzie works great on mobile browsers, and we're currently developing a dedicated mobile app that will be available in Q2 2025 with enhanced field management features."
        }
      ]
    },
    {
      title: "Security & Privacy",
      faqs: [
        {
          question: "Is my financial data secure?",
          answer: "Absolutely. We use bank-level encryption, secure data centers, and follow industry best practices to protect your sensitive financial information. Your data is never shared with third parties without your explicit consent."
        },
        {
          question: "How do you connect to my bank accounts?",
          answer: "We use read-only connections through secure, industry-standard APIs provided by trusted financial data aggregators. We never store your banking credentials and cannot make transactions on your behalf."
        },
        {
          question: "Who has access to my data?",
          answer: "Only you and authorized team members you invite have access to your financial data. Our support team can only access your account with your explicit permission and only for troubleshooting purposes."
        }
      ]
    },
    {
      title: "Billing & Plans",
      faqs: [
        {
          question: "How much does Bizzie cost?",
          answer: "We offer three plans: Basic ($19/month), Business ($29/month), and Enterprise ($49/month). Each plan includes different features and transaction limits. Check our pricing page for detailed comparisons."
        },
        {
          question: "Can I change my plan anytime?",
          answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences on your next invoice."
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer: "Yes, you can cancel your subscription at any time with no cancellation fees. You'll continue to have access to your account until the end of your current billing period."
        },
        {
          question: "Do you offer discounts for annual billing?",
          answer: "Yes! All plans offer a 20% discount when you pay annually instead of monthly. This is a great way to save money if you're committed to using Bizzie long-term."
        }
      ]
    },
    {
      title: "Support & Troubleshooting",
      faqs: [
        {
          question: "What kind of customer support do you offer?",
          answer: "We provide comprehensive support through multiple channels: email support, live chat during business hours, video tutorials, and our extensive knowledge base. Enterprise customers also get phone support."
        },
        {
          question: "My data isn't syncing correctly. What should I do?",
          answer: "First, check your bank connection status in Settings. If the issue persists, try disconnecting and reconnecting your accounts. If you're still having trouble, contact our support team with specific details about the sync issue."
        },
        {
          question: "How often is my data updated?",
          answer: "Most bank connections update automatically every 12-24 hours. Credit card transactions typically appear within 1-2 business days. You can also manually refresh your connections at any time."
        },
        {
          question: "Can I export my data?",
          answer: "Yes! You can export your data in multiple formats including CSV, Excel, and PDF. This is useful for sharing with accountants, creating backups, or if you decide to switch to another platform."
        }
      ]
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
                Frequently Asked <span className="text-bizzie-600">Questions</span>
              </h1>
              <p className="text-lg text-bizzie-700 dark:text-bizzie-200 mb-8 leading-relaxed">
                Find quick answers to common questions about Bizzie. Can't find what you're looking for? 
                Our support team is here to help.
              </p>
              
              {/* Quick Links */}
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/support" className="btn-secondary text-sm">
                  Visit Support Center
                </Link>
                <Link href="/contact" className="btn-primary text-sm">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl md:text-3xl font-bold text-bizzie-900 dark:text-white mb-8 text-center">
                    {category.title}
                  </h2>
                  <div className="space-y-6">
                    {category.faqs.map((faq, faqIndex) => (
                      <div key={faqIndex} className="bg-white dark:bg-bizzie-800 rounded-xl p-6 shadow-soft border border-bizzie-200 dark:border-bizzie-700">
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
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-light-accent">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-bizzie-900 dark:text-white mb-6">
                Still Need Help?
              </h2>
              <p className="text-lg text-bizzie-700 dark:text-bizzie-200 mb-8">
                Our support team is ready to help you get the most out of Bizzie.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-bizzie-800 rounded-xl p-6 shadow-soft border border-bizzie-200 dark:border-bizzie-700">
                  <div className="w-12 h-12 bg-bizzie-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-bizzie-900 dark:text-white mb-2">Live Chat</h3>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    Get instant help during business hours
                  </p>
                  <a href="#" className="text-bizzie-600 hover:underline font-medium">
                    Start a conversation →
                  </a>
                </div>
                
                <div className="bg-white dark:bg-bizzie-800 rounded-xl p-6 shadow-soft border border-bizzie-200 dark:border-bizzie-700">
                  <div className="w-12 h-12 bg-bizzie-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-bizzie-900 dark:text-white mb-2">Email Support</h3>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    Send us a detailed message
                  </p>
                  <Link href="/contact" className="text-bizzie-600 hover:underline font-medium">
                    Send an email →
                  </Link>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-bizzie-50 dark:bg-bizzie-700 rounded-xl">
                <h4 className="font-bold text-bizzie-900 dark:text-white mb-2">Popular Resources</h4>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <Link href="/support" className="text-bizzie-600 hover:underline">Support Center</Link>
                  <Link href="/demo" className="text-bizzie-600 hover:underline">Video Tutorials</Link>
                  <Link href="/pricing" className="text-bizzie-600 hover:underline">Pricing Guide</Link>
                  <Link href="/features" className="text-bizzie-600 hover:underline">Feature Overview</Link>
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
