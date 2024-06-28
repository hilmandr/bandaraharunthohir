import { Calendar } from "iconsax-react";
import { getBeritaBySlug, getBeritaLain } from "../../../../action/berita";
import Container from "../../../../components/common/container";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import GetDetailBerita from "../../../../components/common/berita/detail-berita";
import React from "react";

interface PageParams {
  params: {
    slug: string;
  };
}
export default async function BeritaDetail({ params }: PageParams) {
  const berita = await getBeritaBySlug(params.slug);
  const beritaLain = await getBeritaLain();
  return (
    <>
      <Container>
        <div className=" lg:flex relative pt-32 pb-10 gap-x-10">
          <div className=" max-w-3xl">
            <GetDetailBerita berita={berita} />
          </div>
          <div className=" flex flex-col w-full">
            <h1 className=" pb-2 border-b font-medium">Berita Terbaru</h1>
            <div className=" flex flex-col gap-x-4 mt-4 gap-y-4">
              {beritaLain.slice(0, 6).map((berita) => (
                <>
                  <div className=" flex w-full items-center justify-start gap-x-4">
                    <div className=" relative w-full aspect-square max-w-20">
                      <Link href={berita.slug}>
                        <Image
                          src={berita.thumbnail}
                          alt=""
                          fill
                          className=" w-full h-full object-cover object-center"
                        />
                      </Link>
                    </div>
                    <div className=" flex flex-col">
                      <Link href={berita.slug}>
                        <h1 className=" text-base max-w-full line-clamp-2">
                          {berita.judul}
                        </h1>
                      </Link>
                      <span className=" flex gap-x-1 items-center mt-1">
                        <Calendar size="16" color="#333333" />
                        <p className=" text-xs">
                          {format(berita.tanggal, "PPP")}
                        </p>
                      </span>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
