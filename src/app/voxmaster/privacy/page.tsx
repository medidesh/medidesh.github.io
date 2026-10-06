import type { Metadata } from "next";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

export const metadata: Metadata = {
    title: "VoxMaster Privacy Policy",
    description:
        "How VoxMaster handles your voice: on-device processing, no account, no ads, no analytics, and your recordings never leave your phone unless you share them.",
};

const UPDATED = "October 6, 2026";

export default function VoxMasterPrivacyPage() {
    return (
        <main className="bg-white dark:bg-slate-900 min-h-screen">
            <LandingHeader />
            <div className="pt-32 pb-20 container mx-auto px-6 lg:px-12 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                    Privacy Policy for VoxMaster
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
                    Last updated: {UPDATED} · Applies to VoxMaster for Android, version 0.0.1 and later
                </p>

                <div className="prose prose-lg prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                    <section className="mb-8">
                        <p>
                            Medidesh (&ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) built VoxMaster as a
                            private voice recorder. The short version: <strong>your voice never leaves your
                            phone unless you personally share or export a file.</strong> There is no account, no
                            advertising, no analytics, and the app does not even hold the Android internet
                            permission — it is technically incapable of transmitting anything.
                        </p>
                        <p className="mt-4">
                            This Policy is written for VoxMaster users everywhere and is not tied to any single
                            country. It explains what the app accesses on your device and why, in the form
                            required by the Google Play Data safety section and consistent with global privacy
                            laws, including the EU/UK General Data Protection Regulation (GDPR) and, where
                            applicable, the California Consumer Privacy Act (CCPA/CPRA) and similar regimes.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">1. Data Controller</h2>
                        <p>
                            The entity responsible for this Policy is <strong>Medidesh</strong>. For any privacy
                            question or request, contact <strong>info.medidesh@gmail.com</strong>.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">2. What VoxMaster processes</h2>

                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 mt-4">2.1. Your recordings</h3>
                        <p>
                            Audio you record is stored as files on your own device, in the app&apos;s private
                            storage. Editing (trim, denoise, tone, level, effects) rewrites those local files.
                            A copy of the pre-edit audio is kept on-device so Undo and original-comparison work;
                            it is deleted together with the recording.
                        </p>

                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 mt-4">2.2. Imported audio</h3>
                        <p>
                            Files you pick through the system file browser are copied into the app and converted
                            locally. VoxMaster requests no media-library permission for this: your choice of file
                            in the system picker <em>is</em> the permission.
                        </p>

                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 mt-4">2.3. Settings and history</h3>
                        <p>
                            Preferences (theme, quality, export format, tool dial positions) and the per-take edit
                            log live in on-device app storage. Nothing is synced anywhere because there is no server
                            to sync to.
                        </p>

                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 mt-4">2.4. What we never collect</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>No account, name, email, phone number, or contacts.</li>
                            <li>No location, no device identifiers sent anywhere.</li>
                            <li>No advertising identifiers, no analytics events, no crash reports.</li>
                            <li>No voice data leaves the device: enhancement and transcription-adjacent models run
                                fully on-device (ONNX Runtime, local graphs only).</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">3. Device permissions and why</h2>
                        <p>Android grants are requested only at the moment they are needed:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Microphone (RECORD_AUDIO)</strong> — the core function: capturing audio. Asked when you first tap record.</li>
                            <li><strong>Notifications (POST_NOTIFICATIONS, Android 13+)</strong> — recording controls (pause/stop) and enhancement progress while the app is in the background. Optional; recording works without it.</li>
                            <li><strong>Audio files (READ_MEDIA_AUDIO)</strong> — only if you import an existing file through the picker on Android 13+.</li>
                            <li><strong>Bluetooth connect (BLUETOOTH_CONNECT)</strong> — only if you pick a classic-Bluetooth microphone as the recording source.</li>
                            <li><strong>Foreground services (microphone / data sync)</strong> — keeps a recording or an enhancement running when you leave the app, with a permanent notification.</li>
                        </ul>
                        <p className="mt-4">
                            VoxMaster notably does <strong>not</strong> request internet access. You can verify this
                            yourself: the app functions fully in airplane mode.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">4. Sharing and export</h2>
                        <p>
                            Nothing is transmitted automatically — there is no server endpoint to receive it. Audio
                            leaves your phone only when you tap Share (Android share sheet, your choice of app) or
                            Save to Music (a copy into the shared Music/VoxMaster folder, which other media apps
                            can then see). Export formats (WAV, AIFF, AAC/M4A) are produced on-device.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">5. Retention and deletion</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Recordings persist until you delete them in the Library (which also deletes their edit history and preserved originals).</li>
                            <li>Temporary conversion files are cleaned automatically (share staging older than one hour).</li>
                            <li>Uninstalling the app deletes everything VoxMaster stored, except files you explicitly saved to the shared Music folder, which belong to you.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">6. Recording other people</h2>
                        <p>
                            VoxMaster records whatever its microphone hears. <strong>You</strong> are responsible for
                            complying with the recording-consent laws where you and your subjects are — in many places
                            all parties must agree before a conversation is recorded. Do not use the app to record
                            people secretly where the law forbids it.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">7. Children</h2>
                        <p>
                            VoxMaster is a general utility, not directed at children under 13, and collects no data
                            from anyone. Guardians: the app holds no parental-gate content, but a child with the
                            phone can record audio that stays on that phone.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">8. Your rights</h2>
                        <p>
                            Because everything lives on your device, you exercise your rights directly: listen,
                            export, or delete any take in the Library; change or clear settings any time. For
                            questions or requests (including GDPR access/erasure, answered against the fact that we
                            hold nothing server-side), contact{" "}
                            <strong>info.medidesh@gmail.com</strong> and we reply within 30 days.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">9. Google Play Data safety summary</h2>
                        <p>For the Play Console Data safety form, the accurate answers for VoxMaster are:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Data collected or shared:</strong> none. No personal info, audio, files, identifiers, or diagnostics leave the device.</li>
                            <li><strong>Audio on device:</strong> recordings and edits are stored locally and only leave via your explicit Share/Export taps.</li>
                            <li><strong>Security:</strong> no network transmission exists to secure; local files rely on Android app sandboxing and device encryption.</li>
                            <li><strong>Deletion:</strong> in-app delete removes takes completely; uninstall removes the rest.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">10. Changes to this policy</h2>
                        <p>
                            If VoxMaster ever gains a networked feature, this page and the in-app notice will say so
                            before it ships, with a new effective date above. Continued use after a material change
                            takes effect constitutes acceptance.
                        </p>
                    </section>
                </div>
            </div>
            <LandingFooter />
        </main>
    );
}
