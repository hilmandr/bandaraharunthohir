"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/image-slider";

export function Slider() {
  const images = [
    "/assets/images/image-slider/slider-1.JPG",
    "/assets/images/image-slider/slider-2.png",
    "/assets/images/image-slider/slider-3.jpeg",
  ];
  return (
    <ImagesSlider className="h-[45rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 py-4 pt-24">
          Selamat Datang di Website Resmi <br /> Kantor UPBU Harun Thohir -
          Gresik
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-rose-300/10 border-rose-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Lihat Jadwal Penerbangan</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-rose-600 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
