import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-primary"
});

export const metadata: Metadata = {
  title: "Lumen Labs — Illuminate the Future",
  description:
    "A minimalistic landing page showcasing Lumen Labs, a creative startup delivering immersive product experiences."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-950">
      <body className={`${grotesk.variable} antialiased text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
