import Container from "./container";
import { FiPhoneCall, FiSend } from "react-icons/fi";

import { Button } from "./ui/button";

export default function Kontak(this: any) {
  return (
    <>
      <div className=" grid grid-cols-5 w-full items-center shadow-lg my-10">
        <div className=" flex w-full items-center justify-center">
          {/* <MapContainer /> */}
        </div>
        <div className=" flex w-full items-center col-start-4 col-end-7">
          <Container className="">
            <h1 className=" font-semibold text-3xl">Get in touch</h1>
            <p className=" text-sm mt-3 pb-5 border-b leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              interdum magna non neque iaculis tincidunt.
            </p>
            <h2 className=" font-semibold text-sm mt-5">
              Jl. Raya Bandar Udara Harun Thohir No. 1, Gresik 12345
            </h2>
            <div className=" flex w-full items-center py-5 text-left">
              <FiPhoneCall size={56} />
              <div className=" flex flex-col w-full justify-center pl-6">
                <p className=" text-left text-rose-800 text-xl">
                  (0325) 424443
                </p>
                <p className=" text-left text-blue-800 text-sm">
                  bandaraharunthohir@gmail.com
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className=" flex w-full items-center justify-center py-10">
        <h1 className=" font-semibold text-3xl">Kritik & Saran</h1>
      </div>
      <div className=" grid grid-cols-2 max-w-3xl mx-auto gap-4">
        <div className=" flex flex-col w-full">
          <input
            type="text"
            className=" bg-rose-50 px-4 py-4"
            placeholder="Nama Lengkap"
          />
        </div>
        <div className=" flex flex-col w-full">
          <input
            type="text"
            className=" bg-rose-50 px-4 py-4"
            placeholder="Alamat Email"
          />
        </div>
        <div className=" flex flex-col w-full">
          <input
            type="text"
            className=" bg-rose-50 px-4 py-4"
            placeholder="Nomor Telepon"
          />
        </div>
        <div className=" flex flex-col w-full">
          <input
            type="text"
            className=" bg-rose-50 px-4 py-4"
            placeholder="Judul"
          />
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center max-w-3xl mx-auto mt-5 mb-10 gap-4">
        <textarea
          placeholder="Tulis kritik dan saran anda disini..."
          className=" bg-rose-50 px-4 py-3 w-full aspect-video"
        />
        <Button className=" w-full px-8 py-6 rounded-md bg-rose-600 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-rose-600">
          <p className=" text-lg">Kirim</p>
          <FiSend className="ml-2" />
        </Button>
      </div>
    </>
  );
}
