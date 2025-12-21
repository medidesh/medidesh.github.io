import type { Metadata } from "next";
import { Hind_Siliguri, Orbitron } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
  variable: "--font-hind-siliguri",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Medidesh - Pharmacy Management Software",
  description: "Manage your pharmacy inventory, sales, and accounts with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body className={`${hindSiliguri.variable} ${orbitron.variable} ${hindSiliguri.className}`}>
        {children}
      </body>
    </html>
  );
}
