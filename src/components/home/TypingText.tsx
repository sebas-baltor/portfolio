import {motion} from "framer-motion";
import { typing,text } from "@/utils/motion";
import { ReactElement } from "react";

// import { Sacramento } from 'next/font/google'

// const sacramento = Sacramento({weight:"400",subsets:["latin"]});

export const TypingText = ({title,child}:{title:string,child?:React.ReactNode}) => (
    <motion.p
      variants={typing}
      className={` text-4xl lg:text-6xl font-semibold bg-gradient-to-r from-text-dark to-text-light text-transparent bg-clip-text leading-normal`}
      initial="hidden"
      whileInView="visible"
    >
      {child}
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