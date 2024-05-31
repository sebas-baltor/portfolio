"use client"
import Navbar from "../components/Navbar";
import Main from "@/components/home/Main";
import Skills from "@/components/home/Skills";
import Experience from "@/components/home/Experience/Experience";
import Contact from "@/components/home/Contact";
import Footer from "@/components/Footer";

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
