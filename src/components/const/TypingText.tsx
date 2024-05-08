import {motion} from "framer-motion";
import { typing,text } from "@/utils/motion";


export const TypingText = ({title}:{title:string}) => (
    <motion.p
      variants={typing}
      className={`inline-block text-lg lg:text-2xl font-semibold bg-gradient-to-r from-title-text-light to-title-text-dark text-transparent bg-clip-text leading-normal`}
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