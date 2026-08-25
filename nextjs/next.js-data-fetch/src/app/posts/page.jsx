const getPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

const PostPage = async () => {
  //     const res = await fetch ("https://jsonplaceholder.typicode.com/posts");
  //   const posts = await res.json();
  const posts = await getPost();
  return (
    <div>
      <h2>post ashtese..{posts.length} gula</h2>
    </div>
  );
};

export default PostPage;
