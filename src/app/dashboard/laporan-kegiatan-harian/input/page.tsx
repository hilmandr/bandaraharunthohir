import Container from "@/components/container";
import HeaderDashboard from "@/components/dashboard/header";
import InputLaporanKegiatanHarian from "@/components/dashboard/input-laporan-kegiatan-harian";

export default function inputLaporanKegiatanHarian() {
  return (
    <>
      <div className=" flex w-full bg-white">
        <Container>
          <HeaderDashboard />
          <div className=" flex flex-col w-full mt-10">
            <h1 className=" text-lg font-semibold">
              Input Data Laporan Kegiatan Harian
            </h1>
            <div className=" flex w-full">
              <InputLaporanKegiatanHarian />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
