"use server";

import { db } from "@/db";
import { Berita, berita } from "@/db/schema";
import { CreateBeritaRequest } from "@/lib/validation/berita.validation";
import { revalidatePath } from "next/cache";
import { slugify } from "@/lib/utils";

export const createBerita = async (
  request: CreateBeritaRequest,
  thumbnail: string
) => {
  const newBerita = await db
    .insert(berita)
    .values({
      slug: slugify(request.judul),
      judul: request.judul,
      penulis: request.penulis,
      tanggal: request.tanggal,
      summary: request.summary,
      konten: request.konten,
      thumbnail,
    })
    .returning();

  revalidatePath("/dashboard/kegiatan-berita");

  return newBerita;
};

export const getBerita = async (): Promise<Berita[]> => {
  const berita = await db.query.berita.findMany();

  return berita;
};
