import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ken Luk Music - Classical Guitarist & Mandolinist",
  description: "Classical guitarist and mandolinist Ken Luk shares musical journeys, reflections, and recordings. Exploring traditional and contemporary musical expressions.",
  keywords: ["classical guitar", "mandolin", "music", "Ken Luk", "musician", "recordings"],
  authors: [{ name: "Ken Luk" }],
  openGraph: {
    title: "Ken Luk Music - Classical Guitarist & Mandolinist",
    description: "Classical guitarist and mandolinist sharing musical journeys and recordings",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
