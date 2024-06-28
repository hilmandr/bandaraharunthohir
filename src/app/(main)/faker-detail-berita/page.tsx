import { Calendar, Folder, ReceiptEdit } from "iconsax-react";
import Container from "../../../components/common/container";
import Image from "next/image";
import Link from "next/link";
import { FAKER_BERITA } from "../../../constant/faker.constant";
import { format } from "date-fns";
import React from "react";

export default function FaketDetailBerita() {
  return (
    <>
      <Container>
        <div className=" lg:flex relative pt-32 pb-10 gap-x-10">
          <div className=" max-w-3xl ">
            <h1 className=" text-3xl font-semibold">
              Kunjungan Rombongan Tamu VIP KASAL TNI AL Beserta Rombongan Dalam
              Giat Meninjau Keadaan Pulau Bawean Pasca Bencana Gempa Bumi
            </h1>
            <div className=" flex w-full items-center justify-start gap-8 py-5 text-neutral-500 text-sm">
              <span className=" flex gap-x-1">
                <Folder size="18" color="#333333" />
                <p>Berita</p>
              </span>
              <span className=" flex gap-x-1">
                <Calendar size="18" color="#333333" />
                <p>14 Maret 2024</p>
              </span>
              <span className=" flex gap-x-1">
                <ReceiptEdit size="18" color="#333333" />
                <p>Admin</p>
              </span>
            </div>
            <div className=" w-full aspect-video relative">
              <Image
                src="/images/banner.JPG"
                alt=""
                fill
                className=" w-full h-full"
              />
            </div>
            <div className=" flex flex-col w-full text-base mt-12 gap-y-4 text-justify">
              <p>
                Penajam Paser Utara - Menteri Perhubungan Budi Karya Sumadi
                kembali meninjau lokasi pembangunan kereta otonom atau
                Autonomous Rail Transit (ART) di Ibu Kota Nusantara (IKN), Senin
                (3/6). Menurut Menhub, uji coba ART dapat dilakukan pada Agustus
                2024 mendatang, seiring telah selesainya pembangunan Jalan Sumbu
                Kebangsaan Sisi Barat.
              </p>
              <p>
                “Terima kasih kepada Kementerian PUPR yang telah menyelesaikan
                pembangunan Jalan Sumbu Kebangsaan Sisi Barat di Kawasan Inti
                Pusat Pemerintahan IKN, salah satunya untuk jalur ART. Insya
                Allah, dengan jalur yang sudah ada, ART bisa diuji coba pada
                bulan Agustus nanti,” ujar Menhub.
              </p>
              <p>
                Menhub menjelaskan, Jalan Sumbu Kebangsaan Sisi Barat memiliki
                jalur lalu lintas sebanyak enam jalur, dengan satu lajur khusus
                bus dan ART. Menurutnya, jalan yang sudah selesai dibangun ini
                punya tekstur yang sangat halus.
              </p>
              <p>
                “Aspal di jalan Sumbu Kebangsaan Sisi Barat ini sangat halus dan
                punya kelenturan yang luar biasa. Hal ini tentu akan membuat
                nyaman para pengendara dan penumpang yang melintas,” terang
                Menhub.
              </p>
              <p>
                Menhub juga menuturkan, IKN dirancang sebagai kawasan yang
                menerapkan konsep kota cerdas berlandaskan prinsip hijau dan
                berkelanjutan. Kehadiran ART di IKN sejatinya sesuai dengan
                prinsip tersebut, sebab mampu meningkatkan efisiensi serta
                keamanan dalam bermobilitas, dan yang tak kalah penting ramah
                lingkungan.
              </p>
              <p>
                “ART dioperasikan menggunakan baterai yang disubstitusikan
                dengan marka jalan dan magnet. Alhasil, kendaraan ini ampuh
                untuk mengurangi emisi gas rumah kaca dan pemakaian energi,”
                kata Menhub.
              </p>
              <p>
                Lebih lanjut, Menhub berharap IKN dapat menjadi pelopor kota
                berbasis transportasi cerdas di tanah air. “Semoga IKN bisa
                menginspirasi kota-kota lain di Indonesia dalam hal
                mengembangkan transportasi cerdas,” tambahnya.
              </p>
              <p>
                Turut hadir dalam peninjauan ini Sekretaris Ditjen Kereta Api
                Jujun Endah Wahjuningrum dan Direktur Lalu Lintas Kereta Api
                Arif Anwar.(OB/HH/SR/BRD)
              </p>
            </div>
          </div>
          <div className=" flex flex-col">
            <h1 className=" pb-2 border-b font-medium">Berita Terbaru</h1>
            <div className=" flex flex-col gap-x-4 mt-4 gap-y-4">
              {FAKER_BERITA.map((berita) => (
                <>
                  <div className=" flex w-full items-center justify-start gap-x-4">
                    <div className=" relative w-full aspect-square max-w-20">
                      <Link href={berita.path}>
                        <Image
                          src={berita.thumbnail}
                          alt=""
                          fill
                          className=" w-full h-full object-cover object-center"
                        />
                      </Link>
                    </div>
                    <div className=" flex flex-col">
                      <Link href={berita.path}>
                        <h1 className=" text-sm max-w-full line-clamp-2">
                          {berita.title}
                        </h1>
                      </Link>
                      <span className=" flex gap-x-1 items-center mt-1">
                        <Calendar size="16" color="#333333" />
                        <p className=" text-sm">{format(berita.date, "PPP")}</p>
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
