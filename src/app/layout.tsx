import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const retrovia = localFont({
  src: [
    { path: "../fonts/Retrovia.otf", weight: "400 700", style: "normal" },
    { path: "../fonts/Retrovia.ttf", weight: "400 700", style: "normal" },
  ],
  variable: "--font-retrovia",
  display: "swap",
});

const retroGramophone = localFont({
  src: [
    { path: "../fonts/RetroGramophone.otf", weight: "400 700", style: "normal" },
    { path: "../fonts/RetroGramophone.ttf", weight: "400 700", style: "normal" },
  ],
  variable: "--font-retrogramophone",
  display: "swap",
});

export const metadata: Metadata = {
  title: "First Round Mobile Bar — Tracy · Bay Area",
  description:
    "Craft cocktails, mocktail stations, and full bar service for weddings, parties, and corporate events across Tracy, the Central Valley, and East Bay.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${retrovia.variable} ${retroGramophone.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
