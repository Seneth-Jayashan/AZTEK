import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aztek.lk"),
  title: {
    default: "AZTEK | Engineered Aluminum & Architectural Solutions",
    template: "%s | AZTEK",
  },
  description: "AZTEK is a leading provider of precision-engineered aluminum solutions, smart agriculture, and local hardware manufacturing in Sri Lanka.",
  keywords: ["Aluminum Fabrication", "Smart Agriculture", "Sri Lanka Manufacturing", "AZTEK Alucore", "AZTEK Agrotec", "AZTEK Lanka", "Architectural Solutions"],
  openGraph: {
    title: "AZTEK | Engineered Aluminum & Architectural Solutions",
    description: "AZTEK is a leading provider of precision-engineered aluminum solutions, smart agriculture, and local hardware manufacturing in Sri Lanka.",
    url: "https://aztek.lk",
    siteName: "AZTEK",
    images: [
      {
        url: "/Logo_dark.png", 
        width: 1200,
        height: 630,
        alt: "AZTEK Group Logo",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AZTEK | Engineered Aluminum & Architectural Solutions",
    description: "Precision-engineered aluminum solutions, smart agriculture, and local manufacturing in Sri Lanka.",
    images: ["/Logo_dark.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col pt-[72px]">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
