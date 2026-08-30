"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="alert alert-error flex-col items-start p-6">
            <h3 className="font-bold text-lg">Something went wrong!</h3>
            <p>{error.message}</p>
            <button
                className="btn mt-4"
                onClick={() => reset()}
            >
                Try again
            </button>
        </div>
    );
}
