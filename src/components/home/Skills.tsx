import styles from "@/style";
import { TypingText } from "../const/TypingText";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import { useRef } from "react";
import { FaCode } from "react-icons/fa";
import Box from "../const/Box";

export default function Skills() {
  const sphereContainer = useRef<HTMLDivElement>(null);
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



    // <section id="skills" className={`${styles.paddings} h-screen overflow-hidden relative`}>
    //   <div
    //     className={`${styles.innerWidth} z-10`}
    //   >
    //     <div className=" h-full">
    //       <TypingText title="Skills" />
    //       <div className="grid grid-cols-2 grid-rows-3 gap-4 h-full w-full">
    //         <div className="col-span-2 bg-blue-300">hola</div>
    //         <div className="bg-red-300">hola</div>
    //         <div className="bg-red-300">hola</div>
    //         <div className="bg-red-300">hola</div>
    //         <div className="bg-red-300">hola</div>

    //       </div>
    //     </div>

    //     {/* <div
    //         ref={sphereContainer}
    //         className={`flex flex-col lg:flex-row justify-center items-center flex-nowrap gap-6 lg:gap-0 w-full`}
    //       >
    //         <div className="w-full lg:max-w-[500px] ">
    //           <span className="mb-6 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block">
    //             <h3 className="relative text-secondary text-2xl lg:text-4xl font-black ">
    //               Short history...
    //             </h3>
    //           </span>
    //           <p className="text-primary text-lg md:text-2xl text-justify tracking-widest leading-loose">
    //             I started developing software in the year 2020, since I love to
    //             create value out of nothing, and over time I have gained some
    //             experience of working with some of these technologies.
    //           </p>
    //         </div>
    //         <TagCloud
    //           options={(w: Window & typeof globalThis): TagCloudOptions => ({
    //             radius:
    //               w.innerWidth > 1000 ? w.innerWidth / 6 : w.innerWidth / 3,
    //             maxSpeed: "fast",
    //             itemClass: "text-primary tracking-wider hover:font-black hover:line-through decoration-secondary decoration-2",
    //             keep: false,
    //           })}
    //           onClickOptions={{ passive: true }}
    //         >
    //           {[
    //             "C#",
    //             "JavaScript",
    //             "React",
    //             "Node",
    //             "Express",
    //             "Next",
    //             "HTML",
    //             "CSS",
    //             "SASS",
    //             "Tailwindcss",
    //             "Bootstrap",
    //             "Git",
    //             "npm",
    //             "Sanity",
    //             "Mongo DB",
    //             "MySQL",
    //             "SQL Server",
    //           ]}
    //         </TagCloud>
    //       </div> */}
    //   </div>
    // </section>
  );
}
