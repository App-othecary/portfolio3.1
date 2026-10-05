"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiDownload } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { useActiveSectionContext } from "@/app/components/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";

export default function Intro() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Home");
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  return (
    <section
      className="mb-28 max-w-180 text-center leading-8 
    sm:mb-40
    scroll-mt-36"
      id="home"
      ref={ref}
    >
      <div className=" justify-center">
        <div className="flex justify-center">
          <div>
            <Image
              width={800}
              height={600}
              src="/intro-image.png"
              alt="Intro Image"
              quality={95}
              priority={true}
              className="rounded-lg shadow-lg mt-26"
            />
          </div>
        </div>

        <div className="text-center text-lg mt-4">
          <h1 className="text-3xl font-bold"> Welcome to My Portfolio</h1>
          <motion.p
            className="text-center mb-2"
            initial={{ opacity: 0, y: 100 }}
          >
            This is my portfolio website where I showcase my projects, skills,
            and services. Feel free to explore and get in touch!
          </motion.p>
        </div>
      </div>
      <div
        className="flex flex-col sm:flex-row 
      justify-center gap-2 mt-4 px-4 md:mt-6"
      >
        <Link
          href="#contact"
          className="flex group justify-center wrap
           bg-amber-950 hover:bg-mauve-700 text-white 
           hover:scale-105
           font-bold px-7 py-3 gap-2 rounded-full mt-4 
           align-items-center"
        >
          Contact Me{" "}
          <FaArrowRight className="opacity:70 translate-y-1  group-hover:translate-x-1" />
        </Link>
        <a
          className="flex group justify-center wrap
           bg-taupe-300  hover:bg-taupe-200 text-amber-900 hover:text-amber-950
           font-bold px-7 py-3 gap-2 rounded-full mt-4"
        >
          Download Resume{" "}
          <HiDownload className="opacity:60 translate-y-1 group-hover:translate-y-1.5" />
        </a>
        <a
          href="https://github.com/App-othecary"
          target="_blank"
          className="flex group justify-center wrap
           bg-taupe-300  hover:bg-taupe-200 text-amber-900 hover:text-amber-950
           font-bold px-7 py-3 gap-2 rounded-full mt-4 text-2xl"
        >
          <BsGithub className="opacity:60 translate-y-1 group-hover:translate-y-1.5" />
        </a>
      </div>
    </section>
  );
}
