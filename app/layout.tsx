import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const font = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Quiosco Next.js con App Router y Prisma",
  description: "Quiosco Next.js con App Router y Prisma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font.className} bg-gray-100 antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
