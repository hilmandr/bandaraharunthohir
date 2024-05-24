import { ArrowRight, Mouse } from "iconsax-react";
import { Button } from "../ui/button";
import Container from "../common/container";

export default function HomeSectionBanner() {
  return (
    <>
      <div className=" flex flex-col w-full h-screen relative top-0 z-0 inset-0 bg-[url('/images/banner-1.JPG')] bg-cover bg-bottom items-center justify-center">
        <div className=" flex w-full h-screen bg-black/40 absolute top-0 -z-10"></div>
        <Container>
          <div className=" flex w-full items-center justify-start z-10 inset-1">
            <div className=" flex flex-col w-full max-w-2xl text-white">
              <h1 className=" text-5xl font-extrabold leading-tight">
                Selamat Datang di Website Resmi Kantor UPBU Harun Thohir -
                Gresik
              </h1>
              <p>
                Bandar Udara Bawean, juga dikenal sebagai Bandar Udara Harun
                Thohir, adalah bandar udara yang terletak di Pulau Bawean,
                Kabupaten Gresik, Jawa Timur. Bandara ini dioperasikan oleh
                Kementerian Perhubungan Republik Indonesia.
              </p>
              <div className=" flex w-full gap-4 mt-4">
                <Button
                  variant="default"
                  className=" border rounded-full bg-white text-neutral-900 transition-all duration-200 hover:bg-white group px-6"
                >
                  <p className=" left-4 relative group-hover:left-0 transition-all duration-200 ">
                    Lihat Jadwal Penerbangan
                  </p>
                  <ArrowRight
                    size="20"
                    variant="Linear"
                    className=" relative opacity-0 group-hover:opacity-100 left-0 group-hover:left-2 transition-all duration-200"
                  />
                </Button>
              </div>
            </div>
          </div>
        </Container>
        <Mouse
          size="36"
          color="#fafafa"
          className=" absolute bottom-14 animate-bounce"
          variant="Broken"
        />
      </div>
      {/* <div className=" flex flex-col w-full items-center justify-center relative -mt-72">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,288L48,266.7C96,245,192,203,288,202.7C384,203,480,245,576,245.3C672,245,768,203,864,202.7C960,203,1056,245,1152,256C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,288L48,266.7C96,245,192,203,288,202.7C384,203,480,245,576,245.3C672,245,768,203,864,202.7C960,203,1056,245,1152,256C1248,267,1344,245,1392,234.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div> */}
    </>
  );
}
