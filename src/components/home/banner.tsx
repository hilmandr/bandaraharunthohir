import { ArrowRight, Mouse } from "iconsax-react";
import { Button } from "../ui/button";
import Container from "../common/container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HomeSectionBanner() {
  return (
    <>
      <div className=" flex flex-col w-full h-screen relative top-0 z-0 inset-0 bg-[url('/images/banner-1.JPG')] bg-cover bg-bottom items-center justify-center">
        <div className=" flex w-full h-screen bg-black/40 absolute -z-10 bottom-0"></div>
        <div className=" flex w-full h-64 bg-gradient-to-t from-white from-[5%] to-white/0 to-[100%] absolute -z-10 bottom-0"></div>
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
                <Link href="/layanan/penerbangan-perintis">
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
                </Link>
              </div>
            </div>
          </div>
        </Container>
        <Mouse
          size="36"
          color="#555555"
          className=" absolute bottom-14 animate-bounce"
          variant="Broken"
        />
      </div>
    </>
  );
}
