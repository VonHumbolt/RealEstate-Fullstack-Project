import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import localFont from "next/font/local";
import { Toaster } from "sonner";

const prompt = localFont({
  src: [
    {
      path: "./fonts/Prompt-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Prompt-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Prompt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Prompt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Prompt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Prompt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "Real Estate",
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
        className={`font-prompt ${prompt.variable}`}
      >
        <Header />
        <div>
          {children}
        </div>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
