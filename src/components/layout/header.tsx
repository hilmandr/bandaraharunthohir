"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useMemo } from "react";
import Container from "../common/container";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { MENU, MENUS } from "../../constant/common.constant";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";
import { useScrollPosition } from "../../hooks/use-scroll-position";

export default function Header() {
  // hooks
  const pathname = usePathname();

  const actualPathName = useMemo<string>(() => {
    const arrPathname = pathname.split("/");
    arrPathname.splice(0, 2);
    return `/${arrPathname.join("/")}`;
  }, [pathname]);
  const scrollPosition = useScrollPosition();

  // active menu
  const activeMenu = useCallback(
    (menu: string) =>
      menu === "/invitation/xyz"
        ? menu === pathname
        : pathname.startsWith(menu),
    [pathname]
  );

  return (
    <>
      <div
        className={cn(
          " flex w-full h-24 items-center fixed z-50 top-0 transition-all transform duration-100 text-neutral-200",
          {
            " bg-black/90 transition-all transform duration-300 backdrop-blur-md h-20 shadow-lg":
              actualPathName !== "/",
          },
          {
            " bg-black/90 transition-all transform duration-300 backdrop-blur-md h-20 shadow-lg":
              scrollPosition > 100,
          }
        )}
      >
        <Container>
          <div className=" flex w-full">
            {/* begin: left */}
            <div className=" flex-1">
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
            </div>
            {/* end: left */}

            {/* begin: right */}
            <nav className=" hidden lg:flex justify-center items-center gap-2">
              {MENUS.map((menu) => (
                <>
                  <TooltipProvider key={menu.path} delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant={activeMenu(menu.path) ? "default" : "ghost"}
                          className=" rounded-lg"
                        >
                          <Link href={menu.path} className="">
                            {menu.title}
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent
                        align="center"
                        side="bottom"
                        className=" bg-white"
                      >
                        {menu.submenu && (
                          <div className="flex flex-col mt-2 gap-2">
                            {menu.submenu.map((submenu) => (
                              <Button
                                key={submenu.title}
                                size="sm"
                                variant={
                                  activeMenu(submenu.path)
                                    ? "default"
                                    : "secondary"
                                }
                                className=" justify-start text-slate-900"
                                asChild
                              >
                                <Link href={submenu.path}>{submenu.title}</Link>
                              </Button>
                            ))}
                          </div>
                        )}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </>
              ))}
              {MENU.map((menu) => (
                <>
                  <Button asChild variant="ghost" className=" rounded-full">
                    <Link href={menu.path} className="">
                      {menu.title}
                    </Link>
                  </Button>
                </>
              ))}
            </nav>
            {/* end: right */}
          </div>
        </Container>
      </div>
    </>
  );
}
