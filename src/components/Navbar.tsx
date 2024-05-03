import styles from "../style/index.js";
import { links } from "@/utils/links.js";
import { Inter } from "next/font/google";

// const sacramento = Sacramento({ weight: "400", subsets: ["latin"] });
const inter = Inter({ weight: "300", subsets: ["latin"] });
export default function Navbar() {
  return (
    <nav
      className={`${inter.className} bg-transparent w-full fixed top-3 px-4 py-2 text-text-light text-xl md:text-2xl lg:text-3xl z-20 flex justify-center items-center`}
    >
      <div
        className={`flex gap-7 bg-gradient-to-b from-gray-blue-top to-text-gray-blue-bot shadow-lg px-5 py-1 rounded-lg text-base backdrop-blur-sm`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-secondary transition"
          >
            {link.text}
          </a>
        
        ))}
      </div>
    </nav>
  );
}
