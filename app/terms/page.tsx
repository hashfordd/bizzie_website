import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function TermsPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-16 md:pt-18">
        {/* Hero Section */}
        <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bizzie-900 dark:text-white mb-6 leading-tight">
                Terms of <span className="text-bizzie-600">Service</span>
              </h1>
              <p className="text-lg text-bizzie-700 dark:text-bizzie-200 mb-8 leading-relaxed">
                These terms govern your use of Bizzie's services. Please read them carefully.
              </p>
              <p className="text-sm text-bizzie-600 dark:text-bizzie-300">
                Last updated: December 2024
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-bizzie-800 rounded-xl p-8 shadow-soft-lg border border-bizzie-200 dark:border-bizzie-700 space-y-8">
                
                <div>
                  <h2 className="text-2xl font-bold text-bizzie-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    By accessing and using Bizzie's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-bizzie-900 dark:text-white mb-4">2. Service Description</h2>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    Bizzie provides financial management and analytics tools specifically designed for home-service businesses. Our services include:
                  </p>
                  <ul className="list-disc list-inside text-bizzie-700 dark:text-bizzie-200 space-y-2">
                    <li>Financial dashboard and reporting</li>
                    <li>Expense tracking and categorization</li>
                    <li>Profit optimization insights</li>
                    <li>Integration with third-party financial tools</li>
                    <li>Customer support and resources</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-bizzie-900 dark:text-white mb-4">3. User Accounts</h2>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    To access certain features of our service, you must create an account. You agree to:
                  </p>
                  <ul className="list-disc list-inside text-bizzie-700 dark:text-bizzie-200 space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>Accept responsibility for all activities under your account</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-bizzie-900 dark:text-white mb-4">4. Acceptable Use</h2>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our service. Prohibited activities include:
                  </p>
                  <ul className="list-disc list-inside text-bizzie-700 dark:text-bizzie-200 space-y-2">
                    <li>Violating any applicable laws or regulations</li>
                    <li>Attempting to gain unauthorized access to our systems</li>
                    <li>Interfering with other users' use of the service</li>
                    <li>Transmitting malicious code or viruses</li>
                    <li>Using the service for competitive analysis without permission</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-bizzie-900 dark:text-white mb-4">5. Subscription and Payment</h2>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    Our services are offered through various subscription plans:
                  </p>
                  <ul className="list-disc list-inside text-bizzie-700 dark:text-bizzie-200 space-y-2">
                    <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                    <li>All fees are non-refundable except as required by law</li>
                    <li>We may change our pricing with 30 days notice</li>
                    <li>You may cancel your subscription at any time</li>
                    <li>Service continues until the end of your current billing period</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-bizzie-900 dark:text-white mb-4">6. Data and Privacy</h2>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    Your privacy is important to us. Our data practices are governed by our Privacy Policy. Key points include:
                  </p>
                  <ul className="list-disc list-inside text-bizzie-700 dark:text-bizzie-200 space-y-2">
                    <li>We use bank-level security to protect your data</li>
                    <li>Your financial data remains confidential</li>
                    <li>We do not sell your personal information</li>
                    <li>You retain ownership of your data</li>
                    <li>You can export or delete your data at any time</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-bizzie-900 dark:text-white mb-4">7. Intellectual Property</h2>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    The Bizzie platform, including all content, features, and functionality, is owned by Bizzie and is protected by copyright, trademark, and other intellectual property laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-bizzie-900 dark:text-white mb-4">8. Service Availability</h2>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    While we strive to maintain high availability, we do not guarantee that our service will be available 100% of the time. We may experience downtime for maintenance, updates, or unforeseen circumstances.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-bizzie-900 dark:text-white mb-4">9. Limitation of Liability</h2>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    To the maximum extent permitted by law, Bizzie shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-bizzie-900 dark:text-white mb-4">10. Termination</h2>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    We may terminate or suspend your account and access to our services at our sole discretion, without prior notice, for conduct that we believe violates these terms or is harmful to other users or our business.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-bizzie-900 dark:text-white mb-4">11. Changes to Terms</h2>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    We reserve the right to modify these terms at any time. We will notify users of material changes via email or through our platform. Continued use of our services after changes constitutes acceptance of the new terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-bizzie-900 dark:text-white mb-4">12. Contact Information</h2>
                  <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                    If you have any questions about these terms, please contact us:
                  </p>
                  <div className="bg-bizzie-50 dark:bg-bizzie-700 rounded-lg p-4">
                    <p className="text-bizzie-700 dark:text-bizzie-200">
                      <strong>Email:</strong> legal@bizzie.io<br />
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
