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

export default function Footer() {
  return (
    <>
      <div className=" flex w-full bg-stone-950 py-10">
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
              <ul className=" p-4 text-white leading-loose">
                {ADDRESS_FOOTER.map((address) => (
                  <>
                    <li className=" flex items-center justify-start gap-3 cursor-default">
                      <address.icon size="24" color="#fafafa" variant="Bulk" />
                      <p>{address.name}</p>
                    </li>
                  </>
                ))}
              </ul>
              <div className=" flex w-full aspect-video bg-white/40 mt-5"></div>
            </div>
            {/* end: left */}

            {/* begin: right */}
            <div className=" flex flex-col w-full gap-y-8">
              <div className=" flex flex-col w-full">
                <h4 className=" text-white text-xl">Tautan Lainnya</h4>
                <ul className=" pt-4 text-white leading-loose">
                  {TAUTAN_LAIN.map((tautan) => (
                    <>
                      <li className=" hover:text-neutral-400 transition-all duration-200">
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
            <p className=" max-w-3xl w-full text-neutral-400">
              Copyright © 2024 Bandar Udara Harun Thohir - Gresik. All rights
              reserved.
            </p>
            <div className=" flex w-full items-center justify-end">
              <button
                className=" flex cursor-pointer gap-1 w-12 rounded-full aspect-square bg-white items-center justify-center"
                onClick={() =>
                  animateScroll.scrollToTop({
                    smooth: "easeInOutQuart",
                    duration: 1000,
                    spy: true,
                  })
                }
              >
                <ArrowUp size="32" color="#3a3a3a" variant="Linear" />
              </button>
            </div>
          </div>
          {/* end: bottom */}
        </Container>
      </div>
    </>
  );
}
