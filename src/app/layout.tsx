import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muh. Rezky Syaputra - Software Web Development Portfolio",
  description:
    "Informatics student from Sulawesi Tenggara, based in Yogyakarta, specializing in software web development. Experienced in React.js, Laravel, Node.js, and responsive web design. Available for projects and collaboration.",
  keywords: [
    "Rezky Syaputra",
    "Software Web Development",
    "Web Developer",
    "Informatics Student",
    "React.js",
    "Laravel",
    "Node.js",
    "Frontend Developer",
    "Backend Developer",
    "Yogyakarta",
    "AMIKOM",
    "Portfolio",
    "Software Development",
    "Responsive Design",
  ],
  authors: [{ name: "Muh. Rezky Syaputra" }],
  creator: "Muh. Rezky Syaputra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rezkysyaputra.dev",
    title: "Muh. Rezky Syaputra - Software Web Development Portfolio",
    description:
      "Informatics student specializing in software web development with React.js, Laravel, and Node.js. Based in Yogyakarta, Indonesia.",
    siteName: "Rezky Syaputra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muh. Rezky Syaputra - Software Web Development Portfolio",
    description:
      "Informatics student specializing in software web development with React.js, Laravel, and Node.js.",
    creator: "@rezkysyaputra",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
