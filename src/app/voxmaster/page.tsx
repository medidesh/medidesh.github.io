import type { Metadata } from "next";
import Link from "next/link";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import {
    Microphone,
    Sparkle,
    SlidersHorizontal,
    FileAudio,
    ShieldCheck,
    WifiSlash,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
    title: "VoxMaster — Studio voice recorder for Android",
    description:
        "VoxMaster records, enhances and masters voice on your phone. On-device AI cleanup, a full Studio, lossless export. Free, no account, works offline.",
    openGraph: {
        title: "VoxMaster — Studio voice recorder for Android",
        description:
            "Record, enhance and master voice on your phone. On-device AI, full Studio, lossless export.",
        url: "https://medidesh.com/voxmaster",
        siteName: "Medidesh",
        locale: "en_US",
        type: "website",
    },
};

const FEATURES = [
    {
        icon: Microphone,
        title: "Pro capture",
        body: "48 kHz recording from the phone mic, wired headsets, USB audio or Bluetooth — picked per take, remembered per take.",
    },
    {
        icon: Sparkle,
        title: "One-tap enhance",
        body: "On-device neural cleanup removes room noise and levels speech. Nothing uploads, ever.",
    },
    {
        icon: SlidersHorizontal,
        title: "Full Studio",
        body: "Tone, denoise, voice clarity, level, trim and pace — every dial previews live and remembers its place per take.",
    },
    {
        icon: FileAudio,
        title: "Honest export",
        body: "WAV and AIFF lossless, AAC at three bit rates. Only formats your phone can actually produce.",
    },
    {
        icon: ShieldCheck,
        title: "Private by architecture",
        body: "No account, no ads, no analytics. The app holds no network permission at all.",
    },
    {
        icon: WifiSlash,
        title: "Works offline",
        body: "Record, edit and export with zero connectivity. Your takes never leave the device unless you share them.",
    },
];

export default function VoxMasterPage() {
    return (
        <main className="bg-white dark:bg-slate-900 min-h-screen">
            <LandingHeader />
            {/* Hero */}
            <section className="pt-32 pb-16 container mx-auto px-6 lg:px-12 max-w-4xl text-center">
                <p className="inline-block text-xs font-bold tracking-widest uppercase text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 rounded-full px-4 py-2">
                    VoxMaster for Android
                </p>
                <h1 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                    A studio voice recorder
                    <span className="block mt-2">that respects your voice.</span>
                </h1>
                <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    Record interviews, memos and ideas, clean them with on-device AI,
                    and export studio-grade files — free, with no account and no internet.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="https://play.google.com/store"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold px-8 py-4 hover:opacity-90 transition"
                    >
                        Get it on Google Play
                    </a>
                    <Link
                        href="/voxmaster/privacy"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 font-semibold px-8 py-4 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                    >
                        How privacy works
                    </Link>
                </div>
            </section>

            {/* Features */}
            <section className="pb-16 container mx-auto px-6 lg:px-12 max-w-5xl">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FEATURES.map((f) => (
                        <div
                            key={f.title}
                            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-6"
                        >
                            <f.icon size={26} weight="duotone" className="text-red-600 dark:text-red-400" />
                            <h2 className="mt-4 font-bold text-slate-900 dark:text-white">{f.title}</h2>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{f.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Legal strip */}
            <section className="pb-20 container mx-auto px-6 lg:px-12 max-w-4xl text-center">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    By using VoxMaster you agree to the{" "}
                    <Link href="/voxmaster/terms" className="underline hover:text-slate-700 dark:hover:text-slate-200">
                        Terms &amp; Conditions
                    </Link>{" "}
                    and acknowledge the{" "}
                    <Link href="/voxmaster/privacy" className="underline hover:text-slate-700 dark:hover:text-slate-200">
                        Privacy Policy
                    </Link>
                    .
                </p>
            </section>
            <LandingFooter />
        </main>
    );
}
