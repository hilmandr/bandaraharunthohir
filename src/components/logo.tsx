import Link from "next/link";
import Image from "next/image";

export function LogoHT() {
  return (
    <>
      <Link href="/">
        <Image
          src="/assets/images/logo/logo-ht-main-outline-white.png"
          alt=""
          width={70}
          height={70}
          className=" cursor-pointer"
        ></Image>
      </Link>
    </>
  );
}
