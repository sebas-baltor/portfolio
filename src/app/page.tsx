"use client"
import Navbar from "../components/Navbar";
import Main from "@/components/home/Main";
import Skills from "@/components/home/Skills";
import Experience from "@/components/home/Experience";
import Contact from "@/components/home/Contact";
import Footer from "@/components/Footer";
import MainTitle from "@/components/const/MainTitle";
import { Inter } from "next/font/google";

const inter = Inter({ weight: "900", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Main/>
      <Skills/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  );
}
