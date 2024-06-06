"use client";
import Container from "../../../../components/common/container";
import HeadingTitle from "../../../../components/common/heading";
import Image from "next/image";
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
export default function StrukturOrgPage() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <HeadingTitle>
        <div className=" flex flex-col w-full items-center justify-end sm:pb-10 pb-20">
          <h1 className="text-white lg:text-5xl text-3xl font-semibold">
            Struktur Organisasi
          </h1>
          {/* <p className=" text-white mt-2 text-center lg:text-base text-sm lg:max-w-4xl max-w-md">
            Angkutan udara perintis adalah kegiatan angkutan udara niaga dalam
            negeri yang melayani jaringan dan rute penerbangan untuk
            menghubungkan daerah terpencil dan tertinggal atau daerah yang belum
            terlayani oleh moda transportasi lain dan secara komersial belum
            menguntungkan
          </p> */}
        </div>
      </HeadingTitle>
      <Container>
        <div className=" flex flex-col w-full items-center justify-center mb-20 mt-10">
          {/* <h1 className=" text-4xl font-semibold text-center">
            Jadwal Penerbangan Perintis Dari & Ke Bandara Harun Thohir
          </h1> */}
          <div className=" flex w-full items-center justify-center py-10">
            <div className=" flex w-[912px] lg:max-w-4xl max-w-md  aspect-[4.2/3] relative shadow-lg shadow-slate-600">
              <button type="button" onClick={() => setOpen(true)}>
                <Image
                  fill
                  src="/images/tentang/struktur-org.jpeg"
                  alt=""
                  className=" "
                />
              </button>
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                  {
                    src: "/images/tentang/struktur-org.jpeg",
                    width: 3840,
                    height: 2560,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
