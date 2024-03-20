import Container from "@/components/container";
import HeaderDashboard from "@/components/dashboard/header";
import { TableLaporanKegiatanHarian } from "@/components/dashboard/table-laporan-kegiata-harian";
import { cn } from "@/lib/utils";

export default function LaporanKegiatanHarian() {
  return (
    <>
      <div className=" flex w-full bg-white">
        <Container>
          <HeaderDashboard />
          <div className=" flex flex-col w-full mt-10">
            <h1 className=" text-lg font-semibold">
              Data Laporan Kegiatan Harian
            </h1>
            <div className=" flex w-full">
              <TableLaporanKegiatanHarian />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
