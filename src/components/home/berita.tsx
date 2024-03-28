import Link from "next/link";
import Container from "../container";
import Image from "next/image";
import { Button } from "../ui/button";
import { getBerita } from "@/action/berita";
import { format } from "date-fns";

export default async function Berita() {
  const berita = await getBerita();
  return (
    <>
      <div className=" flex w-full bg-slate-50">
        <Container className=" px-20">
          <div className=" flex flex-col w-full justify-center">
            <div className=" flex flex-col py-5">
              <h1 className=" text-3xl font-semibold text-center pt-5">
                Berita Terbaru
              </h1>
              <p className=" text-sm text-center py-1">
                Berita Kegiatan dan Pengumuman Terbaru
              </p>
            </div>
            <div className=" grid w-full lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5">
              {berita.map((itemBerita, i) => (
                <>
                  <div className=" flex flex-col w-full bg-slate-50 shadow-lg">
                    <Link href={itemBerita.slug}>
                      <div className=" flex flex-col group">
                        <div className=" flex w-full aspect-video relative overflow-hidden">
                          <div className=" absolute bg-rose-800 z-10 right-0 items-center flex justify-center">
                            <p className=" text-white text-sm px-3 py-2">
                              {format(itemBerita.tanggal, "P")}
                            </p>
                          </div>
                          <Image
                            src={itemBerita.thumbnail as string}
                            alt=""
                            fill
                            className=""
                          ></Image>
                        </div>
                        <div className=" flex flex-col py-5 px-8">
                          <h1 className=" font-semibold">{itemBerita.judul}</h1>
                          <p className=" text-sm leading-loose pt-2">
                            {itemBerita.summary}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              ))}
            </div>
            <div className=" flex w-full items-center lg:justify-end md:justify-center sm:justify-center py-10">
              <Button className=" px-8 py-2 rounded-md bg-rose-600 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-rose-600">
                Lihat Semua
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
