import { ArrowRight, Mouse } from "iconsax-react";
import { Button } from "../ui/button";
import Container from "../common/container";
import Image from "next/image";

export default function HomeSectionBanner() {
  return (
    <>
      <div className=" flex flex-col w-full h-screen relative top-0 z-0 inset-0 bg-[url('/images/banner-1.JPG')] bg-cover bg-bottom items-center justify-center">
        <div className=" flex w-full h-screen bg-gradient-to-t from-black from-[1%] to-black/20 to-[99%] absolute top-0 -z-10"></div>
        <Container>
          <div className=" flex w-full items-center justify-start z-10 inset-1">
            <div className=" flex flex-col w-full max-w-2xl text-white gap-y-5">
              <h1 className=" lg:text-5xl text-3xl font-extrabold lg:leading-tight">
                Selamat Datang di Website Resmi Kantor UPBU Harun Thohir -
                Gresik
              </h1>
              <p className=" lg:text-base text-sm ">
                Bandar Udara Bawean, juga dikenal sebagai Bandar Udara Harun
                Thohir, adalah bandar udara yang terletak di Pulau Bawean,
                Kabupaten Gresik, Jawa Timur. Bandara ini dioperasikan oleh
                Kementerian Perhubungan Republik Indonesia.
              </p>
              <div className=" flex w-full gap-4">
                <Button
                  variant="default"
                  className=" border rounded-full bg-white text-neutral-900 transition-all duration-200 hover:bg-white group px-6"
                >
                  <p className=" left-4 relative group-hover:left-0 transition-all duration-200 ">
                    Lihat Jadwal Penerbangan
                  </p>
                  <ArrowRight
                    size="20"
                    variant="Linear"
                    className=" relative opacity-0 group-hover:opacity-100 left-0 group-hover:left-2 transition-all duration-200"
                  />
                </Button>
              </div>
            </div>
          </div>
        </Container>
        <Mouse
          size="36"
          color="#fafafa"
          className=" absolute bottom-14 animate-bounce"
          variant="Broken"
        />
      </div>
      <div className=" w-full h-full flex relative">
        <Image
          src="/images/under-heading.png"
          alt=""
          // fill
          width={3000}
          height={3000}
          className=" w-full h-full"
        />
      </div>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className=" h-full w-full"
      >
        <path
          fill="#000000"
          fill-opacity="1"
          d="M0,96L60,112C120,128,240,160,360,170.7C480,181,600,171,720,149.3C840,128,960,96,1080,90.7C1200,85,1320,107,1380,117.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg> */}
    </>
  );
}
