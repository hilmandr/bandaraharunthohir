import Container from "../../../../components/common/container";
import HeadingTitle from "../../../../components/common/heading";
import Image from "next/image";
import { Button } from "../../../../components/ui/button";
import Link from "next/link";
import { ArrowRight } from "iconsax-react";

export default function PermohonanInformasiPage() {
  return (
    <>
      <HeadingTitle>
        <div className=" flex flex-col w-full items-center justify-end sm:pb-0 pb-4">
          <h1 className="text-white lg:text-5xl text-3xl font-semibold">
            Permohonan Informasi
          </h1>
          {/* <p className=" text-white mt-2 text-center lg:text-base text-sm">
            Pelayanan Penerbitan Pas Bandar Udara yang digunakan untuk orang /
            pekerja yang berkegiatan pada Daerah Keamanan Terbatas di Bandar
            Udara.
          </p> */}
        </div>
      </HeadingTitle>
      <Container>
        <div className=" flex flex-col w-full items-center justify-center mb-20 -mt-10">
          <h1 className=" text-4xl font-semibold text-center">
            Unduh Formulir Permohonan Informasi
          </h1>
          <div className=" flex w-[420px] aspect-[3/4] mt-6 relative">
            <Image
              src="/images/layanan/permohonan-informasi.jpeg"
              alt=""
              fill
              className=" w-full h-full"
            />
          </div>
          <Button className=" border border-neutral-950 rounded-full bg-white text-neutral-900 transition-all duration-200 hover:bg-white group px-6 mt-4">
            <Link
              href="/pdf/Formulir Permohonan Informasi.pdf"
              download
              className=" left-3 relative group-hover:left-0 transition-all duration-200 "
            >
              Unduh Formulir
            </Link>
            <ArrowRight
              size="20"
              variant="Linear"
              className=" relative opacity-0 group-hover:opacity-100 left-0 group-hover:left-2 transition-all duration-200"
            />
          </Button>
        </div>
      </Container>
    </>
  );
}
