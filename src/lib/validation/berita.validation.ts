import { z } from "zod";

export const createBeritaRequest = z.object({
  judul: z.string().min(1, {
    message: "Form tidak boleh kosong!",
  }),
  tanggal: z.date(),
  penulis: z.string().min(1, {
    message: "Form tidak boleh kosong!",
  }),
  summary: z.string().min(1, {
    message: "Form tidak boleh kosong!",
  }),
  konten: z.string().min(1, {
    message: "Form tidak boleh kosong!",
  }),
});

export type CreateBeritaRequest = z.infer<typeof createBeritaRequest>;
