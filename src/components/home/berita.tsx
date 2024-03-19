import Link from "next/link";
import Container from "../container";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Berita() {
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
            <div className=" grid w-full grid-cols-3 gap-5">
              <div className=" flex flex-col w-full  bg-slate-50 shadow-lg">
                <Link href="">
                  <div className=" flex flex-col group">
                    <div className=" flex w-full aspect-video relative overflow-hidden">
                      <div className=" absolute w-10 h-10 bg-yellow-200"></div>
                      <Image
                        src="/assets/images/berita/berita-1.jpg"
                        alt=""
                        fill
                        className=""
                      ></Image>
                    </div>
                    <div className=" flex flex-col py-5 px-8">
                      <h1 className=" font-semibold">
                        Rapat Evaluasi Kegiatan Tahun 2023 dan Penyusunan
                        Program Kerja Tahun 2024
                      </h1>
                      <p className=" text-sm leading-loose pt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat...
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className=" flex flex-col w-full  bg-slate-50 shadow-lg">
                <Link href="">
                  <div className=" flex flex-col group">
                    <div className=" flex w-full aspect-video relative overflow-hidden">
                      <div className=" absolute w-10 h-10 bg-yellow-200"></div>
                      <Image
                        src="/assets/images/berita/berita-1.jpg"
                        alt=""
                        fill
                        className=""
                      ></Image>
                    </div>
                    <div className=" flex flex-col py-5 px-8">
                      <h1 className=" font-semibold">
                        Rapat Evaluasi Kegiatan Tahun 2023 dan Penyusunan
                        Program Kerja Tahun 2024
                      </h1>
                      <p className=" text-sm leading-loose pt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat...
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className=" flex flex-col w-full  bg-slate-50 shadow-lg">
                <Link href="">
                  <div className=" flex flex-col group">
                    <div className=" flex w-full aspect-video relative overflow-hidden">
                      <div className=" absolute w-10 h-10 bg-yellow-200"></div>
                      <Image
                        src="/assets/images/berita/berita-1.jpg"
                        alt=""
                        fill
                        className=""
                      ></Image>
                    </div>
                    <div className=" flex flex-col py-5 px-8">
                      <h1 className=" font-semibold">
                        Rapat Evaluasi Kegiatan Tahun 2023 dan Penyusunan
                        Program Kerja Tahun 2024
                      </h1>
                      <p className=" text-sm leading-loose pt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat...
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className=" flex w-full items-center justify-end py-10">
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
