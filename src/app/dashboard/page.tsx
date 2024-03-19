import Container from "@/components/container";
import HeaderDashboard from "@/components/dashboard/header";
import { cn } from "@/lib/utils";

export default function Dashboard() {
  return (
    <>
      <div className=" flex w-full h-full bg-white text-sm">
        <Container>
          <HeaderDashboard />
          <div className=" flex w-full h-48 bg-[#a7b4ff] rounded-3xl mt-10 items-center">
            <div className=" flex flex-col w-full p-10">
              <h1 className={cn(" font-black text-6xl")}>Hi, Btari Larasati</h1>
              <h2 className=" font-semibold text-base">
                Let&apos;s add more project and article to be shown in your
                website!
              </h2>
            </div>
            <div className=" flex w-full h-64 relative justify-end mr-10">
              <div className=" flex aspect-[6/4] relative overflow-auto">
                {/* <Image
                  src="/image/dashboard/hero.png"
                  alt=""
                  fill
                  className=""
                /> */}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
