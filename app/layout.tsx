import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "RI Fitness Club | Train Stronger in Lahore",
    template: "%s | RI Fitness Club",
  },
  description:
    "RI Fitness Club in Lahore offers modern equipment, focused coaching, and a motivating training environment for every fitness level.",
  keywords: ["gym in Lahore", "RI Fitness Club", "fitness trainer Lahore", "strength training"],
  openGraph: {
    title: "RI Fitness Club",
    description: "A stronger you starts here.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
