import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "UV ",
  description: "Portfolio de estudiantes de ingenieria en sistemas Ulises Vetere",
   icons: {
    icon: "/images/uv.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased overflow-x-hidden scroll-smooth min-h-screen relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-[calc(100vh-100px)]">
            {children}
          </main>
          <Footer />
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
