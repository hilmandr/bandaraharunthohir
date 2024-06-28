"use client";
import { ArrowRight } from "iconsax-react";
import Container from "../../../../components/common/container";
import HeadingTitle from "../../../../components/common/heading";
import { Button } from "../../../../components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
import React from "react";

export default function PenerbanganPerintisPage() {
  const THeadLg = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <HeadingTitle className=" z-20">
        <div className=" flex flex-col w-full h-[480px] items-center justify-center bg-[url('/images/banner-1.JPG')] bg-cover bg-center shadow-lg ">
          <div className=" w-full h-[480px] bg-black/60 absolute z-0"></div>
          <div className=" flex flex-col w-full items-center justify-center z-10 mt-10">
            <h1 className="text-white lg:text-5xl text-3xl font-semibold max-w-sm text-center lg:max-w-full">
              Penerbangan Perintis
            </h1>
            <p className=" text-white mt-2 text-center lg:text-base text-sm max-w-md lg:max-w-3xl">
              Angkutan udara perintis adalah kegiatan angkutan udara niaga dalam
              negeri yang melayani jaringan dan rute penerbangan untuk
              menghubungkan daerah terpencil dan tertinggal atau daerah yang
              belum terlayani oleh moda transportasi lain dan secara komersial
              belum menguntungkan
            </p>
          </div>
        </div>
      </HeadingTitle>
      <Container>
        <div className=" flex flex-col w-full items-center justify-center mb-20 mt-10">
          <h1 className=" text-4xl font-semibold text-center">
            Jadwal Penerbangan Perintis
          </h1>
          <div className=" w-full mt-10">
            <Table>
              <TableCaption>
                Perubahan jadwal penerbangan perintis akan kami informasikan
                melalui media sosial dan website resmi Bandar Udara Harun Thohir
                - Gresik
              </TableCaption>
              {THeadLg && (
                <TableHeader>
                  <TableRow>
                    <TableHead>TANGGAL</TableHead>
                    <TableHead>JAM KEBERANGKATAN</TableHead>
                    <TableHead>TUJUAN</TableHead>
                    <TableHead>MASKAPAI</TableHead>
                    <TableHead>{""}</TableHead>
                  </TableRow>
                </TableHeader>
              )}

              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className=" md:p-0 md:bg-white bg-slate-200 p-2">
                      Senin, 12 Des 2024
                      {!THeadLg && (
                        <>
                          <div>
                            <p>08:00 WIB</p>
                          </div>
                        </>
                      )}
                    </div>
                  </TableCell>
                  {THeadLg && (
                    <TableCell>
                      <p className=" p-2 bg-slate-200">08:00 WIB</p>
                    </TableCell>
                  )}
                  {!THeadLg && (
                    <>
                      <div className=" flex flex-col p-6">
                        <p className=" font-semibold">Surabaya</p>
                        <p>Susi Air</p>
                      </div>
                    </>
                  )}
                  {THeadLg && (
                    <>
                      <TableCell className=" font-semibold">Surabaya</TableCell>
                      <TableCell>Susi Air</TableCell>
                    </>
                  )}

                  <TableCell>
                    <Link
                      href=""
                      className=" flex transition-all duration-200 group "
                    >
                      <p className=" left-3 relative group-hover:left-0 transition-all duration-200 ">
                        Detail
                      </p>
                      <ArrowRight
                        size="20"
                        variant="Linear"
                        className=" relative opacity-0 group-hover:opacity-100 left-0 group-hover:left-2 transition-all duration-200"
                      />
                    </Link>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </Container>
    </>
  );
}
