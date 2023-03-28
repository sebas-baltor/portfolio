import {motion} from "framer-motion";
import { typing,text } from "@/utils/motion";

import { Poppins } from 'next/font/google'

const raleway = Poppins({weight:"400",subsets:["latin"]});

export const TypingText = ({title}:{title:string}) => (
    <motion.p
      variants={typing}
      className={` ${raleway.className} text-4xl lg:text-6xl text-primary text-center font-semibold `}
      initial="hidden"
      whileInView="visible"
    >
      {Array.from(title).map((letter, index) => (
        <motion.span
        variants={text}
        key={index}
        >
          {letter===" "?'\u00A0':letter}
        </motion.span>
      ))}
    </motion.p>
  );