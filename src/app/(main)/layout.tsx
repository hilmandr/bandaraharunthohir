"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    })
  );
  return (
    <>
      <QueryClientProvider client={client}>
        <Header />
        <div className=" flex min-h-screen w-full flex-col">
          <main className=" w-full flex-1">{children}</main>
          <Footer />
        </div>
      </QueryClientProvider>
    </>
  );
}
