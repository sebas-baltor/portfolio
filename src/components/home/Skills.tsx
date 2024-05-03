import styles from "@/style";
import { TypingText } from "./TypingText";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import { useRef } from "react";

export default function Skills() {
  const sphereContainer = useRef<HTMLDivElement>(null);
  return (
    <section id="skills">
      <div className={`${styles.paddings} h-screen bg-primary relative overflow-hidden`}>
        <div
          className={`${styles.innerWidth} ${styles.flexColCenter} mx-auto h-full gap-12 lg:gap-0 overflow-hidden`}
        >
          <TypingText title="Skills" />
          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            <div className="bg-red-300">hola</div>
            <div className="bg-red-300">hola</div>
            <div className="bg-red-300">hola</div>
            <div className="bg-red-300">hola</div>
          </div>

          {/* <div
            ref={sphereContainer}
            className={`flex flex-col lg:flex-row justify-center items-center flex-nowrap gap-6 lg:gap-0 w-full`}
          >
            <div className="w-full lg:max-w-[500px] ">
              <span className="mb-6 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block">
                <h3 className="relative text-secondary text-2xl lg:text-4xl font-black ">
                  Short history...
                </h3>
              </span>
              <p className="text-primary text-lg md:text-2xl text-justify tracking-widest leading-loose">
                I started developing software in the year 2020, since I love to
                create value out of nothing, and over time I have gained some
                experience of working with some of these technologies.
              </p>
            </div>
            <TagCloud
              options={(w: Window & typeof globalThis): TagCloudOptions => ({
                radius:
                  w.innerWidth > 1000 ? w.innerWidth / 6 : w.innerWidth / 3,
                maxSpeed: "fast",
                itemClass: "text-primary tracking-wider hover:font-black hover:line-through decoration-secondary decoration-2",
                keep: false,
              })}
              onClickOptions={{ passive: true }}
            >
              {[
                "C#",
                "JavaScript",
                "React",
                "Node",
                "Express",
                "Next",
                "HTML",
                "CSS",
                "SASS",
                "Tailwindcss",
                "Bootstrap",
                "Git",
                "npm",
                "Sanity",
                "Mongo DB",
                "MySQL",
                "SQL Server",
              ]}
            </TagCloud>
          </div> */}
        </div>
        <div className="z-1 bg-glows absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"></div>
      </div>
    </section>
  );
}
