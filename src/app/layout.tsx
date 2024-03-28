import type { Metadata } from "next";
import {Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", '800', '900'],
});

export const metadata: Metadata = {
  title: "Sparknix",
  description: "Developed by Wasif",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main className="relative flex flex-col min-h-screen">
          <div className="flex-grow flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
