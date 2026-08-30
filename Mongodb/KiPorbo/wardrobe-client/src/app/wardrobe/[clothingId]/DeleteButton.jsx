"use client";

import { useState } from "react";
import { deleteClothing } from "@/lib/actions";

export default function DeleteButton({ clothingId }) {
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this item?")) return;
        
        setLoading(true);
        try {
            await deleteClothing(clothingId);
        } catch (error) {
            alert(error.message);
            setLoading(false);
        }
    };

    return (
        <button 
            className="btn btn-error" 
            onClick={handleDelete}
            disabled={loading}
        >
            {loading ? <span className="loading loading-spinner loading-sm"></span> : "Delete"}
        </button>
    );
}
