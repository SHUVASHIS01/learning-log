import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import WardrobeClient from "./WardrobeClient";

// Cache fetching strategy: no-store because lastWorn data changes often 
// and we want fresh data on each request to this dashboard.
export const dynamic = "force-dynamic";

export default async function WardrobePage() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session || !session.user) {
        redirect("/sign-in");
    }

    const API_URL = process.env.API_URL || "http://localhost:5000/api";
    
    console.log("Fetching clothes for session.user.id:", session.user.id);
    
    // Fetch user's wardrobe from the backend
    const res = await fetch(`${API_URL}/clothes`, {
        headers: {
            'x-user-id': session.user.id
        },
        cache: 'no-store'
    });

    if (!res.ok) {
        throw new Error("Failed to load wardrobe");
    }

    const clothes = await res.json();

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold">Your Wardrobe</h1>
                    <p className="text-neutral-content">Welcome back, {session.user.name.split(' ')[0]} 👋</p>
                </div>
            </div>
            
            <WardrobeClient initialClothes={clothes} />
        </div>
    );
}
