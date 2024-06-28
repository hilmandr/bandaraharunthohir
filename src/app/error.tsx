"use client";

import React from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <p>{error.message}</p>
    </div>
  );
}
