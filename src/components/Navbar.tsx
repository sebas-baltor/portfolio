import styles from "../style/index.js";
import { Sacramento } from "next/font/google";

const sacramento = Sacramento({ weight: "400", subsets: ["latin"] });
export default function Navbar() {
  return (
    <nav
      className={`${sacramento.className}  w-full bg-secondary sticky top-0 px-4 py-2 text-white text-xl md:text-4xl z-20`}
    >
      <div
        className={`${styles.innerWidth} w-full mx-auto flex justify-between`}
      >
        <a
          href="#skills"
          className="hover:text-primary hover:border-b-2 hover:border-primary border-b-2 border-secondary   "
        >
          Skills
        </a>
        <a
          href="#exp"
          className="hover:text-primary hover:border-b-2 hover:border-primary border-b-2 border-secondary"
        >
          Experience
        </a>
        <a
          href="#contact"
          className="hover:text-primary hover:border-b-2 hover:border-primary border-b-2 border-secondary"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
