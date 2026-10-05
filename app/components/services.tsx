"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInview } from "@/lib/hooks";

export default function Services() {
  const { ref } = useSectionInview("Services");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-180 text-center leading-8 sm:mb-40 scroll-mt-26"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="services"
    >
      <SectionHeading>My Philosophy</SectionHeading>
      <p className="text-center max-w:45rem mb-4">
        Design should spark joy and inspire creativity. I believe in creating
        designs that are not only visually appealing but also functional and
        intuitive.
      </p>
      <p className="text-center max-w:45rem mb-4">
        I believe there is a difference between a good design and a great
        design. A good design is visually appealing, but a great design is one
        that solves a problem, evokes emotion, and leaves a lasting impression.
      </p>
    </motion.section>
  );
}
