"use client";

import { useRef } from "react";
import Image from "next/image";
import { blogPostData } from "@/lib/data";
import { useScroll, useTransform } from "framer-motion";

type BlogPostCardProps = (typeof blogPostData)[number];
export default function BlogPostCard({
  title,
  description,
  tags,
  imageUrl,
}: BlogPostCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <div ref={ref} className=" group mb-8 sm:mb-12">
      <section className="relative flex h-80 flex-col overflow-hidden rounded-lg shadow-md">
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute inset-0 z-0
          bottom-0 left-0 w-full h-full object-cover"
        />
        \
        <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white backdrop-blur-sm bg-black/30">
          <h3 className="text-2xl font-semibold ">{title}</h3>
          <p className="mt-2 leading-relaxed">{description}</p>
        </div>
        \
      </section>
    </div>
  );
}
