"use client";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Main from "@/components/home/Main";
import Skills from "@/components/home/Skills";
import Experience from "@/components/home/Experience";

export default function Home() {
  return (
    <>
      <Main />
      <Navbar />
      <Skills/>
      <Experience/>
      <section className="h-screen">adios</section>
    </>
  );
}
