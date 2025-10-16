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
      <div className="min-h-screen w-full relative">
 {/* Dark Dot Matrix */}
 <div
   className="absolute inset-0 z-0"
   style={{
     backgroundColor: '#0a0a0a',
     backgroundImage: `
       radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
       radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
     `,
     backgroundSize: '10px 10px',
     imageRendering: 'pixelated',
   }}
 />
        {children}
        <Analytics />
        </div>
      </body>
    </html>
  );
}


