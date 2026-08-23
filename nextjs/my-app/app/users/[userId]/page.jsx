import Link from "next/link";
import { notFound } from "next/navigation";

export default async function UserDetails({ params }) {
  const { userId } = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!res.ok) {
    notFound();
  }

  const user = await res.json();

  return (
    <main className="mx-auto max-w-2xl p-8">
      <Link href="/users" className="btn btn-ghost mb-6">
        Back to users
      </Link>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="card-title text-3xl">{user.name}</h1>
          <p className="text-lg">{user.email}</p>
          <div className="mt-4 space-y-2">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p>
              <strong>Address:</strong> {user.address.street},{" "}
              {user.address.suite}, {user.address.city},{" "}
              {user.address.zipcode}
            </p>
            <p><strong>Company:</strong> {user.company.name}</p>
          </div>
        </div>
      </div>
    </main>
  );
}