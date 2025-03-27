import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Import du CSS Global
import Header from "@/container/header/header";

// Gestion optimisé des fonts via "next/font"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Les metadata de l'app web
export const metadata: Metadata = {
  title: "Demo NextJS",
  description: "Demo pour la formation Dev FS JS de DigitalCity",
};

// Le layout principal de l'app
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header/>
        <main className="p-1 text-purple-700">
          {children}
        </main>
      </body>
    </html>
  );
}
