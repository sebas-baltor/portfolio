import styles from "@/style";
import { useRef } from "react";
import RollText from "./RollText";
import { motion,useScroll } from "framer-motion";
import { Sacramento } from "next/font/google";
import {MdDoubleArrow} from "react-icons/md";

const sacramento = Sacramento({ weight: "400", subsets: ["latin"] });

export default function Main() {
  const mainRef = useRef(null);
  const {scrollY } = useScroll({ target: mainRef });

  return (
    <main
      className={`overflow-hidden h-screen w-full bg-primary relative py-[80vh]`}
      ref={mainRef}
    >
      <RollText text="FRONTEND BACKEND WEB DEV" baseVelocity={-2} />
      <RollText text="FULL STACK DEVELOPER FRONTEND" baseVelocity={2} />
      <motion.div
        className={`${styles.flexColCenter} gap-12 absolute top-0 right-0 text-white text-6xl h-screen max-h-screen w-full`}
        style={{ y: scrollY }}
      >
        <div className={`${styles.flexColCenter} text-white text-4xl lg:text-7xl lg:gap-4`}>
          <span>Hi, my name is</span>
          <span className="text-4xl lg:text-7xl font-bold">Sebastián</span>
          <span className="text-center">
            and it would be great if we work together
          </span>
        </div>
        <a
        href="#skills"
          className={`${sacramento.className} text-white text-4xl bg-secondary py-2 px-6 rounded-xl hover:shadow-xl hover:bg-secondary-contrast lg:text-5xl`}
        >
          About me
        </a>
        <div
          className={`${styles.flexCenter} relative text-6xl text-secondary rotate-90`}
        >
          <motion.span
            className="absolute "
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
