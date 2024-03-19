import Container from "@/components/container";
import Image from "next/image";

export default function permohonanPas() {
  return (
    <>
      <div className=" flex w-full bg-[url('/assets/images/hero/hero-visi-misi.JPG')] aspect-auto bg-cover bg-center">
        <div className=" flex w-full items-center justify-center bg-black/70 py-40">
          <div className=" ">
            <h1 className=" text-white font-extrabold text-7xl border-b-rose-700 border-b-2 pt-5 uppercase">
              Permohonan Pas Bandara
            </h1>
          </div>
        </div>
      </div>
      <Container className=" px-24 py-10">
        <div className=" flex w-full items-center justify-center">
          <div className=" flex w-[768px] aspect-[1/2.7] relative">
            <Image
              src="/assets/images/permohonan-pas.png"
              alt=""
              fill
              className=" object-center object-cover"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
