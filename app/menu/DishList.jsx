import Link from "next/link";

const Dishes = [
  {
    id: 1,
    name: "Doro Wot",
    price: 109,
    category: "food",
  },
  {
    id: 2,
    name: "Kitfo",
    price: 129,
    category: "food",
  },
  {
    id: 3,
    name: "Tibs",
    price: 119,
    category: "food",
  },
  {
    id: 4,
    name: "Shere",
    price: 435,
    category: "meat",
  },
  {
    id: 5,
    name: "Misere",
    price: 632,
    category: "vegetarian",
  },
  {
    id: 6,
    name: "Gomen",
    price: 23,
    category: "vegetarian",
  },
  {
    id: 7,
    name: "Beyaynet",
    price: 32,
    category: "food",
  },
];

export default function DishList({ category }) {
  const filteredDishes =
    category === "all"
      ? Dishes
      : Dishes.filter(
          (dish) => dish.category === category
        );

  return (
    <div>
      <h2>Dishes</h2>

      {filteredDishes.map((dish) => (
        <div key={dish.id}>
         
            <h3>
              {dish.id}. {dish.name}
            </h3>
       
          <p>Price:{dish.price.toFixed(2)}ETB</p>
        </div>
      ))}
    </div>
  );
}