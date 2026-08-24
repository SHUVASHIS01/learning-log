"use client";

import { useState } from "react";
import FoodCard from "@/component/FoodCard";

const FoodFilter = ({ foods }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const categories = ["all", ...new Set(foods.map((food) => food.category))];
  const filteredFoods = foods.filter((food) => {
    const matchesSearch = food.dish_name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category === "all" || food.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        <input
          className="input input-bordered w-full"
          type="search"
          placeholder="Search foods"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <select
          className="select select-bordered"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item === "all" ? "All categories" : item}
            </option>
          ))}
        </select>
      </div>

      <p className="mb-4">Showing {filteredFoods.length} foods</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {filteredFoods.map((food) => (
          <FoodCard food={food} key={food.id} />
        ))}
      </div>
    </>
  );
};

export default FoodFilter;
