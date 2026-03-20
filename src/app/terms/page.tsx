import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

export default function TermsPage() {
    return (
        <main className="bg-white dark:bg-slate-900 min-h-screen">
            <LandingHeader />
            <div className="pt-32 pb-20 container mx-auto px-6 lg:px-12 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Terms and Conditions for Medidesh</h1>
                
                <div className="prose prose-lg prose-slate max-w-none text-slate-700">
                    <section className="mb-8">
                        <p>Welcome to Medidesh. These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of the Medidesh mobile application and related services (&ldquo;the App&rdquo;), which provide Inventory Management, Point of Sale (POS), and Medicine Search functionalities. By accessing or using the App, you agree to be bound by these Terms.</p>
                        <p className="mt-4">If you do not agree to these Terms, please do not use our services. These Terms are effective as of your first use of the App.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Eligibility and Registration</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Age Requirement:</strong> You must be at least 18 years old to use Medidesh for business purposes.</li>
                            <li><strong>Business Verification:</strong> Pharmacy owners and merchants must provide accurate registration details, including a valid Trade License and pharmacy registration credentials where applicable by law.</li>
                            <li><strong>Account Security:</strong> You are strictly responsible for maintaining the confidentiality of your account credentials. Medidesh is not liable for any unauthorized access to your inventory or POS data resulting from your failure to secure your device or password.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Use of Services</h2>
                        <h3 className="text-xl font-bold text-slate-800 mb-2 mt-4">2.1. Inventory & POS Management</h3>
                        <p>Our platform is designed to assist you with tracking stock, managing accounts, and generating receipts. However, you acknowledge that you are solely responsible for the physical accuracy of your inventory, verifying stock expiry dates manually, and managing your financial taxes. Medidesh does not act as an accounting or tax advisory service.</p>
                        
                        <h3 className="text-xl font-bold text-slate-800 mb-2 mt-4">2.2. Medicine Search & Health Data</h3>
                        <p>The Medicine Search feature is provided for informational and reference purposes only. It does not constitute professional medical advice, diagnosis, or treatment. Pharmacists utilizing this tool must rely on their professional judgment and the prescriptions provided by registered medical practitioners.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">3. User Responsibilities & Prohibited Activities</h2>
                        <p>When using Medidesh, you agree <strong>NOT</strong> to:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Use the platform to facilitate the sale of illegal, unapproved, or expired drugs.</li>
                            <li>Violate any local laws, including but not limited to the regulations set by the Directorate General of Drug Administration (DGDA) of Bangladesh.</li>
                            <li>Attempt to reverse-engineer, hack, or disrupt the App&apos;s servers or networks.</li>
                            <li>Input falsified customer data or misuse third-party personal information through the POS system.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Intellectual Property</h2>
                        <p>All content, branding, logos, software codebase, and algorithms associated with Medidesh are the exclusive property of Medidesh. You are granted a limited, non-exclusive, non-transferable license to use the App for its intended business purposes.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Hardware & Third-Party Integrations</h2>
                        <p>Medidesh supports Bluetooth integrations for thermal printing and barcode scanning. We provide software support for standard protocols, but we do not guarantee compatibility with every third-party hardware device. We are not responsible for hardware failures or misprints.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Limitation of Liability</h2>
                        <p>To the maximum extent permitted by applicable law, Medidesh and its affiliates shall not be liable for any indirect, incidental, or consequential damages, including but not limited to loss of profits, data loss, business interruption, or penalties incurred from regulatory bodies. The App is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis without warranties of any kind.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Account Termination</h2>
                        <p>We reserve the right to suspend or permanently terminate your account without prior notice if we detect fraudulent activity, systematic abuse of the platform, or any severe violation of these Terms or related operational laws.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Governing Law</h2>
                        <p>These Terms shall be governed by and construed in accordance with the laws of Bangladesh. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts located in Dhaka, Bangladesh.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Contact Information</h2>
                        <p>If you have any questions or require clarification regarding these Terms, please contact our support team:</p>
                        <address className="not-italic mt-2">
                            <strong>Medidesh</strong><br />
                            Gazipur, Bangladesh<br />
                            Email: <a href="mailto:info.support@medidesh.com" className="text-medidesh-teal-600 hover:underline font-bold">info.support@medidesh.com</a>
                        </address>
                    </section>
                </div>
            </div>
            <LandingFooter />
        </main>
    );
}
