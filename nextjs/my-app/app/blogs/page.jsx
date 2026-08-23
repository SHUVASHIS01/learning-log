import Link from "next/link";

export default function blogsPage() {
    const blogs = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "Shuvashis Basak",
    date: "August 20, 2026",
    category: "React",
    description:
      "Learn the basics of React, including components, props, state, and how to build interactive user interfaces.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  },
  {
    id: 2,
    title: "Understanding JavaScript Promises",
    author: "Shuvashis Basak",
    date: "August 18, 2026",
    category: "JavaScript",
    description:
      "A beginner-friendly guide to understanding JavaScript Promises and handling asynchronous operations.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
  },
  {
    id: 3,
    title: "Why Git and GitHub Matter",
    author: "Shuvashis Basak",
    date: "August 15, 2026",
    category: "Development",
    description:
      "Discover how Git and GitHub help developers manage code, collaborate with teams, and track project changes.",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498",
  },
  {
    id: 4,
    title: "Building Better Web Interfaces",
    author: "Shuvashis Basak",
    date: "August 12, 2026",
    category: "Web Development",
    description:
      "Explore some practical principles for creating clean, responsive, and user-friendly web interfaces.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
  },
];

  return (
    <div>
        <h2 className="text-3xl font-bold mb-4">Blogs</h2>
        {blogs.map(blog => <div key = {blog.id}>
           <h3>{blog.title}</h3>
           <Link href= "/">Show details </Link>
           </div> )}
    </div>
  );
}
