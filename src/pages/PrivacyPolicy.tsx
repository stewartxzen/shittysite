import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-card rounded-2xl border border-border p-8">
          <h1 className="text-4xl font-display font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: December 2024</p>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">1. Information We Collect</h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">1.1 Information You Provide</h3>
              <p className="mb-3">We collect information you provide directly to us, including:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><span className="text-foreground font-semibold">Account Information:</span> Email address, username, password</li>
                <li><span className="text-foreground font-semibold">Payment Information:</span> Processed by SellHub (we do not store credit card details)</li>
                <li><span className="text-foreground font-semibold">Communication Data:</span> Messages sent through Discord or support channels</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">1.2 Automatically Collected Information</h3>
              <p className="mb-3">When you use our products, we automatically collect:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><span className="text-foreground font-semibold">Hardware ID (HWID):</span> Used for license authentication and preventing abuse</li>
                <li><span className="text-foreground font-semibold">IP Address:</span> For security, fraud prevention, and geographic access control</li>
                <li><span className="text-foreground font-semibold">Device Information:</span> Operating system, system specifications</li>
                <li><span className="text-foreground font-semibold">Usage Data:</span> Product launch times, feature usage, error logs</li>
                <li><span className="text-foreground font-semibold">Game Data:</span> Information about which games you use our products with</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">1.3 Third-Party Information</h3>
              <p className="mb-3">We receive information from:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><span className="text-foreground font-semibold">SellHub:</span> Purchase confirmations, transaction IDs, customer emails</li>
                <li><span className="text-foreground font-semibold">Discord:</span> If you join our Discord server, we may collect your Discord username and ID</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the collected information for:</p>

              <h3 className="text-lg font-semibold text-foreground mb-3">2.1 Service Delivery</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Providing and maintaining our products</li>
                <li>Authenticating your license</li>
                <li>Processing transactions and sending purchase confirmations</li>
                <li>Delivering customer support</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">2.2 Security and Fraud Prevention</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Preventing unauthorized access and account sharing</li>
                <li>Detecting and preventing fraudulent purchases</li>
                <li>Enforcing our Terms of Service</li>
                <li>Identifying and banning abusive users</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">2.3 Product Improvement</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Analyzing usage patterns to improve functionality</li>
                <li>Debugging errors and fixing bugs</li>
                <li>Developing new features</li>
                <li>Monitoring product detection status</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">2.4 Communications</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Sending important service announcements</li>
                <li>Notifying you of product updates or maintenance</li>
                <li>Responding to your inquiries</li>
                <li>Sending promotional messages (you can opt out)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">3. Information Sharing and Disclosure</h2>

              <h3 className="text-lg font-semibold text-foreground mb-3">3.1 We Do Not Sell Your Data</h3>
              <p className="mb-4">We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>

              <h3 className="text-lg font-semibold text-foreground mb-3">3.2 Service Providers</h3>
              <p className="mb-3">We share information with trusted third-party service providers:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><span className="text-foreground font-semibold">SellHub:</span> Payment processing and transaction management</li>
                <li><span className="text-foreground font-semibold">Hosting Providers:</span> Server infrastructure (Fly.io)</li>
                <li><span className="text-foreground font-semibold">Analytics Services:</span> Usage statistics and error tracking</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">3.3 Legal Requirements</h3>
              <p className="mb-3">We may disclose your information if required by law or in response to:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Valid legal processes (subpoenas, court orders)</li>
                <li>Requests from law enforcement or government agencies</li>
                <li>Protection of our rights, property, or safety</li>
                <li>Prevention of fraud or illegal activity</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">3.4 Business Transfers</h3>
              <p>If we are involved in a merger, acquisition, or sale of assets, your information may be transferred to the new entity.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">4. Data Security</h2>

              <h3 className="text-lg font-semibold text-foreground mb-3">4.1 Security Measures</h3>
              <p className="mb-3">We implement reasonable security measures to protect your information, including:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure authentication systems</li>
                <li>Regular security audits</li>
                <li>Access controls and monitoring</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">4.2 Limitations</h3>
              <p className="mb-4">However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your information.</p>

              <h3 className="text-lg font-semibold text-foreground mb-3">4.3 Your Responsibility</h3>
              <p className="mb-3">You are responsible for:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Keeping your account credentials confidential</li>
                <li>Using strong, unique passwords</li>
                <li>Notifying us immediately of any unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">5. Data Retention</h2>
              <p className="mb-3">We retain your information for as long as necessary to:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Provide our services</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes</li>
                <li>Enforce our agreements</li>
              </ul>
              <p>After your license expires, we may retain certain information for security and fraud prevention purposes for up to 2 years.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">6. Your Rights and Choices</h2>

              <h3 className="text-lg font-semibold text-foreground mb-3">6.1 Access and Correction</h3>
              <p className="mb-3">You may request to:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Access the personal information we hold about you</li>
                <li>Correct inaccurate information</li>
                <li>Update your account details</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">6.2 Data Deletion</h3>
              <p className="mb-3">You may request deletion of your personal information, subject to:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Our legal obligations to retain certain data</li>
                <li>Our need to maintain records for security purposes</li>
                <li>Termination of your license</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">6.3 Marketing Opt-Out</h3>
              <p className="mb-3">You can opt out of promotional communications by:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Following unsubscribe instructions in emails</li>
                <li>Contacting our support team</li>
                <li>Adjusting your account preferences</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">6.4 Do Not Track</h3>
              <p>Our website does not respond to Do Not Track signals. You may use browser settings to block tracking technologies.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">7. International Data Transfers</h2>
              <p>Your information may be transferred to and processed in countries other than your own. These countries may have different data protection laws. By using our services, you consent to such transfers.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">8. Children's Privacy</h2>
              <p>Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">9. Cookies and Tracking Technologies</h2>

              <h3 className="text-lg font-semibold text-foreground mb-3">9.1 What We Use</h3>
              <p className="mb-3">We use cookies and similar technologies for:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Session management</li>
                <li>Security and fraud prevention</li>
                <li>Analytics and performance monitoring</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">9.2 Your Choices</h3>
              <p>You can control cookies through your browser settings. However, disabling cookies may affect functionality.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">10. Third-Party Services</h2>
              <p>Our products may interact with third-party services (games, anti-cheat systems). We are not responsible for the privacy practices of these third parties. Please review their privacy policies.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">11. California Privacy Rights (CCPA)</h2>
              <p className="mb-3">If you are a California resident, you have additional rights under the California Consumer Privacy Act:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Right to know what personal information we collect</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of sale (we don't sell data)</li>
                <li>Right to non-discrimination for exercising your rights</li>
              </ul>
              <p>To exercise these rights, contact us through our support channels.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">12. European Privacy Rights (GDPR)</h2>
              <p className="mb-3">If you are in the European Economic Area, you have rights under the GDPR including:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Right of access to your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">13. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically. Continued use of our services after changes constitutes acceptance of the updated policy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">14. Contact Us</h2>
              <p className="mb-3">If you have questions about this Privacy Policy or our data practices, please contact us:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Through our Discord support server</li>
                <li>Via email at the address provided in your product dashboard</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">15. Data Protection Officer</h2>
              <p>For privacy-related inquiries, you may contact our designated data protection contact through our support channels.</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
