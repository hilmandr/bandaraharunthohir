import { HTMLAttributes } from "react";

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
        <div className=" flex w-full h-64 bg-black items-end justify-center">
          <h1 className=" text-white text-5xl font-semibold sm:pb-0 pb-12">
            {children}
          </h1>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className=" h-full w-full"
        >
          <path
            fill="#000000"
            fill-opacity="1"
            d="M0,96L60,112C120,128,240,160,360,170.7C480,181,600,171,720,149.3C840,128,960,96,1080,90.7C1200,85,1320,107,1380,117.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
