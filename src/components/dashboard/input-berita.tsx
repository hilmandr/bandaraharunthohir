"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDropzone } from "react-dropzone";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import ContentEditor from "@/components/dashboard/froala-editor";
import {
  CreateBeritaRequest,
  createBeritaRequest,
} from "@/lib/validation/berita.validation";
import { createBerita } from "@/action/berita";
import { Loader2 } from "lucide-react";

export default function InputBerita<Object, EditorProps>() {
  const form = useForm<CreateBeritaRequest>({
    resolver: zodResolver(createBeritaRequest),
    defaultValues: {
      judul: "",
      penulis: "",
      konten: "",
      tanggal: new Date(),
      summary: "",
    },
  });

  const [thumbnail, setThumbnail] = useState<File | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    if (acceptedFiles && acceptedFiles[0]) {
      setThumbnail(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles, open } =
    useDropzone({
      onDrop,
      maxFiles: 1,
    });
  const onSubmit: SubmitHandler<CreateBeritaRequest> = useCallback(
    async (data) => {
      if (thumbnail) {
        setLoading(true);
        console.log(thumbnail);
        // console.log(data);
        // return res;
        const formData = new FormData();
        formData.append("file", thumbnail!);
        formData.append("upload_preset", "s5f1eblu");

        const res = await axios.post<{ secure_url: string }>(
          `https://api.cloudinary.com/v1_1/dbi3iqa9k/image/upload`,
          formData
        );

        if (res.status === 200) {
          const newBerita = await createBerita(data, res.data.secure_url);

          if (newBerita) {
            form.reset();
            toast.success("Berita berhasil ditambahkan");
            setLoading(false);
            router.push("/dashboard");
          }
        }
      }
    },
    [thumbnail, router, form]
  );
  return (
    <>
      <div className=" flex-1 w-full">
        <div className=" flex-1 w-full px-6 pb-6 border border-slate-200 rounded-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className=" grid grid-cols-2 w-full gap-6 py-4">
                <FormField
                  control={form.control}
                  name="judul"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Judul Berita</FormLabel>
                      <FormControl>
                        <Input placeholder="Judul Berita" {...field} />
                      </FormControl>
                      <FormDescription>
                        Tulis judul berita atau kegiatan.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="penulis"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Penulis Berita</FormLabel>
                      <FormControl>
                        <Input placeholder="Penulis Berita" {...field} />
                      </FormControl>
                      <FormDescription>
                        Tulis penulis atau pembuat berita.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="summary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ringkasan Berita</FormLabel>
                      <FormControl className=" w-full aspect-[2/1]">
                        <Textarea
                          placeholder="Tulis Ringkasan Disini"
                          id="message-2"
                          {...field}
                          maxLength={255}
                        />
                      </FormControl>
                      <FormDescription>
                        Tulis ringkasan atau rangkuman berita..
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className=" space-y-2">
                  <Label>Thumbnail Berita</Label>

                  {thumbnail ? (
                    <>
                      <div className=" flex flex-col w-full gap-y-1">
                        <div
                          className=" w-full aspect-[2/1] relative rounded-lg overflow-hidden"
                          onClick={open}
                        >
                          <Image
                            src={URL.createObjectURL(thumbnail)}
                            fill
                            alt=""
                            className=" object-center object-cover"
                          ></Image>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div
                      {...getRootProps({
                        className:
                          "dropzone flex w-full aspect-[2/1] border items-center justify-center rounded-lg",
                      })}
                    >
                      <input {...getInputProps()} />
                      {isDragActive ? (
                        <p>{}</p>
                      ) : (
                        <p className=" text-zinc-500">
                          Drag or drop image files here, or click to select
                          files
                        </p>
                      )}
                    </div>
                  )}
                </div>
                <FormField
                  control={form.control}
                  name="tanggal"
                  render={({ field }) => (
                    <FormItem className=" flex flex-col mt-[10px]">
                      <FormLabel>Tanggal Unggah Berita</FormLabel>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              // selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                      <FormDescription>Tanggal Unggah Berita.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="konten"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Detail Berita</FormLabel>
                    <FormControl>
                      <ContentEditor
                        setValue={(value: any) =>
                          form.setValue("konten", value)
                        }
                      />
                    </FormControl>
                    <FormDescription>
                      Tulis detail konten berita atau kegiatan.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Mohon Tunggu
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
