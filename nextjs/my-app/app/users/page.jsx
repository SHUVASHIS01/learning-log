import Link from "next/link";

export const metadata = {
    title: "User",
    description: "...",
};
export default async function usersPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    return (
        <div>
            <h2>Users dekhaitesi dara</h2>
            <div className="grid grid-cols-3 gap-4">
                {users.map((user) => (
                    <div key={user.id} className="card card-dash bg-base-100 w-96">
                        <div className="card-body">
                            <h2 className="card-title">{user.name}</h2>
                            <p>
                                A card component has a figure, a body part, and inside body
                                there are title and actions parts
                            </p>
                            <div className="card-actions justify-end">
                                <Link href={`/users/${user.id}`}><button className="btn btn-primary">Email dekhao</button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}