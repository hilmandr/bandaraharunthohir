import HomeSectionBanner from "../../components/home/banner";
import HomeSectionLayanan from "../../components/home/home-layanan";
import HomeSectionLapopranHarian from "../../components/home/home-laporan-harian";
import HomeSectionBerita from "../../components/home/home-berita";
import HomeSectionFaq from "../../components/home/home-faq";

export default function Home() {
  return (
    <>
      {/* begin : banner */}
      <HomeSectionBanner />
      {/* end : banner */}

      {/* begin : layanan */}
      <HomeSectionLayanan />
      {/* end : layanan */}

      {/* begin : laporan kegiatan harian */}
      <HomeSectionLapopranHarian />
      {/* end : laporan kegiatan harian */}

      {/* begin : berita */}
      <HomeSectionBerita />
      {/* end : berita */}

      {/* begin : faq */}
      <HomeSectionFaq />
      {/* end : faq */}
    </>
  );
}
