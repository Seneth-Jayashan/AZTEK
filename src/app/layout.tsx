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
    default: "CAC | Chamathkara Alu Creations",
    template: "%s | CAC",
  },
  description: "Chamathkara Alu Creations is a leading provider of precision-engineered aluminum solutions and local hardware purchasing in Sri Lanka.",
  keywords: ["Aluminum Fabrication", "Sri Lanka Manufacturing", "CAC Alucore", "CAC Lanka", "Architectural Solutions"],
  openGraph: {
    title: "CAC | Chamathkara Alu Creations",
    description: "Chamathkara Alu Creations is a leading provider of precision-engineered aluminum solutions and local hardware purchasing in Sri Lanka.",
    url: "https://aztek.lk",
    siteName: "CAC",
    images: [
      {
        url: "/logo.png", 
        width: 1200,
        height: 630,
        alt: "CAC Group Logo",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CAC | Chamathkara Alu Creations",
    description: "Precision-engineered aluminum solutions and local purchasing in Sri Lanka.",
    images: ["/logo.png"],
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
