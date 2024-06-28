import { ArrowRight, Mouse } from "iconsax-react";
import { Button } from "../ui/button";
import Container from "../common/container";
import Link from "next/link";
import { HOME_LAYANAN } from "../../constant/common.constant";
import React from "react";

export default function HomeSectionLayanan() {
  return (
    <>
      <Container>
        <div className=" flex flex-col w-full items-center justify-center my-10">
          <div className=" text-center">
            <h1 className=" text-4xl font-semibold leading-relaxed">
              Layanan Kami
            </h1>
            <p className=" text-neutral-500 max-w-2xl">
              Kepuasan masyarakat bagi kami adalah nomor satu. Dengan begitu,
              kami akan selalu memberikan hasil yang sesuai ekspektasi di setiap
              layanan yang kami berikan.
            </p>
          </div>
          <div className=" grid lg:grid-cols-3 w-full items-center justify-center gap-8 mt-10">
            {HOME_LAYANAN.map((layanan) => (
              <>
                <div className=" flex flex-col w-full gap-6 text-slate-900 items-center justify-between">
                  <Link
                    href=""
                    className=" flex w-full aspect-video bg-neutral-700 items-center justify-center transition-all duration-200 hover:scale-[1.05]"
                  >
                    <layanan.thumbnail
                      size="150"
                      color="#fafafa"
                      variant="Bulk"
                    />
                  </Link>
                  <div className=" flex flex-col w-full justify-start gap-2">
                    <h1 className=" font-semibold">{layanan.title}</h1>
                    <p className=" text-sm">{layanan.description}</p>
                  </div>
                  <div className=" flex w-full gap-4 items-end">
                    <Link href={layanan.path}>
                      <Button
                        variant="default"
                        className=" border border-neutral-950 rounded-full bg-white text-neutral-900 transition-all duration-200 hover:bg-white group px-6"
                      >
                        <p className=" left-3 relative group-hover:left-0 transition-all duration-200 ">
                          Lihat Selengkapnya
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
              </>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
