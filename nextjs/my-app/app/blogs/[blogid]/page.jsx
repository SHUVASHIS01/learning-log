import { notFound } from "next/navigation";
import { blogs } from "../blogs";
export const metadata = {
    title: "Blogs",
    description: "...",
};

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
//If the rendering happens on the client side it's called CSR, aand if it happens on the server side it's caled SSR
//server shudhu html send kore, javascript html e attach kore dewa hydrations