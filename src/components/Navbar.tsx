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
        className={`flex gap-6 bg-gradient-to-t from-gray-blue-top to-gray-blue-bot px-10 py-3 rounded-2xl text-base backdrop-blur-sm shadow-md`}
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
