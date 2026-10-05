import { getSortedPostsData } from "@/lib/posts";
import React from "react";

export default async function BlogPosts() {
  const posts = await getSortedPostsData();

  console.log("posts", posts);
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        );
      })}
      ;
    </div>
  );
}
