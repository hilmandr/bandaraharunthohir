import Image from "next/image";
import Container from "../../../components/common/container";
import HeadingTitle from "../../../components/common/heading";
import Link from "next/link";
import React from "react";
import { getBerita } from "../../../action/berita";
import GetBerita from "../../../components/common/berita/berita";

export default async function BeritaPage() {
  const berita = await getBerita();
  return (
    <>
      <HeadingTitle className=" z-20">
        <div className=" flex flex-col w-full h-[480px] items-center justify-center bg-[url('/images/banner-1.JPG')] bg-cover bg-center shadow-lg ">
          <div className=" w-full h-[480px] bg-black/60 absolute z-0"></div>
          <div className=" flex flex-col w-full items-center justify-center z-10 mt-10">
            <h1 className="text-white lg:text-5xl text-3xl font-semibold max-w-sm text-center lg:max-w-full">
              Berita dan Informasi
            </h1>
            <p className=" text-white mt-2 text-center lg:text-base text-sm max-w-md lg:max-w-full">
              Simak berita dan informasi terkini seputar Bandar Udara Harun
              Thohir - Gresik.
            </p>
          </div>
        </div>
      </HeadingTitle>

      <Container>
        <div className=" flex flex-col w-full items-center justify-center mb-20 mt-10 gap-y-14">
          <GetBerita
            berita={berita}
            searchParams={{
              page: undefined,
            }}
          />
        </div>
      </Container>
    </>
  );
}
