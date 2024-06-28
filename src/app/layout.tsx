import type { Metadata } from "next";
import "./globals.css";
import { cn } from "../lib/utils";
import { avenirMedium } from "../constant/fonts.constant";
import Provider from "../components/common/provider";
import React from "react";

export const metadata: Metadata = {
  title: "Kantor UPBU Harun Thohir - Gresik",
  metadataBase: new URL("https://bandaraharunthohir.vercel.app/"),
  description: "Website resmi Kantor UPBU Harun Thohir - Gresik",
  icons: "/images/logo-kemenhub.PNG",
  creator: "Kantor UPBU Harun Thohir - Gresik",
  publisher: "Kantor UPBU Harun Thohir - Gresik",
  openGraph: {
    title: "Kantor UPBU Harun Thohir - Gresik",
    description: "Website resmi Kantor UPBU Harun Thohir - Gresik",
    images: ["/images/image-banner.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/image-banner.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          avenirMedium.className,
          "antialiased tracking-tight from-neutral-900"
        )}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
