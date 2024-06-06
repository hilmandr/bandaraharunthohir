import Container from "../../../components/common/container";
import HeadingTitle from "../../../components/common/heading";

export default function BeritaPage() {
  return (
    <>
      <HeadingTitle>
        <div className=" flex flex-col w-full items-center justify-end sm:pb-2 pb-10">
          <h1 className="text-white lg:text-5xl text-3xl font-semibold">
            Berita dan Informasi
          </h1>
          <p className=" text-white mt-2 text-center lg:text-base text-sm lg:max-w-4xl max-w-md">
            Simak berita dan informasi terkini seputar Bandar Udara Harun Thohir
            - Gresik.
          </p>
        </div>
      </HeadingTitle>
      <Container>
        <div className=" flex flex-col w-full items-center justify-center mb-20 mt-10">
          {/* <h1 className=" text-4xl font-semibold text-center">
            Jadwal Penerbangan Perintis Dari & Ke Bandara Harun Thohir
          </h1> */}
        </div>
      </Container>
    </>
  );
}
