import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/toaster";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A personal portfolio built with Next.js, showcasing projects, skills, and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
