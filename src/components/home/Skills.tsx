import styles from "@/style";
import { TypingText } from "./TypingText";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import { useRef } from "react";

export default function Skills() {
  const sphereContainer = useRef<HTMLDivElement>(null);
  return (
    <section className="bg-light" id="skills">
      <div className={`${styles.paddings} h-screen`}>
        <div
          className={`${styles.innerWidth} ${styles.flexColCenter} mx-auto h-full gap-12 lg:gap-0 overflow-hidden`}
        >
          <TypingText title="Skills" />
          <div
            ref={sphereContainer}
            className={`flex flex-col lg:flex-row justify-center items-center flex-nowrap gap-6 lg:gap-0 w-full`}
          >
            <div className="w-full lg:max-w-[500px] ">
              <h3 className="text-secondary text-2xl lg:text-4xl font-black mb-4">Short history...</h3>
              <p className="text-primary text-lg md:text-2xl text-justify tracking-widest leading-loose">
                I started developing software in the year 2020, since I love to
                create value out of nothing, and over time I have gained some
                experience of working with some of these technologies.
              </p>
            </div>
            <TagCloud
              options={(w: Window & typeof globalThis): TagCloudOptions => ({
                radius: w.innerWidth > 1000 ? w.innerWidth / 6 : w.innerWidth / 3,
                maxSpeed: "fast",
                itemClass: "text-primary tracking-wider hover:font-black",
                keep:false
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
          </div>
        </div>
      </div>
    </section>
  );
}
