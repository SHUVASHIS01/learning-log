import Link from "next/link";
import { blogs } from "./blogs";
export const metadata = {
    title: "Blogs",
    description: "...",
};

export default function blogsPage() {
  return (
    <div>
        <h2 className="text-3xl font-bold mb-4">Blogs</h2>
          {blogs.map(blog => <div key = {blog.id}>
           <h3>{blog.title}</h3>
            <Link href={`/blogs/${blog.id}`}>Show details </Link>
           </div> )}
    </div>
  );
}
