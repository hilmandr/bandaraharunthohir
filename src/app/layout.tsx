import type { Metadata } from "next";
import "./globals.css";
import { cn } from "../lib/utils";
import { avenirMedium } from "../constant/fonts.constant";
import Provider from "../components/common/provider";

export const metadata: Metadata = {
  title: "Bandara Harun Thohir",
  description: "Kantor UPBU Kelas III Harun Thohir - Gresik",
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
