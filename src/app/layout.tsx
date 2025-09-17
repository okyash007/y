import type { Metadata } from "next";
import { Urbanist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/our/components/Navbar";
import NextTopLoader from "nextjs-toploader";
import { topLoaderConfig } from "@/lib/toploader-config";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yash Verma - Full Stack Developer & UI/UX Enthusiast",
  description: "Portfolio of Yash Verma - Full Stack Developer specializing in React, Next.js, and modern web technologies. Creating beautiful, functional web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${urbanist.variable} ${geistMono.variable}`}>
        <NextTopLoader {...topLoaderConfig} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <main className="pt-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
