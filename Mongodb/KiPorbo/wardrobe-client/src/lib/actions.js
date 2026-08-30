"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "./auth";

const API_URL = process.env.API_URL || "http://localhost:5000/api";

async function getAuthUserId() {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    if (!session || !session.user) {
        throw new Error("Unauthorized");
    }
    return session.user.id;
}

export async function createClothing(formData) {
    const userId = await getAuthUserId();
    const rawData = Object.fromEntries(formData);
    
    // Add validation if needed
    const res = await fetch(`${API_URL}/clothes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-user-id': userId
        },
        body: JSON.stringify({
            name: rawData.name,
            category: rawData.category,
            color: rawData.color,
            season: rawData.season,
            image: rawData.image,
            notes: rawData.notes
        })
    });

    if (!res.ok) {
        let errMessage = "Failed to create";
        try {
            const errData = await res.json();
            errMessage = errData.error || errMessage;
        } catch(e) {
            // handle html error
            console.error("Non-JSON response from server", e);
        }
        throw new Error(errMessage);
    }

    revalidatePath('/wardrobe');
    redirect('/wardrobe');
}

export async function updateClothing(clothingId, formData) {
    const userId = await getAuthUserId();
    const rawData = Object.fromEntries(formData);
    
    const res = await fetch(`${API_URL}/clothes/${clothingId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'x-user-id': userId
        },
        body: JSON.stringify({
            name: rawData.name,
            category: rawData.category,
            color: rawData.color,
            season: rawData.season,
            image: rawData.image,
            notes: rawData.notes
        })
    });

    if (!res.ok) {
        throw new Error("Failed to update");
    }

    revalidatePath('/wardrobe');
    revalidatePath(`/wardrobe/${clothingId}`);
    redirect(`/wardrobe/${clothingId}`);
}

export async function deleteClothing(clothingId) {
    const userId = await getAuthUserId();
    
    const res = await fetch(`${API_URL}/clothes/${clothingId}`, {
        method: 'DELETE',
        headers: {
            'x-user-id': userId
        }
    });

    if (!res.ok) {
        let errMessage = "Failed to delete";
        try {
            const errData = await res.json();
            errMessage = errData.error || errMessage;
        } catch(e) {}
        throw new Error(errMessage);
    }

    revalidatePath('/wardrobe');
    redirect('/wardrobe');
}

export async function markAsWorn(clothingId) {
    const userId = await getAuthUserId();
    
    const res = await fetch(`${API_URL}/clothes/${clothingId}/worn`, {
        method: 'PATCH',
        headers: {
            'x-user-id': userId
        }
    });

    if (!res.ok) {
        throw new Error("Failed to mark as worn");
    }

    revalidatePath('/wardrobe');
    revalidatePath(`/wardrobe/${clothingId}`);
}
