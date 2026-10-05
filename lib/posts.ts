import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "blog-posts");

interface PostData {
  id: string;
  date: string;
  title: string;
  content: string;
  [key: string]: string; // for any extra frontmatter fields
}

export function getSortedPostsData(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData: PostData[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);

    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    console.log("matterResult", matterResult.content);

    return {
      id,
      ...matterResult.data,
      content: matterResult.content,
    } as PostData;
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
