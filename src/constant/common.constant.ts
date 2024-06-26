import {
  AirplaneSquare,
  DocumentDownload,
  Instagram,
  Map1,
  Mobile,
  Sms,
  UserSquare,
  Youtube,
} from "iconsax-react";
import {
  TAddressFooter,
  TFaq,
  TLayanan,
  TMenu,
  TSosmedFooter,
  TTautanFooter,
} from "../type/common.types";
import { FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaSquareTwitter, FaXTwitter } from "react-icons/fa6";

export const MENU: Array<TMenu> = [
  {
    title: "Berita",
    path: "/berita",
  },
  {
    title: "Kontak",
    path: "/kontak",
  },
];

export const MENUS: Array<TMenu> = [
  {
    title: "Layanan",
    path: "/layanan",
    submenu: [
      {
        title: "Penerbangan Perintis",
        path: "/layanan/penerbangan-perintis",
      },
      {
        title: "Permohonan PAS",
        path: "/layanan/permohonan-pas",
      },
      // {
      //   title: "Permohonan Informasi",
      //   path: "/layanan/permohonan-informasi",
      // },
    ],
  },
  {
    title: "Tentang",
    path: "/tentang",
    submenu: [
      {
        title: "Struktur Organisasi",
        path: "/tentang/struktur-organisasi",
      },
      {
        title: "Peran dan Fungsi",
        path: "/tentang/peran-dan-fungsi",
      },
      {
        title: "Visi dan Misi",
        path: "/tentang/visi-dan-misi",
      },
      {
        title: "Maklumat Pelayanan",
        path: "/tentang/maklumat-pelayanan",
      },
    ],
  },
];

export const HOME_LAYANAN: Array<TLayanan> = [
  {
    thumbnail: AirplaneSquare,
    title: "Penerbangan Perintis",
    description:
      "Layanan penerbangan perintis mencakup berbagai fasilitas dan kemudahan bagi penumpang, mulai dari pemesanan tiket, check-in, hingga proses naik pesawat.",
    path: "/layanan/penerbangan-perintis",
  },
  {
    thumbnail: UserSquare,
    title: "Permohonan PAS Bandara",
    description:
      "Kami juga menyediakan layanan permohonan pengajuan PAS Bandara untuk akses tertentu di dalam area bandar udara.",
    path: "/layanan/permohonan-pas",
  },
  {
    thumbnail: DocumentDownload,
    title: "Permohonan Informasi",
    description:
      "Kami menyediakan layanan permohonan informasi bagi pihak-pihak yang memiliki kepentingan untuk dapat mengakses informasi seputar bandar udara.",
    path: "/layanan/permohonan-informasi",
  },
];

export const FAQ: Array<TFaq> = [
  {
    item: "item-1",
    question: "Dimana letak Bandar Udara Harun Thohir?",
    answer:
      "Bandar Udara Harun Thohir - Gresik terletak di Desa Tanjungori, Kecamatan Tambak, Pulau Bawean, Kabupaten Gresik Provinsi Jawa Timur (xx Kilometer arah utara dari Pulau Jawa.",
  },
  {
    item: "item-2",
    question:
      "Apakah layanan pemesanan tiket pesawat dari dan ke Bandara Harun Thohir sudah bisa diakses melalui aplikasi?",
    answer:
      "Layanan pemesanan tiket pesawat dari dan ke Bandara Harun Thohir saat ini belum tersedia di dalam aplikasi dan hanya melayanai melalui pesan Whatsapp.",
  },
  {
    item: "item-3",
    question: "Bagaimana cara memesan tiket pesawat dari Pulau Bawean?",
    answer:
      "Pemesanan tiket penerbangan perintis dari Pulau Bawean (Bandara Harun Thohir) dapat dilakukan melalui Ticketing Susi Air Bawean pesan Whatsapp pada nomor 08123456789.",
  },
  {
    item: "item-4",
    question: "Bagaimana cara memesan tiket pesawat dari Surabaya?",
    answer:
      "Pemesanan tiket penerbangan perintis dari Surabaya (Bandara Juanda) dapat dilakukan melalui Ticketing Susi Air Surabaya pesan Whatsapp pada nomor 08123456789.",
  },
  {
    item: "item-5",
    question: "Bagaimana cara memesan tiket pesawat dari Sumenep?",
    answer:
      "Pemesanan tiket penerbangan perintis dari Sumenep (Bandara Trunojoyo) dapat dilakukan melalui Ticketing Susi Air Sumenep pesan Whatsapp pada nomor 08123456789.",
  },
];

export const ADDRESS_FOOTER: Array<TAddressFooter> = [
  {
    icon: Map1,
    name: "Jl. Raya Bandara Harun Thohir No. 1",
  },
  {
    icon: Mobile,
    name: "(0325) 424443",
  },
  {
    icon: Sms,
    name: "bandaraharunthohir@gmail.com",
  },
];

export const TAUTAN_LAIN: Array<TTautanFooter> = [
  {
    name: "Kementerian Perhubungan",
    path: "https://dephub.go.id/",
  },
  {
    name: "Direktorat Jenderal Perhubungan Udara",
    path: "https://hubud.dephub.go.id/hubud/website/",
  },
  {
    name: "Kantor Ototritas Bandar Udara Wil III",
    path: "https://otban3.dephub.go.id/",
  },
];

export const SOSMED: Array<TSosmedFooter> = [
  { icon: FaInstagram, path: "" },
  { icon: FaYoutube, path: "" },
  { icon: FaTiktok, path: "" },
  { icon: FaXTwitter, path: "" },
];
