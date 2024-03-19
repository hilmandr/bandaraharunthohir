import Container from "@/components/container";
import Image from "next/image";

export default function MaklumatPelayanan() {
  return (
    <>
      <div className=" flex w-full bg-[url('/assets/images/image-slider/slider-1.JPG')] aspect-auto bg-cover bg-center">
        <div className=" flex w-full items-center justify-center bg-black/70 py-40">
          <div className=" ">
            <h1 className=" text-white font-extrabold text-7xl border-b-rose-700 border-b-2 pt-5 uppercase">
              Maklumat Pelayanan
            </h1>
          </div>
        </div>
      </div>
      <Container>
        <div className=" flex w-full items-center justify-center pt-10">
          <div className=" flex w-[912px] aspect-[4.2/3] relative shadow-lg shadow-slate-600">
            <Image
              fill
              src="/assets/images/makluat-pelayanan.jpg"
              alt=""
              className=" "
            />
          </div>
        </div>
      </Container>
    </>
  );
}
