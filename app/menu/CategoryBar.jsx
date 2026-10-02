"use client";

export default function CategoryBar({ category, setCategory }) {
  return (
    <div>
      <button onClick={() => setCategory("all")}>
        All
      </button>

      <button onClick={() => setCategory("food")}>
        Food
      </button>

      <button onClick={() => setCategory("vegetarian")}>
        Vegetarian
      </button>

      <button onClick={() => setCategory("meat")}>
        Meat
      </button>

      <p>Current category: {category}</p>
    </div>
  );
}