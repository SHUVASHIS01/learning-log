export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/books");
  const books = await res.json();
  return books.slice(0,3).map((book) => ({ bbokid: book.id }));
};

const BookDetl = async ({ params }) => {
  const { bbokid } = await params;
  const res = await fetch("http://localhost:5000/books/${bbokid}");
  const { title, aauthor, price } = await res.json();
  return (
    <div>
      <h2>books: {bbokid}</h2>
    </div>
  );
};

export default BookDetl;
