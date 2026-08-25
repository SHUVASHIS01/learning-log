import Link from "next/link";

const BookCard = ({ books }) => {
  const { title, author } = books;
  return (
    <div className="card card-dash bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{books.description}</p>
        <div className="card-actions justify-end">
          <Link href={`/books/${books.id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
