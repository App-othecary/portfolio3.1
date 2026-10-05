"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInview } from "@/lib/hooks";
import { getSortedPostsData } from "@/lib/posts";

export default function BlogPost() {
  const { ref } = useSectionInview("Blog", 0.5);
  return (
    <section
      ref={ref}
      id="blogpost"
      className="w-full max-w-full overflow-hiddenscroll-mt-28"
    >
      <SectionHeading>Blog Post</SectionHeading>
      <div></div>
    </section>
  );
}
