import styles from "@/style";
import { useRef } from "react";
import RollText from "./RollText";
import { motion, useScroll } from "framer-motion";
import { Sacramento } from "next/font/google";
import { MdDoubleArrow } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";


const sacramento = Sacramento({ weight: "400", subsets: ["latin"] });

export default function Main() {
  const { scrollY } = useScroll();

  return (
    <main className={`overflow-hidden h-screen w-full bg-primary relative py-[85vh]`}>
      <RollText text="FRONTEND BACKEND WEB DEV" baseVelocity={-2} />
      <RollText text="FULL STACK DEVELOPER FRONTEND" baseVelocity={2} />
      <motion.div
        className={`flex flex-col justify-center items-center ${styles.paddings} gap-12 absolute top-0 right-0 text-white h-screen max-h-screen w-full`}
        style={{ y: scrollY }}
      >
        <div className={`${styles.innerWidth} flex flex-col gap-4 lg:gap-12 items-end relative text-lg md:text-4xl`}>
          <div
            className={`flex flex-col flex-nowrap justify-start text-white text-lg gap-3 md:text-2xl lg:text-4xl lg:gap-4`}
          >
            <span>Hi, my name is</span>
            <span className="text-6xl lg:text-8xl font-bold text-secondary">
              Sebastián
            </span>
            <span className="text-justify">
              I’m a freelance full stack developer and I want to work with you,
              creating amazing webs and solving problems.
            </span>
          </div>
          <a
            href="#skills"
            className={`${sacramento.className} text-white text-2xl md:text-3xl bg-secondary py-2 px-6 rounded-xl hover:shadow-xl hover:bg-secondary-contrast lg:text-4xl max-w-max`}
          >
            About me
          </a>
          <div className="text-primary-contrast absolute -top-[22rem] -right-0 md:-right-4 z-10 flex flex-col gap-3 items-center text-xl md:text-2xl">
            <div className="h-44 w-[3px] rounded bg-primary-contrast"></div>
            <a href="" className="hover:text-secondary">
            <BsGithub className=""/>
            </a>
            <a href="" className="hover:text-secondary">
            <BsLinkedin/>
            </a>
          </div>
        </div>
        <div
          className={`${styles.flexCenter} relative text-6xl text-secondary rotate-90`}
        >
          <motion.span
            className="absolute"
            initial={{
              x: "0%",
              opacity: 0,
            }}
            animate={{
              x: ["1%", "99%"],
              opacity: [0, 1],
            }}
            transition={{
              x: {
                duration: 2,
                repeat: Infinity,
                ease: "circIn",
              },
              opacity: {
                duration: 2,
                repeat: Infinity,
                ease: "anticipate",
              },
            }}
          >
            <MdDoubleArrow />
          </motion.span>
        </div>
      </motion.div>
    </main>
  );
}
