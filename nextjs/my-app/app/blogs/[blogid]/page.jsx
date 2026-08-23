import { notFound } from "next/navigation";
import { blogs } from "../blogs";

export default async function blogId({params}) {
    const {blogid} = await params
    const blog = blogs.find(blog => blog.id === parseInt(blogid));
    if (!blog) {
      notFound();
    }

  return (
    <div>
        {blog && <div>
            <h2>{blog.title}</h2>
             <p>{blog.description}</p>
            </div>}
    </div>
  );
}