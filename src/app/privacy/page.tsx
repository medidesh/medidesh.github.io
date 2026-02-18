import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

export default function PrivacyPage() {
    return (
        <main className="bg-white min-h-screen">
            <LandingHeader />
            <div className="pt-32 pb-20 container mx-auto px-6 lg:px-12 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Privacy Policy for Medidesh</h1>

                <div className="prose prose-lg prose-slate max-w-none text-slate-700">
                    <section className="mb-8">
                        <p>Medidesh (“we”, “our” or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application Medidesh (“the App"), which includes Inventory Management, Point of Sale (POS), and Medicine Search functionalities.</p>
                        <p className="mt-4">This Policy is drafted in accordance with the Digital Security Act 2018 (Bangladesh), the Personal Data Protection Act (Bangladesh), and the General Data Protection Regulation (GDPR) for international users.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Data Controller</h2>
                        <p>The entity responsible for the processing of your data is: <strong>Medidesh, Gazipur, Bangladesh, medidesh@info.com.bd</strong></p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Information We Collect</h2>
                        <p>We collect data to facilitate business operations (Inventory/POS) and healthcare accessibility (Medicine Search)</p>

                        <h3 className="text-xl font-bold text-slate-800 mb-2 mt-4">2.1. Personal Identification Information (PII)</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Account Registration:</strong> Name, Phone Number, Email Address, Pharmacy/Business Name, Trade License Number (for pharmacists/merchants).</li>
                            <li><strong>Verification Data:</strong> National ID (NID) or Passport copies (if required for regulatory compliance for pharmacy owners).</li>
                        </ul>

                        <h3 className="text-xl font-bold text-slate-800 mb-2 mt-4">2.2. Business & Financial Data (Inventory & POS)</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Inventory Data:</strong> Drug names, stock levels, batch numbers, expiry dates and supplier details entered into the system.</li>
                            <li><strong>Transaction Data:</strong> Sales records, customer receipts, pricing margins, and profit/lost statements generated via the POS system.</li>
                            <li><strong>Customer Data (Third-Party):</strong> If you (the Pharmacist/Merchant) enter your customer’s details (e.g. for invoicing or credit purchase), you warrant that you have obtained their consent to process this data.</li>
                        </ul>

                        <h3 className="text-xl font-bold text-slate-800 mb-2 mt-4">2.3. Health & Sensitive Data (Medicine Search)</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Search Queries:</strong> Keywords used in the medicine search bar (e.g., specific drug names, symptoms).</li>
                            <li><strong>Prescription Data:</strong> If the App allows uploading prescriptions, we collect images and metadata of these documents.</li>
                            <li><strong>Health Usage:</strong> Frequency of searches for specific therapeutic categories.</li>
                        </ul>

                        <h3 className="text-xl font-bold text-slate-800 mb-2 mt-4">2.4. Device & Technical Data</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Device Information:</strong> IP address, device model, Android OS version, unique device identifiers (IMEI/ADID).</li>
                            <li><strong>Location Data:</strong> Coarse location (City/Town/Region) for analytics; Precise location (GPS) only if required for delivery features with explicit permission.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">3. How we use your information</h2>
                        <p>We use your data for the following “Lawful Purposes”</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Service Provision:</strong> To sync inventory across devices, calculate POS totals, and return accurate medicine search results.</li>
                            <li><strong>Safety & Verification:</strong> To verify that the entity using the POS is a legitimate business/pharmacy (preventing illicit drug trade).</li>
                            <li><strong>Analytics:</strong> To analyze demand for specific medicines in different regions (aggregated and anonymized).</li>
                            <li><strong>Legal Compliance:</strong> To comply with Bangladesh Drug Administration regulations regarding the sale of scheduled drugs.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Device Permissions</h2>
                        <p className="mb-4">To provide specific features, Medidesh app requires certain permissions on your device:</p>

                        <h3 className="text-xl font-bold text-slate-800 mb-2 mt-4">4.1. Camera Permission</h3>
                        <p>Medidesh app uses your device's camera to allow you to capture and upload images of prescriptions, medical reports, or your profile picture directly within the app. We do not record or store images without your explicit action.</p>

                        <h3 className="text-xl font-bold text-slate-800 mb-2 mt-4">4.2. Bluetooth Permission</h3>
                        <p>The app utilizes Bluetooth connectivity to pair with and print receipts via compatible thermal printers and to connect with supported medical devices for health data integration. Bluetooth is used solely for these connection purposes.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Data Sharing and Disclosure</h2>
                        <p>We do not sell your personal data. We disclose information only in the following strict circumstances:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Service Providers:</strong> We may share data with cloud hosting providers (e.g., AWS, Google Cloud) and payment gateways (e.g., bKash, Nagad, SSL Commerz) solely to process payments and host data.</li>
                            <li><strong>Legal Requirements:</strong> We may disclose information if required to do so by the Bangladesh Cyber Tribunal, Law Enforcement Agencies (under Section 30 of the Digital Security Act), or a court order.</li>
                            <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition of all or a portion of our business to another company.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Data Retention Policy</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Active Accounts:</strong> We retain your inventory and POS data for as long as your account is active to ensure business continuity.</li>
                            <li><strong>Deleted Accounts:</strong> Upon account deletion request, we will permanently delete your personal data within 30 days, unless a longer retention period is required by tax law (for POS transaction records).</li>
                            <li><strong>Health Data:</strong> Search history is anonymized after 90 days.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Data Security</h2>
                        <p>We implement robust security measures:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Encryption:</strong> All data transmitted between the App and our servers is encrypted using TLS 1.2/1.3 protocols. Database entries for sensitive health data are encrypted at rest.</li>
                            <li><strong>Access Control:</strong> Strict role-based access control (RBAC) ensures only authorized personnel can access server data.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">8. International Data Transfers</h2>
                        <p>For users outside Bangladesh:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>We process data in compliance with the GDPR.</li>
                            <li>If we transfer data outside the European Economic Area (EEA), we rely on Standard Contractual Clauses (SCCs) or adequacy decisions.</li>
                            <li>By using the App, you consent to the transfer of your data to servers located in Bangladesh, Dhaka.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Your Rights (User Control)</h2>
                        <p>Depending on your jurisdiction, you have the following rights:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Right to Access:</strong> You can request a copy of the inventory/sales data we hold.</li>
                            <li><strong>Right to Rectification:</strong> You can edit incorrect inventory or profile details directly in the App.</li>
                            <li><strong>Right to Erasure:</strong> You can request the deletion of your account and associated data via [Settings {'>'} Delete Account] or by emailing us.</li>
                            <li><strong>Right to Withdraw Consent:</strong> You may revoke camera/storage permission in your device settings at any time.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">10. Children’s Privacy</h2>
                        <p>This App is intended for businesses and adults. We do not knowingly collect data from children under the age of 13 (or 18 in jurisdictions where the age of majority is older). If we discover a child has provided us with personal data, we will delete it immediately.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">11. Change to this Policy</h2>
                        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting new policy on this page and update the “Effective Date”. Continued use of the App constitutes acceptance of the changes.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">12. Contact us & Grievance officer</h2>
                        <p>In accordance with the Information Technology laws of Bangladesh, if you have any questions or grievances, please contact: <a href="mailto:info.support@medidesh.com" className="text-green-600 hover:underline font-bold">info.support@medidesh.com</a></p>
                        <p className="mt-2"><strong>Designation:</strong> Privacy Compliance Officer</p>
                    </section>

                </div>
            </div>
            <LandingFooter />
        </main>
    );
}
