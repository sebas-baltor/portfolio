import styles from "@/style";
import { TypingText } from "./TypingText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Sacramento } from "next/font/google";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const sacramento = Sacramento({ weight: "400", subsets: ["latin"] });
const responsiveSlider = {
  // when window width is >= 320px
  320: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  // when window width is >= 640px
  1000: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};
interface sliderItemProps {
  uri: string;
  imgUri: string;
  alt: string;
}
function SliderItem({ uri, imgUri, alt }: sliderItemProps) {
  return (
    <SwiperSlide>
      {({ isActive }) => (
        <a
          href={uri}
          target="_blank"
          className={`h-full w-full overflow-hidden rounded-lg hover:shadow-lg shadow-sm bg-white block relative group ${styles.flexCenter}`}
        >
          <img
            src={imgUri}
            alt={alt}
            className={`w-full object-cover grayscale  group-hover:grayscale-[50%] group-hover:blur-[1px] ${
              isActive ? "blur-[2px]" : "blur-[1px]"
            }`}
          />
          <div
            className={`h-[100px] w-[100px] lg:h-[150px] lg:w-[150px] rounded-full bg-secondary/50 absolute ${styles.flexCenter} text-white ${sacramento.className} text-4xl opacity-0 group-hover:opacity-100`}
          >
            View
          </div>
        </a>
      )}
    </SwiperSlide>
  );
}

export default function Experience() {
  return (
    <section className="bg-light" id="exp">
      <div className={`${styles.paddings} h-screen`}>
        <div
          className={`${styles.innerWidth} mx-auto ${styles.flexColCenter} gap-12 h-full`}
        >
          <TypingText title="Experience" />
          <div className="h-[50vh] w-full">
            <Swiper
              className="h-full"
              spaceBetween={50}
              slidesPerView={1}
              breakpoints={responsiveSlider}
            >
              <SwiperSlide>
                {({ isActive }) => (
                  <a
                    href={"https://sebas-baltor.github.io/plant-web/"}
                    target="_blank"
                    className={`h-full w-full overflow-hidden rounded-lg hover:shadow-lg shadow-sm bg-white block relative group ${styles.flexCenter}`}
                  >
                    <img
                      src={"/exp-1.jpg"}
                      alt={"plant web"}
                      className={`w-full object-cover grayscale  group-hover:grayscale-[50%] group-hover:blur-[1px] ${
                        isActive ? "blur-[2px]" : "blur-[1px]"
                      }`}
                    />
                    <div
                      className={`h-[100px] w-[100px] lg:h-[150px] lg:w-[150px] rounded-full bg-secondary/50 absolute ${styles.flexCenter} text-white ${sacramento.className} text-4xl opacity-0 group-hover:opacity-100`}
                    >
                      View
                    </div>
                  </a>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <a
                    href={"https://exa.com.mx/"}
                    target="_blank"
                    className={`h-full w-full overflow-hidden rounded-lg hover:shadow-lg shadow-sm bg-white block relative group ${styles.flexCenter}`}
                  >
                    <img
                      src={"/exp-1.jpg"}
                      alt={"plant web"}
                      className={`w-full object-cover grayscale  group-hover:grayscale-[50%] group-hover:blur-[1px] ${
                        isActive ? "blur-[2px]" : "blur-[1px]"
                      }`}
                    />
                    <div
                      className={`h-[100px] w-[100px] lg:h-[150px] lg:w-[150px] rounded-full bg-secondary/50 absolute ${styles.flexCenter} text-white ${sacramento.className} text-4xl opacity-0 group-hover:opacity-100`}
                    >
                      View
                    </div>
                  </a>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <a
                    href={"https://sebas-baltor.github.io/Static-Web-D-DW/"}
                    target="_blank"
                    className={`h-full w-full overflow-hidden rounded-lg hover:shadow-lg shadow-sm bg-white block relative group ${styles.flexCenter}`}
                  >
                    <img
                      src={"/exp-1.jpg"}
                      alt={"design web"}
                      className={`w-full object-cover grayscale  group-hover:grayscale-[50%] group-hover:blur-[1px] ${
                        isActive ? "blur-[2px]" : "blur-[1px]"
                      }`}
                    />
                    <div
                      className={`h-[100px] w-[100px] lg:h-[150px] lg:w-[150px] rounded-full bg-secondary/50 absolute ${styles.flexCenter} text-white ${sacramento.className} text-4xl opacity-0 group-hover:opacity-100`}
                    >
                      View
                    </div>
                  </a>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <a
                    href={"https://rickandmortyblog-production.up.railway.app/"}
                    target="_blank"
                    className={`h-full w-full overflow-hidden rounded-lg hover:shadow-lg shadow-sm bg-white block relative group ${styles.flexCenter}`}
                  >
                    <img
                      src={"/exp-1.jpg"}
                      alt={"rick and morty app"}
                      className={`w-full object-cover grayscale  group-hover:grayscale-[50%] group-hover:blur-[1px] ${
                        isActive ? "blur-[2px]" : "blur-[1px]"
                      }`}
                    />
                    <div
                      className={`h-[100px] w-[100px] lg:h-[150px] lg:w-[150px] rounded-full bg-secondary/50 absolute ${styles.flexCenter} text-white ${sacramento.className} text-4xl opacity-0 group-hover:opacity-100`}
                    >
                      View
                    </div>
                  </a>
                )}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
