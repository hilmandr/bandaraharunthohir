import Container from "@/components/container";

export default function penerbanganPerintis() {
  return (
    <>
      <div className=" flex w-full bg-[url('/assets/images/hero/hero-visi-misi.JPG')] aspect-auto bg-cover bg-center">
        <div className=" flex w-full items-center justify-center bg-black/70 py-40">
          <div className=" ">
            <h1 className=" text-white font-extrabold text-7xl border-b-rose-700 border-b-2 pt-5 uppercase">
              Penerbangan Perintis
            </h1>
          </div>
        </div>
      </div>
      <Container className=" px-24">
        <div></div>
      </Container>
    </>
  );
}
