import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kantor UPBU Harun Thohir - Gresik",
  metadataBase: new URL("https://bandaraharunthohir.vercel.app/"),
  description: "Website resmi Kantor UPBU Harun Thohir - Gresik",
  icons: "/assets/images/logo/logo-ht-main-outline-white.png",
  creator: "Kantor UPBU Harun Thohir - Gresik",
  publisher: "Kantor UPBU Harun Thohir - Gresik",
  openGraph: {
    title: "Kantor UPBU Harun Thohir - Gresik",
    description: "Website resmi Kantor UPBU Harun Thohir - Gresik",
    images: ["/images/banner.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/banner.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
