import Link from "next/link";
import { FAKER_BERITA } from "../../constant/faker.constant";
import Container from "../common/container";
import { format } from "date-fns";
import { Button } from "../ui/button";
import { ArrowRight } from "iconsax-react";
import Image from "next/image";

export default function HomeSectionBerita() {
  return (
    <>
      <Container>
        <div className=" flex flex-col w-full items-center justify-center my-10">
          <div className=" text-center">
            <h1 className=" text-4xl font-semibold leading-relaxed">
              Berita dan Informasi
            </h1>
            <p className=" text-neutral-500 max-w-2xl">
              Simak berita dan informasi terkini seputar Bandar Udara Harun
              Thohir - Gresik.
            </p>
          </div>
          <div className=" grid lg:grid-cols-2 w-full gap-8 mt-10">
            {FAKER_BERITA.map((berita) => (
              <>
                <div className=" flex flex-col w-full shadow-lg">
                  <Link
                    href={berita.path}
                    className=" flex w-full aspect-video relative group overflow-hidden"
                  >
                    <Image
                      src={berita.thumbnail}
                      alt=""
                      fill
                      className=" w-full h-full group-hover:scale-110 transition-all duration-200"
                    />
                  </Link>
                  <div className=" flex flex-col justify-between w-full h-60 bg-white p-6">
                    <Link
                      href={berita.path}
                      className=" lg:text-2xl font-semibold text-xl"
                    >
                      {berita.title}
                    </Link>
                    <div className=" flex w-full items-center justify-between">
                      <p className=" text-sm text-neutral-600">
                        {format(berita.date, "PPP")}
                      </p>
                      <Link href={berita.path}>
                        <Button
                          variant="default"
                          className=" border border-neutral-950 rounded-full bg-white text-neutral-900 transition-all duration-200 hover:bg-white group px-6"
                        >
                          <p className=" left-3 relative group-hover:left-0 transition-all duration-200 ">
                            Baca Selengkapnya
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
                </div>
              </>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
