"use client";

import Link from "next/link";
import Container from "../common/container";
import Image from "next/image";
import {
  ADDRESS_FOOTER,
  SOSMED,
  TAUTAN_LAIN,
} from "../../constant/common.constant";
import { animateScroll } from "react-scroll";
import { ArrowUp } from "iconsax-react";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className=" flex w-full bg-stone-950 pb-10 pt-16">
        <Container>
          <div className=" grid lg:grid-cols-2 w-full gap-x-20 gap-y-10 mb-10">
            {/* begin: left */}
            <div className=" flex flex-col w-full">
              <Link href="/" className="flex items-center gap-2 w-fit">
                <div className=" w-56 aspect-[4/1] object-center relative">
                  <Image
                    src="/images/logo-putih.png"
                    alt=""
                    fill
                    className=" object-contain object-top"
                  />
                </div>
              </Link>
              <ul className=" py-4 text-white leading-loose space-y-1">
                {ADDRESS_FOOTER.map((address) => (
                  <>
                    <li className=" flex items-center justify-start gap-3 cursor-default lg:text-base text-sm">
                      <address.icon size="24" color="#fafafa" variant="Bulk" />
                      <p>{address.name}</p>
                    </li>
                  </>
                ))}
              </ul>
              <div className=" flex w-full aspect-video  mt-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7230.968061884986!2d112.67597322885355!3d-5.724520523833843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ddf59a8ba291301%3A0x75bfd5411b39abc9!2sBandara%20Udara%20Harun%20Thohir!5e0!3m2!1sid!2sid!4v1717596741642!5m2!1sid!2sid"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className=" w-full h-full"
                />
              </div>
            </div>
            {/* end: left */}

            {/* begin: right */}
            <div className=" flex flex-col w-full gap-y-8">
              <div className=" flex flex-col w-full">
                <h4 className=" text-white text-xl">Tautan Lainnya</h4>
                <ul className=" pt-4 text-white leading-loose">
                  {TAUTAN_LAIN.map((tautan) => (
                    <>
                      <li className=" hover:text-neutral-400 transition-all duration-200 lg:text-base text-sm">
                        <Link href={tautan.path}>{tautan.name}</Link>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
              <div className=" flex flex-col w-full">
                <h4 className=" text-white text-xl">Ikuti Kami</h4>
                <ul className=" pt-4 text-white leading-loose flex gap-3">
                  {SOSMED.map((sosmed) => (
                    <>
                      <li>
                        <Link
                          href={sosmed.path}
                          className=" hover:text-neutral-400 transition-all duration-200"
                        >
                          <sosmed.icon size={30} />
                        </Link>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
            {/* end: right */}
          </div>
          {/* begin: bottom */}
          <div className=" flex w-full items-center justify-between pt-10 border-t border-neutral-500">
            <p className=" max-w-3xl w-full text-neutral-400 lg:text-base text-sm">
              Copyright © 2024 Bandar Udara Harun Thohir - Gresik. All rights
              reserved.
            </p>
            <div className=" flex w-full items-center justify-end">
              <button
                className=" flex cursor-pointer gap-1 lg:w-12 w-10 rounded-full aspect-square bg-white items-center justify-center group relative overflow-hidden"
                onClick={() =>
                  animateScroll.scrollToTop({
                    smooth: "easeInOutQuart",
                    duration: 1000,
                    spy: true,
                  })
                }
              >
                <ArrowUp
                  size="30"
                  color="#3a3a3a"
                  variant="Linear"
                  className=" flex items-center gap-2 transition-all duration-500 group-hover:-translate-y-9 group-hover:opacity-0"
                />
                <ArrowUp
                  size="30"
                  color="#3a3a3a"
                  variant="Linear"
                  className=" absolute flex translate-y-9 items-center gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                />
              </button>
            </div>
          </div>
          {/* end: bottom */}
        </Container>
      </div>
    </>
  );
}
