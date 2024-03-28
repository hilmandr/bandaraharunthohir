"use server";

import { db } from "@/db";
import { laporanKegiatanHarian } from "@/db/schema";
import { CreateLaporanRequest } from "@/lib/validation/laporan.validation";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const createLaporan = async (request: CreateLaporanRequest) => {
  const newLaporan = await db
    .insert(laporanKegiatanHarian)
    .values({
      tanggal: new Date(request.tanggal.setHours(0, 0, 0, 0)),
      link: request.link,
      createdAt: new Date(),
    })
    .returning();

  revalidatePath("/dashboard/laporan-kegiatan-harian");

  return newLaporan;
};

export const getAllLaporan = async () => {
  const res = await db.query.laporanKegiatanHarian.findMany();

  return res;
};

export const getLaporanByDate = async (tanggal: Date) => {
  laporanKegiatanHarian.tanggal;
  const formatted = tanggal.setHours(0, 0, 0, 0);
  const tanggalLaporan = await db.query.laporanKegiatanHarian.findFirst({
    where: eq(laporanKegiatanHarian.tanggal, new Date(formatted)),
  });

  return tanggalLaporan;
};
