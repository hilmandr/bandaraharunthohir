import Link from "next/link";
import React from "react";
import Container from "./container";
import { FaXTwitter, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { PiMapPinFill, PiPhone, PiEnvelope } from "react-icons/pi";

export default function Footer() {
  return (
    <>
      <div className=" flex w-full bg-gray-950 text-white">
        <Container>
          <div className=" grid grid-cols-4 py-20">
            <div className=" flex flex-col w-full text-left gap-y-1 col-span-2">
              <h1 className=" font-semibold text-lg">
                Kantor UPBU Harun Thohir - Gresik
              </h1>
              <span className=" flex gap-x-2 items-center">
                <PiMapPinFill />
                <p className=" text-sm">
                  Jl. Raya Bandar Udara Harun Thohir No. 1, Gresik 12345
                </p>
              </span>
              <span className=" flex gap-x-2 items-center">
                <PiPhone />
                <p className=" text-sm">(0325) 424443</p>
              </span>
              <span className=" flex gap-x-2 items-center">
                <PiEnvelope />
                <p className=" text-sm">bandaraharunthohir@gmail.com</p>
              </span>
            </div>
            <div className=" flex flex-col w-full text-left gap-y-1 col-start-3">
              <h1 className=" font-semibold text-lg">Tautan Lainnya</h1>
              <Link href="">
                <p className=" text-sm">Kementerian Perhubungan</p>
              </Link>
              <Link href="">
                <p className=" text-sm">
                  Direktorat Jenderal Perhubungan Udara
                </p>
              </Link>
            </div>
            <div className=" flex flex-col w-full gap-y-1">
              <h1 className=" font-semibold text-lg">Ikuti Kami</h1>
              <div className=" flex w-full gap-x-2">
                <Link href="">
                  <div className="  bg-white rounded-full p-[6px]">
                    <FaInstagram size={25} className=" text-black" />
                  </div>
                </Link>
                <Link href="">
                  <div className="  bg-white rounded-full p-[6px]">
                    <FaTiktok size={25} className=" text-black" />
                  </div>
                </Link>
                <Link href="">
                  <div className="  bg-white rounded-full p-[6px]">
                    <FaXTwitter size={25} className=" text-black" />
                  </div>
                </Link>
                <Link href="">
                  <div className=" f bg-white rounded-full p-[6px]">
                    <FaYoutube size={25} className=" text-black" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className=" flex w-full items-center text-gray-400 py-16 border-t-[0.5px] border-t-gray-700">
            <div className=" flex flex-col w-full">
              <p className=" text-right text-base">
                Hak Cipta &copy; 2024 Kantor UPBU Harun Thohir - Gresik
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
