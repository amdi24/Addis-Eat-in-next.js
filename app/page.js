import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to Addis Eats</h1>

      <p>Order delicious Ethiopian food.</p>

      <Link href="/menu">Go to Menu</Link>
    </main>
  );
}