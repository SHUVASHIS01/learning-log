
import { Suspense } from "react";
import Posts from "../../component/Posts";

const PostPage = () => {
  const postsPromise = fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());

  return (
    <div>
        <Suspense fallback={<h2 className="text-3xl">Loading posts...</h2>}>
          <Posts postsPromise={postsPromise} />
        </Suspense>
    </div>
  );
};

export default PostPage;