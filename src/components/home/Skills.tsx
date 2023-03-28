import styles from "@/style";
import { TypingText } from "./TypingText";
import TagCloud from "TagCloud";
import {useEffect,useRef} from "react";

export default function Skills() {
  const sphereContainer = useRef(null);
  useEffect(()=>{
    const technologies = [
      "JavaScript","React","Node","Express","CSS","HTML","SASS","Mongo DB","MYSQL","SQL Server","C#",".Net"
    ];
    const options = {
      radius:150,
      itemClass:"text-secondary",
      maxSpeed:"fast"
    };
    TagCloud(sphereContainer.current,technologies,options)
  },[])
  return (
    <section className="bg-light" id="skills">
      <div className={`${styles.paddings} h-screen`}>
        <div
          className={`${styles.innerWidth} ${styles.flexColCenter} mx-auto h-full gap-12`}
        >
          <TypingText title="Skills" />
          <div
            className={`flex flex-col md:flex-row justify-center items-center flex-wrap gap-6 w-full`}
          >
            <p className="w-full lg:max-w-[500px] text-primary text-lg md:text-2xl text-justify tracking-widest leading-loose">
              I started developing software in the year 2020, since I love to
              create value out of nothing, and over time I have gained some
              experience of working with some of these technologies.
            </p>
            <div
            ref={sphereContainer}
            >
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
