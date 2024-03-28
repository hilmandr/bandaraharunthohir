import Container from "@/components/container";
import Image from "next/image";

export default function strukturOrganisasi() {
  return (
    <>
      <div className=" flex w-full bg-[url('/assets/images/hero/hero-struktur-org.JPG')] aspect-auto bg-cover bg-center">
        <div className=" flex w-full items-center justify-center bg-black/70 py-40">
          <div className=" ">
            <h1 className=" text-white font-extrabold text-7xl border-b-rose-700 border-b-2 pt-5 uppercase">
              Struktur Organisasi
            </h1>
          </div>
        </div>
      </div>
      <Container className=" px-24">
        <div className=" flex w-full items-center justify-center py-10">
          <div className=" flex w-[912px] aspect-[4.2/3] relative shadow-lg shadow-slate-600">
            <Image
              fill
              src="/assets/images/struktur-org.jpeg"
              alt=""
              className=" "
            />
          </div>
        </div>
      </Container>
    </>
  );
}
