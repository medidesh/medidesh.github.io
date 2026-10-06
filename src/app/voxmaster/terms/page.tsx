import type { Metadata } from "next";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

export const metadata: Metadata = {
    title: "VoxMaster Terms & Conditions",
    description:
        "The terms for using VoxMaster: license, acceptable use, recording consent responsibility, and liability.",
};

const UPDATED = "October 6, 2026";

export default function VoxMasterTermsPage() {
    return (
        <main className="bg-white dark:bg-slate-900 min-h-screen">
            <LandingHeader />
            <div className="pt-32 pb-20 container mx-auto px-6 lg:px-12 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                    Terms &amp; Conditions for VoxMaster
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
                    Last updated: {UPDATED} · VoxMaster for Android, version 0.0.1 and later
                </p>

                <div className="prose prose-lg prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                    <section className="mb-8">
                        <p>
                            These Terms form a binding agreement between you and{" "}
                            <strong>Medidesh</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo; or
                            &ldquo;us&rdquo;) for your use of the VoxMaster mobile application (&ldquo;the
                            App&rdquo;). By installing or using VoxMaster you accept these Terms. If you do not
                            accept them, do not use the App.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">1. License to use</h2>
                        <p>
                            We grant you a personal, non-exclusive, non-transferable, revocable license to install
                            and use VoxMaster on Android devices you own or control, for personal or professional
                            voice recording, editing and export. You may not copy, modify, reverse-engineer,
                            resell, or redistribute the App, except as the underlying open-source licenses expressly
                            allow.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">2. Free service, no payments</h2>
                        <p>
                            VoxMaster is free with no subscriptions, in-app purchases, or paid tiers. There is
                            nothing to cancel and no refunds to claim. If a future version adds paid features, these
                            Terms will be updated first and the Play billing terms will apply.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">3. Acceptable use</h2>
                        <p>You agree not to use VoxMaster to:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Record conversations where you lack the legally required consent of the parties involved.</li>
                            <li>Infringe copyright — including importing, editing, or sharing audio you have no right to use.</li>
                            <li>Harass, threaten, surveil, or otherwise harm any person, or facilitate wrongdoing.</li>
                            <li>Interfere with the App&apos;s operation or misrepresent enhanced audio as an unedited original where that matters.</li>
                        </ul>
                        <p className="mt-4">
                            <strong>Recording consent is your responsibility.</strong> Laws differ by country — many
                            require every party&apos;s agreement before a conversation may be recorded. When in
                            doubt, announce that you are recording and obtain clear consent first.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">4. Your content stays yours</h2>
                        <p>
                            You retain all rights in audio you record, import, or create with VoxMaster. We claim no
                            ownership and receive no copy — files live on your device and leave it only through your
                            own Share/Export actions (see the <a href="/voxmaster/privacy" className="underline">Privacy Policy</a>).
                            You are responsible for backing up takes that matter; uninstalling the App deletes its
                            private data.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">5. On-device processing limits</h2>
                        <p>
                            Enhancement, analysis and effects run locally with DSP and neural models tuned for
                            speech. Results depend on the recording; we do not promise any particular quality
                            outcome, and processed audio may differ from the original in ways you should verify
                            before relying on it professionally.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">6. Updates</h2>
                        <p>
                            We may update VoxMaster through Google Play to fix bugs, improve quality, or meet
                            platform requirements. Some updates may change features or file handling; material
                            changes are described in the release notes. The version in use is shown in
                            Settings → About.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">7. Termination</h2>
                        <p>
                            You may stop using VoxMaster at any time by uninstalling it, which ends these Terms for
                            future use. We may revoke the license for violation of Section 3. Termination does not
                            affect rights that accrued before it, nor Sections 5, 8 and 9, which survive.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">8. Disclaimer of warranties</h2>
                        <p>
                            VoxMaster is provided <strong>&ldquo;as is&rdquo; and &ldquo;as available&rdquo;</strong>,
                            without warranties of any kind, express or implied, including merchantability, fitness
                            for a particular purpose, and non-infringement. We do not warrant uninterrupted,
                            error-free, or lossless operation — keep independent backups of irreplaceable recordings.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">9. Limitation of liability</h2>
                        <p>
                            To the maximum extent permitted by law, Medidesh is not liable for indirect, incidental,
                            special, consequential, or punitive damages, or for loss of recordings, data, profits,
                            or goodwill, arising from your use of the App — even if advised of the possibility.
                            Our total liability is limited to the amounts you paid for VoxMaster (a free app: zero).
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">10. Governing law</h2>
                        <p>
                            These Terms are governed by the laws of Bangladesh, without regard to conflict-of-law
                            rules. Disputes shall first be raised with us at{" "}
                            <strong>info.medidesh@gmail.com</strong>; failing amicable resolution within 60
                            days, the courts of Gazipur, Bangladesh shall have jurisdiction, subject to your
                            mandatory local consumer rights.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">11. Changes to these terms</h2>
                        <p>
                            We may revise these Terms with an updated date above; material changes are additionally
                            announced in-app. Continued use after the effective date constitutes acceptance. The
                            controlling language of these Terms is English.
                        </p>
                    </section>
                </div>
            </div>
            <LandingFooter />
        </main>
    );
}
