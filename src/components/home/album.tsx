import Link from "next/link";
import Container from "../container";
import Image from "next/image";
import { Button } from "../ui/button";
import React from "react";
import { format } from "date-fns";
import { LuCalendarDays } from "react-icons/lu";

export default function Album() {
  return (
    <>
      <div className=" flex w-full">
        <Container className=" px-20">
          <div className=" flex flex-col w-full justify-center">
            <div className=" flex flex-col py-5">
              <h1 className=" text-3xl font-semibold text-center pt-5">
                Album Galeri
              </h1>
              <p className=" text-sm text-center py-1">
                Galeri Foto dan Video Kegiatan
              </p>
            </div>
            <div className=" grid w-full grid-cols-3 gap-5">
              <div className=" flex w-full shadow-lg group">
                <Link href="" className=" w-full relative">
                  <div className=" flex flex-col py-5 px-8 w-full aspect-video absolute z-[2] bg-black/30 group-hover:bg-black/70 text-white shadow-lg transform transition-all duration-200">
                    <div className=" flex">
                      <h1 className=" text-lg font-semibold">
                        Medical Evaciation
                      </h1>
                    </div>
                    <div className=" flex flex-col gap-y-2">
                      <div className=" flex items-center gap-2 text-xs">
                        <LuCalendarDays />
                        <p>{format(new Date(), "dd MMM, yyyy")}</p>
                      </div>
                      <p className=" text-xs leading-loose group-hover:opacity-100 opacity-0 transform transition-all duration-200">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                      </p>
                    </div>
                  </div>
                  <div className=" flex w-full aspect-video relative overflow-hidden z-[1] group-hover:">
                    <Image
                      src="/assets/images/berita/berita-1.jpg"
                      alt=""
                      fill
                      className=""
                    ></Image>
                  </div>
                </Link>
              </div>
              <div className=" flex w-full shadow-lg group">
                <Link href="" className=" w-full relative">
                  <div className=" flex flex-col py-5 px-8 w-full aspect-video absolute z-[2] bg-black/30 group-hover:bg-black/70 text-white shadow-lg transform transition-all duration-200">
                    <div className=" flex">
                      <h1 className=" text-lg font-semibold">
                        Medical Evaciation
                      </h1>
                    </div>
                    <div className=" flex flex-col gap-y-2">
                      <div className=" flex items-center gap-2 text-xs">
                        <LuCalendarDays />
                        <p>{format(new Date(), "dd MMM, yyyy")}</p>
                      </div>
                      <p className=" text-xs leading-loose group-hover:opacity-100 opacity-0 transform transition-all duration-200">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                      </p>
                    </div>
                  </div>
                  <div className=" flex w-full aspect-video relative overflow-hidden z-[1] group-hover:">
                    <Image
                      src="/assets/images/berita/berita-1.jpg"
                      alt=""
                      fill
                      className=""
                    ></Image>
                  </div>
                </Link>
              </div>
              <div className=" flex w-full shadow-lg group">
                <Link href="" className=" w-full relative">
                  <div className=" flex flex-col py-5 px-8 w-full aspect-video absolute z-[2] bg-black/30 group-hover:bg-black/70 text-white shadow-lg transform transition-all duration-200">
                    <div className=" flex">
                      <h1 className=" text-lg font-semibold">
                        Medical Evaciation
                      </h1>
                    </div>
                    <div className=" flex flex-col gap-y-2">
                      <div className=" flex items-center gap-2 text-xs">
                        <LuCalendarDays />
                        <p>{format(new Date(), "dd MMM, yyyy")}</p>
                      </div>
                      <p className=" text-xs leading-loose group-hover:opacity-100 opacity-0 transform transition-all duration-200">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                      </p>
                    </div>
                  </div>
                  <div className=" flex w-full aspect-video relative overflow-hidden z-[1] group-hover:">
                    <Image
                      src="/assets/images/berita/berita-1.jpg"
                      alt=""
                      fill
                      className=""
                    ></Image>
                  </div>
                </Link>
              </div>
            </div>

            <div className=" flex w-full items-center justify-end py-10">
              <Button className=" px-8 py-2 rounded-md bg-rose-600 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-rose-600">
                Lihat Semua
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
