"use client";

import { useState } from "react";
import { createClothing } from "@/lib/actions";
import Link from "next/link";

export default function AddClothingPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        
        const formData = new FormData(e.target);
        
        try {
            await createClothing(formData);
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
                    <li>Add Item</li>
                </ul>
            </div>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl mb-4">Add New Clothing Item</h2>
                    
                    {error && (
                        <div className="alert alert-error mb-4">
                            <span>{error}</span>
                        </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="form-control">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="text" name="name" required className="input input-bordered" placeholder="e.g. Black T-Shirt" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label"><span className="label-text">Category</span></label>
                                <select name="category" className="select select-bordered" required>
                                    <option value="" disabled selected>Select Category</option>
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
                                <select name="season" className="select select-bordered" required>
                                    <option value="" disabled selected>Select Season</option>
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
                            <input type="text" name="color" required className="input input-bordered" placeholder="e.g. Black" />
                        </div>
                        
                        <div className="form-control">
                            <label className="label"><span className="label-text">Image URL (Optional)</span></label>
                            <input type="url" name="image" className="input input-bordered" placeholder="https://..." />
                        </div>
                        
                        <div className="form-control">
                            <label className="label"><span className="label-text">Notes (Optional)</span></label>
                            <textarea name="notes" className="textarea textarea-bordered h-24" placeholder="Comfortable cotton shirt..."></textarea>
                        </div>
                        
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary" disabled={loading}>
                                {loading ? <span className="loading loading-spinner"></span> : "Add Item"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
