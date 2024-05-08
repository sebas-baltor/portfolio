import styles from "@/style";
import { TypingText } from "../const/TypingText";
import Box from "../const/Box";

export default function Skills() {
  return (

    <section id="skills" className={`w-full relative overflow-hidden`}>
      <div
        className={`${styles.paddings}`}
      >
        <div
          className={`${styles.innerWidth} mx-auto relative z-10`}
        >
          <TypingText title="Skills" />
          <div className="grid grid-cols-2 grid-rows-3 gap-4 h-full w-full mt-8 md:grid-cols-3 md:grid-rows-2">
            <Box className="col-span-2 md:" title="JavaScript"  paragraphs={["Probably my favorite language to work with is JavaScript; the ecosystem is amazing. Most of my learning projects start with this incredible language. I have tested Next.js, Nest.js, React, Astro, and Node.js."]}/>
            <Box className="row-span-2" title="More"  paragraphs={["Essentially, I know CSS and HTML, and I have worked with Bootstrap, Tailwind CSS, and SASS.","Also, as a frontend developer, I have experience in designing and prototyping with Figma."]}/>
            <Box  title="C#" paragraphs={["It changed my mind and opened me up to work with new technologies and frameworks like .NET."]}/>
            <Box title="PHP" paragraphs={["Thanks to Laravel, I shifted my perspective on PHP and explored numerous new technologies for creating reactive interfaces."]}/>
          </div>
        </div>
      </div>
      <div className="z-1 bg-glows absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"></div>
    </section>
  );
}
