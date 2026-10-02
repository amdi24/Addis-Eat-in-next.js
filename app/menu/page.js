"use client";

import { useState } from "react";
import Link from "next/link";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";

export default function MenuPage() {
  const [category, setCategory] = useState("all");

  return (
    <main>
      <nav>
        <Link href="/">Home</Link>
        <br />
        <Link href="/cart">Cart</Link>
        <br />
        <Link href="/checkout">Checkout</Link>
      </nav>
      <h1>Our Menu</h1>

      <CategoryBar
        category={category}
        setCategory={setCategory}
      />

      <DishList category={category} />
    </main>
  );
}