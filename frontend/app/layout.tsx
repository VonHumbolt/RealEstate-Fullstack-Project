import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserratSan = Montserrat({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Real Estate App",
  description: "Sale, Rent or Find the best houses!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserratSan.className} antialiased`}
      >
        <Header />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
