import Container from "../../../../components/common/container";
import HeadingTitle from "../../../../components/common/heading";
export default function PenerbanganPerintisPage() {
  return (
    <>
      <HeadingTitle>
        <div className=" flex flex-col w-full items-center justify-end sm:pb-0 pb-4">
          <h1 className="text-white lg:text-5xl text-3xl font-semibold">
            Penerbangan Perintis
          </h1>
          <p className=" text-white mt-2 text-center lg:text-base text-sm lg:max-w-4xl max-w-sm">
            Angkutan udara perintis adalah kegiatan angkutan udara niaga dalam
            negeri yang melayani jaringan dan rute penerbangan untuk
            menghubungkan daerah terpencil dan tertinggal atau daerah yang belum
            terlayani oleh moda transportasi lain dan secara komersial belum
            menguntungkan
          </p>
        </div>
      </HeadingTitle>
      <Container>
        <div className=" flex flex-col w-full items-center justify-center mb-20 mt-10">
          <h1 className=" text-4xl font-semibold text-center">
            Jadwal Penerbangan Perintis Dari & Ke Bandara Harun Thohir
          </h1>
        </div>
      </Container>
    </>
  );
}
