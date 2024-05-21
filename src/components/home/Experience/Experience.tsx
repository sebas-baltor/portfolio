import styles from "@/style";
import { TypingText } from "../../const/TypingText";

import TimelineItem from "./TimelineItem";




export default function Experience() {
  return (
    <section id="exp">
      <div className={`${styles.paddings}`}>
        <div
          className={`${styles.innerWidth} mx-auto`}
        >
          <TypingText title="Experience" />

          <ol className="border-l-2 border-secondary ml-5 mt-8 relative">
            <TimelineItem date="2022" description="Years later, my curiosity has flourished, and I've challenged myself to learn all I can. This year, a company contacted me to design and implement the frontend for certain parts of their application." title="EXA Solutions" imgSrc="/assets/axa-education.jpg"/>
            <TimelineItem date="2023" description="I began as a backend developer with .NET, creating a series of financial calculators. Later, I transitioned to experimenting with different technologies, including Windows Forms and Xamarin, all using C#." title="ASFIES" imgSrc="/assets/asfies.jpg"/>
            <TimelineItem date="2024" description="I joined the team as a full-stack developer, leveraging my knowledge from the .NET ecosystem. Quickly adapting, I transitioned to PHP, mastering Laravel and Livewire. Additionally, I deployed an application with Azure." title="FAW ELAM" imgSrc="/assets/web-plant.jpg"/>
            {/* <TimelineItem date="now" description="I started a proyect to become the next ERP for all the intern process for the company with React and Livewire" title="Fflowing"/> */}
          </ol>
        </div>
      </div>
    </section>
  );
}
