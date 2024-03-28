import { sideNavDashboard } from "@/type";
import React from "react";
import {
  MdDashboard,
  MdNewspaper,
  MdMessage,
  MdEventNote,
} from "react-icons/md";
import { LuPlaneTakeoff, LuImage } from "react-icons/lu";

export const MenuTentang: {
  title: string;
  href: string;
}[] = [
  {
    title: "Informasi Umum",
    href: "/tentang/informasi-umum",
  },
  {
    title: "Sejarah",
    href: "/tentang/sejarah",
  },
  {
    title: "Visi Misi",
    href: "/tentang/visi-misi",
  },
  {
    title: "Struktur Organisasi",
    href: "/tentang/struktur-organisasi",
  },
  {
    title: "Peran & Fungsi",
    href: "/tentang/peran-fungsi",
  },
  {
    title: "Maklumat Pelayanan",
    href: "/tentang/maklumat-pelayanan",
  },
];

export const MenuLayanan: {
  title: string;
  href: string;
}[] = [
  {
    title: "Penerbangan Perintis",
    href: "/layanan/penerbangan-perintis",
  },
  {
    title: "Permohonan Informasi PPID",
    href: "/layanan/permohonan-informasi",
  },
  {
    title: "Permohonan PAS Bandara",
    href: "/layanan/permohonan-pas",
  },
];

export const MenuPengaduan: {
  title: string;
  href: string;
}[] = [
  {
    title: "Survei Kepuasan Masyarakat",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Pengaduan Gratifikasi",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Sistem Manajemen Pengaduan (SIMADU)",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Kritik dan Saran",
    href: "/docs/primitives/hover-card",
  },
];

export const MenuDashboard: sideNavDashboard[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: MdDashboard,
  },
  {
    label: "Kegiatan & Berita",
    path: "/dashboard/kegiatan-berita",
    icon: MdNewspaper,
  },
  {
    label: "Jadwal Penerbangan",
    path: "/dashboard/jadwal-penerbangan",
    icon: LuPlaneTakeoff,
  },
  {
    label: "Galeri",
    path: "/dashboard/galeri",
    icon: LuImage,
  },
  {
    label: "Laporan Kegiatan Harian",
    path: "/dashboard/laporan-kegiatan-harian",
    icon: MdEventNote,
  },
  {
    label: "Pesan",
    path: "/dashboard/pesan",
    icon: MdMessage,
  },
];
