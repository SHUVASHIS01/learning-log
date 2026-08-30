import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import EditClient from "./EditClient";

export default async function EditClothingPage({ params }) {
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
        throw new Error("Failed to load clothing details for editing.");
    }

    const item = await res.json();

    return <EditClient initialData={item} clothingId={clothingId} />;
}
