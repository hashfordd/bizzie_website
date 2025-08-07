"use client";

import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "@relume_io/relume-ui";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="pt-16 md:pt-18">
        {/* Hero Section */}
        <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bizzie-900 dark:text-white mb-6 leading-tight">
                Get in <span className="text-bizzie-600">Touch</span>
              </h1>
              <p className="text-lg text-bizzie-700 dark:text-bizzie-200 mb-8 leading-relaxed">
                Ready to transform your business? We'd love to hear from you. Reach out and let's discuss how Bizzie can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white dark:bg-bizzie-800 rounded-xl p-8 shadow-soft-lg border border-bizzie-200 dark:border-bizzie-700">
                <h2 className="text-2xl font-bold text-bizzie-900 dark:text-white mb-6">
                  Send us a message
                </h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-bizzie-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-bizzie-700 dark:text-bizzie-200">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-bizzie-900 dark:text-white mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-bizzie-300 dark:border-bizzie-600 rounded-lg focus:ring-2 focus:ring-bizzie-500 focus:border-bizzie-500 bg-white dark:bg-bizzie-700 text-bizzie-900 dark:text-white"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-bizzie-900 dark:text-white mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-bizzie-300 dark:border-bizzie-600 rounded-lg focus:ring-2 focus:ring-bizzie-500 focus:border-bizzie-500 bg-white dark:bg-bizzie-700 text-bizzie-900 dark:text-white"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-bizzie-900 dark:text-white mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-bizzie-300 dark:border-bizzie-600 rounded-lg focus:ring-2 focus:ring-bizzie-500 focus:border-bizzie-500 bg-white dark:bg-bizzie-700 text-bizzie-900 dark:text-white"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-bizzie-900 dark:text-white mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-bizzie-300 dark:border-bizzie-600 rounded-lg focus:ring-2 focus:ring-bizzie-500 focus:border-bizzie-500 bg-white dark:bg-bizzie-700 text-bizzie-900 dark:text-white"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-bizzie-900 dark:text-white mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-bizzie-300 dark:border-bizzie-600 rounded-lg focus:ring-2 focus:ring-bizzie-500 focus:border-bizzie-500 bg-white dark:bg-bizzie-700 text-bizzie-900 dark:text-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="demo">Request a Demo</option>
                        <option value="pricing">Pricing Questions</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="beta">Join Beta Program</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-bizzie-900 dark:text-white mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-bizzie-300 dark:border-bizzie-600 rounded-lg focus:ring-2 focus:ring-bizzie-500 focus:border-bizzie-500 bg-white dark:bg-bizzie-700 text-bizzie-900 dark:text-white resize-vertical"
                        placeholder="Tell us about your business and how we can help..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full btn-primary"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-bizzie-900 dark:text-white mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-bizzie-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-bizzie-900 dark:text-white mb-1">Address</h3>
                        <p className="text-bizzie-700 dark:text-bizzie-200">
                          123 Business Ave<br />
                          Suite 456<br />
                          San Francisco, CA 94107
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-bizzie-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-bizzie-900 dark:text-white mb-1">Phone</h3>
                        <p className="text-bizzie-700 dark:text-bizzie-200">+1 (800) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-bizzie-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-bizzie-900 dark:text-white mb-1">Email</h3>
                        <p className="text-bizzie-700 dark:text-bizzie-200">info@bizzie.io</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-bizzie-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-bizzie-900 dark:text-white mb-1">Business Hours</h3>
                        <p className="text-bizzie-700 dark:text-bizzie-200">
                          Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                          Saturday: 10:00 AM - 4:00 PM PST<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-bizzie-50 dark:bg-bizzie-800 rounded-xl p-6 border border-bizzie-200 dark:border-bizzie-700">
                  <h3 className="text-lg font-bold text-bizzie-900 dark:text-white mb-4">
                    Quick Links
                  </h3>
                  <div className="space-y-3">
                    <p className="text-bizzie-700 dark:text-bizzie-200 text-sm">
                      <strong>Need immediate help?</strong> Check out our <a href="/support" className="text-bizzie-600 hover:underline">Support Center</a> for instant answers.
                    </p>
                    <p className="text-bizzie-700 dark:text-bizzie-200 text-sm">
                      <strong>Want to see Bizzie in action?</strong> Visit our <a href="/demo" className="text-bizzie-600 hover:underline">Demo Page</a>.
                    </p>
                    <p className="text-bizzie-700 dark:text-bizzie-200 text-sm">
                      <strong>Questions about pricing?</strong> View our <a href="/pricing" className="text-bizzie-600 hover:underline">Pricing Plans</a>.
                    </p>
                  </div>
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
