import { z } from "zod";

export const createLaporanRequest = z.object({
  // slug: z.string().min(1),

  tanggal: z.date(),
  link: z.string(),
});

export type CreateLaporanRequest = z.infer<typeof createLaporanRequest>;
