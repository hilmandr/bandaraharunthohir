import { getLaporanByDate } from "@/action/laporan-kegiatan";
import Album from "@/components/home/album";
import Berita from "@/components/home/berita";
import ViewKegiatanHarian from "@/components/home/laporan-kegiatan-harian";
import PerintisSchedule from "@/components/home/perintis-schedule";
import { Slider } from "@/components/home/slider";

export default async function Home() {
  return (
    <>
      <Slider />
      <PerintisSchedule />
      <Berita />
      <ViewKegiatanHarian />
      <Album />
    </>
  );
}
