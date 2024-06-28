"use server";

import { revalidatePath } from "next/cache";

import { eq } from "drizzle-orm";
import { db } from "../db";
import { Berita, berita } from "../db/schema";
import { slugify } from "../lib/utils";
import { CreateBeritaRequest } from "../lib/validation/berita.validation";

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

  revalidatePath("/dashboard/berita");

  return newBerita;
};

export const getBerita = async (): Promise<Berita[]> => {
  const berita = await db.query.berita.findMany();
  return berita;
};

export const getBeritaLain = async (): Promise<Berita[]> => {
  const berita = await db.query.berita.findMany({
    orderBy: (berita, { desc }) => [desc(berita.tanggal)],
  });
  return berita;
};

export const getBeritaBySlug = async (slug: string): Promise<Berita> => {
  const slugBerita: any = await db.query.berita.findFirst({
    where: eq(berita.slug, slug),
  });

  return slugBerita;
};
