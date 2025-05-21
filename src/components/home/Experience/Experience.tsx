import ExperienceCard from "./ExperienceCard";
import { TypingText } from "@/components/const/TypingText";

const projects = [
  {
    title: "EXA Solutions",
    date: "2022",
    description:
      "Years later, my curiosity has flourished, and I've challenged myself to learn all I can. This year, a company contacted me to design and implement the frontend for certain parts of their application.",
    imgSrc: "/assets/axa-education.jpg",
    link: "https://exa.com.mx/",
  },
  {
    title: "ASFIES",
    date: "2023",
    description:
      "I began as a backend developer with .NET, creating a series of financial calculators. Later, I transitioned to experimenting with different technologies, including Windows Forms and Xamarin, all using C#.",
    imgSrc: "/assets/asfies.jpg",
  },
  {
    title: "FAW ELAM",
    date: "2024",
    description:
      "I joined the team as a full-stack developer, leveraging my knowledge from the .NET ecosystem. Quickly adapting, I transitioned to PHP, mastering Laravel and Livewire. Additionally, I deployed an application with Azure.",
    imgSrc: "/assets/faw.jpg",
  },
  // Add more project objects as needed...
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <TypingText title="Experience" />
        <div className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ExperienceCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
