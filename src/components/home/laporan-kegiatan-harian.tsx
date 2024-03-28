"use client";
import { cn } from "@/lib/utils";
import Container from "../container";
import { Button } from "../ui/button";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Link from "next/link";
import React from "react";
import { LaporanKegiatanHarian } from "@/db/schema";
import { useQuery } from "@tanstack/react-query";
import { getAllLaporan, getLaporanByDate } from "@/action/laporan-kegiatan";

export default function ViewKegiatanHarian() {
  const [tanggal, setTanggal] = React.useState<Date | undefined>(undefined);
  // const {
  //   data: laporan,
  //   isLoading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["getLaporans"],
  //   queryFn: () => getLaporanByDate(tanggal ?? new Date()),
  //   enabled: false,
  // });

  const [laporan, setLaporan] = React.useState<
    LaporanKegiatanHarian | undefined
  >(undefined);

  const handleClick = async () => {
    const res = await getLaporanByDate(tanggal ?? new Date());
    setLaporan(res);
  };

  return (
    <>
      <div className=" flex w-full bg-[url('/assets/images/hero/hero-visi-misi.JPG')] aspect-auto bg-cover bg-center">
        <div className=" flex w-full bg-black/50">
          <Container>
            <div className=" flex w-full items-center justify-center text-white">
              <div className=" py-20 flex flex-col items-center justify-center">
                <h1 className=" text-3xl font-semibold text-center pb-5">
                  Laporan Kegiatan Harian
                </h1>
                <div className=" flex w-full items-center text-black gap-x-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[360px] justify-start text-left font-normal",
                          !tanggal && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {tanggal ? (
                          format(tanggal, "PPP")
                        ) : (
                          <span>Pilih Tanggal</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={tanggal}
                        onSelect={setTanggal}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <Button
                    onClick={handleClick}
                    className=" px-8 py-2 rounded-md bg-rose-600 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-rose-600"
                  >
                    Cari Laporan Kegiatan
                  </Button>
                </div>
                <div className=" py-5 flex w-full items-center justify-center">
                  {!tanggal ? (
                    <p className=" rounded-md py-2 flex w-full items-center justify-between px-3 border border-rose-700 bg-black/80 text-rose-500">
                      Silakan pilih tanggal
                    </p>
                  ) : (
                    <>
                      {!laporan ? (
                        <p className=" rounded-md py-2 flex w-full items-center justify-between px-3 border border-rose-700 bg-black/80 text-rose-500">
                          Link pada tanggal tersebut tidak tersedia
                        </p>
                      ) : (
                        <Link
                          href={laporan.link}
                          rel="noopener noreferrer"
                          target="_blank"
                          className=" rounded-md py-2 flex w-full items-center justify-between px-3 border border-rose-700 bg-black/80 text-rose-500"
                        >
                          {laporan?.link}
                        </Link>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
