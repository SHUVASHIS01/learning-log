"use client";

import { useState } from "react";
import { markAsWorn } from "@/lib/actions";

export default function MarkWornButton({ clothingId }) {
    const [loading, setLoading] = useState(false);

    const handleMarkWorn = async () => {
        setLoading(true);
        try {
            await markAsWorn(clothingId);
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button 
            className="btn btn-primary" 
            onClick={handleMarkWorn}
            disabled={loading}
        >
            {loading ? <span className="loading loading-spinner loading-sm"></span> : "👕 Mark as Worn"}
        </button>
    );
}
