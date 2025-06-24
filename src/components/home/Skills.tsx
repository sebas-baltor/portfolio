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
          <div className="grid grid-cols-1 grid-rows-3 gap-4 h-full w-full mt-8 md:grid-cols-3 md:grid-rows-2">
            <Box className="md:col-span-2 " title="❤️‍🔥​ JavaScript"  paragraphs={[`JavaScript and Typescript my most relevant language​. Most of my learning projects start with this incredible language. I have build with Next.js (13, 14 ,15), Nest.js, React (16, 17, 18, testing 19), Astro, and Node.js.`]}/>
            <Box className="row-start-4 md:row-span-2 align-baseline" title="😎​ Certifications and Badges" paragraphs={["AWS Cloud Practitioner"]} imgSrc={"https://private-user-images.githubusercontent.com/92797860/422583605-112303a1-6465-4d3b-acd0-0d15367ccfb4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA3NDYzNjIsIm5iZiI6MTc1MDc0NjA2MiwicGF0aCI6Ii85Mjc5Nzg2MC80MjI1ODM2MDUtMTEyMzAzYTEtNjQ2NS00ZDNiLWFjZDAtMGQxNTM2N2NjZmI0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjI0VDA2MjEwMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNiOGUzYjg4ZGQ3OWYzZjlkNWI4MWMwZjhhZTU5NTU5NTM5NDdhMzQ5NTI4ODIwYjE3Njk2MWQ5NjdhNmJiZTMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.wVYC4lCKytSQpB67XesiP4Z3jNIsfNI9DT-FreSRpn4"} />
            <Box className="md:row-span-2" title="💥​ .NET" paragraphs={["It changed my mind and opened me up to work with new technologies and frameworks like WindowsForms, Xamarin or .NET Framework"]}/>
            <Box title="🤔​ Databases" paragraphs={["I have worked with MySql, SQL SERVER, Postgresql and ¡MongoDB!"]}/>
            <Box className="md:col-span-2" title="🤖​ Generative AI" paragraphs={["I have worked with OpenAI API, LLMs and MCPs."]}/>
            <Box title="☁️​ Clouds" paragraphs={["I have worked with Azure, AWS"]}/>
          </div>
        </div>
      </div>
      <div className="z-1 bg-glows absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"></div>
    </section>
  );
}
