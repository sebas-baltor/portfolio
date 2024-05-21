import { links } from "@/utils/links.js";
import { Inter } from "next/font/google";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useRef } from "react";
// const sacramento = Sacramento({ weight: "400", subsets: ["latin"] });
const inter = Inter({ weight: "300", subsets: ["latin"] });
export default function Navbar() {
  const responsiveNavRef = useRef<HTMLDivElement>(null);
  const opendNav = () => {
    responsiveNavRef.current?.classList.toggle("hidden");
  }
  return (
    <nav
      className={`${inter.className} bg-transparent w-full fixed top-0 md:top-3 md:px-4 md:py-2 text-text-light text-xl md:text-2xl lg:text-3xl z-20 flex md:justify-center md:items-center`}
    >
      <div className="md:hidden h-screen w-full relative" >
        <HiOutlineMenuAlt2 className="z-10 absolute top-4 left-4 text-2xl text-dark hover:text-secondary cursor-pointer" onClick={opendNav}/>
        <div className="absolute top-0 left-0 hidden bg-squares-patterns w-full h-full flex flex-col items-center justify-center gap-10" ref={responsiveNavRef}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-bold bg-gradient-to-r from-title-text-light to-title-text-dark text-transparent bg-clip-text leading-normal hover:tracking-wider transition-all duration-75"
              onClick={opendNav}            
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
      <div
        className={`hidden md:flex gap-6 bg-gradient-to-t from-gray-blue-top to-gray-blue-bot px-10 py-3 rounded-2xl text-base backdrop-blur-sm shadow-md`}
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
