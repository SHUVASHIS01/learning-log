import Link from "next/link";
import { blogs } from "./blogs";
import { Roboto } from "next/font/google";
export const metadata = {
    title: "Blogs",
    description: "...",
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function blogsPage() {
  return (
    <div className={roboto.className}>
        <h2 className="text-3xl font-bold mb-4">Blogs</h2>
          {blogs.map(blog => <div key = {blog.id}>
           <h3>{blog.title}</h3>
            <Link href={`/blogs/${blog.id}`}>Show details </Link>
           </div> )}
    </div>
  );
}
