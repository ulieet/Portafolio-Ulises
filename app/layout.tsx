import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";

export const metadata: Metadata = {
  title: "Portfolio - Desarrollador web",
  description: "Portfolio profesional de desarrollador web full-stack",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="bg-black text-white antialiased overflow-x-hidden scroll-smooth min-h-screen relative">

        <Navbar />
        <main className="min-h-[calc(100vh-100px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
