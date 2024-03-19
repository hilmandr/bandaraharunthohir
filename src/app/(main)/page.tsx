import Album from "@/components/home/album";
import Berita from "@/components/home/berita";
import PerintisSchedule from "@/components/home/perintis-schedule";
import { Slider } from "@/components/home/slider";

export default function Home() {
  return (
    <>
      <Slider />
      <PerintisSchedule />
      <Berita />
      <Album />
    </>
  );
}
