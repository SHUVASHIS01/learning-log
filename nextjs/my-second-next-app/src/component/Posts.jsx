const Posts = async ({ postsPromise }) => {
  const posts = await postsPromise;
  return (
    <div>
        <h2 className="text-4xl">Posts: {posts.length}</h2>
    </div>
  );
};

export default Posts;