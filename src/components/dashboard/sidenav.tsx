"use client";
import { MenuDashboard } from "@/lib/constant";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoHT } from "../logo";

export default function SideNav() {
  const pathname = usePathname();
  return (
    <>
      <div className=" flex flex-col fixed w-[286px] min-h-screen bg-slate-50 overflow-hidden z-20">
        <div className=" flex w-full h-24 items-center justify-center ">
          <LogoHT />
        </div>
        <div className=" flex flex-col py-4 text-stone-900 gap-2">
          {MenuDashboard.map((menu, i) => (
            <div className="" key={i}>
              <Link href={menu.path} className=" text-sm text-white">
                <div
                  className={cn(
                    " flex w-full items-center gap-6 p-5 pl-8 duration-300 transform transition-all bg-slate-50 hover:bg-rose-700 hover:text-slate-50 text-slate-900",
                    {
                      "bg-rose-700 text-slate-50":
                        pathname.split("/")[2] == menu.path.split("/")[2],
                    }
                  )}
                >
                  <menu.icon size={25} variant="Bold" />
                  <h2>{menu.label}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
