"use client";

import { useState } from "react";
import { updateClothing } from "@/lib/actions";
import Link from "next/link";

export default function EditClient({ initialData, clothingId }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        
        const formData = new FormData(e.target);
        
        try {
            await updateClothing(clothingId, formData);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="text-sm breadcrumbs mb-6">
                <ul>
                    <li><Link href="/wardrobe">Wardrobe</Link></li>
                    <li><Link href={`/wardrobe/${clothingId}`}>{initialData.name}</Link></li>
                    <li>Edit</li>
                </ul>
            </div>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl mb-4">Edit Clothing Item</h2>
                    
                    {error && (
                        <div className="alert alert-error mb-4">
                            <span>{error}</span>
                        </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="form-control">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="text" name="name" required defaultValue={initialData.name} className="input input-bordered" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label"><span className="label-text">Category</span></label>
                                <select name="category" className="select select-bordered" required defaultValue={initialData.category}>
                                    <option value="T-Shirt">T-Shirt</option>
                                    <option value="Shirt">Shirt</option>
                                    <option value="Jeans">Jeans</option>
                                    <option value="Pants">Pants</option>
                                    <option value="Shorts">Shorts</option>
                                    <option value="Hoodie">Hoodie</option>
                                    <option value="Jacket">Jacket</option>
                                    <option value="Shoes">Shoes</option>
                                    <option value="Accessories">Accessories</option>
                                </select>
                            </div>
                            
                            <div className="form-control">
                                <label className="label"><span className="label-text">Season</span></label>
                                <select name="season" className="select select-bordered" required defaultValue={initialData.season}>
                                    <option value="All Seasons">All Seasons</option>
                                    <option value="Summer">Summer</option>
                                    <option value="Winter">Winter</option>
                                    <option value="Spring">Spring</option>
                                    <option value="Autumn">Autumn</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label"><span className="label-text">Color</span></label>
                            <input type="text" name="color" required defaultValue={initialData.color} className="input input-bordered" />
                        </div>
                        
                        <div className="form-control">
                            <label className="label"><span className="label-text">Image URL (Optional)</span></label>
                            <input type="url" name="image" defaultValue={initialData.image} className="input input-bordered" />
                        </div>
                        
                        <div className="form-control">
                            <label className="label"><span className="label-text">Notes (Optional)</span></label>
                            <textarea name="notes" defaultValue={initialData.notes} className="textarea textarea-bordered h-24"></textarea>
                        </div>
                        
                        <div className="form-control mt-6 flex-row gap-4">
                            <button type="submit" className="btn btn-primary flex-1" disabled={loading}>
                                {loading ? <span className="loading loading-spinner"></span> : "Save Changes"}
                            </button>
                            <Link href={`/wardrobe/${clothingId}`} className="btn btn-outline flex-1">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
