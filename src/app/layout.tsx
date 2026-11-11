import type { Metadata } from "next";
import { DM_Sans, Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pawzipp.vercel.app"),
  title: {
    default: "Practo for Animals, AI Studio & Content OS",
    template: "%s · Internship Submission",
  },
  description:
    "Product design and AI systems portfolio: an animal-care discovery MVP, an AI skills landing page and a repeatable carousel workflow.",
  openGraph: {
    title: "Practo for Animals, AI Studio & Content OS",
    description:
      "Animal-care discovery MVP, AI skills landing page and a founder-owned carousel system.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSans.variable} ${fraunces.variable} h-full`}
    >
      <body className="min-h-full bg-cream text-ink">{children}</body>
    </html>
  );
}
