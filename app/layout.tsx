import ConditionalLayout from "@/components/ConditionalLayout";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const moonTime = localFont({
  src: "../public/fonts/MoonTime-Regular.otf",
  variable: "--font-moontime",
});

export const metadata: Metadata = {
  title: "Biro za Veštačenja - Stručne Ekspertize i Procene",
  description:
    "Profesionalne usluge ekspertiza i veštačenja. Stručni tim za inženjerska veštačenja, protivpožarnu zaštitu i carinske analize.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  keywords: [
    "veštačenja",
    "ekspertize",
    "procene",
    "inženjerska veštačenja",
    "protivpožarna zaštita",
    "carinske analize",
    "sudska veštačenja",
    "forenzička analiza",
    "tehnička ispitivanja",
    "stručne procene",
  ],
  alternates: {
    canonical: "https://bzv.rs/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" suppressHydrationWarning>
      <body
        className={`${openSans.variable} ${moonTime.variable} antialiased text-primary bg-background text-base md:text-xl font-serif`}
        suppressHydrationWarning
      >
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
