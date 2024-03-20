"use client";
import {
  CreateLaporanRequest,
  createLaporanRequest,
} from "@/db/validation/laporan.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form.";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";
import Link from "next/link";
import { useCallback } from "react";
import router from "next/router";
import { toast } from "sonner";
import { createLaporan } from "@/action/laporan-kegiatan";
import { useQuery } from "@tanstack/react-query";

export default function InputLaporanKegiatanHarian() {
  const form = useForm<CreateLaporanRequest>({
    resolver: zodResolver(createLaporanRequest),
    defaultValues: {
      tanggal: new Date(),
      link: "",
    },
  });
  const onSubmit: SubmitHandler<CreateLaporanRequest> = useCallback(
    async (data) => {
      const res = await createLaporan(data);
      console.log(data);

      toast.success("success add project");
      return res;
    },
    []
  );
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className=" ml-3">Tambah Data</Button>
        </DialogTrigger>
        <DialogContent className=" sm:max-w-[768px]">
          <DialogHeader>
            <DialogTitle>Tambah data</DialogTitle>
            <DialogDescription>
              Input tanggal dan link google drive laporan kegiatan harian
            </DialogDescription>
          </DialogHeader>
          <div className=" w-full">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className=" flex flex-col w-full gap-y-4">
                  <div className="">
                    <FormField
                      control={form.control}
                      name="tanggal"
                      render={({ field }) => (
                        <FormItem className=" flex flex-col">
                          <FormLabel>
                            Masukkan tanggal laporan kegiatan
                          </FormLabel>
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
                              <PopoverContent
                                className="w-auto p-0"
                                align="start"
                              >
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
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="">
                    <FormField
                      control={form.control}
                      name="link"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Masukkan link google drive</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Link laporan kegiatan harian"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Pastikan akses link google drive telah dibuka!
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className=" flex w-full justify-end">
                  <Button type="submit" className=" flex right-0">
                    Input
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
