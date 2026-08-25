import BookCard from "@/component/bookCard";

const Books = async () => {
  const res = await fetch("http://localhost:5000/books", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }
  const books = await res.json();
  if (!Array.isArray(books)) {
    throw new Error("Books API must return an array");
  }
  return (
    <div>
      <h2>Books: {books.length} </h2>
      <div>
        {books.map((book) => (
          <BookCard key={book.id} books={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
