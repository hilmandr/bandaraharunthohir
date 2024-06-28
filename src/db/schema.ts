import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import {
  date,
  pgTable,
  timestamp,
  uuid,
  varchar,
  integer,
  serial,
} from "drizzle-orm/pg-core";

export const berita = pgTable("berita", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: varchar("slug").notNull(),
  judul: varchar("judul").notNull(),
  summary: varchar("summary").notNull(),
  tanggal: timestamp("tanggal").notNull(),
  konten: varchar("konten").notNull(),
  thumbnail: varchar("thumbnail").notNull(),
  penulis: varchar("penulis").notNull(),
});
export type Berita = InferSelectModel<typeof berita>;
export type NewBerita = InferInsertModel<typeof berita>;
