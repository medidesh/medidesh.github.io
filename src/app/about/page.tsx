import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
    title: "About Us | Medidesh",
    description:
        "Meet the team behind Medidesh — built to digitize every pharmacy in Bangladesh.",
};

export default function AboutPage() {
    return <AboutContent />;
}
