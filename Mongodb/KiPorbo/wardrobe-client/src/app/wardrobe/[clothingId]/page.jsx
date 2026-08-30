import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getRotationStatus } from "@/lib/utils";
import DeleteButton from "./DeleteButton";
import MarkWornButton from "./MarkWornButton";

export default async function ClothingDetailsPage({ params }) {
    const { clothingId } = await params;
    
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session || !session.user) {
        redirect("/sign-in");
    }

    const API_URL = process.env.API_URL || "http://localhost:5000/api";
    
    const res = await fetch(`${API_URL}/clothes/${clothingId}`, {
        headers: {
            'x-user-id': session.user.id
        },
        cache: 'no-store'
    });

    if (!res.ok) {
        if (res.status === 404) {
            throw new Error("Clothing item not found.");
        }
        throw new Error("Failed to load clothing details.");
    }

    const item = await res.json();
    const status = getRotationStatus(item.lastWorn);

    return (
        <div className="max-w-2xl mx-auto">
            <div className="text-sm breadcrumbs mb-6">
                <ul>
                    <li><Link href="/wardrobe">Wardrobe</Link></li>
                    <li>{item.name}</li>
                </ul>
            </div>

            <div className="card bg-base-100 shadow-xl">
                {item.image && (
                    <figure className="max-h-96 bg-base-200">
                        <img src={item.image} alt={item.name} className="object-cover h-full w-full" />
                    </figure>
                )}
                <div className="card-body">
                    <h2 className="card-title text-3xl mb-4">{item.name}</h2>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <p className="text-sm text-neutral-content">Category</p>
                            <p className="font-medium">{item.category}</p>
                        </div>
                        <div>
                            <p className="text-sm text-neutral-content">Color</p>
                            <p className="font-medium">{item.color}</p>
                        </div>
                        <div>
                            <p className="text-sm text-neutral-content">Season</p>
                            <p className="font-medium">{item.season}</p>
                        </div>
                        <div>
                            <p className="text-sm text-neutral-content">Status</p>
                            <div className={`badge ${status.badgeClass} mt-1`}>{status.icon} {status.text}</div>
                        </div>
                        <div>
                            <p className="text-sm text-neutral-content">Last Worn</p>
                            <p className="font-medium">{item.lastWorn ? new Date(item.lastWorn).toLocaleDateString() : 'Never'}</p>
                        </div>
                        <div>
                            <p className="text-sm text-neutral-content">Times Worn</p>
                            <p className="font-medium">{item.timesWorn}</p>
                        </div>
                    </div>

                    {item.notes && (
                        <div className="mb-6">
                            <p className="text-sm text-neutral-content">Notes</p>
                            <p className="bg-base-200 p-4 rounded-lg mt-1">{item.notes}</p>
                        </div>
                    )}

                    <div className="card-actions justify-end mt-4 border-t pt-4">
                        <MarkWornButton clothingId={item._id} />
                        <Link href={`/wardrobe/${item._id}/edit`} className="btn btn-outline">Edit</Link>
                        <DeleteButton clothingId={item._id} />
                    </div>
                </div>
            </div>
        </div>
    );
}
