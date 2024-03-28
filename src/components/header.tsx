"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MenuTentang, MenuLayanan, MenuPengaduan } from "@/lib/constant";
import { LogoHT } from "./logo";
import Container from "./container";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const scrollPosition = useScrollPosition();
  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  });
  ListItem.displayName = "ListItem";
  return (
    <>
      <div
        className={cn(
          " flex w-full h-20 items-center fixed z-50 top-0",
          {
            " bg-transparent transition-all transform duration-300": pathname,
          },
          {
            " bg-black bg-opacity-70 transition-all transform duration-300 backdrop-blur-md":
              scrollPosition > 100,
          }
        )}
      >
        <Container>
          <div className=" flex justify-between text-white">
            <div className=" flex w-full items-center gap-4">
              <LogoHT />
              <Link href="/" className=" font-semibold text-xl">
                HARUN THOHIR
              </Link>
            </div>
            <div className=" flex w-fit items-center">
              <Button variant="ghost" asChild>
                <Link href="/">Beranda</Link>
              </Button>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className=" bg-transparent">
                      Tentang
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-1 p-4 lg:w-[400px] grid-cols-2">
                        {MenuTentang.map((menu) => (
                          <ListItem
                            key={menu.title}
                            title={menu.title}
                            href={menu.href}
                          ></ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className=" bg-transparent">
                      Layanan
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-1 p-4 lg:w-[250px]">
                        {MenuLayanan.map((menu) => (
                          <ListItem
                            key={menu.title}
                            title={menu.title}
                            href={menu.href}
                          ></ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  {/* <NavigationMenuItem>
                    <NavigationMenuTrigger className=" bg-transparent">
                      Pengaduan
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-1 p-4 lg:w-[400px] grid-cols-2">
                        {MenuPengaduan.map((menu) => (
                          <ListItem
                            key={menu.title}
                            title={menu.title}
                            href={menu.href}
                          ></ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem> */}
                </NavigationMenuList>
              </NavigationMenu>
              <Button variant="ghost" asChild>
                <Link href="">Berita</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="">PPID</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/kontak">Kontak</Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
