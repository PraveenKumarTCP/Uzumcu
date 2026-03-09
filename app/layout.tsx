import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/images/favicon.ico",
  },
  title: "UZUMCU | Medical Equipment",
  description: "Advanced Operating Room Technologies and Medical Solutions",
};

import AOSInitializer from "./components/AOSInitializer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
}
