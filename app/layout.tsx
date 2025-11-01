import type { Metadata, Viewport } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AR_One_Sans } from "next/font/google";


const arOneSans = AR_One_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});


export const metadata: Metadata = {
  title: "Delijiosho",
  description: "Delijiosho makes delicious Macaroni, pasta and vermicilli that are waiting for to be bought.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${arOneSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
