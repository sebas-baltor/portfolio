import styles from "@/style";
import { TypingText } from "../const/TypingText";
import Box from "../const/Box";
import BoxVariant from "../const/BoxVariant";

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
          <div className="grid grid-cols-1 grid-rows-3 gap-4 h-full w-full mt-8 md:grid-cols-3 md:grid-rows-2">
            <BoxVariant className="md:col-span-2 " title="JavaScript"  paragraphs={[`Probably my favorite language to work with, the ecosystem is amazing. Most of my learning projects start with this incredible language. I have tested Next.js, Nest.js, React, Astro, and Node.js.`]}/>
            <Box className="row-start-4 md:row-span-2 align-baseline" title="More"  paragraphs={["Essentially, I know CSS and HTML, and I have worked with Bootstrap, Tailwind CSS, and SASS.","Also, as a frontend developer, I have experience in designing and prototyping with Figma."]}/>
            <Box  title=".NET" paragraphs={["It changed my mind and opened me up to work with new technologies and frameworks like WindowsForms, Xamarin or .NET Framework"]}/>
            <Box title="Databases" paragraphs={["I have worked with MySql, SQL SERVER and my favorite one a non-relational database ¡MongoDB!"]}/>
          </div>
        </div>
      </div>
      <div className="z-1 bg-glows absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"></div>
    </section>
  );
}
