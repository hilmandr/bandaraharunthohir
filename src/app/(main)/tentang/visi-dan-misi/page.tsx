import Container from "../../../../components/common/container";
import HeadingTitle from "../../../../components/common/heading";
export default function VisiMisiPage() {
  return (
    <>
      <HeadingTitle>
        <div className=" flex flex-col w-full items-center justify-end sm:pb-0 pb-10">
          <h1 className="text-white lg:text-5xl text-3xl font-semibold">
            Visi dan Misi
          </h1>
          <p className=" text-white mt-2 text-center lg:text-base text-sm lg:max-w-4xl max-w-md">
            TERWUJUDNYA PENYELENGGARAAN TRANSPORTASI UDARA YANG HANDAL, BERDAYA
            SAING DAN MEMBERIKAN NILAI TAMBAH DALAM MENDUKUNG KETAHANAN NASIONAL
          </p>
        </div>
      </HeadingTitle>
      <Container>
        <div className=" flex flex-col w-full items-center justify-center mb-10 mt-10">
          {/* <h1 className=" text-4xl font-semibold text-center">
            Jadwal Penerbangan Perintis Dari & Ke Bandara Harun Thohir
          </h1> */}
          <div className=" flex flex-col w-full items-center justify-center mb-10">
            <div className=" flex flex-col w-full">
              <h1 className=" text-3xl font-bold">
                Penjelasan Visi secara garis besar :
              </h1>
              <div className=" flex">
                <ul className=" list-disc ml-4">
                  <div className=" border-b py-5">
                    <li className=" text-lg font-semibold">
                      PELAYANAN TRANSPORTASI UDARA YANG HANDAL
                    </li>
                    <p>
                      Diindikasikan oleh penyelenggaraan transportasi yang aman,
                      selamat, nyaman, tepat waktu, terpelihara, mencukupi
                      kebutuhan, menjangkau seluruh pelosok tanah air serta
                      mampu mendukung pembangunan nasional.
                    </p>
                  </div>
                  <div className=" border-b py-5">
                    <li className=" text-lg font-semibold">
                      PELAYANAN TRANSPORTASI UDARA YANG BERDAYA SAING
                    </li>
                    <p>
                      Diindikasikan oleh penyelenggaraan transportasi yang
                      efisien, dengan harga terjangkau oleh semua lapisan
                      masyarakat, dilayani oleh SDM yang profesional, mandiri
                      dan produktif.
                    </p>
                  </div>
                  <div className=" py-5">
                    <li className=" text-lg font-semibold">
                      PELAYANAN TRANSPORTASI UDARA YANG MEMBERIKAN NILAI TAMBAH
                    </li>
                    <p>
                      Diindikasikan oleh penyelenggaraan perhubungan yang mampu
                      mendorong pertumbuhan produksi nasional melalui iklim
                      usaha yang kondusif bagi berkembangnya peran serta
                      masyarakat, usaha kecil, menengah dan koperasi.
                    </p>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
