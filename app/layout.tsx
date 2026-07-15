import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import OL_Logo from '../public/OL_Logo_not_transparent.png'

const edbert = localFont({
  src: '../app/fonts/Edbert-Regular.otf',
  variable: '--font-edbert',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Offleash",
  description: "The offical website for Offleash, a band based in the DMV area. Check out our music, socials, and upcoming shows!",
  icons: {
    icon: OL_Logo.src,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth font-serif ${edbert.variable}`} >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
