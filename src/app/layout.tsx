import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans, Fraunces as FontDisplay } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontDisplay = FontDisplay({
  subsets: ["latin"],
  weight: ["300"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto pt-16 pb-16 px-6 relative isolate",
          fontSans.variable,
          fontDisplay.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {/* Artistic Background Layer */}
          <div className="fixed inset-0 -z-10 pointer-events-none select-none overflow-hidden transition-opacity duration-500">
            {/* Main Base Colors for Light/Dark */}
            <div className="absolute inset-0 bg-background transition-colors duration-500" />
            
            {/* Vibrant Glows - Optimized for both themes */}
            <div className="absolute top-[-15%] left-[-15%] w-[70%] h-[70%] bg-rose-500/15 dark:bg-orange-500/15 blur-[160px] rounded-full" />
            <div className="absolute top-[-10%] right-[-20%] w-[60%] h-[60%] bg-blue-500/10 dark:bg-blue-500/10 blur-[140px] rounded-full" />
            <div className="absolute bottom-[-15%] right-[-10%] w-[60%] h-[60%] bg-purple-500/10 dark:bg-purple-500/10 blur-[150px] rounded-full" />
          </div>

          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
