import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function PrivacyPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-16 md:pt-18">
        {/* Hero Section */}
        <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bizzie-900 dark:text-white mb-6 leading-tight">
                Privacy <span className="text-bizzie-600">Policy</span>
              </h1>
              <p className="text-lg text-bizzie-700 dark:text-bizzie-200 mb-8 leading-relaxed">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-bizzie-600 dark:text-bizzie-300">
                Last updated: December 2024
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <div className="bg-white dark:bg-bizzie-800 rounded-xl p-8 shadow-soft-lg border border-bizzie-200 dark:border-bizzie-700 space-y-8">
                
                <div>
                  <h2 className="text-2xl font-bold text-bizzie-900 dark:text-white mb-4">1. Information We Collect</h2>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
                  </p>
                  <ul className="list-disc list-inside text-bizzie-700 dark:text-bizzie-200 space-y-2">
                    <li>Account information (name, email, company details)</li>
                    <li>Financial data you choose to connect (bank accounts, transactions)</li>
                    <li>Usage data (how you interact with our platform)</li>
                    <li>Device and browser information</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-bizzie-900 dark:text-white mb-4">2. How We Use Your Information</h2>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    We use the information we collect to provide, maintain, and improve our services:
                  </p>
                  <ul className="list-disc list-inside text-bizzie-700 dark:text-bizzie-200 space-y-2">
                    <li>Provide financial insights and analytics</li>
                    <li>Process transactions and maintain your account</li>
                    <li>Send important updates and notifications</li>
                    <li>Improve our platform and develop new features</li>
                    <li>Provide customer support</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-bizzie-900 dark:text-white mb-4">3. Information Sharing</h2>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-bizzie-700 dark:text-bizzie-200 space-y-2">
                    <li>With your explicit consent</li>
                    <li>To service providers who assist in our operations</li>
                    <li>When required by law or to protect our rights</li>
                    <li>In connection with a business transfer or acquisition</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-bizzie-900 dark:text-white mb-4">4. Data Security</h2>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    We implement appropriate security measures to protect your information:
                  </p>
                  <ul className="list-disc list-inside text-bizzie-700 dark:text-bizzie-200 space-y-2">
                    <li>Bank-level encryption for data transmission</li>
                    <li>Secure data storage with regular backups</li>
                    <li>Regular security audits and updates</li>
                    <li>Limited access on a need-to-know basis</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-bizzie-900 dark:text-white mb-4">5. Your Rights</h2>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-bizzie-700 dark:text-bizzie-200 space-y-2">
                    <li>Access and update your account information</li>
                    <li>Request deletion of your personal data</li>
                    <li>Opt out of marketing communications</li>
                    <li>Request a copy of your data</li>
                    <li>Withdraw consent where applicable</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-bizzie-900 dark:text-white mb-4">6. Cookies and Tracking</h2>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    We use cookies and similar technologies to enhance your experience and analyze platform usage. You can control cookie settings through your browser preferences.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-bizzie-900 dark:text-white mb-4">7. Changes to This Policy</h2>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-bizzie-900 dark:text-white mb-4">8. Contact Us</h2>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    If you have any questions about this privacy policy or our data practices, please contact us:
                  </p>
                  <div className="bg-bizzie-50 dark:bg-bizzie-700 rounded-lg p-4">
                    <p className="text-bizzie-700 dark:text-bizzie-200">
                      <strong>Email:</strong> privacy@bizzie.io<br />
                      <strong>Address:</strong> 123 Business Ave, Suite 456, San Francisco, CA 94107<br />
                      <strong>Phone:</strong> +1 (800) 123-4567
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
