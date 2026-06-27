import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

const edbert = localFont({
  src: '../app/fonts/Edbert-Regular.otf',
  variable: '--font-edbert',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Offleash",
  description: "The offical website for Offleash, a band based in the DMV area. Check out our music, socials, and upcoming shows!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={edbert.variable}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
