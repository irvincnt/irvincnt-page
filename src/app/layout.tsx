import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Irvin Contreras",
  description:
    "Portafolio profesional de Irvin Giovanni Contreras García. Más de 8 años de experiencia como Desarrollador Frontend especializado en React, Next.js y TypeScript.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Web Development",
  ],
  authors: [{ name: "Irvin Giovanni Contreras García" }],
  openGraph: {
    title: "Irvin Contreras - Sr Frontend Developer",
    description: "Portafolio profesional de Irvin Giovanni Contreras García",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
