import styles from "@/style";
import { TypingText } from "../../const/TypingText";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Sacramento } from "next/font/google";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import { Ichevron } from "@/utils/interfaces";
import TimelineItem from "./TimelineItem";
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


const Chevron = ({ type, hiddenSlide }: Ichevron) => {
  return (
    <div
      id={`chevron-${type}`}
      className={`${type == "left"
        ? hiddenSlide == "left"
          ? "hidden"
          : `${styles.flexCenter} bg-gradient-to-l from-transparent to-secondary/50 top-0 left-0`
        : hiddenSlide == "right"
          ? "hidden"
          : `${styles.flexCenter} bg-gradient-to-l from-secondary/50 to-transparent top-0 right-0`
        } hidden lg:flex cursor-pointer w-24 rounded-lg h-full absolute z-30 text-6xl hover:w-28 text-primary`}
    >
      {type == "left" ? <BiChevronLeft /> : <BiChevronRight />}
    </div>
  );
};

export default function Experience() {
  const [hiddenSlide, setHiddenSlide] = useState("left");
  return (
    <section id="exp">
      <div className={`${styles.paddings}`}>
        <div
          className={`${styles.innerWidth} mx-auto`}
        >
          <TypingText title="Experience" />

          <ol className="border-l-2 border-secondary ml-5 mt-8 relative">
            <TimelineItem date="2022" description="Years later, my curiosity has flourished, and I've challenged myself to learn all I can. This year, a company contacted me to design and implement the frontend for certain parts of their application." title="EXA Solutions" imgSrc="/assets/axa-education.jpg"/>
            <TimelineItem date="2023" description="I began as a backend developer with .NET, creating a series of financial calculators. Later, I transitioned to experimenting with different technologies, including Windows Forms and Xamarin, all using C#." title="ASFIES" imgSrc="/assets/nft-web-gallery.jpg"/>
            <TimelineItem date="2024" description="I joined the team as a full-stack developer, leveraging my knowledge from the .NET ecosystem. Quickly adapting, I transitioned to PHP, mastering Laravel and Livewire. Additionally, I deployed an application with Azure." title="FAW ELAM" imgSrc="/assets/web-plant.jpg"/>
            <TimelineItem date="now" description="I started a proyect to become the next ERP for all the intern process for the company with React and Livewire" title="Fflowing"/>
          </ol>


          {/* <div className="h-[50vh] w-full">
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
                      className={`h-[100px] w-[100px] lg:h-[150px] lg:w-[150px] rounded-full bg-secondary/50 absolute ${styles.flexCenter} text-primary ${sacramento.className} text-4xl opacity-0 group-hover:opacity-100`}
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
                      className={`h-[100px] w-[100px] lg:h-[150px] lg:w-[150px] rounded-full bg-secondary/50 absolute ${styles.flexCenter} text-primary ${sacramento.className} text-4xl opacity-0 group-hover:opacity-100`}
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
                      className={`h-[100px] w-[100px] lg:h-[150px] lg:w-[150px] rounded-full bg-secondary/50 absolute ${styles.flexCenter} text-primary ${sacramento.className} text-4xl opacity-0 group-hover:opacity-100`}
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
                      className={`h-[100px] w-[100px] lg:h-[150px] lg:w-[150px] rounded-full bg-secondary/50 absolute ${styles.flexCenter} text-primary ${sacramento.className} text-4xl opacity-0 group-hover:opacity-100`}
                    >
                      View
                    </div>
                  </a>
                )}
              </SwiperSlide>
              
            </Swiper>
          </div> */}
        </div>
      </div>
    </section>
  );
}
