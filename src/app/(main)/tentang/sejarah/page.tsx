import Container from "@/components/container";

export default function Sejarah() {
  return (
    <>
      <div className=" flex w-full bg-[url('/assets/images/image-slider/slider-3.jpeg')] aspect-auto bg-cover bg-center">
        <div className=" flex w-full items-center justify-center bg-black/70 py-40">
          <div className=" ">
            <h1 className=" text-white font-extrabold text-7xl border-b-rose-700 border-b-2 pt-5 uppercase">
              Sejarah
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
