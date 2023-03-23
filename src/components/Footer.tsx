import styles from "@/style";
import { Sacramento } from "next/font/google";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const sacramento = Sacramento({ weight: "400", subsets: ["latin"] });
export default function Footer() {
  return (
    <footer className="h-[10vh] bg-primary">
      <div
        className={`${styles.innerWidth} h-full mx-auto flex justify-between items-center text-white text-lg md:text-2xl px-4`}
      >
        <span className={`${sacramento.className}`}>From MX to the 🗺️</span>
        <div className="flex gap-2">
          <a href="https://github.com" target="_blank" className="hover:text-secondary">
            <BsGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-secondary">
            <BsLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
