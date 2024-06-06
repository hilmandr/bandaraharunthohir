import { ArrowRight } from "iconsax-react";
import Container from "../../../components/common/container";
import HeadingTitle from "../../../components/common/heading";
import { Button } from "../../../components/ui/button";
import { Form } from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Textarea } from "../../../components/ui/textarea";
import Image from "next/image";

export default function KontakPage() {
  return (
    <>
      <HeadingTitle>
        <div className=" flex flex-col w-full items-center justify-end sm:pb-4 pb-10">
          <h1 className="text-white lg:text-5xl text-3xl font-semibold">
            Kontak
          </h1>
          <p className=" text-white mt-2 text-center lg:text-base text-sm lg:max-w-4xl max-w-md">
            Berikan saran dan masukan anda agar pelayanan kami menjadi lebih
            baik lagi.
          </p>
        </div>
      </HeadingTitle>
      <Container>
        <div className=" w-full mb-20 mt-10 grid lg:grid-cols-2 gap-10">
          <div className=" flex flex-col gap-y-3 w-full">
            <div className=" w-full space-y-1">
              <Label htmlFor="nama" className=" font-semibold">
                Nama
              </Label>
              <Input
                type="text"
                id="nama"
                className=" w-full border-neutral-300"
              />
            </div>
            <div className=" w-full space-y-1">
              <Label htmlFor="email" className=" font-semibold">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                className=" w-full border-neutral-300"
              />
            </div>
            <div className=" w-full space-y-1">
              <Label htmlFor="telepon" className=" font-semibold">
                Telepon
              </Label>
              <Input
                type="text"
                id="telepon"
                className=" w-full border-neutral-300"
              />
            </div>
            <div className=" w-full space-y-1">
              <Label htmlFor="pesan" className=" font-semibold">
                Pesan
              </Label>
              <Textarea
                className=" w-full aspect-[3/1] border-neutral-300"
                name="pesan"
                id="pesan"
              />
            </div>
            <Button
              variant="default"
              className=" border rounded-full bg-black text-neutral-100 transition-all duration-200 hover:bg-black group px-6"
            >
              <p className=" left-4 relative group-hover:left-0 transition-all duration-200 ">
                Kirim
              </p>
              <ArrowRight
                size="20"
                variant="Linear"
                className=" relative opacity-0 group-hover:opacity-100 left-0 group-hover:left-2 transition-all duration-200"
              />
            </Button>
          </div>
          <div className=" flex flex-col w-full gap-y-4">
            <div className=" flex w-full relative aspect-[8/2] max-w-64">
              <Image
                src="/images/logo.png"
                alt=""
                fill
                className=" w-full h-full"
              />
            </div>
            <h1 className=" font-semibold text-xl">
              Kantor Unit Penyelenggara Bandar Udara Kelas III Harun Thohir -
              Gresik
            </h1>
            <div>
              <h3 className=" font-semibold">Alamat :</h3>
              <p>
                Jl. Raya Bandara Harun Thohir No. 1, Desa Tanjungori
                <br />
                Kecamatan Tambak, Kabupaten Gresik
              </p>
            </div>
            <div>
              <h3 className=" font-semibold">Telepon :</h3>
              <p>(0325) 424443</p>
            </div>
            <div>
              <h3 className=" font-semibold">Email :</h3>
              <p>bandaraharunthohir@gmail.com</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
