"use client";
import { ArrowRight, Mouse } from "iconsax-react";
import { Button } from "../ui/button";
import Container from "../common/container";
import DatePicker from "../common/date-picker";
import Link from "next/link";
import { Label } from "../ui/label";

export default function HomeSectionLapopranHarian() {
  return (
    <>
      <div className=" flex w-full bg-neutral-100">
        <Container>
          <div className=" lg:flex w-full items-center my-10 justify-between space-y-6">
            <div className=" text-left">
              <h1 className=" text-4xl font-semibold leading-tight">
                Lihat Kegiatan Harian Bandara Harun Thohir
              </h1>
              <p className=" text-neutral-500 max-w-2xl mt-2">
                Setiap harinya kami melaporkan kegiatan baik operasional maupun
                non-operasional yang dilakukan. Anda dapat melihatnya sesuai
                dengan tanggal yang anda pilih.
              </p>
            </div>
            <div className=" flex flex-col w-full items-center justify-end">
              <div className=" flex w-full gap-4 justify-center items-center">
                <DatePicker />
                <Button
                  variant="default"
                  className=" border border-neutral-950 rounded-full  text-neutral-900 transition-all duration-200 group px-6 bg-white hover:bg-black hover:text-white delay-0"
                >
                  <p className=" left-3 relative group-hover:left-0 transition-all duration-200 ">
                    Cari Laporan Kegiatan Harian
                  </p>
                  <ArrowRight
                    size="20"
                    variant="Linear"
                    className=" relative opacity-0 group-hover:opacity-100 left-0 group-hover:left-2 transition-all duration-200"
                  />
                </Button>
              </div>
              <Link
                href="/"
                className=" mt-6 border border-neutral-900 fle w-full py-2 px-4 max-w-xl"
              >
                <Label className=" overflow-clip">link</Label>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
