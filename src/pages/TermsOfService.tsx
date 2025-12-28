import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { useEffect } from "react";

const TermsOfService = () => {
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
          <h1 className="text-4xl font-display font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last Updated: December 2024</p>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>By accessing, purchasing, or using any products or services provided by AION ("we," "us," or "our"), you ("user," "customer," or "you") agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our products or services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">2. Product Description and Use</h2>

              <h3 className="text-lg font-semibold text-foreground mb-3">2.1 Nature of Products</h3>
              <p className="mb-4">Our products are software tools designed to modify or interact with third-party video games. These products are provided "AS IS" without any warranties of any kind.</p>

              <h3 className="text-lg font-semibold text-foreground mb-3">2.2 Detection Risk</h3>
              <p className="mb-4">While we make efforts to maintain undetected status, we make NO GUARANTEES that our products will remain undetected by anti-cheat systems. Game publishers actively work to detect and prevent the use of such software.</p>

              <h3 className="text-lg font-semibold text-foreground mb-3">2.3 Prohibited Uses</h3>
              <p className="mb-3">You agree NOT to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Reverse engineer, decompile, or disassemble our software</li>
                <li>Redistribute, resell, or share access to our products</li>
                <li>Use our products in competitive tournaments or for commercial gain</li>
                <li>Attempt to bypass our licensing or authentication systems</li>
                <li>Use our products to harass, threaten, or harm other players</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">3. Account and License</h2>

              <h3 className="text-lg font-semibold text-foreground mb-3">3.1 License Grant</h3>
              <p className="mb-4">Upon purchase, we grant you a limited, non-exclusive, non-transferable, revocable license to use our software for the duration specified in your purchase.</p>

              <h3 className="text-lg font-semibold text-foreground mb-3">3.2 Account Security</h3>
              <p className="mb-4">You are responsible for maintaining the confidentiality of your account credentials. Any activity under your account is your responsibility.</p>

              <h3 className="text-lg font-semibold text-foreground mb-3">3.3 HWID Restrictions</h3>
              <p>Licenses are bound to your hardware ID (HWID). HWID resets are provided as specified in your product tier and are subject to our discretion.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">4. Payments and Refunds</h2>

              <h3 className="text-lg font-semibold text-foreground mb-3">4.1 Payment Processing</h3>
              <p className="mb-4">All payments are processed securely through SellHub, our third-party payment processor. By making a purchase, you agree to SellHub's terms and conditions.</p>

              <h3 className="text-lg font-semibold text-foreground mb-3">4.2 No Refund Policy</h3>
              <p className="mb-3">Due to the digital nature of our products, ALL SALES ARE FINAL. We do not offer refunds under any circumstances, including but not limited to:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Detection by anti-cheat systems</li>
                <li>Account bans or suspensions</li>
                <li>Changes in product functionality</li>
                <li>User error or incompatibility</li>
                <li>Dissatisfaction with product performance</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">4.3 Subscription Terms</h3>
              <p>Subscriptions do not auto-renew. You must manually purchase additional time when your license expires.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">5. Disclaimers and Limitations of Liability</h2>

              <h3 className="text-lg font-semibold text-foreground mb-3">5.1 No Warranties</h3>
              <p className="mb-4">OUR PRODUCTS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.</p>

              <h3 className="text-lg font-semibold text-foreground mb-3">5.2 Assumption of Risk</h3>
              <p className="mb-3">YOU ACKNOWLEDGE AND AGREE THAT:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Use of our products may result in permanent bans from games</li>
                <li>Game publishers may take legal action against users of modification software</li>
                <li>Our products may stop working at any time due to game updates or anti-cheat improvements</li>
                <li>You use our products entirely at your own risk</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">5.3 Limitation of Liability</h3>
              <p className="mb-3">TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Your use or inability to use our products</li>
                <li>Any account bans, suspensions, or restrictions</li>
                <li>Any detection or identification by anti-cheat systems</li>
                <li>Any unauthorized access to or use of our servers</li>
                <li>Any bugs, viruses, or other harmful code</li>
                <li>Any errors or omissions in any content</li>
              </ul>
              <p>IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID FOR THE PRODUCT IN QUESTION.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">6. Service Modifications and Termination</h2>

              <h3 className="text-lg font-semibold text-foreground mb-3">6.1 Right to Modify</h3>
              <p className="mb-4">We reserve the right to modify, suspend, or discontinue any aspect of our products or services at any time without notice or liability.</p>

              <h3 className="text-lg font-semibold text-foreground mb-3">6.2 Account Termination</h3>
              <p className="mb-4">We may terminate or suspend your access immediately, without prior notice or liability, for any reason, including breach of these Terms.</p>

              <h3 className="text-lg font-semibold text-foreground mb-3">6.3 Effect of Termination</h3>
              <p>Upon termination, your right to use our products ceases immediately. No refunds will be provided for terminated accounts.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">7. Intellectual Property</h2>
              <p>All software, documentation, and materials provided by us are protected by intellectual property laws. You do not acquire any ownership rights by using our products.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">8. Indemnification</h2>
              <p className="mb-3">You agree to indemnify, defend, and hold harmless AION, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorneys' fees) arising from:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Your use of our products</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Any actions taken by game publishers or anti-cheat providers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">9. Dispute Resolution</h2>

              <h3 className="text-lg font-semibold text-foreground mb-3">9.1 Governing Law</h3>
              <p className="mb-4">These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate, without regard to conflict of law provisions.</p>

              <h3 className="text-lg font-semibold text-foreground mb-3">9.2 Arbitration</h3>
              <p className="mb-4">Any disputes arising from these Terms or your use of our products shall be resolved through binding arbitration rather than in court, except where prohibited by law.</p>

              <h3 className="text-lg font-semibold text-foreground mb-3">9.3 Class Action Waiver</h3>
              <p>You agree to bring claims only in your individual capacity and not as part of any class or representative action.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">10. Age Restrictions</h2>
              <p>You must be at least 18 years old or the age of majority in your jurisdiction to purchase or use our products. By using our services, you represent that you meet these age requirements.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">11. Privacy and Data</h2>
              <p>Your use of our products is also governed by our Privacy Policy. We collect and use your data as described in our Privacy Policy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">12. Updates to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our products constitutes acceptance of modified Terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">13. Severability</h2>
              <p>If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms otherwise remain in full force and effect.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">14. Contact Information</h2>
              <p>For questions about these Terms, please contact us through our support channels on Discord.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">15. Entire Agreement</h2>
              <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and AION regarding the use of our products and supersede any prior agreements.</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
