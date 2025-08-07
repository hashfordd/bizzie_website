"use client";

import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

interface CookieCategory {
  id: string;
  name: string;
  description: string;
  essential: boolean;
  enabled: boolean;
  cookies: CookieDetail[];
}

interface CookieDetail {
  name: string;
  purpose: string;
  duration: string;
  provider: string;
}

export default function CookiesPage() {
  const [cookieCategories, setCookieCategories] = useState<CookieCategory[]>([
    {
      id: "essential",
      name: "Essential Cookies",
      description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
      essential: true,
      enabled: true,
      cookies: [
        {
          name: "bizzie_session",
          purpose: "Maintains your login session and security",
          duration: "Session",
          provider: "Bizzie"
        },
        {
          name: "csrf_token",
          purpose: "Protects against cross-site request forgery attacks",
          duration: "Session",
          provider: "Bizzie"
        },
        {
          name: "cookie_consent",
          purpose: "Remembers your cookie preferences",
          duration: "1 year",
          provider: "Bizzie"
        }
      ]
    },
    {
      id: "functional",
      name: "Functional Cookies",
      description: "These cookies enable the website to provide enhanced functionality and personalization.",
      essential: false,
      enabled: true,
      cookies: [
        {
          name: "theme_preference",
          purpose: "Remembers your dark/light mode preference",
          duration: "1 year",
          provider: "Bizzie"
        },
        {
          name: "language_preference",
          purpose: "Stores your language selection",
          duration: "1 year",
          provider: "Bizzie"
        },
        {
          name: "dashboard_layout",
          purpose: "Saves your dashboard layout preferences",
          duration: "6 months",
          provider: "Bizzie"
        }
      ]
    },
    {
      id: "analytics",
      name: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      essential: false,
      enabled: false,
      cookies: [
        {
          name: "_ga",
          purpose: "Distinguishes unique users and sessions",
          duration: "2 years",
          provider: "Google Analytics"
        },
        {
          name: "_ga_*",
          purpose: "Used to persist session state",
          duration: "2 years",
          provider: "Google Analytics"
        },
        {
          name: "gtag_*",
          purpose: "Tracks user interactions and conversions",
          duration: "1 year",
          provider: "Google Analytics"
        }
      ]
    },
    {
      id: "marketing",
      name: "Marketing Cookies",
      description: "These cookies track your activity across websites to deliver more relevant advertising.",
      essential: false,
      enabled: false,
      cookies: [
        {
          name: "fb_pixel",
          purpose: "Tracks conversions and builds audiences",
          duration: "3 months",
          provider: "Meta (Facebook)"
        },
        {
          name: "linkedin_insight",
          purpose: "Tracks professional engagement and conversions",
          duration: "2 years",
          provider: "LinkedIn"
        },
        {
          name: "google_ads",
          purpose: "Measures ad effectiveness and audience targeting",
          duration: "1 year",
          provider: "Google Ads"
        }
      ]
    }
  ]);

  const handleCategoryToggle = (categoryId: string) => {
    setCookieCategories(prev => 
      prev.map(category => 
        category.id === categoryId && !category.essential
          ? { ...category, enabled: !category.enabled }
          : category
      )
    );
  };

  const acceptAll = () => {
    setCookieCategories(prev => 
      prev.map(category => ({ ...category, enabled: true }))
    );
  };

  const acceptEssentialOnly = () => {
    setCookieCategories(prev => 
      prev.map(category => ({ 
        ...category, 
        enabled: category.essential 
      }))
    );
  };

  const savePreferences = () => {
    // In a real implementation, this would save to backend/localStorage
    alert("Cookie preferences saved successfully!");
  };

  return (
    <div>
      <Navbar />
      <div className="pt-16 md:pt-18">
        {/* Hero Section */}
        <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Cookie <span className="text-bizzie-600">Settings</span>
              </h1>
              <p className="text-lg mb-8 leading-relaxed">
                We use cookies to enhance your experience, analyze site usage, and deliver personalized content. 
                Manage your preferences below to control what data we collect.
              </p>
            </div>
          </div>
        </section>

        {/* Cookie Preferences */}
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-bizzie-800 rounded-xl p-8 shadow-soft-lg border border-bizzie-200 dark:border-bizzie-700 mb-8">
                <h2 className="text-2xl font-bold mb-6">
                  Manage Your Cookie Preferences
                </h2>
                <p className="text-lg mb-8 leading-relaxed">
                  Choose which types of cookies you're comfortable with. You can change these settings at any time.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button 
                    onClick={acceptAll}
                    className="btn-primary flex-1 px-6 py-3 text-base font-medium rounded-lg transition-colors"
                  >
                    Accept All Cookies
                  </button>
                  <button 
                    onClick={acceptEssentialOnly}
                    className="btn-secondary flex-1 px-6 py-3 text-base font-medium rounded-lg transition-colors"
                  >
                    Essential Only
                  </button>
                </div>
              </div>

              {/* Cookie Categories */}
              <div className="space-y-6">
                {cookieCategories.map((category) => (
                  <div key={category.id} className="bg-white dark:bg-bizzie-800 rounded-xl p-8 shadow-soft border border-bizzie-200 dark:border-bizzie-700">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 flex items-center">
                          {category.name}
                          {category.essential && (
                            <span className="ml-3 px-2 py-1 bg-bizzie-100 dark:bg-bizzie-700 text-bizzie-800 dark:text-bizzie-200 text-xs rounded-full">
                              Required
                            </span>
                          )}
                        </h3>
                        <p className="leading-relaxed mb-4">
                          {category.description}
                        </p>
                      </div>
                      <div className="ml-6">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={category.enabled}
                            onChange={() => handleCategoryToggle(category.id)}
                            disabled={category.essential}
                            className="sr-only peer"
                          />
                          <div className={`relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-bizzie-300 dark:peer-focus:ring-bizzie-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-bizzie-600 ${category.essential ? 'opacity-50 cursor-not-allowed' : ''}`}></div>
                        </label>
                      </div>
                    </div>

                    {/* Cookie Details */}
                    <div className="border-t border-bizzie-200 dark:border-bizzie-700 pt-6">
                      <h4 className="text-lg font-bold mb-4">Cookies in this category:</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-bizzie-200 dark:border-bizzie-700">
                              <th className="text-left py-2 pr-4 font-medium">Cookie</th>
                              <th className="text-left py-2 pr-4 font-medium">Purpose</th>
                              <th className="text-left py-2 pr-4 font-medium">Duration</th>
                              <th className="text-left py-2 font-medium">Provider</th>
                            </tr>
                          </thead>
                          <tbody>
                            {category.cookies.map((cookie, index) => (
                              <tr key={index} className="border-b border-bizzie-100 dark:border-bizzie-800 last:border-b-0">
                                <td className="py-3 pr-4 font-mono text-bizzie-600 dark:text-bizzie-300">
                                  {cookie.name}
                                </td>
                                <td className="py-3 pr-4">
                                  {cookie.purpose}
                                </td>
                                <td className="py-3 pr-4">
                                  {cookie.duration}
                                </td>
                                <td className="py-3">
                                  {cookie.provider}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Save Preferences */}
              <div className="mt-8 text-center">
                <button 
                  onClick={savePreferences}
                  className="btn-primary px-8 py-3 text-base font-medium rounded-lg transition-colors"
                >
                  Save My Preferences
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Information */}
        <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-light-accent">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                About Cookies
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-bizzie-800 rounded-xl p-6 shadow-soft border border-bizzie-200 dark:border-bizzie-700">
                  <div className="w-12 h-12 bg-bizzie-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">What are cookies?</h3>
                  <p className="leading-relaxed">
                    Cookies are small text files that websites place on your device to remember information about your visit. 
                    They help us provide you with a better, more personalized experience.
                  </p>
                </div>

                <div className="bg-white dark:bg-bizzie-800 rounded-xl p-6 shadow-soft border border-bizzie-200 dark:border-bizzie-700">
                  <div className="w-12 h-12 bg-bizzie-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Your privacy matters</h3>
                  <p className="leading-relaxed">
                    We respect your privacy and give you full control over which cookies we use. 
                    Essential cookies are required for basic functionality, while others are optional.
                  </p>
                </div>

                <div className="bg-white dark:bg-bizzie-800 rounded-xl p-6 shadow-soft border border-bizzie-200 dark:border-bizzie-700">
                  <div className="w-12 h-12 bg-bizzie-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Change anytime</h3>
                  <p className="leading-relaxed">
                    You can update your cookie preferences at any time by returning to this page. 
                    Your choices will be remembered and applied across all your future visits.
                  </p>
                </div>

                <div className="bg-white dark:bg-bizzie-800 rounded-xl p-6 shadow-soft border border-bizzie-200 dark:border-bizzie-700">
                  <div className="w-12 h-12 bg-bizzie-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Need help?</h3>
                  <p className="leading-relaxed">
                    Have questions about our cookie policy or how we use your data? 
                    Contact our support team - we're here to help and provide transparency.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg mb-6">
                  For more detailed information about our data practices, please review our full privacy policy.
                </p>
                <a 
                  href="/privacy" 
                  className="text-bizzie-600 hover:underline font-medium text-lg"
                >
                  View Privacy Policy →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
