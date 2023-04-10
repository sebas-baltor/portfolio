import styles from "../style/index.js";
import { Sacramento } from "next/font/google";

const sacramento = Sacramento({ weight: "400", subsets: ["latin"] });

export default function Navbar() {
  return (
    <nav
      className={`${sacramento.className} w-full bg-primary sticky -top-[1px] px-4 py-2 text-secondary text-xl md:text-2xl lg:text-3xl z-20 border-t-2 border-secondary`}
    >
      <div
        className={`${styles.innerWidth} w-full mx-auto flex justify-between`}
      >
        <a
          href="#skills"
          className="hover:underline decoration-1"
        >
          Skills
        </a>
        <a
          href="#exp"
          className="hover:underline decoration-1"
        >
          Experience
        </a>
        <a
          href="#contact"
          className="hover:underline decoration-1"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
