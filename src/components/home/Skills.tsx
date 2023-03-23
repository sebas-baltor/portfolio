import styles from "@/style";
import { TypingText } from "./TypingText";
export default function Skills() {
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
            <p className="w-[250px] md:min-w-[437px] max-w-[500px] text-primary text-lg md:text-2xl text-justify tracking-widest leading-loose">
              I started developing software in the year 2020, since I love to
              create value out of nothing, and over time I have gained some
              experience of working with some of these technologies.
            </p>
            <div
              className={`w-[250px] h-[250px] md:h-[437px] md:w-[437px] lg:h-[400px] lg:w-[400px]`}
            >
              <div className="bg-secondary rounded-full h-full h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
