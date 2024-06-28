"use client";
import React from "react";
import { Berita, berita } from "../../../db/schema";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import BasePagination from "../base-pagination";

interface BeritaItemProps {
  berita: Berita[];
  searchParams: {
    page: string | undefined;
  };
}
export default function GetBerita({ berita }: BeritaItemProps) {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  return (
    <>
      {berita.slice((page - 1) * 5, page * 5).map((itemBerita) => (
        <>
          <div className=" lg:flex w-full items-start justify-between gap-x-8">
            <div className=" flex flex-col max-w-lg relative">
              <p className=" text-sm">{format(itemBerita.tanggal, "PPP")}</p>
              <Link href="">
                <h1 className=" font-bold text-3xl mt-6 hover:text-neutral-600 duration-300 transition-all">
                  {itemBerita.judul}
                </h1>
              </Link>
              <p className=" mt-5">{itemBerita.summary}</p>
            </div>
            <div className=" relative w-full max-w-xl min-w-xl aspect-video lg:mt-0 mt-8 items-center justify-center group overflow-hidden duration-300 transition-all">
              <Link href="">
                <Image
                  src={itemBerita.thumbnail as string}
                  alt=""
                  fill
                  className=" w-full h-full object-cover object-center group-hover:blur-md duration-300 transition-all"
                />
                <div className=" relative flex h-full w-full items-center justify-center group scale-0 group-hover:scale-100 duration-300 transition-all">
                  <div className=" flex w-16 h-16 text-sm  bg-white items-center justify-center rounded-full text-black font-medium">
                    Lihat
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </>
      ))}
      <div className=" flex w-full mt-4 mb-10">
        <BasePagination totalCount={berita.length} />
      </div>
    </>
  );
}
