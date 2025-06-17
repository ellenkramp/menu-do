import type { Metadata } from "next";
import { Sora, Lora } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Menu Do",
  description: "Restaurants made easy",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${lora.variable}`}>
      <body className="font-sora">
        <Nav />
        {children}
      </body>
    </html>
  );
}
