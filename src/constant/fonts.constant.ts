import {
  Comfortaa,
  Josefin_Sans,
  Overlock,
  Roboto,
  Rubik,
} from "next/font/google";
import localFont from "next/font/local";

export const avenirMedium = localFont({
  src: "/../../public/fonts/avenir/Avenir-Medium.ttf",
});
export const avenirBlack = localFont({
  src: "/../../public/fonts/avenir/Avenir-Black.ttf",
});
export const avenirBlackOblique = localFont({
  src: "/../../public/fonts/avenir/Avenir-BlackOblique.ttf",
});
export const avenirBook = localFont({
  src: "/../../public/fonts/avenir/Avenir-Book.ttf",
});
export const avenirBookOblique = localFont({
  src: "/../../public/fonts/avenir/Avenir-BookOblique.ttf",
});
export const avenirHeavy = localFont({
  src: "/../../public/fonts/avenir/Avenir-Heavy.ttf",
});
export const avenirHeavyOblique = localFont({
  src: "/../../public/fonts/avenir/Avenir-HeavyOblique.ttf",
});
export const avenirLight = localFont({
  src: "/../../public/fonts/avenir/Avenir-Light.ttf",
});
export const avenirLightOblique = localFont({
  src: "/../../public/fonts/avenir/Avenir-LightOblique.ttf",
});
export const avenirMediumOblique = localFont({
  src: "/../../public/fonts/avenir/Avenir-MediumOblique.ttf",
});
export const avenirOblique = localFont({
  src: "/../../public/fonts/avenir/Avenir-Oblique.ttf",
});
export const avenirRoman = localFont({
  src: "/../../public/fonts/avenir/Avenir-Roman.ttf",
});

export const overlock = Overlock({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const rubik = Rubik({ subsets: ["arabic"] });

export const comfortaa = Comfortaa({
  subsets: ["latin"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const josefinSans = Josefin_Sans({ subsets: ["latin"] });
