import SideNav from "@/components/dashboard/sidenav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Kantor UPBU Harun Thohir - Gresik",
  metadataBase: new URL("https://bandaraharunthohir.vercel.app/login"),
  icons: "/assets/images/logo/logo-ht-main-outline-white.png",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className=" flex min-h-screen h-screen w-full ">
        <SideNav />
        <main className=" flex w-[calc(100%-286px)] ml-[286px]">
          {children}
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}
