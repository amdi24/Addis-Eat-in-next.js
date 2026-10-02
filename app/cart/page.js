import Link from "next/link";

export default function CartPage() {
  return (
    <main>
        <Link href="/">Home</Link>
      <br />
      <Link href="/menu">Menu</Link>
      <br />
      <Link href="/checkout">Checkout</Link>
      <h1>Your Cart</h1>
      <p>Your cart is currently empty.</p>
    </main>
  );
}