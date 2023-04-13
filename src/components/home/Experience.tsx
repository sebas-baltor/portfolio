import styles from "@/style";
import { TypingText } from "./TypingText";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Sacramento } from "next/font/google";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import { Ichevron } from "@/utils/interfaces";
const sacramento = Sacramento({ weight: "400", subsets: ["latin"] });
const responsiveSlider = {
  // when window width is >= 320px
  320: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  // when window width is >= 480px
  700: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  // when window width is >= 640px
  1000: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};


const Chevron = ({ type,hiddenSlide }:Ichevron) => {
  return (
    <div
      id={`chevron-${type}`}
      className={`${
        type == "left"
          ? hiddenSlide == "left"
            ? "hidden"
            : `${styles.flexCenter} bg-gradient-to-l from-transparent to-secondary top-0 left-0`
        : hiddenSlide == "right"
        ? "hidden"
        : `${styles.flexCenter} bg-gradient-to-l from-secondary to-transparent top-0 right-0`
      } opacity-40 hidden lg:flex cursor-pointer w-24 rounded-lg h-full absolute z-10 text-white text-6xl hover:w-28 hover:opacity-60`}
    >
      {type == "left" ? <BiChevronLeft /> : <BiChevronRight />}
    </div>
  );
};

export default function Experience() {
  const [hiddenSlide,setHiddenSlide]= useState("left");
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
              modules={[Pagination, Navigation]}
              pagination={{
                clickable: true,
                bulletActiveClass: "bg-secondary opacity-70",
              }}
              navigation={{
                nextEl: "#chevron-right",
                prevEl: "#chevron-left",
              }}
              onSlideChange={(swiper)=>{
                if(swiper.isBeginning){
                  setHiddenSlide("left");
                  return;
                }
                if(swiper.isEnd){
                  setHiddenSlide("right");
                  return
                }
                setHiddenSlide("");
              }}
            >
              <Chevron type="left" hiddenSlide={hiddenSlide}/>
              <Chevron type="right" hiddenSlide={hiddenSlide}/>
              <SwiperSlide>
                {({ isActive }) => (
                  <a
                    href={"https://sebas-baltor.github.io/plant-web/"}
                    target="_blank"
                    className={`h-full w-full overflow-hidden rounded-lg hover:shadow-lg shadow-sm bg-white block relative group ${styles.flexCenter}`}
                  >
                    <img
                      src={"/assets/web-plant.jpg"}
                      alt={"plant web"}
                      className={`w-full object-cover grayscale group-hover:grayscale-0 group-hover:blur-[1px] ${
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
                      src={"/assets/axa-education.jpg"}
                      alt={"plant web"}
                      className={`w-full object-cover grayscale group-hover:grayscale-0 group-hover:blur-[1px] ${
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
                      src={"/assets/rick-and-morty-blog.jpg"}
                      alt={"plant web"}
                      className={`w-full object-cover grayscale group-hover:grayscale-0 group-hover:blur-[1px] ${
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
                    href={"#"}
                    target="_blank"
                    className={`h-full w-full overflow-hidden rounded-lg hover:shadow-lg shadow-sm bg-white block relative group ${styles.flexCenter}`}
                  >
                    <img
                      src={"assets/nft-web-gallery.jpg"}
                      alt={"plant web"}
                      className={`w-full object-cover grayscale group-hover:grayscale-0 group-hover:blur-[1px] ${
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
