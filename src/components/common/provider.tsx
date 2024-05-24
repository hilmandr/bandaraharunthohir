"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#232322"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}