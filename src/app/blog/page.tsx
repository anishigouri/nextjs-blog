import { BlogList } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";

export default function BlogPListPage() {

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div>
      <BlogList posts={sortedPosts} />
    </div>
  );
}