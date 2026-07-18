import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Albert_Sans,
  Montserrat_Alternates,
} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates",
});

export const metadata: Metadata = {
  title: "PrintForge",
  description: "Your go-to platform for 3D printing files",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${albertSans.className}`}>
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <Link href="/">
              <div className="relative">
                {/* Desktop logo */}
                <Image
                  src="/printforge-logo.svg"
                  alt="PrintForge Logo"
                  width={200}
                  height={40}
                  className="hidden md:block"
                />
                {/* Mobile logo */}
                <Image
                  src="/printforge-logo-icon.svg"
                  alt="PrintForge Logo"
                  width={40}
                  height={40}
                  className="block md:hidden"
                />
              </div>
            </Link>

            <ul className="flex items-center gap-2.5">
              <li>
                <Link href="/3d-models">3D Models</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
