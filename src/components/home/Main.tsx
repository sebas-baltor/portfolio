import styles from "@/style";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import MainTitle from "../const/MainTitle";
import Paragraph from "../const/Paragraph";


export default function Main() {
  return (
    <main className={`overflow-hidden h-screen w-full relative bg-squares-patterns`}>
      <div
        className={`flex justify-center items-center ${styles.paddings} h-screen`}
      >
        <div
          className={`${styles.innerWidth} flex flex-col gap-20 z-10`}
        >
          <div
            className={`w-full text-white text-lg gap-3 md:text-2xl lg:text-4xl lg:gap-4`}
          >
            <span className="bg-sky-500/60 rounded-full text-white border-2 border-sky-600 px-3 py-1 text-xs font-bold">Open To Work</span>
            <MainTitle grayText="Hi, my name is" highlightText="Sebastián" />
            <div className="w-full lg:w-1/2">
              <Paragraph className="lg:text-2xl" text={`I'm a full-stack developer with ${new Date().getFullYear() - 2021}+ years of experience, a fan of exploring new technologies and JavaScript.`} />
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <a target={"_blank"} href={"https://github.com/sebas-baltor"} className="flex items-center flex-nowrap gap-2 px-3 py-1 rounded-md bg-secondary/80 hover:bg-secondary transition border-2 border-secondary text-primary font-bold">
              <BsGithub /> Github
            </a>
            <a target={"_blank"} href={"https://www.linkedin.com/in/sebastian-baltazar-b76232209"} className="flex items-center flex-nowrap gap-2 px-3 py-1 rounded-md bg-secondary/80 hover:bg-secondary transition border-2 border-secondary text-primary font-bold">
              <BsLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="z-1 absolute bg-gradient-to-t from-primary to-transparent w-full bottom-0 left-0 h-[100px]"></div>
      <div className="z-1 bg-glows absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"></div>
      <div className="z-1 bg-glows absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[1200px] h-[1200px] rounded-full"></div>
    </main>
  );
}