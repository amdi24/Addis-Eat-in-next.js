import NotFound from "@/app/NotFound";
const Dishes = [
  {
    id: 1,
    name: "Doro Wot",
    price: 109,
  },
  {
    id: 2,
    name: "Kitfo",
    price: 129,
  },
  {
    id: 3,
    name: "Tibs",
    price: 119,
  },
   {
    id: 4,
    name: "Shere",
    price: 435,
  },
    {
    id: 5,
    name: "Misere",
    price: 632,
  },
  {
    id: 6,
    name: "Gomen",
    price: 23,
  },
   {
    id: 7,
    name: "Beyaynet",
    price: 32,
  },
];

export default async function DishPage({params}){
  const {id} = await params;
  const Dish = Dishes.find((dish)=>dish.id === Number(id));
  if (!Dish){
    NotFound();
  }
  return(
    <div>
      <main>
        <h1>{Dish.name}</h1>
        <p>Price:{Dish.price}ETB</p>
      </main>
    </div>
  )
}