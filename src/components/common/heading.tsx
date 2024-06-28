import { HTMLAttributes } from "react";
import Image from "next/image";
import React from "react";

type THeadingProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
};

export default function HeadingTitle({
  children,
  className,
  ...props
}: THeadingProps) {
  return (
    <>
      <div className=" flex flex-col w-full h-full relative" {...props}>
        {children}
      </div>

      {/* <div className=" w-full h-full flex relative">
          <Image
            src="/images/border-black.png"
            alt=""
            // fill
            width={3000}
            height={3000}
            className=" w-full h-12 bg-contain bg-repeat-x relative z-20 -scale-y-[1] border-dirt-brown"
          />
        </div> */}

      <div className=" w-full h-12 bg-contain bg-repeat-x relative z-20  border-dirt-brown bg-[url('/images/border-heading-white.png')] -mt-5"></div>
    </>
  );
}
