import styles from "@/style";
import RollText from "./RollText";
import { motion, useScroll } from "framer-motion";
import { Inter } from "next/font/google";
import { MdDoubleArrow } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
const inter = Inter({ weight: "900", subsets: ["latin"] });

export default function Main() {
  return (
    <main className={`overflow-hidden h-screen w-full bg-primary relative`}>
      <RollText text="FRONTEND BACKEND WEB DEV" baseVelocity={-2} />
      <RollText text="FULL STACK DEVELOPER FRONTEND" baseVelocity={2} />
      <div
        className={`flex flex-col justify-center items-center ${styles.paddings} absolute top-0 z-10 gap-12 text-white h-screen max-h-screen w-full`}
      >
        <div
          className={`${styles.innerWidth} flex flex-col gap-4 lg:gap-12 items-end relative text-lg md:text-4xl`}
        >
          <div
            className={`flex flex-col flex-nowrap justify-start text-white text-lg gap-3 md:text-2xl lg:text-4xl lg:gap-4`}
          >
            <span>Hi, my name is</span>
            <span
              className={`${inter.className} font-black text-6xl lg:text-8xl text-secondary tracking-widest`}
            >
              Sebastián
            </span>
            <span className="text-justify">
              I’m a freelance full stack developer and I want to work with you,
              creating amazing webs and solving problems.
            </span>
          </div>
          <a
            href="#skills"
            className={`text-primary text-lg md:text-2xl bg-secondary py-2 px-6 rounded-xl hover:shadow-xl hover:bg-secondary-contrast lg:text-2xl max-w-max`}
          >
            about me
          </a>
          <div className="text-primary-contrast absolute -bottom-[100%] -right-0 md:-right-4 z-20 flex flex-col gap-3 items-center text-xl md:text-2xl lg:text-3xl group">
            <a
              href="https://github.com/sebas-baltor"
              target={"_blank"}
              className="hover:text-secondary"
            >
              <BsGithub className="" />
            </a>
            <a href="" className="hover:text-secondary">
              <BsLinkedin />
            </a>
            <div className="h-44 w-[3px] rounded bg-gradient-to-t from-secondary to-primary-contrast group-hover:to-secondary "></div>
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
      </div>
    </main>
  );
}
