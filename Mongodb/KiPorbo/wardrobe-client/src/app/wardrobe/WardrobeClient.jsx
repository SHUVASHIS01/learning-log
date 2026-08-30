"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { getRotationStatus } from "@/lib/utils";
import { markAsWorn } from "@/lib/actions";

export default function WardrobeClient({ initialClothes }) {
    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [seasonFilter, setSeasonFilter] = useState("All");
    const [sortBy, setSortBy] = useState("recentlyWorn");
    const [recommendation, setRecommendation] = useState(null);

    // Derived values
    const categories = ["All", ...new Set(initialClothes.map(c => c.category))];
    const seasons = ["All", ...new Set(initialClothes.map(c => c.season))];

    const stats = useMemo(() => {
        let recently = 0, needRotation = 0, unused = 0;
        initialClothes.forEach(c => {
            const status = getRotationStatus(c.lastWorn);
            if (status.type === 'good') recently++;
            else if (status.type === 'warning') needRotation++;
            else unused++;
        });
        return { total: initialClothes.length, recently, needRotation, unused };
    }, [initialClothes]);

    const filteredClothes = useMemo(() => {
        let result = [...initialClothes];
        
        // Filter by search
        if (search) {
            const s = search.toLowerCase();
            result = result.filter(c => c.name.toLowerCase().includes(s) || c.color.toLowerCase().includes(s));
        }
        
        // Filter by category
        if (categoryFilter !== "All") {
            result = result.filter(c => c.category === categoryFilter);
        }
        
        // Filter by season
        if (seasonFilter !== "All") {
            result = result.filter(c => c.season === seasonFilter);
        }

        // Sort
        result.sort((a, b) => {
            if (sortBy === "recentlyWorn") {
                return new Date(b.lastWorn || 0) - new Date(a.lastWorn || 0);
            }
            if (sortBy === "leastRecentlyWorn") {
                return new Date(a.lastWorn || 0) - new Date(b.lastWorn || 0);
            }
            if (sortBy === "mostWorn") {
                return b.timesWorn - a.timesWorn;
            }
            if (sortBy === "leastWorn") {
                return a.timesWorn - b.timesWorn;
            }
            return new Date(b.createdAt) - new Date(a.createdAt); // newest
        });

        return result;
    }, [initialClothes, search, categoryFilter, seasonFilter, sortBy]);

    const handleWhatShouldIWear = () => {
        // Algorithm: Find items that haven't been worn recently. 
        // Try to pick a Top (Shirt/T-Shirt/Hoodie) and a Bottom (Jeans/Pants).
        const candidates = initialClothes.filter(c => {
            const status = getRotationStatus(c.lastWorn);
            return status.type === 'warning' || status.type === 'danger';
        });
        
        if (candidates.length === 0) {
            setRecommendation(null);
            return;
        }
        
        // Simple selection logic
        const top = candidates.find(c => ["T-Shirt", "Shirt", "Hoodie", "Jacket"].includes(c.category)) || initialClothes.find(c => ["T-Shirt", "Shirt", "Hoodie", "Jacket"].includes(c.category));
        const bottom = candidates.find(c => ["Jeans", "Pants", "Shorts"].includes(c.category)) || initialClothes.find(c => ["Jeans", "Pants", "Shorts"].includes(c.category));
        const shoes = candidates.find(c => c.category === "Shoes") || initialClothes.find(c => c.category === "Shoes");
        
        setRecommendation([top, bottom, shoes].filter(Boolean));
    };

    return (
        <div>
            {/* Stats Dashboard */}
            <div className="stats shadow w-full mb-8 overflow-x-auto">
                <div className="stat">
                    <div className="stat-title">Total Items</div>
                    <div className="stat-value">{stats.total}</div>
                </div>
                <div className="stat">
                    <div className="stat-title text-success">Recently Worn</div>
                    <div className="stat-value text-success">{stats.recently}</div>
                </div>
                <div className="stat">
                    <div className="stat-title text-warning">Need Rotation</div>
                    <div className="stat-value text-warning">{stats.needRotation}</div>
                </div>
                <div className="stat">
                    <div className="stat-title text-error">Long Unused</div>
                    <div className="stat-value text-error">{stats.unused}</div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                <div className="flex flex-wrap gap-2">
                    <input 
                        type="text" 
                        placeholder="Search color or name..." 
                        className="input input-bordered w-full md:w-auto"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <select className="select select-bordered" value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}>
                        {categories.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <select className="select select-bordered" value={seasonFilter} onChange={e => setSeasonFilter(e.target.value)}>
                        {seasons.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <select className="select select-bordered" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                        <option value="recentlyWorn">Recently Worn</option>
                        <option value="leastRecentlyWorn">Least Recently Worn</option>
                        <option value="mostWorn">Most Worn</option>
                        <option value="leastWorn">Least Worn</option>
                        <option value="newest">Newest</option>
                    </select>
                </div>
                <div className="flex gap-2">
                    <button className="btn btn-secondary" onClick={handleWhatShouldIWear}>👕 What Should I Wear?</button>
                    <Link href="/wardrobe/add" className="btn btn-primary">+ Add Item</Link>
                </div>
            </div>

            {recommendation && (
                <div className="alert alert-info mb-8 flex-col items-start shadow-md">
                    <h3 className="font-bold text-lg">👕 TODAY'S OUTFIT RECOMMENDATION</h3>
                    <p>We've filtered your wardrobe to show only your recommended outfit for today. Click dismiss to see your full wardrobe again.</p>
                    <button className="btn btn-sm mt-2" onClick={() => setRecommendation(null)}>Dismiss Recommendation</button>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(recommendation || filteredClothes).length === 0 ? (
                    <div className="col-span-full text-center py-12 text-neutral-content">
                        No clothing items found.
                    </div>
                ) : (
                    (recommendation || filteredClothes).map(item => {
                        const status = getRotationStatus(item.lastWorn);
                        return (
                            <div key={item._id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
                                {item.image ? (
                                    <figure className="h-48 overflow-hidden bg-base-200">
                                        <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                                    </figure>
                                ) : (
                                    <figure className="h-48 bg-base-200 flex items-center justify-center">
                                        <span className="text-4xl">👕</span>
                                    </figure>
                                )}
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {item.name}
                                        <div className="badge badge-outline">{item.category}</div>
                                    </h2>
                                    <p className="text-sm text-neutral-content">{item.color} • {item.season}</p>
                                    
                                    <div className="mt-2 text-sm">
                                        <div>Last worn: {item.lastWorn ? new Date(item.lastWorn).toLocaleDateString() : 'Never'}</div>
                                        <div>Worn: {item.timesWorn} times</div>
                                        <div className={`mt-2 badge ${status.badgeClass}`}>{status.icon} {status.text}</div>
                                    </div>
                                    
                                    {recommendation && (
                                        <div className="mt-3 text-sm text-primary font-medium bg-primary/10 p-2 rounded-md">
                                            💡 <strong>Why this?</strong> {
                                                !item.lastWorn ? "You've never worn this item!" : 
                                                `It's been ${Math.floor(Math.abs(new Date() - new Date(item.lastWorn)) / (1000 * 60 * 60 * 24))} days since you last wore it.`
                                            }
                                        </div>
                                    )}
                                    
                                    <div className="card-actions justify-end mt-4">
                                        <button 
                                            className="btn btn-sm btn-outline"
                                            onClick={async () => await markAsWorn(item._id)}
                                        >
                                            Mark Worn
                                        </button>
                                        <Link href={`/wardrobe/${item._id}`} className="btn btn-sm btn-primary">Details</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    );
}
