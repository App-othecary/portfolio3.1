"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInview } from "@/lib/hooks";
import { getSortedPostsData } from "@/lib/posts";
import { blogPostData } from "@/lib/data";
import BlogPostCard from "./blogpost-card";

export default function BlogPost() {
  const { ref } = useSectionInview("Blog", 0.5);
  return (
    <section
      ref={ref}
      id="blogpost"
      className="w-full max-w-full overflow-hiddenscroll-mt-28"
    >
      <SectionHeading>Blog Post</SectionHeading>
      <div className="flex gap-6 overflow-x-auto px-4 pb-4 snap-x snap-mandatory">
        {" "}
        {blogPostData.map((post, index) => (
          <React.Fragment key={index}>
            <div className="w-80 shrink-0 snap-start">
              <BlogPostCard {...post} />
            </div>{" "}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
