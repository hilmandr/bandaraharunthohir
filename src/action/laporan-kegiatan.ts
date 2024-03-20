"use server";

import { db } from "@/db";
import { LaporanKegiatanHarian, laporanKegiatanHarian } from "@/db/schema";
import { CreateLaporanRequest } from "@/db/validation/laporan.validation";
import { format } from "date-fns";
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

function convertPostgresTimestampToDate(postgresTimestamp: string) {
  // Convert PostgreSQL timestamp to ISO string format
  const isoString = postgresTimestamp.replace(" ", "T");

  // Create a new Date object from the ISO string
  const date = new Date(isoString);

  // Extract and return the date part
  return date.toISOString().split("T")[0];
}

function getTimeWithoutTime(date: Date) {
  // Create a new Date object with the same year, month, and day but with time set to 00:00:00
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    0,
    0,
    0,
    0
  );
}

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
