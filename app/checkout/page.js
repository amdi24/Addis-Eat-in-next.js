import Link from "next/link";

export default function CheckoutPage() {
  return (
    <main>
      <Link href="/">Home</Link>
      <br />
      <Link href="/menu">Menu</Link>
      <br />
      <Link href="/cart">Cart</Link>
      <h1>Checkout</h1>
      <p>Complete your order here.</p>
    </main>
  );
}