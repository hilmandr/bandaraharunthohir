import React from "react";
import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" w-full ">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
