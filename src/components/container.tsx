"use clinet";
import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <>
      <div
        className={cn(
          " container mx-auto shadcn-ui@latest add dropdown-menu lg:px-15",
          className
        )}
      >
        {children}
      </div>
    </>
  );
}
